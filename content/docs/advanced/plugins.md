---
title: "플러그인 & 스킬 시스템"
description: "클로드의 기능을 확장하는 커스텀 플러그인과 스킬 만들기"
category: "advanced"
order: 6
tags: ["플러그인", "스킬", "확장"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## 플러그인 & 스킬이란?

**플러그인**은 클로드의 기능을 확장하는 추가 도구입니다. **스킬**은 자주 반복하는 작업을 간단한 명령어로 실행할 수 있게 저장한 것입니다. 마치 스마트폰에 앱을 설치하듯이, 클로드에도 새로운 기능을 추가할 수 있습니다.

---

## 스킬 (Skill) 이해하기

### 스킬의 개념

```
일반적인 방식:
> "파이썬 코드로 계산기를 만들어줄래?"
> (매번 같은 설명 반복)

스킬 방식:
> /make-calculator
> (미리 저장된 템플릿 자동 실행)
```

---

## 스킬 만들기

### 단계 1: 스킬 정의

```bash
당신: "/skill-create make-calculator"
```

### 단계 2: 스킬 상세 작성

```markdown
# make-calculator

## 설명
파이썬으로 간단한 계산기를 만드는 스킬

## 요청
파이썬으로 사칙연산을 수행하는 계산기 코드를 만들어줄래?
- 덧셈, 뺄셈, 곱셈, 나눗셈 기능
- 사용자 입력 처리
- 오류 처리

## 저장
~/.claude/skills/make-calculator.md
```

---

### 단계 3: 스킬 사용

```bash
/make-calculator
```

→ 자동으로 계산기 코드 생성!

---

## 실전 스킬 예시

### 스킬 1: 빠른 파일 요약

```markdown
---
name: "summarize-file"
description: "파일 내용을 3줄로 요약"
trigger: "/summarize"
---

요청:
이 파일을 3줄 이내로 요약해줄래?
- 핵심만 포함
- 기술용어 설명 추가
```

---

### 스킬 2: 코드 보안 검사

```markdown
---
name: "security-check"
description: "코드의 보안 취약점 검사"
trigger: "/security"
---

요청:
이 코드의 보안 문제를 찾아줄래?
- SQL Injection 여부
- XSS 취약점
- 권한 관련 문제
- 암호화 미흡
```

---

### 스킬 3: 깔끔한 코드 포맷팅

```markdown
---
name: "format-code"
description: "코드를 깔끔하게 정렬"
trigger: "/format"
---

요청:
이 코드를 정렬해줄래?
- 들여쓰기 정리
- 빈 줄 정리
- 변수명 통일
```

---

## 플러그인 (Plugin) 이해하기

### 플러그인의 개념

```
스킬: 하나의 작업을 간단하게
플러그인: 완전한 기능을 추가 (더 복잡함)
```

---

## 플러그인 설치

### 공식 플러그인 설치

```bash
claude plugin:install github-helper
```

→ GitHub 관련 기능 추가

---

### 커스텀 플러그인 만들기

#### 폴더 구조
```
~/.claude/plugins/
└── my-translator/
    ├── manifest.json
    ├── plugin.js
    └── config.json
```

---

#### manifest.json 작성

```json
{
  "name": "my-translator",
  "version": "1.0.0",
  "description": "한영일 번역 플러그인",
  "author": "yourname",
  "commands": [
    {
      "name": "translate",
      "description": "텍스트 번역",
      "usage": "/translate <language> <text>"
    }
  ]
}
```

---

#### plugin.js 작성

```javascript
module.exports = {
  name: "my-translator",

  async execute(command, args) {
    if (command === "translate") {
      const [language, ...textParts] = args;
      const text = textParts.join(" ");

      return `${text} → ${language}로 번역 중...`;
    }
  }
};
```

---

## 스킬과 플러그인 관리

### 설치된 스킬 목록 보기

```bash
/skill:list
```

**결과:**
```
설치된 스킬:
1. summarize-file      - 파일 요약
2. security-check      - 보안 검사
3. format-code         - 코드 정렬
4. make-calculator     - 계산기 생성
```

---

### 설치된 플러그인 목록 보기

```bash
/plugin:list
```

---

### 스킬/플러그인 제거

```bash
/skill:remove summarize-file
/plugin:remove github-helper
```

---

## 실전 워크플로우

### 워크플로우: 개발자의 일상

```
아침 (코드 작성):
> /format          (스킬로 코드 정렬)
> /security        (스킬로 보안 검사)

오후 (문서 작성):
> /summarize-file  (스킬로 파일 요약)

저녁 (배포):
> /github-push     (플러그인으로 푸시)
> /ci-deploy       (플러그인으로 배포)
```

---

## 커뮤니티 스킬/플러그인 활용

### 마켓플레이스에서 찾기

```bash
/skill:search resume
```

→ 이력서 작성 관련 스킬 검색

---

### 인기 플러그인

```
1. GitHub Helper      - Git 명령 자동화
2. Slack Notifier     - 완료 시 알림
3. Code Reviewer      - 자동 코드 리뷰
4. API Tester         - API 테스트
5. Documentation      - 문서 자동 생성
```

---

## 💡 쉽게 이해하기

스킬과 플러그인은 **포토샵의 필터와 확장**과 같습니다.

**필터 (스킬):**
- 클릭 한번으로 이미지 처리
- 자주 쓰는 기능
- 간단함

**확장 (플러그인):**
- 완전히 새로운 기능 추가
- 고급 기능
- 더 강력함

마찬가지로:
- **스킬:** 자주 반복하는 작업을 한 명령어로
- **플러그인:** 완전히 새로운 기능 추가

---

## 스킬 및 플러그인 팁

### 팁 1: 시간이 드는 작업을 스킬화

```
반복되는 작업들:
✓ 보고서 작성
✓ 코드 검토
✓ 테스트 케이스 생성
✓ 문서 작성

→ 모두 스킬로 만들면 시간 절약!
```

---

### 팁 2: 팀과 스킬 공유

```bash
/skill:share code-review   # 팀원들과 공유
```

---

### 팁 3: 스킬 체이닝

```
스킬 1: /format
스킬 2: /security
스킬 3: /test

→ 이 3개를 연결해서 자동 실행
```

---

## 스킬 작성 모범 사례

### ✅ 좋은 스킬
```
- 명확한 이름
- 자세한 설명
- 예시 포함
- 오류 처리
```

### ❌ 나쁜 스킬
```
- 모호한 이름 ("do-stuff")
- 설명 없음
- 하나의 역할만 (너무 세분화)
```

---

## 다음 단계

스킬과 플러그인으로 확장했다면, 이제 마지막으로 **샌드박스 & 보안**을 배워봅시다!
