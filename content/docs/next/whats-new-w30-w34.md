---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7월~8월)"
description: "Opus 5 출시, 세션 간 메시지 전송, 자체 호스팅 환경, Auto 모드 기본화, /design 스킬 등 2026년 7~8월 주요 5주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "Auto모드", "セルフホスト", "cross-session"]
category: "next"
order: 17
lastUpdated: "2026-08-31"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.
<br />★ 2026년 7월 20일 ~ 8월 21일 5주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Claude Opus 5 출시**, iOS 시뮬레이터 뷰, Claude Security 플러그인 |
| **W32** | 8/3~8/7 | **세션 간 메시지 전송**, 자체 호스팅 환경, **Auto 모드 기본화** |
| **W33** | 8/10~8/14 | Desktop 자동 재시작, Fork 모드 기본화, GitLab 지원 |
| **W34** | 8/17~8/21 | **/design 스킬**, Concise 출력 스타일, 모바일에서 세션 시작 |

> 📌 W31은 공식 문서에 게시되지 않았습니다 (공식 발표 기준).

---

## W30 · 7월 20~24일 — Opus 5 시대 시작 ⭐⭐⭐

### 🚀 Claude Opus 5 — 1M 토큰 컨텍스트

**Claude Opus 5**가 새로운 기본 Opus 모델로 등장했어요. 가장 큰 변화는 **1백만 토큰(1M) 컨텍스트 창**!

> 🍱 **비유로 설명하면**: 이전엔 클로드가 한 번에 읽을 수 있는 책의 분량이 소설 300권이었다면, 이제는 **1,500권**을 한 번에 읽을 수 있어요.

```bash
/model claude-opus-5   # Opus 5로 전환
```

**Fast Mode도 Opus 5로 이전되며 가격 인하!**
- 기존: Opus 4.8, $30/$150 per MTok
- **변경: Opus 5, $10/$50 per MTok** (3분의 1 가격!)

### 📱 iOS 시뮬레이터 뷰 (Desktop macOS)

Claude Code Desktop에서 **iOS 앱을 직접 시뮬레이터로 테스트**할 수 있게 됐어요.

```text
> 앱 빌드하고 시뮬레이터에서 온보딩 플로우 확인해줘
```

클로드가 자동으로 시뮬레이터 패널을 열고, 앱을 직접 탭하면서 확인해요.

### 🛡️ Claude Security 플러그인

코드베이스 **취약점을 자동으로 스캔**하는 플러그인이 출시됐어요.

```bash
/plugin install claude-security@claude-plugins-official
/reload-plugins
/claude-security   # 스캔 시작
```

> 🍱 **비유로 설명하면**: 집 보안 점검 전문가를 불러서 "이 집에서 도둑이 들어올 만한 곳 다 찾아줘"하고 맡기는 것과 같아요. 취약점을 찾고 수정 패치까지 제안해줘요.

---

## W32 · 8월 3~7일 — 세션끼리 대화, 내 서버에 클라우드 ⭐⭐⭐

### 💬 세션 간 메시지 전송 (Cross-session Messaging)

**여러 개의 Claude Code 세션이 서로 메시지를 주고받을 수** 있게 됐어요!

> 🍱 **비유로 설명하면**: 이전엔 클로드가 여러 탭에서 각자 일하는 "각자도생"이었다면, 이제는 **같은 팀 직원끼리 메모를 주고받는 것처럼** 서로 소통할 수 있어요.

```text
# 세션1에서 세션2로 메시지 보내기
payments API 작업 중인 세션한테 users.name이 users.display_name으로 바뀐 거 알려줘

# 또는 프롬프트에서 @ 멘션
@payments-session users.name → users.display_name 변경됐어

# 어떤 세션들이 있는지 확인
/list-agents
```

세션2에서는 `Ctrl+O`를 눌러 메시지를 확인할 수 있어요.

### 🏗️ 자체 호스팅 환경 (Self-hosted Environments)

**우리 회사 서버**에서 Claude Code 클라우드 세션을 돌릴 수 있게 됐어요 (Team/Enterprise 플랜).

> 🍱 **비유로 설명하면**: 이전엔 클로드 클라우드 세션이 무조건 Anthropic 서버에서 실행됐다면, 이제는 **우리 회사 전용 서버실**에서 클로드를 돌릴 수 있어요. 내부 서비스 접근, 보안 정책 적용이 가능해져요.

```bash
# 한 번만 설정하면 됩니다
claude self-hosted-runner setup

# 상태 확인: claude.ai/admin-settings/cloud-environments
```

### 🤖 Auto 모드가 기본이 됩니다!

**2026년 8월 14일부터 Auto 모드가 기본 권한 모드**로 바뀌었어요 (Pro/Max/Team 플랜).

| 이전 | 이후 |
|---|---|
| Default 모드 (매번 승인) | **Auto 모드 (AI가 안전하게 판단)** |
| 파일 수정마다 "허용하시겠습니까?" | 안전 분류기가 판단 후 자동 실행 |

Auto 모드 분류기 호출은 **사용량 한도에서 제외**돼요 — 더 자유롭게 쓸 수 있어요.

