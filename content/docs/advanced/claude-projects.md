---
title: "[공] Claude Projects — 여러 코딩 세션을 한 프로젝트로 묶기"
description: "Projects 기능으로 관련된 Claude Code 세션들을 그룹으로 묶어 여러 에이전트를 한눈에 관리하세요. Desktop 앱 전용"
tags: ["자동생성", "Projects", "세션관리", "에이전트", "Desktop", "멀티에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-10-08"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 기능: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs</a> (2026년 9~10월)
<br />★ 마케팅 페이지 최신 기능 하이라이트 1위 (2026-10-08 확인)
</div>

## "여러 에이전트를 동시에 굴리고 싶은데 뭐가 뭔지 모르겠어요" — 이게 해결됩니다

Claude Code로 여러 작업을 동시에 시키다 보면 어느 세션이 뭘 하고 있는지 헷갈리죠.
**Projects**는 관련 세션들을 하나의 "프로젝트"로 묶어서 한 화면에서 감독할 수 있게 해줍니다.

> 🍱 **비유로 설명하면**: 카페 사장님이 주방·홀·계산대 직원을 따로 부르는 대신, **"오늘 점심 운영팀"이라는 조 편성**을 만들어 한눈에 보는 것과 같아요.

---

## Projects가 해결하는 문제

| 이전 방식 | Projects 이후 |
|---|---|
| 세션마다 탭을 따로 열기 | 하나의 프로젝트 뷰에서 전체 관리 |
| "이게 어느 세션이었지?" 혼란 | 이름 붙인 세션 그룹으로 명확 구분 |
| 에이전트별 진행 상황 파악 어려움 | 여러 에이전트를 동시에 감독 |
| 관련 작업이 흩어져 있음 | 같은 저장소/기능별로 묶어서 보기 |

---

## 핵심 기능

### 1️⃣ 세션 그룹화

```
📁 프로젝트: e-commerce-redesign
   ├── 🤖 에이전트 1: 결제 버그 수정 중
   ├── 🤖 에이전트 2: 상품 목록 페이지 리팩터링
   └── 🤖 에이전트 3: 테스트 코드 작성
```

관련 Claude Code 세션들을 하나의 프로젝트로 연결해 두면, 전체 작업 흐름이 한눈에 보입니다.

### 2️⃣ 멀티 에이전트 감독

여러 에이전트가 병렬로 작업할 때 각각의 진행 상황을 **동시에 확인하고 개입**할 수 있어요.

```bash
# Claude Code Desktop에서
# 프로젝트 뷰 → 각 에이전트 상태 실시간 확인
# 필요한 에이전트에 클릭해서 바로 개입
```

### 3️⃣ Desktop 앱 전용 기능

<div class="note-star">
⚠️ <strong>중요</strong>: Projects는 <strong>Claude Code Desktop 앱</strong>에서만 사용할 수 있어요. 터미널(CLI) 버전에서는 지원되지 않습니다.
</div>

---

## 사용하면 좋은 상황

### 🔨 대규모 기능 개발

```
새 결제 시스템 개발 프로젝트
├── 프론트엔드 작업 (에이전트 1)
├── 백엔드 API 작업 (에이전트 2)
└── 테스트 작성 (에이전트 3)
```

### 🔄 코드 마이그레이션

```
레거시 시스템 → 새 프레임워크 이전 프로젝트
├── 모듈 A 변환 (에이전트 1)
├── 모듈 B 변환 (에이전트 2)
└── 통합 테스트 확인 (에이전트 3)
```

### 🐛 대규모 버그 헌팅

```
성능 문제 조사 프로젝트
├── 데이터베이스 쿼리 분석 (에이전트 1)
└── API 응답 시간 추적 (에이전트 2)
```

---

## 시작하기

1. **Claude Code Desktop 앱** 설치 (macOS·Windows·Linux 베타)
2. 좌측 사이드바에서 **"+ 새 프로젝트"** 선택
3. 프로젝트 이름 지정 후 세션 추가
4. 각 에이전트에게 작업 할당

```bash
# Desktop 앱 설치 (아직 안 되어 있다면)
# macOS/Windows: claude.ai에서 다운로드
# Linux:
curl -fsSL https://claude.ai/install.sh | bash
```

---

## Agent View와의 차이

Projects와 Agent View는 함께 쓰는 기능이에요:

| 기능 | 역할 |
|---|---|
| **Projects** | 세션을 논리적으로 그룹화 (같은 목적·저장소) |
| **Agent View** | 실행 중인 모든 세션의 실시간 상태 모니터링 |

> 💡 **함께 쓰면**: Projects로 묶은 그룹을 Agent View에서 전체 관제하는 구조입니다.

---

## 관련 문서

- [Agent View](./agent-view.md) — 모든 세션 한 화면 모니터링
- [Dynamic Workflows](./dynamic-workflows.md) — 10~100개 병렬 서브에이전트
- [Agent Teams](./agent-teams.md) — 에이전트 팀 구성

<div class="note-star">
📝 <strong>추정 포함</strong>: Projects 세부 UI/UX는 공식 문서(<a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>) 기반이며, 일부 사용 방법은 추정을 포함합니다.
</div>
