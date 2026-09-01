---
title: "[공] 자체 호스팅 환경 — 우리 서버에서 Claude Code 클라우드 세션 돌리기"
description: "회사 내부 인프라에서 Claude Code 클라우드 세션을 실행하는 Self-hosted Environments 완전 가이드 — 보안 규정이 엄격한 팀을 위한 선택"
tags: ["자동생성", "고급", "기업", "self-hosted", "자체호스팅", "엔터프라이즈", "보안", "인프라", "클라우드세션"]
category: "advanced"
order: 28
lastUpdated: "2026-09-01"
---

<div class="note-star">

★ **출처** — 공식 문서 [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) `[공식]`  
★ **도입 버전** — v2.1.224 (2026-08-07, W32)  
★ **대상 플랜** — Team, Enterprise (퍼블릭 베타)

</div>

---

## 이게 뭔가요?

> 🏦 **비유**: 은행 ATM을 외부 업체에 맡기는 대신 은행 건물 안에 직접 설치하는 것과 같아요. 고객(클로드)은 똑같은 서비스를 쓰지만, 실제 처리는 **우리 건물 안**에서 이루어집니다.

**Self-hosted Environments(자체 호스팅 환경)**는 Claude Code 클라우드 세션을 **회사 내부 서버나 컨테이너에서** 실행할 수 있는 기능이에요.

### 왜 필요한가요?

| 상황 | 일반 클라우드 세션 | 자체 호스팅 |
|---|---|---|
| 외부 인터넷 차단 환경 | ❌ 사용 불가 | ✅ 가능 |
| 내부 DB, API 접근 필요 | ❌ 접근 불가 | ✅ 내부망 직접 접근 |
| 보안 규정 (ISMS, ISO 등) | ⚠️ 검토 필요 | ✅ 데이터 외부 미전송 |
| 코드가 회사 외부로 나가면 안 됨 | ❌ | ✅ 코드 내부 유지 |

---

## 동작 방식

```
사용자 (웹/모바일/Desktop) ──────────────────────────────────┐
                                                              ▼
claude.ai ─── "자체 호스팅 환경 선택" ──→ 회사 서버(Runner)
                                           ├─ 내부 DB 접근 가능
                                           ├─ 내부 API 접근 가능
                                           └─ 코드 외부 미전송
```

사용자가 세션을 시작할 때 **자체 호스팅 환경을 선택**하면, 그 세션은 회사 내부 러너에서 실행돼요.

---

## 설정 방법

### 단계 1: 어드민이 기능 활성화

Owner 계정으로 [어드민 설정](https://claude.ai/admin-settings/cloud-environments)에서 **"Allow self-hosted environments"** 를 켜요.

---

### 단계 2: 러너 설치 및 환경 생성

```bash
# 환경 생성 + 러너 시작 (가이드 방식)
claude self-hosted-runner setup
```

안내에 따라 진행하면 환경이 생성되고 러너가 등록돼요.

어드민 설정 페이지에서 `Healthy` 상태가 표시되면 완료입니다.

---

### 단계 3: 사용자가 환경 선택

세션을 시작할 때 (claude.ai, 모바일 앱, Desktop 앱, `claude --cloud` 명령어에서) 자체 호스팅 환경을 선택하면 해당 세션이 내부 서버에서 실행돼요.

---

## 러너 운영 옵션

### 종료 유예 설정 (W34 추가)

SIGTERM 신호를 받아도 연결된 세션이 있을 때는 바로 종료하지 않고 대기할 수 있어요.

```bash
# 최대 30분 유예 후 종료
claude self-hosted-runner --defer-shutdown-max-min 30
```

### 이그레스 프록시 인증 (W34 추가)

외부 트래픽이 회사 프록시를 거쳐야 할 때:

```bash
# 명령어로 인증 헤더 제공
claude self-hosted-runner --proxy-authorization-command "generate-auth-header"

# 파일로 제공
claude self-hosted-runner --proxy-authorization-file /path/to/auth-file
```

---

## 관리자 페이지에서 확인할 수 있는 정보

| 항목 | 설명 |
|---|---|
| 환경 이름 | 예: `linux-dev`, `macos-prod` |
| 상태 | Healthy / Offline 등 |
| 활성 세션 수 | 현재 이 환경에서 실행 중인 세션 수 |

---

## 주의사항

> ⚠️ **베타 기간** — 현재 퍼블릭 베타 단계예요. 기업 사용 전 공식 문서와 Anthropic 팀에 최신 상태 확인을 권장합니다.

> ℹ️ **지원 플랜** — Team 및 Enterprise 플랜에서만 사용 가능해요.

---

## 일반 클라우드 환경과 비교

| 항목 | 일반 클라우드 세션 | 자체 호스팅 세션 |
|---|---|---|
| 실행 위치 | Anthropic 클라우드 | 우리 회사 서버 |
| 내부망 접근 | ❌ | ✅ |
| 설정 복잡도 | 낮음 | 높음 (초기 설정 필요) |
| 비용 | 플랜 포함 | 인프라 비용 추가 |
| 규정 준수 | 케이스 바이 케이스 | 높은 통제 가능 |

---

*공식 출처: [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) — 공식 발표 기준*
