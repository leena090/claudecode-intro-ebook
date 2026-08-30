---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 Claude Code 클라우드 세션 돌리기"
description: "Team/Enterprise에서 사용 가능한 자체 호스팅 환경으로, 조직 내부 인프라에 Claude Code 클라우드 세션을 운영할 수 있어요. 내부망 서비스에도 접근 가능"
tags: ["자동생성", "자체호스팅", "self-hosted", "enterprise", "팀플랜", "인프라", "advanced"]
category: "advanced"
order: 27
lastUpdated: "2026-08-30"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ <strong>[공]</strong> W32 발표: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">whats-new/2026-w32</a> (Aug 3–7, 2026)
<br />★ <strong>Team / Enterprise 플랜</strong> 공개 베타. 관리자(Owner) 권한 필요.
</div>

## 자체 호스팅 환경이란?

**자체 호스팅 환경**(Self-hosted Environments, 셀프 호스티드 인바이런먼트)은 Claude Code의 클라우드 세션을 **Anthropic 서버가 아닌 우리 조직의 서버에서** 실행하는 기능이에요.

> 🍱 **비유로 설명하면**: 기존 Claude Code 웹/앱 세션은 마치 "공용 PC방에서 작업하는 것"이었어요. 데이터가 PC방 서버를 거쳐가죠. **자체 호스팅 환경**은 **우리 회사 내부 PC에서 작업하는 것**이에요. 회사 내부 자료에 바로 접근할 수 있고, 외부에 데이터가 나가지 않아요.

---

## 왜 필요한가요?

| 상황 | 기존 방식 | 자체 호스팅 |
|---|---|---|
| 내부망 API 접근 | ❌ 불가 | ✅ 가능 |
| 사내 데이터베이스 연결 | ❌ 불가 | ✅ 가능 |
| 데이터 외부 전송 우려 | 있음 | 없음 (내부에서만 처리) |
| 컴플라이언스(규정 준수) | 제한 있음 | 자체 인프라에서 통제 |

---

## 어떻게 작동하나요?

### 기본 구조

```
사용자 (앱/웹/모바일)
    ↓
Anthropic 인증 & 조율
    ↓
우리 조직의 러너(Runner) 서버
    ↓
내부망 서비스 (DB, API, 코드 서버 등)
```

1. **러너**(Runner)를 우리 서버나 컨테이너에서 실행해요
2. 사용자가 claude.ai, 앱, `claude --cloud`에서 환경을 선택해요
3. 세션이 우리 서버에서 실행돼요 — 내부 서비스에 접근 가능!

---

## 설정 방법

### 1단계: 관리자 설정 활성화

조직 Owner가 [관리자 설정](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments**를 켜요.

### 2단계: 러너 설정 및 실행

```bash
# 안내형 설정 (환경 생성 + 러너 시작을 같이 해줘요)
claude self-hosted-runner setup

# 또는 직접 실행 (이미 설정됐을 때)
claude self-hosted-runner
```

### 3단계: 상태 확인

러너가 정상 등록되면 관리자 콘솔에서 **Healthy**(정상) 상태로 표시돼요.

---

## 고급 옵션 (W34 추가)

W34에서 셀프 호스팅 러너에 새 옵션들이 추가됐어요:

| 옵션 | 설명 |
|---|---|
| `--defer-shutdown-max-min` | SIGTERM 신호 후 N분 동안 연결된 세션 유지 후 종료 |
| `--proxy-authorization-command` | Egress 프록시 인증 헤더를 동적으로 생성 |
| `--proxy-authorization-file` | Egress 프록시 인증 헤더를 파일에서 읽음 |

```bash
# 예: 종료 신호 후 최대 5분 세션 유지
claude self-hosted-runner --defer-shutdown-max-min 5

# 예: 프록시 인증 명령어 지정
claude self-hosted-runner --proxy-authorization-command "get-proxy-token.sh"
```

---

## 사용 가능한 환경

| 플랜 | 가능 여부 |
|---|---|
| Pro | ❌ |
| Max | ❌ |
| **Team** | ✅ 공개 베타 |
| **Enterprise** | ✅ 공개 베타 |

---

## 관련 공식 문서

공식 문서가 여러 페이지로 구성돼 있어요:

| 문서 | 내용 |
|---|---|
| [self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments) | 개요 |
| [self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [self-hosted-environments-deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 설정 |
| [self-hosted-environments-configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 세부 설정 |
| [self-hosted-environments-testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [self-hosted-environments-reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | 레퍼런스 |
| [self-hosted-environments-identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증/신원 설정 |

---

## 이런 팀에 적합해요

- 🏥 **의료·금융·법률** — 외부 데이터 전송이 규정상 제한된 업종
- 🏢 **대기업** — 내부망 시스템에 Claude가 접근해야 하는 경우
- 🔒 **보안 민감 스타트업** — 코드와 데이터를 내부 인프라에서만 처리하고 싶을 때
- 🏭 **제조·산업** — 폐쇄망 환경에서 AI 코딩 도우미를 쓰고 싶을 때

<div class="note-star">
★ 셀프 호스팅 환경에서 실행되는 세션도 Claude의 모든 기능(에이전트, 멀티 세션, 워크트리 등)을 그대로 사용할 수 있어요.
<br />★ 공개 베타이므로 기능이 계속 추가될 수 있어요. [공식 발표 기준]
</div>
