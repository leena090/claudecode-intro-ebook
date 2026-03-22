---
title: "CLAUDE.md 작성 가이드"
description: "클로드에게 프로젝트별 지시사항을 남기는 방법"
category: "config"
order: 1
tags: ["설정", "CLAUDE.md", "지시사항"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## CLAUDE.md란?

**CLAUDE.md**는 당신의 프로젝트에 대한 "특별 지시사항 파일"입니다. 마치 마법사에게 특수한 주문을 가르치는 것처럼, AI에게 당신의 프로젝트 규칙을 미리 알려줍니다.

> 예시: "이 프로젝트는 항상 한국어로 대답해", "이 파일은 건드리지 마", "이 방식은 사용 금지"

---

## CLAUDE.md 파일은 어디에 두나?

### 1. 프로젝트별 지시사항
프로젝트 폴더의 루트에 놓으세요:
```
내_프로젝트/
├── .claude/
│   └── CLAUDE.md        ← 프로젝트 전용 지시사항
├── src/
└── README.md
```

### 2. 모든 프로젝트 공통 지시사항
홈 폴더에 글로벌 파일을 놓으세요:
```
~/.claude/CLAUDE.md       ← 모든 프로젝트에 적용
```

<div class="note-circle">
  ○ 프로젝트별 CLAUDE.md가 글로벌 파일보다 우선순위가 높습니다
</div>

---

## CLAUDE.md에 무엇을 쓸까?

### 예시 1: 기본 구조

```markdown
---
title: "우리 블로그 웹사이트 프로젝트"
---

## 프로젝트 개요
- 목적: 회사 블로그 제작
- 언어: 파이썬 + HTML + CSS
- 기간: 2025년 3월 ~ 4월

## 꼭 지켜야 할 규칙

### 코딩 규칙
- 파일명은 영문 소문자만 사용
- 주석은 한국어로 작성
- 모든 함수에 설명 달기

### 금지 사항
- database.py 파일은 절대 수정 금지
- API 키는 코드에 직접 입력 금지

### AI 지시사항
- 모든 응답은 한국어로
- 코드 설명할 때는 3줄 이상 작성
```

### 예시 2: 개발 워크플로우

```markdown
## 개발 진행 규칙

### 파일 수정 전에
1. research.md에 조사 내용 저장
2. plan.md에 계획 작성 및 승인 대기
3. 승인 후 구현 시작

### 작업 완료 후
1. 테스트 실행 (npm test)
2. 커밋 메시지 작성
3. GitHub에 push
```

---

## 길이 제한: 200줄 원칙

<mark>CLAUDE.md는 200줄을 넘기지 않도록 하세요</mark>

너무 길면:
- AI가 모든 지시사항을 읽지 못할 수 있음
- 중요한 내용이 묻힘
- 집중력 분산

**해결책: 파일 분할하기**

```markdown
## 규칙

@import "rules/coding-standard.md"
@import "rules/security-checklist.md"
@import "rules/deployment-process.md"
```

이렇게 하면:
- CLAUDE.md는 간단하게 유지
- 상세 규칙은 별도 파일에 관리
- AI가 필요할 때 해당 파일만 읽음

---

## 폴더 구조로 관리하기

```
.claude/
├── CLAUDE.md                    ← 메인 지시사항
├── rules/
│   ├── coding-standard.md       ← 코딩 규칙
│   ├── security-checklist.md    ← 보안 규칙
│   └── deployment-process.md    ← 배포 규칙
├── templates/
│   ├── commit-message.txt       ← 커밋 메시지 템플릿
│   └── pr-template.md           ← PR 작성 템플릿
└── docs/
    ├── architecture.md          ← 아키텍처
    └── api-reference.md         ← API 문서
```

---

## CLAUDE.md 작성 팁

### ✅ 좋은 지시사항
```markdown
✓ 구체적이고 명확함
✓ 이유를 함께 설명
✓ 예시 포함
✓ 우선순위 표시
```

### ❌ 나쁜 지시사항
```markdown
✗ "항상 최고의 품질로" (모호함)
✗ "빨리 작업해" (실행 불가능)
✗ "안 된다" (이유 없음)
```

### 좋은 예시
```markdown
## 파일 이름 규칙
- 형식: snake_case (예: user_profile.py)
- 이유: Python 표준 관례, 가독성
- 예외: config 폴더의 파일은 camelCase 사용

✗ NOT: UserProfile.py
✓ OK: user_profile.py
```

---

## 💡 쉽게 이해하기

CLAUDE.md는 **자동차 사용 설명서**와 같습니다.

- **설명서가 없으면:** 운전자가 헤매고 실수
- **설명서가 있으면:** 어떻게 사용해야 하는지 명확
- **설명서가 너무 길면:** 아무도 읽지 않음
- **설명서가 정리되면:** 쉽게 참고하고 따름

당신이 CLAUDE.md를 잘 작성할수록, AI가 당신의 의도를 정확히 이해하고 도와줍니다.

---

## 다음 단계

CLAUDE.md 다음은 **settings.json**으로 보안과 권한을 설정합니다!
