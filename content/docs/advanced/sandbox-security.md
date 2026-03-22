---
title: "샌드박스 & 보안"
description: "클로드 코드를 안전하게 사용하고 민감정보를 보호하는 방법"
category: "advanced"
order: 7
tags: ["보안", "샌드박스", "프라이버시"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## 샌드박스 & 보안이란?

**샌드박스**는 AI가 할 수 있는 행동을 제한하는 안전 영역입니다. **보안**은 당신의 민감정보(암호, API 키, 개인정보)를 보호하는 것입니다. 마치 은행의 보안 시스템처럼, 허가된 것만 접근하고 나머지는 차단합니다.

---

## 샌드박스 모드

### 샌드박스 모드란?

AI가 할 수 있는 작업을 제한하는 모드입니다.

```
일반 모드:
AI가 모든 파일에 접근 가능
위험할 수 있음

샌드박스 모드:
AI가 지정된 폴더/파일만 접근
안전함
```

---

## 샌드박스 활성화

### 명령어로 활성화

```bash
/sandbox
```

또는

```bash
claude --sandbox
```

---

### 설정 파일로 활성화

```json
{
  "security": {
    "sandboxMode": {
      "enabled": true,
      "allowedPaths": [
        "/Users/mylee/Desktop/sandbox",
        "/Users/mylee/Documents/projects"
      ]
    }
  }
}
```

---

## 샌드박스 권한 설정

### 읽기만 허용

```json
{
  "sandboxMode": {
    "enabled": true,
    "readOnly": true,
    "allowedPaths": [
      "/Users/mylee/Desktop/project"
    ]
  }
}
```

→ AI가 파일을 읽을 수만 있고, 수정 불가

---

### 특정 폴더만 접근

```json
{
  "sandboxMode": {
    "enabled": true,
    "allowedPaths": [
      "/Users/mylee/Desktop/public",
      "/Users/mylee/Desktop/work"
    ],
    "deniedPaths": [
      "/Users/mylee/Desktop/private",
      "/Users/mylee/Desktop/secret"
    ]
  }
}
```

---

## 민감정보 보호

### ⚠️ 하면 안 되는 것

```
❌ 암호를 직접 말하기
❌ API 키를 코드에 직접 쓰기
❌ 신용카드 정보 공유
❌ 개인정보 그대로 입력
```

---

### ✅ 올바른 방법

#### 1. 환경 변수 사용

```bash
# .env 파일 생성
GITHUB_TOKEN=ghp_xxxxx
DATABASE_PASSWORD=secretpassword
```

```python
# Python에서 사용
import os
token = os.environ.get("GITHUB_TOKEN")
password = os.environ.get("DATABASE_PASSWORD")
```

---

#### 2. 설정 파일 분리

```
src/
├── app.py
├── config.py              ← 공개 가능한 설정
└── .env                   ← 민감정보 (git 제외)
```

```python
# config.py
DATABASE_HOST = "localhost"
DEBUG = False

# .env
DATABASE_PASSWORD=secret123
```

---

#### 3. .gitignore에 추가

```
.env
.env.local
secrets.json
private/
```

→ Git에 민감정보가 올라가지 않음

---

## 파일 접근 제어

### 금지된 폴더 설정

```json
{
  "security": {
    "restrictedPaths": [
      "/Users/mylee/.ssh",           ← SSH 키
      "/Users/mylee/.ssh_config",    ← SSH 설정
      "/Users/mylee/.aws",           ← AWS 인증정보
      "/Users/mylee/.bash_history"   ← 명령 히스토리
    ]
  }
}
```

<div class="note-star">
  ★ 이 폴더들은 AI가 접근할 수 없습니다
</div>

---

## 권한 상승 방지

### sudo 명령 금지

```json
{
  "permissions": {
    "denylist": [
      "Bash(sudo:*)"
    ]
  }
}
```

→ AI가 관리자 권한을 요청할 수 없음

---

### 시스템 파일 보호

```json
{
  "security": {
    "protectedPaths": [
      "/etc/**",
      "/System/**",
      "/Library/**"
    ]
  }
}
```

---

## 통신 보안

### HTTPS 강제

```json
{
  "security": {
    "httpOnly": false,
    "requireHttps": true
  }
}
```

→ 모든 외부 통신은 HTTPS만 사용

---

### API 키 암호화

```json
{
  "security": {
    "encryptSensitive": true,
    "sensitiveKeys": [
      "API_KEY",
      "PASSWORD",
      "TOKEN"
    ]
  }
}
```

---

## 감사 로그 (Audit Log)

### 작업 기록 남기기

```json
{
  "security": {
    "auditLog": {
      "enabled": true,
      "logPath": "~/.claude/audit.log",
      "includeEvents": [
        "file:write",
        "file:delete",
        "api:call",
        "auth:login"
      ]
    }
  }
}
```

**로그 내용:**
- 언제: 2026-03-22 14:30:00
- 누가: claude (AI)
- 뭘 했는가: file:write /Users/mylee/Desktop/app.py
- 성공/실패: Success

---

### 로그 보기

```bash
/audit:log
```

→ 최근 50개 작업 기록 표시

---

## 보안 체크리스트

<div class="note-circle">
  ○ 새 프로젝트 시작 시 다음을 확인하세요
</div>

```
☐ .env 파일에 민감정보 저장
☐ .env를 .gitignore에 추가
☐ API 키는 환경 변수로 사용
☐ 암호는 해싱 후 저장
☐ HTTPS 통신만 사용
☐ 감사 로그 활성화
☐ 접근 권한 최소화 설정
☐ 샌드박스 모드 고려
```

---

## 팀과 보안

### 팀원에게 권한 제한

```json
{
  "team": {
    "members": [
      {
        "name": "developer1",
        "permissions": {
          "allowlist": ["Read", "Write"],
          "deniedPaths": ["/sensitive/**"]
        }
      }
    ]
  }
}
```

---

### 팀 감시 및 승인

```bash
/team:approval-required

→ 모든 파일 수정이 리더의 승인 필요
```

---

## 💡 쉽게 이해하기

샌드박스와 보안은 **집의 보안 시스템**과 같습니다.

**보안 없이:**
- 손님이 모든 방 접근 가능
- 귀중품 도난 위험
- 프라이버시 침해

**보안으로:**
- 손님은 거실만 접근
- 침실, 서재는 잠금
- 귀중품 안전
- 프라이버시 보호

마찬가지로:
- **샌드박스:** AI는 공개 폴더만 접근
- **민감정보 보호:** 암호, 키는 .env에만 저장
- **감시 로그:** 누가 뭘 했는지 기록

---

## 실전 보안 설정

### 완전한 보안 설정 예시

```json
{
  "security": {
    "sandboxMode": {
      "enabled": true,
      "allowedPaths": [
        "/Users/mylee/Desktop/projects"
      ],
      "readOnly": false
    },
    "restrictedPaths": [
      "/Users/mylee/.ssh",
      "/Users/mylee/.aws",
      "/etc/**"
    ],
    "encryptSensitive": true,
    "auditLog": {
      "enabled": true,
      "logPath": "~/.claude/audit.log"
    }
  },
  "permissions": {
    "mode": "ask",
    "denylist": [
      "Bash(sudo:*)",
      "Bash(rm:*)"
    ]
  }
}
```

---

## 보안 팁

### 팁 1: 정기적으로 권한 검토

```bash
/security:audit    ← 월 1회 보안 감시
```

---

### 팁 2: 강력한 암호 사용

```
❌ "password123"
✅ "K#9mX2@pLq8vN$5Rw"
```

---

### 팁 3: 퍼블릭 Wi-Fi에서는 VPN 사용

```bash
민감한 작업은 VPN으로 보호된 네트워크에서만
```

---

## 보안 사고 대응

### API 키 유출 시

```bash
1. 즉시 유출된 키 비활성화
2. 새로운 키 발급
3. .env 파일 업데이트
4. 모든 서버 재시작
5. 감사 로그 확인
```

---

### 파일 실수로 삭제 시

```bash
1. Git에서 복구 가능한지 확인
2. git log --all --full-history
3. git show <commit>:<file>
```

---

## 다음 단계

보안을 학습했습니다! 이제 당신은 클로드 코드의 **모든 고급 기능**을 마스터했습니다. 축하합니다! 🎉

이제 실제 프로젝트에서 배운 내용을 활용해보세요!
