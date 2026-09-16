---
title: "[공] 주간 업데이트 W30~W37 — 2026년 7~9월 핵심 기능 정리"
description: "2026년 7월 20일부터 9월 11일까지 8주간 Claude Code에 추가된 주요 기능 한눈에 보기"
tags: ["자동생성", "whats-new", "주간업데이트", "w30", "w37", "auto-mode", "자체호스팅", "플러그인평가", "iOS시뮬레이터"]
category: "next"
order: 18
lastUpdated: "2026-09-16"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — code.claude.com/docs/en/whats-new/ 시리즈<br />
★ W30(Jul 20) → W37(Sep 11) 까지 8주간의 업데이트를 정리했어요
</div>

---

## 한눈에 보는 8주 요약

| 주차 | 기간 | 핵심 변화 |
|---|---|---|
| **W30** | Jul 20–24 | Opus 5 기본 모델 전환, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | Aug 3–7 | 세션 간 메시지 전송, 자체 호스팅 환경, **auto 모드 기본값으로 변경** |
| **W33** | Aug 10–14 | Desktop 자동 재개, fork 모드 기본값, GitLab 지원 |
| **W34** | Aug 17–21 | /design 스킬, Concise 출력 스타일, 모바일 세션 시작 |
| **W35** | Aug 24–28 | 터미널 세션 재개, 피드백 리포트, 제한 모드 |
| **W36** | Aug 31–Sep 4 | **Fable 5.1 전환**, 백그라운드 computer use, /diff 패널 |
| **W37** | Sep 7–11 | 플러그인 평가(plugin eval), Desktop 팝아웃 |

> ⚠️ W31 (Jul 27–31) 은 What's New 페이지에 게시되지 않았어요.

---

## W30 · 7월 20–24일

### 🤖 Opus 5가 기본 Opus 모델로

Claude Code에서 Opus를 쓰면 이제 자동으로 **Opus 5**가 사용돼요. 명시적으로 구버전을 쓰려면 모델 ID를 지정해야 해요.

### 📱 iOS 시뮬레이터 패널 (Desktop)

Claude Code Desktop에서 iOS 앱 시뮬레이터를 패널로 열 수 있어요. Claude가 iOS 앱을 빌드·실행·검사할 때 같은 화면에서 결과를 바로 확인할 수 있어요.

```bash
# 공식 문서
# https://code.claude.com/docs/en/desktop-ios-simulator
```

### 🔒 Claude Security 플러그인

코드베이스 전체를 스캔해서 취약점을 찾고, 패치를 제안해주는 플러그인이 출시됐어요.

```bash
# 플러그인 설치 (추정 - claude plugin install 방식)
# 상세: https://code.claude.com/docs/en/claude-security
```

---

## W32 · 8월 3–7일 ⭐ 중요

### 💬 세션 간 메시지 전송 (Cross-session Messaging)

다른 Claude Code 세션에 메시지를 보낼 수 있어요. 같은 컴퓨터의 다른 세션뿐 아니라 클라우드 세션과도 통신 가능해요.

🍱 **비유로 설명하면**: Claude 세션들이 사내 메신저처럼 서로 연락할 수 있게 된 거예요. 한 세션이 작업을 끝내면 다른 세션에게 "나 끝났어, 이어받아"라고 전달할 수 있어요.

```
# 공식 문서: https://code.claude.com/docs/en/cross-session-messaging
```

### 🏗️ 자체 호스팅 환경 (Self-hosted Environments)

클라우드 세션을 **내 서버(자체 인프라)에서 실행**할 수 있게 됐어요. 기업 보안 요건이 있거나, 코드를 외부 서버로 보내고 싶지 않은 분들을 위한 기능이에요.

🍱 **비유로 설명하면**: 이전에는 Claude Code 클라우드 세션이 무조건 Anthropic 서버에서 돌아갔어요. 이제는 "우리 회사 서버에서 돌려줘"가 가능해요.

### 🔑 **Auto 모드가 기본 권한 모드로 변경**

이전에는 기본 권한 모드가 "confirm" (매번 물어보기)였어요. **이제 기본값이 auto 모드로 바뀌었어요.**

| 이전 기본값 | 새 기본값 |
|---|---|
| Confirm 모드 (매번 승인 요청) | **Auto 모드** (안전 분류기가 자동 판단) |

> ⚠️ **영향**: 새로 설치한 경우 auto 모드로 시작돼요. 이전처럼 매번 승인을 받으려면 Shift+Tab으로 모드를 변경하세요.

