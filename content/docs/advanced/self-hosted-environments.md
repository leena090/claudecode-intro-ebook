---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 클라우드 세션 실행하기"
description: "Claude Code W32(2026-08) 신기능: Team/Enterprise 플랜에서 자체 서버를 클라우드 세션 실행 환경으로 등록하는 Self-hosted Environments 기능 안내"
tags: ["자동생성", "자체호스팅", "엔터프라이즈", "셀프호스팅", "클라우드세션", "보안"]
category: "advanced"
order: 28
lastUpdated: "2026-09-13"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/self-hosted-environments">공식 문서 self-hosted-environments</a> 및 What's New W32(2026-08-07) 내용 기반입니다.
<br />★ Team/Enterprise 플랜 전용 기능입니다.
</div>

## 자체 호스팅 환경이란?

claude.ai, 모바일 앱, Desktop 앱의 **클라우드 세션을 우리 회사 서버에서 실행**할 수 있는 기능이에요.

> 🏢 **비유로 설명하면**: 기존에는 Claude Code 클라우드 세션이 항상 "Anthropic 임대 사무실"에서만 돌아갔어요. 이제는 **우리 회사 사무실(서버)** 안에서도 돌릴 수 있어요. 회사 내부 데이터베이스나 사내 API에 바로 접근할 수 있게 되는 거죠.

- **공개 베타**: Team, Enterprise 플랜
- **출시**: 2026년 8월 (v2.1.224)

---

## 왜 필요한가요?

| 문제 상황 | 해결 방법 |
|---|---|
| 사내 내부 API에 외부에서 접근 불가 | 회사 서버에서 세션 실행 → 사내망 접근 가능 |
| 민감한 코드가 외부 서버로 전송되는 것이 걱정됨 | 자체 인프라 안에서만 실행 |
| 사내 데이터베이스에 직접 접속해야 함 | 내부 네트워크에서 세션 실행 |
| 컴플라이언스 요건 (데이터 국내 보관 등) | 자사 서버 선택 가능 |

---

## 설정 방법 (요약)

### 1단계: 관리자 설정 켜기

**Owner 권한** 계정으로 claude.ai 접속:
```
claude.ai/admin-settings/cloud-environments
→ "Allow self-hosted environments" 활성화
```

### 2단계: 러너 서버 설정 및 등록

러너로 쓸 서버(또는 컨테이너)에서:

```bash
# 가이드 설치 (처음 한 번)
claude self-hosted-runner setup
```

설치 마법사가 환경 생성부터 러너 등록까지 안내해줘요.

### 3단계: 상태 확인

admin settings에서 등록한 환경이 **Healthy** 상태로 보이면 완료!

---

## 사용 방법

설정이 완료되면, 팀원들이 세션을 시작할 때 환경을 선택할 수 있어요:

- claude.ai 웹
- Claude 모바일 앱
- Claude Desktop 앱
- `claude --cloud` 명령어

"어떤 환경에서 실행할까요?" 화면에서 우리 회사 환경을 선택하면, 해당 세션이 자사 서버에서 실행돼요.

---

## 주요 특징

| 특징 | 설명 |
|---|---|
| 내부 네트워크 접근 | 세션이 사내망 안에서 실행됨 |
| 여러 환경 관리 | `linux-dev`, `macos-prod` 등 환경 이름 직접 지정 |
| 세션 수 모니터링 | admin settings에서 활성 세션 수 확인 |
| 자동 복구 | 러너 비정상 종료 시 자동 재등록 |

### W34에서 추가된 고급 옵션

```bash
# 드레인(종료) 유예 시간 설정 (신규 연결 차단 후 기존 세션 유지)
claude self-hosted-runner --defer-shutdown-max-min 30

# 이그레스 프록시 인증 (아웃바운드 프록시가 있는 경우)
claude self-hosted-runner --proxy-authorization-command "my-auth-cmd"
```

---

## 요구 사항

| 항목 | 조건 |
|---|---|
| 플랜 | Team 또는 Enterprise |
| 권한 | Owner가 기능 활성화 |
| Claude Code 버전 | v2.1.224 이상 |
| 서버 OS | macOS, Linux (컨테이너 포함) |

---

## 비교: 클라우드 환경 vs 자체 호스팅

| | 기본 클라우드 환경 | 자체 호스팅 환경 |
|---|---|---|
| 실행 위치 | Anthropic/클라우드 서버 | 우리 회사 서버 |
| 사내망 접근 | ❌ | ✅ |
| 설정 필요 | ❌ (바로 사용) | ✅ (초기 설정) |
| 데이터 흐름 | 외부 서버 경유 | 사내 인프라 |
| 지원 플랜 | Pro, Max, Team, Enterprise | Team, Enterprise |

---

<div class="tip-box">
💡 <strong>언제 쓰면 좋을까요?</strong> 사내 Jira, 사내 Git 서버, 내부 데이터베이스 등에 Claude Code 세션이 직접 접근해야 할 때 특히 유용해요. 특히 금융, 의료, 공공기관처럼 데이터 보안 요건이 엄격한 조직에서 활용을 검토해 보세요.
</div>
