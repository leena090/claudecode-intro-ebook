---
title: "MCP 서버 연결하기"
description: "외부 도구와 서비스를 AI에 연결하는 Model Context Protocol 설정 (v2.1.91 500KB 오버라이드 반영)"
category: "config"
order: 5
tags: ["MCP", "연동", "외부서비스"]
lastUpdated: "2026-04-08"
---

## MCP (Model Context Protocol)란?

**MCP**는 AI가 외부 도구와 서비스에 연결되도록 하는 표준 통신 규약입니다. 마치 스마트폰이 여러 앱과 연결되어 데이터를 주고받듯이, AI가 다양한 외부 서비스(GitHub, Slack, Google Drive 등)와 소통할 수 있게 해줍니다.

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

## 기본 MCP 설정 예시

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

## 다음 단계

MCP로 외부 서비스까지 연결했다면, 이제 **고급 기능**을 배워봅시다!
