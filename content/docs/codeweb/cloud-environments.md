---
title: "[공] 클라우드 환경(Cloud Environment) 설정 — 웹 세션 맞춤 세팅"
description: "Claude Code 웹 세션이 실행되는 클라우드 환경의 네트워크, 환경변수, 셋업 스크립트를 설정하는 방법"
tags: ["자동생성", "클라우드환경", "cloud-environment", "네트워크", "셋업스크립트", "codeweb"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-06"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a><br />
★ <strong>대상 플랜</strong>: Pro, Max, Team (리서치 프리뷰), Enterprise (프리미엄 시트)
</div>

## 클라우드 환경이 뭔가요?

Claude Code를 웹(claude.ai/code)에서 사용하거나, 터미널에서 `claude --cloud`로 실행하면 **클라우드 환경** 위에서 작동해요.

> 🏢 **비유로 설명하면**: 클라우드 환경은 Claude가 일하는 "사무실"이에요. 사무실마다 인터넷 접근 범위, 사용할 수 있는 도구, 환경설정이 다를 수 있죠. 처음엔 기본 사무실(Default 환경)이 배정되지만, 프로젝트에 따라 맞춤 사무실을 만들 수 있어요.

각 클라우드 세션은 **신선한 Ubuntu 24.04 가상 머신(VM)** 위에서 시작해요:
- 저장소가 자동으로 클론됨
- 언어 런타임(Python, Node.js, Go 등)이 미리 설치돼 있음
- 세션이 끝나면 VM도 사라짐 (격리된 환경)

---

## 어디서 설정하나요?

[claude.ai/code](https://claude.ai/code) → 메시지창 위쪽의 **☁️ 클라우드 아이콘** 클릭

거기서 환경을 추가하거나 수정할 수 있어요.

---

## 클라우드 환경에서 설정할 수 있는 것들

### 1. 네트워크 접근 수준

클라우드 세션이 인터넷에 얼마나 연결될 수 있는지 결정해요:

| 수준 | 설명 |
|------|------|
| **None** | 인터넷 연결 완전 차단 |
| **Trusted** | npm, PyPI, GitHub 등 허용된 주요 사이트만 접근 가능 (**기본값**) |
| **Full** | 모든 인터넷 접근 허용 |
| **Custom** | 내가 직접 허용 도메인 목록 작성 |

> 🔒 기본값인 **Trusted** 모드에서도 npm, PyPI, RubyGems, cargo, GitHub, Docker Hub 등 주요 패키지 저장소는 모두 접근 가능해요.

### 2. 환경 변수

`.env` 파일 형식으로 설정해요:

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

> ⚠️ **주의**: 환경 변수에는 API 키 같은 민감한 정보를 넣지 마세요! 해당 환경을 사용하는 모든 사람이 읽을 수 있어요. 아직 전용 비밀 저장소(secrets store)는 제공되지 않아요.

### 3. 셋업 스크립트 (Setup Script)

세션 시작 전에 자동으로 실행되는 Bash 스크립트예요. 기본 설치 도구에 없는 것을 설치할 때 씁니다.

예시 — GitHub CLI 설치:
```bash
#!/bin/bash
apt update && apt install -y gh
```

> 💡 **환경 캐싱**: 셋업 스크립트는 처음 실행 시에만 돌아요. 이후 Anthropic이 스냅샷을 만들어두기 때문에, 다음 세션부터는 스크립트 없이도 이미 설치된 상태로 빠르게 시작돼요 (약 7일 주기로 갱신).

---

## 기본으로 설치된 도구들

클라우드 세션에는 이미 다양한 도구가 설치돼 있어요:

| 범주 | 포함된 도구 |
|------|-----------|
| **Python** | Python 3.x, pip, poetry, uv, pytest, black, ruff |
| **Node.js** | 20/21/22 (nvm), npm, yarn, pnpm, eslint, prettier |
| **Ruby** | 3.1/3.2/3.3 (rbenv), gem, bundler |
| **Go** | 최신 안정 버전 |
| **Rust** | rustc, cargo |
| **Java** | OpenJDK 21, Maven, Gradle |
| **Docker** | docker, docker compose |
| **DB** | PostgreSQL 16, Redis 7.0 |
| **도구** | git, jq, ripgrep, tmux |

> 💡 현재 설치된 정확한 버전을 확인하고 싶으면 Claude에게 "check-tools 실행해줘"라고 하면 돼요.

---

## 내 설정이 클라우드에서도 작동하나요?

저장소에 포함된 파일은 클라우드 세션에서도 사용 가능해요:

| 항목 | 클라우드에서 사용 가능? |
|------|---------------------|
| `CLAUDE.md` (저장소 내) | ✅ 예 |
| `.claude/settings.json` 훅 | ✅ 예 |
| `.mcp.json` MCP 서버 | ✅ 예 |
| `.claude/skills/` 스킬 | ✅ 예 |
| `~/.claude/CLAUDE.md` (내 컴퓨터) | ❌ 아니요 |
| `claude mcp add`로 추가한 MCP | ❌ 아니요 |
| API 키 같은 자격증명 | ❌ 아니요 |

> 💡 내 로컬 설정을 클라우드에서도 쓰고 싶다면, 저장소의 `.claude/` 폴더에 넣고 커밋하세요.

---

## 셋업 스크립트 vs SessionStart 훅

비슷해 보이는 두 가지를 언제 쓰는지 정리했어요:

| | **셋업 스크립트** | **SessionStart 훅** |
|---|---|---|
| **설정 위치** | claude.ai/code 환경 설정 화면 | `.claude/settings.json` |
| **실행 시점** | Claude Code 실행 전 (캐싱 덕분에 첫 번째만) | 매 세션 시작 시 |
| **적용 범위** | 클라우드 전용 | 로컬 + 클라우드 모두 |
| **주 용도** | 시스템 도구 설치 | 의존성 설치 (`npm install` 등) |

클라우드에서만 `npm install`을 실행하고 싶다면:

```bash
#!/bin/bash
# CLAUDE_CODE_REMOTE가 true일 때만 실행
if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0
fi
npm install
pip install -r requirements.txt
```

---

## Team/Enterprise: 조직 공유 환경

팀 관리자라면 조직 전체가 공유하는 환경을 만들 수 있어요:

- [claude.ai/admin-settings](https://claude.ai/admin-settings) → **Cloud environments** 페이지에서 설정
- 모든 팀원의 환경 선택창에 조직 공유 환경이 함께 표시됨
- Claude Tag(Slack 연동)에서 채널 세션도 공유 환경 사용

---

## 자주 묻는 것들

**Q: VM에 직접 SSH로 접속할 수 있나요?**
A: 아니요. 직접 셸 접근은 불가능해요. Claude가 모든 명령을 대신 실행해줍니다.

**Q: 세션이 끝나면 설치한 것들이 사라지나요?**
A: 네. 하지만 셋업 스크립트가 있으면 다음 세션 시작 때 캐시 덕분에 이미 설치된 상태예요.

**Q: 데이터베이스(PostgreSQL, Redis)가 자동으로 시작되나요?**
A: 설치는 돼 있지만 실행 중이지 않아요. Claude에게 "PostgreSQL 시작해줘"라고 하면 됩니다.

**Q: 리소스 한계가 있나요?**
A: 네. 대략 4 vCPU, 16GB RAM, 30GB 디스크예요. 더 큰 작업은 Remote Control로 내 컴퓨터에서 실행하는 걸 권장해요.

---

## 관련 문서

- [Claude Code on the web](/docs/en/claude-code-on-the-web) — 웹 세션 전반 설명
- [Web quickstart](/docs/en/web-quickstart) — GitHub 연동 및 첫 클라우드 세션
- [Remote Control](/docs/en/remote-control) — 내 컴퓨터에서 실행하는 방법
- [Routines](/docs/en/routines) — 스케줄 실행도 같은 클라우드 환경 사용
