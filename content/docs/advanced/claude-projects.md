---
title: "[공] Claude Projects — 클로드가 여러 작업을 동시에 관리해주는 개인 비서"
description: "Projects는 하나의 대화에서 클로드가 병렬 클라우드 세션들을 직접 조율해주는 기능이에요. Pro·Max 플랜 공개 베타 중"
tags: ["자동생성", "Projects", "클라우드 세션", "병렬 작업", "공개베타", "고급"]
category: "advanced"
order: 24
lastUpdated: "2026-09-17"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />★ 현재 Pro · Max 플랜 공개 베타 (Team · Enterprise 미지원, 단계적 출시 중)
<br />★ 사이드바에 <strong>Projects</strong>가 안 보이면 <a href="https://claude.com/form/projects">대기 목록 등록</a>
</div>

## Claude Projects가 뭔가요?

**Claude Projects**는 클로드가 관련된 여러 작업을 **하나의 대화**에서 동시에 조율해주는 기능이에요.

> 🍱 **비유로 설명하면**: 일반 Claude Code는 "심부름 하나씩 처리하는 도우미"예요. Projects는 **"팀장처럼 일감을 받아서 팀원들한테 나눠 주고 진행 상황을 보고해 주는 관리자 Claude"** 예요.

프로젝트 없이 여러 세션을 쓰면 내가 직접:
- 각 세션에 어떤 작업을 할지 지시해야 하고
- 같은 배경 설명을 세션마다 반복하고
- 어느 세션이 끝났는지 일일이 확인해야 해요

**Projects를 쓰면** 나는 그냥 할 일 목록을 하나의 대화에 붙여넣기만 하면 돼요.

---

## 어떻게 작동하나요?

| 개념 | 설명 |
|---|---|
| **Project (프로젝트)** | 하나의 지속 대화. 클로드가 여기서 모든 작업을 조율 |
| **Thread (스레드)** | 각 작업 단위. 하나의 [클라우드 세션](https://code.claude.com/docs/en/claude-code-on-the-web) |
| **병렬 실행** | 여러 스레드가 동시에 실행됨 |
| **백그라운드** | 노트북 닫아도 계속 실행 |
| **모바일 확인** | 폰에서 진행 상황 확인 · 조정 가능 |

### 예시: 여러 버그를 한 번에

```
"이 세 가지 이슈를 처리해줘:
1. 결제 모듈에서 이중 청구 버그
2. 모바일 레이아웃 깨짐
3. CI 플레이키 테스트 수정"
```

→ 클로드가 각 이슈마다 **별도 스레드(클라우드 세션)** 를 시작해요.  
→ 세 작업이 **동시에 진행**돼요.  
→ 빠른 질문은 프로젝트 대화 안에서 바로 대답해요.

---

## 스레드가 공유하는 것들

각 스레드(클라우드 세션)는 같은 프로젝트 안에서:

- 📁 **저장소(repositories)** 공유
- 📋 **지시사항(instructions)** 공유
- 🧠 **메모리(memory)** 공유

> 🍱 **비유로 설명하면**: 같은 팀에 속한 팀원들이에요. 회사 공유 드라이브, 팀 규칙 문서, 팀 위키를 다 같이 쓰는 거예요.

---

## 지금 이용하려면?

### 조건

| 조건 | 내용 |
|---|---|
| **지원 플랜** | Pro · Max (Team · Enterprise는 미지원) |
| **상태** | 공개 베타, 단계적 출시 중 |
| **접근 조건** | 기존에 [클라우드 세션](https://code.claude.com/docs/en/claude-code-on-the-web)을 쓴 적 있고, claude.ai 채팅이나 Cowork의 기존 프로젝트가 없어야 함 |

### 접근 방법

1. [claude.ai/code](https://claude.ai/code) 또는 Desktop 앱의 **Code 탭** 열기
2. 사이드바에 **Projects** 항목 확인
3. 안 보이면 → [대기 목록 등록](https://claude.com/form/projects)

> 💡 대기 목록에 등록하면 내 차례가 됐을 때 자동으로 활성화돼요.

---

## Projects vs 일반 세션 비교

| 항목 | 일반 세션 | Projects |
|---|---|---|
| **작업 개수** | 한 번에 하나 | 여러 작업 동시 |
| **세션 관리** | 내가 직접 | 클로드가 조율 |
| **백그라운드** | 가능 (클라우드) | 가능 |
| **저장소 공유** | 수동 설정 | 자동 공유 |
| **모바일 모니터링** | 가능 | 가능 |
| **플랜** | 모든 플랜 | Pro · Max (베타) |

---

## 지금 쓸 수 없다면?

Projects가 아직 내 계정에 출시되지 않았다면, **병렬 에이전트** 기능으로 비슷하게 쓸 수 있어요:

- [`/agents`](https://code.claude.com/docs/en/agents) — 병렬로 에이전트 실행
- [`/agent-view`](https://code.claude.com/docs/en/agent-view) — 실행 중인 에이전트 모니터링
- [Worktrees](https://code.claude.com/docs/en/worktrees) — 여러 브랜치 동시 작업

> 📅 위 내용은 2026년 9월 공식 문서 기준이에요. 베타 기간 중 기능이 달라질 수 있어요.
