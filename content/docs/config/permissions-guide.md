---
title: "권한 시스템 이해하기"
description: "클로드 코드가 할 수 있는 일과 할 수 없는 일을 제어하는 권한 체계 (v2.1.89 Recent 탭 추가)"
category: "config"
order: 3
tags: ["권한", "보안", "접근제어"]
lastUpdated: "2026-04-08"
---

## 권한 시스템이란?

**권한 시스템**은 AI 어시스턴트가 "뭘 할 수 있고 뭘 할 수 없는지" 정하는 보안 체계입니다. 마치 은행에서 계좌별로 인출 한도를 정하듯이, 각 도구(Tool)별로 허용 범위를 설정합니다.

---

## 3가지 권한 수준

### 1. ✅ Allow (자동 허용)
```
AI가 즉시 실행 — 확인 없음
```
- 빠르고 편리함
- 자주 쓰는 도구에만 설정
- 위험한 명령은 금지

### 2. ❓ Ask (매번 확인)
```
실행하기 전에 "실행할까?" 하고 물어봄
```
- 가장 안전함
- 기본값으로 권장
- 약간 느림

### 3. ❌ Deny (자동 거부)
```
실행 불가 — 이유 설명 후 거부
```
- 위험한 명령 차단
- 예: 전체 파일 삭제, 민감정보 접근

---

## 권한 설정 예시

### 기본 권한 수준 정하기

```json
{
  "permissions": {
    "mode": "ask"
  }
}
```

**3가지 기본 모드:**
- `"default"` — 도구마다 다르게 (권권권장)
- `"ask"` — 모든 도구는 물어봄
- `"allowlist"` — 명시된 도구만 허용

---

### 도구별 세부 권한

```json
{
  "permissions": {
    "allowlist": [
      "Read",              ← 파일 읽기는 항상 허용
      "Write",             ← 파일 쓰기도 허용
      "Bash(git:*)",       ← Git 명령만 허용
      "Bash(npm:*)"        ← npm 명령만 허용
    ],
    "denylist": [
      "Bash(rm:*)",        ← rm 삭제 명령 금지
      "Bash(sudo:*)"       ← sudo 명령 금지
    ]
  }
}
```

<div class="note-circle">
  ○ allowlist에 있는 도구는 Ask 확인 없이 실행됩니다
</div>

---

## 주요 도구별 권한

### 파일 작업
```json
{
  "Read": "파일 읽기",
  "Write": "파일 생성/수정",
  "Edit": "파일 부분 편집",
  "Glob": "파일 검색"
}
```

### 터미널 명령
```json
{
  "Bash(git:*)": "Git 사용 (Push, Pull, Commit)",
  "Bash(npm:*)": "Node.js 패키지 관리",
  "Bash(python:*)": "Python 실행",
  "Bash(rm:*)": "파일 삭제 (위험!)"
}
```

### 외부 연결
```json
{
  "WebSearch": "인터넷 검색",
  "WebFetch": "웹페이지 접근",
  "SendMessage": "팀 메시지 전송"
}
```

---

## 프로젝트별 권한 설정

### 안전한 설정 (개인 프로젝트)
```json
{
  "permissions": {
    "mode": "ask",
    "allowlist": ["Read", "Write", "Edit"]
  }
}
```

**특징:**
- 파일 작업만 자유로움
- 터미널 명령은 매번 확인
- 가장 안전함

---

### 개발자용 설정 (회사 프로젝트)
```json
{
  "permissions": {
    "allowlist": [
      "Read",
      "Write",
      "Edit",
      "Bash(git:*)",
      "Bash(npm:test)",
      "Bash(npm:build)"
    ],
    "denylist": [
      "Bash(rm:*)",
      "Bash(mv:*)",
      "Bash(sudo:*)"
    ]
  }
}
```

**특징:**
- 개발 작업은 자유로움
- 위험한 삭제/이동 명령은 금지
- 생산성과 안전성 균형

---

## Glob 패턴으로 세밀하게 제어

### 특정 폴더만 수정 허용
```json
{
  "allowlist": [
    "Write(/Users/mylee/Desktop/safe/**)",
    "Edit(/Users/mylee/Desktop/safe/**)"
  ],
  "denylist": [
    "Write(/Users/mylee/Desktop/sensitive/**)"
  ]
}
```

### 특정 파일 형식만 수정 허용
```json
{
  "allowlist": [
    "Write(**.md)",
    "Write(**.txt)",
    "Write(**.json)"
  ],
  "denylist": [
    "Write(**.py)",
    "Write(**.js)"
  ]
}
```

