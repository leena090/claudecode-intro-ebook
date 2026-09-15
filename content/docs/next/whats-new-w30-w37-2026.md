---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본 전환, Auto mode 기본값, 자체 호스팅 환경, 세션 간 메시지, /design 스킬, GitLab 지원, Fable 5.1 등 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "AutoMode", "GitLab", "Fable51", "PluginEval"]
category: "next"
order: 18
lastUpdated: "2026-09-15"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.
<br />★ 2026년 7월~9월 (8주치) 주요 업데이트를 한 곳에 모았습니다. W31은 해당 기간 What's New 미등재.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5 기본 Opus 전환**, iOS Simulator, 보안 플러그인 |
| **W32** | 8/3~8/7 | **세션 간 메시지**, 자체 호스팅, **Auto mode 기본값** |
| **W33** | 8/10~8/14 | Desktop 자동 재개, Fork mode 기본값, **GitLab 지원** |
| **W34** | 8/17~8/21 | **/design 스킬**, Concise 출력 스타일, 모바일에서 PC 세션 시작 |
| **W35** | 8/24~8/28 | Desktop 터미널 세션 재개, 피드백 리포트, 제한 모드 |
| **W36** | 8/31~9/4 | **Fable 5.1 전환**, computer use 백그라운드, **/diff 패널** |
| **W37** | 9/7~9/11 | **plugin eval**, Desktop 창 분리 |

---

## W30 · 7월 20~24일 — Opus 5 기본 모델 전환

### 🧠 Claude Opus 5가 기본 Opus 모델로

이제 `/fast` 또는 Opus 모델을 선택하면 자동으로 **Claude Opus 5**가 연결돼요.

> 🍱 **비유로 설명하면**: 이전에 "Opus 주세요"라고 하면 구형 폰이 왔다면, 이제는 자동으로 **최신 폰이 배달**되는 거예요.

### 🍎 iOS 시뮬레이터 창

Claude Code Desktop에 **iOS 앱 시뮬레이터 전용 패널**이 추가됐어요. Claude가 iOS 앱을 빌드·실행할 때 시뮬레이터가 바로 옆에 열려요.

### 🛡️ Claude Security 플러그인 출시

코드베이스 전체를 **취약점 스캔**하는 플러그인이 정식 출시됐어요.

```bash
# 설치 후
/security scan    # 코드베이스 전체 취약점 스캔
```

---

## W32 · 8월 3~7일 — 세션 간 메시지 + Auto mode 기본값 ⭐

### 💬 세션 간 메시지 (Cross-Session Messaging)

이제 **Claude Code 세션끼리 서로 메시지를 보낼 수 있어요!**

같은 컴퓨터의 다른 세션뿐 아니라, 다른 기기(원격)나 웹의 세션에도 메시지를 전달할 수 있어요.

> 🍱 **비유로 설명하면**: 이전에 "터미널 창 A에서 하던 걸 창 B에도 알려주려면" 직접 복붙해야 했다면, 이제는 **창끼리 카카오톡처럼 메시지로 소통**할 수 있어요.

```bash
# 현재 연결된 다른 세션 목록 보기
/agents list

# 다른 세션에 메시지 보내기 (Claude가 자동으로 처리)
# → ListAgents 도구로 세션 확인 후 SendMessage로 전달
```

자세한 내용은 [세션 간 메시지 문서](../advanced/cross-session-messaging)를 참고하세요.

### 🤖 Auto mode — 이제 기본 권한 모드로

**Auto mode가 Claude Code의 기본 권한 모드**로 전환됐어요.

이전에는 처음 설치하면 "default" 모드로 시작했는데, 이제 Auto mode로 시작해요.

| 이전 기본값 | 새 기본값 |
|---|---|
| default (매번 허가 요청) | **auto (안전하게 알아서 판단)** |

<div class="note-star">
★ Auto mode는 내부 AI 분류기가 작업을 분석해서 "안전한 작업은 알아서, 위험한 작업은 물어보는" 방식이에요. 처음 쓰시는 분은 기본값 그대로 두시면 됩니다.
</div>

### 🏠 자체 호스팅 환경 (Self-hosted Environments)

클라우드 세션을 **자신의 인프라에서 직접 실행**할 수 있는 기능이 추가됐어요. 기업·팀 환경에서 데이터 유출 걱정 없이 Claude Code를 쓸 수 있어요.

---

## W33 · 8월 10~14일 — Desktop 자동 재개 + GitLab ⭐

### ⏯️ 사용 한도 초기화 후 자동 재개

사용 한도(usage limit)에 걸려 Claude Code Desktop이 멈췄다가, **한도가 리셋되면 자동으로 작업을 이어가요.**

> 🍱 **비유로 설명하면**: 이전엔 "오늘 사용량 끝났습니다"라고 멈춰버리면 내일 아침에 직접 다시 시작해야 했다면, 이제는 **알람 없이 자동으로 다음 날 재개**돼요.

### 🔀 Fork mode 기본값으로 전환

실험적인 작업을 할 때 원본 대화 히스토리를 보호하는 **Fork mode가 기본값**이 됐어요.

### 🦊 GitLab 지원 추가

