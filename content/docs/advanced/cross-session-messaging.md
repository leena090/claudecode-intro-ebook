---
title: "[공] 세션 간 메시지 — Claude끼리 서로 연락하기"
description: "여러 Claude Code 세션이 서로 메시지를 주고받는 Cross-session messaging 기능 (v2.1.224+)"
tags: ["자동생성", "세션", "cross-session-messaging", "협업", "멀티세션", "advanced"]
category: "advanced"
order: 27
lastUpdated: "2026-08-16"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — Claude Code v2.1.224 (2026-08-07, Week 32)<br />
👉 <a href="https://code.claude.com/docs/en/cross-session-messaging" target="_blank">공식 문서: cross-session-messaging</a>
</div>

## 세션 간 메시지란?

여러 터미널에서 동시에 Claude Code를 실행할 때, **서로 다른 세션의 Claude가 메시지를 주고받을 수 있는 기능**이에요.

한 세션에서 발견한 정보, 완료된 작업, 중요한 변경 사항을 — 내가 직접 설명하지 않아도 — Claude가 알아서 다른 세션에 전달해줘요.

> 🍱 **비유**: 큰 건물 공사에서 전기팀·배관팀·인테리어팀이 각자 작업하면서 무전기로 소통하는 것과 같아요. "전기 배선 완료!" 하면 다음 팀이 바로 알아차리고 이어서 작업하죠.

---

## 언제 유용한가요?

| 상황 | 예시 |
|---|---|
| 병렬 작업 중 변경 사항 공유 | 한 세션에서 DB 스키마 바꿨을 때 다른 세션에 알리기 |
| 긴 작업의 완료 알림 | 마이그레이션 완료 → 메인 세션에 보고 |
| 여러 워크트리 조율 | 각 기능 브랜치에서 작업하면서 서로 상태 확인 |
| 다른 기기 세션 연결 | 데스크톱 → 노트북 세션에 메시지 보내기 |

---

## 시작하기

### 1단계: 연결된 세션 확인

```bash
# 내가 메시지 보낼 수 있는 세션 목록 보기
/list-agents
```

**출력 예시:**
```
Local sessions (this machine):
  api-worker          /home/user/myapp/api
  frontend-dev        /home/user/myapp/frontend

Cloud sessions (Remote Control 연결 시):
  laptop-graceful-unicorn  [cloud]
```

---

### 2단계: 메시지 보내기

직접 명령하지 않아도 Claude가 필요하다고 판단하면 알아서 보내요. 직접 요청할 수도 있어요:

```bash
# 일반 지시
> Tell the session working on the payments API that users.name is now users.display_name

# 완료 알리기
> Let the frontend session know that the auth API is ready to use

# @로 특정 세션 지정 (v2.1.232+)
> Let @api-worker know the schema migration finished
```

<div class="note-circle">
○ @ 입력 후 세션 이름 첫 글자 타이핑 → 자동완성 목록 뜸<br />
○ 같은 이름의 세션이 여러 개 있으면 Claude가 어느 세션인지 물어봐요
</div>

---

### 3단계: 메시지 받기

받는 세션에서는 메시지가 대화창에 발신자 이름과 함께 표시돼요:

```
Message from api-worker:
Schema migration finished: the new column is tenant_id,
and rebasing on main is safe now.
```

`Ctrl+O`를 눌러 메시지 전체를 펼쳐볼 수 있어요.

---

## 주의사항

### 메시지로 전달되는 것 vs 안 되는 것

| 항목 | 가능 여부 |
|---|---|
| 텍스트 메시지 | ✅ 가능 |
| 대화 내역 (히스토리) | ❌ 불가 |
| 파일 내용 | ❌ 불가 |
| 명령어 실행 (`/compact` 등) | ❌ 텍스트로만 전달 |
| 다른 세션을 대신해 권한 승인 | ❌ 불가 |

### 보안 규칙

- 다른 세션에서 온 메시지로는 **권한 설정 변경 불가**
- 다른 세션에서 온 메시지로는 **권한 허용 불가** (나의 직접 승인 필요)
- 메시지에 `/명령어`가 있어도 실행되지 않고 텍스트로만 전달됨

---

## 수신 설정 (crossSessionInbound)

메시지를 받는 방식을 설정할 수 있어요:

```json
// settings.json
{
  "crossSessionInbound": "accept"  // 기본: 자동 수락
}
```

| 값 | 동작 |
|---|---|
| `accept` | 모든 메시지 자동 수신 |
| `hold` | 메시지를 보류하고 내가 승인할 때만 전달 |
| `refuse` | 모든 메시지 차단 |

`/config` 메뉴의 **"Messages from your other sessions"** 항목에서도 설정할 수 있어요 (v2.1.232+).

---

## 다른 기기로 메시지 보내기

| 대상 | 방법 |
|---|---|
| 같은 컴퓨터의 세션 | 직접 연결 (Anthropic 서버 미경유) |
| 다른 컴퓨터의 세션 | Remote Control 연결 필요 → Anthropic 서버 경유 |
| 클라우드 세션 | Anthropic 서버 경유 |

```bash
# 다른 기기 세션 메시지 보내기
# → 이 세션에 Remote Control이 연결돼 있어야 함
> Tell the desktop session to pause and wait for the API changes
```

다른 기기로 보낼 때 승인을 요구하려면:

```json
{
  "isolatePeerMachines": true
}
```

---

## 세션 이름 지정

```bash
# 시작 시 이름 지정
claude --name api-worker

# 실행 중 이름 변경
/rename api-worker
```

이름을 지정하면 다른 세션이 @api-worker로 정확하게 찾아올 수 있어요.

---

## 지원 환경

| 항목 | 지원 여부 |
|---|---|
| 최소 버전 | v2.1.224 이상 |
| macOS | ✅ |
| Linux (WSL 포함) | ✅ |
| Windows (네이티브) | ❌ 미지원 |
| Amazon Bedrock | ❌ 미지원 |
| Google Cloud Agent Platform | ❌ 미지원 |

<div class="note-circle">
○ <code>/list-agents</code>가 인식되지 않으면 버전을 먼저 확인하세요 (<code>claude --version</code>)<br />
○ <code>CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC</code> 등의 환경변수가 설정되면 기능이 비활성화될 수 있어요
</div>

---

## 💡 쉽게 이해하기

> 세션 간 메시지는 **사무실 내부 메신저**와 같아요.
>
> - 같은 건물 안 (같은 컴퓨터): 바로 전달 (인터넷 불필요)
> - 다른 건물 동료 (다른 기기): 회사 서버(Remote Control)를 통해 전달
> - 전달되는 건 **문자 메시지뿐** — 비밀 서류(대화 내역, 파일)는 공유되지 않아요
> - 메시지를 받아도 **뭔가를 바꾸거나 승인하는 권한**은 없어요

---

## 관련 자료

- 📄 [Auto Mode 권한 설정](/docs/advanced/permission-modes)
- 📄 [Agent View — 여러 세션 한 화면에서 관리](/docs/advanced/agents-parallel)
- 🔗 [공식 문서: Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging)
