---
title: "settings.json 설정하기"
description: "클로드 코드의 동작 방식을 세부적으로 조정하는 설정 파일 (v2.1.92 기준 — effort 단순화, disableSkillShellExecution 반영)"
category: "config"
order: 2
tags: ["설정", "settings.json", "커스터마이제이션"]
lastUpdated: "2026-04-08"
---

## settings.json이란?

**settings.json**은 클로드 코드의 세부 동작을 제어하는 설정 파일입니다. 마치 스마트폰의 설정 앱에서 밝기, 소리, 알림을 조정하듯이, 당신의 AI 어시스턴트를 맞춤형으로 구성할 수 있습니다.

---

## 설정 파일은 어디에 두나?

### 1. 사용자 전체 설정 (글로벌)
```
~/.claude/settings.json       ← 모든 프로젝트에 적용
```

### 2. 프로젝트별 설정
```
프로젝트폴더/
└── .claude/settings.json     ← 이 프로젝트에만 적용
```

### 3. 로컬 임시 설정
```
프로젝트폴더/
└── .claude/settings.local.json   ← 개인용, git에 업로드하지 않음
```

<div class="note-circle">
  ○ 프로젝트 설정 > 글로벌 설정 순서로 우선적용됩니다
</div>

---

## 주요 설정 항목

### 1. 모델 선택

```json
{
  "model": "claude-opus-4-6"
}
```

선택지:
- `claude-opus-4-6` — 가장 강력한 모델 (**1M 토큰 컨텍스트**, Max/Team/Enterprise)
- `claude-sonnet-4-6` — 균형잡힌 속도와 성능 (**1M 토큰 컨텍스트**)
- `claude-haiku-4-5` — 빠르고 가벼움

<div class="note-circle">
○ <strong>Opus/Sonnet 4.6은 1M 토큰 컨텍스트</strong>를 지원해요. 기존 200K의 5배! 자세한 건 <a href="/docs/advanced/one-million-context">1M 컨텍스트 가이드</a>에서.
</div>

---

### 1-1. Effort Level — `low` / `medium` / `high`

```json
{
  "effort": "high"
}
```

<div class="note-star">
★ <strong>2026-04-04 v2.1.92에서 단순화됐어요</strong> — 기존 ultrafast/fast/balanced/thorough/ultrathink 5단계 → <strong>low / medium / high</strong> 3단계.
<br />★ Opus 4.6 + Max/Team은 기본값이 <code>high</code>예요.
<br />★ 현재 effort level이 로고/스피너에 자동 표시됩니다.
</div>

| 레벨 | 추천 용도 |
|---|---|
| `low` | 간단한 수정, 짧은 답변 — 빠르고 저렴 |
| `medium` | 일반적인 작업 (기본) |
| `high` | 복잡한 문제, 중요한 코드 — 느리지만 정확 |

---

### 2. 권한 설정 (Permissions)

```json
{
  "permissions": {
    "mode": "default",
    "allowlist": ["Bash(git:*)", "Read", "Write"],
    "denylist": ["Bash(rm:*)", "Bash(mv:*)"]
  }
}
```

**3가지 모드:**
- `default` — 매번 물어봄
- `ask` — 도구 사용 전 확인 (안전함)
- `allow` — 자동으로 허용 (빠름)

---

### 3. 환경 변수 (Environment)

```json
{
  "env": {
    "PROJECT_NAME": "내_프로젝트",
    "LANGUAGE": "korean",
    "OUTPUT_FORMAT": "markdown"
  }
}
```

<div class="note-star">
  ★ API 키는 여기에 직접 입력하지 마세요! `.env` 파일 사용
</div>

---

### 4. Hooks 설정

```json
{
  "hooks": {
    "PreToolUse": {
      "handler": "command",
      "command": "echo 'Tool about to run'"
    }
  }
}
```

**지원되는 이벤트:**
- `PreToolUse` — 도구 실행 전
- `PostToolUse` — 도구 실행 후
- `UserPromptSubmit` — 사용자 입력 전

---

### 5. 보안 설정 — 스킬 셸 실행 차단 (v2.1.91~)

```json
{
  "disableSkillShellExecution": true
}
```

