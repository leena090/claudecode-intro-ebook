---
title: "[공] Claude Projects — 여러 코딩 세션을 한 프로젝트로 묶어서 감독하기"
description: "Projects 기능으로 관련된 Claude Code 세션들을 그룹화하고, 여러 에이전트를 한 화면에서 감독할 수 있어요. Desktop 앱 전용."
tags: ["자동생성", "Projects", "프로젝트", "멀티에이전트", "Desktop", "2026"]
category: "codeweb"
order: 5
lastUpdated: "2026-10-23"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — claude.com 마케팅 페이지·공식 블로그(2026-10-15) 기반.
★ <strong>대상</strong>: Claude Code Desktop 앱 사용자 (Pro·Max·Team·Enterprise 플랜)
</div>

## Claude Projects가 뭔가요?

Claude Code Desktop 앱에서 **관련된 코딩 세션들을 묶어서 관리**하는 기능이에요.

> 🗂️ **비유로 설명하면**: 종이가 책상에 흩어져 있으면 찾기 힘들지만, 폴더에 분류해 두면 관련된 서류를 한 번에 찾을 수 있잖아요. Projects는 Claude Code 세션 폴더예요. "쇼핑몰 리팩터링"이라는 프로젝트 폴더 안에 '결제 버그 수정', '테스트 작성', '모바일 레이아웃 개선' 세션을 한 번에 볼 수 있어요.

---

## 주요 기능

### 🗂️ 세션 그룹화

관련 세션을 하나의 프로젝트로 묶을 수 있어요.

- 프로젝트 단위로 진행 상황 확인
- 관련 세션들을 한 화면에서 이동·관리

### 👀 멀티 에이전트 감독

여러 Claude 에이전트가 동시에 작업할 때 **한 화면에서 전부 볼 수 있어요**.

```
[Projects 화면]
쇼핑몰 리팩터링 프로젝트
├─ ① 결제 버그 수정   ← Claude 작업 중 🔄
├─ ② 유닛 테스트 작성 ← 완료 ✅
└─ ③ 모바일 레이아웃  ← 대기 중 ⏸
```

> 🎮 **비유**: 축구 감독처럼 경기장 전체를 내려다보면서 각 선수(Claude 세션)가 어떤 작업을 하는지 한눈에 볼 수 있어요. 감독은 직접 뛰지 않고 전략을 지시하듯, 여러분은 방향만 설정하고 Claude가 작업해요.

---

## 어디서 쓸 수 있나요?

| 조건 | 내용 |
|------|------|
| 플랫폼 | Claude Code **Desktop 앱** 전용 |
| 플랜 | Pro, Max, Team, Enterprise |
| 발표일 | 2026년 10월 15일 GA (일반 출시) |

---

## Code Review도 GA 됐어요

같은 날(2026-10-15) **Code Review가 Team·Enterprise 플랜에서 정식(GA)** 출시됐어요.

> [공식] [코드 리뷰 설정 가이드](https://code.claude.com/docs/en/code-review)

### Code Review란?

PR(풀 리퀘스트)을 머지하기 전에 Claude가 자동으로 코드를 검토해줘요.

- GitHub·GitLab PR에 직접 리뷰 코멘트를 달아요
- `/code-review`, `/code-review ultra` 명령어로 수동 실행도 가능

---

## Auto mode가 기본값이 됐어요

2026년 8월 7일부터 **Pro·Max·Team 플랜에서 Auto mode가 기본값**으로 바뀌었어요.

### Auto mode가 기본값이라는 게 무슨 뜻인가요?

이전에는 Claude Code를 설치하면 Manual mode(모든 명령에 허가 필요)로 시작됐어요.

이제는 **처음부터 Auto mode**로 시작해요. Claude가 안전한 명령은 알아서 실행하고, 위험할 수 있는 명령만 허가를 요청해요.

> ⚙️ 기존 설정이 있는 분은 영향 없어요. 새로 설치하거나 설정을 초기화할 때 적용됩니다.

> 🔒 Auto mode는 백그라운드 안전 분류기가 포함되어 있어서, 데이터 삭제·외부 전송 같은 위험한 명령은 자동으로 차단해요.

---

## 관련 공식 문서

- [공] [Projects 공식 문서](https://code.claude.com/docs/en/claude-projects)
- [공] [Code Review 설정](https://code.claude.com/docs/en/code-review)
- [공] [Auto mode 설정](https://code.claude.com/docs/en/auto-mode-config)
- [공] [Permission modes](https://code.claude.com/docs/en/permission-modes)
