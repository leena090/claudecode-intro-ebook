---
title: "[공] Projects — 여러 Claude 에이전트를 한 번에 관리하기"
description: "Projects는 관련된 코딩 세션들을 묶어서 여러 Claude 에이전트가 같은 저장소·지침·메모리를 공유하며 일하게 해주는 기능이에요 (2026년 9월 마케팅 최상단 기능)"
tags: ["자동생성", "Projects", "에이전트", "병렬작업", "Desktop", "클라우드"]
category: "advanced"
order: 24
lastUpdated: "2026-09-23"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />★ 2026년 9월 기준 마케팅 페이지 최상단 최신 기능으로 소개
<br />★ Claude Code Desktop에서 사용 가능
</div>

## Projects란?

**Projects(프로젝트)**는 여러 개의 관련된 코딩 세션을 **하나의 대화로 묶어서 관리**하는 기능이에요.

여러 Claude 에이전트가 **같은 저장소(repository), 같은 지침(instructions), 같은 메모리**를 공유하면서 동시에 작업할 수 있어요.

> 🍱 **비유로 설명하면**: 개인 과외 선생님(개별 세션)이 아니라 **팀장 + 팀원 여러 명이 함께 일하는 프로젝트 팀**을 꾸린 것처럼요. 팀원들이 각자 역할을 맡고, 팀장(여러분)이 전체를 감독하는 방식이에요.

---

## Projects vs 기존 방식 비교

| 항목 | 기존 개별 세션 | Projects |
|---|---|---|
| **저장소 공유** | 각 세션이 개별 접근 | 모든 에이전트가 공유 |
| **지침 공유** | 각 세션에 개별 설정 | 프로젝트 단위로 통합 |
| **메모리** | 세션 종료 시 사라짐 | 프로젝트 단위로 유지 |
| **감독** | 각 세션 따로 확인 | 한 화면에서 통합 관리 |
| **대화 방식** | 별도 대화 여러 개 | 하나의 대화 안에서 |

---

## 어떤 상황에서 쓰나요?

### 상황 1: 대규모 리팩토링

```
목표: 레거시 코드 전체를 리팩토링

에이전트 A: 백엔드 API 담당
에이전트 B: 프론트엔드 컴포넌트 담당
에이전트 C: 테스트 코드 담당

→ 셋이 동시에 작업하면서 서로 변경 사항 공유
```

### 상황 2: 기능 개발 + QA 병행

```
에이전트 1: 새 기능 코드 작성
에이전트 2: 작성된 코드 즉시 테스트
에이전트 3: 문서 업데이트

→ 순서대로가 아니라 동시에 진행
```

> 🍱 **비유로 설명하면**: 아파트 공사를 할 때 목수, 전기기사, 인테리어 업자가 각자 맡은 부분을 **동시에** 작업하는 것처럼, Claude 에이전트들이 각자 역할을 나눠 동시에 일해요.

---

## Projects 시작하기

### Claude Code Desktop에서

```bash
# Projects는 Claude Code Desktop 앱에서 사용 가능
# (공식 발표 기준 — 상세 UI 추정)

1. Desktop 앱 좌측 패널에서 "Projects" 선택
2. "+ 새 프로젝트" 생성
3. 연결할 저장소(GitHub 등) 설정
4. 프로젝트 지침(instructions) 작성
5. 에이전트 세션 추가
```

### Agent SDK에서 (개발자용)

```typescript
// 공식 발표 기준 — 상세 코드 추정
const project = await claude.createProject({
  repository: 'github.com/myorg/myrepo',
  instructions: 'CLAUDE.md 내용',
});

// 여러 세션을 프로젝트에 추가
await project.addSession({ task: '백엔드 리팩토링' });
await project.addSession({ task: '테스트 작성' });
```

<div class="note-star">
★ 위 코드는 공식 문서 발표 기준 예시입니다. 정확한 API는 <a href="https://code.claude.com/docs/en/claude-projects">공식 문서</a>를 확인하세요.
</div>

---

## Projects + Agent view 조합

Projects는 **Agent view**(에이전트 뷰)와 함께 쓸 때 더욱 강력해요.

| 기능 | 역할 |
|---|---|
| **Projects** | 여러 에이전트가 공유할 저장소·지침·메모리 설정 |
| **Agent view** | 각 에이전트가 지금 뭘 하는지 한 화면에서 모니터링 |
| **조합 효과** | 대규모 작업을 효율적으로 분산·감독 가능 |

> 🍱 **비유로 설명하면**: Projects가 "팀 작업 공간과 규칙"이라면, Agent view는 "팀 회의실 모니터"예요. 팀원들이 어떤 작업을 하고 있는지 한 화면에서 볼 수 있어요.

---

## 입문자를 위한 한마디

처음에는 Projects를 안 쓰고 **개별 세션으로 시작**해도 충분해요. 다음과 같은 상황이 생기면 Projects를 써보세요:

- 같은 코드베이스에서 여러 작업을 동시에 진행하고 싶을 때
- 에이전트들이 서로 작업 내용을 알아야 할 때
- 대규모 마이그레이션이나 리팩토링 프로젝트를 시작할 때

> 🍱 **비유로 설명하면**: 혼자 요리할 땐 혼자 해도 충분하지만, 큰 파티를 준비할 때는 **역할을 나눈 요리팀**이 필요한 것처럼요.

---

<div class="note-star">
★ Projects 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />★ Agent view 관련 문서: <a href="https://code.claude.com/docs/en/agent-view">code.claude.com/docs/en/agent-view</a>
<br />★ Projects는 Claude Code Desktop에서 사용 가능합니다 (2026년 9월 기준 공식 발표)
</div>
