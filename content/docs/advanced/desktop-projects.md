---
title: "[공] Desktop Projects — 여러 Claude 세션을 한 번에 관리하기"
description: "Claude Code Desktop의 Projects 기능. 관련 코딩 세션들을 묶어서 여러 에이전트를 한 화면에서 감독할 수 있어요"
tags: ["자동생성", "Projects", "데스크톱", "멀티에이전트", "세션관리", "2026"]
category: "advanced"
order: 29
lastUpdated: "2026-11-24"
---

<div class="note-star">
★ <strong>[공]</strong> — 2026-09-17 공식 발표 기준. <strong>Desktop 앱 전용</strong> 기능이에요.<br/>
★ 이 문서는 Claude Code Desktop의 Projects 기능을 다뤄요. Claude 웹의 "프로젝트"(<a href="/docs/webapp/projects">webapp/projects</a>)와는 다른 기능이에요.
</div>

## Desktop Projects가 뭔가요?

Claude Code Desktop 앱에서, 관련 있는 코딩 세션들을 하나의 "프로젝트"로 묶어서 관리하는 기능이에요. 여러 Claude 에이전트가 동시에 돌아갈 때 한 화면에서 전체를 감독할 수 있어요.

> 🏭 **비유로 설명하면**: 공장 감독관이 여러 작업 라인을 한 번에 모니터링하는 것처럼, 여러 코딩 작업을 동시에 진행하면서 한 화면에서 전체 상황을 볼 수 있어요.

---

## Agent View와 함께 쓰면 더 강력해요

| 기능 | 역할 |
|---|---|
| **Projects** | 관련 세션들을 그룹으로 묶기 |
| **Agent View** | 모든 세션의 진행 상황 한눈에 보기 |

두 기능을 같이 쓰면 여러 Claude가 동시에 일하는 걸 편하게 관리할 수 있어요.

---

## 어떻게 쓰나요?

**새 프로젝트 만들기:**
```
Claude Code Desktop 앱 → 왼쪽 패널 → "New Project" → 이름 입력
```

**세션을 프로젝트에 추가:**
```
채팅 창 위쪽 → "Add to Project" → 프로젝트 선택
```

**프로젝트 전체 현황 보기:**
```
Projects 탭 → 선택한 프로젝트 → 하위 세션 목록 확인
```

---

## 어떤 상황에 유용한가요?

```
예시 1: 대형 리팩토링 프로젝트
  - 세션 A: 프론트엔드 컴포넌트 정리
  - 세션 B: API 레이어 개선
  - 세션 C: 테스트 코드 작성
  → 하나의 Project로 묶어서 전체 진행 상황 파악

예시 2: 주간 정기 작업
  - 세션 A: 의존성 업데이트 확인
  - 세션 B: 코드 리뷰 처리
  → "Weekly Maintenance" 프로젝트로 관리
```

---

## 기존 Agent View와의 관계

- **Agent View** (2026-05-11 출시): 모든 활성 세션을 한 화면에서 관리
- **Projects** (2026-09-17 출시): 세션들을 목적별로 그룹화

> 💡 Agent View가 "전체 작업 현황판"이라면, Projects는 "작업 분류 폴더"예요.

---

## Desktop 앱에서만 된다는 점 주의!

```
✅ Claude Code Desktop (macOS, Windows)
✅ Linux 베타 (공식 발표 기준)
❌ 웹 버전 (claude.ai/code)
❌ CLI 터미널 단독 사용
```

> 📱 **참고**: 모바일 앱에서는 세션 확인만 가능하고, 프로젝트 생성·관리는 Desktop 앱에서 해야 해요 (공식 발표 기준).

---

## 정리

| 항목 | 내용 |
|---|---|
| 출시 | 2026-09-17 |
| 필요 환경 | Claude Code Desktop 앱 |
| 핵심 기능 | 관련 세션 그룹화, 멀티에이전트 감독 |
| 함께 쓸 기능 | Agent View, Dynamic Workflows |
