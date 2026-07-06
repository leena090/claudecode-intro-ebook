---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "터미널에서 MCP 서버 인증(claude mcp login), ! 명령어 자동 해석, /rewind로 /clear 이전으로 되돌리기"
tags: ["업데이트", "2026", "week26", "mcp-login", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-06"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개 + α)

---

### 1️⃣ `claude mcp login` — MCP 서버 인증을 터미널에서 바로 🔑

MCP(Model Context Protocol) 서버에 로그인할 때 기존에는 Claude Code 세션을 열고 `/mcp` 메뉴를 통해야 했어요. 이제 터미널에서 바로 인증할 수 있어요.

> 🍱 **비유**: 앱을 열어서 로그인하는 대신, 현관에서 비밀번호만 치고 들어가는 것처럼 — 훨씬 간편해요.

**새로운 명령어:**

```bash
# MCP 서버 OAuth 인증 시작
claude mcp login sentry

# 인증 해제
claude mcp logout sentry
```

**어떤 경우에 유용하나요?**

| 상황 | 기존 방법 | 새 방법 |
|---|---|---|
| 서버 인증 | 세션 열기 → /mcp → 선택 | `claude mcp login 서버이름` |
| 인증 해제 | 세션에서 수동 해제 | `claude mcp logout 서버이름` |
| CI/CD 환경 | 불편 | 스크립트에서 자동화 가능 |
| 여러 서버 | 각각 세션 필요 | 터미널에서 일괄 처리 |

`claude mcp login`은 해당 서버의 **OAuth 인증 흐름**을 직접 실행해요. 세션을 열지 않아도 돼서 스크립트나 자동화에 편리해요.

<div class="note-circle">
○ MCP 서버가 먼저 설정(등록)되어 있어야 사용할 수 있어요<br />
○ 저장된 인증 정보는 기존처럼 계속 유지돼요
</div>

---

### 2️⃣ `! 명령어` 실행 후 Claude가 결과를 자동 해석해요 💬

터미널 명령어를 `!` 접두어로 실행하면, 이제 **Claude가 실행 결과를 보고 자동으로 설명**해줘요.

> 🍱 **비유**: 학생(나)이 시험 결과지를 보여주면, 선생님(Claude)이 "이 부분에서 틀렸어요, 이렇게 하면 돼요"라고 바로 말해주는 것과 같아요.

**사용 방법:**

```text
> ! npm test
```

테스트가 실패하면 Claude가 실패 내용을 보고 "왜 실패했는지"와 "어떻게 고치면 되는지"를 자동으로 설명해줘요. 두 번째 프롬프트를 입력할 필요가 없어요.

**이전 동작으로 되돌리려면:**

`!` 명령어를 그냥 컨텍스트에만 추가하고 싶을 때(Claude 자동 응답 없이)는 설정을 끌 수 있어요:

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ 자동 응답도 일반 프롬프트와 같은 비용이 발생해요<br />
○ <code>!</code> 명령어 자동완성도 생겼어요 — 파일 경로를 입력할 때 탭으로 자동완성 가능
</div>

---

### 3️⃣ `/rewind` — `/clear` 이전으로 대화를 되돌려요 ⏪

실수로 `/clear`를 눌러서 대화 기록을 지웠다면? 이제 `/rewind`로 되돌릴 수 있어요.

> 🍱 **비유**: 문서 편집기에서 Ctrl+Z(실행 취소)처럼, Claude와의 대화도 이제 "뒤로 가기"가 돼요.

```text
> /rewind
```

`/clear` 이전 시점으로 대화가 복원돼요.

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| 보안 자격증명 보호 | `sandbox.credentials` 설정으로 크리덴셜 파일·환경변수를 샌드박스 명령어로부터 보호 |
| 백그라운드 서브에이전트 권한 처리 | 서브에이전트의 권한 요청이 메인 세션에 표시됨 (이전: 자동 거부) |
| `/review <PR>` 개선 | `/code-review medium` 수준의 리뷰 엔진으로 업그레이드 |
| 조직 모델 제한 | 관리자가 설정한 모델 목록 제한이 모델 선택기, `--model`, `/model`, `ANTHROPIC_MODEL`에 모두 적용 |
| 성능 개선 | 스트리밍 응답 CPU 사용량 37% 감소, 장시간 세션 메모리 증가 문제 해결 |
| `/install-github-app` 개선 | GitHub App만 설치하고 Actions 워크플로·시크릿 단계를 건너뛰는 옵션 추가 |
| OTEL 응답 로그 | `claude_code.assistant_response` 이벤트가 모델 응답 텍스트를 포함 (`OTEL_LOG_ASSISTANT_RESPONSES=0`으로 비활성화 가능) |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ "MCP(Model Context Protocol)"는 Claude Code가 외부 도구와 연결되는 방식이에요. 예: GitHub, Slack, Jira 등
</div>