---

## W33 · 8월 10–14일

### 🔄 Desktop 사용 한도 초과 후 자동 재개

사용량 한도(usage limit)에 걸려 세션이 멈췄을 때, 한도가 리셋되면 **자동으로 재개**돼요. 수동으로 다시 시작할 필요가 없어요.

### 🌿 Fork 모드 기본값으로 변경

세션을 분기(fork)할 때 fork 모드가 자동으로 켜져요. 원본 세션에 영향 없이 실험적 작업을 분리해서 할 수 있어요.

### 🦊 GitLab 지원 추가

GitHub 외에 **GitLab**에서도 Merge Request 리뷰와 플러그인 마켓플레이스를 사용할 수 있어요.

---

## W34 · 8월 17–21일

### 🎨 /design 스킬 — UI 목업 초안 작성

```bash
/design
```

편집 가능한 UI 아트보드 초안을 Claude가 그려줘요. 디자인 과정에서 Claude와 함께 UI를 잡아가는 실험적 기능이에요.

### ✂️ Concise 출력 스타일

응답을 더 간결하게 받고 싶을 때 Concise 스타일을 설정할 수 있어요.

```bash
# 공식 문서: https://code.claude.com/docs/en/output-styles
```

### 📱 모바일에서 세션 시작

폰에서 세션을 시작하고 그 세션이 **내 컴퓨터에서 실행**돼요. 출근길에 작업을 시작하고 책상에 앉으면 바로 이어갈 수 있어요.

---

## W35 · 8월 24–28일

### ♻️ 터미널 세션 재개 (Desktop)

Claude Code Desktop에서 터미널 세션을 재개할 수 있어요. 끊겼던 세션을 그대로 이어서 작업할 수 있어요.

### 📝 Claude가 피드백 리포트 초안 작성

Claude가 작업 결과에 대한 피드백 보고서를 먼저 작성해줘요. 검토 후 수정해서 제출하면 돼요.

### 🔒 제한 모드 (Restricted Mode)로 시작

보안이 중요한 환경에서 제한 모드로 세션을 시작하는 옵션이 추가됐어요.

---

## W36 · 8월 31–9월 4일 ⭐ 중요

### 🔀 Claude Fable 5.1로 전환

Claude Code에서 Fable 5.1을 사용할 수 있어요. 기존 Fable 5에서 5.1로 전환하세요.

```bash
claude --model claude-fable-5-1
```

자세한 내용은 [Opus 5 & Fable 5.1 신모델 안내](/docs/next/opus5-fable51-2026)를 참고하세요.

### 🖥️ 백그라운드 Computer Use (Desktop)

Desktop에서 computer use(컴퓨터 사용 기능)가 **백그라운드에서 실행**돼요. 이전에는 포그라운드에서만 동작했어요. 다른 작업을 하면서 Claude가 앱을 조작하게 할 수 있어요.

### 📋 /diff 패널 — 실시간 편집 감시

```bash
/diff
```

Claude가 파일을 수정하는 과정을 **실시간으로 diff 패널에서 확인**할 수 있어요.

---

## W37 · 9월 7–11일

### 🧪 플러그인 평가 — claude plugin eval

플러그인을 평가(테스트)하는 공식 도구예요.

```bash
# 플러그인 평가 실행
claude plugin eval
```

평가 케이스를 작성하고, Claude가 채점하고, CI에서 점수로 통과/실패를 판단할 수 있어요.

🍱 **비유로 설명하면**: 플러그인을 위한 "수능 모의고사"예요. 내가 만든 플러그인이 예상대로 동작하는지 자동으로 채점해줘요.

```
# 공식 문서: https://code.claude.com/docs/en/plugin-evals
```

### 🪟 Desktop 패널 팝아웃

Claude Code Desktop 패널을 **별도 창으로 꺼낼 수 있어요**. 듀얼 모니터 환경에서 특히 유용해요.

---

## 📎 관련 가이드

- [Opus 5 & Fable 5.1 신모델 안내](/docs/next/opus5-fable51-2026)
- [오토 모드 세밀하게 조정하기](/docs/advanced/auto-mode-config)
- [권한 모드 완전 정리](/docs/advanced/permission-modes)
- [자체 호스팅 클라우드 환경](/docs/codeweb/self-hosted-environments)
- [공식 What's New 페이지](https://code.claude.com/docs/en/whats-new/index)