이제 GitHub뿐 아니라 **GitLab**에서도:
- Merge Request 자동 처리
- GitLab CI/CD 연동
- GitLab 마켓플레이스

```bash
# GitLab 마켓플레이스 플러그인 설치 가능
```

---

## W34 · 8월 17~21일 — /design 스킬 + 원격 시작

### 🎨 `/design` 스킬 — UI 아트보드 초안 생성

```bash
/design   # 편집 가능한 UI 아트보드 초안 생성
```

Claude가 **편집 가능한 시각적 UI 디자인**을 바로 생성해줘요. 클릭해서 수정하고 PNG/PDF로 내보낼 수 있어요.

> 🍱 **비유로 설명하면**: "앱 화면 대충 이런 식으로 만들어줘"라고 말하면, 클로드가 **직접 수정 가능한 목업(mockup)** 을 그려주는 거예요.

### 📝 Concise 출력 스타일

설정에서 응답 길이를 **Concise(간결)** 모드로 맞출 수 있어요.

```json
{
  "outputStyle": "concise"
}
```

### 📱 모바일에서 PC 세션 시작

스마트폰에서 Claude 앱을 열어서 **내 컴퓨터의 Claude Code 세션을 원격으로 시작**할 수 있게 됐어요.

---

## W35 · 8월 24~28일 — 터미널 세션 재개 + Restricted mode

### 🔁 Desktop에서 터미널 세션 재개

Claude Code Desktop 앱에서 **이전에 터미널로 시작했던 세션을 이어서 열 수** 있어요.

### 📊 피드백 리포트 자동 생성

Claude가 **피드백 리포트 초안을 자동으로 작성**해줘요. (공식 발표 기준 — 상세 기능 추정)

### 🔒 Restricted mode

보안이 중요한 환경에서 **제한 모드로 세션 시작** 가능해졌어요.

```bash
claude --restricted   # 제한 모드로 시작
```

---

## W36 · 8월 31일~9월 4일 — Fable 5.1 + /diff 패널 ⭐

### 🆕 Claude Fable 5.1로 전환 가능

Claude Code Desktop에서 **Claude Fable 5.1**로 전환할 수 있어요. (모델 출시는 Sep 1)

### 🖥️ Computer use 백그라운드 실행

Desktop의 **컴퓨터 사용(computer use) 기능이 백그라운드**에서 실행돼요. 클로드가 앱을 조작하는 동안 내 작업에 방해받지 않아요.

### 📋 `/diff` 패널 — 실시간 수정 사항 확인

```bash
/diff   # 현재 진행 중인 파일 수정 사항을 실시간으로 보기
```

> 🍱 **비유로 설명하면**: 클로드가 파일을 수정하는 동안 **라이브 방송처럼 변경 내용을 옆 창에서 실시간으로 확인**할 수 있어요.

---

## W37 · 9월 7~11일 — Plugin Eval + Desktop 창 분리 ⭐

### 🧪 `claude plugin eval` — 플러그인 자동 평가

직접 만든 플러그인을 **자동으로 테스트·채점**하는 도구가 생겼어요.

```bash
# 플러그인 eval 실행
claude plugin eval

# 결과 리포트로 품질 측정
```

> 🍱 **비유로 설명하면**: 요리를 만들면 **심사위원이 자동으로 채점**해주는 것처럼, 내가 만든 플러그인을 AI가 테스트해서 점수를 매겨줘요.

자세한 내용은 공식 문서 [Test plugins with evals](https://code.claude.com/docs/en/plugin-evals)를 참고하세요.

### 🪟 Desktop 창 분리 (Pane Pop-out)

Claude Code Desktop의 각 패널(사이드 채팅, 터미널, 미리보기 등)을 **독립된 창으로 분리**할 수 있어요.

> 🍱 **비유로 설명하면**: 한 앱 창 안에 모든 게 들어있던 것을 **각각 독립 창으로 꺼내서** 모니터 여러 개에 배치할 수 있어요.

---

## 가장 중요한 변경 4가지

| 우선순위 | 기능 | 한 줄 설명 |
|---|---|---|
| ⭐⭐⭐ | **Auto mode 기본값** | 설치 직후부터 더 편리하게 |
| ⭐⭐⭐ | **Opus 5 기본 전환** | 더 좋은 Opus가 자동으로 |
| ⭐⭐⭐ | **GitLab 지원** | GitHub 뿐 아니라 GitLab도 |
| ⭐⭐⭐ | **세션 간 메시지** | 멀티 에이전트 협업의 시작 |

---

<div class="note-star">
★ 공식 What's New 원문:
<br />W30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
<br />W32: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a>
<br />W33: <a href="https://code.claude.com/docs/en/whats-new/2026-w33">code.claude.com/docs/en/whats-new/2026-w33</a>
<br />W34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">code.claude.com/docs/en/whats-new/2026-w34</a>
<br />W35: <a href="https://code.claude.com/docs/en/whats-new/2026-w35">code.claude.com/docs/en/whats-new/2026-w35</a>
<br />W36: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">code.claude.com/docs/en/whats-new/2026-w36</a>
<br />W37: <a href="https://code.claude.com/docs/en/whats-new/2026-w37">code.claude.com/docs/en/whats-new/2026-w37</a>
</div>
