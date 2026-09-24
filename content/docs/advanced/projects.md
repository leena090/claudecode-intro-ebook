---
title: "[공] Projects — 관련 코딩 세션을 묶어서 관리하기"
description: "Projects는 연관된 코딩 세션들을 하나의 프로젝트로 묶고, 여러 Claude 에이전트를 동시에 감독할 수 있는 기능이에요. Claude Code Desktop에서 사용할 수 있어요"
tags: ["자동생성", "Projects", "멀티에이전트", "코딩세션", "Desktop"]
category: "advanced"
order: 27
lastUpdated: "2026-09-24"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ Claude Code Desktop에서만 사용 가능 (공식 발표 기준)
</div>

## Projects란 무엇인가요?

**Projects**는 관련된 코딩 세션들을 하나의 그룹으로 묶어 **여러 Claude 에이전트를 동시에 실행하고 감독**할 수 있는 기능이에요.

> 🗂️ **비유로 설명하면**: 혼자 일하던 Claude를 이제는 **팀장이 된 나**와 **여러 팀원(에이전트)** 구조로 바꾸는 거예요. 팀장은 큰 그림을 보고 방향을 잡고, 팀원들은 각자 맡은 부분을 동시에 처리해요.

---

## 왜 필요한가요?

큰 프로젝트를 진행하다 보면 이런 상황이 생겨요:

| 상황 | 기존 방식 | Projects 사용 후 |
|---|---|---|
| 프론트엔드·백엔드 동시 작업 | 번갈아가며 하나씩 | 두 세션이 동시에 진행 |
| 여러 기능을 병렬 개발 | 한 번에 하나씩 | 세션별로 각 기능 담당 |
| 작업 현황 파악 | 각 세션 일일이 확인 | Projects 화면에서 한눈에 |

---

## 사용 방법

### 1. Projects 시작하기

Claude Code Desktop에서:

1. 왼쪽 사이드바에서 **"Projects"** 클릭
2. **"New Project"** 선택
3. 리포지토리 연결 및 지시사항 입력
4. **"Start"** 클릭

### 2. 세션 추가하기

프로젝트 내에서 새 Claude 세션을 추가하면, 그 세션이 같은 리포지토리·지시사항·메모리를 공유해요.

```bash
# Projects 내 각 세션은 독립적으로 실행되지만
# 같은 프로젝트 컨텍스트를 공유해요
```

### 3. 감독하기

Projects 화면에서 모든 세션의 현재 상태를 한눈에 볼 수 있어요:
- 어떤 파일을 편집 중인지
- 어떤 명령을 실행 중인지
- 내 의사결정이 필요한 세션이 있는지

---

## Projects vs 다른 멀티에이전트 기능

| 기능 | 특징 | 사용 상황 |
|---|---|---|
| **Projects** | 그룹 세션 관리, 공유 컨텍스트 | 장기 프로젝트, 여러 기능 병렬 개발 |
| **Agent View** | 실시간 모든 세션 모니터링 | 현재 실행 중인 세션 감독 |
| **Dynamic Workflows** | 스크립트로 대규모 자동화 | 코드베이스 감사, 대형 마이그레이션 |
| **Worktrees** | Git 격리 병렬 세션 | 충돌 없는 독립 작업 |

---

## 실제 활용 예시

### 예시 1: 풀스택 기능 개발

```
Project: "결제 시스템 구현"
├── 세션 A: 백엔드 API 엔드포인트 작성
├── 세션 B: 프론트엔드 결제 UI 구현
└── 세션 C: 테스트 코드 작성
```

### 예시 2: 코드베이스 현대화

```
Project: "레거시 코드 마이그레이션"
├── 세션 A: auth 모듈 리팩토링
├── 세션 B: database 레이어 마이그레이션
└── 세션 C: API 문서 자동 생성
```

---

## 주의사항

<div class="note-star">
★ <strong>Claude Code Desktop 전용</strong>: Projects는 현재 Claude Code Desktop 앱에서만 사용할 수 있어요. 터미널(CLI) 버전에서는 지원되지 않아요 (공식 발표 기준).
</div>

- 여러 세션이 같은 파일을 동시에 편집하면 충돌이 생길 수 있어요 → **Worktrees와 함께 사용**하면 충돌을 방지할 수 있어요
- 각 세션마다 별도 토큰이 소비돼요 → 소비량 모니터링 필요

---

## 정리

Projects는 단순한 코딩 도구를 넘어, **Claude Code를 팀 단위로 운영**할 수 있게 해주는 기능이에요. 큰 프로젝트를 여러 에이전트가 동시에 처리하면서 진행 상황을 한 화면에서 감독할 수 있어요. Claude Code Desktop이 있다면 꼭 한 번 시도해보세요!
