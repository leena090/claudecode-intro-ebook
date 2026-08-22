---
title: "[공] 자체 호스팅 환경 (Self-hosted Environments) — 회사 인프라에서 클라우드 세션 실행"
description: "Claude Code 클라우드 세션을 회사 서버에서 직접 실행하는 자체 호스팅 환경의 개념, 설정 방법, 활용 사례를 한국어로 정리합니다."
tags: ["자동생성", "self-hosted", "enterprise", "team", "클라우드환경", "보안"]
category: "advanced"
order: 27
lastUpdated: "2026-08-22"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com 공식 문서</a>를 바탕으로 정리했습니다.
<br />★ 자체 호스팅 환경은 <strong>Team·Enterprise 플랜 공개 베타</strong> 기능입니다 (2026-08-03 출시).
</div>

## 자체 호스팅 환경이란?

**자체 호스팅 환경(Self-hosted Environments)**은 Claude Code의 클라우드 세션을 Anthropic 서버 대신 **회사 내부 서버나 컨테이너**에서 실행하는 기능이에요.

> 🏭 **비유로 설명하면**: 커피숍(Anthropic 클라우드)이 아닌 **회사 구내식당(사내 서버)**에서 Claude가 일한다고 생각하세요. 주변에 회사 내부 자료, 보안 네트워크, 내부 API가 모두 있는 환경에서 작업합니다.

---

## 왜 필요한가요?

일반 클라우드 세션에서는 이런 것들이 불가능해요:

- ❌ 사내 데이터베이스에 직접 접근
- ❌ VPN으로만 열리는 내부 API 호출
- ❌ 보안 정책상 외부 서버로 코드 전송 불가
- ❌ 온프레미스 깃 서버(GitLab 등) 연동

자체 호스팅 환경에서는:

- ✅ 회사 내부 네트워크 서비스에 직접 접근
- ✅ 데이터가 회사 인프라 안에 머뭄
- ✅ 보안·컴플라이언스 요구 충족
- ✅ claude.ai, 모바일, 데스크톱 앱 등 모든 인터페이스에서 사용 가능

---

## 지원 플랜 및 요구 조건

| 항목 | 내용 |
|---|---|
| **플랜** | Team, Enterprise (공개 베타) |
| **권한** | 관리자(Owner) 권한으로 설정 |
| **CLI 버전** | v2.1.224 이상 |
| **상태** | 공개 베타 (2026-08-03~) |

---

## 설정 방법

### 1단계: 관리자 설정에서 기능 활성화

`claude.ai/admin-settings/cloud-environments` 접속 → **Allow self-hosted environments** 켜기

### 2단계: 러너 설정 마법사 실행

```bash
# Owner 권한으로 로그인한 상태에서 실행
claude self-hosted-runner setup
```

안내에 따라 진행하면:
- 환경 이름 설정 (예: `linux-dev`, `macos-prod`)
- 러너가 시작되고 관리자 페이지에 등록됨

### 3단계: 상태 확인

관리자 설정 페이지에서 환경이 **Healthy** 상태로 표시되면 준비 완료!

---

## 사용자가 자체 호스팅 환경을 선택하는 방법

세션을 시작할 때 환경 선택 화면에서 조직의 자체 호스팅 환경을 고를 수 있어요:

| 접속 경로 | 방법 |
|---|---|
| claude.ai | 세션 시작 화면에서 환경 선택 |
| 모바일 앱 | 세션 시작 → 환경 선택 |
| 데스크톱 앱 | 세션 시작 → 환경 선택 |
| CLI | `claude --cloud` → 환경 선택 |

---

## 고급 설정

### 재시작 유예 시간 (Graceful Shutdown)

```bash
# SIGTERM 후 N분간 기존 세션 유지
claude self-hosted-runner --defer-shutdown-max-min 10
```

### 이그레스 프록시 인증

```bash
# 외부 프록시 인증 헤더를 명령어로 주입
claude self-hosted-runner --proxy-authorization-command "get-proxy-token.sh"

# 또는 파일에서 읽기
claude self-hosted-runner --proxy-authorization-file /etc/proxy-auth.txt
```

---

## 자체 호스팅 vs 클라우드 환경 비교

| | Anthropic 클라우드 | 자체 호스팅 |
|---|---|---|
| **데이터 위치** | Anthropic 서버 | 회사 인프라 |
| **내부망 접근** | ❌ | ✅ |
| **설정 복잡도** | 없음 (즉시 사용) | 관리자 설정 필요 |
| **대상 플랜** | 모든 플랜 | Team, Enterprise |
| **지원 상태** | GA (일반 출시) | 공개 베타 |

---

## 관련 공식 문서

- [Self-hosted environments 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [설정 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference)
- [클라우드 환경 개요](https://code.claude.com/docs/en/cloud-environments)

---

<div class="tip-box">
💡 <strong>중소기업도 쓸 수 있나요?</strong><br/>
Team 플랜부터 가능하므로 중소기업도 사용할 수 있어요. 다만, 러너를 실행할 서버나 컨테이너 인프라가 필요합니다. 간단히는 회사 서버 한 대에 <code>claude self-hosted-runner</code>를 실행하는 것으로 시작할 수 있습니다 (공식 발표 기준).
</div>
