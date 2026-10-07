---
title: "[공] Projects로 코딩 세션 여러 개 한 화면에서 관리하기"
description: "Projects 기능으로 여러 코딩 작업을 묶고, 멀티 에이전트를 한 화면에서 감독하는 방법"
tags: ["자동생성", "Projects", "멀티에이전트", "세션관리", "Claude Code Desktop"]
category: "next"
order: 42
lastUpdated: "2026-10-07"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Claude Code의 Projects 기능으로 관련된 코딩 세션들을 묶어서 여러 AI 에이전트를 한꺼번에 감독할 수 있어요. Claude Code Desktop에서 사용 가능. <code>[공]</code><br />
★ <strong>출처</strong>: claude.com/claude-code 마케팅 공식 페이지 (2026년 10월 기준), 세부 동작은 공식 발표 기준 추정 포함.
</div>

## "AI 직원이 여러 명인데 각자 뭐하는지 알 수가 없어요"

코딩 업무가 복잡해질수록 Claude Code를 동시에 여러 개 돌리는 경우가 생겨요.

예를 들어:
- 에이전트 1: 백엔드 API 수정 중
- 에이전트 2: 프론트엔드 UI 작업 중  
- 에이전트 3: 테스트 코드 작성 중

문제는 이것들이 **제각각 돌아가고 있어서** 지금 어디까지 됐는지, 충돌은 없는지 파악하기가 어렵다는 거예요.

🏗️ 비유: 건설 현장에서 목수·배관공·전기공이 각자 일하는데, 현장 감독이 없으면 나중에 벽 뚫어야 할 곳에 파이프가 들어가 있는 일이 생겨요.

**Projects**는 바로 그 "현장 감독 역할"이에요. 관련된 코딩 세션들을 묶어주고, 한 화면에서 감독할 수 있게 해줘요.

---

## Projects가 뭔가요?

Anthropic 공식 발표:
> "관련된 코딩 세션들을 묶어서 여러 Claude 에이전트를 동시에 실행하고 쉽게 감독할 수 있습니다. Claude Code Desktop에서 사용 가능."

정리하면:

| 기능 | 설명 |
|---|---|
| **세션 묶기** | 관련된 Claude Code 세션을 하나의 프로젝트로 묶어요 |
| **동시 실행** | 프로젝트 안에서 여러 에이전트가 병렬로 작업해요 |
| **한 화면 감독** | 모든 에이전트의 진행 상황을 한눈에 볼 수 있어요 |

---

## 언제 쓰면 좋아요?

### 큰 기능 개발할 때

새 기능을 개발할 때 프론트엔드·백엔드·테스트를 동시에 진행해야 하면 Project로 묶어요.

```
프로젝트: "로그인 기능 개발"
├── 세션 1: 백엔드 JWT 인증 구현
├── 세션 2: 프론트엔드 로그인 폼 UI
└── 세션 3: 유닛 테스트 작성
```

### 코드베이스 마이그레이션할 때

오래된 코드를 현대화할 때 여러 모듈을 동시에 처리할 수 있어요.

```
프로젝트: "Python 2 → 3 마이그레이션"
├── 세션 1: 결제 모듈 마이그레이션
├── 세션 2: 사용자 관리 모듈 마이그레이션
└── 세션 3: 테스트 업데이트
```

### 버그 집중 처리할 때

이슈 트래커의 여러 버그를 한 번에 처리할 때도 유용해요.

---

## 어떻게 시작하나요?

Claude Code Desktop에서 사용할 수 있어요.

1. **Claude Code Desktop** 열기
2. 사이드바에서 **Projects** 탭 클릭
3. **새 프로젝트** 만들기
4. 프로젝트 안에서 세션 추가하기
5. 각 세션에 작업 지시하고 동시에 실행하기

<div class="note-circle">○ Projects는 Claude Code Desktop 전용 기능이에요. 웹 버전(claude.ai/code)이나 터미널 CLI에서는 아직 지원되지 않아요 (공식 발표 기준).</div>

---

## Agent view와 함께 쓰기

Projects와 함께 **Agent view**도 활용하면 더 강력해요.

- **Projects** → 관련 세션을 묶고 한 화면에서 감독
- **Agent view** → 모든 Claude Code 세션을 한 대시보드에서 모니터링

🖥️ 비유: Projects가 "특정 건설 현장의 현장 감독"이라면, Agent view는 "여러 현장을 한눈에 보는 건설사 본사 CCTV 모니터"예요.

두 기능을 함께 쓰면 복잡한 코딩 작업도 효율적으로 관리할 수 있어요.

---

## 기존 Cowork의 "프로젝트"와 다른가요?

헷갈릴 수 있어서 정리해요.

| | **Claude Code Projects** | **Cowork 프로젝트** |
|---|---|---|
| 대상 | 개발자·코딩 작업 | 비즈니스 업무 일반 |
| 주 환경 | Claude Code Desktop | Claude 데스크톱 앱 |
| 핵심 기능 | 코딩 세션 묶기 + 멀티에이전트 감독 | 업무별 지시사항·파일·커넥터 분리 |
| 사용 예 | 프론트+백엔드 동시 개발 | 재고관리 vs SNS 마케팅 분리 |

개발자는 Claude Code Projects, 비즈니스 자동화는 Cowork 프로젝트라고 생각하면 편해요.

<div class="note-star">★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a></div>
