---
title: "[공] Projects — 관련 코딩 세션을 한 그룹으로 묶어 감독하기"
description: "Claude Code Desktop에서 여러 코딩 세션을 하나의 프로젝트로 그룹화해 병렬 에이전트를 관리하는 Projects 기능 소개"
tags: ["자동생성", "Projects", "병렬세션", "에이전트관리", "Desktop", "2026-09"]
category: "advanced"
order: 41
lastUpdated: "2026-11-19"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 claude.com/claude-code 마케팅 페이지 발표(2026-09-17)와 공식 문서를 토대로 작성했습니다.<br />
★ 이 "Projects"는 Cowork의 프로젝트 기능과 다른, <strong>Claude Code Desktop 전용</strong> 기능입니다.
</div>

## Claude Code의 Projects란?

**여러 코딩 세션을 하나의 프로젝트로 묶어서, 동시에 실행하는 여러 Claude 에이전트를 한 화면에서 쉽게 감독하는 기능**입니다.

> 📂 **비유로 설명하면**: 큰 프로젝트를 진행하는 팀장처럼요. 팀원 A는 프론트엔드, 팀원 B는 백엔드, 팀원 C는 테스트를 맡아 각자 일하는데, 팀장(나)은 한 화면에서 전체 진행상황을 보면서 필요한 팀원에게 지시를 내릴 수 있어요.

---

## 무엇이 가능한가요?

**공식 발표 기준:**
- 관련 코딩 세션들을 **그룹으로 묶어서** 관리
- **여러 Claude 에이전트를 동시에** 실행
- 각 에이전트의 진행 상황을 **한 화면에서 감독**
- **Claude Code Desktop**에서 사용 가능

```
# Projects 활용 흐름 예시

[프로젝트: 쇼핑몰 리뉴얼]
  ├── 세션 A: 상품 목록 페이지 리팩터링
  ├── 세션 B: 결제 모듈 버그 수정
  ├── 세션 C: API 문서 자동 생성
  └── 세션 D: 단위 테스트 작성
```

---

## Agent View와 Projects의 차이

| 기능 | Agent View | Projects |
|---|---|---|
| **목적** | 모든 세션 한 화면 관리 | 관련 세션을 그룹화 |
| **구성** | 전체 세션 목록 | 프로젝트별 세션 묶음 |
| **사용 위치** | CLI + Desktop | Claude Code Desktop |
| **저장** | 임시 | 지속 (공식 발표 기준) |

> 💡 Agent View가 "모든 직원 출석부"라면, Projects는 "팀별 업무 현황판"입니다.

---

## 언제 써야 할까요?

```
✅ Projects가 적합한 상황:

1. 큰 기능을 여러 하위 작업으로 나눌 때
   예: "회원 시스템" = 로그인 + 회원가입 + 비밀번호 찾기

2. 프론트·백엔드를 동시에 개발할 때
   예: API 설계 + UI 구현을 병렬로

3. 같은 목표를 가진 세션들을 묶어 관리하고 싶을 때
   예: "이번 스프린트 작업들"

❌ 굳이 Projects 안 써도 되는 상황:

- 세션 하나로 충분한 간단한 작업
- 연관성 없는 독립적인 작업들
```

---

## 시작하는 방법

**공식 발표 기준 (추정 포함):**

1. Claude Code Desktop 앱 열기
2. 새 프로젝트 만들기 (Projects 메뉴)
3. 관련 작업들을 세션으로 추가
4. 각 세션에 에이전트 할당하여 병렬 실행

> ⚠️ 현재 **Claude Code Desktop 전용** 기능입니다. 터미널 CLI에서는 사용할 수 없어요.

---

## 공식 문서

- [Projects 개요](https://code.claude.com/docs/en/claude-projects) — 공식 문서

---

*출처: claude.com/claude-code 마케팅 발표 (2026-09-17) + 공식 문서*
*작성일: 2026-11-19 (자동 생성)*
