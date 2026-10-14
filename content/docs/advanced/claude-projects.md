---
title: "[공] Claude Projects — 관련 코딩 세션을 묶어 병렬로 관리하기"
description: "Claude Projects는 연관된 작업들을 하나의 대화에서 여러 클라우드 세션으로 병렬 실행하고 감독하는 기능이에요. Claude Code Desktop에서 사용 가능합니다"
tags: ["자동생성", "Projects", "병렬세션", "에이전트", "클라우드세션", "멀티에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-10-14"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ <strong>[공]</strong> 마케팅 페이지 기능 하이라이트에 등재 확인 (2026-10-14 기준)<br />
★ Claude Code Desktop에서 사용 가능 (공식 발표 기준)
</div>

## Claude Projects란?

> 🏗️ **비유로 설명하면**: 건설 현장 감독처럼, 여러 팀(세션)이 동시에 각자 맡은 일을 하고 있고, 감독(나)은 한 화면에서 모든 팀 상황을 보면서 지시를 내리는 거예요.

공식 문서 기준: **"연관된 작업 스트림을 하나의 대화에 넘기면 저장소·지시사항·메모리를 공유하는 병렬 클라우드 세션으로 실행해 줍니다."**

이전까지는 각 Claude Code 세션이 독립적으로 작동했어요. Projects를 쓰면 **서로 연관된 세션들이 같은 저장소와 지시사항을 공유**하면서 일을 나눠서 처리할 수 있습니다.

---

## Agent View와 뭐가 다른가요?

| 기능 | Agent View | Claude Projects |
|---|---|---|
| 세션 관리 | 현재 실행 중인 모든 세션 모니터링 | 관련 작업 묶음을 병렬 클라우드 세션으로 실행 |
| 공유 컨텍스트 | 없음 (각 세션 독립) | 저장소·지시사항·메모리 공유 |
| 작업 방식 | 이미 돌아가는 세션 관리 | 관련 작업 묶음을 **하나의 대화로 출발** |
| 실행 위치 | 로컬 or 클라우드 | 클라우드 세션 |

> 💡 Agent View가 "현재 일하는 팀원들을 모니터하는 것"이라면, Projects는 "일감을 묶어서 팀에게 동시에 나눠주는 것"이에요.

---

## 어떻게 쓰나요?

Projects는 **Claude Code Desktop**에서 사용할 수 있어요 (공식 발표 기준).

```
1. Claude Code Desktop 실행
2. Projects 탭 (또는 메뉴)에서 새 프로젝트 생성
3. 연관된 작업들을 하나의 대화에서 제출
4. Claude가 자동으로 병렬 클라우드 세션으로 분배
5. 각 세션이 완료되면 결과 취합
```

> ⚠️ 세부 UI 흐름은 공식 문서 및 데스크탑 앱 실제 버전에서 확인하세요. 위 내용은 공식 문서 설명 기준으로 정리한 내용입니다 (추정 포함).

---

## 어떤 상황에 Projects가 유용한가요?

### ✅ 이럴 때 써보세요

- 📦 **모노레포(monorepo) 여러 패키지 동시 업데이트** — 각 패키지를 별도 세션으로 병렬 처리
- 🔄 **대규모 코드 마이그레이션** — 파일 그룹별로 나눠서 동시 진행
- 🧪 **다양한 접근법 동시 테스트** — 세션 A는 방법 1, 세션 B는 방법 2 시도
- 📋 **관련 기능 병렬 개발** — 로그인/결제/알림 기능을 각각 다른 세션에서

### ❌ 이럴 때는 다른 방법이 나을 수 있어요

- 단일 파일 수정 → 일반 Claude Code 세션으로 충분
- 순서가 중요한 작업 → `/goal` 명령어 또는 단일 에이전트 루프

---

## Dynamic Workflows와의 차이

Projects와 비슷해 보이지만 Dynamic Workflows와는 다릅니다:

| 항목 | Projects | Dynamic Workflows |
|---|---|---|
| 제어 방식 | Claude가 작업 분배 자동화 | 스크립트로 명시적 오케스트레이션 |
| 규모 | 관련 작업 묶음 | 10~100개 서브에이전트 대규모 병렬 |
| 사용 난이도 | 상대적으로 쉬움 | 스크립트 작성 필요 |

> 🏗️ Projects는 "팀장에게 일감 묶음을 주면 알아서 분배", Dynamic Workflows는 "내가 직접 조직도를 짜서 누가 뭘 할지 지정"하는 방식이에요.

---

## 관련 공식 문서

- [claude-projects](https://code.claude.com/docs/en/claude-projects) — Projects 전체 설명
- [agents](https://code.claude.com/docs/en/agents) — 병렬 작업 방식 비교 (subagents·agent view·agent teams·dynamic workflows·projects)
- [agent-view](https://code.claude.com/docs/en/agent-view) — 세션 모니터링 화면
