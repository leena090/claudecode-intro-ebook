---
title: "[공] Claude Projects — 관련 코딩 세션을 묶어서 멀티 에이전트 감독"
description: "Claude Code Desktop에서 여러 Claude 에이전트를 하나의 프로젝트로 묶어 동시에 감독하는 기능. 병렬 작업 관리가 쉬워집니다."
tags: ["자동생성", "Projects", "멀티에이전트", "병렬", "Desktop", "감독"]
category: "advanced"
order: 27
lastUpdated: "2026-10-19"
---

<div class="note-star">
★ <strong>Claude Code Desktop</strong> 전용 기능 (공개일 확인 중 — 마케팅 페이지 최신 하이라이트 등재)<br />
★ 공식 소개: "Group related coding sessions so you can run and easily supervise multiple Claude agents at once."
</div>

## Claude Projects란?

**여러 Claude 코딩 세션을 하나의 프로젝트로 묶어 동시에 실행하고 관리하는 기능**입니다.

> 🏗️ **비유로 설명하면**: 건설 현장 소장처럼요. 소장(여러분)이 화면 하나에서 벽돌팀·배관팀·전기팀(각각의 Claude 에이전트)이 지금 무엇을 하는지 한눈에 보면서 지시를 내릴 수 있어요. 팀마다 창을 따로 열어가며 확인할 필요가 없습니다.

---

## 왜 필요한가요?

Claude Code로 큰 작업을 할 때 흔한 문제:

| 이전 방식 | Projects 사용 시 |
|-----------|----------------|
| 터미널 창 여러 개를 각각 열어둠 | **한 화면에서 모든 에이전트 감독** |
| 어느 세션이 뭘 하는지 파악하기 어려움 | 세션별 상태·진행률 한눈에 확인 |
| 세션 간 맥락 공유 어려움 | 관련 세션끼리 프로젝트로 묶어 컨텍스트 공유 |
| 하나씩 결과 확인 후 다음 지시 | **병렬 실행 + 동시 감독** |

---

## 어떤 작업에 어울리나요?

### 🔀 대규모 리팩터링
```
프론트엔드 팀  → React 컴포넌트 타입스크립트 마이그레이션
백엔드 팀     → API 엔드포인트 리팩터링
테스트 팀     → 유닛 테스트 커버리지 80% 달성
```
세 Claude 에이전트를 동시에 실행하면서 Projects 화면에서 감독.

### 🐛 멀티 버그 수정
여러 GitHub 이슈를 각각 Claude 에이전트에게 맡기고, 프로젝트 뷰에서 진행 상황 모니터링.

### 📦 마이크로서비스 동시 개발
서비스A·서비스B·서비스C를 각자 독립된 세션으로 개발하면서 같은 화면에서 확인.

---

## 사용 방법 (Claude Code Desktop)

### 1단계: 새 프로젝트 만들기

Claude Code Desktop 사이드바에서 **[+ New Project]** 클릭.

### 2단계: 세션 추가

프로젝트 안에 여러 코딩 세션 생성:
- 각 세션에 목표 설정 ("이 세션은 결제 모듈 리팩터링")
- 다른 저장소나 같은 저장소의 다른 브랜치도 OK

### 3단계: 동시 실행 + 감독

- 모든 세션을 동시에 시작
- Projects 뷰에서 세션별 진행 상황 확인
- 하나가 완료되면 결과 검토 후 다음 지시

---

## Agent View와의 차이

| | Agent View | Projects |
|--|-----------|---------|
| 목적 | 모든 활성 Claude 세션 모니터링 | 관련 세션 그룹화·구조적 관리 |
| 범위 | 계정 전체 세션 | 프로젝트 단위로 묶인 세션 |
| 적합한 상황 | 현재 뭐가 돌아가는지 빠른 확인 | 큰 작업을 체계적으로 분할·관리 |

둘을 함께 쓰면 더 효과적: Projects로 구조화하고, Agent View로 전체 상황 파악.

---

## 팁

- 프로젝트에 **설명을 잘 써두면** Claude가 세션 간 관계를 더 잘 이해해요.
- 세션 수가 많아지면 **순차적으로 완료 확인** 후 다음 세션 시작을 권장 (실수 방지).
- Desktop 앱의 **알림 기능**과 조합하면 자리를 비운 사이에 완료 알림을 받을 수 있어요.

---

## 참고 링크

- [Dynamic Workflows 고급 병렬 실행](/docs/advanced/dynamic-workflows) (이미 배운 내용)
- [Agent View — 전체 세션 감독](/docs/advanced/agent-view)
- [공식 Claude Code Desktop 문서](https://code.claude.com/docs/en/desktop) (code.claude.com)
