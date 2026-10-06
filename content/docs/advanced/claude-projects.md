---
title: "[공] Projects — 관련 코딩 세션을 하나로 묶어 여러 AI 에이전트를 감독하기"
description: "Projects 기능으로 관련된 코딩 작업들을 한 대화에서 묶어 병렬 클라우드 세션으로 실행하세요. 저장소·지침·메모리를 공유하며 여러 에이전트를 한눈에 감독할 수 있어요"
tags: ["자동생성", "Projects", "프로젝트", "병렬", "에이전트", "클라우드세션", "Desktop"]
category: "advanced"
order: 22
lastUpdated: "2026-10-06"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />★ <strong>[공]</strong> 마케팅 페이지 등재: claude.com/claude-code (2026-10 확인)
<br />★ <strong>가용성</strong>: Claude Code Desktop에서 사용 가능 (공식 발표 기준)
</div>

## Projects가 뭔가요?

**Projects**(프로젝트)는 Claude Code Desktop의 새로운 기능이에요. 관련된 코딩 세션들을 하나의 프로젝트로 묶어서 **여러 AI 에이전트가 동시에 일하는 것을 한 화면에서 감독**할 수 있어요.

공식 설명:
> "Hand Claude a stream of related tasks in one conversation and let it run them as parallel cloud sessions that share repositories, instructions, and memory."
> (관련 작업들을 한 대화로 전달하면, 저장소·지침·메모리를 공유하는 병렬 클라우드 세션으로 실행해줍니다.)

> 🍱 **비유로 설명하면**: 건설 현장 감독처럼, 여러 팀(전기팀, 배관팀, 목수팀)이 동시에 일하는데 나는 한 자리에서 전체를 감독하는 것과 같아요. 각 팀은 같은 설계도(저장소)와 지침을 공유하면서 각자의 작업을 진행해요.

---

## Projects vs 기존 방식 비교

| 항목 | 기존 방식 | Projects |
|---|---|---|
| 작업 수 | 1회에 1개 | 여러 개 동시 |
| 세션 공유 | 불가 | 저장소·지침·메모리 공유 |
| 감독 방법 | 각 세션 개별 확인 | **한 화면에서 전체 감독** |
| 실행 위치 | 로컬 | 클라우드 세션 |
| 가용 플랜 | 모든 플랜 | Desktop (추정 — 공식 확인 필요) |

---

## Projects와 Agent View의 차이

비슷해 보이는 두 기능이 있어요:

### Agent View (에이전트 뷰)
- **이미 실행 중인** 세션들을 한 화면에서 관리
- 각 세션이 독립적
- [에이전트 뷰 문서](/docs/advanced/agent-view) 참고

### Projects (프로젝트)
- **관련 작업들을 처음부터 하나로 묶어서** 시작
- 세션들이 저장소·지침·메모리를 **공유**
- 더 긴밀한 협업 구조

> 🍱 **비유로 설명하면**: Agent View는 이미 다른 공장에서 만들어진 부품들을 조립하는 것이고, Projects는 처음부터 같은 공장에서 같은 재료로 분업해서 만드는 것이에요.

---

## 사용 방법 (공식 발표 기준)

### 1. Desktop에서 프로젝트 시작

Claude Code Desktop의 **사이드바**에서 새 프로젝트를 만들 수 있어요 (공식 발표 기준 — 구체적인 UI는 변경될 수 있음).

```
Claude Code Desktop
└── 사이드바
    ├── Pinned (고정 세션)
    ├── Scheduled (예약 작업)
    └── Projects ← 여기서 새 프로젝트 생성
```

### 2. 관련 작업을 한 대화로 전달

프로젝트 안에서 여러 작업을 연속으로 지시해요:

```
[내가 입력]
이 저장소에서 다음 3가지 작업을 동시에 진행해줘:
1. 버그 수정: 결제 모듈의 중복 요청 문제
2. 테스트 추가: 결제 모듈 전체 커버리지
3. 문서화: 결제 API 한국어 주석

[Claude가 자동으로]
→ 세션 1: 버그 수정 (cloud session)
→ 세션 2: 테스트 추가 (cloud session)
→ 세션 3: 문서화 (cloud session)
(3개 세션이 같은 저장소·지침·메모리 공유)
```

### 3. 한 화면에서 진행 상황 감독

모든 에이전트의 진행 상황을 한 화면에서 볼 수 있어요. 어떤 에이전트가 막혔는지, 어떤 것이 완료됐는지 한눈에 파악해요.

---

## Projects가 특히 유용한 상황

✅ **대규모 리팩토링**: 여러 모듈을 동시에 리팩토링할 때  
✅ **마이그레이션**: 다수의 파일/컴포넌트를 새 버전으로 동시 이전  
✅ **테스트 작성**: 기능 구현과 테스트 작성을 병렬로  
✅ **다국어 번역**: 문서를 여러 언어로 동시 번역  
✅ **코드 리뷰 + 수정**: 리뷰와 수정을 각각 다른 에이전트가 담당  

---

## 마케팅 페이지 소개 문구 (2026-10 기준)

> "Projects: Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."

> (Projects: 관련 코딩 세션들을 묶어서 여러 Claude 에이전트를 한꺼번에 실행하고 쉽게 감독하세요. Claude Code Desktop에서 사용 가능합니다.)

---

## 관련 기능

| 기능 | 설명 | 문서 |
|---|---|---|
| Agent View | 실행 중인 세션 관리 | [에이전트 뷰](/docs/advanced/agent-view) |
| Routines | 스케줄 자동 실행 | [루틴](/docs/advanced/routines) |
| Dynamic Workflows | 서브에이전트 대규모 병렬 | [동적 워크플로우](/docs/advanced/dynamic-workflows) |
| Worktrees | Git 독립 병렬 작업 | [워크트리](/docs/advanced/worktrees) |

> ⚠️ **참고**: Projects 기능은 2026년 10월 기준 신규 출시된 기능이에요. 세부 UI나 동작 방식은 추후 변경될 수 있습니다. 최신 정보는 [공식 문서](https://code.claude.com/docs/en/claude-projects)를 확인하세요.
