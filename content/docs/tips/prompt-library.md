---
title: "[공] 공식 프롬프트 라이브러리 — 바로 복붙하는 황금 명령어 모음"
description: "Anthropic이 공식 공개한 Claude Code 프롬프트 라이브러리. 업무 단계별로 바로 복사해서 쓸 수 있는 실전 프롬프트 모음집입니다."
tags: ["자동생성", "프롬프트", "prompt library", "황금명령어", "복붙", "입문", "실전"]
category: "tips"
order: 11
lastUpdated: "2026-05-18"
---

<div class="note-star">
★ 출처: <a href="https://code.claude.com/docs/en/prompt-library">code.claude.com/docs/en/prompt-library</a> [공]<br />
★ Anthropic이 공식 제공하는 복붙용 프롬프트 모음집
</div>

## 프롬프트 라이브러리란?

Anthropic이 **Claude Code에서 실제로 효과가 좋은 프롬프트**를 모아 공개한 페이지예요.

> 📚 **비유로 설명하면**: 처음 요리를 배울 때 요리책 레시피를 보고 따라하는 것처럼, Claude Code를 처음 쓸 때 이 프롬프트들을 그대로 복사해서 쓰면 돼요. `{중괄호}` 안의 단어만 내 상황에 맞게 바꾸면 됩니다.

공식 페이지: [code.claude.com/docs/en/prompt-library](https://code.claude.com/docs/en/prompt-library)

---

## 단계별 황금 프롬프트 모음

업무 흐름(소프트웨어 개발 생애주기)에 따라 단계별로 정리했어요.

### 🔍 1단계: 코드베이스 파악 (Onboard · Understand)

처음 프로젝트를 맡거나, 오래된 코드를 이해해야 할 때 쓰는 프롬프트예요.

| 목적 | 프롬프트 |
|---|---|
| 전체 구조 파악 | `give me an overview of this codebase: architecture, key directories, and how the pieces connect` |
| 특정 파일 이해 | `explain what {파일경로} does and how data flows through it. write it up as {형식}` |
| 기능 위치 찾기 | `where do we {기능}?` |
| 삭제 영향 파악 | `what would break if I deleted {대상}?` |
| 변경 이력 추적 | `look through the commit history of {파일경로} and summarize how it evolved and why` |
| 수정 파일 예측 | `which files would I need to touch to {변경내용}?` |
| 비개발자용 설명 | `I am a {역할}. walk me through what happens when a user {행동}, from the UI down to the result` |

**활용 예시:**
```
where do we validate uploaded file types?

explain what src/payment/checkout.ts does and how data flows through it.
write it up as an HTML page with a diagram, then open it in my browser

I am a PM. walk me through what happens when a user clicks Export to PDF,
from the UI down to the result
```

---

### 📐 2단계: 계획 세우기 (Plan)

수정하기 전에 **먼저 계획을 세우게** 하는 프롬프트예요.  
Claude가 파일을 건드리지 않고 계획만 세우도록 명시하는 게 포인트예요.

| 목적 | 프롬프트 |
|---|---|
| 리팩토링 계획 | `plan how to refactor the {대상} to {목표}. list the files you would change, but don't edit anything yet` |
| 기능 기획 인터뷰 | `I want to build {기능}. interview me about implementation, UX, edge cases, and tradeoffs until we have covered everything, then write the spec to SPEC.md` |

**활용 예시:**
```
plan how to refactor the payment module to support multiple currencies.
list the files you would change, but don't edit anything yet

I want to build a user notification system.
interview me about implementation, UX, edge cases, and tradeoffs
until we have covered everything, then write the spec to SPEC.md
```

> 💡 **팁**: 계획 단계에서 `don't edit anything yet` 을 꼭 넣으면 Claude가 먼저 분석하고 물어봐요. 예상치 못한 파일 수정을 방지할 수 있어요.

---

### 🔨 3단계: 구현 (Build)

실제 코드를 작성하거나 기능을 만들 때 쓰는 프롬프트예요.

**기본 구현 프롬프트 패턴:**
```
implement {기능}. focus on {핵심포인트} first, then add {추가사항}

add {새기능} to {파일/모듈}.
follow the existing pattern in {참고파일}
```

> 🎯 **팁**: 구현할 때는 **참고할 기존 코드 파일**을 함께 알려주면 Claude가 프로젝트 스타일에 맞게 작성해줘요.

---

### 🧪 4단계: 테스트 (Test)

코드 품질을 높이는 테스트 관련 프롬프트예요.

```
write tests for {파일경로}. focus on edge cases and error handling

what test cases are we missing for {기능}?

run the test suite and fix any failures you find
```

---

### 🔍 5단계: 코드 리뷰 (Review)

PR(풀 리퀘스트)이나 코드를 검토할 때 쓰는 프롬프트예요.

```
review the changes in this PR for correctness, style, and potential issues

what are the security implications of {변경사항}?

does this implementation follow our existing patterns in {참고파일}?
```

---

## `{중괄호}` 사용법

프롬프트의 `{중괄호}` 는 **내 상황에 맞게 바꿔 넣는 빈칸**이에요.

| 원래 프롬프트 | 내 상황에 맞게 수정 |
|---|---|
| `what would break if I deleted {target}?` | `what would break if I deleted the retryWithBackoff helper?` |
| `where do we {behavior}?` | `where do we validate uploaded file types?` |
| `I am a {role}.` | `I am a PM.` |

---

## 처음 쓸 때 추천 순서

Claude Code를 처음 접한 프로젝트라면 이 순서로 써보세요:

1. **전체 파악** → `give me an overview of this codebase...`
2. **궁금한 부분 파고들기** → `explain what {파일} does...`
3. **수정 전 계획** → `plan how to refactor... don't edit anything yet`
4. **구현** → 계획 확인 후 실행
5. **테스트** → `run the test suite and fix any failures`

> 🍱 **비유로 설명하면**: 새 동네로 이사 왔을 때 ① 지도로 전체 파악, ② 자주 갈 곳 찾기, ③ 장 볼 목록 작성, ④ 실제로 장보기, ⑤ 냉장고 확인 — 이 순서처럼 Claude와 일하면 훨씬 자연스러워요.

---

## 공식 라이브러리 직접 보기

Anthropic이 계속 업데이트하는 라이브러리 원본은 여기서 확인하세요:

🔗 **[code.claude.com/docs/en/prompt-library](https://code.claude.com/docs/en/prompt-library)**

역할별(PM, 디자이너, 개발자)로 필터링하거나, 업무 단계별로 분류해서 볼 수 있어요.
