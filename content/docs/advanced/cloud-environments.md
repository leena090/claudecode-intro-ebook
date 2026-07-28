---
title: "[공] 클라우드 환경 설정 — 웹 세션의 네트워크·패키지·비밀 설정하기"
description: "Claude Code 웹 세션(클라우드 세션)이 어떤 네트워크와 도구를 쓸지 직접 설정할 수 있어요. 환경변수 주입, 설치 스크립트, 접근 허용 도메인까지 한 번에 알아봅니다"
tags: ["자동생성", "클라우드환경", "웹세션", "네트워크설정", "셋업스크립트", "환경변수"]
category: "advanced"
order: 28
lastUpdated: "2026-07-28"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ 클라우드 세션(웹 세션)이 필요한 기능이에요 — Pro, Max, Team 사용자 리서치 프리뷰
</div>

## 이게 뭔가요?

**클라우드 환경(Cloud Environments)**은 claude.ai/code 웹 세션이 실행될 때 **"어떤 도구가 준비되어 있고, 어디에 접속할 수 있고, 어떤 값을 알고 시작하는지"** 를 미리 설정해두는 기능이에요.

> 🍱 **비유로 설명하면**: 새 알바생(Claude)이 출근 첫날에 받는 "업무 안내서"와 같아요. 어떤 도구를 써도 되는지, 어떤 창고(서버)에 드나들 수 있는지, 어떤 비밀번호를 알고 있는지를 미리 알려두는 거예요.

---

## 어디에 적용되나요?

클라우드 환경 설정은 아래 모든 곳에서 시작하는 세션에 적용돼요:

| 사용 방법 | 적용 여부 |
|---|---|
| claude.ai/code 웹 | ✅ |
| 터미널 `claude --cloud` | ✅ |
| Claude Tag (슬랙) | ✅ |
| 루틴 (자동 스케줄) | ✅ |
| Claude 모바일 앱 | ✅ |
| Claude 데스크톱 앱 | ✅ |
| 내 컴퓨터 로컬 세션 | ❌ (Remote Control은 별도) |

---

## 기본 환경 (Default)

처음 웹 세션을 시작하면 **Default** 환경이 자동으로 만들어져요. 기본 설정은:

- 🌐 **네트워크**: npm, PyPI, GitHub 등 주요 패키지 레지스트리만 허용 (Trusted)
- 📦 **사전 설치 도구**: Python, Node.js, Ruby, Go, Rust, Docker, PostgreSQL 등
- ⚙️ **환경변수/스크립트**: 없음 (필요하면 직접 추가)

---

## 환경 만들고 편집하기

### 환경 선택기 열기

