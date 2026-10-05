---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본 모델 전환, iOS 시뮬레이터, Claude Security 플러그인, Projects 베타, 자체 호스팅 환경, Auto-continue, Fork 모드 기본값, claude plugin eval 등 7주치 주요 업데이트"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "Projects", "자체호스팅", "플러그인평가", "iOS시뮬레이터"]
category: "next"
order: 18
lastUpdated: "2026-10-05"
---

<div class="note-star">
★ <strong>공식 문서</strong> — code.claude.com/docs/en/whats-new 기준 (<code>[공]</code>)<br />
★ 2026년 7월 20일(W30) ~ 9월 11일(W37) 7주치 주요 업데이트 정리<br />
★ 세부 내용은 <a href="https://code.claude.com/docs/en/whats-new/index">공식 What's New 페이지</a>에서 확인하세요
</div>

## 7~9월에 이런 것들이 새로 생겼어요! 🗓️

> 🗓️ W30(7월 3주) → W37(9월 2주), 총 7주치 주요 기능을 한국어로 정리했어요.

---

## ✨ W30 — Opus 5 기본 모델 + iOS 시뮬레이터 + Claude Security 플러그인 (7월 20~24일)

### 1. Claude Opus 5 기본 모델 전환 `[공]`

Opus 5가 Claude Code의 **새 기본 Opus 모델**이 됐어요.

- Max, Team Premium, Enterprise, Anthropic API 기본 적용
- **1M(백만) 토큰 컨텍스트 창** (Anthropic API, Max/Team/Enterprise 플랜)
- Fast Mode: Opus 5, **$10/$50 per MTok**으로 변경 (이후 Opus 5.5 출시와 함께 $8/$40으로 재조정)

```text
> /model claude-opus-5
```

### 2. iOS 시뮬레이터 내장 패널 (Desktop, 퍼블릭 베타) `[공]`

Claude Code Desktop(macOS)에서 **iOS 시뮬레이터 화면**을 바로 볼 수 있어요!

> 📱 **비유로 설명하면**: 코딩하면서 옆 화면에서 폰 앱이 실시간으로 작동하는 걸 눈으로 보는 것처럼요.

- Claude가 앱을 빌드하면 자동으로 시뮬레이터 패널이 열림
- 화면을 보면서 앱 동작을 직접 확인 가능
- Pro, Max, Team 플랜 퍼블릭 베타 / Xcode 필요

### 3. Claude Security 플러그인 출시 `[공]`

코드베이스 전체의 **보안 취약점을 AI가 자동 스캔**해요.

```text
> /plugin install claude-security@claude-plugins-official
> /claude-security
```

- 멀티에이전트가 아키텍처 분석 → 위협 모델 → 취약점 탐지 → 독립 검토 → 보고서 작성
- 레포 전체 또는 PR 단위 스캔 가능

---

## ✨ W33 — Auto-continue + Fork 모드 기본값 + GitLab 지원 (8월 10~14일)

### 1. 사용 한도 리셋 후 자동 재개 (Desktop) `[공]`

세션 한도 도달 시 **"한도 초기화되면 자동 재개"** 체크박스가 생겼어요!

> ⏸️ **이전**: 한도 도달 → 수동으로 다시 시작해야 했음
> ▶️ **이후**: 체크하고 기다리면 초기화 후 자동으로 이어서 작업

### 2. Fork 모드가 기본값으로 활성화 `[공]`

서브에이전트를 만들 때 **현재 대화 전체를 이어받는 Fork 모드**가 기본값이 됐어요.

> 🍴 **비유로 설명하면**: 보조 직원을 부를 때 기존 보고서를 통째로 복사본 줘서 맥락 설명 없이 바로 일 시키는 것처럼요.

```text
> /subtask 지금까지 논의한 파서 변경사항에 대한 단위 테스트 작성해줘
```

비활성화: `CLAUDE_CODE_FORK_SUBAGENT=0`

### 3. GitLab 머지 리퀘스트 + 마켓플레이스 지원 `[공]`

