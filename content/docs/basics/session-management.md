---
title: "[공] 세션 관리 — 대화에 이름 붙이고, 이어하고, 브랜치 나누기"
description: "Claude Code 대화(세션)를 이름 붙이고, 나갔다가 돌아오고, PR 기반으로 이어가는 방법을 쉽게 설명해요"
tags: ["기본", "세션", "session", "--resume", "--continue", "--from-pr", "이어하기"]
category: "basics"
order: 5
lastUpdated: "2026-05-20"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/sessions" target="_blank">code.claude.com/docs/en/sessions</a> 내용을 바탕으로 작성됐어요.
</div>

## 세션이 뭔가요?

Claude Code를 실행하면 시작되는 **하나의 대화 흐름**이에요. 터미널 창 하나 = 세션 하나라고 생각하면 쉬워요.

> 🍱 **비유로 설명하면**: 새 공책을 펼치면 오늘의 메모가 시작되고, 덮으면 나중에 다시 펼쳐서 이어쓸 수 있어요. 세션은 그 공책이에요.

---

## 세션 이름 붙이기

### 왜 이름이 필요해요?

세션이 여러 개면 나중에 "어느 작업이 어느 세션이었지?" 헷갈려요. 이름을 붙여두면 바로 찾을 수 있어요.

```bash
# 세션 시작할 때 이름 붙이기
claude --session-name "로그인 버그 수정"

# 진행 중인 세션에 이름 붙이기 (대화 중)
/session-name 로그인 버그 수정
```

---

## 이어하기 — 3가지 방법

### ① 가장 마지막 세션 이어하기 (`--continue`)

```bash
# 어제 하던 작업 그대로 이어가기
claude --continue
```

> 🍱 **비유로 설명하면**: 어제 읽던 책 페이지에 책갈피를 꽂아뒀다가, 오늘 딱 그 페이지부터 읽는 것과 같아요.

### ② 목록에서 고르기 (`--resume`)

```bash
# 이전 세션 목록 보고 선택하기
claude --resume
```

실행하면 이런 화면이 나와요:

```
? 어떤 세션을 이어하시겠어요?
  ▸ 로그인 버그 수정 (2시간 전)
    결제 모듈 리팩토링 (어제)
    회원가입 화면 개선 (3일 전)
```

방향키로 고르고 Enter를 누르면 돼요.

### ③ PR 기반으로 이어하기 (`--from-pr`)

```bash
# GitHub PR 번호나 URL로 그 작업 이어가기
claude --from-pr 42
claude --from-pr https://github.com/my-org/my-repo/pull/42
```

> 🍱 **비유로 설명하면**: "3번 상담 건 이어서 처리해줘"라고 하면, 그 상담 기록 전체를 불러와서 맥락을 이어가는 것과 같아요.

<div class="note-star">
★ <strong>/resume 명령어</strong>로도 같은 기능을 쓸 수 있어요. 대화 중에 `/resume`를 입력하면 이전 세션 목록이 팝업으로 나와요. <code>[공]</code>
</div>

---

## 세션 브랜치 나누기

한 세션에서 "이 방향으로도 해보고, 저 방향으로도 해보고 싶어요"라면?

```bash
# 현재 세션을 복사해서 새 방향으로 출발
claude --fork
```

> 🍱 **비유로 설명하면**: 교차로에서 두 길을 모두 탐색해보고 싶을 때, 지도를 복사해서 각각 다른 길로 가보는 거예요. 원본은 그대로 있어요.

---

## 세션 기록은 어디에 있어요?

```bash
# 기록 저장 위치 (macOS/Linux)
~/.claude/projects/
```

각 세션은 JSON 파일로 저장돼요. 직접 열어볼 수 있고, 오래된 것은 정리해도 돼요.

---

## 한눈에 정리

| 상황 | 명령어 |
|---|---|
| 마지막 작업 바로 이어가기 | `claude --continue` |
| 목록 보고 골라서 이어가기 | `claude --resume` |
| PR 번호로 이어가기 | `claude --from-pr <번호>` |
| 세션에 이름 붙이기 | `claude --session-name "이름"` |
| 진행 중에 이름 붙이기 | `/session-name 이름` |
| 여러 방향 탐색하기 | `claude --fork` |

<div class="note-star">
★ <strong>팁</strong>: 중요한 작업은 세션 시작 전에 이름을 붙여두는 습관을 들이면, 나중에 찾기가 훨씬 편해요.
</div>
