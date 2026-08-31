---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 Claude Code 클라우드 세션 돌리기"
description: "Team/Enterprise 플랜에서 Claude Code 클라우드 세션을 회사 자체 인프라에서 실행하는 Self-hosted Environments 기능 — 설정, 보안, 활용 방법 정리"
tags: ["고급", "자체호스팅", "셀프호스팅", "self-hosted", "Enterprise", "Team", "클라우드", "자동생성"]
category: "advanced"
order: 12
lastUpdated: "2026-08-31"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 공식 문서 <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>를 바탕으로 합니다.
<br />★ <strong>Team 또는 Enterprise 플랜 + 조직 Owner 권한</strong>이 필요합니다.
<br />★ W32 (2026-08-03~07) 주간 업데이트에서 공개 베타(Public Beta)로 출시됐습니다.
</div>

## 자체 호스팅 환경이 뭔가요?

Claude Code의 클라우드 세션을 **Anthropic 서버 대신 우리 회사 서버에서 실행**하는 기능이에요.

> 🍱 **비유로 설명하면**: 지금까지 Claude Code 클라우드 세션은 무조건 Anthropic 건물(서버)에 들어가서 일했어요. 그런데 기업 보안 정책상 중요한 코드를 외부 건물에 반입하기 어려울 수 있잖아요. 자체 호스팅 환경은 **클로드를 우리 회사 건물 안으로 불러와서** 내부 시스템에 접근하면서 일하게 하는 거예요.

---

## 왜 필요한가요?

| 상황 | 자체 호스팅 없이 | **자체 호스팅으로** |
|---|---|---|
| 내부 API 서버 접근 | ❌ 외부 접근 불가 | ✅ 내부망에서 직접 접근 |
| 사내 DB 연결 | ❌ 방화벽 차단 | ✅ 내부 네트워크 활용 |
| 데이터 보안 정책 | ❓ 외부 서버 통과 | ✅ 사내 인프라만 사용 |
| 컴플라이언스 요구 | ❓ 불확실 | ✅ 자체 인프라 통제 |

---

## 지원 플랜

| 플랜 | 사용 가능 여부 |
|---|---|
| **Pro / Max** | ❌ |
| **Team** | ✅ (Public Beta) |
| **Enterprise** | ✅ (Public Beta) |

---

## 초기 설정 방법

### 1단계: 관리자 설정에서 활성화

조직 Owner가 [admin settings → cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **"Allow self-hosted environments"**를 켜야 해요.

### 2단계: 환경과 러너 생성

Owner로 로그인한 상태에서 아래 명령어를 실행하면 **가이드 설정 과정**이 시작돼요.

```bash
claude self-hosted-runner setup
```

이 명령어 하나가:
1. 자체 호스팅 환경(Environment)을 생성하고
2. 해당 환경에 연결된 러너(Runner)를 시작해줘요.

### 3단계: 상태 확인

관리자 설정 페이지에서 환경이 **"Healthy"** 상태로 나타나면 설정 완료!

```
admin settings → cloud-environments
→ 환경명 "linux-dev": Healthy (활성 세션: 3개)
```

---

## 사용자가 자체 호스팅 환경에서 세션 시작하기

설정이 완료되면 팀원들이 세션 시작 시 **자체 호스팅 환경을 선택**할 수 있어요.

세션을 시작하는 방법들:
- `claude.ai` 웹
- 모바일 앱 (Code 탭)
- Claude Code Desktop 앱
- 터미널에서 `claude --cloud` 실행

환경 선택 화면에서 조직이 설정한 환경(예: `linux-dev`, `macos-prod`)이 나타나요.

---

## 기술적으로 어떻게 동작하나요?

```
사용자가 세션 시작
    ↓
Anthropic이 세션 라우팅
    ↓
우리 회사 서버의 러너(Runner)가 세션 수신
    ↓
클로드가 우리 내부 네트워크 안에서 실행
    ↓ (내부 서비스 직접 접근 가능)
작업 완료
```

> 💡 **LLM 추론은 여전히 Anthropic에서**: 자체 호스팅 환경은 Claude Code **실행 환경**을 내부로 가져오는 거예요. 모델 추론 자체는 Anthropic API를 사용해요.

---

## 고급 옵션

러너를 운영할 때 쓸 수 있는 고급 옵션들:

```bash
# SIGTERM 이후에도 기존 세션이 계속되도록 (최대 N분)
claude self-hosted-runner --defer-shutdown-max-min 30

# 이그레스 프록시 인증 (신선한 헤더 필요 시)
claude self-hosted-runner --proxy-authorization-command "내_명령어"
# 또는
claude self-hosted-runner --proxy-authorization-file /path/to/auth-file
```

---

## 실전 활용 시나리오

### 시나리오 1: 사내 레거시 시스템 마이그레이션

```text
# 자체 호스팅 환경에서 세션 시작
> 내부 ERP 시스템(192.168.1.100:8080)에 접속해서
  레거시 API 문서 분석하고 마이그레이션 계획 세워줘
```

외부 클라우드에서는 내부 IP에 접근 불가. 자체 호스팅 환경에서만 가능해요.

### 시나리오 2: 보안 코드 리뷰

```text
# 민감한 결제 시스템 코드를 내부 환경에서만 분석
> 이 결제 모듈 보안 취약점 스캔해줘
  (코드가 외부 서버로 나가지 않아야 함)
```

---

<div class="note-star">
★ 공식 빠른 시작: <a href="https://code.claude.com/docs/en/self-hosted-environments-quickstart">code.claude.com/docs/en/self-hosted-environments-quickstart</a>
<br />★ 배포 가이드: <a href="https://code.claude.com/docs/en/self-hosted-environments-deploy">code.claude.com/docs/en/self-hosted-environments-deploy</a>
<br />★ 설정 레퍼런스: <a href="https://code.claude.com/docs/en/self-hosted-environments-configuration">code.claude.com/docs/en/self-hosted-environments-configuration</a>
<br />★ 관리자 설정: <a href="https://claude.ai/admin-settings/cloud-environments">claude.ai/admin-settings/cloud-environments</a>
</div>
