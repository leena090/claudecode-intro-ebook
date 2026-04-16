---
title: "Slack 연동 — 팀 채팅에서 @Claude로 코딩 시키기"
description: "Slack에서 @Claude 하면 자동으로 Claude Code 세션이 만들어집니다"
tags: ["Slack", "팀", "협업", "자동화", "PR"]
category: "advanced"
order: 18
lastUpdated: "2026-04-16"
---

## Slack 연동이 뭔가요?

**Slack 연동**은 팀 채팅 앱인 Slack에서 `@Claude`를 멘션하면 자동으로 Claude Code 세션이 만들어지고, 작업이 끝나면 결과를 Slack에 다시 보고하는 기능이에요.

> 💼 **비유로 설명하면**:
> 팀 단톡방에서 "@비서님, 이 버그 처리해줘" 하면 비서가 "알겠습니다" 하고 조용히 처리한 다음 "완료했습니다. 여기 확인해보세요" 하고 결과를 가져다 주는 것이에요.

**흐름:**
```
Slack 채널에서 @Claude 멘션
       ↓
claude.ai/code에 웹 세션 자동 생성
       ↓
AI가 작업 수행 (코딩·버그 수정·테스트 등)
       ↓
완료 → Slack 스레드에 결과 보고
```

---

## 필요한 것

| 항목 | 설명 |
|------|------|
| **Claude 플랜** | Pro / Max / Team / Enterprise |
| **Claude Code 웹** | claude.ai/code 접근 가능 |
| **GitHub** | Claude Code 웹에 레포 연결 |
| **Slack** | Claude 앱 설치 + 개인 계정 연결 |

---

## 설정 4단계

### 단계 1: Slack에 Claude 앱 설치

Slack 관리자가 **Slack 앱 마켓플레이스**에서 Claude 앱을 찾아 설치합니다.

> 일반 사용자라면 Slack 관리자에게 설치를 요청하세요.

### 단계 2: 개인 계정 연결

Slack 앱의 **홈(Home) 탭** → **"Connect"** 버튼 → Claude 계정 로그인.

이 단계를 해야 내 Claude 플랜의 사용량으로 세션이 만들어집니다.

### 단계 3: GitHub 레포 연결

[claude.ai/code](https://claude.ai/code)에서 작업할 GitHub 레포지토리를 연결하세요.

<div class="note-circle">
○ GitHub 레포가 연결되어야 코드를 읽고 수정할 수 있어요. GitLab은 현재 지원하지 않습니다.
</div>

### 단계 4: 라우팅 모드 선택

Claude Slack 앱 설정에서 원하는 모드를 고르세요.

---

## 라우팅 모드 비교

| 모드 | 동작 방식 | 추천 대상 |
|------|----------|----------|
| **Code only** | 모든 @멘션 → Claude Code 세션 | 개발팀 전용 채널 |
| **Code + Chat** | AI가 판단해서 코딩/일반 대화 분배 | 다양한 용도로 쓰는 채널 |

> **예시**: "이 버그 수정해줘" → Code 세션 / "오늘 점심 뭐야?" → 일반 채팅 응답

---

## 사용 흐름

1. Slack 채널(공개 또는 비공개)에서 `@Claude 이 버그 수정해줘` 멘션
2. Claude가 코딩 요청이라고 판단
3. claude.ai/code에 웹 세션 자동 생성
4. Slack 스레드에 진행 상황 업데이트 (실시간)
5. 작업 완료 → **"View Session"** 또는 **"Create PR"** 버튼 표시

> 🧵 **스레드 컨텍스트 자동 수집**: 멘션한 스레드의 이전 대화 내용을 Claude가 자동으로 참고해요. 배경 설명을 따로 할 필요가 없습니다.

---

## 실전 예시

> **버그 수정 요청**
> ```
> @Claude 방금 배포했는데 로그인 버튼이 안 눌려.
> 콘솔 에러 첨부할게. 원인 찾아서 수정해줘.
> ```
> → Claude가 레포를 열고, 에러를 분석하고, 수정 코드를 작성해서 PR을 만들어줍니다.

> **테스트 코드 생성**
> ```
> @Claude auth/login.js 함수에 대한 단위 테스트 작성해줘.
> ```
> → 테스트 파일 생성 + PR 링크를 스레드에 달아줍니다.

---

## 제한사항

<div class="note-circle">
○ <strong>DM에서는 작동하지 않아요</strong>. 반드시 채널(공개/비공개)에서 멘션해야 합니다.
</div>

<div class="note-circle">
○ <strong>GitHub만 지원</strong>합니다. GitLab, Bitbucket 등은 현재 사용할 수 없어요.
</div>

<div class="note-circle">
○ <strong>세션당 PR 1개</strong>입니다. 하나의 멘션으로 여러 PR을 만들 수 없어요.
</div>

<div class="note-circle">
○ <strong>사용량은 내 Claude 플랜에서 차감</strong>됩니다. 팀 채널에서 많이 쓰면 내 월간 한도가 빨리 찰 수 있어요.
</div>

---

## 채널 vs Slack 연동 비교

| | **채널 (Telegram/Discord)** | **Slack 연동** |
|---|---|---|
| 대상 | 개인 사용 | 팀 사용 |
| 세션 | 실행 중인 세션에 연결 | 새 세션 자동 생성 |
| 보안 | 페어링 코드로 개인 인증 | Slack 계정으로 팀 인증 |
| GitHub | 불필요 | 필수 |

---

## 관련 가이드

- 📖 [채널 — Telegram·Discord](/docs/advanced/channels) — 개인 메신저로 AI에게 지시하기
- 📖 [원격 제어 & 크로스 디바이스](/docs/advanced/remote-control) — 모바일에서 세션 모니터링
- 📖 [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) — 추가 기능 설치
