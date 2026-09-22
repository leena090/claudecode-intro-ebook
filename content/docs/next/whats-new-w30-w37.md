---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7~9월)"
description: "Opus 5 기본 전환, 세션 간 메시지, 자가 호스팅 환경, Auto 모드 기본 적용, Fable 5.1, /skill-doctor, plugin eval 등 8주치 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "Opus5", "AutoMode", "셀프호스팅", "Fable51", "신기능"]
category: "next"
order: 18
lastUpdated: "2026-09-22"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a><br />
★ W30(2026-07-20) ~ W37(2026-09-11) 공식 발표 기준 정리
</div>

## 이번 8주의 핵심 요약

| 주차 | 핵심 변화 |
|---|---|
| **W30** | 🤖 Opus 5 출시 + Fast Mode 전환, 📱 iOS 시뮬레이터 패널 |
| **W32** | 💬 세션 간 메시지, 🏠 자가 호스팅 환경, 🔓 Auto 모드 기본 적용 |
| **W33** | 🔁 Auto-continue, 🍴 Fork 모드 기본 활성화, GitLab 지원 |
| **W35** | 📂 Desktop ↔ CLI /resume, 📋 /feedback, 🔒 Restricted 모드 |
| **W36** | ✨ Fable 5.1 출시, 🖥️ 백그라운드 컴퓨터 사용, /diff 패널 |
| **W37** | 🧪 plugin eval, 🪟 Desktop 패널 별도 창 분리 |

---

## W30 · 7월 20~24일: Opus 5 + iOS 시뮬레이터

### 🤖 Claude Opus 5 출시

비유하자면 Opus 4.7이 "고성능 SUV"라면 Opus 5는 "스포츠 세단"처럼 더 강력해졌어요.

**주요 특징**:
- Max, Team Premium, Enterprise, Anthropic API에서 **기본 Opus 모델**로 전환
- **1M 토큰 컨텍스트 창** 지원 (API, Max/Team/Enterprise 플랜)
- **Fast Mode가 Opus 5로 이전**: `$10/$50 per MTok` (입력/출력)

```text
> /model claude-opus-5
```

### 📱 Desktop iOS 시뮬레이터 패널 (Public Beta)

Mac에서 Claude Code Desktop을 쓴다면 iOS 앱 개발이 훨씬 쉬워졌어요. Claude가 시뮬레이터 앱을 빌드하거나 테스트할 때, 화면 옆에 **실시간 기기 화면**이 표시돼요.

- Pro, Max, Team 플랜에서 Public Beta
- Xcode + iOS 플랫폼 필요, Desktop v1.24012.0 이상

### 🔐 Claude Security 플러그인

코드베이스 취약점을 자동으로 찾아주는 플러그인이에요.

```text
> /plugin install claude-security@claude-plugins-official
> /claude-security
```

---

## W32 · 8월 3~7일: 세션 간 메시지 + 자가 호스팅 + Auto 모드 기본화

### 💬 세션 간 메시지 (Cross-Session Messaging)

여러 Claude Code 세션이 **서로 메시지를 주고받을 수 있어요**. 마치 팀원 AI들이 서로 소통하는 느낌이에요.

```text
> Tell the session working on the payments API that users.name is now users.display_name
```

- `/list-agents`로 연결 가능한 세션 목록 확인
- macOS · Linux 지원, v2.1.224 이상

### 🏠 자가 호스팅 환경 (Self-Hosted Environments)

회사 내부 서버에서 Claude Code 클라우드 세션을 실행할 수 있어요. Team · Enterprise 플랜 Public Beta.

```bash
claude self-hosted-runner setup
```

> 관리자 설정에서 **Allow self-hosted environments**를 먼저 활성화해야 해요.

### 🔓 Auto 모드가 기본값으로 (8월 14일~)

**8월 14일부터** Pro, Max, Team 플랜 신규 세션에서 Auto 모드가 기본으로 켜져요.

```json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

> 기존에 다른 기본값을 설정했다면 그대로 유지돼요. Auto 모드 분류기 호출은 사용 한도에서 제외됩니다.

⚠️ **이번 W32에서 제거된 기능**: `/ultraplan` 명령어와 Ultraplan 기능이 완전히 제거됐어요. 대신 Plan 모드나 Claude Code on the Web을 사용하세요.

---

## W33 · 8월 10~14일: 자동 재개 + Fork 모드 기본 활성화

### 🔁 사용 한도 초과 후 자동 재개 (Desktop)

Desktop Code 탭에서 세션 한도를 초과했을 때 **"Auto-continue when limits reset"** 체크박스가 생겼어요. 체크하면 한도가 초기화될 때 자동으로 이어서 작업해요.

### 🍴 Fork 모드 기본 활성화

서브에이전트가 이제 **현재 대화의 전체 컨텍스트를 그대로 물려받는(fork) 방식**이 기본이 됐어요. 배경 설명을 반복할 필요가 없어요.

```text
> /subtask draft unit tests for the parser changes so far
```

끄고 싶다면: `CLAUDE_CODE_FORK_SUBAGENT=0`

### 🦊 GitLab Merge Request 지원

`--worktree` 옵션에 GitLab Merge Request URL을 직접 넣을 수 있어요.

```bash
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

