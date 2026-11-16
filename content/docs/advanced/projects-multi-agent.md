---
title: "[공] Projects — 여러 Claude 에이전트를 한 화면에서 지휘하세요"
description: "Claude Code Desktop의 Projects 기능으로 관련 코딩 세션을 묶고, 여러 에이전트를 동시에 감시·관리할 수 있어요 (2026년 9월 출시)"
tags: ["자동생성", "Projects", "프로젝트", "멀티에이전트", "에이전트감시", "데스크톱앱", "병렬작업"]
category: "advanced"
order: 27
lastUpdated: "2026-11-16"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 기능 출시: claude.com/claude-code 마케팅 페이지 (Sep 17, 2026)
<br />★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />⚠️ <strong>적용 범위</strong>: Claude Code Desktop 앱 전용 기능이에요.
</div>

## Projects가 뭔가요?

> 🎬 **비유로 설명하면**: 영화 감독처럼 여러 카메라 앵글을 동시에 보고 지시하는 거예요. 카메라 1(A 에이전트)은 배우 얼굴, 카메라 2(B 에이전트)는 배경, 카메라 3(C 에이전트)은 소품 — 모두 같은 영화(Projects)를 위해 움직여요.

**Projects(프로젝트)**는 **관련 코딩 세션을 묶어서** 여러 Claude 에이전트를 동시에 실행하고 쉽게 감시할 수 있는 기능이에요.

이전에는 Claude Code 세션 하나가 하나의 작업을 맡았어요. Projects는 **하나의 큰 목표를 여러 에이전트가 나눠 처리**하도록 도와줘요.

---

## 기존 방식 vs Projects 방식

| 항목 | 기존 | Projects |
|---|---|---|
| 작업 단위 | 세션 1개 = 작업 1개 | 프로젝트 1개 = 세션 N개 |
| 병렬 작업 | 직접 탭 전환 필요 | 한 화면에서 모두 감시 |
| 감시 편의 | 각 세션 개별 확인 | 프로젝트 뷰에서 한눈에 |
| 에이전트 협력 | 수동 조율 | 세션 간 연결 가능 |

---

## 어떤 상황에 유용한가요?

### 1. 대형 리팩토링

```
프로젝트: "결제 모듈 리팩토링"
├── 세션 A: 결제 API 코드 리팩터
├── 세션 B: 관련 테스트 코드 업데이트
└── 세션 C: 문서화 (README, 주석)
```

A, B, C가 동시에 돌아가고, 한 화면에서 진행 상황을 확인할 수 있어요.

### 2. 멀티 서비스 마이그레이션

```
프로젝트: "Node 20 마이그레이션"
├── 세션 A: 프론트엔드 의존성 업데이트
├── 세션 B: 백엔드 API 업데이트
└── 세션 C: CI/CD 파이프라인 수정
```

### 3. 버그 수사 + 수정

```
프로젝트: "결제 오류 수사"
├── 세션 A: 로그 분석 (원인 파악)
└── 세션 B: 코드 수정 (A 결과 대기 중)
```

---

## Claude Code Desktop에서 Projects 쓰는 법

> ⚠️ **데스크톱 앱 필수**: Projects는 Claude Code Desktop 앱에서만 사용할 수 있어요. 터미널 CLI만으로는 Projects 뷰가 없어요.

**기본 흐름:**

1. **Claude Code Desktop 앱** 열기
2. 왼쪽 사이드바에서 **"New Project"** 선택
3. 프로젝트 이름 입력 (예: "결제 모듈 리팩토링")
4. 프로젝트 안에서 **세션 추가** → 각 에이전트에 역할 지정
5. **프로젝트 뷰**에서 여러 세션 상태를 한눈에 확인

---

## 기존 cowork Projects와 뭐가 달라요?

> 💡 헷갈리기 쉬운 부분이에요! Claude에는 **두 가지 다른 "프로젝트"** 개념이 있어요.

| 구분 | Cowork Projects | Claude Code Desktop Projects |
|---|---|---|
| 대상 | claude.ai 개인/팀 채팅 | Claude Code 코딩 에이전트 |
| 목적 | 업무별 대화 맥락 분리 | 여러 코딩 에이전트 동시 감시 |
| 사용처 | 비코더도 활용 가능 | 개발자 전용 |
| 도구 | 채팅창 | Claude Code Desktop 앱 |

이 문서에서 설명하는 건 **개발자를 위한 멀티 에이전트 감시 Projects**예요.

---

## 주의할 점

- 🖥️ **데스크톱 앱 전용** — 웹 버전 claude.ai나 터미널 CLI에서는 쓸 수 없어요
- ⚠️ 세션이 많으면 **API 비용**도 그만큼 늘어요. 꼭 필요한 작업만 병렬화하세요
- 🔄 각 에이전트는 기본적으로 독립적으로 돌아가요. 세션 간 직접 소통은 별도 설정 필요

---

## 자주 묻는 질문

**Q: Projects는 Pro 플랜에서도 되나요?**
A: Claude Code Desktop을 쓸 수 있는 플랜(Pro, Max, Team, Enterprise)이면 됩니다. 단, 여러 에이전트를 동시에 돌리면 사용량 소비가 빠를 수 있어요.

**Q: 세션을 몇 개까지 동시에 돌릴 수 있나요?**
A: 공식 한계치는 별도 발표가 없어요. 플랜 사용량 제한 내에서 가능합니다.
