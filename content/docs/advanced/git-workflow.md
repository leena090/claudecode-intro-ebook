---
title: "Git 연동 워크플로우"
description: "클로드와 Git을 함께 사용하여 버전 관리와 협업하는 방법"
category: "advanced"
order: 3
tags: ["Git", "버전관리", "협업"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## Git 연동 워크플로우란?

**Git 워크플로우**는 클로드가 Git과 함께 작업하여 코드 변경을 관리하고, 브랜치를 만들고, PR을 열고, 커밋을 추적하는 프로세스입니다. 마치 여러 설계도를 동시에 관리하듯이, 코드의 변화를 체계적으로 기록합니다.

---

## Git 기본 개념

### 브랜치 (Branch)
```
main 브랜치 ────→ 메인 코드
         ↓
  feature 브랜치 → 새로운 기능 추가 중
         ↓
  bugfix 브랜치  → 버그 고쳐 중

→ 각각 독립적으로 작업하고 나중에 합칩니다
```

### 커밋 (Commit)
```
변경사항을 저장하는 스냅샷

버전 1: "로그인 기능 추가"
버전 2: "비밀번호 검증 수정"
버전 3: "보안 개선"

→ 필요하면 언제든 이전 버전으로 돌아갈 수 있음
```

---

## 클로드의 Git 명령어

### 1️⃣ `/branch` — 브랜치 관리

```bash
/branch list
```
→ 모든 브랜치 목록 보기

```bash
/branch create feature/login
```
→ 새 브랜치 생성

```bash
/branch switch main
```
→ 브랜치 변경

---

### 2️⃣ `/diff` — 변경사항 확인

```bash
/diff
```
→ 현재 변경사항 표시

```bash
/diff --staged
```
→ 커밋 대기 중인 변경사항

---

### 3️⃣ `/commit` — 변경사항 저장

```bash
/commit "로그인 기능 추가"
```

<div class="note-circle">
  ○ 좋은 커밋 메시지는 짧고 명확해야 합니다
</div>

---

### 4️⃣ `/push` — 원격 저장소에 업로드

```bash
/push
```
→ 현재 브랜치를 GitHub에 업로드

```bash
/push origin main
```
→ main 브랜치 업로드

---

## 실전 Git 워크플로우

### 단계 1: 새 기능 브랜치 생성

```bash
당신: "로그인 기능을 만들어줄래?"
AI:
> /branch create feature/login-system
> /branch switch feature/login-system
```

---

### 단계 2: 기능 개발

```bash
AI가 로그인 코드 작성...

당신: "이제 테스트 해줄래?"
AI:
> /diff
(변경사항 확인)
> npm test
(테스트 실행)
```

---

### 단계 3: 커밋하기

```bash
AI:
> /commit "feat: 로그인 인증 시스템 구현"
> /commit "test: 로그인 테스트 케이스 추가"
> /commit "docs: 로그인 API 문서 작성"
```

---

### 단계 4: Main으로 통합

```bash
AI:
> /branch switch main
> /branch merge feature/login-system
> /push origin main
```

---

## 커밋 메시지 규칙

### Conventional Commits 형식

```
type(scope): description

feat:    새로운 기능
fix:     버그 수정
docs:    문서 변경
style:   코드 스타일 (포맷팅)
refactor: 기능 변경 없는 리팩토링
test:    테스트 추가
chore:   빌드/패키지 관리
```

---

### ✅ 좋은 예시

```
✓ feat(auth): 사용자 로그인 기능 추가
✓ fix(api): 에러 응답 처리 오류 수정
✓ docs: README 설치 가이드 작성
✓ test(calculator): 사칙연산 테스트 추가
```

### ❌ 나쁜 예시

```
✗ "업데이트" (모호함)
✗ "코드 수정" (너무 일반적)
✗ "아무거나" (의미 없음)
✗ "고침" (짧음)
```

---

## PR (Pull Request) 워크플로우

### PR 생성

```bash
당신: "이 기능을 main으로 병합할 준비가 됐어?"
AI:
> /branch switch feature/login
> /pr create --title "로그인 기능 추가"
```

### PR 리뷰 요청

```bash
AI가 작성한 PR:
제목: "feat: 로그인 기능 추가"
설명:
  - 사용자 인증 시스템 구현
  - 패스워드 암호화
  - 테스트 케이스 100% 커버

당신: "코드 리뷰해줄 수 있나?"
팀원 AI: "리뷰 완료 - 승인!"
```

### PR 병합

```bash
> /pr merge feature/login
PR이 main 브랜치로 병합됨
```

---

## Git 충돌 해결

### 충돌 발생 상황

```
당신이 수정한 파일:  login.js
다른 사람이 수정:    login.js

같은 부분을 수정해서 충돌!
```

### 해결 방법

```bash
당신: "충돌을 해결해줄래?"
AI:
> /diff
(충돌 부분 확인)

(AI가 양쪽 코드를 비교하고 최적의 버전 선택)

> /commit "resolve: login.js 충돌 해결"
```

---

## 실전 팀 협업 예시

### 시나리오: 전자상거래 사이트 개발

```
초기 상태: main 브랜치

팀 리더:
> /branch create feature/product-listing
> /branch create feature/shopping-cart
> /branch create feature/payment

팀원 1 (상품 목록):
> /branch switch feature/product-listing
> (코드 작성...)
> /commit "feat: 상품 목록 페이지"
> /push

팀원 2 (장바구니):
> /branch switch feature/shopping-cart
> (코드 작성...)
> /commit "feat: 장바구니 기능"
> /push

팀원 3 (결제):
> /branch switch feature/payment
> (코드 작성...)
> /commit "feat: 결제 시스템"
> /push

마지막 단계:
> /branch switch main
> /branch merge feature/product-listing
> /branch merge feature/shopping-cart
> /branch merge feature/payment
> /push origin main
```

---

## 💡 쉽게 이해하기

Git 워크플로우는 **건설 프로젝트 관리**와 같습니다.

**Git 없이:**
- 여러 팀이 같은 건물에서 작업
- 누가 뭘 했는지 모름
- 실수하면 복구 불가능

**Git으로:**
- 기초팀, 벽돌팀, 전기팀이 각각 작업
- 매일 진행상황 기록
- 문제 발생하면 이전 상태로 복구
- 최종적으로 모두 합쳐서 완성

---

## Git 워크플로우 팁

### 팁 1: 작은 커밋들

```
❌ 나쁜 예: 1주일 작업 → 1번 커밋
✅ 좋은 예: 매일 2~3번 커밋
```

---

### 팁 2: 명확한 브랜치명

```
✓ feature/user-authentication
✓ bugfix/login-timeout
✓ docs/api-documentation

✗ temp, work, test123
```

---

### 팁 3: 정기적으로 main 업데이트

```bash
/branch switch main
/pull origin main
/branch switch feature/myfeature
/merge main
```

---

## 다음 단계

Git으로 버전을 관리했다면, 이제 **원격 제어 & 크로스 디바이스** 기능을 배워봅시다!
