---
title: "[공] 주간 업데이트 총정리: 2026년 8월 3일 ~ 9월 11일 (W32~W37)"
description: "크로스 세션 메시징, 자체 호스팅 환경, Auto Mode 기본값 전환, /design 스킬, Fable 5.1, 플러그인 eval까지 — 6주 핵심 변경 정리"
tags: ["자동생성", "업데이트", "2026", "week32", "week33", "week34", "week35", "week36", "week37", "크로스세션", "자체호스팅", "오토모드"]
category: "next"
order: 18
lastUpdated: "2026-10-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 32~37 (2026-08-03 ~ 2026-09-11) Claude Code 주간 업데이트. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/index" target="_blank">공식 업데이트 목록: code.claude.com/docs/en/whats-new</a>
</div>

## 6주 핵심 변경 한눈에 보기

| 주간 | 날짜 | 핵심 기능 |
|---|---|---|
| **W32** | 8/3~7 | 크로스 세션 메시징, 자체 호스팅 환경, Auto Mode 기본값 |
| **W33** | 8/10~14 | 데스크톱 자동 재개, Fork 모드 기본 활성, GitLab 지원 |
| **W34** | 8/17~21 | `/design` 스킬, Concise 출력 스타일, Remote Control 정식 출시 |
| **W35** | 8/24~28 | `/resume` 단말 세션 재개, 피드백 자동 초안, 제한 모드 |
| **W36** | 8/31~9/4 | Fable 5.1, 백그라운드 컴퓨터 사용, 라이브 diff 패널, `/skill-doctor` |
| **W37** | 9/7~11 | `claude plugin eval`, 데스크톱 팬 분리 창 |

---

## W32 (8월 3~7일) — 세션끼리 대화하고, 내 서버에서 실행하기

### 1️⃣ 크로스 세션 메시징 (Cross-session messaging)

> 🍱 **비유**: 여러 개의 Claude Code 창을 동시에 띄워 놓았을 때, 이제 창들끼리 서로 메시지를 주고받을 수 있어요. 팀 동료들이 카카오톡으로 소통하듯이요.

Claude Code 세션들이 이제 서로 메시지를 보낼 수 있어요.

```bash
# 다른 세션에 변경 사항 알리기
> Tell the session working on the payments API that users.name is now users.display_name

# 연결된 세션 목록 확인
> /list-agents
```

- 세션 이름 앞에 `@`를 붙여 직접 언급 가능 (`@session-name`)
- macOS, Linux, Windows 지원 (v2.1.224 이상)

### 2️⃣ 자체 호스팅 환경 (Self-hosted environments) — 공개 베타

> 🍱 **비유**: Claude의 클라우드 세션을 Anthropic 서버가 아닌, 우리 회사 내부 서버에서 실행하는 거예요. 회사 데이터가 외부로 나가지 않아요.

Team/Enterprise 플랜에서 사용 가능한 기업용 기능이에요.

```bash
# 내 서버를 Claude 실행기(runner)로 등록
claude self-hosted-runner setup
```

- 조직 내부 네트워크에서 클라우드 세션 실행
- 관리자 설정에서 **Allow self-hosted environments** 활성화 필요

### 3️⃣ Auto Mode가 기본값으로 전환

> 🍱 **비유**: 자동차 기어를 수동에서 자동으로 바꾼 것과 같아요. 이제 매번 허가를 요청하지 않고 Claude가 스스로 판단해서 진행해요.

- **2026년 8월 14일부터** Pro/Max/Team 플랜의 신규 세션 기본값이 Auto Mode
- 기존에 직접 설정한 모드는 그대로 유지
- `/config`에서 언제든지 변경 가능

```json
// 미리 Auto Mode로 설정하기 (~/.claude/settings.json)
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

---

## W33 (8월 10~14일) — 더 편리한 작업 흐름

### 1️⃣ 사용 한도 초과 시 데스크톱 자동 재개

사용 한도에 걸렸을 때 **"한도 초기화되면 자동 재개"** 체크박스가 생겼어요.
체크하고 세션을 열어두면, 초기화 후 자동으로 이어서 진행해요.

### 2️⃣ Fork 모드 기본 활성화

> 🍱 **비유**: 사이드 작업을 할 때 지금까지 나눈 대화 내용을 그대로 들고 가는 거예요. 처음부터 다시 설명할 필요가 없어요.

서브에이전트가 이제 대화 전체 맥락을 물려받아 시작해요.

```bash
# 현재 대화 맥락을 들고 사이드 작업 시작
> /subtask draft unit tests for the parser changes so far
```

비활성화: `CLAUDE_CODE_FORK_SUBAGENT=0`

### 3️⃣ GitLab 머지 리퀘스트 지원

```bash
# GitLab MR에서 바로 워크트리 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

---

## W34 (8월 17~21일) — UI 디자인과 새 출력 스타일

