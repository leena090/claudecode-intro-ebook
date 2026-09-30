---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "자체 인프라 실행, 에이전트 간 메시지, Auto mode 기본값 전환, Fable 5.1 등 2026년 7~9월 주요 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "self-hosted", "auto-mode", "Fable5.1", "플러그인"]
category: "next"
order: 18
lastUpdated: "2026-09-30"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/whats-new/ 공식 문서 기반
<br />★ W30~W37 (2026-07-20 ~ 2026-09-11) 공식 기준으로 정리했어요.
</div>

## W37 · 2026년 9월 7~11일

> **`claude plugin eval` + 데스크탑 팝아웃 창**

| 기능 | 설명 |
|---|---|
| 🧪 **claude plugin eval** | 플러그인에 eval 케이스를 작성하고 자동 채점 — CI에서 품질 게이트로 활용 가능 |
| 🪟 **데스크탑 팝아웃 창** | Claude Code Desktop 각 패널을 독립 창으로 분리 가능 |

---

## W36 · 2026년 8월 31일~9월 4일

> **Fable 5.1 전환 + 컴퓨터 사용 백그라운드 + /diff 패널**

| 기능 | 설명 |
|---|---|
| 🔄 **Fable 5.1로 전환** | 데스크탑 앱에서 Claude Fable 5.1 기본 모델로 전환 가능 |
| 🖥️ **컴퓨터 사용 백그라운드** | Desktop에서 컴퓨터 사용(Computer Use)이 백그라운드 실행 지원 |
| 📋 **/diff 패널** | 라이브 `/diff` 패널에서 Claude 편집 내용을 실시간 확인 |

---

## W35 · 2026년 8월 24~28일

> **터미널 세션 재개 + 피드백 리포트 + 제한 모드**

| 기능 | 설명 |
|---|---|
| ▶️ **터미널 세션 재개** | Claude Code Desktop 앱에서 터미널 세션 재개 지원 |
| 📝 **피드백 리포트** | Claude가 직접 피드백 리포트를 초안 작성 후 사용자가 편집 |
| 🔒 **제한 모드(Restricted mode)** | 세션을 제한 모드로 시작할 수 있는 기능 추가 |

---

## W34 · 2026년 8월 17~21일

> **/design 스킬 + Concise 출력 스타일 + 폰에서 세션 시작**

| 기능 | 설명 |
|---|---|
| 🎨 **/design 스킬** | 편집 가능한 UI 아트보드를 /design 명령어로 초안 생성 |
| ✂️ **Concise 출력 스타일** | 간결한 답변 모드 `/style concise` 설정 |
| 📱 **폰에서 세션 시작** | 내 기기의 Claude Code 세션을 스마트폰에서 바로 시작 |

---

## W33 · 2026년 8월 10~14일

> **사용 한도 후 자동 재개 + fork 모드 기본값 + GitLab 지원**

| 기능 | 설명 |
|---|---|
| ⏱️ **사용 한도 후 자동 재개** | 사용 한도가 리셋되면 Desktop이 자동으로 이어서 작업 |
| 🍴 **fork 모드 기본값** | 서브에이전트 fork 모드가 이제 기본 동작 |
| 🦊 **GitLab 지원** | GitLab 머지 리퀘스트 및 GitLab 마켓플레이스 지원 추가 |

---

## W32 · 2026년 8월 3~7일

> **세션 간 메시지 + 자체 인프라 실행 + Auto mode 기본값**

| 기능 | 설명 |
|---|---|
| 💬 **세션 간 메시지(Cross-session messaging)** | Claude Code 세션끼리 서로 메시지 전송 가능 |
| 🏠 **자체 인프라 실행(Self-hosted environments)** | 사내 인프라에서 클라우드 세션 실행 — 공개 베타 |
| 🤖 **Auto mode 기본값 전환** | Pro·Max·Team 플랜에서 Auto mode가 이제 **기본** 권한 모드 |

> 🍱 **비유로 설명하면**: Auto mode는 '조수'가 새 직원 채용처럼 바뀐 거예요. 예전엔 직접 "자율적으로 일해도 돼"라고 말해야 했지만, 이제는 처음부터 어느 정도 알아서 일하는 게 기본값이에요.

<div class="note-star">
★ Auto mode 기본값은 Pro, Max, Team 플랜 해당. <code>[공식]</code>
<br />★ 자체 인프라 실행은 공개 베타로 엔터프라이즈 환경 대상이에요.
</div>

---

## W30 · 2026년 7월 20~24일

> **Opus 5 기본 Opus 모델 + iOS 시뮬레이터 + Claude Security 플러그인**

| 기능 | 설명 |
|---|---|
| 🔄 **Opus 5 기본 모델** | Opus 4.7 → **Opus 5**가 기본 Opus 모델로 전환 |
| 📱 **iOS 시뮬레이터** | Desktop 앱에 iOS 시뮬레이터 패널 내장 — Claude가 iOS 앱 직접 빌드·실행·테스트 |
| 🔐 **Claude Security 플러그인** | 코드베이스 취약점 자동 스캔·패치 생성 플러그인 출시 |

---

## 이 기간 가장 큰 변화 3가지

1. **Auto mode가 기본값으로** (W32): "허락 먼저 물어봐"에서 "알아서 해"로 권한 모델이 바뀌었어요.
2. **자체 인프라 클라우드 세션** (W32): 사내 서버에서 Claude Code 클라우드 세션 실행 가능.
3. **Claude Fable 5.1** (W36): 코딩·지식 업무 최상위 모델 업그레이드.

---

## 더 알아보기

- [W37 공식](https://code.claude.com/docs/en/whats-new/2026-w37)
- [W36 공식](https://code.claude.com/docs/en/whats-new/2026-w36)
- [W32 공식](https://code.claude.com/docs/en/whats-new/2026-w32)
- [W30 공식](https://code.claude.com/docs/en/whats-new/2026-w30)
- [Auto mode 설정](/docs/advanced/auto-mode-config)
- [Permission modes](/docs/advanced/permission-modes)
