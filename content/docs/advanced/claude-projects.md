---
title: "[공] Projects — 관련 코딩 세션을 묶어서 여러 에이전트를 한눈에 감독"
description: "Claude Code Desktop의 Projects 기능. 관련된 코딩 작업을 그룹으로 묶고, 여러 Claude 에이전트를 동시에 실행하며 한 화면에서 감독할 수 있습니다 (Sep 17, 2026)."
tags: ["자동생성", "projects", "멀티에이전트", "데스크톱", "세션관리", "2026"]
category: "advanced"
order: 36
lastUpdated: "2026-10-29"
---

<div class="note-star">
★ <strong>Claude Code Desktop</strong> 전용 기능 (2026년 9월 17일 공식 발표)<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
</div>

## Projects란?

**관련된 코딩 세션들을 그룹으로 묶고, 여러 Claude 에이전트를 동시에 실행하면서 한 화면에서 감독할 수 있는 Claude Code Desktop 기능**입니다.

> 📁 **비유로 설명하면**: 회사에서 큰 프로젝트를 할 때, 각자 다른 일을 맡은 팀원들을 한 방에 모아서 진행 상황을 한눈에 볼 수 있게 하는 거예요. Claude Code Desktop이 그 "회의실 화면" 역할을 합니다.

---

## 이전과 무엇이 달라요?

| 이전 | Projects 도입 후 |
|------|-----------------|
| 세션마다 별도 창 또는 탭 | **하나의 Project 안에 관련 세션 묶기** |
| 여러 에이전트 진행 상황 파악 어려움 | **전체 에이전트 상태 한 화면에서 감독** |
| 관련 없는 작업들이 뒤섞임 | **주제별·기능별로 세션 정리 가능** |

---

## 어떻게 써요?

### 기본 사용법

1. Claude Code Desktop 열기
2. **새 Project 만들기** (왼쪽 사이드바)
3. Project 안에서 **여러 세션 시작**
4. 각 세션이 독립적으로 실행되면서 Project 대시보드에서 한번에 확인

### 실전 시나리오

```
📁 Project: "쇼핑몰 리팩터링"
├── 🤖 세션 1: 결제 모듈 버그 수정
├── 🤖 세션 2: 상품 목록 컴포넌트 리뷰
└── 🤖 세션 3: API 문서 자동 생성
```

세 에이전트가 동시에 돌아가고, 내가 중간중간 감독하면서 필요한 결정을 내려주면 됩니다.

---

## Projects vs. Agent Teams vs. Dynamic Workflows

비슷해 보이는 기능들의 차이점:

| 기능 | 주 용도 | 제어 방식 |
|------|---------|----------|
| **Projects** | 관련 세션 그룹화 & 감독 | 사람이 감독 |
| **Agent Teams** | 에이전트끼리 협업 | 에이전트 간 자율 협력 |
| **Dynamic Workflows** | 대규모 병렬 자동화 | 자동화된 오케스트레이션 |

> 💡 **Projects**는 사람이 여러 에이전트를 "감독하는" 구조, **Dynamic Workflows**는 에이전트끼리 자동으로 조율하는 구조예요.

---

## 어떤 작업에 좋아요?

✅ **적합한 경우**
- 마이크로서비스 여러 개를 동시에 수정할 때
- 프론트엔드·백엔드·테스트를 동시에 병렬로 진행할 때
- 코드 리뷰, 문서화, 버그 수정을 동시에 다른 에이전트에게 맡길 때

❌ **이럴 땐 다른 방법이 더 좋아요**
- 단순한 하나의 작업 → 그냥 일반 세션
- 완전 자동화가 필요하다 → Dynamic Workflows

---

## 가용 환경

- ✅ **Claude Code Desktop** (macOS, Windows, Linux 베타)
- ❌ 웹 버전 (claude.ai/code) — 미지원 (2026-10-29 기준)
- ❌ 터미널 CLI — 미지원

> ⚠️ **추정 포함**: 지원 범위는 공식 문서 및 릴리스 노트에서 최신 정보 확인을 권장합니다.
