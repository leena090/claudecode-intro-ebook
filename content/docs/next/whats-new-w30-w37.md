---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본 모델 전환, 오토 모드 기본값 변경, 세션 간 메시지, Self-hosted 환경, /design 스킬, GitLab 지원, Plugin eval 등 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "오토모드", "self-hosted", "Projects", "GitLab", "plugin-eval"]
category: "next"
order: 19
lastUpdated: "2026-10-06"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30, W32~W37) 내용을 한국어로 정리한 것입니다.
<br />★ W31은 공식 문서에 게시되지 않았습니다 (공식 발표 기준).
<br />★ 이전 업데이트 (W25~W29)는 <a href="/docs/next/whats-new-w25-w29">여기</a>에서 확인하세요.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | Opus 5 기본 Opus 모델, iOS 시뮬레이터, Claude Security |
| **W32** | 8/3~8/7 | 세션 간 메시지, Self-hosted 환경, **오토 모드 기본값** |
| **W33** | 8/10~8/14 | Desktop 자동 재시작, Fork 모드 기본화, GitLab 지원 |
| **W34** | 8/17~8/21 | `/design` 스킬, Concise 스타일, 폰에서 세션 시작 |
| **W35** | 8/24~8/28 | Desktop 터미널 세션 재개, 피드백 보고서, 제한 모드 |
| **W36** | 8/31~9/4 | **Fable 5.1 전환**, 백그라운드 컴퓨터 사용, `/diff` 패널 |
| **W37** | 9/7~9/11 | Plugin eval, Desktop 창 팝아웃 |

---

## W30 · 7월 20~24일 — Opus 5 기본 모델 전환 + iOS 시뮬레이터

### 🤖 Opus 5가 기본 Opus 모델로

이제 `claude --model opus`를 실행하면 **Opus 5**가 기본으로 적용돼요. 이전에는 Opus 4.7이었어요.

> 🍱 **비유로 설명하면**: 음식점에서 "주방장 추천 메뉴"가 바뀐 것처럼, `/fast` 명령이나 Opus를 쓸 때 이제 자동으로 최신 버전이 나와요.

### 📱 Desktop에 iOS 시뮬레이터 패널 추가

Claude Code Desktop에 **iOS 시뮬레이터**가 내장됐어요. iOS 앱을 만들 때 Desktop 앱 안에서 바로 시뮬레이터를 열어 테스트할 수 있어요.

### 🔒 Claude Security 플러그인 출시

**Claude Security 플러그인**(`/install claude-security`)이 출시됐어요. 코드베이스 전체를 스캔해서 보안 취약점을 찾아주는 도구예요.

```bash
# 보안 플러그인 설치
/install claude-security

# 스캔 실행
/scan
```

---

## W32 · 8월 3~7일 — **오토 모드 기본값** 변경 + 세션 간 메시지 🔥

### 🔄 오토 모드(Auto Mode)가 이제 기본값!

**가장 큰 변화**예요. 이전까지는 오토 모드를 수동으로 켜야 했는데, 이제 **Pro, Max, Team 플랜에서 자동으로 오토 모드가 기본값**으로 설정돼요.

> 🍱 **비유로 설명하면**: 자동차의 자동 주차 기능이 이제 옵션이 아니라 기본 탑재된 것처럼, Claude Code가 기본적으로 더 자율적으로 일할 수 있게 됐어요.

- 이전: `--enable-auto-mode` 플래그 필요
- 이후: 아무 설정 없이 오토 모드로 실행

<div class="note-star">
⚠️ <strong>오토 모드란?</strong> 별도 분류기(classifier)가 Claude의 모든 액션을 실시간으로 검사해서 위험한 명령은 차단하는 모드예요. 안전망이 깔려 있으면서 Claude가 더 자율적으로 일하도록 해줘요. 자세한 내용은 <a href="/docs/advanced/auto-mode-config">오토 모드 설정 가이드</a>를 참고하세요.
</div>

### 💬 내 다른 세션들과 메시지 주고받기

**Claude Code 세션들이 서로 메시지를 보낼 수 있게** 됐어요! 한 세션에서 다른 세션에게 작업 결과를 전달하거나 협업할 수 있어요.

```bash
# 내 세션 목록 보기
/list-agents

# 다른 세션에 메시지 보내기
# (SendMessage 도구 사용)
```

### 🏠 Self-hosted 환경 퍼블릭 베타 출시

**Self-hosted environments**(셀프 호스티드 환경)가 퍼블릭 베타로 출시됐어요. 회사 내부 네트워크와 인프라에서 Claude Code 클라우드 세션을 직접 실행할 수 있어요.

> 🍱 **비유로 설명하면**: 클라우드 식당(Anthropic 인프라) 대신 내 주방(내 서버)에서 Claude가 일할 수 있게 된 거예요. 보안이 중요한 기업에 매우 유용해요.

공식 문서: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

