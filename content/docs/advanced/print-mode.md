---
title: "비대화형 모드 (print) 사용하기"
description: "대화 없이 바로 결과를 출력하는 print 모드의 활용"
category: "advanced"
order: 1
tags: ["고급", "print", "자동화"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## Print 모드란?

**Print 모드**는 대화를 나누지 않고 명령 하나를 던지면 바로 결과를 출력하는 방식입니다. 마치 자동판매기처럼, 돈을 넣고 버튼을 누르면 즉시 상품이 나오듯이, 질문을 하면 바로 답변을 얻습니다.

---

## 기본 사용법

### 기본 문법
```bash
claude -p "당신의 질문"
```

또는
```bash
claude --print "당신의 질문"
```

### 예시 1: 파일 설명

```bash
claude -p "이 파일이 뭐 하는 건지 설명해줘" < myfile.py
```

**결과:**
```
myfile.py는 Python 파일로서 다음과 같은 역할을 합니다:
1. 사용자 데이터를 입력받음
2. 데이터를 검증함
...
```

---

## Print 모드의 장점

### 1. ⚡ 빠름
대화 과정이 없어 응답이 즉시 나옴

```bash
# 일반 모드: 대화 창 열기 + 입력 + 대기 → 느림
claude

# Print 모드: 바로 결과 → 빠름
claude -p "파이썬 버전 확인 방법"
```

---

### 2. 🤖 자동화 가능
셸 스크립트나 자동화 도구와 함께 사용

```bash
#!/bin/bash
# 모든 .py 파일을 자동으로 검토

for file in *.py; do
  echo "=== Checking $file ==="
  claude -p "코드 오류를 찾아줘" < "$file"
done
```

---

### 3. 📊 파이프 연동
다른 명령어와 연결해서 체이닝 가능

```bash
cat myfile.txt | claude -p "요약해줄래?"
```

---

## 실전 예시

### 예시 1: 코드 오류 빠르게 찾기

```bash
claude -p "이 코드의 버그를 찾아줘" < buggy.js
```

**결과:**
```
2개의 버그를 찾았습니다:

1. Line 10: undefined variable 'count'
2. Line 25: missing semicolon
...
```

---

### 예시 2: 여러 파일 한번에 검토

```bash
#!/bin/bash

for file in *.md; do
  echo "📄 Checking $file"
  claude -p "문법 오류가 있나?" < "$file"
  echo "---"
done
```

---

### 예시 3: Git 커밋 메시지 자동 생성

```bash
# 현재 변경사항을 설명하는 커밋 메시지 생성
git diff | claude -p "좋은 커밋 메시지를 작성해줄래?"
```

---

### 예시 4: API 응답 분석

```bash
# API에서 받은 JSON을 분석
curl https://api.example.com/data | \
  claude -p "이 데이터의 문제점을 분석해줄래?"
```

---

## 구조화된 출력 얻기

### JSON 형식으로 출력

```bash
claude -p "Python 파일 분석" \
  --output-format json < myfile.py
```

**결과:**
```json
{
  "language": "python",
  "functions": 3,
  "classes": 1,
  "lines_of_code": 142,
  "complexity": "medium"
}
```

---

### YAML 형식으로 출력

```bash
claude -p "코드 구조" --output-format yaml < app.js
```

---

## Print 모드 vs 일반 모드

| 기능 | Print 모드 | 일반 모드 |
|------|-----------|---------|
| 속도 | ⚡ 빠름 | 보통 |
| 대화 | ❌ 불가 | ✅ 가능 |
| 자동화 | ✅ 쉬움 | 어려움 |
| 복잡한 작업 | 불편함 | ✅ 편함 |
| 스크립트 연동 | ✅ 최고 | 복잡함 |

---

## Print 모드로 CI/CD 통합

### GitHub Actions 예시

```yaml
name: Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Code Review
        run: |
          claude -p "코드 리뷰를 해줄래?" < src/main.js
```

---

### 젠킨스 통합 예시

```groovy
pipeline {
  stages {
    stage('AI Review') {
      steps {
        sh '''
          find . -name "*.py" | while read file; do
            claude -p "버그를 찾아줄래?" < "$file"
          done
        '''
      }
    }
  }
}
```

---

## Print 모드 커스터마이징

### 응답 스타일 지정

```bash
# 요약본만 원할 때
claude -p "3줄로 요약해줄래?" < longfile.txt

# 자세한 설명 원할 때
claude -p "깊이 있게 설명해줄래?" < code.js

# 초보자용 설명
claude -p "초보자도 이해하도록 쉽게 설명해줄래?" < complex.py
```

---

## 💡 쉽게 이해하기

Print 모드는 **커피 자판기**와 같습니다.

**대화형 카페:**
- 바리스타와 대화하며 주문
- 여러 번 조정 가능
- 시간이 걸림
- 복잡한 요청에 적합

**자판기 (Print 모드):**
- 버튼 누르면 바로 나옴
- 변경 불가능
- 빠름
- 정해진 요청에 적합

---

## Print 모드 팁

### 팁 1: 긴 파일은 파이프로

```bash
# 대신 이렇게:
cat hugefile.txt | claude -p "요약해줄래?"

# 또는 stdout으로:
some_command | claude -p "결과 분석"
```

---

### 팁 2: 에러 처리

```bash
#!/bin/bash

result=$(claude -p "코드 검토" < myfile.py)
if [ $? -ne 0 ]; then
  echo "AI 검토 실패"
  exit 1
fi

echo "$result"
```

---

### 팁 3: 결과 저장

```bash
# 결과를 파일로 저장
claude -p "설명해줄래?" < code.js > analysis.txt

# 기존 파일에 추가
claude -p "요약해줄래?" < report.md >> summary.txt
```

---

## 자주 묻는 질문 (FAQ)

### Q: Print 모드에서 대화할 수 있나?
A: 아니요. Print 모드는 한 번의 질문과 답변만 가능합니다. 대화하려면 일반 모드를 사용하세요.

### Q: Print 모드는 느린가?
A: 아니요. 오히려 더 빠릅니다. 대화 인터페이스 없어 응답이 즉시 나옵니다.

### Q: 스크립트에서만 쓰나?
A: 아니요. 일상 작업에서도 유용합니다. 빠른 검색, 간단한 변환, 분석 등에 쓸 수 있습니다.

---

## 다음 단계

Print 모드로 자동화했다면, 이제 **에이전트 팀 시스템**을 배워봅시다!
