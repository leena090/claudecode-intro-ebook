---
title: "[공] 클라우드 환경 설정 완전 가이드 — 네트워크·패키지·환경변수까지"
description: "Claude Code 웹 세션이 돌아가는 클라우드 환경을 내 입맛대로 설정하는 방법. 네트워크 접근 수준, 환경변수, 셋업 스크립트, 리소스 한도까지 한 번에 정리"
tags: ["자동생성", "클라우드환경", "cloud-environments", "네트워크", "셋업스크립트", "환경변수", "웹세션", "codeweb"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ Claude Code on the web (Pro·Max·Team·Enterprise 리서치 프리뷰) 기능이에요
<br />★ 환경 설정 화면: <a href="https://claude.ai/code">claude.ai/code</a> → 클라우드 아이콘 클릭
</div>

## 클라우드 환경이란?

Claude Code 웹 세션은 **클라우드 환경(Cloud Environment)** 위에서 실행돼요. 내 컴퓨터가 꺼져 있어도, Claude가 코딩 작업을 대신하는 가상 컴퓨터(VM)가 Anthropic 서버에 만들어지는 거예요.

> 🏠 **비유로 설명하면**: 내 집(컴퓨터) 대신 렌탈 작업실(클라우드 VM)을 빌리는 것과 같아요. 기본 작업실엔 기본 도구(Python, Node.js, Git 등)가 준비돼 있고, 내가 필요한 추가 도구나 인터넷 접근 규칙을 설정해서 나만의 작업실로 꾸밀 수 있어요.

---

## 환경 설정 화면 열기

1. [claude.ai/code](https://claude.ai/code) 접속
2. 메시지 입력창 위의 **☁️ Default** 버튼 클릭
3. 기존 환경 수정(⚙️ 아이콘) 또는 **Add cloud environment** 선택

---

## 네트워크 접근 수준 — 4단계

웹 세션이 인터넷에 얼마나 접근할 수 있는지 설정해요.

| 레벨 | 접근 범위 | 언제 쓰나요? |
|---|---|---|
| **None** | 인터넷 접근 없음 | 완전히 격리된 환경이 필요할 때 |
| **Trusted** (기본) | npm·PyPI·GitHub 등 허용 도메인만 | 대부분의 개발 프로젝트에 충분 |
| **Full** | 모든 도메인 | 외부 API 연동이 많은 프로젝트 |
| **Custom** | 내가 지정한 도메인만 | 특정 내부 서버가 필요할 때 |

### Trusted 기본 허용 도메인 (주요 예시)

기본값(Trusted)으로도 이런 곳엔 접근 가능해요:

| 분류 | 포함 도메인 |
|---|---|
| 패키지 | npm, PyPI, RubyGems, crates.io, Maven, pub.dev |
| Git 호스팅 | GitHub, GitLab, Bitbucket |
| 컨테이너 | Docker Hub, GCR, GHCR, ECR |
| 클라우드 | AWS (*.amazonaws.com), GCP, Azure |
| Anthropic | api.anthropic.com, claude.ai, code.claude.com |

### Custom 도메인 추가 예시

내부 서버가 필요하다면:

```
api.mycompany.com
*.internal.mycompany.com
registry.mycompany.com
```

`*.`으로 시작하면 모든 서브도메인이 허용돼요.

<div class="note-star">
★ MCP 커넥터 트래픽은 이 설정과 무관하게 Anthropic 서버를 통해 연결돼요.<br />
★ GitHub 작업은 별도 프록시를 통해 내 실제 토큰이 VM에 노출되지 않아요.
</div>

---

## 환경변수 설정

세션마다 필요한 설정값을 넣을 수 있어요. `.env` 형식으로 한 줄에 하나씩:

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

> ⚠️ **중요**: 환경변수는 해당 환경을 쓰는 모든 사람이 읽을 수 있어요. **API 키나 비밀번호는 절대 넣지 마세요.** 전용 시크릿 저장소는 아직 제공되지 않아요.

---

## 셋업 스크립트 (Setup Script)

새 세션이 시작될 때 Claude가 작업 전에 **자동으로 실행하는 Bash 스크립트**예요.

> 🏗️ **비유로 설명하면**: 작업실(VM)에 처음 들어갈 때 자동으로 공구 세팅을 해주는 것과 같아요.

### 언제 쓰나요?

| 목적 | 예시 |
|---|---|
| 미설치 도구 추가 | `apt install -y gh` (GitHub CLI) |
| 프레임워크 설치 | .NET SDK, Dart, Swift 등 |
| 대용량 Docker 이미지 준비 | `docker compose pull` |

### 기본 예시 — GitHub CLI 설치

```bash
#!/bin/bash
apt update && apt install -y gh
```

### 셋업 스크립트 3가지 규칙

| 규칙 | 이유 |
|---|---|
| **종료 코드 0으로 끝내야 함** | 0이 아니면 세션 시작 실패 |
| **5분 이내 완료** | 시간 초과 시 환경 캐시 빌드 불가 |
| **네트워크 필요 시 Trusted 이상** | None이면 패키지 다운로드 불가 |

중요하지 않은 명령어엔 `|| true`를 붙여서 실패해도 계속 진행하게 하세요:

```bash
apt install -y some-optional-tool || true
```

### 환경 캐시(Environment Cache)

셋업 스크립트는 **처음 한 번만** 실행돼요. 완료 후 Anthropic이 파일시스템 스냅샷을 저장하고, 이후 세션은 이 캐시에서 바로 시작해요. → 매번 설치 과정 없이 빠르게 시작!

캐시가 다시 만들어지는 경우:
- 셋업 스크립트 수정 시
- 허용 도메인 목록 변경 시  
- 약 7일 후 만료

---

## 기본 설치된 도구들

별도 설정 없이도 이미 깔려 있어요:

| 분류 | 포함 도구 |
|---|---|
| **Python** | Python 3.x, pip, poetry, uv, pytest, ruff |
| **Node.js** | 20·21·22 (nvm), npm, yarn, pnpm, eslint |
| **Ruby** | 3.1·3.2·3.3, gem, bundler |
| **PHP** | 8.4, Composer |
| **Java** | OpenJDK 21, Maven, Gradle |
| **Go** | 최신 안정 버전 |
| **Rust** | rustc, cargo |
| **C/C++** | GCC, Clang, cmake |
| **Docker** | docker, docker compose |
| **DB** | PostgreSQL 16, Redis 7.0 |
| **유틸** | git, jq, yq, ripgrep, tmux, vim |

> 📌 .NET SDK, Dart, Swift 등은 **기본 미포함** → 셋업 스크립트로 설치하세요.

---

## 리소스 한도 (VM 사양)

| 항목 | 제한 |
|---|---|
| CPU | 약 4 vCPU |
| 메모리(RAM) | 약 16 GB |
| 디스크 | 약 30 GB |

> 대용량 빌드나 메모리 집약적 테스트는 VM이 중단시킬 수 있어요. 이런 경우엔 [Remote Control](/docs/en/remote-control)로 내 로컬 머신을 연결해서 작업하세요.

---

## 로컬 설정 vs 클라우드에서 사용 가능 여부

| 항목 | 클라우드에서 사용 가능? | 이유 |
|---|---|---|
| 리포의 `CLAUDE.md` | ✅ | 클론에 포함 |
| 리포의 `.claude/settings.json` hooks | ✅ | 클론에 포함 |
| 리포의 `.mcp.json` MCP 서버 | ✅ | 클론에 포함 |
| 내 로컬 `~/.claude/CLAUDE.md` | ❌ | 내 기기에만 있음 |
| 로컬에서만 추가한 MCP 서버 | ❌ | `~/.claude.json`에만 있음 |
| API 키·자격증명 | ❌ | 시크릿 저장소 미지원 |

---

## 팀·조직 공유 환경 (Team·Enterprise)

관리자가 **팀 전체에 공유하는 환경**을 만들 수 있어요.

- 설정 위치: [claude.ai/admin-settings](https://claude.ai/admin-settings) → Cloud environments
- 조직 기본 환경 설정 가능
- Claude Tag(슬랙 연동)는 조직 공유 환경만 사용

---

## 터미널에서 원격 환경 선택하기

```bash
# 터미널에서 클라우드 환경 선택
/remote-env

# 선택 후 클라우드 세션 시작
claude --cloud
```

---

## SessionStart Hook으로 클라우드에서만 실행

클라우드 세션에서만 패키지 설치를 하고 싶다면:

```json
// .claude/settings.json
{
  "hooks": {
    "SessionStart": [{
      "matcher": "startup|resume",
      "hooks": [{
        "type": "command",
        "command": "bash \"$CLAUDE_PROJECT_DIR\"/scripts/install_pkgs.sh"
      }]
    }]
  }
}
```

```bash
# scripts/install_pkgs.sh
#!/bin/bash
if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0  # 로컬이면 아무것도 안 함
fi

npm install
pip install -r requirements.txt
```

`CLAUDE_CODE_REMOTE=true`는 클라우드 세션에서만 설정되는 환경변수예요.

---

## 관련 자료

- [Claude Code on the web 입문](/docs/en/claude-code-on-the-web) — 웹 세션 시작 방법
- [Web Quickstart](/docs/en/web-quickstart) — GitHub 연결과 첫 세션
- [Routines(루틴)](/docs/en/routines) — 스케줄·이벤트 기반 자동 실행
- [Remote Control](/docs/en/remote-control) — 내 기기의 네트워크로 연결
- [SessionStart hooks](/docs/en/hooks#sessionstart) — 세션 시작 시 자동 실행
