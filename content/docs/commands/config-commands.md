---
title: "설정 관련 명령어"
description: "Claude Code를 나에게 맞게 커스터마이징하는 방법"
category: "commands"
order: 3
tags: ["설정", "커스터마이징", "명령어"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## 설정이란?

Claude Code를 **내 입맛대로 조정하는 것**입니다. 마치 휴대폰의 밝기, 글씨 크기, 언어 설정을 바꾸는 것처럼요.

설정 관련 명령어로 더 편하고 효율적으로 사용할 수 있습니다.

---

## 설정 관련 명령어 6가지

### 1️⃣ `/config` — 모든 설정 보기 & 변경하기

```bash
/config
```

**역할:** 현재 설정을 확인하거나 변경

<div class="note-circle">
○ 가장 중요한 설정 명령어입니다. 다른 명령어들도 여기서 관리할 수 있습니다
</div>

**기본 사용:**
```bash
/config
(모든 설정 목록 표시)
```

**특정 설정 변경:**
```bash
/config set key value
```

**사용 예시:**
```bash
/config set model claude-opus
/config set language ko
/config set theme dark
```

**조정 가능한 주요 설정:**
- `model` — AI 모델 선택
- `language` — 사용 언어
- `theme` — 화면 테마
- `timeout` — 타임아웃 시간
- `verbose` — 상세 정보 표시

---

### 2️⃣ `/model` — AI 모델 선택하기

```bash
/model
```

**역할:** 어떤 AI 모델을 사용할지 선택

<mark>더 강력한 모델 = 더 정확한 답 (하지만 느릴 수 있음)</mark>

**사용 가능한 모델:**
- `claude-haiku` — 빠르지만 단순한 작업용
- `claude-sonnet` — 균형잡힌 선택 (추천)
- `claude-opus` — 가장 강력 (복잡한 작업용)

**사용 예시:**
```bash
/model claude-opus
(더 복잡하고 정확한 작업이 필요할 때)

/model claude-haiku
(빠른 응답이 필요할 때)
```

**언제 어떤 모델을 쓸까?**

| 상황 | 모델 |
|------|------|
| 간단한 질문, 빠른 응답 필요 | haiku |
| 일반적인 코딩, 기본 설명 | sonnet (기본) |
| 복잡한 논리, 정확한 답 필요 | opus |

---

### 3️⃣ `/permissions` — 권한 설정하기

```bash
/permissions
```

**역할:** Claude Code가 할 수 있는 것과 없는 것을 제한

<div class="note-star">
★ 보안과 안전을 위한 중요한 설정입니다
</div>

**주요 권한 설정:**
- 파일 읽기/쓰기 허용 여부
- 터미널 명령 실행 허용 여부
- 인터넷 접근 허용 여부
- 특정 폴더만 접근 가능하도록 제한

**사용 예시:**
```bash
/permissions allow read
(파일 읽기 허용)

/permissions deny write
(파일 쓰기 금지)
```

**보안 팁:**
- 중요한 폴더는 접근 제한하기
- 필요한 것만 허용하기
- 정기적으로 권한 확인하기

---

### 4️⃣ `/theme` — 화면 테마 선택하기

```bash
/theme
```

**역할:** 화면의 색상과 디자인 변경

**사용 가능한 테마:**
- `light` — 밝은 화면 (낮에 사용)
- `dark` — 어두운 화면 (밤에 편함)
- `auto` — 시간에 따라 자동 변경

**사용 예시:**
```bash
/theme dark
(밤 모드 활성화)

/theme light
(낮 모드)

/theme auto
(낮에는 light, 밤에는 dark로 자동 전환)
```

**내 눈 건강 팁:**
- 밤에는 dark 모드 사용 (블루라이트 감소)
- 낮에는 light 모드 (더 선명함)
- `auto` 모드가 가장 편함

---

### 5️⃣ `/color` — 색상 커스터마이징하기

```bash
/color
```

**역할:** 글자, 배경 등의 색상 세부 조정

<mark>더 고급 사용자를 위한 설정입니다</mark>

**사용 예시:**
```bash
/color set primary blue
(주요 색상을 파란색으로)

/color set text white
(글자를 흰색으로)
```

**기본 색상:**
- `primary` — 주요 강조 색상
- `secondary` — 보조 색상
- `text` — 글자 색상
- `background` — 배경 색상
- `accent` — 강조 색상

---

### 6️⃣ `/language` — 사용 언어 설정하기

```bash
/language
```

**역할:** Claude Code의 인터페이스 언어 변경

**지원 언어:**
- `en` — English (영어)
- `ko` — 한국어 (Korean)
- `ja` — 日本語 (일본어)
- `zh` — 中文 (중국어)
- 기타 많은 언어 지원

**사용 예시:**
```bash
/language ko
(한국어로 변경)

/language en
(영어로 변경)
```

**참고:**
- Claude Code의 인터페이스 언어만 변경됩니다
- AI의 응답 언어는 사용자가 물어본 언어로 자동 결정됩니다

---

## ⚙️ 설정 명령어 활용 예시

실제 사용 시나리오:

```bash
# 1. 현재 설정 확인
/config

# 2. 밤 모드로 변경
/theme dark

# 3. 복잡한 작업을 위해 강력한 모델로 변경
/model claude-opus

# 4. 한국어로 설정
/language ko

# 5. 파일 쓰기 권한 제한
/permissions deny write /Desktop/important/

# 6. 설정 다시 확인
/config
```

---

## 💡 쉽게 이해하기

### 설정을 자동차 조정으로 비유하면?

Claude Code의 설정 명령어는 **자동차의 설정 조정**과 같습니다:

- **`/config`** = 자동차 대시보드 (모든 설정을 한곳에서 봄)
- **`/model`** = 엔진 모드 선택 (경제 모드 vs 스포츠 모드)
- **`/permissions`** = 차량 보안 (어떤 기능을 제한할지 결정)
- **`/theme`** = 조명 및 디스플레이 (밝기/색상 조절)
- **`/color`** = 세부 색상 커스터마이징 (LED 색상 조절)
- **`/language`** = 음성 명령 언어 설정

### 예를 들어...

**상황 1: 밤늦게 일할 때**
```bash
> 밤 10시, 눈이 피곤해...
/theme dark
(화면이 어두워져서 눈이 편해짐)
```

**상황 2: 빠른 답변이 필요할 때**
```bash
> 5분 안에 간단한 답변만 필요해
/model claude-haiku
(더 빠르게 응답함)
```

**상황 3: 복잡한 문제를 풀어야 할 때**
```bash
> 정말 복잡한 알고리즘 문제...
/model claude-opus
(가장 강력한 AI로 정확한 답을 받음)
```

---

## 설정 초기화하기

혹시 설정을 망쳤다면?

```bash
/config reset
(모든 설정을 기본값으로 복원)
```

---

## 다음 단계

설정 명령어를 배웠습니다!

다음으로 배울 명령어:
- **정보 확인 명령어** — 현재 상태와 통계 보기
- **파일 & 코드 명령어** — 작업 효율 높이기
