---
title: "[공] 8~9월 신기능 총정리 — W32~W37 (2026년 8월~9월 초)"
description: "Auto mode 기본값 변경, 세션간 메시지, 자체 호스팅 환경, /diff 패널, plugin eval 등 2026년 8~9월 Claude Code 주요 신기능을 한 번에 정리했어요"
tags: ["자동생성", "신기능", "AutoMode", "자체호스팅", "세션메시지", "플러그인평가", "whats-new"]
category: "next"
order: 18
lastUpdated: "2026-09-24"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 What's New: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a>
</div>

## 한 눈에 보는 W32~W37 주요 변화

| 주차 | 기간 | 핵심 변화 |
|---|---|---|
| **W32** | Aug 3–7 | 세션 간 메시지, 자체 호스팅 환경, **Auto mode 기본값 변경** |
| **W33** | Aug 10–14 | Desktop 자동 재개, fork mode 기본값 ON, GitLab 지원 |
| **W34** | Aug 17–21 | `/design` 스킬, Concise 출력 스타일, 모바일에서 세션 시작 |
| **W35** | Aug 24–28 | Desktop 터미널 세션 재개, 피드백 리포트, restricted mode |
| **W36** | Aug 31–Sep 4 | **Fable 5.1 전환**, computer use 백그라운드, `/diff` 패널 |
| **W37** | Sep 7–11 | **`claude plugin eval`**, Desktop 팝아웃 창 |

---

## W32 — Auto mode가 이제 기본이에요 🤖

### Auto mode 기본값 변경 (가장 중요!)

2026년 8월(W32)부터 **Auto mode가 Pro·Max·Team 플랜에서 기본 권한 모드**가 됐어요.

> 🚗 **비유로 설명하면**: 이전까지는 Claude Code가 매번 "이 파일 수정해도 될까요?"라고 물어보는 **수동 변속 차**였다면, 이제는 위험한 명령만 체크하고 나머지는 스스로 판단하는 **자동 변속 차**가 됐어요.

| 항목 | 내용 |
|---|---|
| **변경 전** | Default mode (모든 작업 사전 확인) |
| **변경 후** | **Auto mode** (안전 분류기가 위험 명령만 차단) |
| **적용 플랜** | Pro, Max, Team |
| **모드 변경** | Shift+Tab 또는 `/mode` |

<div class="note-star">
★ Auto mode에서도 파일 삭제·외부 서비스 호출 등 위험한 작업은 여전히 확인을 요청해요. 완전 자율이 아니에요.
</div>

### 세션 간 메시지 (Cross-session messaging)

Claude Code 세션끼리 서로 메시지를 보낼 수 있게 됐어요. 여러 에이전트가 협력하는 복잡한 작업에 유용해요.

```bash
# 다른 세션에 메시지 보내기 (에이전트 내부에서 사용)
# Agent SDK / 워크플로우에서 활용
```

### 자체 호스팅 환경 (Self-hosted Environments) 공개 베타

회사 인프라 안에서 Claude Code 클라우드 세션을 실행할 수 있는 **자체 호스팅 환경**이 공개 베타로 출시됐어요.

> 🏢 **비유로 설명하면**: Claude Code 클라우드를 "회사 건물 안에 설치"하는 거예요. 외부 인터넷에 코드가 나가지 않아도 돼요.

---

## W33 — Desktop 자동 재개 + GitLab 지원

| 기능 | 설명 |
|---|---|
| **Desktop 자동 재개** | 사용량 제한 초기화 후 Claude Code Desktop이 자동으로 작업을 이어가요 |
| **Fork mode 기본 ON** | 새 브랜치 작업 시 자동으로 fork가 활성화돼요 |
| **GitLab 지원 확장** | GitLab Merge Request와 GitLab Plugin Marketplace가 GitHub에 이어 지원돼요 |

---

## W34 — `/design` 스킬 + Concise 출력 스타일

### `/design` 스킬

UI 아트보드를 초안으로 바로 만들 수 있는 `/design` 스킬이 추가됐어요.

```bash
/design  # 편집 가능한 UI 아트보드 초안 생성
```

### Concise 출력 스타일

Claude 응답이 길고 장황하게 느껴질 때, **Concise 스타일**로 더 짧고 핵심만 남길 수 있어요.

```bash
/style concise
```

### 모바일에서 세션 시작

iOS/Android 앱에서 **내 컴퓨터에 새 Claude Code 세션을 원격으로 시작**할 수 있어요 (Remote Control 기반).

---

## W35 — Desktop 터미널 세션 재개

Desktop 앱에서 이전 터미널 세션을 그대로 이어받아 재개할 수 있어요.

| 기능 | 설명 |
|---|---|
| **터미널 세션 재개** | 이전 작업 상태를 유지하며 계속 진행 |
| **피드백 리포트** | Claude가 작업 결과 피드백 초안을 자동 작성해줘요 |
| **Restricted mode** | 제한된 권한으로 세션 시작 (`--restricted`) |

---

## W36 — Fable 5.1 전환 + `/diff` 패널

### Fable 5.1로 전환

Desktop 앱에서 **Claude Fable 5.1로 전환하는 버튼**이 생겼어요. 설정에서 바로 클릭 한 번으로 최상위 모델로 바꿀 수 있어요.

### `/diff` 패널

Claude의 편집 내용을 **실시간 `/diff` 패널**에서 확인할 수 있어요.

```bash
/diff  # 현재까지의 변경사항 라이브 뷰
```

### Computer Use 백그라운드 실행

Desktop에서 **computer use(컴퓨터 조작)**가 백그라운드로 실행돼요. Claude가 앱을 조작하는 동안 다른 작업을 계속할 수 있어요.

---

## W37 — `claude plugin eval` 공식 출시 🧪

### `claude plugin eval` — 플러그인 자동 평가

플러그인의 동작을 **자동화된 eval(평가) 케이스로 테스트**하는 공식 도구가 나왔어요.

```bash
claude plugin eval  # 플러그인 평가 실행
```

> 🔬 **비유로 설명하면**: 플러그인이 잘 동작하는지 확인하는 **자동 시험 채점 시스템**이에요. 사람이 매번 직접 테스트하지 않아도 돼요.

| 기능 | 내용 |
|---|---|
| **eval 케이스 작성** | JSON 형식으로 입력/기대 출력 정의 |
| **점수 비교** | 기준선(baseline)과 플러그인 유·무 성능 비교 |
| **CI 통합** | CI 파이프라인에 점수 기준 설정 가능 |

### Desktop 팝아웃 창

Claude Code Desktop 패널을 **독립 창으로 팝아웃**할 수 있어요. 멀티 모니터 환경에서 더 편리해졌어요.

---

## 정리

2026년 8~9월 두 달간 Claude Code에 많은 변화가 있었어요:
- **Auto mode**가 기본값이 됐고
- **세션 간 메시지**로 멀티 에이전트가 더 유연해졌으며
- **자체 호스팅 환경**으로 기업 보안 요건도 맞출 수 있게 됐어요
- 거기에 `/diff`, `/design`, `plugin eval` 같은 실용 도구들이 더해졌어요.