---

## W33 · 8월 10~14일 — Desktop 자동 재시작 + GitLab 지원

### ♻️ 사용량 한도 후 자동 재시작

사용량 한도에 걸렸을 때 한도가 초기화되면 **Claude Code Desktop이 자동으로 작업을 재개**해요. 이전에는 한도가 풀려도 수동으로 다시 시작해야 했어요.

### 🔀 Fork 모드 기본값으로 전환

**Fork 모드**가 기본으로 켜졌어요. 각 세션이 독립적인 브랜치에서 작업해서 충돌 없이 병렬 작업이 가능해요.

### 🦊 GitLab 지원 추가

이제 **GitLab**도 GitHub처럼 지원돼요!
- GitLab Merge Request 처리
- GitLab 마켓플레이스
- CI/CD 연동

---

## W34 · 8월 17~21일 — `/design` 스킬 + Concise 스타일 + 폰에서 세션 시작

### 🎨 `/design` 스킬 — UI 아트보드 초안 작성

새로운 `/design` 스킬로 **편집 가능한 UI 아트보드를 Claude가 직접 만들어줘요**.

```bash
/design 로그인 화면 만들어줘
```

> 🍱 **비유로 설명하면**: 디자이너에게 "이런 느낌으로 해줘"라고 말하면 바로 수정 가능한 초안을 만들어주는 것처럼, Claude가 UI 디자인 시안을 뚝딱 만들어줘요.

### 💬 Concise 출력 스타일

**Concise**(콘사이스) 스타일이 추가됐어요. Claude의 응답을 더 짧고 핵심만 남게 설정할 수 있어요.

```bash
/config output_style concise
```

### 📱 폰에서 내 PC 세션 시작하기

Claude 모바일 앱에서 **내 컴퓨터의 Claude Code 세션을 시작**할 수 있어요. Remote Control 기능의 확장이에요.

---

## W35 · 8월 24~28일 — Desktop 터미널 재개 + 피드백 보고서 + 제한 모드

### 📂 Desktop에서 터미널 세션 재개

Claude Code Desktop에서 이전 터미널 세션을 다시 열 수 있게 됐어요.

### 📝 Claude가 피드백 보고서 초안 작성

Claude가 자동으로 **피드백 보고서**를 초안으로 만들어줘요. 작업 결과를 팀원에게 공유할 때 유용해요.

### 🛡️ 제한 모드(Restricted Mode) 추가

**제한 모드**로 세션을 시작할 수 있어요. 특정 파일이나 명령을 차단해서 더 안전하게 Claude를 실행할 수 있어요.

---

## W36 · 8월 31일~9월 4일 — **Fable 5.1 전환** + 백그라운드 컴퓨터 사용

### ✨ Fable 5.1로 전환 가능

[Fable 5.1 출시](https://www.anthropic.com/news)에 맞춰 Claude Code Desktop에서 **Fable 5.1 모델**로 전환할 수 있게 됐어요.

### 🖥️ 백그라운드 컴퓨터 사용

**Computer Use**(컴퓨터 사용) 기능이 이제 Desktop에서 **백그라운드**로 실행될 수 있어요. Claude가 화면 조작하는 동안 다른 작업을 동시에 할 수 있어요.

### 📊 `/diff` 라이브 패널

새로운 **`/diff`** 명령으로 Claude가 편집하는 내용을 실시간 diff 패널에서 볼 수 있어요.

```bash
/diff  # 라이브 편집 패널 열기
```

---

## W37 · 9월 7~11일 — Plugin Eval + Desktop 팝아웃 창

### 🧪 플러그인 eval로 테스트

새로운 **`claude plugin eval`** 명령으로 플러그인을 자동 테스트할 수 있어요. 내가 만든 플러그인이 예상대로 작동하는지 CI에서도 검증할 수 있어요.

```bash
# 플러그인 eval 실행
claude plugin eval

# 결과 확인 (pass/fail 스코어)
```

공식 문서: [code.claude.com/docs/en/plugin-evals](https://code.claude.com/docs/en/plugin-evals)

### 🪟 Desktop 패널 팝아웃

Claude Code Desktop 패널들을 **독립적인 창으로 꺼낼 수 있어요**. 멀티 모니터 환경에서 각 패널을 분리해서 배치할 수 있어요.

---

## 전체 요약 — 가장 중요한 변화 TOP 5

| 순위 | 기능 | 언제 | 중요도 |
|---|---|---|---|
| 1 | **오토 모드 기본값 전환** | W32 (8/7) | ★★★ |
| 2 | **Fable 5.1 모델 전환** | W36 (9/4) | ★★★ |
| 3 | **GitLab 지원** | W33 (8/14) | ★★☆ |
| 4 | **Self-hosted 환경** | W32 (8/7) | ★★☆ |
| 5 | **세션 간 메시지** | W32 (8/7) | ★★☆ |
