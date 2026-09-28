---
title: "[공] Projects로 Claude Code 세션 묶어서 관리하기"
description: "관련 있는 코딩 세션들을 하나의 프로젝트로 묶어서 여러 AI 에이전트를 한 번에 감독할 수 있어요. Claude Code Desktop 전용 기능"
tags: ["자동생성", "Projects", "프로젝트", "멀티에이전트", "에이전트감독", "desktop", "병렬작업", "2026년9월"]
category: "cowork"
order: 10
lastUpdated: "2026-09-28"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 최신 기능 하이라이트 기준 (2026-09-28 확인)<br />
★ <strong>Claude Code Desktop 전용</strong> 기능<br />
★ 관련 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
</div>

## Projects 기능이 뭔가요?

**Projects(프로젝트)**는 연관된 Claude Code 세션들을 하나로 묶고, **여러 AI 에이전트를 동시에 실행하면서 감독**할 수 있는 기능이에요.

공식 설명에 따르면:
> "Group related coding sessions so you can run and easily supervise multiple Claude agents at once."
> (관련 코딩 세션들을 묶어서 여러 Claude 에이전트를 한 번에 실행하고 감독)

> 🍱 **비유로 설명하면**: 건설 현장 소장(나)이 **여러 팀**을 동시에 감독하는 것과 같아요.
> - 팀 A: 1층 배관 작업
> - 팀 B: 2층 전기 작업
> - 팀 C: 외벽 단열 작업
>
> 각 팀이 독립적으로 작업하되, 소장은 한 화면에서 진행 상황을 모두 보면서 "다음 단계로 넘어가" 또는 "이건 잠깐 멈춰" 신호를 줄 수 있어요.

---

## 기존 방식과 뭐가 다른가요?

### 기존: 세션 하나씩 따로 관리

Claude Code에서 여러 작업을 동시에 할 때는 각 세션을 **개별적으로** 열고 전환해가며 확인해야 했어요.

```
세션 1: 로그인 버그 수정 중... (확인하러 들어가야 함)
세션 2: API 테스트 작성 중... (따로 확인해야 함)
세션 3: UI 컴포넌트 리팩터링... (또 따로 확인해야 함)
```

### 이제: 프로젝트 단위로 한 화면에서

Projects를 쓰면 관련된 세션들이 하나의 공간에 묶여요.

```
📁 프로젝트: 결제 시스템 개선
  ├── 세션 1: 로그인 버그 수정 (진행 중...)
  ├── 세션 2: API 테스트 작성 (완료 ✓)
  └── 세션 3: UI 리팩터링 (대기 중, 입력 필요)
```

입력이 필요한 세션은 알림을 보내고, 완료된 세션은 상태가 바뀌어요.

---

## 어떤 상황에서 유용한가요?

### 1. 대형 기능 개발

새 기능 하나를 만들 때 프런트엔드, 백엔드, 테스트를 각각 다른 에이전트에게 맡기고 동시에 진행.

### 2. 코드베이스 마이그레이션

레거시 코드를 새 버전으로 바꿀 때 모듈별로 에이전트를 나눠서 병렬 처리.

### 3. 버그 배치 수정

여러 버그를 동시에 수정하면서 각각의 진행 상황을 한눈에 확인.

### 4. 리뷰 + 수정 분리

- 에이전트 A: 코드 리뷰 중
- 에이전트 B: 리뷰 결과를 받아 수정 중

---

## Agent View와의 관계

Projects는 **[Agent View](/docs/advanced/agent-view)** 와 함께 사용돼요.

- **Agent View**: 현재 실행 중인 모든 Claude Code 세션을 한 화면에서 보기
- **Projects**: 관련 세션들을 논리적으로 묶어서 구조화된 감독

> 🍱 **비유로 설명하면**: Agent View는 **"CCTV 모니터실"** (모든 화면을 동시에 보기), Projects는 **"층별·팀별로 구분된 모니터 배치"** (연관된 화면끼리 묶어서 보기) 예요.

---

## 어디서 쓸 수 있나요?

- ✅ **Claude Code Desktop** (macOS, Windows, Linux 베타)
- ❌ 터미널(CLI) 단독으로는 미지원
- ❌ 웹(claude.ai/code)에서는 별도 확인 필요

---

## 기존 '프로젝트' 기능과 헷갈리지 마세요

이 문서의 "Projects"는 **Claude Code 세션을 묶어서 에이전트를 관리**하는 기능이에요.

Claude 전반에서 쓰는 "프로젝트(업무 공간 구분)" 기능은 [다른 문서](/docs/cowork/cowork-projects)를 참고하세요.

---

## 정리

| 항목 | 내용 |
|---|---|
| **주요 기능** | 관련 세션 묶기 + 멀티 에이전트 동시 감독 |
| **플랫폼** | Claude Code Desktop 전용 |
| **관련 기능** | Agent View, Dynamic Workflows |
| **공식 문서** | code.claude.com/docs/en/claude-projects |

> 💡 **결론**: Projects는 하나의 큰 작업을 여러 에이전트에게 나눠 맡기고 한 화면에서 진두지휘할 때 쓰는 기능이에요. Claude Code Desktop에서 에이전트를 많이 쓰는 분이라면 작업 효율이 크게 올라갑니다.
