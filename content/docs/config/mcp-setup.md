---
title: "외부 도구를 AI에 연결하기 — MCP 서버"
description: "Model Context Protocol로 GitHub, Notion, Slack 등 외부 서비스를 AI에 연결하는 방법 (Desktop Extensions 원클릭 설치 포함)"
category: "config"
order: 5
tags: ["외부연결", "MCP", "설정"]
lastUpdated: "2026-06-03"
---

## MCP (Model Context Protocol)란?

**MCP**는 AI가 외부 도구와 서비스에 연결되도록 하는 표준 통신 규약입니다. 마치 스마트폰이 여러 앱과 연결되어 데이터를 주고받듯이, AI가 다양한 외부 서비스(GitHub, Slack, Google Drive 등)와 소통할 수 있게 해줍니다.

<div class="note-star">
⚠️ <strong>먼저 알아야 할 중요한 경고</strong>: MCP는 편리하지만 <strong>많이 설치하면 토큰을 심하게 먹어요</strong>. 이 페이지 하단 "MCP 토큰 비용 경고" 섹션을 꼭 먼저 읽어보세요.
</div>

---

## MCP 없이 vs MCP 있이

### ❌ MCP 없이

```
당신: "GitHub의 최신 PR 목록 보여줘"
AI: "GitHub 데이터에 접근할 수 없습니다"
```

### ✅ MCP 있이

```
당신: "GitHub의 최신 PR 목록 보여줘"
AI: (GitHub과 연결) → "PR #123, #124, #125 입니다"
```

---

## MCP 설정 파일 위치

### 글로벌 설정
```
~/.claude.json          ← 모든 프로젝트에 적용
또는
~/.claude/mcp.json
```

### 프로젝트별 설정
```
프로젝트폴더/
└── .mcp.json           ← 이 프로젝트에만 적용
```

---

## MCP 생태계 현황 (2026년 4월)

MCP는 이제 거대한 생태계가 됐어요. `[공식]`

| 항목 | 수치 |
|------|------|
| 공개 MCP 서버 수 | **10,000개 이상** |
| SDK 월 다운로드 | 9,700만 회 |
| 표준 관리 | Linux Foundation Agentic AI Foundation (오픈 표준) |

---

## 설치 방법 3가지 — 쉬운 것부터

### 방법 1: 더블클릭으로 설치 (Desktop Extensions) — 가장 쉬움

Claude Desktop 앱에서는 `.mcpb` 파일을 **더블클릭만 하면** MCP 서버가 설치돼요. Node.js 같은 것도 따로 설치할 필요 없어요 — 모든 의존성이 파일 안에 포함돼 있거든요.

```
1. MCP 서버 제공 페이지에서 .mcpb 파일 다운로드
2. 다운로드된 파일 더블클릭
3. "Install" 버튼 클릭
4. 끝!
```

설치된 확장은 **Settings > Extensions**에서 관리할 수 있어요.

> 비유하면: 앱스토어에서 앱 받듯이 MCP 서버를 설치하는 거예요.

<div class="note-circle">○ Desktop Extensions는 Claude Desktop 전용이에요. Claude Code(터미널)에서는 아래 방법 2나 3을 쓰세요.</div>

### 방법 2: Claude Code CLI로 추가

터미널에서 한 줄 명령어로 추가해요.

```bash
# Notion MCP 추가 (원격 서버)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# 현재 연결된 MCP 목록 확인
claude mcp list
```

### 방법 3: JSON 직접 편집 (고급)

설정 파일을 직접 열어서 MCP 서버를 추가하는 방법이에요. 세부 설정이 필요할 때 써요.

---

## MCP 서버 찾는 방법 5가지

"어떤 MCP 서버가 있는지 어떻게 알아요?" — 이런 곳에서 찾을 수 있어요.

