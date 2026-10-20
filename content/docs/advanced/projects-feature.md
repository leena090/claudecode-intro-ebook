---
title: "[공] Projects — 관련 코딩 세션을 묶어서 AI 에이전트 팀으로 관리하기"
description: "Projects는 연관된 여러 Claude Code 세션을 하나의 프로젝트로 묶어, 병렬 에이전트를 감독하고 협력시키는 기능이에요."
tags: ["자동생성", "Projects", "병렬작업", "에이전트팀", "Desktop", "클라우드세션"]
category: "advanced"
order: 31
lastUpdated: "2026-10-20"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ <strong>[공]</strong> 마케팅 발표: "Projects: Group related coding sessions" (Sep 17, 2026)<br />
★ <strong>[공]</strong> Claude Code Desktop에서 사용 가능
</div>

## Projects란?

**Projects**는 관련된 여러 Claude Code 세션을 하나의 그룹으로 묶어서, 여러 AI 에이전트가 협력해 큰 작업을 나눠 처리하도록 관리하는 기능이에요.

> 🏢 **비유로 설명하면**: 회사에 여러 팀이 있고, 팀장(여러분)이 각 팀에게 다른 파트를 맡기는 것처럼요. 프론트엔드 팀, 백엔드 팀, 테스트 팀이 동시에 각자 일하면서, 팀장이 한 화면에서 전체 진행을 봐요.

**기존 방식 vs Projects:**

| 방식 | 특징 |
|---|---|
| 단일 세션 | 한 번에 한 가지 작업, 순서대로 처리 |
| Agent View | 여러 세션을 화면에서 모니터링 |
| **Projects** | 여러 세션이 **같은 저장소·지시·메모리를 공유**하며 협력 |

---

## 어떤 상황에 쓰면 좋을까요?

| 상황 | Projects 유용 |
|---|---|
| 대규모 마이그레이션 (Django → FastAPI 등) | ✅ |
| 여러 마이크로서비스 동시 개발 | ✅ |
| 코드 리뷰 + 수정 + 테스트를 동시에 | ✅ |
| 파일 하나 고치는 간단한 작업 | ❌ |

---

## 사용 방법

### Claude Code Desktop에서 시작하기

1. Desktop 앱에서 **Projects** 탭을 클릭해요
2. **"New Project"** → 프로젝트 이름 입력
3. 연결할 GitHub 저장소 선택
4. **"Add Session"**으로 병렬 세션 추가
5. 각 세션에 다른 작업 지시

### 공유 설정

Projects 내의 세션들은 **저장소, CLAUDE.md 지시, 메모리**를 공유해요.

```
프로젝트: e-커머스 리팩토링
├── 세션 1: "결제 모듈을 새 API로 마이그레이션해줘"
├── 세션 2: "인증 서비스 TypeScript로 전환해줘"
└── 세션 3: "E2E 테스트 추가해줘"
```

---

## Agent View와의 차이

- **Agent View**: 현재 컴퓨터의 세션들을 **모니터링**하는 화면
- **Projects**: 클라우드 세션들이 **공유 컨텍스트**로 협력하는 팀 구조

> 📌 **참고**: Projects 기능은 **Claude Code Desktop**에서 먼저 사용 가능해요. 웹 버전에서의 지원은 추후 확대될 예정(추정 — 공식 발표 기준 확인 필요).

---

## 관련 문서

- [Agent View — 여러 세션 모니터링](/docs/advanced/agent-view)
- [Dynamic Workflows — 서브에이전트 대규모 병렬 실행](/docs/advanced/dynamic-workflows)
- [자체 호스팅 환경](/docs/advanced/self-hosted-env)
