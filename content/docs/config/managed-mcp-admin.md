---
title: "[공] 조직 MCP 서버 관리 — 팀 전체 접근 제어하기"
description: "기업/팀 관리자용: managed-mcp.json으로 MCP 서버를 조직 전체에 배포하거나 차단하는 방법"
tags: ["자동생성", "MCP", "관리자", "보안", "기업", "managed-mcp", "allowlist"]
category: "config"
order: 10
lastUpdated: "2026-05-23"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/managed-mcp">code.claude.com/docs/en/managed-mcp</a>을 바탕으로 작성됐어요. 이 내용은 주로 <strong>팀/기업 관리자</strong>를 위한 가이드예요.
</div>

## 이게 왜 필요한가요?

기본적으로 Claude Code 사용자는 **어떤 MCP(엠씨피) 서버든 자유롭게 연결**할 수 있어요. 하지만 회사에서 쓸 때는 이런 걱정이 생겨요:

- "직원이 외부 MCP 서버에 회사 코드를 보내도 될까?"
- "보안 검토가 안 된 도구를 아무나 연결하면?"
- "팀 전체가 같은 회사 내부 MCP 서버를 쓰게 하고 싶다"

이럴 때 쓰는 게 **관리형 MCP 설정(Managed MCP)**이에요.

> 🏢 **비유로 설명하면**: 회사 Wi-Fi처럼, 관리자가 허용된 사이트 목록을 정해두면 직원들은 그 안에서만 쓸 수 있는 것처럼요. Claude Code의 MCP 서버도 마찬가지로 제어할 수 있어요.

---

## 제어 방식 선택하기

필요한 통제 수준에 따라 방식을 고르세요:

| 방식 | 하는 일 | 사용법 |
|---|---|---|
| **MCP 완전 차단** | 어떤 서버도 연결 불가 | `managed-mcp.json` (빈 서버 목록) |
| **고정 서버 배포** | 지정된 서버만 사용 (추가 불가) | `managed-mcp.json` (서버 목록 지정) |
| **승인 목록** | 관리자 허가 목록 안에서 선택 | `allowedMcpServers` 설정 |
| **차단 목록** | 특정 서버만 막고 나머지는 자유 | `deniedMcpServers` 설정 |
| **완전 자유** | 제한 없음 (기본값) | 설정 없음 |

---

## 방법 1: managed-mcp.json — 서버 독점 제어

### 어떻게 작동하나요?

`managed-mcp.json` 파일을 시스템 경로에 배포하면, **Claude Code는 그 파일에 있는 서버만** 연결해요. 직원들이 서버를 추가·변경·삭제할 수 없어요.

### 파일 위치

| 운영체제 | 경로 |
|---|---|
| macOS | `/Library/Application Support/ClaudeCode/managed-mcp.json` |
| Linux / WSL | `/etc/claude-code/managed-mcp.json` |
| Windows | `C:\Program Files\ClaudeCode\managed-mcp.json` |

### 파일 형식

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    },
    "sentry": {
      "type": "http",
      "url": "https://mcp.sentry.dev/mcp"
    },
    "회사내부도구": {
      "type": "stdio",
      "command": "/usr/local/bin/company-mcp-server",
      "args": ["--config", "/etc/company/mcp-config.json"]
    }
  }
}
```

### MCP 완전 차단

```json
{
  "mcpServers": {}
}
```

빈 목록이면 모든 MCP 서버 사용이 차단돼요.

### ⚠️ 인증 정보 보안 주의

이 파일은 컴퓨터의 모든 사용자가 읽을 수 있어요. **API 키나 비밀번호를 직접 넣지 마세요!**

대신 이렇게 하세요:
- `${환경변수이름}` 형식으로 각 사용자 환경변수 참조
- OAuth 인증 사용
- `headersHelper` 동적 헤더 생성 사용

### 설정이 잘 됐는지 확인하기

```bash
# 1. 서버 목록 확인 (managed-mcp.json에 있는 것만 보여야 함)
claude mcp list