```bash
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

- GitLab MR URL로 워크트리 시작 가능
- 플러그인 마켓플레이스에서 GitLab URL 지원

### 4. @로 다른 세션에 메시지 보내기 `[공]`

프롬프트에서 `@세션이름`을 입력하면 **다른 Claude 세션에 직접 메시지**를 보낼 수 있어요.

### 5. 중요: 할 일 추적 도구 기본 비활성화 `[공]`

> ⚠️ **주의**: Opus 4.8, Sonnet 5, Fable 5, Mythos 5 이상 모델에서 `TaskCreate`, `TaskUpdate`, `TodoWrite` 등 할 일 추적 도구가 **기본적으로 꺼졌어요**.

재활성화하려면:
```bash
CLAUDE_CODE_ENABLE_TODO_TOOLS=1
```

---

## ✨ W37 — claude plugin eval + Desktop 팬 팝아웃 (9월 7~11일)

### 1. claude plugin eval — 플러그인 테스트 자동화 `[공]`

플러그인을 테스트 케이스로 **자동 평가**할 수 있어요!

```bash
# 플러그인 루트 디렉터리에서
claude plugin eval init    ← Claude가 테스트 케이스 초안 작성
claude plugin eval .       ← 전체 케이스 실행 + 점수 출력
```

- 각 케이스를 플러그인 있을 때/없을 때 비교
- 결과 테이블 + `evals/results/report.html` 생성
- 플러그인이 실제로 도움이 되는지 수치로 확인 가능

### 2. Desktop 패널 팝아웃 창 `[공]`

Claude Code Desktop에서 **패널을 별도 창으로 분리**할 수 있어요!

> 🖥️ **비유로 설명하면**: 수술실에서 의사가 메인 화면 보면서 보조 모니터에 환자 차트 분리해 놓는 것처럼요.

- diff, 터미널 패널을 세컨드 모니터로 드래그 가능
- 작업 완료 후 메인 창에 다시 도킹

### 3. 기타 주요 업데이트 (W37) `[공]`

| 기능 | 내용 |
|------|------|
| `maxEffortLevel` 설정 | Bedrock, GCP Agent Platform, Foundry에서도 effort 상한 설정 가능 |
| WebFetch 5분 타임아웃 | 5분 초과 시 에러 반환 (무한 대기 방지). `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 조정 |
| `/` 자동완성 개선 | 프롬프트 중간에서 `/` 입력 시 커맨드 목록 팝업 표시 |
| VS Code 에이전트 지도 | 하단 에이전트 수 클릭 → 서브에이전트 트랜스크립트 보기·종료 |
| 아티팩트 브라우저 탭 아이콘 | Claude가 발행하는 아티팩트마다 맞춤 아이콘 선택 |
| 웹 세션 메시지 취소 | 클라우드 세션에서 큐에 있는 메시지 보내기 전에 취소 가능 |

---

## 전체 W30~W37 변경 요약표

| 주차 | 날짜 | 핵심 내용 |
|------|------|-----------|
| W30 | 7/20~24 | Opus 5 기본 모델, iOS 시뮬레이터, Claude Security |
| W31 | 7/27~31 | 세부 업데이트 (공식 문서 참조) |
| W32 | 8/3~7 | 세부 업데이트 + 자체 호스팅 환경 공개 베타 시작 |
| W33 | 8/10~14 | Auto-continue, Fork 모드 기본값, GitLab 지원 |
| W34 | 8/17~21 | 세부 업데이트 (공식 문서 참조) |
| W35 | 8/24~28 | 세부 업데이트 (공식 문서 참조) |
| W36 | 8/31~9/4 | 세부 업데이트 (공식 문서 참조) |
| W37 | 9/7~11 | claude plugin eval, Desktop 팝아웃, VS Code 개선 |

> 📖 W31, W32, W34, W35, W36 세부 내용은 [공식 What's New 페이지](https://code.claude.com/docs/en/whats-new/index)에서 확인하세요.

---

*출처: code.claude.com/docs/en/whats-new `[공]`*
