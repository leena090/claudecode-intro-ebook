---
title: "[공] 세션 간 메시지 — 여러 Claude가 서로 소통하기"
description: "내 Claude Code 세션들이 ListAgents와 SendMessage로 서로 메시지를 주고받는 크로스 세션 메시징 기능 (v2.1.224)"
tags: ["자동생성", "세션", "크로스세션", "ListAgents", "SendMessage", "멀티세션"]
category: "advanced"
order: 27
lastUpdated: "2026-08-28"
---

<div class="note-star">
★ <strong>Claude Code v2.1.224</strong> 이상, macOS · Linux · Windows 지원<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a><br />
★ 2026년 8월 3~7일(w32) 출시 [공]
</div>

## 세션 간 메시지란?

**같은 기기에서 열려 있는 여러 Claude Code 세션이 서로 메시지를 주고받는 기능**입니다.

> 🏢 **비유로 설명하면**: 대형 사무실에서 각자 다른 일을 하는 직원들이 사내 메신저로 "야, 방금 users 테이블 컬럼명 바꿨어!" 하고 알려주는 것처럼, 각 Claude 세션이 서로 필요한 정보를 전달합니다.

한 세션이 코드를 수정했을 때 다른 세션이 영향을 받는 상황이라면, Claude가 **스스로 다른 세션에게 알릴 수 있습니다.**

---

## 언제 유용한가요?

| 상황 | 세션 간 메시지 없이 | 있으면 |
|------|-----------------|-------|
| 공유 모듈 변경 | 각 세션에 따로 알려줘야 함 | **자동으로 영향받는 세션에 알림** |
| 데이터 타입 변경 | 개발자가 직접 추적 | **Claude가 연관 세션에 전달** |
| 빌드 완료 알림 | 수동 확인 | **완료 시 다른 세션에 통보** |

---

## 기본 사용법

### 현재 세션 목록 확인

```text
> /list-agents
```

같은 기기에서 실행 중인 Claude Code 세션 목록이 나타납니다.

### 다른 세션에 메시지 보내기

자연어로 요청하면 됩니다:

```text
결제 API 작업 중인 세션에게 users.name이 users.display_name으로 바뀌었다고 전달해줘
```

Claude가 `ListAgents` → `SendMessage` 순서로 자동 처리합니다.

### @ 멘션으로 직접 보내기 (w33 추가)

```text
@payments-api users.display_name으로 컬럼명 변경됨 알려줘
```

세션 이름이 정확히 하나만 일치하면 확인 없이 바로 전송됩니다.

### 세션이 유휴(idle) 상태가 되면 알림 받기 (w34 추가)

`notify_when_idle` 옵션을 사용하면, 다른 세션이 다음번에 유휴 상태가 될 때 한 번 알림을 받을 수 있습니다.

---

## 메시지 받기

메시지가 도착한 세션에는 **`Message from`** 행이 표시됩니다.  
`Ctrl+O`를 눌러 내용을 펼칠 수 있습니다.

---

## 세션 이름 관리

- 같은 기기에서 이름이 겹치면 Claude Code가 자동으로 `이름-단어-단어` 형태 변형을 생성합니다
- 변경된 이름은 알림으로 안내됩니다

---

## 지원 환경

| 환경 | 지원 |
|------|------|
| macOS | ✅ |
| Linux | ✅ |
| Windows (네이티브) | ✅ (w34부터) |
| Claude Code v2.1.224 이상 | 필수 |

---

## 제한 사항

- **전달되는 것**: Claude가 작성한 텍스트 메시지
- **전달되지 않는 것**: 대화 이력, 파일 내용, 컨텍스트
- 메시지는 텍스트만 가능하며, 세션 기록은 공유되지 않습니다

---

## 정리

- **`/list-agents`** — 현재 연결 가능한 세션 목록 확인
- 자연어로 "다른 세션에 알려줘" 하면 Claude가 처리
- `@세션이름` 멘션으로 직접 전송 (w33 이상)
- 대화 이력은 공유 안 됨, 텍스트 메시지만 전달
- macOS/Linux/Windows 모두 지원

> 이 글은 Claude Code 공식 문서 (cross-session-messaging, whats-new/2026-w32, w33, w34)를 기반으로 작성되었습니다 [공].
