---
title: "[공] Projects — 여러 에이전트 세션을 한 화면에서 관리하기"
description: "Claude Code Desktop의 Projects 기능으로 관련된 여러 코딩 세션을 묶고, 한 화면에서 여러 에이전트를 동시에 감독하는 방법을 알아봅니다."
tags: ["자동생성", "projects", "멀티에이전트", "에이전트뷰", "데스크톱앱", "고급"]
category: "advanced"
order: 28
lastUpdated: "2026-11-22"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026-09-17 블로그 발표, Claude Code Desktop에서 사용 가능<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
</div>

## Projects가 뭔가요?

**Projects(프로젝트)는 관련된 여러 코딩 세션을 하나의 프로젝트로 묶고, 여러 Claude 에이전트를 동시에 감독·관리하는 기능입니다.**

> 🏗️ **비유**: 큰 건물을 지을 때 여러 팀(전기팀, 배관팀, 인테리어팀)이 동시에 일하잖아요? Projects는 그 현장 소장이 되어서 "전기팀 지금 어디까지 했어?" "배관팀 문제 없어?" 하고 한 화면에서 모든 팀을 살펴보는 것과 같아요.

---

## 어떤 상황에서 쓰나요?

### Before: 여러 터미널 창 왔다갔다

```
터미널 창 1: claude → "프론트엔드 로그인 페이지 만들어줘"
터미널 창 2: claude → "백엔드 API 인증 추가해줘"
터미널 창 3: claude → "테스트 코드 작성해줘"
            (매번 창 전환하며 확인... 🥵)
```

### After: Projects로 한 화면에서

```
[Projects: 사용자 인증 기능] ← 프로젝트명
  └─ 세션 1: 프론트엔드 로그인 UI  ● 작업 중
  └─ 세션 2: 백엔드 JWT API       ● 작업 중
  └─ 세션 3: 테스트 코드           ⬜ 대기 중
```

---

## 사용 방법

### 1. 프로젝트 만들기 (Claude Code Desktop)

Claude Code 데스크톱 앱 사이드바에서 **"New Project"** (새 프로젝트) 클릭 후 이름 지정.

### 2. 세션 추가하기

```
프로젝트 내에서 새 세션 시작:
> 이 프로젝트의 프론트엔드 로그인 페이지 만들어줘
```

### 3. 한 화면에서 감독

Agent View(에이전트 뷰) 패널에서 모든 세션 상태 한눈에 확인:
- 각 세션이 지금 무슨 작업 중인지
- 오류가 생긴 세션은 빨간색으로 표시
- 결정이 필요한 세션엔 알림

---

## Projects + Agent View 조합

| 도구 | 역할 |
|------|------|
| **Projects** | 관련 세션을 하나로 묶는 그룹 |
| **Agent View** | 그 세션들의 실시간 현황 대시보드 |

> 💡 Agent View는 Projects 없이도 쓸 수 있지만, Projects로 묶으면 연관된 세션만 모아 보기가 편해요.

---

## 실용 예시: 대형 리팩토링 작업

```
[Projects: 결제 시스템 리팩토링]
  └─ 세션 A: 기존 코드 분석          ✅ 완료
  └─ 세션 B: 새 결제 모듈 작성       ● 진행 중 (파일 편집 중)
  └─ 세션 C: 기존 코드 → 새 모듈로   ⏳ B 완료 후 시작 예정
  └─ 세션 D: 통합 테스트 작성         ⏳ 대기
```

사람은 세션 B가 완료되면 C를 시작하고, D는 C 완료 후 시작하도록 조율만 하면 됩니다.

---

## 주의사항

| 주의 | 내용 |
|------|------|
| 💻 **데스크톱 앱 전용** | Projects는 Claude Code Desktop에서만 사용 가능 (CLI·웹은 미지원) |
| 🔗 **세션 독립성** | 각 세션은 독립적으로 실행 — 한 세션의 오류가 다른 세션에 전파되지 않음 |
| 🧵 **결과 연결** | 세션 간 파일/코드 전달은 사람이 직접 복사하거나 공유 Git 저장소 활용 |

---

## Projects vs Agent Teams 차이

| 항목 | Projects | Agent Teams |
|------|---------|------------|
| 주 용도 | 관련 세션 묶어서 사람이 감독 | Claude가 여러 에이전트를 직접 조율 |
| 조율 주체 | **사람** | **Claude** |
| 복잡도 | 간단 (UI로 관리) | 고급 (SDK 필요) |
| 적합한 작업 | 여러 독립 작업의 동시 진행 | 계층적 에이전트 조율 |

> 🎯 처음엔 Projects로 여러 작업을 나눠서 동시에 돌리고, 익숙해지면 Agent Teams로 Claude 자체가 조율하게 하는 순서로 배우면 좋아요.

---

## 정리

- Projects = 여러 관련 세션을 한 그룹으로 묶는 기능
- Claude Code Desktop에서만 사용 가능
- Agent View와 함께 써서 모든 세션 실시간 감독 가능
- 사람이 여러 에이전트를 한 화면에서 감독·조율하는 방식
- 대형 리팩토링, 멀티모듈 개발 시 특히 유용

📚 공식 문서: [code.claude.com/docs/en/claude-projects](https://code.claude.com/docs/en/claude-projects)
