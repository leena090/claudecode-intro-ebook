---
title: "[공] Projects — 여러 Claude 에이전트를 한 곳에서 관리하기"
description: "관련된 코딩 세션들을 하나의 프로젝트로 묶고, 여러 에이전트를 동시에 감독하는 Projects 기능 소개 (Claude Code Desktop 전용)"
tags: ["자동생성", "Projects", "에이전트관리", "멀티에이전트", "Desktop", "신기능", "감독"]
category: "advanced"
order: 25
lastUpdated: "2026-10-17"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 공식 확인: "Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."
<br />★ <strong>[공]</strong> 관련 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a> (신규)
<br />★ 세부 UI 및 사용법은 공식 문서를 참고하세요. 이 글은 공식 발표 기준 소개입니다.
</div>

## Projects가 뭔가요?

Claude Code를 쓰다 보면 여러 세션이 동시에 열려요. "파일 A 작업 중인 세션", "테스트 돌리는 세션", "PR 만드는 세션"... 이걸 각각 따로 관리하다 보면 정신없어지죠.

**Projects**는 관련된 코딩 세션들을 하나의 프로젝트로 묶어서 한 화면에서 볼 수 있게 해주는 기능이에요.

> 📋 **비유로 설명하면**:
> 노션에서 여러 페이지를 하나의 프로젝트 폴더에 넣어두는 것처럼, 여러 Claude 에이전트(세션)를 하나의 프로젝트 안에서 모아서 관리해요.

---

## 어떤 상황에 도움이 되나요?

### 예시: 큰 리팩토링 작업을 할 때

```
[Projects 사용 전]
  세션 1: frontend 코드 수정 중... (어떻게 됐지?)
  세션 2: backend API 변경 중... (충돌 났나?)
  세션 3: 테스트 작성 중... (완료됐나?)
  → 각각 따로 확인해야 함. 복잡하고 놓치기 쉬움

[Projects 사용 후]
  📁 "대규모 리팩토링 2026-10" 프로젝트
  ├── ✅ frontend 코드 수정 — 완료
  ├── 🔄 backend API 변경 — 진행 중 (73%)
  └── ⏳ 테스트 작성 — 대기 중
  → 한 화면에서 전체 상황 파악
```

---

## 핵심 기능

### 1. 세션 그룹화

관련된 세션들을 하나의 프로젝트로 묶을 수 있어요.

> 💡 예: "고객 결제 모듈 개편" 프로젝트 안에 프론트엔드 세션, 백엔드 세션, 테스트 세션을 모두 넣기

### 2. 동시 감독 (Supervise Multiple Agents)

여러 에이전트가 동시에 일하고 있을 때, 각각의 진행 상황을 한 화면에서 볼 수 있어요.

```
📊 Projects 대시보드 (예시)
┌─────────────────────────────────┐
│ 🗂️ acme-payment-refactor         │
│                                 │
│ 🟢 frontend 수정     [완료]      │
│ 🟡 backend API       [73%]      │
│ 🔵 테스트 작성       [대기]      │
│                                 │
│ [에이전트에 메시지] [중단] [재시작]│
└─────────────────────────────────┘
```

### 3. 관련 세션 연결

프로젝트 안에서 세션들이 서로 연관되어 있으면, 한 세션의 결과가 다른 세션에 영향을 줄 수 있어요 (공식 발표 기준, 세부 동작은 공식 문서 확인 필요).

---

## Claude Code Desktop 전용

> ⚠️ **중요**: Projects는 현재 **Claude Code Desktop 앱에서만** 사용 가능해요.
> 터미널(CLI)이나 웹(claude.ai/code)에서는 지원 여부를 공식 문서에서 확인하세요.

### Desktop 앱 설치 방법

```bash
# macOS
brew install claude-code

# 또는 공식 사이트에서 다운로드
# claude.ai에서 "Download for macOS" 버튼
```

---

## Agent view와의 관계

<div class="note-star">
★ <strong>[공]</strong> Agent view (2026-05-12 출시)와 Projects는 다른 기능이에요:
<br />• <strong>Agent view</strong>: 모든 Claude Code 세션을 한 화면에서 보는 모니터링 뷰
<br />• <strong>Projects</strong>: 관련 세션들을 논리적으로 묶어서 관리하는 프로젝트 단위 기능
</div>

| | Agent view | Projects |
|---|---|---|
| 역할 | 모든 세션 모니터링 | 관련 세션 그룹화·관리 |
| 출시 | 2026-05 | 2026-10 (추정) |
| 대상 | 전체 세션 | 특정 프로젝트 세션들 |

---

## 어떻게 시작하나요?

1. **Claude Code Desktop 앱** 최신 버전으로 업데이트
2. Desktop 앱에서 **새 프로젝트** 만들기 (UI에서 Projects 섹션 찾기)
3. 기존 세션을 프로젝트에 추가하거나, 새 세션을 프로젝트 안에서 시작

> 🔍 자세한 사용법은 공식 문서 [code.claude.com/docs/en/claude-projects](https://code.claude.com/docs/en/claude-projects)를 참고하세요.

---

<div class="note-star">
★ 이 글은 공식 마케팅 페이지 내용을 기반으로 작성됐습니다.
<br />★ 세부 UI·기능은 업데이트에 따라 달라질 수 있으니 공식 문서에서 최신 정보를 확인하세요.
</div>
