---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본화, 자체 호스팅 환경, Auto mode 기본화, Cross-session 메시지, iOS 시뮬레이터, GitLab 지원 등 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "자체호스팅", "AutoMode", "GitLab", "iOS시뮬레이터"]
category: "next"
order: 23
lastUpdated: "2026-10-20"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.<br />
★ W31은 공식 문서에 게시되지 않았어요 (방학·휴가 기간 추정).
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5 기본 모델 전환**, iOS 시뮬레이터, Claude Security 플러그인 |
| W31 | 7/27~7/31 | (미게시) |
| **W32** | 8/3~8/7 | **세션 간 메시지**, **자체 호스팅 환경**, **Auto mode 기본화** |
| **W33** | 8/10~8/14 | Desktop 한도 초과 시 자동 재개, Fork 모드 기본화, GitLab 지원 |
| **W34** | 8/17~8/21 | `/design` 스킬, Concise 출력 스타일, 폰으로 세션 시작 |
| **W35** | 8/24~8/28 | Desktop에서 터미널 세션 재개, 피드백 리포트, 제한 모드 |
| **W36** | 8/31~9/4 | **Fable 5.1 전환**, Computer use 백그라운드, `/diff` 라이브 패널 |
| **W37** | 9/7~9/11 | 플러그인 eval 테스트, Desktop pane 분리 창 |

---

## W30 · 7월 20~24일 — Opus 5 기본 모델 전환

### Opus 5가 기본 Opus 모델이 됐어요

Claude Code의 Opus 모델 기본값이 **Opus 5**로 전환됐어요.

```bash
# Opus 5를 쓰고 싶다면 (이미 기본값)
claude --model claude-opus-5
```

### iOS 시뮬레이터 pane

Claude Code Desktop이 앱을 빌드·실행할 때 **iOS 시뮬레이터**를 별도 pane에 자동으로 열어줘요.

> 📱 **비유**: 코드 수정하면 옆에서 실제 아이폰 화면이 바로 바뀌는 거예요.

### Claude Security 플러그인 출시

코드베이스 전체를 AI로 취약점 스캔하는 **Claude Security 플러그인**이 나왔어요.

```bash
/plugin install claude-security
claude "내 코드에서 보안 취약점 찾아줘"
```

---

## W32 · 8월 3~7일 — 세션 간 메시지 + 자체 호스팅 + Auto mode 기본화

### 세션들이 서로 대화할 수 있어요

이제 다른 Claude Code 세션에 **메시지를 보낼 수 있어요**. 한 세션이 작업 중인 다른 세션에게 정보를 전달하거나 지시를 내릴 수 있어요.

> 🏢 **비유**: 여러 팀이 각자 프로젝트를 하다가, 메신저로 서로 소통하는 것처럼요.

공식 문서: [code.claude.com/docs/en/cross-session-messaging](https://code.claude.com/docs/en/cross-session-messaging)

### 자체 호스팅 환경(Self-hosted Environments) 퍼블릭 베타

이제 Claude Code 클라우드 세션을 **여러분 회사 서버에서** 실행할 수 있어요.

> 🏗️ **비유**: 전세 아파트(클라우드)에 살다가, 이제 내 땅에 내 집을 지어서 사는 거예요.

**주요 특징:**
- 내부 네트워크에서 실행 (외부 데이터 유출 없음)
- 내부 서비스에 직접 접근 가능
- Kubernetes, Docker Compose 등 지원

공식 문서: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

### Auto mode가 기본 권한 모드가 됐어요

Pro·Max·Team 플랜에서 **Auto mode가 기본 권한 모드**로 설정됐어요 (공식 발표 기준: Sep 17, 2026에 공지).

> 🚦 **비유**: 운전을 자동 변속기로 하는 게 기본이 된 거예요. 물론 수동 변속기(다른 모드)로 바꿀 수도 있어요.

Auto mode는 Claude가 위험한 명령은 물어보고, 안전한 건 알아서 처리해요.

---

## W33 · 8월 10~14일 — GitLab + Fork 모드 기본화

### GitLab merge request 지원

이제 **GitLab**에서도 Claude Code를 활용할 수 있어요. GitHub과 동일하게 merge request를 Claude가 처리할 수 있어요.

### Fork 모드 기본화

병렬 작업을 위한 **Fork 모드**가 기본으로 켜졌어요. 실험적 변경을 더 안전하게 시도할 수 있어요.

### Desktop 한도 초과 시 자동 재개

사용 한도가 초과됐다가 리셋되면 **Claude Code Desktop이 자동으로 재개**해요. 새벽에 시작한 작업이 아침에 스스로 이어지는 거죠.

---

## W34 · 8월 17~21일 — `/design` 스킬 + 폰으로 세션 시작

### `/design` 스킬로 UI 아트보드 초안 작성

```bash
/design "로그인 페이지 디자인해줘"
```

Claude가 편집 가능한 UI 아트보드 초안을 만들어줘요.

### Concise 출력 스타일

```bash
/style concise  # 짧고 핵심적인 답변만
```

### 폰으로 내 컴퓨터 세션 시작

**Remote Control**을 통해 스마트폰에서 내 컴퓨터의 Claude Code 세션을 시작할 수 있어요.

---

## W35 · 8월 24~28일 — Desktop에서 터미널 세션 재개 + 제한 모드

### Desktop에서 터미널 세션 재개

로컬 터미널에서 돌리던 세션을 **Claude Code Desktop에서 불러와** 이어서 볼 수 있어요.

### 제한 모드(Restricted Mode)

보안이 중요한 환경에서 Claude의 행동 범위를 좁히는 **제한 모드**가 추가됐어요.

```bash
claude --restricted  # 제한 모드로 시작
```

---

## W36 · 8월 31 ~ 9월 4일 — Fable 5.1 전환 + Computer Use 백그라운드

### Fable 5.1으로 전환

최상위 모델이 **Claude Fable 5.1**로 업그레이드됐어요.

```bash
claude --model claude-fable-5-1
```

### Computer Use 백그라운드 실행

Desktop에서 **Computer Use(화면 조작)**가 백그라운드에서 실행돼요. 다른 창을 보면서 Claude가 화면을 조작하도록 할 수 있어요.

### `/diff` 라이브 패널

Claude가 파일을 수정하는 동안 **실시간으로 diff(변경 내용)**를 볼 수 있는 패널이 생겼어요.

---

## W37 · 9월 7~11일 — 플러그인 eval + pane 분리 창

### `claude plugin eval` — 플러그인 자동 테스트

```bash
claude plugin eval  # 플러그인의 eval 케이스를 실행하고 채점
```

플러그인이 의도한 대로 동작하는지 자동으로 테스트하고 CI에서도 확인할 수 있어요.

공식 문서: [code.claude.com/docs/en/plugin-evals](https://code.claude.com/docs/en/plugin-evals)

### Desktop pane 별도 창으로 분리

Claude Code Desktop의 pane(패널)을 **별도 창으로 꺼낼 수 있어요**. 2개 모니터 환경에서 특히 유용해요.

---

## 관련 문서

- [자체 호스팅 환경 상세 가이드](/docs/advanced/self-hosted-env)
- [Claude 5.5 시리즈 발표](/docs/next/claude-55-series)
- [Fast Mode Opus 5.5 업데이트](/docs/advanced/fast-mode-opus55)
