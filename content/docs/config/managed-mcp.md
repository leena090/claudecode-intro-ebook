---
title: "[공] 팀·기업용 MCP 서버 접근 제어 — managed-mcp.json"
description: "회사나 팀 전체에 같은 MCP 서버를 배포하거나, 특정 서버만 허용하거나 막는 관리자 설정법"
tags: ["MCP", "관리자", "보안", "팀", "기업", "자동생성"]
category: "config"
order: 11
lastUpdated: "2026-05-24"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 기업·팀 관리자를 위한 MCP 서버 접근 제어 기능. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/managed-mcp" target="_blank">공식 문서: code.claude.com/docs/en/managed-mcp</a>
</div>

<div class="note-circle">
  ○ <strong>이 문서는 팀·기업 관리자 대상</strong>입니다. 개인 사용자라면 <a href="/docs/config/mcp-setup">MCP 서버 설정</a>을 먼저 보세요.
</div>

## MCP 서버 접근 제어가 뭔가요?

MCP(엠씨피)는 Claude Code가 외부 도구(GitHub, Slack, 사내 시스템 등)와 연결하는 통로예요. 기본적으로 팀원 누구나 자유롭게 MCP 서버를 추가할 수 있어요.

> 🍱 **비유**: 회사 컴퓨터에서 직원이 아무 프로그램이나 설치하면 보안 사고가 생기잖아요. IT 관리자가 "우리 회사에서는 이 프로그램만 써야 해"라고 정해두는 것처럼, MCP 서버도 관리자가 허용할 것만 지정할 수 있어요.

---

## 어떤 방식으로 제어할 수 있나요?

| 방식 | 설명 | 적합한 상황 |
|------|------|------------|
| **고정 배포** | 모든 팀원이 동일한 MCP 서버만 사용 | 완전 통제가 필요한 기업 |
| **허용 목록** | 승인된 서버만 추가 가능 | 검증된 것만 허용하되 팀에 선택권 주기 |
| **차단 목록** | 특정 서버만 금지 | 대부분 허용하되 위험한 것만 막기 |
| **MCP 완전 비활성화** | MCP 서버 전혀 사용 불가 | 보안이 최우선인 환경 |
| **제한 없음** (기본값) | 아무거나 가능 | 개인 사용, 소규모 신뢰 팀 |

---

## 고정 배포 — managed-mcp.json

모든 팀원에게 **똑같은 MCP 서버를 자동 배포**하려면 `managed-mcp.json` 파일을 만들어요. 이 파일이 있으면 팀원은 다른 서버를 추가할 수 없고, 파일에 정의된 서버만 써요.

### 파일 위치

| 운영체제 | 파일 경로 |
|---------|----------|
| macOS | `/Library/Application Support/ClaudeCode/managed-mcp.json` |
| Linux / WSL | `/etc/claude-code/managed-mcp.json` |
| Windows | `C:\Program Files\ClaudeCode\managed-mcp.json` |

### 설정 예시

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
    "company-internal": {
      "type": "stdio",
      "command": "/usr/local/bin/company-mcp-server",
      "args": ["--config", "/etc/company/mcp-config.json"]
    }
  }
}
```

> 💡 **보안 주의**: 이 파일은 시스템의 모든 사용자가 읽을 수 있어요. API 키 같은 민감한 정보는 직접 쓰지 마세요. 환경변수(`${변수명}`) 형식으로 참조하거나 OAuth로 인증하세요.

### MCP 완전 비활성화

```json
{
  "mcpServers": {}
}
```

비어 있는 `managed-mcp.json`을 배포하면 MCP 서버를 **완전히 막을** 수 있어요. `[공]`

---

## 허용·차단 목록 — 정책 기반 제어

`managed-mcp.json`보다 유연하게 제어할 때 써요. 설정은 `managed-settings.json` 또는 관리자 콘솔에서 배포해요.

### 허용 목록 (allowedMcpServers)

```json
{
  "allowedMcpServers": [
    { "serverUrl": "https://api.githubcopilot.com/*" },
    { "serverUrl": "https://mcp.sentry.dev/*" },
    { "serverUrl": "https://*.internal.mycompany.com/*" }
  ]
}
```

- URL에 `*` 와일드카드 사용 가능
- 목록에 없는 서버 추가 시 오류: `"not allowed by enterprise policy"`
- `allowManagedMcpServersOnly: true`를 함께 쓰면 직원 개인 설정의 허용 목록도 무시돼요 `[공]`

### 차단 목록 (deniedMcpServers)

```json
{
  "deniedMcpServers": [
    { "serverUrl": "http://*" },
    { "serverUrl": "https://*.untrusted-site.com/*" }
  ]
}
```

`http://`(암호화 없는 주소) 전체를 막거나, 특정 위험 도메인을 차단할 때 써요. 차단 목록은 허용 목록보다 항상 우선해요.

---

## 팀원에게 어떻게 보이나요?

차단된 서버를 추가하려 하면 즉시 오류가 떠요:

| 상황 | 메시지 |
|------|--------|
| `managed-mcp.json`이 있을 때 | `Cannot add MCP server: enterprise MCP configuration is active...` |
| 차단 목록에 있는 서버 | `Cannot add MCP server: server is explicitly blocked by enterprise policy` |
| 허용 목록에 없는 서버 | `Cannot add MCP server: not allowed by enterprise policy` |

> ⚠️ **꼭 미리 공지하세요**: 기존에 쓰던 서버가 새 정책으로 막히면 팀원에게 **별도 알림 없이 조용히 사라져요**. 정책 변경 전 반드시 팀원에게 먼저 알려주세요.

---

## 제대로 적용됐는지 확인하는 법

```bash
# 1) 배포된 서버만 보이는지 확인
claude mcp list

# 2) 서버 추가 시도 → 실패해야 정상
claude mcp add --transport http test https://example.com/mcp
```

두 번째 명령이 `enterprise MCP configuration is active` 오류를 내면 관리 정책이 잘 적용된 거예요. `[공]`

---

## 💡 소규모 팀 추천 설정

5~10명 팀이라면 이 정도면 충분해요:

```json
{
  "allowedMcpServers": [
    { "serverUrl": "https://api.githubcopilot.com/*" },
    { "serverUrl": "https://mcp.sentry.dev/*" }
  ],
  "deniedMcpServers": [
    { "serverUrl": "http://*" }
  ]
}
```

- GitHub, Sentry는 허용
- HTTP(암호화 없는 주소)는 전부 차단
- 그 외 서버도 팀원이 URL을 알면 추가 가능 (소프트 제어)

완전 통제가 필요하면 `allowManagedMcpServersOnly: true`를 추가하면 돼요.
