---
title: "Hooks로 자동화하기"
description: "특정 상황에서 자동으로 실행되는 작업 설정하기 — CLAUDE.md와의 결정적 차이"
category: "config"
order: 4
tags: ["자동화", "hooks", "이벤트"]
lastUpdated: "2026-04-08"
---

## Hooks란?

**Hooks**는 특정 상황이 발생했을 때 자동으로 무언가를 실행하도록 하는 설정입니다. 마치 자동 수도꼭지처럼, 손을 가져다 대면 자동으로 물이 나오듯이, 정해진 이벤트가 발생하면 자동으로 동작합니다.

---

## 🔑 Hooks vs CLAUDE.md — 결정적 차이

가장 중요한 포인트부터 말씀드릴게요. 많은 분들이 헷갈리는 부분입니다.

| 비교 | CLAUDE.md | Hooks |
|---|---|---|
| **성격** | 권고 (advisory) | **강제 (deterministic)** |
| **Claude가 무시할 수 있나?** | ✅ 가능 (AI 판단) | ❌ 불가능 (무조건 실행) |
| **언제 쓰나?** | 취향, 스타일, 원칙 | **보안, 안전, 절대 규칙** |
| **예시** | "한국어로 답해줘" | "rm -rf 실행 전 차단" |

> 🍱 **비유로 설명하면**:
> - **CLAUDE.md = 가정 교육** — "밥 먹기 전에 손 씻으렴" (말해줘도 가끔 빼먹음)
> - **Hooks = 자동 수도꼭지** — 아무리 급해도 물이 나와야 뭘 하든 함 (빼먹을 수 없음)

**실전 원칙**:
- **돌이킬 수 없는 작업**(파일 삭제, DB 수정, 외부 발송)은 **반드시 Hooks**로 관리
- **취향이나 원칙**은 CLAUDE.md로 충분

---

## 💎 커뮤니티 검증 필수 Hook 3종 [R]

몇 달 써본 개발자들이 "이건 무조건 있어야 한다"고 공통 추천하는 Hook 3가지입니다.

### 1. `block-dangerous-commands.js` — rm -rf 차단

```javascript
// PreToolUse 훅: Bash 실행 전 위험 명령 차단
if (tool === 'Bash' && /rm\s+-rf/.test(command)) {
  return { block: true, reason: 'rm -rf 차단 — 수동 확인 필요' };
}
```

### 2. `protect-secrets.js` — .env 파일 읽기 차단

```javascript
// PreToolUse 훅: Read 시 민감 파일 차단
if (tool === 'Read' && /\.(env|pem|key)$/.test(path)) {
  return { block: true, reason: '민감 파일 접근 차단' };
}
```

### 3. `auto-stage.js` — 파일 수정 후 자동 git add

```javascript
// PostToolUse 훅: Edit/Write 성공 후 자동 스테이징
if (['Edit', 'Write'].includes(tool)) {
  exec(`git add "${path}"`);
}
```

<div class="note-circle">
○ 출처: <code>[R]</code> Mustafa Morbel "Taming Claude Code: A Guide to CLAUDE.md and Hooks" (2026-03-16)
</div>

---

## Hook 이벤트 목록 (현재 14가지)

Claude Code는 현재 **14가지 Hook 이벤트**를 지원합니다. 2026년 초에 대폭 확장되었습니다.

| 이벤트 | 발생 시점 |
|--------|---------|
| `PreToolUse` | 도구 사용 직전 |
| `PostToolUse` | 도구 사용 직후 |
| `UserPromptSubmit` | 사용자 메시지 전송 후 |
| `InstructionsLoaded` | CLAUDE.md 등 지시파일이 로드될 때 |
| `PostCompact` | 대화 압축(/compact) 완료 후 |
| `FileChanged` | 파일이 외부에서 변경될 때 |
| `TaskCreated` | 새 작업이 생성될 때 |
| `CwdChanged` | 작업 디렉토리가 변경될 때 |
| `PermissionDenied` | 권한 요청이 거부될 때 |
| `SessionStart` | 세션 시작 시 |
| `SessionEnd` | 세션 종료 시 |
| `ModelChanged` | AI 모델 변경 시 |
| `ErrorOccurred` | 에러 발생 시 |
| `AgentSpawned` | 서브에이전트가 생성될 때 |

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

### 4. http — 원격 URL로 POST 전송 (신규)

```json
{
  "handler": "http",
  "url": "https://my-server.com/webhook",
  "method": "POST"
}
```

**특징:**
- Hook 발생 시 JSON 데이터를 지정한 URL로 자동 전송
- 슬랙 알림, 외부 서버 연동, 로그 수집에 활용
- 응답 코드로 Hook 성공/실패 판단

**예시:**
```json
{
  "hooks": {
    "PostToolUse": {
      "handler": "http",
      "url": "https://hooks.slack.com/services/xxx/yyy/zzz",
      "method": "POST"
    }
  }
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
