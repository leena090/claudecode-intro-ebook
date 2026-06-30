---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "터미널에서 MCP 서버 로그인(claude mcp login), 셸 명령어 결과에 Claude 자동 응답, /rewind로 /clear 이전으로 되돌리기"
tags: ["업데이트", "2026", "week26", "mcp-login", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-06-30"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a><br />
📦 배포 버전: v2.1.185 → v2.1.193
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — MCP 서버 로그인을 터미널에서 바로 🔐

이전까지는 MCP 서버를 연결할 때 Claude Code 내의 `/mcp` 메뉴를 열어서 인증해야 했어요. 이제 터미널에서 바로 처리할 수 있어요.

> 🍱 **비유**: 집에 들어가려면 항상 관리실에 가서 키를 받아야 했는데, 이제 현관에서 바로 지문 인식으로 열 수 있게 된 거예요.

**사용법:**
```bash
# MCP 서버 로그인 (OAuth 흐름 실행)
claude mcp login sentry

# 로그아웃 (저장된 인증 정보 삭제)
claude mcp logout sentry
```

`claude mcp login`을 실행하면 해당 MCP 서버의 OAuth 인증이 바로 시작돼요. 세션을 열지 않아도 사전에 인증을 완료해 둘 수 있어요.

**어떤 상황에 유용할까요?**

| 상황 | 활용 |
|---|---|
| CI/CD 설정 | 자동화 스크립트에서 사전 인증 처리 |
| 여러 MCP 서버 | 한 번에 여러 서버를 미리 로그인 |
| 재인증 필요 시 | 만료된 토큰을 세션 열지 않고 갱신 |

<div class="note-circle">
○ GitHub MCP, Sentry MCP, Slack MCP 등 OAuth 인증을 사용하는 모든 MCP 서버에 적용돼요<br />
○ CI 파이프라인에서 무인 실행(unattended)은 브라우저 인증이 필요해 아직 불가 — 로컬 개발 환경용이에요
</div>

---

### 2️⃣ `!` 명령어 실행 후 Claude가 바로 설명해줘요 💬

Claude Code에서 `!` 접두사로 셸 명령어를 실행하면, 이제 Claude가 그 결과를 보고 **자동으로 분석과 설명을 제공**해요.

> 🍱 **비유**: 요리사에게 "이 재료들 어때요?" 하고 재료를 올려두면, 예전엔 "네, 올려뒀어요"로 끝났는데 이제는 "이 재료들로는 파스타가 제일 잘 어울리겠어요, 왜냐하면..."처럼 바로 조언해주는 거예요.

**전: 결과만 컨텍스트에 추가**
```
> ! npm test
(테스트 실패 로그가 컨텍스트에 들어감)
→ 그 다음 "뭐가 문제야?" 라고 다시 물어야 했어요
```

**후: 결과에 바로 응답**
```
> ! npm test
(테스트 실패 로그가 출력됨)
→ Claude가 바로 "3번 테스트가 실패했네요. auth.test.ts:47에서 토큰 검증 로직에 문제가 있어요..."
```

**이전 동작 유지하려면 (`settings.json`):**
```json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ 응답 비용은 일반 프롬프트와 동일 (추가 토큰 소비)<br />
○ 단순 출력만 보고 싶다면 <code>respondToBashCommands: false</code>로 끄면 돼요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/rewind` 강화 | `/clear`로 대화를 지운 **이전** 시점으로도 되돌아갈 수 있음 |
| `sandbox.credentials` | 샌드박스 명령이 자격증명 파일·비밀 환경변수를 읽지 못하도록 차단 |
| 모델 제한 적용 범위 확대 | 조직 설정 모델 제한이 모델 선택기·`--model`·`/model`·`ANTHROPIC_MODEL` 모두에 적용됨 |
| `autoMode.classifyAllShell` | 모든 Bash·PowerShell 명령을 Auto 모드 분류기에 통과시키는 설정 |
| OpenTelemetry 응답 로그 | `claude_code.assistant_response` 이벤트로 모델 응답 텍스트 기록 (비활성화: `OTEL_LOG_ASSISTANT_RESPONSES=0`) |
| 백그라운드 서브에이전트 권한 | 백그라운드 에이전트의 권한 요청이 메인 세션에 표시됨 (이전: 자동 거부) |
| `/install-github-app` 옵션 | GitHub App만 설치하고 Actions 워크플로·시크릿 설정 단계는 건너뛸 수 있음 |
| 샌드박스 네트워크 호스트 기억 | 허용한 호스트를 세션 내내 기억 (이전: 연결할 때마다 재확인) |
| 스트리밍 CPU 최적화 | 스트리밍 응답 CPU 사용량 약 37% 감소 |
| `/review <pr>` 업그레이드 | `/code-review medium` 엔진과 동일한 수준으로 업그레이드 |
| `!` 명령어 자동완성 | Bash 모드에서 `!` 명령어에 파일 경로 자동완성 지원 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ 이번 주는 <strong>품질 개선과 개발자 편의성</strong>에 집중한 업데이트예요 — 눈에 잘 안 보이지만 매일 쓰는 기능들이 더 편해졌어요
</div>
