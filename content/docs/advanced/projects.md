---
title: "[공] Projects — 관련 세션을 묶어서 여러 에이전트를 한 번에 관리"
description: "Projects는 관련된 코딩 세션을 그룹으로 묶어 여러 Claude 에이전트를 동시에 감독하는 Claude Code Desktop 기능입니다."
tags: ["자동생성", "Projects", "에이전트관리", "멀티세션", "Desktop", "2026"]
category: "advanced"
order: 28
lastUpdated: "2026-11-11"
---

<div class="note-star">
★ 공식 발표: <a href="https://www.anthropic.com/news/claude-projects">Projects: Group related coding sessions</a> (Sep 17, 2026)<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ Claude Code Desktop에서 사용 가능
</div>

## Projects란?

**관련된 코딩 세션들을 그룹으로 묶어서, 여러 Claude 에이전트를 한 화면에서 감독하는 기능**입니다.

> 🍱 **비유로 설명하면**: 큰 건설 현장에서 "건물 A동 공사", "B동 공사", "조경 공사"를 각각 팀이 맡고 있는 것처럼요. Projects는 이 여러 팀(에이전트)을 현장 소장(나)이 한 화면에서 보면서 감독하는 "현장 모니터링 시스템"입니다.

공식 발표 문구: *"관련된 코딩 세션을 그룹으로 묶어서 여러 Claude 에이전트를 동시에 실행하고 감독하세요."*

---

## Projects가 필요한 순간

다음 상황에 Projects를 쓰면 효과적입니다:

| 상황 | 예시 |
|------|------|
| **대형 기능 개발** | 프론트엔드·백엔드·테스트를 각각 에이전트가 동시에 작업 |
| **전사 마이그레이션** | 서비스 A, B, C를 각각 별도 에이전트가 동시에 리팩터링 |
| **반복 작업 병렬화** | 여러 모듈의 테스트를 병렬로 실행 |
| **장기 프로젝트 관리** | 며칠짜리 작업을 주제별로 세션을 나눠 추적 |

---

## 어떻게 사용하나요?

Projects는 **Claude Code Desktop 전용** 기능입니다.

```
1. Claude Code Desktop 열기
2. 왼쪽 사이드바 → "Projects" 섹션
3. "New Project" 클릭 → 프로젝트 이름·디렉토리 설정
4. 세션 추가: 프로젝트 안에서 여러 세션 생성
5. 각 세션에 에이전트 배정 → 동시 실행
6. Projects 뷰에서 모든 세션 상태 한눈에 확인
```

> ⚠️ **추정**: 위 단계는 공식 발표 기반 추정입니다. 세부 UI는 실제 앱에서 확인하세요.

---

## Agent View와의 차이점

Projects와 비슷하게 들리는 Agent View도 있어요. 차이점을 정리했습니다:

| | **Projects** | **Agent View** |
|-|-------------|---------------|
| 주요 목적 | 관련 세션 그룹화·관리 | 모든 Claude Code 세션 한 화면 |
| 대상 | 특정 프로젝트 세션들 | 계정 전체 세션 |
| 출시일 | Sep 17, 2026 | May 11, 2026 |
| 접근 방법 | Desktop 사이드바 | Desktop 상단 뷰 |

> 💡 **쉽게 기억하기**: Agent View는 "전체 현황판", Projects는 "팀별 작업 관리판"이라고 생각하면 됩니다.

---

## Projects + Dynamic Workflows 조합

가장 강력한 사용법은 **Projects + Dynamic Workflows**를 함께 쓰는 것입니다:

```
Project "쇼핑몰 리팩터링"
├── 세션 1: 상품 모듈 → Dynamic Workflow (서브에이전트 10개 병렬)
├── 세션 2: 결제 모듈 → Dynamic Workflow (서브에이전트 5개)
└── 세션 3: 테스트 자동화 → 단일 에이전트
```

Projects로 세션을 묶고, 각 세션 안에서 Dynamic Workflows로 병렬 처리하면 대규모 작업을 며칠이 아닌 몇 시간 안에 완료할 수 있어요.

---

## 처음 시작하는 분들을 위한 팁

Projects는 **여러 작업을 동시에 진행할 때** 진가가 발휘됩니다. 처음에는 단일 세션으로 시작하고, 작업이 복잡해질수록 Projects를 활용해 보세요.

```
초보: 단일 세션 → 한 가지 작업씩
중급: Projects → 2~3개 세션 동시 관리
고급: Projects + Dynamic Workflows → 수십 개 에이전트 병렬
```

**Claude Code Desktop 설치 후 왼쪽 사이드바를 확인해 보세요!** 🙂
