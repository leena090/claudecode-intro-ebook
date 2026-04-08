---
title: "CLAUDE.md 작성 가이드"
description: "클로드에게 프로젝트별 지시사항을 남기는 방법 (3단계 계층 구조 완벽 가이드)"
category: "config"
order: 1
tags: ["설정", "CLAUDE.md", "지시사항"]
lastUpdated: "2026-04-08"
---

## CLAUDE.md란?

**CLAUDE.md**는 당신의 프로젝트에 대한 "특별 지시사항 파일"입니다. 마치 마법사에게 특수한 주문을 가르치는 것처럼, AI에게 당신의 프로젝트 규칙을 미리 알려줍니다.

> 예시: "이 프로젝트는 항상 한국어로 대답해", "이 파일은 건드리지 마", "이 방식은 사용 금지"

<div class="note-star">
★ <strong>Claude Code 창시자 Boris Cherny의 조언</strong> <code>[x]</code>
<br /><em>"There is no one correct way to use Claude Code — it's intentionally built in a way that you can use it, customize it, and hack it however you like."</em>
<br />
(정답은 없어요. 자신만의 방식으로 쓰시면 됩니다.)
<br /><br />
→ Boris 본인도 CLAUDE.md를 <strong>약 2,500토큰 / 100줄 이내</strong>로 유지한다고 해요. 길다고 좋은 게 아닙니다.
</div>

---

## CLAUDE.md 3단계 계층 구조 — 공식과 커뮤니티 권장 <code>[R]</code>

Claude Code는 CLAUDE.md를 **세 개의 계층**으로 읽어요. 각각 목적이 다릅니다.

| 계층 | 파일 위치 | 역할 | git 관리 |
|---|---|---|---|
| **1. 개인 전역** | `~/.claude/CLAUDE.md` | 내 모든 프로젝트 공통 취향 (한국어 답변, 존댓말 등) | ❌ (내 컴퓨터에만) |
| **2. 팀 공유** | `./CLAUDE.md` (프로젝트 루트) | 팀원 모두 공유하는 프로젝트 규칙 | ✅ git 커밋 |
| **3. 개인 머신별** | `./CLAUDE.local.md` | 내 컴퓨터에서만 쓰는 임시 설정 | ❌ gitignore |

> 🍱 **비유로 설명하면**: 회사의 **취업 규칙(계층 1, 개인 전역)** + **팀 내부 규정(계층 2, 팀 공유)** + **내 책상 메모(계층 3, 개인)** 와 같아요. 각각 적용 범위가 다르죠.

### 우선순위: 구체적인 게 이겨요

```
~/.claude/CLAUDE.md (개인 전역)
        ↓ 덮어씀
./CLAUDE.md (팀 공유)
        ↓ 덮어씀
./CLAUDE.local.md (개인 머신)
```

같은 규칙이 충돌하면 **아래쪽(더 구체적)** 이 이겨요.

### 하위 디렉토리 CLAUDE.md도 가능

```
프로젝트/
├── CLAUDE.md                ← 전체 프로젝트 규칙
├── backend/
│   └── CLAUDE.md            ← backend 폴더 작업 시만 로드
└── frontend/
    └── CLAUDE.md            ← frontend 폴더 작업 시만 로드
```

Claude가 해당 폴더에서 작업할 때만 그 폴더의 CLAUDE.md가 함께 읽혀요.

<div class="note-circle">
○ 출처: <code>[R]</code> Mustafa Morbel "Taming Claude Code: A Guide to CLAUDE.md and Hooks" (2026-03-16, Medium)
</div>

---

## CLAUDE.md 파일은 어디에 두나? (요약)

### 1. 프로젝트별 지시사항
프로젝트 폴더의 루트에 놓으세요:
```
내_프로젝트/
├── CLAUDE.md            ← 프로젝트 전용 지시사항 (git 공유)
├── CLAUDE.local.md      ← 개인 머신 전용 (gitignore)
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

## ⭐ 커뮤니티 검증 팁 — 4가지 핵심 원칙

### 1. 규칙의 "왜(WHY)"를 설명하세요 [R]

나쁜 예:
```markdown
- snake_case로 쓸 것
```

좋은 예:
```markdown
- snake_case로 쓸 것
  - **이유**: Python 표준이고, 팀원 대부분이 Python 출신이라 가독성 좋음
  - **예외**: React 컴포넌트는 PascalCase
```

"왜"가 있으면 Claude가 **새로운 상황에서도 스스로 판단**할 수 있어요.

### 2. `IMPORTANT:` / `YOU MUST` 접두어 사용 [R]

중요한 규칙 앞에는 명시적으로 강조해주세요. 커뮤니티 검증 결과 **준수율이 확 올라갑니다**.

```markdown
## 보안 규칙
- **IMPORTANT**: API 키는 절대 코드에 하드코딩하지 말 것
- **YOU MUST**: 커밋 전 반드시 `.env` 파일이 gitignore에 있는지 확인
```

### 3. 2,500토큰 / 100줄 이내로 유지 [x]

Boris Cherny(창시자)의 실제 운영 방식. CLAUDE.md가 너무 길면:
- 매 대화마다 그만큼 토큰이 소비돼요 (비용 증가)
- Claude가 핵심을 잊기 쉬워요 (희석 효과)
- 업데이트가 귀찮아서 안 하게 돼요

### 4. 도구별 / 폴더별로 분리

한 파일에 모든 걸 넣지 말고, 하위 폴더의 `CLAUDE.md`를 활용하세요.

```
프로젝트/
├── CLAUDE.md            ← 공통: 언어, 커밋 규칙 등
├── backend/CLAUDE.md    ← backend 작업 시만: API 설계 원칙
└── frontend/CLAUDE.md   ← frontend 작업 시만: 컴포넌트 규칙
```

→ 필요한 만큼만 로드되니 **토큰 낭비가 줄어들어요**.

---

## 다음 단계

CLAUDE.md 다음은 **settings.json**으로 보안과 권한을 설정합니다!