---

## W35 · 8월 24~28일: Desktop/CLI 통합 + /feedback + Restricted 모드

### 📂 CLI 세션을 Desktop에서 이어받기 (`/resume`)

터미널에서 작업하다가 Desktop으로 이어가고 싶다면:

```text
> /resume
```

제목, 폴더, 브랜치로 세션을 검색하고 그대로 이어받을 수 있어요.

### 📋 Claude가 직접 버그 리포트 초안 작성 (`/feedback`)

도구가 계속 실패하거나 Claude가 실수했을 때, 이제 Claude가 직접 피드백 리포트 초안을 써줘요. 검토 후 보내거나 취소할 수 있어요.

```text
> /feedback
```

### 🔒 Restricted 모드 (`--restricted`)

평가 하네스나 공유 서버 환경을 위한 안전 모드예요. 파일 실행 및 Bash 명령어 도구가 비활성화돼요.

```bash
claude --restricted -p "review src/ for SQL injection risks"
```

---

## W36 · 8월 31일 ~ 9월 4일: Fable 5.1 + 백그라운드 컴퓨터 사용

### ✨ Claude Fable 5.1 출시

`fable` 별칭이 이제 **Fable 5.1**을 가리켜요. v2.1.257 이상 필요.

```text
> /model fable
```

### 🖥️ 백그라운드 컴퓨터 사용 (Desktop, Beta)

macOS Desktop에서 Claude가 **당신이 다른 작업을 하는 동안** 앱을 사용할 수 있어요. Pro · Max 플랜 베타.

### 📊 실시간 /diff 패널

전체화면 렌더링 모드에서 `/diff`가 이제 대화 옆에 패널로 열려요. Claude가 파일을 편집할 때마다 실시간으로 변경 내역이 업데이트돼요.

### 🩺 /skill-doctor

어떤 스킬이 컨텍스트를 낭비하고 있는지 확인하는 명령어예요.

```text
> /skill-doctor
```

---

## W37 · 9월 7~11일: Plugin Eval + Desktop 패널 분리

### 🧪 `claude plugin eval` — 플러그인 테스트

플러그인이 실제로 잘 작동하는지 테스트 케이스로 검증할 수 있어요.

```bash
# 테스트 스위트 초안 생성 (Claude가 작성해줌)
claude plugin eval init

# 모든 케이스 채점
claude plugin eval .
```

결과 표와 상세 리포트(`evals/results/report.html`)가 생성돼요.

### 🪟 Desktop 패널을 별도 창으로 분리

Desktop 앱에서 diff나 터미널 패널을 **별도 창으로 꺼낼 수** 있어요. 듀얼 모니터 사용자에게 유용해요. 다시 붙이는 것도 가능해요.

### 기타 눈에 띄는 소식

| 기능 | 내용 |
|---|---|
| `maxEffortLevel` 설정 | Amazon Bedrock, Google Cloud, Azure 등에서도 노력 수준 상한 설정 가능 |
| VS Code 에이전트 맵 | 에이전트 수 클릭 → 서브에이전트 트랜스크립트 열기 |
| 프롬프트 박스 중간에 `/` | 명령어 목록 자동 완성 팝업 |

---

## 정리: 가장 중요한 3가지 변화

1. **Auto 모드 기본화** — Pro/Max/Team에서 이제 별도 설정 없이 자동 권한 처리
2. **Opus 5 전환** — Fast Mode가 Opus 5 기준으로 재설정 ($10/$50/MTok)
3. **Fable 5.1 출시** — `/model fable`로 즉시 전환 가능

---

## 관련 문서

- [Fable 5.1 · Mythos 5.1 상세](/docs/next/fable51-mythos51)
- [W25~W29 이전 업데이트](/docs/next/whats-new-w25-w29)
- [Self-hosted 환경 설정](/docs/advanced/self-hosted-environments)
- [Auto 모드 설정 가이드](/docs/advanced/auto-mode-config)
