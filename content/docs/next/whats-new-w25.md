---
title: "[공] 주간 업데이트 Week 25 (2026-06-15~19) — Artifacts, 권한 파라미터, /config 직접 설정"
description: "2026년 6월 3주차 업데이트: 세션에서 공유 가능한 Artifacts 페이지 만들기, 권한 규칙에 파라미터 매칭, /config 명령으로 즉시 설정 변경"
tags: ["업데이트", "w25", "artifacts", "permissions", "config", "2026", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-04"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w25">code.claude.com/docs/en/whats-new/2026-w25</a>. <code>[공]</code><br />
★ 릴리즈: v2.1.178 → v2.1.183 · 주요 기능 3개
</div>

## 이번 주 한 줄 요약

> "세션에서 공유 가능한 페이지 발행, 권한 규칙에 입력 파라미터 매칭, 그리고 /config로 즉시 설정 변경"

---

## 1. Artifacts — 세션에서 라이브 페이지 발행하기 🆕

### Artifacts가 뭔가요?

Claude Code 세션에서 작업한 결과를 **claude.ai의 비공개 URL에 라이브 페이지로 발행**하는 기능이에요. PR 워크스루, 데이터 대시보드 같이 텍스트로만 보기 어려운 내용을 보기 좋은 웹 페이지로 만들 수 있어요.

> 🍱 **비유**: 요리사(Claude)가 요리를 만들어서 "가져가기"만 했다면, Artifacts는 **"예쁜 그릇에 담아서 공유 링크까지 만들어주는"** 기능이에요.

### 어떻게 요청하나요?

```
# 이렇게 말하면 돼요
> 이 PR 변경 사항을 설명하는 Artifact 페이지 만들어줘

> 이 세션 데이터로 대시보드 Artifact 만들어줘
```

Claude가 페이지를 만들고 발행 승인 프롬프트를 보여줘요.

### 주의 사항

<div class="note-circle">
○ <strong>현재 Team·Enterprise 플랜 베타</strong> — Pro/Max에서는 아직 사용 불가<br />
○ 발행된 페이지는 claude.ai의 비공개 URL — 기본적으로 본인만 접근 가능
</div>

---

## 2. 권한 규칙에 입력 파라미터 매칭 (v2.1.178)

### 무슨 기능인가요?

`settings.json`의 권한 규칙에서 이제 **도구의 입력 파라미터 값까지 매칭**할 수 있어요.

```
기존: Agent    → "Agent 도구 전체" 차단
신규: Agent(model:opus) → "Opus 모델을 사용하는 Agent 호출만" 차단
```

> 🍱 **비유**: 집 현관문에 "아무나 차단"이 아니라 "양복 입은 사람만 차단" 같은 **세밀한 필터**를 달 수 있게 된 거예요.

### 사용 예시

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"],
    "ask": ["Bash(command:rm*)"]
  }
}
```

```
문법: Tool(파라미터명:값)
와일드카드: * 사용 가능 — Agent(isolation:*) 는 isolation 값이 있는 모든 Agent 호출에 매칭
```

---

## 3. /config key=value — 프롬프트에서 즉시 설정 변경 (v2.1.181)

### 어떻게 쓰나요?

```
# 기존: /config 실행 → UI에서 클릭·선택
# 신규: 직접 입력

/config thinking=false
/config model=claude-sonnet-5
/config output_format=json
```

<div class="note-circle">
○ 비대화형 모드(<code>-p</code> 플래그)에서도 사용 가능해요<br />
○ Remote Control(모바일·브라우저 세션)에서도 동작해요
</div>

---

## 기타 개선 사항

| 변경 사항 | 내용 |
|---------|------|
| Auto mode 안전 강화 | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` 같은 파괴적 명령어 자동 차단 |
| 커밋 URL 제거 옵션 | `attribution.sessionUrl: false` 설정 시 커밋·PR에서 claude.ai 링크 제거 |
| /config UI 개선 | Enter·Space 모두 설정 변경, Esc가 저장 후 닫기로 변경 |
| 롱 파라그래프 스트리밍 | 긴 문단이 첫 줄바꿈 기다리지 않고 줄 단위로 스트리밍 |
| API 연결 드롭 자동 재시도 | 생각 중 연결이 끊겨도 자동으로 재시도 |
| 팀 기능 실험적 지원 | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 설정 시 Agent tool의 `name` 파라미터로 직접 팀원 호출 |

---

## 전체 변경 로그

공식 변경 로그: [v2.1.178~v2.1.183 →](https://code.claude.com/docs/en/changelog#2-1-178)

---

## 📎 관련 가이드

- [주간 업데이트 Week 26 (2026-06-22~26)](/docs/next/whats-new-w26)
- [주간 업데이트 Week 24 (2026-06-08~12)](/docs/next/whats-new-w24)
- [권한 설정 — deny·ask·allow 완벽 정리](/docs/config/permissions)
- [/config 명령어 레퍼런스](/docs/commands/config)
