---
title: "[공] 세션 관리 완전 정복 — 대화를 저장하고, 이름 붙이고, 이어가기"
description: "Claude Code의 세션을 저장·재개·이름 붙이기·분기하는 방법을 한 번에 정리. --continue, --resume, /resume 피커, 세션 내보내기까지"
tags: ["자동생성", "세션", "session", "resume", "continue", "세션관리", "기초"]
category: "basics"
order: 5
lastUpdated: "2026-05-18"
---

<div class="note-star">
★ 출처: <a href="https://code.claude.com/docs/en/sessions">code.claude.com/docs/en/sessions</a> [공]<br />
★ 공식 발표 기준 — 2026-05-18 최신화
</div>

## 세션이 뭔가요?

Claude Code에서 **세션(session)** 은 한 번의 연속된 대화를 의미해요.  
터미널을 닫았다가 다시 열어도 "이전 대화 이어가기"가 되는 마법 같은 기능이에요.

> 🎫 **비유로 설명하면**: 세션은 식당의 **번호표** 같은 거예요. 잠깐 자리를 비워도 번호만 기억하면 돌아와서 이어서 주문할 수 있어요. 번호표에 이름도 붙일 수 있고, 복사본을 만들어서 "다른 루트"로 시도해볼 수도 있어요.

세션은 자동으로 내 컴퓨터 로컬 파일로 저장돼요:
```
~/.claude/projects/프로젝트명/세션ID.jsonl
```

---

## 세션 이어가기 — 핵심 3가지

### 🔄 1. 가장 최근 대화 이어가기

```bash
claude --continue
```

터미널을 닫았다 열었을 때, **직전 대화를 그냥 이어가는** 가장 간단한 방법이에요.

### 📋 2. 고르기 화면(세션 피커) 열기

```bash
claude --resume
```

여러 대화 중 하나를 골라서 이어갈 수 있는 **목록 화면**이 떠요.

### 🏷️ 3. 이름으로 바로 이어가기

```bash
claude --resume auth-refactor
```

세션 이름을 알고 있다면 화면 열 것도 없이 바로 이어가요.

### 🔗 4. PR과 연결된 세션 이어가기

```bash
claude --from-pr 42
```

깃허브(GitHub) PR(풀 리퀘스트) 번호로 해당 작업 세션을 불러올 수 있어요.

---

### 세션 재개 명령어 한눈에 보기

| 명령어 | 하는 일 |
|---|---|
| `claude --continue` | 이 폴더의 가장 최근 대화 이어가기 |
| `claude --resume` | 세션 목록(피커) 열기 |
| `claude --resume <이름>` | 이름으로 바로 이어가기 |
| `claude --from-pr <번호>` | PR 번호로 연결된 세션 열기 |
| `/resume` | 대화 중에 다른 세션으로 갈아타기 |

---

## 세션에 이름 붙이기

> 📌 **비유로 설명하면**: 여러 탭을 열어놓은 브라우저에서 탭 이름을 "제목 없음" 대신 "결제 버그 수정"으로 바꿔두는 것과 같아요. 나중에 찾을 때 훨씬 편해요.

| 언제 | 어떻게 |
|---|---|
| Claude Code 시작할 때 | `claude -n auth-refactor` |
| 대화 중에 | `/rename auth-refactor` |
| 세션 피커에서 | 세션 선택 후 `Ctrl+R` |

이름 붙인 뒤에는 언제든 `claude --resume auth-refactor` 로 바로 돌아올 수 있어요.

---

## 세션 피커(목록 화면) 키보드 단축키

`claude --resume` 또는 대화 중 `/resume` 을 치면 세션 목록이 뜨는데, 이렇게 이동해요:

| 키 | 하는 일 |
|---|---|
| `↑` / `↓` | 위아래로 이동 |
| `Enter` | 선택한 세션 열기 |
| `Space` | 미리 보기 |
| `Ctrl+R` | 세션 이름 바꾸기 |
| `Ctrl+B` | 현재 브랜치 세션만 보기 |
| `Ctrl+W` | 이 저장소의 모든 브랜치 세션 보기 |
| `Ctrl+A` | 내 컴퓨터 전체 프로젝트의 세션 보기 |
| `/` 또는 글자 입력 | 검색 모드 (PR URL도 붙여넣기 가능) |
| `Esc` | 피커 닫기 |

---

## 세션 분기(Branch) — 두 갈래로 시도해보기

> 🌿 **비유로 설명하면**: 나뭇가지가 갈라지듯, 지금 대화를 복사해서 "다른 방향"을 시도할 수 있어요. 원본은 그대로 살아있고, 나뭇가지처럼 새 방향을 탐색해요.

```bash
# 대화 중에
/branch try-streaming-approach

# 터미널에서
claude --continue --fork-session
```

`/branch` 를 하면:
- 지금까지의 대화를 복사한 **새 세션**으로 전환돼요
- **원본 세션은 그대로** 남아 있어요
- 분기된 세션들은 세션 피커에서 **접어서 보기** 가 돼요 (`→` 키로 펼치기)

---

## 세션 내 컨텍스트 관리

| 명령어 | 하는 일 |
|---|---|
| `/clear` | 대화 초기화 (이전 내용은 저장되어 재개 가능) |
| `/compact [내용]` | 대화 내용을 요약으로 압축 |
| `/context` | 현재 컨텍스트 창에 무엇이 있는지 확인 |

---

## 대화 내보내기

```bash
/export
```

현재 대화 전체를 클립보드에 복사하거나 파일로 저장할 수 있어요.

```bash
/export my-session.txt
```

파일 이름을 직접 지정할 수도 있어요.

---

## 전사 파일(transcript) 위치

세션 내용은 이 경로에 저장돼요:
```
~/.claude/projects/프로젝트경로/세션ID.jsonl
```

기본적으로 **30일 후 자동 삭제**돼요. 더 오래 보관하려면 `settings.json` 에서 `cleanupPeriodDays` 값을 바꿔요.

---

## 자주 쓰는 시나리오

### "어제 하던 작업 이어가기"
```bash
cd 내프로젝트폴더
claude --continue
```

### "여러 작업을 동시에 하다가 전환하기"
```bash
# 현재 작업에 이름 붙이기
/rename 결제버그수정

# 다른 세션으로 갈아타기
/resume
```

### "이 접근 방식이 맞는지 모르겠어서 두 가지 다 해보기"
```bash
/branch 방법A-시도
# 방법 A 진행...

# 원본으로 돌아가서 방법 B도 시도
/resume 결제버그수정
/branch 방법B-시도
```

---

> 📚 **함께 보면 좋은 자료**
> - [세션 관리 명령어](/docs/commands/session-commands) — `/clear`, `/compact` 등 명령어 모음
> - [체크포인팅](/docs/advanced/auto-mode-config) — 코드+대화를 특정 시점으로 되감기
> - [워크트리(Worktrees)](/docs/advanced/worktrees) — 브랜치별로 완전히 분리된 작업 공간
