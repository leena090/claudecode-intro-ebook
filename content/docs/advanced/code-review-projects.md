---
title: "[공] Code Review GA + Projects — 팀 협업 두 기능 한번에"
description: "Code Review가 Team·Enterprise에 정식 출시됐어요. Projects로 여러 에이전트를 한 화면에서 묶어 관리할 수 있어요 — 2026년 가을 두 신기능"
tags: ["자동생성", "코드리뷰", "code review", "projects", "팀", "에이전트관리", "Claude Code Desktop"]
category: "advanced"
order: 10
lastUpdated: "2026-11-04"
---

<div class="note-star">
★ <strong>[공]</strong> Code Review GA: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Oct 15, 2026, Team·Enterprise 정식 출시)
<br />★ <strong>[공]</strong> Projects: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Sep 17, 2026, Claude Code Desktop 사용 가능)
<br />★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a>
</div>

## 두 기능 요약

| 기능 | 출시 | 대상 | 핵심 |
|---|---|---|---|
| **Code Review** | Oct 15, 2026 | Team·Enterprise | PR 올리기 전 버그 미리 잡기 |
| **Projects** | Sep 17, 2026 | Claude Code Desktop | 여러 에이전트 세션 한 화면 관리 |

---

## Code Review — 버그를 PR 전에 잡아줘요

### 무엇인가요?

**Code Review**는 코드를 푸시하거나 PR을 올리기 전에 Claude가 먼저 코드를 살펴보고 문제를 찾아주는 기능이에요. 이제 **Team과 Enterprise 플랜에서 정식(GA, Generally Available)** 출시됐어요.

> 🔍 **비유로 설명하면**: 원고를 출판사에 보내기 전에 꼼꼼한 편집자가 한번 더 읽어주는 거예요. "여기 오탈자 있어요", "이 문장 의미가 불분명해요" 같이 짚어줘요.

### 어떻게 쓰나요?

```bash
# 현재 변경사항 코드 리뷰 요청
/code-review

# 특정 PR 번호 리뷰
/code-review 42

# 특정 경로만 리뷰
/code-review src/payments/
```

### 무엇을 잡아주나요?

Code Review는 아래 카테고리의 문제를 찾아줘요:

| 카테고리 | 예시 |
|---|---|
| **정확성(Correctness)** | 로직 오류, null 처리 누락, 경계값 버그 |
| **단순화(Simplification)** | 중복 코드, 불필요한 복잡성 |
| **효율성(Efficiency)** | N+1 쿼리, 불필요한 반복 |
| **테스트 커버리지** | 중요한 케이스가 테스트에 없음 |

> ⚠️ **주의**: Code Review는 Team과 Enterprise 플랜 전용이에요. Pro·Max 개인 플랜에서는 `/code-review` 슬래시 명령어가 없어요.

### 🔗 관련 기능

기존에도 있던 `/ultrareview`는 클라우드 기반 멀티 에이전트 리뷰예요. Code Review는 더 가볍고 빠르게 사용하는 버전이라고 보면 돼요.

---

## Projects — 여러 에이전트 세션을 한곳에

### 무엇인가요?

**Projects**는 관련 있는 코딩 세션들을 하나의 프로젝트로 묶어서 관리하는 기능이에요. 여러 개의 Claude 에이전트가 동시에 돌아가고 있을 때 한 화면에서 감독할 수 있어요.

> 📂 **비유로 설명하면**: 여러 직원이 동시에 여러 작업을 하고 있을 때, 각각의 현황을 하나의 대시보드에서 보는 느낌이에요. "A직원 버그 수정 중", "B직원 테스트 작성 중" 같이요.

### 어디서 쓸 수 있나요?

현재는 **Claude Code Desktop 앱**에서 사용 가능해요.

```
1. Claude Code Desktop 실행
2. 왼쪽 사이드바에서 "Projects" 섹션 클릭
3. 새 프로젝트 만들기 또는 기존 세션 프로젝트에 추가
4. 프로젝트 화면에서 여러 에이전트 세션 한눈에 확인
```

### 언제 유용한가요?

| 상황 | Projects 활용 방법 |
|---|---|
| 큰 리팩토링 | 각 모듈별 세션을 하나의 프로젝트로 묶기 |
| 멀티 에이전트 워크플로우 | 에이전트 A(분석), B(수정), C(테스트) 한 화면에서 |
| 팀 작업 보고 | 오늘 작업한 모든 세션을 프로젝트별로 정리 |

> 💡 **팁**: Dynamic Workflows (`/workflow`)와 함께 쓰면 더욱 효과적이에요. 대규모 병렬 에이전트 실행 결과를 Projects에서 한눈에 볼 수 있어요.

---

## 함께 쓰면 좋은 기능 조합

```
1. Projects로 세션 그룹화
   ↓
2. 각 세션에서 작업 완료
   ↓
3. /code-review로 변경사항 사전 점검
   ↓
4. 버그 없는 코드만 PR 오픈
```

이 흐름이면 코드 품질을 유지하면서 여러 작업을 병렬로 진행할 수 있어요.
