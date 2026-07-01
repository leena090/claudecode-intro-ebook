---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "claude mcp login으로 CLI에서 MCP 서버 인증, ! 명령어에 Claude가 자동 응답, /rewind로 /clear 이전으로 복원"
tags: ["업데이트", "2026", "week26", "mcp", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — 터미널에서 MCP 서버 바로 인증 🔐

이제 Claude Code 세션을 열지 않고도 터미널에서 바로 MCP 서버에 로그인할 수 있어요.

> 🏦 **ATM 비유**: 이전엔 은행(Claude Code 세션)에 들어가서 직원한테 "Sentry 연결해주세요" 했다면, 이제는 ATM(터미널)에서 직접 카드 꽂고 처리하는 것과 같아요.

**사용법:**

```bash
# MCP 서버 로그인 (OAuth 브라우저 플로우 실행)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

- 세션을 열지 않아도 됨
- OAuth 인증 흐름을 터미널에서 직접 실행
- 인증 정보는 안전하게 저장

---

### 2️⃣ `!` 명령어에 Claude가 자동 응답 💬

터미널 명령어를 `!` 접두사로 실행하면, 명령어 출력에 대해 **Claude가 자동으로 분석해줘요**.

> 🧑‍⚕️ **병원 비유**: 검사(명령어)를 하고 나면 의사(Claude)가 결과를 바로 해석해주는 것처럼, `! npm test` 하면 실패 이유를 Claude가 설명해줘요.

**사용 예:**

```text
> ! npm test
```

→ 테스트가 실패하면 Claude가 오류 원인을 분석하고 수정 방법 제안

**이전 동작으로 되돌리고 싶으면:**

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

> 💡 응답 비용은 일반 프롬프트와 동일.

---

## 기타 개선사항 (Other wins)

| 항목 | 내용 |
|------|------|
| ⏪ `/rewind` 기능 강화 | `/clear`로 지운 대화도 `/rewind`로 복원 가능 |
| 🔒 샌드박스 보안 강화 | `sandbox.credentials` 설정으로 샌드박스 명령이 자격증명 파일·비밀 환경변수 읽기 차단 |
| 🚫 모델 제한 | 조직 설정 모델 제한이 모델 피커, `--model`, `/model`, `ANTHROPIC_MODEL` 모두에 적용 |
| 📊 Auto mode 분류 | `autoMode.classifyAllShell`로 모든 Bash/PowerShell 명령을 auto-mode classifier 통과, 거부 이유가 트랜스크립트에 표시 |
| 📡 OpenTelemetry | `claude_code.assistant_response` 로그 이벤트 신규 추가 (응답 텍스트 포함), 비활성화: `OTEL_LOG_ASSISTANT_RESPONSES=0` |
| 🤖 서브에이전트 권한 | 백그라운드 서브에이전트의 권한 요청이 자동 거부 대신 메인 세션에 표시 |
| 🔧 GitHub App 설치 | `/install-github-app`으로 Actions 워크플로우·시크릿 설정 없이 GitHub App만 설치 가능 |
| 🌐 샌드박스 네트워크 | 허용한 호스트를 세션 내내 기억 (매번 재확인 없음) |
| ⚡ 성능 | 스트리밍 CPU 사용 약 37% 감소, 긴 세션의 터미널 출력 캐시 메모리 증가 감소 |
| 📝 PR 리뷰 | `/review <pr>` 명령이 `/code-review medium`과 동일한 엔진 사용 |
| 🗂️ 자동완성 | `!` 명령어 모드에서 파일 경로 자동완성 지원 |

> 릴리즈: v2.1.185 → v2.1.193
