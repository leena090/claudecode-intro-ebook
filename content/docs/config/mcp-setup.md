---
title: "MCP 서버 연결하기"
description: "외부 도구와 서비스를 AI에 연결하는 Model Context Protocol 설정"
category: "config"
order: 5
tags: ["MCP", "연동", "외부서비스"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

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

## MCP 설정 확인하기

### 설정이 올바른지 테스트

```bash
# MCP 서버 연결 상태 확인
claude /status-mcp
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

## 다음 단계

MCP로 외부 서비스까지 연결했다면, 이제 **고급 기능**을 배워봅시다!