---

## 보안 체크리스트

<div class="note-star">
  ★ 다음 명령은 절대 Allow로 설정하지 마세요!
</div>

```json
❌ "Bash(rm:*)"        ← 전체 파일 삭제
❌ "Bash(mv:*)"        ← 파일 이동/이름변경
❌ "Bash(sudo:*)"      ← 관리자 권한
❌ "Bash(chmod:*)"     ← 권한 변경
```

**대신 Ask로 설정하세요:**
```json
{
  "mode": "ask"
}
```

---

## 💡 쉽게 이해하기

권한 시스템은 **신용카드 한도 설정**과 같습니다.

- **한도 없음:** 도둑이 카드를 훔치면 큰 손실
- **한도 설정:** 최대 손실액이 제한됨
- **카테고리별 한도:** 식당은 5만원, 쇼핑은 10만원
- **매번 승인:** 모든 사용을 사전 승인 (가장 안전함)

당신의 AI 어시스턴트도 마찬가지입니다:
- 위험한 일은 물어보게 설정
- 안전한 일은 자동으로 진행
- 민감한 폴더는 접근 금지

---

## 권한 오류 해결

### 문제: "Permission Denied" 오류
```
오류: Permission denied for Bash(npm:*)
```

**해결책:** settings.json에 추가
```json
{
  "allowlist": ["Bash(npm:*)"]
}
```

### 문제: 너무 자주 확인됨
```
해결책: Ask 빈도를 줄이기
"mode": "allow"로 변경하되, denylist로 위험한 것만 차단
```

---

## 🆕 Recent 탭 — 거부된 명령 모아보기 (v2.1.89~)

```bash
/permissions
```

**역할:** `/permissions` 명령어에 **Recent 탭**이 추가됐어요. 최근에 거부되었던 명령들을 한눈에 보고, 필요하면 **바로 다시 시도**할 수 있습니다.

> 🍱 **비유로 설명하면**: 카톡에서 "차단된 메시지 목록"을 보는 것과 비슷해요. 차단한 걸 다시 꺼내볼 수 있죠.

**활용:**
- 내가 실수로 거부한 명령을 다시 허용하고 싶을 때
- 어떤 명령이 자주 막혔는지 통계 파악
- 필요한 명령어를 allowlist에 추가할 후보 찾기

<div class="note-circle">
○ v2.1.89(2026-04-01)에 추가됐어요.
</div>

---

## 🔑 중단 없는 워크플로우 — 와일드카드 패턴 [R]

권한을 너무 촘촘히 물어보면 매번 "실행할까요?" 팝업이 떠서 집중이 깨져요. 커뮤니티 검증된 **3단계 계층 + 와일드카드 패턴**을 써봅시다.

### 3단계 우선순위
```
User (~/.claude/settings.json)     ← 전역
    ↓ 덮어씀
Project (./.claude/settings.json)  ← 프로젝트
    ↓ 덮어씀
Local (./.claude/settings.local.json) ← 개인용, gitignore
```

더 구체적인(아래쪽) 설정이 우선이에요.

### 와일드카드 패턴 예시

```json
{
  "permissions": {
    "mode": "ask",
    "allowlist": [
      "Read", "Write", "Edit",
      "Bash(git:*)",
      "Bash(npm:*)",
      "Bash(node:*)",
      "Bash(python:*)",
      "mcp__plugin_playwright_playwright__*"
    ],
    "denylist": [
      "Bash(rm -rf:*)",
      "Bash(sudo:*)"
    ]
  }
}
```

### 원칙: "돌이킬 수 있는 건 허용, 돌이킬 수 없는 건 확인"

| 종류 | 권한 설정 |
|---|---|
| **읽기·되돌릴 수 있는 작업** (read, git commit, test) | ✅ 자동 허용 |
| **돌이킬 수 없는 작업** (rm, db migration, push to main) | ❓ 매번 확인 |
| **외부에 영향** (Slack 메시지, 이메일 발송) | ❓ 매번 확인 |

> 🍱 **비유로 설명하면**: 집 청소는 아이에게 맡겨도 되지만, 현관문 열쇠는 매번 허락받게 하는 거예요. 되돌릴 수 없는 실수를 막는 게 핵심.

<div class="note-circle">
○ 출처: <code>[R]</code> Rajiv Pant "Stop Asking Me: Configuring Claude Code Permissions" (2026-03-31)
</div>

---

## 다음 단계

권한을 설정했다면, **Hooks로 자동화**를 배워봅시다!
