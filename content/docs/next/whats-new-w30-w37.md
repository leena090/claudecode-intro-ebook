---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "iOS 시뮬레이터, 자체 호스팅 환경, Auto mode 기본값 전환, /design 스킬, Fable 5.1, plugin eval 등 2026년 7~9월 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "AutoMode", "Projects", "Fable51", "자체호스팅"]
category: "next"
order: 18
lastUpdated: "2026-09-23"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.
<br />★ 오늘 날짜 기준(2026-09-23) 최신 8주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | Opus 5 기본 모델, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | 8/3~8/7 | 세션 간 메시지, **자체 호스팅 환경**, Auto mode 기본값 전환 |
| **W33** | 8/10~8/14 | Desktop 자동 재개, fork 모드 기본, GitLab 지원 확대 |
| **W34** | 8/17~8/21 | `/design` 스킬, Concise 출력 스타일, 모바일 세션 시작 |
| **W35** | 8/24~8/28 | 터미널 세션 재개, 피드백 리포트, 제한 모드 시작 |
| **W36** | 8/31~9/4 | **Fable 5.1** 전환, 백그라운드 컴퓨터 사용, `/diff` 패널 |
| **W37** | 9/7~9/11 | **plugin eval**, Desktop 창 분리 |

> ⚠️ W31(7월 27~31일)은 공식 What's New에 게시되지 않았습니다.

---

## W30 · 7월 20~24일 — iOS 시뮬레이터 & Opus 5

### 📱 iOS 시뮬레이터 패널 (Desktop)

Claude Code Desktop 앱에서 iOS 앱 시뮬레이터를 **직접 패널로 열 수** 있게 됐어요.

> 🍱 **비유로 설명하면**: 이전엔 iOS 앱 테스트를 위해 Xcode 시뮬레이터를 따로 열어야 했다면, 이제는 **Claude Code 화면 안에서 바로 iPhone 화면을 보면서** 코딩할 수 있어요.

### 🤖 Opus 5 — 새 기본 Opus 모델

W30부터 기본 Opus 모델이 **Opus 5**로 전환됐어요. 이후 9월에 Opus 5.5가 추가됐어요. (→ [9월 모델 업데이트 참고](./opus55-fable51-september2026.md))

### 🛡️ Claude Security 플러그인 출시

코드베이스의 보안 취약점을 스캔하고 **패치까지 자동 제안**하는 플러그인이에요.

```bash
# 플러그인 설치
/plugin install claude-security

# 코드베이스 스캔
/security scan
```

> 🍱 **비유로 설명하면**: 집에 CCTV 설치하는 것처럼, 코드에 **보안 감시 카메라**를 달아두는 거예요. 취약한 부분이 발견되면 어떻게 고칠지까지 제안해줘요.

---

## W32 · 8월 3~7일 — 자체 호스팅 & Auto mode 기본값 전환 ⭐

### 🏠 자체 호스팅 환경 (Self-hosted Environments) — 퍼블릭 베타

**여러분 회사 서버에서 Claude Code 클라우드 세션을 실행**할 수 있게 됐어요.

| 이전 | 이후 |
|---|---|
| Anthropic 클라우드 서버에서만 실행 | 내 회사 서버(AWS, GCP 등)에서도 실행 가능 |
| 인터넷 연결 필수 | 내부 네트워크 환경에서 작동 |

> 🍱 **비유로 설명하면**: 배달 앱처럼 외부 서버에서 음식을 가져오는 방식이 아니라, **회사 구내식당을 직접 운영**하는 방식으로 전환할 수 있어요. 보안이 중요한 기업에서 특히 유용해요.

<div class="note-star">
★ 자체 호스팅 환경 설정: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

### 💬 세션 간 메시지 (Cross-session Messaging)

Claude Code 세션들이 **서로 메시지를 주고받을 수** 있게 됐어요.