[claude.ai/code](https://claude.ai/code) 메시지 입력창 위의 **구름 모양 아이콘**을 클릭하면 환경 선택기가 열려요.

### 새 환경 만들기

**Add cloud environment** 선택 → 이름, 네트워크 접근, 환경변수, 셋업 스크립트 입력 → 생성

---

## 네트워크 접근 수준

| 수준 | 한글 설명 | 허용 범위 |
|---|---|---|
| **None** | 완전 차단 | 인터넷 접속 불가 |
| **Trusted** | 기본 (권장) | 패키지 레지스트리, GitHub 등 주요 도메인만 |
| **Full** | 전부 허용 | 모든 도메인 |
| **Custom** | 직접 지정 | 내가 등록한 도메인만 (또는 Trusted 포함) |

### 특정 도메인 추가하기 (Custom)

내부 서버나 특수 API에 접근해야 한다면 Custom을 선택하고 도메인을 추가해요:

```
api.example.com
*.internal.example.com
registry.example.com
```

`*.` 으로 시작하면 모든 서브도메인도 허용돼요.

<div class="note-star">
★ GitHub 관련 작업은 별도 프록시를 통해 처리돼요. 이 네트워크 설정과 별개로 항상 GitHub에 접속할 수 있어요.
</div>

---

## 환경변수 설정하기

세션이 시작할 때 자동으로 주입될 값들을 `.env` 형식으로 입력해요:

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

**⚠️ 보안 주의**: 환경변수는 이 환경을 사용하는 모든 사람이 볼 수 있어요. **API 키나 비밀번호는 넣지 마세요.**

---

## 셋업 스크립트 (Setup Script)

세션이 시작하기 **전**에 자동으로 실행되는 Bash 스크립트예요. 미리 설치해야 할 도구가 있을 때 사용해요.

### 예시: GitHub CLI 설치

```bash
#!/bin/bash
apt update && apt install -y gh
```

### 셋업 스크립트 주의사항

| 조건 | 내용 |
|---|---|
| **필수** | 스크립트가 오류 없이 종료(exit 0)되어야 해요 |
| **시간 제한** | 약 5분 이내로 완료되어야 해요 |
| **네트워크 필요** | 패키지 설치는 Trusted 이상 접근이 필요해요 |

실패해도 세션을 멈추지 않으려면 오류 허용 처리:
```bash
apt install -y gh || true
```

### 환경 캐싱 (속도 최적화)

셋업 스크립트는 **처음 한 번만** 실행되고, 그 결과가 저장(캐싱)돼요. 이후 세션은 저장된 상태에서 빠르게 시작해요.

| 캐시에 유지되는 것 | 캐시에서 사라지는 것 |
|---|---|
| 설치한 패키지 | 실행 중이던 서비스 |
| Docker 이미지 | DB 데이터 |
| 저장한 파일 | 실행 중인 프로세스 |

약 7일 후 또는 설정 변경 시 캐시가 갱신되어 스크립트가 다시 실행돼요.

---

## 사전 설치된 도구 목록

클라우드 세션에는 아래 도구들이 미리 준비돼 있어요:

| 분류 | 포함 내용 |
|---|---|
| **Python** | Python 3.x, pip, pytest, black, ruff |
| **Node.js** | Node 20/21/22, npm, yarn, pnpm |
| **Ruby** | 3.1~3.3, gem, bundler |
| **Go** | 최신 안정 버전 |
| **Rust** | rustc, cargo |
| **Java** | OpenJDK 21, Maven, Gradle |
| **Docker** | docker, docker compose |
| **데이터베이스** | PostgreSQL 16, Redis 7 (설치는 됐지만 실행은 직접 요청) |
| **유틸리티** | git, jq, ripgrep, tmux, vim |

---

## 클라우드 세션 환경 vs. 로컬 환경 비교

> 궁금한 점: "내 CLAUDE.md 설정이 클라우드 세션에서도 적용되나요?"

| 항목 | 클라우드 세션 |
|---|---|
| 저장소의 `CLAUDE.md` | ✅ 적용 (클론된 저장소에 포함) |
| 저장소의 `.claude/settings.json` 훅 | ✅ 적용 |
| 저장소의 `.mcp.json` MCP 서버 | ✅ 적용 |
| 내 컴퓨터 `~/.claude/CLAUDE.md` | ❌ 미적용 (내 컴퓨터에만 있음) |
| `claude mcp add`로 로컬에 추가한 서버 | ❌ 미적용 (저장소에 커밋해야 함) |
| API 키·자격증명 | ❌ 미적용 (아직 전용 시크릿 저장소 없음) |

<div class="note-star">
★ 클라우드 세션에 설정을 넘기려면 저장소에 커밋하는 것이 원칙이에요.
</div>

---

## 팀/기업 공유 환경

Team·Enterprise 플랜 관리자는 **모든 팀원이 같은 환경 설정을 쓰도록** 공유 환경을 만들 수 있어요.

- 팀원 환경 선택기에 공유 환경이 자동으로 나타나요
- 관리자는 [claude.ai/admin-settings](https://claude.ai/admin-settings) → Cloud environments에서 관리
- Claude Tag(슬랙 채널) 세션도 공유 환경을 사용해요

---

## 세션 리소스 한도 (참고용)

| 항목 | 한도 |
|---|---|
| CPU | 약 4 vCPU |
| 메모리 | 약 16 GB |
| 디스크 | 약 30 GB |

더 큰 리소스가 필요하면 **Remote Control**로 내 컴퓨터에서 실행하는 방법을 사용할 수 있어요.
