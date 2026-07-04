---
title: "[공] 주간 업데이트 Week 26 (2026-06-22~26) — MCP 로그인, ! 명령 자동 분석, /rewind"
description: "2026년 6월 4주차 업데이트: CLI에서 MCP 서버 인증, 셸 명령어 실행 후 자동 Claude 응답, /rewind로 /clear 이전 대화 복구"
tags: ["업데이트", "w26", "mcp", "shell-mode", "rewind", "2026", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-04"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w26">code.claude.com/docs/en/whats-new/2026-w26</a>. <code>[공]</code><br />
★ 릴리즈: v2.1.185 → v2.1.193 · 주요 기능 2개 + /rewind
</div>

## 이번 주 한 줄 요약

> "셸에서 MCP 서버 인증, ! 명령 실행 결과에 Claude가 자동으로 답변, /rewind로 /clear 이전 대화 복구"

---

## 1. `claude mcp login` — CLI에서 MCP 서버 인증 (v2.1.186)

### 이전까지는 어떻게 했나요?

MCP 서버에 로그인하려면 **세션을 먼저 시작한 뒤 `/mcp` 메뉴**에서 인증해야 했어요.

### 이제는?

터미널에서 **세션 시작 없이 바로 인증** 가능해요:

```bash
# MCP 서버 로그인 (OAuth 흐름 실행)
claude mcp login sentry

# MCP 서버 로그아웃
claude mcp logout sentry
```

> 🍱 **비유**: 배달 앱에 로그인하려고 앱을 먼저 열어야 했다면, 이제는 **앱 없이 터미널에서 바로 로그인**할 수 있게 된 거예요.

<div class="note-circle">
○ <code>claude mcp login</code>은 서버의 OAuth 흐름을 직접 실행해요<br />
○ <code>claude mcp logout</code>은 저장된 자격증명을 삭제해요
</div>

---

## 2. 셸 모드 `!` 명령 — 실행 결과에 자동 Claude 응답 (v2.1.186)

### 새로운 동작

`!` 접두사로 실행한 명령의 출력에 **Claude가 자동으로 분석·설명을 제공**해요.

```
# 이전: ! npm test 실행 → 출력 내용이 컨텍스트에 추가됨 (Claude 응답 없음)
# 이후: ! npm test 실행 → 출력 내용 + Claude의 자동 분석·설명
```

실제 사용 예시:
```
> ! npm test
(테스트 실패 출력...)

[Claude 자동 응답]
3개의 테스트가 실패했어요. 주요 원인은...
```

> 🍱 **비유**: 요리하다가 연기가 나면 셰프(Claude)가 자동으로 "이건 너무 뜨거워서 그래요, 불을 낮추세요"라고 말해주는 것과 같아요.

### 이전 동작이 필요하다면

자동 응답 없이 출력만 컨텍스트에 추가하고 싶으면:

```json
// settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ 자동 응답은 일반 프롬프트와 같은 비용이 발생해요<br />
○ ! 명령어에 파일 경로 자동완성도 지원돼요
</div>

---

## 3. `/rewind` — `/clear` 이전 대화 복구

```
# /clear 를 실수로 눌렀다면?
/rewind

# /clear 이전의 대화로 돌아가요!
```

> 🍱 **비유**: Word 문서에서 실수로 Ctrl+A → Delete 를 눌렀을 때 Ctrl+Z로 복구하는 것과 같아요. `/rewind`가 그 **실행 취소 버튼**이에요.

---

## 기타 개선 사항

| 변경 사항 | 내용 |
|---------|------|
| `sandbox.credentials` | 샌드박스 명령이 자격증명 파일·비밀 환경변수 읽는 것 차단 |
| 조직 모델 제한 | 관리자가 설정한 모델 제한이 모델 피커, `--model`, `/model`, `ANTHROPIC_MODEL`에 모두 적용 |
| 백그라운드 서브에이전트 권한 | 백그라운드 에이전트의 권한 요청이 메인 세션에 표시 (이전: 자동 거부됨) |
| `/install-github-app` 개선 | GitHub App만 설치하고 Actions 워크플로우·시크릿 단계 건너뛰기 가능 |
| 스트리밍 CPU 절약 | 스트리밍 응답 CPU 사용량 약 37% 감소 |
| `/review <pr>` 업그레이드 | `/code-review medium`과 동일한 리뷰 엔진 사용 |
| 샌드박스 네트워크 | 허용한 호스트가 세션 동안 기억됨 (이전: 매번 재확인) |

---

## 전체 변경 로그

공식 변경 로그: [v2.1.185~v2.1.193 →](https://code.claude.com/docs/en/changelog#2-1-185)

---

## 📎 관련 가이드

- [주간 업데이트 Week 25 (2026-06-15~19)](/docs/next/whats-new-w25)
- [MCP 서버 설정 — 외부 도구 연결하기](/docs/config/mcp)
- [셸 모드(!) — 터미널 명령어와 Claude 함께 쓰기](/docs/basics/shell-mode)
