---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "MCP 서버 셸 인증(claude mcp login), ! prefix로 명령어 결과 즉시 분석, /rewind로 대화 되돌리기"
tags: ["업데이트", "2026", "week26", "mcp", "mcp-login", "rewind", "shell-mode", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ `claude mcp login` — MCP 서버에 로그인 🔑

MCP 서버(Claude Code에 연결된 외부 도구)가 로그인이 필요한 경우, 이제 셸에서 직접 인증할 수 있어요.

```bash
# GitHub MCP 서버에 로그인
claude mcp login github

# 현재 로그인 상태 확인
claude mcp list
```

> 🍱 **비유**: 식당(MCP 서버)에 예약할 때 전화로만 되던 걸, 이제 앱에서 바로 로그인해서 예약할 수 있는 것과 같아요.

**어떤 경우에 필요한가요?**

| 상황 | 설명 |
|---|---|
| GitHub 연동 | PR 읽기·쓰기 MCP 서버 인증 |
| Slack 연동 | 워크스페이스 접근 인증 |
| 사내 도구 | 회사 내부 API 인증이 필요한 경우 |

<div class="note-circle">
○ 인증 정보는 안전하게 로컬에 저장돼요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/mcp" target="_blank">code.claude.com/docs/en/mcp</a>
</div>

---

### 2️⃣ `!` prefix — 명령어 실행 + Claude 즉시 분석 🔍

터미널에서 명령어를 실행한 뒤, 그 결과를 Claude Code에게 바로 분석해달라고 할 수 있어요.

```bash
# 일반 셸 명령어 실행: bash 결과만 나옴
ls -la

# ! prefix: bash 결과 + Claude 분석
!ls -la
```

> 🍱 **비유**: 병원에서 혈액 검사 결과지를 받았을 때, 일반적으로는 그냥 숫자가 나와요. 그런데 의사 선생님(Claude)이 옆에 있으면 "이 수치는 정상 범위예요. 다만 이 항목은 조금 낮으니..."라고 바로 설명해주는 것과 같아요.

**활용 예시:**

```bash
# 에러 로그 분석
!cat error.log | tail -50

# 테스트 결과 분석
!npm test 2>&1

# 빌드 에러 즉시 분석
!make build
```

<div class="note-circle">
○ 명령어 출력이 너무 길면 자동으로 잘라서 분석해요<br />
○ Claude Code CLI에서만 작동해요 (웹 버전 미지원)
</div>

---

### 3️⃣ `/rewind` — `/clear` 이전 대화로 되돌리기 ⏪

대화를 `/clear`로 지웠다가 "아, 아까 그 답변이 필요했는데..." 싶을 때, 이제 `/rewind`로 돌아올 수 있어요.

```bash
# /clear로 지운 이전 대화로 되돌리기
/rewind
```

> 🍱 **비유**: 문서를 Ctrl+Z로 실수로 지워버렸을 때 다시 Ctrl+Z(Undo)로 복구하는 것과 같아요. `/clear`가 대화를 지우는 Ctrl+Z라면, `/rewind`는 그걸 복구하는 Ctrl+Z예요.

**주의사항:**

| 항목 | 설명 |
|---|---|
| 되돌리기 범위 | 마지막 `/clear` 직전 상태로만 돌아가요 |
| 파일 변경 | 파일에 적용된 코드 수정은 되돌아가지 않아요 |
| 세션 재개 | 대화 기록만 복원돼요 |

<div class="note-circle">
○ `/clear` 전 대화가 세션 파일에 남아 있어야 작동해요<br />
○ 여러 번 연속으로 되돌리는 건 지원하지 않아요 (최근 1단계만)
</div>
