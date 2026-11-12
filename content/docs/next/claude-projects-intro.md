---
title: "[공] Claude Projects — 여러 에이전트를 한 화면에서 관리해요"
description: "2026년 9월 출시. 연관된 코딩 세션을 묶고 여러 Claude 에이전트를 한 번에 감시·실행하는 Projects 기능 소개"
tags: ["자동생성", "Projects", "에이전트", "agent", "멀티세션", "데스크톱", "2026"]
category: "next"
order: 18
lastUpdated: "2026-11-12"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Projects는 연관된 코딩 세션들을 하나의 프로젝트로 묶고, 여러 Claude 에이전트를 한 화면에서 돌리고 감시하는 기능이에요. <code>[공] 마케팅 발표 기준</code>
</div>

## Projects가 뭔가요?

> 📁 **비유로 설명하면**: 큰 건설 현장(프로젝트)에서 여러 팀(에이전트)이 동시에 일하는 걸 현장 소장(나)이 한 번에 감시하는 것과 같아요.

**발표일**: 2026년 9월 17일

Projects는 Claude Code Desktop에서 사용할 수 있는 기능으로:
1. 연관된 코딩 세션들을 **프로젝트 단위로 묶기**
2. **여러 에이전트를 동시에 실행**하고 한 화면에서 감시
3. 각 에이전트의 상태 모니터링

---

## 어디서 쓸 수 있어요?

| 플랫폼 | Projects 지원 |
|---|---|
| **Claude Code Desktop** | ✅ |
| 터미널 CLI | ❌ |
| 웹 (claude.ai/code) | ❓ (추정 미지원) |
| VS Code 익스텐션 | ❌ |

> 💡 현재 Claude Code Desktop 앱 전용 기능이에요. `[공] 마케팅 발표 기준`

---

## 어떻게 사용해요?

공식 문서: `code.claude.com/docs/en/claude-projects`

**기본 사용법** (추정, 공식 상세 미확인):
1. Claude Code Desktop 열기
2. 사이드바에서 "New Project" 선택
3. 여러 에이전트 세션을 프로젝트에 추가
4. Agent View에서 모든 세션 한 번에 감시

---

## Agent View와의 관계

**Agent View** (2026년 5월 출시): 모든 Claude Code 세션을 한 화면에서 관리

**Projects** (2026년 9월 출시): 연관 세션을 "프로젝트"로 묶어서 더 체계적으로 관리

> 🏢 **비유**: Agent View가 "전체 직원 현황판"이라면, Projects는 "팀별 프로젝트 보드"예요.

---

## 실제 활용 예시

```
프로젝트: "결제 시스템 리팩터링"
├── 에이전트 1: 결제 모듈 버그 수정
├── 에이전트 2: 테스트 코드 작성
└── 에이전트 3: API 문서 업데이트
```

이처럼 같은 목표를 위한 작업을 한 프로젝트 아래 묶어서, 각각이 어느 단계인지 한 화면에서 볼 수 있어요.

---

## 관련 기능

| 기능 | 역할 |
|---|---|
| Projects | 세션 묶기 + 멀티 에이전트 감시 |
| Agent View | 전체 세션 현황 보기 |
| Dynamic Workflows | 100개까지 병렬 서브에이전트 실행 |
| Routines | 반복 작업 자동 스케줄 |

---

> ⚠️ Projects는 2026년 9월 발표된 신기능이에요. 세부 동작 방식은 추정 포함. 정확한 사용법은 공식 문서 `code.claude.com/docs/en/claude-projects` 를 참고하세요.