**역할:** 스킬·커맨드·플러그인이 **내 컴퓨터에서 직접 셸(터미널)을 실행하지 못하도록 차단**

> 🍱 **비유로 설명하면**: 손님이 우리집 부엌을 쓰지 못하게 부엌 문을 잠그는 것과 같아요. 손님이 요리 레시피는 보여줄 수 있지만, 직접 불을 켜고 칼을 쓸 수는 없게 되죠.

**언제 써요?**
- 출처를 완전히 신뢰하지 못하는 **외부 스킬**을 설치해야 할 때
- 회사 컴퓨터 등 **보안이 중요한 환경**에서 작업할 때
- **민감한 파일**(재무·개인정보)이 있는 폴더에서 실험할 때

<div class="note-circle">
○ v2.1.91(2026-04-02)에 추가된 보안 옵션이에요. 켜두면 살짝 불편해지지만 훨씬 안전해집니다.
</div>

---

### 6. Agent Teams 활성화 (실험 기능)

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

**역할:** 여러 에이전트가 **서로 직접 소통하며 팀으로 일하도록** 활성화 (기본은 꺼져 있음)

<div class="note-star">
★ <strong>실험 기능입니다</strong> — Anthropic이 정식 출시 전까지 계속 변할 수 있어요. 자세한 건 <a href="/docs/advanced/agent-teams">에이전트 팀 가이드</a>.
</div>

---

## 기본 설정 예시

```json
{
  "model": "claude-sonnet-4-6",
  "permissions": {
    "mode": "ask",
    "allowlist": ["Read", "Write", "Bash(git:*)"]
  },
  "env": {
    "PROJECT_NAME": "myblog",
    "LANGUAGE": "korean"
  },
  "hooks": {
    "UserPromptSubmit": {
      "handler": "command",
      "command": "echo '사용자 입력 감지됨'"
    }
  }
}
```

---

## 보안을 위한 설정

### API 키 안전 관리

<mark>절대 settings.json에 API 키를 넣지 마세요!</mark>

**올바른 방법:**

1️⃣ `.env` 파일에 저장
```
OPENAI_API_KEY=sk-...
GITHUB_TOKEN=ghp_...
```

2️⃣ settings.json에서 참고
```json
{
  "apiKeyHelper": {
    "dotenv": ".env"
  }
}
```

3️⃣ 코드에서 사용
```python
import os
api_key = os.environ.get("OPENAI_API_KEY")
```

---

## 프로젝트별 설정 예시

### 웹 프로젝트
```json
{
  "model": "claude-sonnet-4-6",
  "permissions": {
    "allowlist": ["Read", "Write", "Bash(npm:*)"]
  },
  "env": {
    "PROJECT_TYPE": "web",
    "PORT": "3000"
  }
}
```

### 파이썬 프로젝트
```json
{
  "model": "claude-opus-4-6",
  "permissions": {
    "allowlist": ["Read", "Write", "Bash(python:*)"]
  },
  "env": {
    "PROJECT_TYPE": "python",
    "VENV_PATH": "venv"
  }
}
```

---

## 💡 쉽게 이해하기

settings.json은 **당신의 선호도를 AI에게 알려주는 프로필**입니다.

- **프로필이 없으면:** AI가 매번 같은 질문을 함
- **프로필이 있으면:** AI가 당신의 취향을 미리 알고 진행
- **여러 프로필:** 프로젝트마다 다른 설정 사용 가능

예를 들어:
- 회사 프로젝트: 강력한 모델 + 엄격한 권한
- 개인 프로젝트: 빠른 모델 + 자유로운 권한
- 학습 프로젝트: 균형잡힌 모델 + 중간 권한

---

## JSON 형식 주의

**틀린 예시:**
```json
{
  "model": "claude-sonnet-4-6"
  "permissions": {}  ← 쉼표 빠짐!
}
```

**올바른 예시:**
```json
{
  "model": "claude-sonnet-4-6",
  "permissions": {}
}
```

<div class="note-circle">
  ○ JSON은 규칙을 엄격히 지켜야 합니다
</div>

---

## 다음 단계

이제 설정을 했다면, **권한 시스템**을 자세히 이해해봅시다!
