---
title: "[공] Projects — Claude에게 연관된 여러 작업을 한꺼번에 맡기기"
description: "Projects는 Claude가 관련 작업들을 병렬 클라우드 세션으로 실행하고 코디네이션해주는 새 기능이에요. 할 일 목록을 주면 Claude가 자동으로 각 작업을 별도 세션에서 동시에 처리합니다"
tags: ["자동생성", "Projects", "프로젝트", "병렬작업", "클라우드세션", "고급기능"]
category: "advanced"
order: 20
lastUpdated: "2026-10-05"
---

<div class="note-star">
★ <strong>공식 문서</strong> — code.claude.com/docs/en/claude-projects 기준 (<code>[공]</code>)<br />
★ 현재 <strong>퍼블릭 베타</strong> — Pro·Max 플랜, 일부 계정부터 순차 롤아웃 중<br />
★ Team·Enterprise는 아직 미지원 (추후 지원 예정)
</div>

<div class="note-warning">
⚠️ <strong>베타 기능</strong> — Projects가 사이드바에 보이지 않는다면 아직 내 계정에 롤아웃이 안 된 것이에요. <a href="https://claude.com/form/projects">대기 목록 신청</a>을 통해 먼저 사용해볼 수 있어요.
</div>

## Projects가 뭔가요?

Projects는 **여러 관련 작업을 Claude가 동시에 처리해주는 새 작업 방식**이에요.

> 🏗️ **비유로 설명하면**: 건설 현장 소장처럼 일해요. 여러분이 "1층 배관, 2층 전기, 3층 미장 해줘"라고 말하면, 소장(Claude)이 각 반장(서브에이전트)에게 일감을 나눠주고 동시에 작업하게 하는 것처럼요.

일반 Claude Code 대화에서는 한 번에 한 가지 작업을 순서대로 처리하지만, Projects에서는 Claude가 **여러 작업을 병렬로 실행**하고 그 결과를 취합해서 알려줘요.

---

## 어떻게 작동하나요?

### 구조

```
Projects 대화 (나와 Claude)
    │
    ├── 스레드 1: 버그 수정 (클라우드 세션)
    ├── 스레드 2: 테스트 작성 (클라우드 세션)
    └── 스레드 3: 문서 업데이트 (내 컴퓨터 세션)
```

**스레드(thread)** = 각 작업 단위. 보통 **클라우드 세션**으로 실행돼요.

| 스레드 유형 | 특징 |
|-------------|------|
| ☁️ 클라우드 세션 | 노트북 닫아도 계속 실행 / 원격 서버에서 처리 |
| 💻 내 컴퓨터 세션 | 내 PC에서만 가능한 작업 (로컬 DB, 사내 시스템) / Remote Control 통해 연결 |

---

## 어디서 쓸 수 있나요?

### 플랜별 가용성

| 플랜 | 상태 |
|------|------|
| Pro ($17/월) | ✅ 퍼블릭 베타 (일부 계정 순차 적용) |
| Max ($100~200/월) | ✅ 퍼블릭 베타 (일부 계정 순차 적용) |
| Team | ❌ 아직 미지원 |
| Enterprise | ❌ 아직 미지원 |

### 접근 방법

1. [claude.ai/code](https://claude.ai/code) 웹 접속
2. Claude Code Desktop의 Code 탭
3. 왼쪽 사이드바에서 **Projects** 항목 클릭

> 📱 **모바일에서도 진행 상황 확인 가능!** — 스레드가 실행 중인 동안 폰으로 진행 상황을 보고 방향을 잡아줄 수 있어요.

---

## 대기 중에 어떻게 하나요?

Projects 롤아웃을 기다리는 동안 비슷한 효과를 낼 수 있어요:

- **[병렬 에이전트](./agents-parallel.md)**: `/subtask` 명령어로 서브에이전트 직접 실행
- **[Dynamic Workflows](./dynamic-workflows.md)**: 스크립트로 대규모 병렬 에이전트 실행

---

## 왜 유용한가요?

### 시간 절약

> ⏱️ 예: 마이그레이션 작업 시
> - 이전 방식: 코드 이전 → (기다림) → 테스트 수정 → (기다림) → 문서 업데이트 = **3시간**
> - Projects: 세 스레드 동시 실행 = **1시간**

### 노트북을 닫아도 계속 작동

클라우드 세션은 **내 컴퓨터가 꺼져도 실행 중**이에요. 퇴근하고 집에서 확인해도 작업이 완료돼 있어요.

### 공유 컨텍스트

모든 스레드가 같은 레포지토리, 같은 지침, 같은 메모리를 공유해요.

---

## 내 컴퓨터에서 스레드 실행하기

클라우드가 아닌 **내 컴퓨터**에서 처리해야 하는 작업(예: VPN 안쪽 사내 API)은 Remote Control을 통해 연결할 수 있어요.

```text
"이 스레드는 내 컴퓨터에서 실행해줘"라고 요청
→ Remote Control로 내 기기와 연결됨
```

> 🔗 **Remote Control 설정은** [remote-control.md](./remote-control.md) 참조

---

## 마케팅 페이지 최신 기능 하이라이트 (2026-10-05 기준) `[공]`

공식 Claude Code 마케팅 페이지에서 Projects가 **가장 최신 기능**으로 소개되고 있어요:

> "Projects: Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."

---

## 정리

| 항목 | 내용 |
|------|------|
| 핵심 개념 | 여러 작업을 병렬 클라우드 세션으로 동시 처리 |
| 시작 방법 | claude.ai/code 또는 Desktop 사이드바 → Projects |
| 플랜 | Pro, Max (퍼블릭 베타) |
| 상태 | 순차 롤아웃 중, 대기 목록 신청 가능 |
| 폰 지원 | ✅ 진행 상황 확인 및 방향 제시 가능 |

---

*출처: code.claude.com/docs/en/claude-projects `[공]`*