| 경로 | 설명 |
|------|------|
| **MCP Registry** (registry.modelcontextprotocol.io) | 공식 레지스트리 |
| **Smithery** (smithery.ai) | 최대 규모 마켓플레이스, CLI 도구 제공 |
| **awesome-mcp-servers** (GitHub) | 커뮤니티 선별 목록 |
| **Docker MCP Catalog** (mcp.docker.com) | Docker Desktop에서 시각적 탐색 |
| **Settings > Extensions** | Claude Desktop 앱 내 내장 디렉터리 |

---

## 기본 MCP 설정 예시 (JSON 방식)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["./mcp-server-filesystem/index.js"],
      "env": {}
    },
    "github": {
      "command": "node",
      "args": ["./mcp-server-github/index.js"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxx"
      }
    }
  }
}
```

---

## 인기있는 MCP 서버

### 1. Filesystem MCP — 파일 접근
```json
{
  "filesystem": {
    "command": "node",
    "args": ["./server/index.js"],
    "description": "로컬 파일 시스템 접근"
  }
}
```

### 2. GitHub MCP — Git 연동
```json
{
  "github": {
    "command": "node",
    "args": ["./github-server/index.js"],
    "env": {
      "GITHUB_TOKEN": "ghp_xxxxx"
    }
  }
}
```

### 3. Slack MCP — 메시지 전송
```json
{
  "slack": {
    "command": "node",
    "args": ["./slack-server/index.js"],
    "env": {
      "SLACK_BOT_TOKEN": "xoxb-xxxxx"
    }
  }
}
```

### 4. Google Maps MCP — 지도 데이터
```json
{
  "google-maps": {
    "command": "node",
    "args": ["./maps-server/index.js"],
    "env": {
      "GOOGLE_MAPS_API_KEY": "AIza..."
    }
  }
}
```

### 5. Notion MCP — 노션 연동
```json
{
  "notion": {
    "command": "node",
    "args": ["./notion-server/index.js"],
    "env": {
      "NOTION_API_KEY": "secret_..."
    }
  }
}
```

---

## 2가지 MCP 전송 방식

### 1. stdio (표준 입출력)
```json
{
  "command": "python",
  "args": ["./mcp_server.py"],
  "type": "stdio"
}
```

**특징:**
- 로컬에서 간단하게 사용
- 속도 빠름
- 권장 방식

---

### 2. SSE (Server-Sent Events)
```json
{
  "url": "http://localhost:3000/sse",
  "type": "sse"
}
```

**특징:**
- 원격 서버 연결 가능
- HTTP 기반
- 클라우드 환경에 적합

---

### 3. HTTP (원격 MCP 서버) — 신규

```json
{
  "my-remote-mcp": {
    "url": "https://mcp.myservice.com/v1",
    "type": "http"
  }
}
```

**특징:**
- 인터넷 어디서든 접근 가능한 원격 MCP 서버에 연결
- 로컬에 서버 프로세스를 설치할 필요 없음
- 팀 전체가 같은 MCP 서버를 공유할 때 유용

**OAuth 2.0 인증 지원:**

원격 MCP 서버가 OAuth 2.0 인증을 요구하는 경우, 다음처럼 설정합니다:

```json
{
  "my-secure-mcp": {
    "url": "https://mcp.myservice.com/v1",
    "type": "http",
    "auth": {
      "type": "oauth2",
      "clientId": "${MCP_CLIENT_ID}",
      "clientSecret": "${MCP_CLIENT_SECRET}",
      "tokenUrl": "https://auth.myservice.com/token"
    }
  }
}
```

클라이언트 ID와 시크릿은 `.env` 파일에 저장하고 환경변수로 참조하세요.

---

## 실전 MCP 설정

### GitHub 연동 설정

```json
{
  "mcpServers": {
    "github": {
      "command": "python",
      "args": ["-m", "mcp_server_github"],
      "env": {
        "GITHUB_TOKEN": "ghp_XXXXXXX",
        "GITHUB_USERNAME": "myusername"
      }
    }
  }
}
```

<mark>GITHUB_TOKEN은 settings.json이 아닌 별도 .env 파일에 저장하세요</mark>

---

### Slack 알림 설정

```json
{
  "mcpServers": {
    "slack": {
      "command": "python",
      "args": ["-m", "mcp_server_slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-XXXXX",
        "SLACK_APP_TOKEN": "xapp-XXXXX"
      }
    }
  }
}
```

---

### 여러 MCP 함께 사용

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["./fs-server/index.js"]
    },
    "github": {
      "command": "node",
      "args": ["./github-server/index.js"],
      "env": {
        "GITHUB_TOKEN": "ghp_XXXXX"
      }
    },
    "slack": {
      "command": "node",
      "args": ["./slack-server/index.js"],
      "env": {
        "SLACK_TOKEN": "xoxb-XXXXX"
      }
    }
  }
}
```

