---
title: "Hooks로 자동화하기"
description: "특정 상황에서 자동으로 실행되는 작업 설정하기"
category: "config"
order: 4
tags: ["자동화", "hooks", "이벤트"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## Hooks란?

**Hooks**는 특정 상황이 발생했을 때 자동으로 무언가를 실행하도록 하는 설정입니다. 마치 자동 수도꼭지처럼, 손을 가져다 대면 자동으로 물이 나오듯이, 정해진 이벤트가 발생하면 자동으로 동작합니다.

---

## 주요 Hooks 종류

### 1. PreToolUse — 도구 사용 전

```json
{
  "hooks": {
    "PreToolUse": {
      "handler": "command",
      "command": "echo 'AI가 파일을 수정하려고 합니다'"
    }
  }
}
```

**언제 실행?**
- AI가 파일을 읽기 전
- 터미널 명령을 실행하기 전
- 검증/확인이 필요할 때

---

### 2. PostToolUse — 도구 사용 후

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "echo '작업이 완료되었습니다'"
    }
  }
}
```

**언제 실행?**
- 파일 수정이 완료된 후
- 터미널 명령이 끝난 후
- 결과를 저장하거나 알림을 보낼 때

---

### 3. UserPromptSubmit — 사용자 입력 후

```json
{
  "hooks": {
    "UserPromptSubmit": {
      "handler": "command",
      "command": "date >> /tmp/usage.log"
    }
  }
}
```

**언제 실행?**
- 사용자가 메시지를 보낸 후
- AI가 응답하기 전
- 입력 기록, 검증, 필터링에 사용

---

## 3가지 Handler 타입

### 1. command — 셸 명령 실행

```json
{
  "handler": "command",
  "command": "echo 'Hello, World!'"
}
```

**예시:**
```json
{
  "handler": "command",
  "command": "git status"
}
```

---

### 2. prompt — AI에게 처리 위임

```json
{
  "handler": "prompt",
  "message": "사용자 입력이 안전한지 확인해줘"
}
```

**예시:**
```json
{
  "handler": "prompt",
  "message": "파일 수정 내용이 올바른지 검증해줘"
}
```

---

### 3. agent — 에이전트 호출

```json
{
  "handler": "agent",
  "subagent": "reviewer",
  "prompt": "코드 리뷰를 해줄 수 있나?"
}
```

---

## 실전 Hooks 예시

### 예시 1: 파일 수정 후 자동 Git 커밋

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "git add . && git commit -m 'Auto-commit by AI' || true"
    }
  }
}
```

<div class="note-circle">
  ○ `|| true`는 실패해도 에러 메시지를 안 보여줍니다
</div>

---

### 예시 2: 파이썬 파일 생성 후 자동 포맷팅

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "python -m black **.py"
    }
  }
}
```

---

### 예시 3: 민감한 파일 접근 차단

```json
{
  "hooks": {
    "PreToolUse": {
      "handler": "prompt",
      "message": "민감한 파일에 접근하려고 합니다. 정말 진행할까요?"
    }
  }
}
```

---

## Hooks 데이터 전달

Hook에 전달되는 정보는 JSON 형식입니다:

```json
{
  "toolName": "Write",
  "filePath": "/Users/mylee/file.txt",
  "toolInput": { ... },
  "timestamp": "2026-03-22T10:30:00Z"
}
```

**명령에서 사용:**
```bash
#!/bin/bash
data=$(cat)  # JSON 받기
tool_name=$(echo "$data" | jq -r '.toolName')
file_path=$(echo "$data" | jq -r '.filePath')

echo "Tool: $tool_name on file: $file_path"
```

---

## 프로젝트별 Hook 설정

### 웹 개발 프로젝트

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "npm run lint && npm run test"
    }
  }
}
```

---

### 파이썬 프로젝트

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "pylint **.py && black **.py"
    }
  }
}
```

---

### 문서 작성 프로젝트

```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "command",
      "command": "markdownlint **.md && aspell check **.md"
    }
  }
}
```

---

## ⚠️ Hooks 사용 시 주의사항

### 1. Exit Code 확인

```json
{
  "handler": "command",
  "command": "rm file.txt"
}
```

- Exit code 0 = 성공 → 계속 진행
- Exit code != 0 = 실패 → 작업 중단

---

### 2. 성능 고려

```json
❌ 시간 오래 걸리는 작업
{
  "command": "find . -type f | wc -l"  ← 수백만 파일이면 시간 오래 걸림
}

✅ 빠른 작업
{
  "command": "echo 'Quick check'"
}
```

---

### 3. 순환 참조 방지

```json
❌ 위험한 설정
{
  "PreToolUse": {
    "handler": "command",
    "command": "claude '뭐 할래?'"  ← 무한 반복!
  }
}
```

---

## 💡 쉽게 이해하기

Hooks는 **스마트홈의 자동화**와 같습니다.

- **Hook이 없으면:** 집에 들어올 때마다 불을 켜고 에어컨을 켜고...
- **Hook이 있으면:** 집에 들어오면 자동으로 불이 켜지고 에어컨이 켜짐
- **복잡한 Hook:** 집에 들어올 때 조명을 70% 밝기로 설정하고 음악을 틀기

마찬가지로:
- AI가 파일을 수정할 때마다 자동 테스트
- 코드 작성 후 자동 포맷팅
- 깃에 자동 커밋

---

## Hooks 문제 해결

### 문제: Hook이 실행되지 않음
```
확인 사항:
1. Hook 이름 맞는가? (대소문자 구분)
2. JSON 형식이 맞는가?
3. command 경로가 맞는가?
```

### 문제: Hook이 너무 자주 실행됨
```
해결책: 조건부 실행
"command": "[[ $file_path == *.py ]] && python format.py"
```

---

## 다음 단계

Hooks로 자동화했다면, 이제 **MCP 서버 연결**로 더 강력한 기능을 추가해봅시다!
