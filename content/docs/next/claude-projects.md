---
title: "[공] Projects — 관련 세션을 묶어서 여러 Claude를 한꺼번에 관리해요"
description: "Claude Code Desktop의 Projects 기능으로 연관된 작업들을 그룹화하고, 여러 Claude 에이전트를 동시에 감독하는 방법을 알아봐요."
tags: ["자동생성", "Projects", "프로젝트", "멀티에이전트", "데스크탑", "2026"]
category: "next"
order: 20
lastUpdated: "2026-11-01"
---

<div class="note-star">
★ <strong>[공] 공식 발표</strong> — 2026-09-17 마케팅 페이지 기준. Claude Code Desktop에서 사용 가능해요.<br />
★ 상세 기능 일부는 추정 포함 — "공식 발표 기준" 표시된 부분만 확정 정보예요.
</div>

## Projects란?

Projects는 **관련된 코딩 세션들을 묶어 관리**하는 기능이에요. Claude Code Desktop에서 사용할 수 있어요.

> 🍱 **비유로 설명하면**: 여러 명의 직원을 채용해서 각자 다른 작업을 맡겼을 때, 사무실(Projects)에서 한 화면으로 모든 직원의 진행 상황을 볼 수 있게 해주는 거예요.

**공식 발표 기준** (2026-09-17):
> "Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."

---

## 어떤 상황에서 쓰나요?

### 🏗️ 대형 기능 개발

큰 기능 하나를 여러 Claude 에이전트가 병렬로 작업할 때:
- Claude A: 백엔드 API 구현
- Claude B: 프론트엔드 컴포넌트 작성
- Claude C: 테스트 코드 작성

세 세션을 같은 Project에 묶으면 한 화면에서 모두 감독할 수 있어요.

### 🔄 마이그레이션 작업

레거시 코드를 새 기술 스택으로 옮기는 작업처럼 긴 작업을 섹션별로 나눌 때:
- Project: "DB 마이그레이션"
  - 세션 1: users 테이블 처리
  - 세션 2: orders 테이블 처리
  - 세션 3: 마이그레이션 검증

---

## Agent View와의 관계

[Agent View](/docs/advanced/agent-view)가 "현재 실행 중인 모든 세션 모니터링"이라면, Projects는 "관련 세션을 미리 묶어두는 그룹화"예요.

| 기능 | Agent View | Projects |
|------|-----------|----------|
| 목적 | 모든 세션 실시간 모니터 | 관련 세션 그룹화 |
| 생성 시점 | 자동 (세션 시작 시) | 수동 (미리 설정) |
| 지속성 | 세션 종료 후 사라짐 | 영구 보존 |
| 플랫폼 | 데스크탑·웹·CLI | 데스크탑 앱 |

---

## 어떻게 시작하나요?

Claude Code Desktop에서 사이드바의 **Projects** 탭을 찾으세요.

1. **New Project** 버튼 클릭
2. 프로젝트 이름·설명 입력 (예: "결제 시스템 v2 리팩토링")
3. 기존 세션을 프로젝트에 추가하거나, 프로젝트 안에서 새 세션 시작
4. 모든 세션의 진행 상황을 프로젝트 대시보드에서 확인

> 📌 **추정** — 세부 UI 흐름은 공식 문서 확인 기준이 아닌 발표 내용 기반 추정입니다. 실제 사용 시 다를 수 있어요.

---

## 팁: Projects + Scheduled Tasks 조합

[Scheduled Tasks](/docs/advanced/routines)와 Projects를 조합하면 더 강력해져요:
- 매일 오전 9시에 "코드 품질 체크" Project 자동 실행
- 주간 의존성 감사 → 결과를 하나의 Project에 모아서 검토

---

## 관련 글

- [Agent View — 모든 세션 한 화면에서](/docs/advanced/agent-view)
- [Dynamic Workflows — 대규모 병렬 작업](/docs/advanced/dynamic-workflows)
- [Routines — 자동 반복 작업](/docs/advanced/routines)