---

## API 키 보안 관리

<div class="note-star">
  ★ API 키는 절대 코드에 직접 입력하지 마세요!
</div>

### ❌ 위험한 방법
```json
{
  "GITHUB_TOKEN": "ghp_xxxxx"  ← 노출 위험!
}
```

### ✅ 안전한 방법

**1단계: .env 파일에 저장**
```
GITHUB_TOKEN=ghp_xxxxx
SLACK_TOKEN=xoxb-xxxxx
```

**2단계: settings.json에서 참고**
```json
{
  "apiKeyHelper": {
    "dotenv": ".env"
  },
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

**3단계: .env를 .gitignore에 추가**
```
.env
.env.local
```

---

## MCP 활용 예시

### 예시 1: 자동 GitHub 리뷰

```json
{
  "mcpServers": {
    "github": {
      "command": "node",
      "args": ["./github-reviewer.js"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

**활용:**
```
당신: "최근 PR 목록 보여줘"
AI: (GitHub 연결) → PR 목록 표시

당신: "#123 PR 리뷰해줘"
AI: (GitHub에서 코드 다운로드) → 리뷰 작성
```

---

### 예시 2: 작업 완료 후 Slack 알림

```json
{
  "mcpServers": {
    "slack": {
      "command": "node",
      "args": ["./slack-notifier.js"],
      "env": {
        "SLACK_TOKEN": "${SLACK_TOKEN}"
      }
    }
  }
}
```

---

### 예시 3: 파일 검색 및 수정

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["./fs-handler.js"],
      "permissions": {
        "allowlist": [
          "/Users/mylee/Desktop/projects/**"
        ]
      }
    }
  }
}
```

---

## 💡 쉽게 이해하기

MCP는 **API 커넥터**와 같습니다.

**케이블 없이:**
- TV와 스피커가 분리되어 있음
- 각각 따로 작동

**케이블로 연결:**
- TV와 스피커가 함께 작동
- 더 많은 기능 사용 가능

**MCP 없이:**
- AI가 자신의 데이터만 사용

**MCP로 연결:**
- AI가 GitHub, Slack, Google 등과 협력

---

## MCP 서버 켜고 끄기

대화 중에 특정 MCP 서버만 활성화하거나 비활성화할 수 있습니다:

```bash
# MCP 서버 활성화
/mcp enable github

# MCP 서버 비활성화
/mcp disable slack

# 현재 연결된 MCP 서버 목록 확인
/mcp
```

---

## MCP 설정 확인하기

### 설정이 올바른지 테스트

```bash
# MCP 서버 연결 상태 확인
/mcp
```

### 문제 해결

```
문제: MCP 서버에 연결할 수 없음
해결:
1. MCP 서버가 실행 중인가?
2. 명령어 경로가 맞는가?
3. 환경 변수가 설정되었는가?
```

---

## ⚠️ 공식 문서에 잘 안 나오는 함정 — 꼭 알아두세요

MCP를 몇 달 써본 개발자들이 공통으로 겪는 함정들입니다. `[R]` 커뮤니티 경험담 기반이에요.

### 함정 1: 배열 파라미터를 쓰면 도구가 사라져요 ⚠️

MCP 도구를 만들 때 파라미터를 `list[str]` 같은 **배열 타입**으로 쓰면, Claude Code가 **에러 메시지도 없이 해당 도구를 통째로 무시**해버립니다.

> 🍱 **비유로 설명하면**: 음식점 메뉴판에 "불고기 세트" 대신 "여러 반찬 중 3개 골라서"라고 써놓으면, 손님이 그 메뉴를 아예 안 읽고 지나치는 것과 같아요.

**지원되는 타입:**
- ✅ `string` (문자열)
- ✅ `integer` (숫자)
- ✅ `boolean` (참/거짓)
- ❌ `list[str]`, `array` — **사용 금지**

**해결책:** 배열이 필요하면 쉼표로 구분된 문자열로 받고 MCP 서버 내부에서 분리하세요.

<div class="note-circle">
○ 출처: <code>[R]</code> Martin Garramon이 Medium에 "수개월간 MCP 디버깅하며 배운 것들" 정리 (2026-03-11)
</div>

---

### 함정 2: MCP 결과가 100KB에서 잘려요 → 500KB까지 늘리기 (v2.1.91~)

기본적으로 MCP 도구가 반환할 수 있는 결과는 **최대 100KB**로 제한돼 있어요. 대용량 로그나 CSV 같은 걸 가져오려면 잘려버립니다.

**해결책**: `_meta` 어노테이션으로 **최대 500KB까지** 확장 가능 (v2.1.91부터)

```json
{
  "_meta": {
    "anthropic/maxResultSizeChars": 500000
  }
}
```

<div class="note-circle">
○ v2.1.91(2026-04-02)에 추가됐어요. 무조건 늘리진 마세요 — 토큰 비용이 커집니다. 꼭 필요할 때만.
<br />○ <strong>v2.1.101 업데이트</strong>: 결과가 50,000글자를 넘으면 클로드가 자동으로 파일에 저장해요. 화면이 결과로 넘치는 일이 줄어들었어요. <code>[공식]</code>
</div>

---

### 함정 3: MCP vs CLI — 토큰이 4배 차이 나요

같은 작업을 **Playwright MCP**로 하면 약 114,000 토큰, 그냥 **CLI 스크립트**로 하면 약 27,000 토큰이에요. **4배 차이**!

| 방식 | 토큰 사용 | 언제 유리? |
|---|---|---|
| **MCP** (Playwright, GitHub 등) | 많음 (4×) | 로그인 세션 유지 등 **상태 유지**가 필요할 때 |
| **CLI 스크립트** | 적음 | 단발성 작업, 상태 유지 불필요 |

> 🍱 **비유로 설명하면**: MCP는 단골 식당(매번 주문 기록이 남음), CLI는 편의점(한 번 사고 끝)이에요. 매일 같은 주문을 한다면 단골이 편하지만, 딱 한 번만 살 거면 편의점이 싸죠.

<div class="note-circle">
○ 출처: <code>[R]</code> morphllm.com "Claude Code Reddit 분석" + Toolradar MCP 베스트 프랙티스
</div>

---

### 함정 4: 도구 검색 기능 덕에 토큰 46.9% 절감됐어요

MCP 4개 서버 연결 시 과거엔 **첫 프롬프트 전에만 67,000 토큰**이 소비됐어요. Tool Search 기능 도입 후 51K → 8.5K로 **46.9% 감소**.

**실전 팁**: MCP 서버를 많이 붙이는 것보다, **꼭 필요한 2~3개만** 붙이고 나머지는 CLI로 처리하세요.

---

## ⚠️ MCP 토큰 비용 경고 — 꼭 읽어주세요

MCP는 편리하지만 **"많이 설치 = 많이 먹음"** 원칙이 있어요. 많은 초보자가 이걸 몰라서 요금 폭탄을 맞습니다.

### 1. 왜 MCP가 토큰을 잡아먹나?

MCP 서버를 연결하면 Claude는 **매 대화마다** 그 서버가 어떤 도구·함수를 제공하는지를 먼저 알아야 해요. 그래서 서버 목록과 설명이 **매번 컨텍스트에 주입**돼요.

> 🍱 **비유로 설명하면**: 회의실에 들어갈 때마다 참석자 모두의 명함을 받아 읽는 거예요. 참석자가 10명이면 10명치 명함을 매번 읽어야 하죠. MCP 서버가 많을수록 "명함 두께"가 커져서 토큰이 쌓여요.

### 2. 실측 수치 — 충격적인 비용 [R]

커뮤니티에서 검증된 실제 수치:

| MCP 서버 수 | 첫 프롬프트 전 소비 토큰 | 한 달 추가 비용 (하루 50회 가정) |
|---|---|---|
| **0개 (MCP 안 씀)** | ~2,000 토큰 | $0 |
| **2개** | ~20,000 토큰 | ~$15 |
| **4개** (일반 사용자 평균) | ~67,000 토큰 | **~$50** |
| **8개** (파워 유저) | ~150,000 토큰 | **~$110** |

→ **MCP 서버 하나 늘어날 때마다 월 $10~20씩 늘어나는 셈이에요**. 무료 스킬도 유료로 변할 수 있습니다.

<div class="note-circle">
○ v2.1.69(2026-03-05)부터 <strong>Tool Search 기능</strong>이 도입되어 46.9% 줄었지만, 여전히 많이 먹어요.
○ 출처: <code>[R]</code> morphllm.com "Claude Code Reddit 분석"
</div>

### 3. 🛡️ MCP 관리 3원칙 — 토큰 폭탄 피하기

#### 원칙 1: **"2~3개만 붙이기"** (가장 중요)

정말 매일 쓰는 것만 남기세요:
- ✅ **진짜 필요**: 매일 쓰고, 다른 방법으로 대체 불가능한 것
- ❌ **제거 후보**: 한 달에 한두 번 쓰는 것, CLI·스크립트로 대체 가능한 것

**예시**:
- ✅ GitHub MCP (매일 PR·이슈 확인)
- ✅ Notion MCP (매일 문서 작업)
- ❌ Playwright MCP (주 1회 웹 스크래핑 — **CLI로 대체**)
- ❌ Slack MCP (알림 확인만 — **브라우저로 충분**)

#### 원칙 2: **"프로젝트별로 다른 MCP 세트"**

모든 프로젝트에 똑같은 MCP 7개를 붙이지 마세요. **프로젝트별 `.mcp.json`** 으로 각각 맞춤 설정.

**Mac 터미널 / Windows PowerShell**
```bash
# 프로젝트 A (웹 개발) — Playwright, GitHub
# 프로젝트 B (문서 작업) — Notion, Google Drive
# 프로젝트 C (데이터 분석) — Postgres, Perplexity
```

#### 원칙 3: **"CLI 대안이 있는지 먼저 확인"**

대부분 MCP는 **CLI 스크립트로 대체 가능**하고, **토큰은 3~4배 적게** 먹어요.

| 작업 | MCP 방식 | CLI 방식 | 토큰 비교 |
|---|---|---|---|
| 브라우저 자동화 | Playwright MCP | `npx playwright` 스크립트 | **MCP가 4배 많음** |
| GitHub 작업 | GitHub MCP | `gh` CLI 도구 | MCP가 2~3배 많음 |
| 파일 검색 | Filesystem MCP | `find`, `grep` | **CLI 압승** |

> 🍱 **비유로 설명하면**: 택시(MCP)는 편하지만 매번 기본 요금이 붙어요. 걸어서(CLI) 갈 수 있는 거리면 걸어가는 게 돈 아껴요.

---

## 처음 MCP 연결하기 — CLI 한 줄 빠른 시작 (2026-05 신규)

> 👉 공식 문서 신규 추가: [mcp-quickstart](https://code.claude.com/docs/en/mcp-quickstart) `[공]`

MCP 서버를 처음 연결할 때 가장 쉬운 방법은 `claude mcp add` 명령어예요.

### 연결 상태 표시 의미

```bash
claude mcp list   # 연결된 서버 목록 + 상태 확인
```

| 상태 표시 | 의미 |
|---|---|
| `✓ Connected` | 정상 연결됨 |
| `! Needs authentication` | 브라우저 로그인 필요 |
| `✗ Failed to connect` | 연결 실패 (트러블슈팅 필요) |
| `⏸ Pending approval` | 프로젝트 범위 서버, 아직 미승인 |

### 범위(Scope) 설정

| 범위 | 저장 위치 | 적용 범위 |
|---|---|---|
| `local` (기본) | `~/.claude.json` (프로젝트별) | 나 혼자, 이 프로젝트만 |
| `project` | `.mcp.json` (프로젝트 루트) | 이 저장소 클론한 팀원 모두 |
| `user` | `~/.claude.json` (전역) | 나 혼자, 모든 프로젝트 |

```bash
# 모든 프로젝트에서 쓰고 싶다면 --scope user
claude mcp add --scope user --transport http my-server https://my-mcp.example.com

# 팀원과 공유하려면 --scope project (.mcp.json 생성, git에 커밋)
claude mcp add --scope project --transport http my-server https://my-mcp.example.com
```

### 첫 연결 문제 해결 팁

- 연결이 안 될 때: `curl -I https://서버주소`로 서버가 살아있는지 먼저 확인
- stdio 서버라면: 터미널에서 직접 명령어 실행해서 에러 메시지 확인
- 시작 시간 초과(30초): `MCP_TIMEOUT=60000 claude`로 시간 연장

### 4. 언제 MCP를 제거해야 하나? (체크리스트)

다음 중 **2개 이상 해당**하면 제거를 고려하세요:

- [ ] 지난 2주간 해당 MCP 도구를 거의 안 씀
- [ ] `/cost` 명령어로 확인한 토큰 소비가 예상보다 큼
- [ ] 대체할 CLI·웹앱·수동 방법이 있음
- [ ] 결과가 부정확해서 어차피 손으로 다시 확인함
- [ ] MCP 도구 이름만 많고 실제 호출은 1~2개뿐

### 5. 지금 바로 확인하는 법

```bash
# 현재 연결된 MCP 목록
/mcp

# 현재 세션 비용 (모델별 + 캐시 히트율 포함, v2.1.92~)
/cost
```

**`/cost` 결과에서 "MCP 관련 토큰 비중이 30% 이상"**이면 MCP를 줄일 때가 온 거예요.

---

## 코워크 커넥터 = MCP

코워크 탭에서 Gmail, Google Drive 같은 **커넥터**를 연결하는 것도 내부적으로는 MCP 서버를 연결하는 거예요. 같은 원리, 같은 비용 구조입니다.

| 용어 | 어디서 쓰는 표현 | 실체 |
|------|---------------|------|
| **커넥터** | 코워크 탭 (일반 사용자용) | MCP 서버 |
| **MCP 서버** | Claude Code (개발자용) | MCP 서버 |

그래서 커넥터를 많이 연결하면 위의 토큰 비용 경고가 그대로 적용돼요. 자세한 내용은 [커넥터 가이드](/docs/cowork/cowork-connectors)를 참고하세요.

---

## 다음 단계

MCP로 외부 서비스까지 연결했다면, 이제 **나만의 명령어를 만들어** 봅시다!

- [나만의 명령어 만들기](/docs/config/skills-guide) — 스킬 시스템으로 반복 작업 자동화
- [내 Gmail, 드라이브를 AI에게 연결](/docs/cowork/cowork-connectors) — 코워크에서 커넥터 연결하기