```json
// 미리 Auto 모드로 설정하기
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

> ⚠️ **기존 설정 유지**: 직접 설정한 모드가 있다면 그대로 유지돼요. 단 한 번의 전환 프롬프트가 나타나면 수락하면 Auto로 바뀌어요.

---

## W33 · 8월 10~14일 — 더 편리해진 일상 기능

### ♻️ Desktop 자동 재시작 (자동 계속)

세션 한도에 걸려도 **리셋 후 자동으로 이어서 실행**!

Desktop 앱의 사용 한도 카드에서 **"Auto-continue when limits reset"** 체크박스 하나로 설정 가능해요.

> 🍱 **비유로 설명하면**: 이전엔 클로드가 일하다가 "오늘 할당량 다 썼어요"라고 멈추면 직접 재시작 버튼을 눌러야 했다면, 이제는 알아서 재충전 후 **작업 재개**해요.

### 🍴 Fork 모드 기본 활성화

`/subtask` 또는 Fork 모드가 이제 기본값이에요. 서브에이전트가 실행될 때 **현재까지의 대화 맥락을 그대로 이어받아** 시작해요.

```text
/subtask 지금까지 얘기한 파서 변경 사항에 대한 단위 테스트 작성해줘
```

대화 흐름이 끊기지 않아서 매번 재설명할 필요가 없어요.

비활성화하려면: 환경 변수 `CLAUDE_CODE_FORK_SUBAGENT=0`

### 🦊 GitLab 지원 대폭 강화

- GitLab MR URL로 `--worktree` 실행 가능
- 플러그인 마켓플레이스에서 GitLab URL 직접 지원
- GitLab 토큰(`glpat-`, `glrt-`) 자동 마스킹 (보안 강화)

```bash
# GitLab MR을 worktree로 바로 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

### 📋 기타 W33 변경

- `/code-review`에서 `/review` 별칭 추가
- Opus 5/Sonnet 5 등 최신 모델에서 할 일 추적 도구(TaskCreate 등) **기본 비활성화**
  - 필요하면 `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`로 활성화
- VS Code 확장: 세션 그룹 정리 기능 추가

---

## W34 · 8월 17~21일 — 디자인, 간결함, 스마트폰 ⭐⭐

### 🎨 `/design` 스킬 — AI가 UI 초안을 아트보드로

새로운 `/design` 스킬로 클로드가 **UI 아트보드(Artboard)를 직접 그려줘요!**

```text
> /design 설정 페이지를 실제 사용 패턴에 맞게 재설계해줘
```

클로드가 아트보드 링크를 출력해요. 브라우저에서 열면 **시각적으로 편집** 가능하고, 맘에 드는 안을 골라서 구현 요청할 수 있어요.

> 🍱 **비유로 설명하면**: 인테리어 디자이너한테 "우리 집 거실 새로 꾸며줘"라고 하면 여러 안을 시각 자료로 보여주고, 고른 안을 실제로 시공하는 것과 같아요.

### 📝 Concise 출력 스타일

새로운 "**Concise**" 출력 스타일이 추가됐어요. 전문가 수준 사용자를 위한 스타일 — 결과부터 보여주고 군더더기 없이 간결하게!

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → Output style 에서 선택 가능.

> 💡 에러 보고, 보안 경고, 위험 작업 확인 등은 Concise 모드에서도 **항상 완전한 내용**으로 표시돼요.

### 📱 스마트폰에서 내 PC 세션 시작

스마트폰 Claude 앱의 Code 탭에서 **내 PC에 새 Claude Code 세션을 바로 시작**할 수 있어요.

PC에서 `claude remote-control` 한 번 실행해두면, 폰 앱에 내 PC가 카드로 표시돼요.

```bash
# PC에서 한 번 실행
claude remote-control
```

**Remote Control이 정식 출시(GA)** 됐어요. (기존 리서치 프리뷰에서 졸업!)

### 📋 기타 W34 변경

| 기능 | 내용 |
|---|---|
| 자동 계속 설정 | `/config` → "Continue automatically at usage limit" |
| 맞춤법 검사 | `spellcheck` 설정 켜면 입력 중 오타 밑줄 (aspell/hunspell 필요) |
| GitLab MR 뱃지 | 푸터에 `!N` 뱃지 표시 |
| 환경변수 | `ANTHROPIC_DEFAULT_MODEL`로 기본 모델 지정 |
| 프롬프트 마크다운 | 내가 입력한 프롬프트도 마크다운으로 렌더링 |
| `Ctrl+W` 동작 | `keybindingFlavor: "readline"` 설정 시 bash 스타일로 변경 |

---

## 이 기간의 핵심 변화 정리

| 우선순위 | 기능 | 이유 |
|---|---|---|
| ⭐⭐⭐ | **Auto 모드 기본화** | 매번 승인 없이 AI가 알아서 안전하게 |
| ⭐⭐⭐ | **Opus 5 + Fast Mode 가격 인하** | 고성능을 더 저렴하게 |
| ⭐⭐⭐ | **세션 간 메시지** | 멀티세션 협업 혁신 |
| ⭐⭐ | **자체 호스팅 환경** | 기업 보안 요구사항 충족 |
| ⭐⭐ | **/design 스킬** | AI 주도 UI 프로토타이핑 |
| ⭐⭐ | **Fork 모드 기본화** | 서브에이전트 컨텍스트 연속성 |

---

<div class="note-star">
★ 더 자세한 내용은 공식 What's New 페이지를 참고하세요:
<br />W30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
<br />W32: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a>
<br />W33: <a href="https://code.claude.com/docs/en/whats-new/2026-w33">code.claude.com/docs/en/whats-new/2026-w33</a>
<br />W34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">code.claude.com/docs/en/whats-new/2026-w34</a>
</div>
