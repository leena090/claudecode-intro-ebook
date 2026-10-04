---
title: "[공] Projects — 여러 Claude 세션을 한 대화에서 지휘하기"
description: "Projects는 관련된 코딩 작업을 묶어서 여러 병렬 클라우드 세션을 한 대화에서 관리하는 기능이에요. Claude Code Desktop에서 쓸 수 있어요"
tags: ["자동생성", "Projects", "병렬작업", "에이전트", "클라우드세션", "Desktop", "고급"]
category: "advanced"
order: 56
lastUpdated: "2026-10-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ <strong>[공]</strong> 마케팅 공식 발표: claude.com/claude-code (2026-09 확인)<br />
★ Claude Code Desktop 전용 기능 (추정)
</div>

## Projects가 뭔가요?

**Projects**는 관련된 코딩 작업들을 하나의 대화에서 관리하면서, **여러 Claude 클라우드 세션을 병렬로 실행·감독**할 수 있는 기능이에요.

> 🍱 **비유로 설명하면**: 팀장이 여러 팀원(Claude 세션들)에게 각자 다른 작업을 맡기고, 한 회의실(Projects 대화)에서 진행 상황을 확인하는 것과 같아요. 각 팀원은 독립적으로 일하지만, 팀장은 한 곳에서 전체를 볼 수 있어요.

공식 소개: **"Hand Claude a stream of related tasks in one conversation and let it run them as parallel cloud sessions that share repositories, instructions, and memory."**

---

## 기존 방식과 무엇이 달라요?

| | 일반 세션 | Projects |
|---|---|---|
| **세션 수** | 1개 | 여러 개 병렬 |
| **대화 구조** | 각 세션 별도 | 하나의 대화에서 통합 |
| **저장소 공유** | ❌ | ✅ |
| **지침 공유** | ❌ | ✅ |
| **메모리 공유** | ❌ | ✅ |
| **감독 방식** | 각 세션 따로 확인 | 한 화면에서 전체 확인 |

---

## 어디서 쓸 수 있나요?

**Claude Code Desktop** 앱에서 사용 가능해요. 마케팅 페이지에서 "Available on Claude Code Desktop"이라고 명시되어 있어요.

> ⚠️ **추정**: CLI나 웹 버전에서의 가용성은 공식 확인이 필요합니다.

---

## 어떤 상황에 유용한가요?

### 상황 1: 큰 기능 개발

하나의 큰 기능을 여러 파트로 나눠서 동시에 개발할 때:

```
Project: "새 결제 시스템 개발"
├── 세션 A: 프론트엔드 UI 개발
├── 세션 B: 백엔드 API 개발
└── 세션 C: 테스트 코드 작성
```

### 상황 2: 코드베이스 마이그레이션

대규모 코드 마이그레이션을 부분별로 나눌 때:

```
Project: "Python 2 → Python 3 마이그레이션"
├── 세션 A: src/models 폴더
├── 세션 B: src/controllers 폴더
└── 세션 C: src/utils 폴더
```

### 상황 3: 정기 작업 관리

Routines로 만든 정기 작업들을 묶어서 관리할 때.

---

## Agent View vs Projects — 차이가 뭔가요?

| | Agent View | Projects |
|---|---|---|
| **목적** | 현재 실행 중인 세션 현황 파악 | 관련 작업들을 하나의 프로젝트로 묶어 관리 |
| **관계** | 독립적인 세션들의 모니터링 | 공유된 리포지토리·지침·메모리를 가진 연결된 세션들 |
| **지속성** | 세션이 끝나면 사라짐 | 프로젝트 단위로 지속 |

> 🍱 **비유로 설명하면**: Agent View는 지금 회사에 출근한 직원들 현황판이고, Projects는 특정 프로젝트 팀의 작업 공간이에요.

---

## 더 알아보기

- [공식 문서 — Projects](https://code.claude.com/docs/en/claude-projects)
- [공식 문서 — Agent View](https://code.claude.com/docs/en/agent-view)
- [공식 문서 — Workflows](https://code.claude.com/docs/en/workflows)
- [에이전트 병렬 실행](/docs/advanced/agents-parallel)
- [Agent View 문서](/docs/advanced/agent-view)
