---
title: "[공] 세션 간 메시지 — 여러 Claude Code 창이 서로 대화한다"
description: "같은 컴퓨터, 다른 기기, 웹까지 — 내 Claude Code 세션들이 서로 메시지를 주고받는 방법 (2026-08 W32 신기능)"
tags: ["자동생성", "고급", "세션간메시지", "멀티에이전트", "CrossSession", "W32"]
category: "advanced"
order: 34
lastUpdated: "2026-09-15"
---

<div class="note-star">
★ <strong>[공]</strong> 이 기능은 2026년 8월 3~7일 주(W32)에 추가됐어요.
<br />★ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
</div>

## 세션 간 메시지가 뭔가요?

Claude Code를 여러 창(세션)에서 동시에 쓰다 보면 **한 창에서 하는 일을 다른 창에 알려줘야** 할 때가 있어요. 이전까지는 직접 복사해서 붙여넣는 방법밖에 없었는데, 이제 **창끼리 메시지로 직접 소통**할 수 있게 됐어요.

> 🍱 **비유로 설명하면**: 사무실에서 A 책상에 앉은 직원이 B 책상에 앉은 직원한테 "내가 처리한 거 확인해봐"라고 **직접 카톡 보내는 것**처럼요. 이전에는 A가 메모 써서 B 책상에 올려두는 방식이었다면, 이제는 실시간 채팅이에요.

---

## 어떤 세션에 메시지를 보낼 수 있나요?

| 연결 대상 | 방법 |
|---|---|
| 같은 컴퓨터의 다른 터미널 세션 | 자동 감지 |
| 다른 기기 (원격 컨트롤) | Remote Control 연결 필요 |
| 웹(claude.ai/code)의 세션 | 클라우드 세션 |

---

## 기본 사용법

Claude가 세션 목록을 확인하고 메시지를 보낼 수 있도록, 세션 안에서 자연어로 요청하면 돼요.

### 예시 1: 다른 세션에 결과 전달

```
세션 A에서:
"내가 users.py 리팩토링 끝났어. 세션 B에 완료됐다고 알려줘"

→ 클로드가 자동으로 세션 B에 메시지 전송
```

### 예시 2: 다른 세션의 상태 물어보기

```
세션 A에서:
"지금 내 다른 세션들이 뭘 하고 있어?"

→ 클로드가 연결된 세션 목록과 현재 작업 상태 확인
```

---

## 멀티 에이전트 활용 예시

세션 간 메시지는 **여러 에이전트가 협력하는 워크플로우**를 만들 때 특히 유용해요.

### 예시: 병렬 코드 리뷰

```
메인 세션: "리뷰어 세션에 PR #42 코드 리뷰 요청해줘"

리뷰어 세션: (자동으로 PR 분석 시작)

리뷰어 세션 → 메인 세션: "리뷰 완료. 3가지 개선점 발견"

메인 세션: 결과 받아서 수정 진행
```

> 🍱 **비유로 설명하면**: 혼자 짜던 코드를 이제 **팀원(다른 세션)한테 검토 요청하고 결과를 받아볼 수** 있는 시스템이에요.

---

## 설정 방법

별도 설정 없이 Claude Code가 자동으로 같은 기기의 세션을 감지해요.

### 다른 기기 세션 연결 (Remote Control)

```bash
# 1. 메인 세션에서 Remote Control 활성화
claude --remote-control

# 2. 모바일 또는 다른 기기에서 claude.ai/code 접속
# 3. "Connect to local session" 선택
```

---

## 주의사항

<div class="note-star">
★ <strong>보안 주의</strong>: 세션 간 메시지는 같은 계정의 세션끼리만 가능해요. 다른 사람의 세션에는 접근할 수 없어요.
<br />★ 이 기능은 <strong>W32(2026-08-03)</strong> 이후 버전에서 사용 가능합니다. `claude --version`으로 확인하세요.
</div>

---

## 어떤 상황에 유용한가요?

| 상황 | 활용법 |
|---|---|
| 백엔드·프론트엔드 동시 개발 | 각 세션이 진행 상황 공유 |
| 테스트 + 코드 수정 병렬 진행 | 테스트 세션이 결과 리포트 전달 |
| 긴 작업 모니터링 | 완료 알림 받기 |
| 코드 리뷰 분업 | 리뷰어 세션에 요청 |

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ 관련: <a href="./agent-teams">에이전트 팀 구성</a>, <a href="./remote-control">Remote Control</a>
</div>
