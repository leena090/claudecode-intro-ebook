---
title: "[공] 자체 호스팅 환경 — 우리 서버에서 클라우드 세션 돌리기"
description: "Team/Enterprise 플랜에서 자체 인프라에 Claude Code 클라우드 세션을 실행하는 Self-Hosted Environments 기능 설명"
tags: ["자동생성", "자체호스팅", "self-hosted", "enterprise", "team", "클라우드세션"]
category: "advanced"
order: 27
lastUpdated: "2026-09-08"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기반</strong> — <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>공개 베타</strong> — Team 및 Enterprise 플랜에서 사용 가능 (2026-08-03 W32 출시)<br />
★ 이 문서는 자동 업데이트 감시 에이전트가 생성했어요 (2026-09-08)
</div>

## 자체 호스팅 환경(Self-Hosted Environments)이란?

> 🍱 **비유로 설명하면**: 보통 클라우드 세션은 Anthropic 데이터센터라는 **외부 카페**에서 작업하는 거예요. 자체 호스팅 환경은 **우리 회사 사무실**에 세션 실행 서버를 두고, 여기서 클라우드 세션을 돌리는 거예요. 인터넷에 못 꺼내는 사내 데이터베이스나 내부 API에도 접근할 수 있어요.

Claude Code 클라우드 세션을 **조직 자체 인프라(서버, 컨테이너)**에서 실행하는 기능이에요.

---

## 왜 필요한가요?

일반 클라우드 세션은 Anthropic의 서버에서 실행돼요. 이 경우:
- 사내 전용 데이터베이스에 직접 접근 불가
- 방화벽 뒤 내부 서비스 이용 불가
- 보안 규정상 외부 클라우드 사용이 제한되는 경우 문제

**자체 호스팅 환경**을 사용하면:
- ✅ 세션이 **내부 네트워크 안에서** 실행
- ✅ 사내 DB, API, 서비스에 **직접 접근**
- ✅ 데이터가 자체 인프라를 벗어나지 않음
- ✅ 보안/컴플라이언스 요구사항 충족

---

## 설정 방법

### 1단계: Owner가 관리자 설정에서 활성화

```
claude.ai → 관리자 설정 → Cloud Environments
→ "Allow self-hosted environments" 활성화
```

### 2단계: 서버/컨테이너에 러너 설치 및 설정

```bash
# 대화형 설정 (처음 설정 시 권장)
claude self-hosted-runner setup
```

`setup` 명령이 단계별로 안내해줘요:
1. 환경 이름 설정
2. 러너 시작
3. 관리자 설정에서 **Healthy** 상태 확인

### 3단계: 사용자가 환경 선택

사용자가 세션을 시작할 때 자체 호스팅 환경을 선택할 수 있어요:
- `claude.ai`
- 모바일 앱 (Code 탭)
- Claude Code Desktop
- `claude --cloud` 명령어

---

## 러너 운영 (상세)

### 기본 실행

```bash
# 러너 시작
claude self-hosted-runner

# 설정과 함께 시작
claude self-hosted-runner setup
```

### 안전한 셧다운 (드레인)

```bash
# SIGTERM 후 최대 N분간 연결된 세션 유지
claude self-hosted-runner --defer-shutdown-max-min 30
```

> 🍱 **비유**: 카페 문 닫을 때 손님이 커피 다 마실 때까지 기다려주는 거예요.

### 이그레스 프록시 인증 (W34 추가)

```bash
# 프록시 인증 명령어 방식
claude self-hosted-runner --proxy-authorization-command "my-auth-script.sh"

# 파일 방식
claude self-hosted-runner --proxy-authorization-file /path/to/auth-file
```

---

## 어떤 환경에 설치할 수 있나요?

| 환경 | 지원 여부 |
|---|---|
| Linux 서버 (베어메탈) | ✅ |
| Linux 컨테이너 (Docker) | ✅ |
| macOS 서버 | ✅ (추정) |
| Windows | 확인 필요 |
| 클라우드 VM (AWS EC2, GCP 등) | ✅ |
| Kubernetes Pod | ✅ (추정) |

---

## 관리자 대시보드

관리자 설정 페이지에서 환경 목록과 상태를 볼 수 있어요:

```
환경 목록 예시:
┌─────────────────┬──────────┬───────────────┐
│ 환경 이름        │ 상태     │ 활성 세션 수   │
├─────────────────┼──────────┼───────────────┤
│ linux-dev       │ Healthy  │ 3             │
│ macos-prod      │ Healthy  │ 1             │
│ staging         │ Offline  │ 0             │
└─────────────────┴──────────┴───────────────┘
```

---

## 일반 클라우드 세션 vs 자체 호스팅 환경

| 비교 | 일반 클라우드 | 자체 호스팅 |
|---|---|---|
| **실행 위치** | Anthropic 서버 | 우리 회사 서버 |
| **내부 네트워크 접근** | ❌ | ✅ |
| **설정 필요** | 없음 | Owner 설정 + 러너 설치 |
| **플랜 조건** | Pro~Enterprise | **Team/Enterprise만** |
| **데이터 위치** | Anthropic 인프라 | 자체 인프라 |
| **보안/컴플라이언스** | Anthropic 정책 | 자체 정책 적용 가능 |

---

## 언제 써야 할까요?

### ✅ 이럴 때 필요해요
- 방화벽 뒤의 사내 DB를 직접 읽어야 할 때
- 데이터가 외부로 나가면 안 되는 보안 규정이 있을 때
- 내부 API/서비스에 Claude가 직접 접근해야 할 때
- 금융·의료·공공 등 규제 산업

### ❌ 이럴 때는 일반 클라우드가 충분해요
- 공개 GitHub 코드 작업
- 로컬 파일 편집 (Remote Control 활용)
- 인터넷 서비스와의 통합

---

## 관련 기능

| 기능 | 연관 |
|---|---|
| **Remote Control** | 내 로컬 머신에 원격 연결 (자체 서버 不필요) |
| **Cloud Environments** | 일반 클라우드 세션 (Anthropic 서버) |
| **자체 호스팅 환경** | **이 문서** — 자체 서버 운영 |

---

## 다음 단계

- **[공식 빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)** — 단계별 설정 가이드
- **[배포 설정](https://code.claude.com/docs/en/self-hosted-environments-deploy)** — 러너 배포 옵션
- **[보안 설정](https://code.claude.com/docs/en/self-hosted-environments-identity)** — 인증·접근 제어
- **[Claude Code on the Web](/docs/codeweb/codeweb-intro)** — 웹 기반 클라우드 세션 기본 개념
