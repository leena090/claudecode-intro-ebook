---
title: "[공] Projects — 여러 Claude 에이전트 세션을 하나로 묶기"
description: "관련 코딩 세션들을 Project로 그룹화해 여러 에이전트를 동시에 실행·감독하는 Claude Code Desktop 기능"
tags: ["자동생성", "Projects", "에이전트", "멀티에이전트", "Desktop", "병렬작업", "감독"]
category: "advanced"
order: 28
lastUpdated: "2026-10-30"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026-09-17 (마케팅 페이지 하이라이트 기준)<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ Claude Code Desktop에서 사용 가능
</div>

## Projects가 뭔가요?

**관련된 Claude Code 세션들을 하나의 Project에 묶어서, 여러 에이전트가 동시에 작업하는 것을 한 화면에서 감독**하는 기능입니다.

> 🏢 **비유로 설명하면**: 팀장이 여러 팀원(에이전트)에게 각자 다른 업무를 맡기고, 대시보드에서 누가 어디쯤 왔는지 한눈에 보는 것과 같아요. 팀원마다 따로 전화해서 "지금 어디야?"를 물어보지 않아도 됩니다.

---

## 어떤 문제를 해결하나요?

이전까지는 여러 Claude 세션을 열면 각 세션이 분리돼 있었어요:

```
[세션 1] 프론트엔드 버그 수정
[세션 2] 백엔드 API 작성
[세션 3] 테스트 코드 작성
     ↑
 서로 연결 없음. 어디서 뭘 하고 있는지 모름.
```

Projects를 쓰면:

```
📁 Project: v2.0 릴리즈
├── [에이전트 1] 프론트엔드 버그 수정 ● 진행 중
├── [에이전트 2] 백엔드 API 작성      ✅ 완료 대기
└── [에이전트 3] 테스트 코드 작성     ⏳ 대기 중
```

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 세션 그룹화 | 관련 세션을 하나의 Project로 묶기 |
| 병렬 실행 | 여러 에이전트가 동시에 작업 |
| 한 화면 감독 | 모든 에이전트 진행 상황을 한눈에 |
| 의존성 관리 | 에이전트 A가 끝나면 에이전트 B 시작 (추정) |

---

## 어디서 쓸 수 있나요?

- **Claude Code Desktop** (macOS·Windows·Linux 베타)에서 지원
- 터미널 CLI나 웹에서는 아직 미지원 (공식 발표 기준)

> 📌 Desktop 앱이 없다면 [Claude Code Desktop 소개](/docs/setup/desktop-quickstart)를 먼저 참고하세요.

---

## Agent View와의 차이점

Projects와 비슷하게 들리는 [Agent View](/docs/advanced/agent-view)와 어떻게 다를까요?

| 항목 | Agent View | Projects |
|------|-----------|---------|
| 목적 | 모든 세션 모니터링 | 관련 세션 그룹화 |
| 범위 | 전체 세션 목록 | 특정 목표 단위 |
| 구성 | 자동 (모든 세션 표시) | 수동 (직접 묶기) |
| 활용 | "지금 뭐가 실행 중?" | "이 프로젝트 어떻게 됐어?" |

---

## 실전 활용 예시

### 예: 대규모 마이그레이션

```
📁 Project: DB 마이그레이션
├── 에이전트 1: 스키마 변경 스크립트 작성
├── 에이전트 2: 데이터 변환 로직 작성
├── 에이전트 3: 롤백 스크립트 작성
└── 에이전트 4: 마이그레이션 테스트 실행
```

### 예: 멀티 서비스 기능 추가

```
📁 Project: 결제 기능 추가
├── 에이전트 1: 프론트엔드 결제 폼 (React)
├── 에이전트 2: 백엔드 결제 API (Node)
└── 에이전트 3: 이메일 영수증 서비스 (Python)
```

---

## 시작하는 방법

1. **Claude Code Desktop** 열기
2. 사이드바에서 **Projects** 탭 선택 (추정)
3. **새 Project 생성** → 이름, 설명 입력
4. 기존 세션을 Project에 추가하거나 새 세션 시작
5. 각 에이전트에게 태스크 할당 후 동시 실행

> 💡 **팁**: 처음에는 2~3개 에이전트로 작은 Project를 만들어보고, 익숙해지면 규모를 늘려가세요. [Dynamic Workflows](/docs/advanced/dynamic-workflows)와 함께 쓰면 더욱 강력합니다.