# 2. 서버 추가 시도 (아래 에러가 나와야 정상)
claude mcp add --transport http test https://example.com/mcp
# 오류: Cannot add MCP server: enterprise MCP configuration is active...
```

---

## 방법 2: 허용/차단 목록 — 정책 기반 제어

### 서버를 식별하는 3가지 방법

| 식별자 | 사용하는 경우 | 예시 |
|---|---|---|
| `serverUrl` | HTTP/SSE 서버 URL | `"https://mcp.example.com/*"` |
| `serverCommand` | stdio 서버 실행 명령 | `["npx", "-y", "my-package"]` |
| `serverName` | 사용자가 붙인 이름 | `"github"` |

> ⚠️ **`serverName`만으로는 보안 제어가 안 돼요!** 아무나 서버 이름을 "github"으로 설정할 수 있으니까요. URL이나 명령어로 제어하는 게 진짜 보안이에요.

### 설정 예시: 엄격한 허용 목록

```json
{
  "allowedMcpServers": [
    { "serverUrl": "https://api.githubcopilot.com/*" },
    { "serverUrl": "https://mcp.sentry.dev/*" },
    { "serverUrl": "https://*.내회사도메인.com/*" },
    { "serverCommand": ["npx", "-y", "@myorg/approved-server"] }
  ],
  "deniedMcpServers": [
    { "serverUrl": "https://*.untrusted.com/*" }
  ]
}
```

### URL 패턴 규칙

| 패턴 | 허용 범위 |
|---|---|
| `https://mcp.example.com/*` | 해당 도메인의 모든 경로 |
| `https://*.example.com/*` | example.com의 모든 서브도메인 |
| `http://localhost:*/*` | 로컬 모든 포트 |
| `*://mcp.example.com/*` | 모든 프로토콜 |

### 명령어 패턴 규칙

```json
// 이건 일치함
{ "serverCommand": ["npx", "-y", "approved-package"] }

// 이건 일치 안 함 (인수 순서·내용이 정확히 같아야 함)
["npx", "approved-package"]      // -y 빠짐
["npx", "-y", "approved-package", "--flag"]  // 플래그 추가
```

### 관리자 설정만 허용하기

사용자가 허용 목록을 마음대로 넓히지 못하게 하려면:

```json
{
  "allowManagedMcpServersOnly": true,
  "allowedMcpServers": [
    { "serverUrl": "https://api.githubcopilot.com/*" }
  ]
}
```

이 설정은 **managed settings(관리형 설정)** 파일에 넣어야 해요. 사용자 설정 파일에 넣으면 효과 없어요.

---

## 사용자 눈에 보이는 메시지

| 상황 | 사용자가 보는 메시지 |
|---|---|
| managed-mcp.json 있는데 `claude mcp add` 시도 | `enterprise MCP configuration is active...` |
| 차단 목록에 있는 서버 추가 시도 | `server is explicitly blocked by enterprise policy` |
| 허용 목록에 없는 서버 추가 시도 | `not allowed by enterprise policy` |
| 기존 서버가 정책으로 차단됨 | 조용히 사라짐 (경고 없음) |

> 💡 **팁**: 정책 변경 전에 영향받는 사용자에게 미리 알려주세요. 서버가 조용히 사라지면 당황할 수 있어요.

---

## MCP 사용 현황 모니터링

OpenTelemetry(오픈텔레메트리) 설정이 되어 있다면, 어떤 MCP 서버와 도구를 사용하는지 기록할 수 있어요:

```bash
export OTEL_LOG_TOOL_DETAILS=1
```

이 환경변수를 설정하면 MCP 서버·도구 이름이 이벤트에 포함돼서, 집계 도구에서 실제 사용 현황을 볼 수 있어요.

---

## 설정 파일 배포 방법

| 파일 | 제어 범위 | 배포 방법 |
|---|---|---|
| `managed-mcp.json` | 서버 목록 독점 제어 | MDM(제품 배포 도구), GPO, 플릿 관리 소프트웨어 |
| `allowedMcpServers` | 허용 서버 목록 | 관리형 설정 파일, server-managed settings |
| `deniedMcpServers` | 차단 서버 목록 | 동일 |
| `allowManagedMcpServersOnly` | 사용자 확장 차단 | 관리형 설정 파일에만 효과 있음 |

---

## 더 알아보기

- [공식 managed-mcp 문서](https://code.claude.com/docs/en/managed-mcp)
- [MCP 설정 기본 가이드](/docs/config/mcp-setup)
- [권한 설정 가이드](/docs/config/permissions-guide)
- [관리자 설정 가이드](https://code.claude.com/docs/en/admin-setup)
