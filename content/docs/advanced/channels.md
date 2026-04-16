---
title: "채널 — Telegram·Discord로 AI에게 지시하기"
description: "밖에서 메시지를 보내면 실행 중인 Claude Code가 바로 처리합니다"
tags: ["채널", "Telegram", "Discord", "iMessage", "원격", "푸시"]
category: "advanced"
order: 16
lastUpdated: "2026-04-16"
---

## 채널이 뭔가요?

**채널**은 Telegram, Discord, iMessage 같은 메신저에서 보낸 메시지를 실행 중인 Claude Code 세션으로 밀어 넣는 기능이에요.

> 🏢 **비유로 설명하면**:
> 세션은 **사무실**, 채널은 **우체통**이에요. 밖에서 편지를 넣으면 사무실 안에 있는 AI가 바로 읽고 처리합니다. 단, 사무실이 열려 있어야(= 세션이 실행 중이어야) 편지를 받을 수 있어요.

<div class="note-star">
★ <strong>연구 프리뷰(Research Preview)</strong> 상태입니다. 공식 출시 전 실험 단계이므로 기능이 바뀌거나 불안정할 수 있어요.
</div>

---

## 지원 플랫폼 3가지

| 플랫폼 | 특징 | 필요한 것 |
|--------|------|----------|
| **Telegram** | 봇을 만들어서 연결 | Telegram 계정 + BotFather |
| **Discord** | 서버 봇으로 연결 | Discord 계정 + 개발자 포털 |
| **iMessage** | Mac에서 문자로 지시 | Mac 전용, Apple ID |

---

## Telegram 설정 (가장 인기)

> 🤖 **비유**: 텔레그램 봇은 AI와 연결된 **전용 전화번호**예요. 그 번호로 문자를 보내면 AI가 받아서 처리합니다.

### 단계 1: BotFather에서 봇 만들기

Telegram에서 `@BotFather`를 검색해서 대화를 시작하세요.

```
/newbot
```

BotFather가 봇 이름과 아이디를 물어보고, 완료되면 **토큰(Token)**을 줍니다. 이 토큰은 비밀번호 같은 거라 절대 공개하지 마세요.

### 단계 2: 플러그인 설치

Claude Code 세션에서 실행:

```
/plugin install telegram@claude-plugins-official
```

### 단계 3: 봇 토큰 설정

```
/telegram:configure 여기에_토큰_붙여넣기
```

### 단계 4: 채널 모드로 시작

```bash
claude --channels plugin:telegram@claude-plugins-official
```

### 단계 5: 봇과 페어링

Telegram에서 내가 만든 봇에 메시지를 보내면 **페어링 코드**가 옵니다. Claude Code에서:

```
/telegram:access pair 페어링코드
```

### 단계 6: 보안 잠금

나만 이 봇을 쓸 수 있게 잠급니다:

```
/telegram:access policy allowlist
```

이제 Telegram에서 봇에게 메시지를 보내면 Claude Code가 바로 작업을 시작합니다.

---

## Discord 설정

> 🎮 **비유**: 디스코드 봇은 서버 안에 상주하는 **자동 응답 스태프**예요. DM을 보내면 스태프가 AI에게 전달해요.

### 단계 1: Discord 개발자 포털에서 앱 만들기

[discord.com/developers](https://discord.com/developers/applications)에 접속 → **New Application** 클릭 → 이름 입력.

### 단계 2: 봇 토큰 발급

**Bot** 탭 → **Reset Token** → 토큰 복사.

**Message Content Intent**를 활성화해야 메시지 내용을 읽을 수 있어요.

### 단계 3: 봇을 서버에 초대

**OAuth2 → URL Generator**에서 `bot` 스코프와 다음 6가지 권한을 선택해서 초대 링크를 만드세요:
- Read Messages
- Send Messages
- Read Message History
- Add Reactions
- Embed Links
- Attach Files

### 단계 4~7: Claude Code에서 설정

```
/plugin install discord@claude-plugins-official
/discord:configure 여기에_토큰_붙여넣기
```

```bash
claude --channels plugin:discord@claude-plugins-official
```

봇에게 DM → 페어링 코드 확인 → Claude Code에서:

```
/discord:access pair 페어링코드
```

---

## iMessage 설정 (Mac 전용)

> 🍎 **비유**: iMessage는 **내 전화로 AI에게 문자 보내기**예요. 자기 자신에게 메시지를 보내면 AI가 받습니다.

<div class="note-circle">
○ <strong>Mac 전용</strong>입니다. Windows와 iPhone·iPad에서는 사용할 수 없어요.
</div>

### 필요한 권한 설정

**시스템 설정 → 개인정보 보호 및 보안 → 전체 디스크 접근**에서 Claude Code를 허용해야 합니다.

```
/plugin install imessage@claude-plugins-official
```

```bash
claude --channels plugin:imessage@claude-plugins-official
```

자기 자신에게 iMessage를 보내면 바로 작동합니다.

다른 사람도 허용하려면:

```
/imessage:access allow +821012345678
```

---

## 보안 — 누가 메시지를 보낼 수 있나요?

채널은 **허용 목록(allowlist)** 방식으로 동작해요. 페어링된 사람만 메시지를 보낼 수 있고, 등록되지 않은 메시지는 자동으로 무시됩니다.

> 🛡 **핵심 원칙**: "아는 사람만 통과" — 페어링 코드로 본인 확인을 한 번 거친 사람만 AI에게 지시를 보낼 수 있어요.

---

## 채널 vs 다른 기능 비교

| 기능 | 하는 일 | 언제 쓰면 좋을까 |
|------|---------|----------------|
| **채널** | 외부 메시지 → 세션 푸시 | 밖에서 급하게 지시할 때 |
| **원격 제어** | 모바일에서 세션 조종 | 외출 중 작업 확인할 때 |
| **웹 세션** | 브라우저에서 독립 작업 | 로컬 없이 작업할 때 |
| **Slack 연동** | @멘션 → 웹 세션 생성 | 팀 채팅에서 바로 시킬 때 |

---

## 주의사항

<div class="note-circle">
○ <strong>Bun이 필요합니다</strong>. 채널 플러그인은 Bun 스크립트로 실행되므로, 미리 설치되어 있어야 해요. (<code>brew install bun</code> 또는 <a href="https://bun.sh">bun.sh</a>)
</div>

<div class="note-circle">
○ <strong>세션이 켜져 있어야 합니다</strong>. Claude Code가 실행 중이 아니면 메시지를 받을 수 없어요.
</div>

<div class="note-circle">
○ <strong>Team/Enterprise 환경</strong>에서는 관리자가 채널 기능을 별도로 활성화해야 합니다.
</div>

---

## 관련 가이드

- 📖 [원격 제어 & 크로스 디바이스](/docs/advanced/remote-control) — 모바일에서 세션 모니터링
- 📖 [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) — 플러그인 설치와 관리
- 📖 [Slack 연동](/docs/advanced/slack-integration) — 팀 채팅에서 @Claude 사용
