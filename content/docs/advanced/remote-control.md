---
title: "원격 제어 & 크로스 디바이스"
description: "다양한 기기에서 클로드 코드를 사용하고 원격으로 제어하기"
category: "advanced"
order: 4
tags: ["원격", "다중기기", "동기화"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## 원격 제어 & 크로스 디바이스란?

**원격 제어**는 한 기기에서 다른 기기의 AI를 제어하는 것입니다. **크로스 디바이스**는 여러 기기(데스크톱, 노트북, 태블릿)에서 같은 프로젝트를 동기화하며 작업하는 것입니다. 마치 클라우드 드라이브처럼, 어디서나 같은 파일에 접근할 수 있습니다.

---

## 크로스 디바이스 동작 원리

### 기본 개념

```
MacBook Pro
     ↓
클로드 코드 프로젝트 동기화
     ↓
iPad Pro (같은 프로젝트 접근)
     ↓
iPhone (모니터링)
```

---

## 설정 단계

### 단계 1: 계정 로그인

모든 기기에서 같은 계정으로 로그인

```bash
# MacBook
claude login

# iPad
claude login

# 같은 이메일로 로그인
```

---

### 단계 2: 클라우드 동기화 설정

```json
{
  "settings": {
    "cloudSync": {
      "enabled": true,
      "autoSync": true,
      "syncInterval": 30000
    }
  }
}
```

**옵션:**
- `enabled` — 클라우드 동기화 활성화
- `autoSync` — 자동 동기화
- `syncInterval` — 동기화 간격 (밀리초)

---

## 원격 제어 사용법

### 원격 제어란?

기기 A에서 기기 B의 AI를 제어합니다:

```
기기 A (제어자):
> claude remote:deviceB "홈페이지 만들어줄래?"

기기 B (피제어자):
> (자동으로 작업 수행)
```

---

### 원격 제어 명령어

#### 기기 목록 보기
```bash
claude remote:list
```

**결과:**
```
사용 가능한 기기:
1. MacBook-Pro (활성)
2. iPad-Pro (오프라인)
3. iPhone-13 (활성)
```

---

#### 원격 명령 실행
```bash
claude remote:macbook "파일을 HTML로 변환해줄래?"
```

---

#### 원격 상태 확인
```bash
claude remote:status ipad
```

**결과:**
```
iPad-Pro 상태:
- 상태: 오프라인 (마지막 연결: 2시간 전)
- 배터리: 45%
- 작업: 없음
```

---

## 실전 크로스 디바이스 예시

### 예시 1: 집에서 시작, 카페에서 계속

```
1️⃣ 집 (데스크톱)
당신: "웹사이트 만들어줄래?"
AI: (개발 진행)

2️⃣ 카페 (노트북)
당신: "아까 만들던 거 계속해줄래?"
AI: (클라우드에서 최신 버전 로드)
AI: (계속 개발)

3️⃣ 지하철 (태블릿)
당신: "진행상황 보여줄래?"
AI: (최신 코드 표시)
```

---

### 예시 2: 팀 협업

```
팀 리더 (데스크톱):
> "개발자 팀원들에게 작업 할당"

개발자 1 (노트북):
> claude remote:leader "기능 1 완성했어요"

개발자 2 (데스크톱):
> claude remote:leader "기능 2 완성했어요"

리더 (태블릿):
> claude remote:all-status
(모든 팀원의 진행상황 확인)
```

---

## 동기화 설정

### 자동 동기화

```json
{
  "cloudSync": {
    "enabled": true,
    "autoSync": true,
    "syncEvents": [
      "file:write",
      "file:edit",
      "commit:push"
    ]
  }
}
```

**동기화 이벤트:**
- `file:write` — 파일 생성 시
- `file:edit` — 파일 수정 시
- `commit:push` — Git 커밋 시
- `folder:create` — 폴더 생성 시

---

### 선택적 동기화

```json
{
  "cloudSync": {
    "includeFolders": [
      "src/",
      "docs/",
      ".claude/"
    ],
    "excludeFolders": [
      "node_modules/",
      ".git/",
      "dist/"
    ]
  }
}
```

<div class="note-circle">
  ○ node_modules, .git는 동기화 제외 (용량 절약)
</div>

---

## 충돌 해결

### 동기화 충돌 발생

```
기기 A가 파일을 수정 → 저장
기기 B가 같은 파일 수정 → 저장
충돌 발생!
```

---

### 자동 해결

```bash
당신: "동기화 충돌을 해결해줄래?"
AI:
> 기기 A 버전 시간: 14:30
> 기기 B 버전 시간: 14:35
> 더 최신인 기기 B 버전 선택
> 기기 A에 자동으로 동기화
```

---

### 수동 선택

```bash
당신: "어떤 버전을 사용할까?"

AI:
기기 A 버전:
  - 로그인 기능 완성
  - 유효성 검사 미완

기기 B 버전:
  - 로그인 기능 완성
  - 유효성 검사 완성

당신: "기기 B 버전 사용할래"
AI: (기기 A에 B 버전 복사)
```

---

## 기기별 관리

### 신뢰할 수 있는 기기 등록

```bash
claude remote:trust "MacBook-Pro"
```

→ 이 기기는 자동으로 동기화

```bash
claude remote:untrust "iPad-Old"
```

→ 이 기기는 동기화 전 확인

---

### 기기 원격 제어 권한

```json
{
  "remoteControl": {
    "allowedDevices": ["MacBook-Pro", "iPhone-13"],
    "deniedDevices": ["public-ipad"],
    "requireApproval": true
  }
}
```

---

## 💡 쉽게 이해하기

크로스 디바이스는 **클라우드 드라이브**와 같습니다.

**드라이브 없이:**
- 어디서든 내 파일에 접근 불가
- 파일을 USB에 복사해야 함
- 여러 버전이 생김

**드라이브로:**
- 어디서나 같은 파일 접근
- 자동으로 최신 버전 유지
- 모든 기기가 동기화됨

마찬가지로:
- 홈 데스크톱에서 코드 작성
- 카페에서 노트북으로 계속 작업
- 기차에서 태블릿으로 진행상황 확인

---

## 보안 주의사항

### ⚠️ 공용 기기 사용

```json
{
  "remoteControl": {
    "publicDeviceMode": true,
    "autoLogout": 1800,
    "requirePin": true
  }
}
```

**설정 항목:**
- `autoLogout` — 자동 로그아웃 시간 (초)
- `requirePin` — PIN 코드 요구

---

### 민감정보 보호

```json
{
  "cloudSync": {
    "encryptSensitive": true,
    "sensitivePatterns": [
      "api_key",
      "password",
      "token"
    ]
  }
}
```

---

## 크로스 디바이스 팁

### 팁 1: 작업 전 동기화 확인

```bash
claude sync:status
```

→ 모든 기기가 최신 상태인지 확인

---

### 팁 2: 오프라인 작업

```bash
claude offline:enable
```

→ 인터넷 없이도 작업 가능, 연결되면 자동 동기화

---

### 팁 3: 동기화 성능 최적화

```json
{
  "cloudSync": {
    "compressionEnabled": true,
    "batchSize": 100,
    "prioritizeFrequentFiles": true
  }
}
```

---

## 다음 단계

크로스 디바이스 작업을 배웠다면, 이제 **음성 입력 & Fast 모드**로 더 빠르게 작업해봅시다!