### 1️⃣ `/design` 스킬 (리서치 프리뷰)

> 🍱 **비유**: 글로만 설명하던 UI 요청을 이제 Claude가 그림(아트보드)으로 여러 옵션을 그려줘요. 맘에 드는 걸 고르면 바로 구현까지 해줘요.

```bash
# UI 디자인 아트보드 생성
> /design redesign the composer based on what people actually use it for
```

Claude가 편집 가능한 아트보드 캔버스 링크를 제공해요. Pro/Max/Team/Enterprise 지원.

### 2️⃣ Concise 출력 스타일

결과만 간결하게 받고 싶을 때 사용해요.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → **Concise**

### 3️⃣ Remote Control 정식 출시 (베타 졸업)

스마트폰에서 내 컴퓨터의 Claude Code 세션을 시작하고 제어할 수 있어요.

```bash
# 내 컴퓨터를 원격 제어 가능하게 설정
claude remote-control
```

모바일 앱 Code 탭에 내 기기 카드가 나타나요.

---

## W35 (8월 24~28일) — 세션 이어가기와 안전 모드

### 1️⃣ 데스크톱에서 터미널 세션 이어가기 (`/resume`)

CLI에서 시작한 세션을 데스크톱 앱에서 이어갈 수 있어요.

```bash
# 데스크톱 앱에서 터미널 세션 선택 재개
> /resume
```

제목, 폴더, 브랜치로 검색해서 이어갈 세션을 고를 수 있어요.

### 2️⃣ 피드백 자동 초안

Claude가 문제를 감지하면 버그 리포트 초안을 자동으로 만들어줘요.
프롬프트 위에 카드가 뜨고, 확인 후 전송하거나 취소할 수 있어요.

```bash
# 수동으로 피드백 초안 목록 보기
> /feedback
```

### 3️⃣ 제한 모드 (`--restricted`)

평가 환경이나 공유 서버에서 Claude Code를 안전하게 실행할 때 사용해요.
명령 실행 도구를 제거하고, 파일 접근을 작업 디렉토리로만 제한해요.

```bash
# 명령 실행 없이 보안 리뷰만 수행
claude --restricted -p "review src/ for SQL injection risks"
```

---

## W36 (8월 31일~9월 4일) — 새 모델과 강력해진 도구들

### 1️⃣ Claude Fable 5.1 출시 🆕

100만 토큰 컨텍스트 지원. `fable` 별칭이 Fable 5.1을 가리켜요.
*(자세한 내용: [신규 모델 안내 문서](/next/new-models-oct2026))*

### 2️⃣ 백그라운드 컴퓨터 사용 (macOS)

Claude Code 데스크톱 앱에서 컴퓨터 사용이 백그라운드에서 실행돼요.
승인된 앱을 Claude가 보고 조작하는 동안 나는 다른 작업을 할 수 있어요.
Pro/Max 베타 중.

### 3️⃣ 라이브 diff 패널 (`/diff`)

풀스크린 렌더링에서 `/diff`가 이제 패널로 표시돼요.
파일 편집이 일어날 때마다 자동 갱신. 패널에서 줄을 선택해 다음 프롬프트에 붙일 수도 있어요.

```bash
> /diff
```

### 4️⃣ `/skill-doctor` — 사용하지 않는 스킬 찾기

스킬마다 컨텍스트 비용과 사용 빈도를 보여줘요. 쓰지 않는 스킬을 끄는 데 유용해요.

```bash
> /skill-doctor
```

---

## W37 (9월 7~11일) — 플러그인 평가와 창 분리

### 1️⃣ 플러그인 eval (`claude plugin eval`)

> 🍱 **비유**: 내가 만든 Claude 플러그인이 제대로 작동하는지 테스트 케이스를 돌려서 점수를 매겨줘요. 플러그인이 있을 때와 없을 때를 비교해서 얼마나 도움이 되는지도 알려줘요.

```bash
# 플러그인 루트 디렉토리에서
claude plugin eval init  # 테스트 케이스 자동 생성
claude plugin eval .     # 평가 실행 (점수표 출력)
```

결과는 터미널 표와 `evals/results/report.html`로 확인해요.

### 2️⃣ 데스크톱 팬 분리 창

데스크톱 앱의 diff 또는 터미널 패널을 **독립 창으로 분리**할 수 있어요.
두 번째 모니터로 드래그해서 Claude가 작업하는 동안 diff를 모니터링해요.

---

## 함께 참고하면 좋은 문서

- [Auto Mode 설정](/config/auto-mode-config)
- [크로스 세션 메시징 공식 문서](https://code.claude.com/docs/en/cross-session-messaging) `[공]`
- [자체 호스팅 환경 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart) `[공]`
- [출력 스타일 설정](https://code.claude.com/docs/en/output-styles) `[공]`
