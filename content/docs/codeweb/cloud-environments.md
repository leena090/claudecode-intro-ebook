---
title: "[공] 클라우드 환경 설정하기 — 웹 Claude Code 작업실 꾸미기"
description: "Claude Code 웹 세션의 네트워크 접근, 환경변수, 설정 스크립트를 내 프로젝트에 맞게 구성하는 방법을 안내합니다"
tags: ["자동생성", "클라우드환경", "웹세션", "환경설정", "네트워크", "설정스크립트"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-02"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ 현재 Pro · Max · Team · Enterprise 프리미엄 시트 사용자 대상 리서치 프리뷰
</div>

## 클라우드 환경이 뭐예요?

[웹에서 Claude Code](./codeweb-intro)를 사용하면, 클로드는 **클라우드 환경(cloud environment)** 이라는 전용 작업 공간 안에서 일해요. 내 컴퓨터가 아닌 Anthropic의 서버 어딘가에 생성된 임시 방인 셈이죠.

> 🍳 **비유로 설명하면**: 클라우드 환경은 **클로드 전용 작업실**이에요. 기본 세팅만으로도 바로 코딩을 시작할 수 있지만, 내 프로젝트에 필요한 도구를 미리 설치해두거나 환경변수를 세팅해두면 훨씬 편하죠.

이 환경 설정은 웹뿐 아니라 아래 모든 곳에서 공유돼요:
- `claude.ai/code` (웹)
- `claude --cloud` (터미널)
- Claude Tag (슬랙에서 Claude)
- 루틴(Routines — 자동 반복 작업)
- Claude 모바일 앱
- Claude 데스크톱 앱

---

## 기본 환경(Default)은 어떻게 생겼나요?

처음 시작하면 **Default(기본)** 환경이 자동으로 만들어져요.

| 항목 | 기본값 |
|---|---|
| **네트워크 접근** | Trusted — npm, PyPI, GitHub 등 주요 패키지 저장소 허용 |
| **환경 변수** | 없음 |
| **설정 스크립트** | 없음 |
| **운영체제** | Ubuntu 24.04 |
| **기본 언어/도구** | 아래 표 참조 |

### 기본으로 설치된 도구들

매 세션마다 새 VM(가상 머신)이 시작되며, 아래 도구들이 이미 들어있어요:

| 분류 | 포함된 도구 |
|---|---|
| 🐍 **Python** | Python 3.x, pip, pytest, black, ruff, mypy, poetry, uv |
| 🟩 **Node.js** | 20 · 21 · 22 (nvm), npm, yarn, pnpm, eslint, prettier |
| 💎 **Ruby** | 3.1 · 3.2 · 3.3, bundler, rbenv |
| 🐘 **PHP** | 8.4, Composer |
| ☕ **Java** | OpenJDK 21, Maven, Gradle |
| 🐹 **Go** | 최신 안정 버전 |
| 🦀 **Rust** | rustc, cargo |
| 🐳 **Docker** | docker, docker compose |
| 🗄️ **데이터베이스** | PostgreSQL 16, Redis 7.0 (실행 필요) |
| 🔧 **유틸리티** | git, jq, ripgrep, tmux, vim, nano |

<div class="note-star">
★ <strong>팁</strong>: 세션에서 클로드에게 "check-tools 실행해줘"라고 하면 설치된 도구와 버전을 확인할 수 있어요.
</div>

---

## 환경 설정하기

### 환경 선택창 열기

`claude.ai/code`에서 메시지 입력창 위에 있는 **구름 아이콘 ☁️ (환경 이름 표시 버튼)** 을 클릭하면 환경 선택창이 열려요.

### 새 환경 만들기 / 편집하기

1. 환경 선택창 → **"Add cloud environment"** 클릭 (또는 기존 환경의 ⚙️ 아이콘)
2. 이름, 네트워크 접근 수준, 환경 변수, 설정 스크립트 입력
3. **Create environment** (또는 Save) 클릭

---

## 네트워크 접근 수준 (4단계)

| 수준 | 허용 범위 | 추천 상황 |
|---|---|---|
| **None** | 외부 인터넷 없음 | 최고 보안이 필요한 경우 |
| **Trusted** ⭐ | npm, PyPI, GitHub 등 허용 목록만 | **기본값 — 대부분의 경우** |
| **Full** | 모든 도메인 허용 | 외부 API 자주 사용 |
| **Custom** | 내가 지정한 도메인만 | 사내 서버 접근 필요 |

> 🔒 **보안 팁**: 특별한 이유가 없다면 **Trusted**를 유지하세요.

### 특정 도메인 추가하기 (Custom)

```text
api.mycompany.com
*.internal.mycompany.com
registry.mycompany.com
```

한 줄에 도메인 하나씩. `*.`을 붙이면 하위 도메인 전체 허용. "Also include default list" 체크하면 기본 허용 목록도 함께 유지돼요.

---

## 환경 변수 설정

`.env` 형식으로 작성합니다. 세션 시작 시 복사되며 실행 중에는 변경되지 않아요.

```text
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

<div class="note-star">
⚠️ <strong>보안 주의</strong>: API 키, 비밀번호 등 민감한 정보는 환경 변수에 넣지 마세요. 이 환경을 쓰는 모든 사람이 값을 볼 수 있어요. 전용 비밀 저장소(secrets store)는 아직 지원되지 않습니다 (공식 발표 기준).
</div>

---

## 설정 스크립트 (Setup Script)

Claude Code가 **시작되기 전에** 자동으로 실행되는 bash 스크립트예요. 미리 설치해야 할 패키지나 도구를 세팅하는 데 씁니다.

> 🏪 **비유로 설명하면**: 설정 스크립트는 **매장 오픈 전 준비 작업**이에요. 재료 꺼내놓고, 기계 예열하고, 직원(클로드)이 도착하기 전에 모두 준비해두는 것이죠.

### 예시 스크립트

```bash
#!/bin/bash
# GitHub CLI 설치 (기본 미포함)
apt update && apt install -y gh
```

### 스크립트 작성 3가지 규칙

| 규칙 | 내용 |
|---|---|
| **exit 0으로 끝내기** | 스크립트가 오류로 종료되면 세션이 시작 안 됨. 비필수 명령에는 `\|\| true` 추가 |
| **5분 이내 완료** | 오래 걸리면 캐시 구축에 문제 생김 |
| **네트워크 필요** | Trusted 이상에서만 패키지 설치 가능 |

### 환경 캐시 — 설치를 한 번만 하는 비법

설정 스크립트는 **처음 실행 후 결과가 자동으로 저장(캐시)** 돼요. 다음 세션부터는 스크립트를 다시 실행하지 않고 저장된 상태에서 바로 시작합니다.

캐시가 초기화되는 경우:
- 설정 스크립트 내용 변경
- 허용 도메인 변경  
- 약 7일 후 자동 만료

---

## 내 설정이 클라우드에 적용되나요?

세션은 저장소를 새로 클론해서 시작하므로, **저장소에 커밋된 것**만 클라우드에서도 사용할 수 있어요.

| 항목 | 클라우드 세션 | 이유 |
|---|---|---|
| 저장소의 `CLAUDE.md` | ✅ | 저장소 클론에 포함 |
| 저장소의 `.claude/settings.json` | ✅ | 저장소에 포함 |
| 저장소의 `.mcp.json` MCP 서버 | ✅ | 저장소에 포함 |
| 저장소의 `.claude/skills/` 등 | ✅ | 저장소에 포함 |
| 내 PC의 `~/.claude/CLAUDE.md` | ❌ | 내 PC에만 있음 |
| `claude mcp add`로 추가한 서버 | ❌ | `~/.claude.json`에 저장됨 |
| API 키 / 비밀번호 | ❌ | 전용 저장소 미지원 |

<div class="note-star">
★ <strong>MCP 서버 클라우드에서 쓰려면</strong>: <code>claude mcp add --scope project</code>로 추가 → 저장소의 <code>.mcp.json</code>에 저장 → 커밋
</div>

---

## 클라우드 환경 리소스 한도

| 항목 | 값 (변경될 수 있음) |
|---|---|
| **CPU** | 4 vCPU |
| **RAM** | 16 GB |
| **디스크** | 30 GB |

메모리를 많이 쓰는 대형 빌드나 테스트는 VM이 멈출 수 있어요. 이럴 때는 [Remote Control](./codeweb-remote)로 내 PC에서 실행하는 방법을 고려하세요.

---

## 관련 문서

- [웹에서 Claude Code 소개](./codeweb-intro)
- [웹 Claude Code 시작하기](./codeweb-start)
- [Remote Control — 내 PC와 연결하기](./codeweb-remote)
