---
title: "[공] 세션 간 메시지 전송 (Cross-session Messaging) — Claude 세션끼리 대화하기"
description: "같은 기기에서 실행 중인 여러 Claude Code 세션이 서로 메시지를 주고받는 Cross-session Messaging 기능을 한국어로 설명합니다."
tags: ["자동생성", "cross-session-messaging", "멀티세션", "협업", "에이전트"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-22"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com 공식 문서</a>를 바탕으로 정리했습니다.
<br />★ Cross-session Messaging은 <strong>v2.1.224 이상</strong>, macOS·Linux(W34부터 Windows도) 지원 기능입니다.
</div>

## 세션 간 메시지 전송이란?

**Cross-session Messaging**은 같은 컴퓨터에서 실행 중인 **여러 Claude Code 세션이 서로 문자 메시지를 주고받는** 기능이에요.

> 💬 **비유로 설명하면**: 한 사무실에서 각자 다른 프로젝트를 담당하는 팀원들이 **메신저로 서로 공지를 전달하는** 것과 같아요. "방금 API 스펙 바뀌었으니 네 코드도 업데이트해" 같은 메시지를 Claude가 다른 Claude에게 보낼 수 있습니다.

---

## 어떤 상황에서 유용한가요?

| 상황 | 활용 예 |
|---|---|
| 여러 프로젝트 동시 작업 | A 세션의 변경이 B 세션에 영향 → 자동 알림 |
| 프론트엔드 + 백엔드 분리 작업 | API 스펙 변경 시 프론트 세션에 통보 |
| 마이크로서비스 개발 | 공통 모듈 변경 → 관련 세션 모두에 공지 |
| 장시간 백그라운드 작업 | 한 세션이 완료되면 다른 세션에 알림 |

---

## 사용 방법

### 1. 메시지 보내기 — 자연어로

```text
# 세션 A에서 세션 B로 메시지 보내기 (자연어)
payments API 작업 중인 세션한테 users.name이 users.display_name으로 바뀌었다고 알려줘

# 또는 영어로
Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 알아서 `ListAgents` 도구로 세션을 찾고 `SendMessage`로 전달합니다.

### 2. @ 멘션으로 직접 지정 (W33 이후)

```text
# 프롬프트 입력창에서 @ 입력 시 세션 자동완성
@payments-api-session users.name이 users.display_name으로 바뀌었어
```

이름이 정확히 일치하는 세션이 하나면 확인 없이 바로 전달됩니다.

### 3. 세션 목록 확인

```text
> /list-agents
# 현재 메시지 보낼 수 있는 세션 목록 표시
```

### 4. 유휴 상태 알림 요청 (W34 이후)

```text
# 다른 세션이 유휴 상태가 되면 알림 받기
> 백그라운드 빌드 완료되면 알려줘
# → SendMessage의 notify_when_idle 옵션 자동 활용
```

---

## 메시지를 받은 쪽에서는?

수신 세션에 **`Message from [세션명]`** 행이 표시됩니다.

- `Ctrl+O`를 눌러 메시지 내용 펼치기
- Claude가 메시지를 읽고 적절히 반응 (자동으로 작업 조정)

---

## 세션 이름 관리

세션 이름이 겹치면 안 됩니다. W33부터 자동으로 중복 방지:

- 이미 사용 중인 이름으로 시작하면 `name-word-word` 형식으로 변형
- 변경 사실을 알려줘서 혼선 방지

```bash
# 세션에 이름 직접 붙이기
claude --name my-frontend-session
```

---

## 지원 범위

| OS | 버전 |
|---|---|
| macOS | v2.1.224 이상 |
| Linux | v2.1.224 이상 |
| Windows (네이티브) | W34 (v2.1.234) 이상 |

> ⚠️ 세션 간 메시지는 **텍스트 메시지만** 전달됩니다. 대화 기록, 파일 내용은 공유되지 않아요.

---

## 관련 공식 문서

- [Cross-session messaging 공식 문서](https://code.claude.com/docs/en/cross-session-messaging)
- [ListAgents 도구 레퍼런스](https://code.claude.com/docs/en/tools-reference)
- [Sub-agents 가이드](https://code.claude.com/docs/en/sub-agents)

---

<div class="tip-box">
💡 <strong>에이전트 팀(Agent Teams)과 다른 점은?</strong><br/>
에이전트 팀은 Claude가 <em>직접 서브에이전트를 만들어</em> 작업을 분산하는 방식이에요. Cross-session Messaging은 <em>이미 실행 중인 별개의 세션끼리</em> 소통하는 방식으로, 각 세션이 독립된 작업을 하면서 서로 영향을 주는 경우에 유용합니다.
</div>
