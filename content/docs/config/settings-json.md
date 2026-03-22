---
title: "settings.json 설정하기"
description: "클로드 코드의 동작 방식을 세부적으로 조정하는 설정 파일"
category: "config"
order: 2
tags: ["설정", "settings.json", "커스터마이제이션"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

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
- `claude-opus-4-6` — 가장 강력한 모델 (추천)
- `claude-sonnet-4-6` — 균형잡힌 속도와 성능
- `claude-haiku-4-5` — 빠르고 가벼움

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