```bash
# 다른 세션에 메시지 보내기 (공식 발표 기준)
# ListAgents 도구로 다른 세션 확인 후 SendMessage 사용
```

> 🍱 **비유로 설명하면**: 여러 직원(세션)들이 각자 일하면서 **서로 채팅으로 소통**할 수 있게 됐어요. 한 세션이 작업 결과를 다른 세션에 넘겨줄 수 있어요.

### 🔓 Auto mode — 이제 기본 권한 모드로

**Auto mode(자동 모드)**가 Pro, Max, Team 플랜에서 기본 권한 모드로 전환됐어요.

| 항목 | 내용 |
|---|---|
| **이전 기본값** | 매번 허가 요청 (Ask 모드) |
| **새 기본값** | Auto mode (자동으로 안전한 작업 판단) |
| **안전 장치** | 위험한 명령은 여전히 확인 요청 |

<div class="note-star">
★ Auto mode는 안전하다고 판단되는 작업을 자동으로 수행하고, 위험할 수 있는 작업(파일 삭제, 외부 API 호출 등)은 여전히 여러분의 승인을 기다립니다.
</div>

---

## W33 · 8월 10~14일 — Desktop 자동 재개 & GitLab

### ⏩ Desktop — 사용 한도 초기화 후 자동 재개

사용 한도(usage limit)가 초기화되면 Claude Code Desktop이 **자동으로 작업을 재개**해요.

> 🍱 **비유로 설명하면**: 밥 먹고 쉬던 직원이 점심시간 끝나면 **혼자 알아서 자리로 돌아와 일 시작**하는 것처럼요.

### 🔀 Fork 모드 기본 활성화

새 세션을 시작할 때 **fork 모드가 자동으로 켜져요**. 이전 세션의 컨텍스트를 이어받으면서도 독립적으로 작업할 수 있어요.

### 🦊 GitLab 지원 확대

GitHub에만 있던 기능들이 이제 GitLab에서도 사용 가능해졌어요.
- GitLab 머지 리퀘스트(Merge Requests) 지원
- GitLab 마켓플레이스 통합

> 🍱 **비유로 설명하면**: 삼성 폰에서 되던 기능이 LG 폰에서도 똑같이 작동하게 된 것처럼, GitLab 사용자도 동등하게 Claude Code를 쓸 수 있게 됐어요.

---

## W34 · 8월 17~21일 — `/design` 스킬 & Concise 스타일

### 🎨 `/design` 스킬 — 편집 가능한 UI 아트보드

```bash
/design
```

**UI 목업과 아트보드를 바로 Claude Code 안에서 만들 수** 있게 됐어요.

> 🍱 **비유로 설명하면**: 피그마 같은 디자인 도구를 Claude Code 안에서 쓰는 것처럼, **설계도 그리기와 코딩을 한 화면에서** 할 수 있어요.

### 📝 Concise 출력 스타일

Claude 응답을 더 간결하게 받고 싶을 때 사용하는 **Concise(간결) 스타일**이 추가됐어요.

```bash
/style concise    # 간결 모드
/style default    # 기본 모드로 복귀
```

### 📱 모바일에서 새 세션 시작

이제 **스마트폰으로 내 컴퓨터에서 새 Claude Code 세션을 바로 시작**할 수 있어요. (Remote Control 기능 확장)

---

## W35 · 8월 24~28일 — 터미널 세션 재개 & 제한 모드

### 🔄 Desktop에서 터미널 세션 재개

Desktop 앱에서 **기존 터미널 CLI 세션을 직접 재개**할 수 있어요.

```bash
# Desktop에서 이전 터미널 세션을 이어받아 계속 작업
```

### 📋 Claude가 작성하는 피드백 리포트

Claude가 작업 후 **자동으로 피드백 리포트를 초안 작성**해줘요. 팀장이나 동료에게 공유하기 좋아요.

### 🔒 제한 모드(Restricted Mode)로 세션 시작

