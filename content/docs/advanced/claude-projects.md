---
title: "[공] Claude Projects — 여러 작업을 한 곳에서 조율하기"
description: "Claude Projects는 연관된 여러 작업을 하나의 대화에서 병렬로 실행하고 관리하는 기능입니다. Pro·Max 퍼블릭 베타."
tags: ["자동생성", "Projects", "병렬작업", "클라우드세션", "고급기능"]
category: "advanced"
order: 10
lastUpdated: "2026-10-03"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com 공식 문서</a> 내용을 한국어로 정리한 것입니다.<br />
★ Projects는 현재 <strong>Pro·Max 플랜 퍼블릭 베타</strong>이며, Team·Enterprise 플랜은 아직 미지원입니다.<br />
★ claude.ai/code 사이드바에 Projects가 보이지 않으면 아직 롤아웃이 안 된 것입니다. <a href="https://claude.com/form/projects">대기자 등록</a> 가능.
</div>

## Claude Projects가 뭔가요?

> 🍱 **비유로 설명하면**: 기존 Claude Code는 직원 한 명에게 일을 시키는 방식이었어요. Projects는 **팀장(Claude)에게 목표를 주면, 팀장이 여러 팀원(클라우드 세션)에게 일을 나눠주고 진행 상황을 관리**해주는 방식이에요. 여러분은 팀장에게만 보고받으면 됩니다.

Projects는 **하나의 긴 대화에서 클로드가 관련 작업들을 병렬 클라우드 세션으로 실행하고 조율**해주는 기능입니다.

---

## 언제 Projects를 쓰면 좋을까요?

### ✅ 이럴 때 딱 맞아요

| 상황 | 예시 |
|---|---|
| **여러 저장소에 동일 작업** | "모든 서비스에 새 린트 설정 적용해줘" |
| **계속 추가되는 작업 목록** | 버그 리포트, 스택 트레이스가 계속 들어오는 경우 |
| **한 세션으로 끝나지 않는 큰 작업** | "이 스펙 문서대로 새 기능 전체 구현해줘" |
| **코드 외 반복 작업** | 계약서 분석, 지원 티켓 분류 등 |

### ❌ 이럴 때는 다른 방법이 나아요

- **한 세션으로 끝나는 작업** → 일반 클라우드 세션 사용
- **모든 작업이 내 컴퓨터 필요** (로컬 DB, VPN 등) → 로컬 세션 사용
- **반복 스케줄만 필요** → Routines 사용

---

## Projects의 구성 요소

```
📁 프로젝트
├── 💬 프로젝트 대화 (조율 허브 — 여러분과 대화하는 곳)
│   ├── 🧵 Thread 1: repo-a 린트 수정 (클라우드 세션)
│   ├── 🧵 Thread 2: repo-b 린트 수정 (클라우드 세션)
│   └── 🧵 Thread 3: repo-c 린트 수정 (내 컴퓨터 세션)
├── 📊 Overview 패널 (전체 현황 한눈에)
│   ├── 완료된 스레드
│   ├── 내 답변 필요한 스레드 ← 집중해야 할 곳
│   └── 생성된 PR 목록
└── 📚 Library (업로드 파일, 결과 파일)
```

---

## 시작 방법

### 사전 준비

1. **플랜 확인**: Pro 또는 Max 플랜 필요
2. **GitHub 설정**: 
   - github.com 저장소 (GitHub Enterprise·GitLab·Bitbucket 미지원)
   - Claude GitHub App 설치 필요
   - `/web-setup`으로 연결한 토큰만으로는 부족해요 (App 설치 별도 필요)
3. **사이드바**: claude.ai/code 또는 데스크톱 앱 Code 탭에 **Projects** 메뉴 확인

### 프로젝트 만들기

**방법 1 — 처음부터 시작**
1. claude.ai/code 접속
2. 사이드바에서 **Projects** → **New project**
3. 이름 입력 (필수), 목표 입력 (선택)

**방법 2 — 기존 클라우드 세션에서 전환**
1. 이미 진행 중인 클라우드 세션의 메뉴
2. **Continue as project** 선택
3. 클로드가 현재 세션 내용을 바탕으로 프로젝트 설정 제안

---

## 핵심 기능

### 📋 스탠딩 컨텍스트 — "이건 한 번만 말해도 돼요"

> 🍱 **비유**: 새 팀원이 올 때마다 회사 규칙을 설명하는 대신, **온보딩 문서**를 만들어두면 모두가 자동으로 읽는 것과 같아요.

프로젝트 Instructions에 한 번 작성해두면 **모든 스레드가 동일한 지침으로 시작**합니다:
- "항상 `main` 브랜치 기준으로 작업해"
- "PR 제목은 한국어로"
- "테스트 코드 필수로 추가"

### 📊 Overview 패널 — 돌아왔을 때 무엇부터 볼지 바로 알 수 있어요

클로드가 여러 시간 동안 작업하고 나서 돌아왔을 때:
- **완료된 스레드**: PR이 열렸거나 결과물이 나온 것
- **Waiting on you**: 클로드가 내 결정을 기다리는 스레드 ← 먼저 확인!
- **PR 목록**: 리뷰 대기 중인 PR들

### 📱 모바일에서 확인하기

클라우드 스레드는 내 노트북을 닫아도 계속 실행됩니다. iPhone·Android 앱에서 Overview를 확인하고 스레드에 답할 수 있어요.

---

## 스레드 환경 이해하기

클라우드 스레드는 **내 컴퓨터 설정을 자동으로 받지 않아요**. 다음은 주의할 점:

| 내 로컬 Claude Code | 클라우드 스레드 |
|---|---|
| 내 plugins | ❌ 자동 연동 안 됨 |
| 내 MCP 서버 | claude.ai connectors를 통해 연결 가능 |
| 내 skills/CLAUDE.md | 저장소의 CLAUDE.md는 자동 포함 ✅ |
| 내 환경 변수·API 키 | 환경 설정(cloud environment)에서 별도 구성 |

---

## 실제 활용 예시

### 예시 1: 여러 저장소 동시 업데이트

```
[프로젝트 대화에 입력]
"우리 회사 모든 Node.js 서비스(repo-a, repo-b, repo-c)에
ESLint v9 설정을 적용해줘. 각 저장소에 PR 열어줘."

→ 클로드가 3개 스레드를 시작해서 각각 작업하고 PR 오픈
```

### 예시 2: 버그 대응 센터

```
[프로젝트 Instructions에 작성]
"이 프로젝트는 결제 서비스 버그 대응용이야.
모든 수정은 fix/ 브랜치에, 테스트 필수, 영향도 분석 포함해줘."

[매일 버그가 들어올 때마다 프로젝트 대화에 붙여넣기]
"스택 트레이스: [...]"
```

---

## 비용과 한도

- Projects는 다른 Claude Code 세션과 **같은 플랜 한도**를 사용해요
- 여러 스레드가 동시에 돌면 한도를 더 빨리 소모할 수 있어요
- Pro 플랜에서는 Max 플랜보다 빠르게 한도에 도달할 수 있어요

---

## 공식 문서 링크

- [Claude Projects 공식 문서 →](https://code.claude.com/docs/en/claude-projects)
- [클라우드 세션 설명 →](https://code.claude.com/docs/en/claude-code-on-the-web)
- [에이전트 병렬 실행 →](https://code.claude.com/docs/en/agents)
