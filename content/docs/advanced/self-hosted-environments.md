---
title: "[공] Self-hosted Environments — 내 서버에서 클라우드 세션 실행하기"
description: "회사 내부 네트워크에서 Claude Code 클라우드 세션을 실행하는 Self-hosted Environments(자체 호스팅 환경)를 설정하는 방법을 알아봐요."
tags: ["자동생성", "self-hosted", "enterprise", "보안", "인프라", "클라우드 세션", "Team", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-11-01"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong> — code.claude.com/docs/en/self-hosted-environments.md 기반이에요.<br />
★ Team·Enterprise 플랜, 퍼블릭 베타 (v2.1.224 이상, 2026-08 출시)
</div>

## Self-hosted Environments란?

Claude Code의 클라우드 세션(`claude --cloud`)을 **Anthropic 서버가 아닌 내 회사 서버**에서 실행하는 기능이에요.

> 🍱 **비유로 설명하면**: 보통 클라우드 세션은 Anthropic의 데이터센터에서 돌아가는 임시 직원과 일하는 것과 같아요. Self-hosted는 내 회사 사무실에 그 직원을 데려와서 내부 네트워크 안에서 일하게 하는 거예요.

---

## 왜 필요한가요?

### ✅ 이럴 때 필수예요

| 상황 | 이유 |
|------|------|
| 금융·의료·법무 데이터 처리 | 외부 서버로 데이터 전송 불가 |
| 내부 API 호출 필요 | 인트라넷 서비스에 접근 |
| 컴플라이언스 요구사항 | 데이터 레지던시(거주지) 규정 |
| VPN 뒤의 내부 도구 활용 | 공개 인터넷 접근 불가 서비스 |

---

## 설정 방법

### 1단계: 어드민 설정 (Owner 계정 필요)

Claude.ai 어드민 설정에서 Self-hosted Environments를 활성화해요.

1. [claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments) 접속
2. **Allow self-hosted environments** 토글 ON
3. 새 환경 생성 (이름·설명 입력)

### 2단계: 러너 실행

서버(macOS, Linux, Windows Server)에서 러너를 시작해요.

```bash
# 가이드 설정 (처음 한 번)
claude self-hosted-runner setup

# 이후 러너 시작
claude self-hosted-runner start
```

어드민 설정에서 환경이 **Healthy** 상태로 뜨면 성공이에요.

### 3단계: 사용자가 환경 선택

팀원이 Claude Code 세션을 시작할 때 환경을 고를 수 있어요:
- `claude.ai` 웹에서 세션 시작 시 환경 드롭다운 표시
- 모바일·데스크탑 앱에서도 선택 가능
- CLI: `claude --cloud --environment linux-dev`

---

## 어떻게 작동하나요?

```
사용자 → claude --cloud 선택
        ↓
    환경 선택 (내 회사 환경 선택)
        ↓
    Anthropic 서버가 세션 오케스트레이션
        ↓
    실제 코드 실행은 내 서버에서!
        ↓
    내부 네트워크 접근 가능 ✅
```

> 📌 **중요**: AI 모델(Claude) 자체는 여전히 Anthropic API를 통해 호출돼요. Self-hosted는 세션이 **실행되는 컨테이너** 환경을 의미해요.

---

## 관리 팁

### 여러 환경 운영

목적별로 다른 환경을 만들 수 있어요:

| 환경 이름 | 용도 |
|----------|------|
| `linux-dev` | 개발 서버 (빠른 접근) |
| `macos-prod` | 프로덕션 검증 환경 |
| `db-secure` | 데이터베이스 전용 (격리된 네트워크) |

### 모니터링

```bash
# 러너 상태 확인
claude self-hosted-runner status

# 활성 세션 수 확인 (어드민 대시보드)
```

---

## 공식 문서 링크

- [Self-hosted Environments 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart.md)
- [배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy.md)
- [설정 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference.md)

---

## 관련 글

- [Cloud Environments 기본](/docs/codeweb/claude-code-on-the-web)
- [보안 설정 가이드](/docs/advanced/sandbox-security)
- [w30-w37 업데이트 요약](/docs/next/whats-new-w30-w37)
