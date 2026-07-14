---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "MCP 서버를 터미널에서 직접 로그인, ! 명령어 실행 후 AI 자동 설명, /rewind로 /clear 이전 대화 복원"
tags: ["업데이트", "2026", "week26", "MCP", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — 터미널에서 MCP 서버 로그인 🔐

MCP(엠씨피) 서버를 인증할 때 Claude Code를 열어야 했는데, 이제 **터미널 명령어 한 줄**로 로그인할 수 있어요.

> 🍱 **비유**: MCP 서버는 Claude Code에 연결하는 "외부 도구"예요. 예를 들면 GitHub, Slack, Jira 같은 것들이에요. 이전에는 Claude Code를 켜고 메뉴에서 로그인했다면, 이제는 카카오톡처럼 터미널에서 직접 로그인 링크를 열 수 있어요.

```bash
# 설정된 MCP 서버 인증 (브라우저로 OAuth 흐름 진행)
claude mcp login sentry

# 인증 제거
claude mcp logout sentry
```

**언제 유용한가요?**

| 상황 | 설명 |
|---|---|
| 서버 처음 설정 시 | Claude Code 세션을 열지 않고 서버 인증 완료 |
| 인증 갱신 시 | 기존 자격증명 삭제 후 재인증 |
| 자동화 스크립트에서 | 사전에 MCP 서버 인증을 준비해두기 |

<div class="note-circle">
○ `claude mcp login`은 브라우저 OAuth 흐름을 실행해요<br />
○ `claude mcp logout`은 저장된 자격증명을 삭제해요
</div>

---

### 2️⃣ `!` 셸 명령어 — 실행 후 자동 AI 설명 🤖

`!` 접두사로 명령어를 실행하면, 이제 Claude가 **결과를 보고 자동으로 설명**해줘요. 실패 원인을 별도로 물어볼 필요가 없어요.

```
> ! npm test
```

> 🍱 **비유**: 의사(Claude)에게 검사 결과지를 가져가면, 직접 결과를 읽고 "이 수치가 높네요, 이런 이유 때문이에요"라고 바로 설명해주는 것과 같아요. 이전엔 검사 결과를 직접 복사해서 의사한테 "이게 뭔가요?"라고 물어봐야 했어요.

**동작 방식:**

| 상황 | 결과 |
|---|---|
| 테스트 실패 | Claude가 실패 원인 분석 및 수정 제안 |
| 빌드 오류 | 에러 메시지를 해석하고 해결책 제시 |
| 명령어 출력 결과 | 결과 내용을 요약하고 다음 단계 제안 |

**이전 동작이 더 좋다면:**
```json
{
  "respondToBashCommands": false
}
```
- `settings.json`에 추가하면 이전처럼 결과만 컨텍스트에 추가하고 설명 없이 끝내요

**추가 편의 기능:**
- `! 명령어` 입력 시 **파일 경로 자동완성** 지원

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/rewind` 강화 | `/clear` 실행 이전 대화도 복원 가능 |
| `sandbox.credentials` | 샌드박스에서 자격증명 파일·비밀 환경변수 읽기 차단 |
| 조직 모델 제한 | `/model`, `--model`, `ANTHROPIC_MODEL` 등 모든 경로에서 조직 설정 적용 |
| `autoMode.classifyAllShell` | 모든 Bash/PowerShell 명령어를 Auto Mode 분류기로 라우팅 |
| 서브에이전트 권한 | 백그라운드 서브에이전트의 권한 요청이 메인 세션에 표시됨 |
| 스트리밍 CPU 37% 절감 | 응답 스트리밍 시 CPU 사용량 대폭 감소 |
| `/review <pr>` 강화 | `/code-review medium`과 동일한 엔진 사용 |
| 샌드박스 네트워크 기억 | 허용한 호스트는 세션 종료까지 재확인 없이 연결 허용 |
| OTLP 로그 확장 | `claude_code.assistant_response` 이벤트로 AI 응답 텍스트 기록 가능 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ `/rewind before /clear` — 실수로 `/clear`한 대화 내역을 살릴 수 있어요!
</div>
