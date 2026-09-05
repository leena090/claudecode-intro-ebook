---
title: "[공] 세션 간 메시지 — Claude Code 여러 창이 대화하는 법"
description: "Cross-Session Messaging으로 여러 Claude Code 세션(에이전트)이 서로 정보를 주고받는 방법. 멀티 에이전트 협업의 핵심 기능"
tags: ["자동생성", "크로스세션", "cross-session", "멀티에이전트", "에이전트팀", "고급"]
category: "advanced"
order: 43
lastUpdated: "2026-09-05"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — 2026-09-05 llms.txt에서 신규 확인된 페이지.<br />
★ <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
</div>

## 여러 Claude Code가 서로 얘기할 수 있어요?

Claude Code를 여러 창에서 동시에 쓰다 보면 이런 생각이 들 때가 있어요:

> "창 A에서 작업하고 있는 내용을 창 B한테 알려줄 수 없을까?"

바로 이걸 가능하게 해주는 게 **Cross-Session Messaging(세션 간 메시지)**이에요.

> 🍱 **비유**: 공사 현장을 생각해보세요. 전기팀(에이전트 A)과 배관팀(에이전트 B)이 따로 일하다가, 벽에 전선이 지나갈 자리를 배관팀한테 알려줘야 할 때 서로 무전기로 연락하는 거예요. Cross-Session Messaging은 Claude Code 에이전트들의 **무전기**예요.

---

## 어떤 상황에서 써요?

### ✅ 이런 멀티 에이전트 시나리오에서 유용해요

| 시나리오 | 에이전트 A | 에이전트 B | 메시지 내용 |
|---------|-----------|-----------|------------|
| 프론트 + 백엔드 동시 개발 | 프론트엔드 작업 | 백엔드 작업 | "API 엔드포인트 `/user/login` 완성했어, 스펙은 이래" |
| 테스트 자동화 | 코드 작성 | 테스트 작성 | "함수 `parseDate()` 추가했어, 테스트 커버해줘" |
| 코드 리뷰 + 수정 | 코드 리뷰 | 코드 수정 | "3번 파일 17번 줄에 버그 있어" |
| 병렬 파일 처리 | 파일 A~M 처리 | 파일 N~Z 처리 | "내 쪽 완료, 합칠 준비됐어" |

### ❌ 이런 경우엔 오히려 복잡해요

- 혼자서 순서대로 처리하는 단순 작업
- 에이전트가 1개뿐인 프로젝트
- 빠른 일회성 작업

---

## 기본 개념: 세션(Session)이 뭔가요?

Claude Code를 실행할 때마다 **하나의 세션**이 만들어져요.

```
터미널 창 1 → 세션 A (session_id: abc123)
터미널 창 2 → 세션 B (session_id: xyz789)
```

Cross-Session Messaging은 이 세션 ID를 사용해서 메시지를 보내요.

---

## 어떻게 동작하나요? `[공]`

공식 문서에서 확인된 기본 구조에요. (세부 API 및 사용법은 공식 문서 참조)

```
세션 A ──[메시지 전송]──▶ 세션 B
         "작업 완료, 결과: {data}"

세션 B ──[메시지 수신]──▶ 작업 재개
         "응답 받았어, 다음 단계 진행"
```

> 💡 **Agent SDK에서의 활용**: 이 기능은 특히 **Agent SDK**를 사용해 커스텀 멀티 에이전트 시스템을 구축할 때 핵심적이에요. `SendMessage` 도구와 연계돼요.

---

## 기존 Agent Teams, Channels와 뭐가 달라요?

| 기능 | Agent Teams | Channels | Cross-Session Messaging |
|------|-------------|----------|------------------------|
| 대상 | 사전 정의된 팀 구성 | 채널 기반 브로드캐스트 | **세션 간 직접 메시지** |
| 방향 | 오케스트레이터 → 서브에이전트 | 1:N 브로드캐스트 | **1:1 직접 통신** |
| 사용 난이도 | 중간 | 중간 | **고급** |
| 적합한 상황 | 계층적 작업 분담 | 공지/이벤트 전파 | 에이전트 간 협상·동기화 |

> 🍱 **비유**: Agent Teams는 "팀장이 팀원들에게 업무 배분", Channels는 "전체 공지", Cross-Session Messaging은 "팀원끼리 DM(다이렉트 메시지)"이에요.

---

## 입문자를 위한 실용 포인트

지금 당장 직접 쓸 필요는 없어요. 하지만 이걸 알아두면 좋은 이유:

1. **Dynamic Workflows** 사용할 때 — 내부적으로 이 메시징을 활용해요
2. **Agent View**에서 세션 목록 볼 때 — 세션 간 통신 상태를 이해할 수 있어요
3. **나만의 에이전트 팀 구축** 관심 있을 때 — Agent SDK 학습 첫걸음

```bash
# Agent View로 현재 세션들 확인
/agent-view

# 세션 목록 및 ID 확인
/status
```

---

## 더 알아보기

- **공식 문서**: [Cross-Session Messaging](https://code.claude.com/docs/en/cross-session-messaging)
- **관련 기능**: [Agent Teams](https://code.claude.com/docs/en/agent-teams), [Channels](https://code.claude.com/docs/en/channels), [Sub-Agents](https://code.claude.com/docs/en/sub-agents)
- **이 책의 관련 글**: Agent Teams 소개, Dynamic Workflows

---

<div class="note-star">
📌 <strong>출처</strong><br />
[공] code.claude.com/docs/en/cross-session-messaging (2026-09-05 llms.txt 신규 확인)
</div>