처음부터 **제한된 권한으로 세션을 시작**하는 옵션이 추가됐어요.

```bash
claude --restricted    # 제한 모드로 시작 (공식 발표 기준)
```

> 🍱 **비유로 설명하면**: 아르바이트생에게 일을 맡길 때 처음엔 **제한된 권한만 주고** 차차 늘려가는 것처럼, Claude도 안전하게 시작할 수 있어요.

---

## W36 · 8월 31일~9월 4일 — Fable 5.1 & `/diff` 패널 ⭐

### 🚀 Claude Fable 5.1으로 전환

Claude Code에서 **Fable 5.1**을 사용할 수 있게 됐어요. Fable 5 대비 코딩·지식 작업 성능 향상.

```bash
/model claude-fable-5-1    # Fable 5.1로 전환
```

(→ [Fable 5.1 + Opus 5.5 상세 내용](./opus55-fable51-september2026.md) 참고)

### 💻 백그라운드 컴퓨터 사용 (Desktop)

Computer use(컴퓨터 조작)가 이제 **백그라운드에서 실행**돼요. 다른 작업을 하면서 Claude가 동시에 앱을 조작할 수 있어요.

> 🍱 **비유로 설명하면**: 보조 직원이 다른 일을 처리하는 동안 **백그라운드에서 컴퓨터를 대신 조작**하는 것처럼요.

### 📊 `/diff` 패널 — 실시간 변경 사항 확인

```bash
/diff    # 현재 Claude가 편집 중인 내용을 실시간으로 확인
```

Claude가 코드를 수정하는 동안 **변경 내용을 라이브로** 볼 수 있어요.

---

## W37 · 9월 7~11일 — Plugin Eval & 창 분리

### 🧪 `claude plugin eval` — 플러그인 테스트

직접 만든 플러그인이 제대로 작동하는지 **자동화 테스트**를 실행할 수 있어요.

```bash
claude plugin eval    # 플러그인 eval 실행
```

> 🍱 **비유로 설명하면**: 새 레시피를 손님에게 내기 전에 **직접 맛보는 테스트 과정**처럼, 플러그인을 배포하기 전에 검증할 수 있어요.

### 🪟 Desktop 창 분리 (Pop-out Panes)

Desktop 앱의 패널을 **독립된 별도 창으로 분리**해서 사용할 수 있어요. 멀티모니터 활용에 특히 유용해요.

---

## 어떤 기능이 가장 중요한가요?

| 우선순위 | 기능 | 이유 |
|---|---|---|
| ⭐⭐⭐ | **Auto mode 기본값 전환** | 별도 설정 없이 자동화 수준 향상 |
| ⭐⭐⭐ | **Fable 5.1** | 코딩 성능 최상위 모델 출시 |
| ⭐⭐⭐ | **자체 호스팅 환경** | 보안 중요한 기업에 게임 체인저 |
| ⭐⭐ | **Plugin eval** | 플러그인 개발자에게 필수 |
| ⭐⭐ | **세션 간 메시지** | 멀티 에이전트 협업 강화 |
| ⭐ | **`/design` 스킬** | UI 개발자에게 새 도구 |

---

<div class="note-star">
★ 더 자세한 내용은 공식 What's New 페이지를 참고하세요:
<br />W30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
<br />W32: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a>
<br />W33: <a href="https://code.claude.com/docs/en/whats-new/2026-w33">code.claude.com/docs/en/whats-new/2026-w33</a>
<br />W34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">code.claude.com/docs/en/whats-new/2026-w34</a>
<br />W35: <a href="https://code.claude.com/docs/en/whats-new/2026-w35">code.claude.com/docs/en/whats-new/2026-w35</a>
<br />W36: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">code.claude.com/docs/en/whats-new/2026-w36</a>
<br />W37: <a href="https://code.claude.com/docs/en/whats-new/2026-w37">code.claude.com/docs/en/whats-new/2026-w37</a>
</div>
