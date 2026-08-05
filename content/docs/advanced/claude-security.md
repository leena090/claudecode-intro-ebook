---
title: "[공] Claude Security 플러그인 — 코드 취약점을 찾아 바로 패치까지"
description: "Claude Security 플러그인으로 코드베이스의 보안 취약점을 스캔하고, Claude Code 세션 안에서 바로 수정 패치를 적용하는 방법"
tags: ["자동생성", "보안", "취약점스캔", "ClaudeSecurity", "플러그인"]
category: "advanced"
order: 27
lastUpdated: "2026-08-05"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 신규 등재 — <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> (2026-08-05 확인)
</div>

## Claude Security 플러그인이란?

코드를 짤 때 보안 취약점을 일일이 검토하기는 쉽지 않아요. **Claude Security 플러그인**은 Claude Code 세션 안에서 자동으로 코드베이스의 보안 문제를 찾아내고, 발견된 취약점을 **검토·수정까지** 도와줘요.

> 🍱 **비유로 설명하면**: 건물 짓고 나서 "소방 점검관"이 전체를 훑어보고 위험 요소를 짚어주는 것처럼, Claude Security가 내 코드를 전부 살펴보고 "여기 잠금장치가 약해요, 고쳐드릴게요"라고 해주는 거예요.

---

## 무엇을 찾아내나요?

| 취약점 유형 | 예시 |
|---|---|
| **SQL 인젝션** | 사용자 입력을 직접 쿼리에 넣는 코드 |
| **XSS (크로스 사이트 스크립팅)** | 화면에 바로 출력되는 검증 없는 입력값 |
| **인증·권한 문제** | 잘못된 접근 제어, 하드코딩된 비밀번호 |
| **의존성 취약점** | 보안 패치 안 된 오래된 라이브러리 |
| **기타 OWASP 취약점** | 암호화 미흡, 민감 정보 노출 등 |

---

## 플러그인 설치

```bash
# Claude Code에서 설치
/plugin install claude-security
```

또는 plugin-marketplace에서 "Claude Security" 검색 후 설치.

---

## 사용 방법

### 1단계 — 전체 스캔 실행

```bash
# 현재 코드베이스 전체 보안 스캔
/scan-security
```

Claude가 코드베이스를 분석하고 발견된 취약점 목록을 보여줘요.

### 2단계 — 취약점 확인

```
발견된 취약점:
1. [HIGH] src/api/users.js:42 — SQL 인젝션 위험
   사용자 입력이 쿼리에 직접 삽입됨
   
2. [MEDIUM] src/auth/login.js:15 — 하드코딩된 비밀번호
   "admin123"이 소스코드에 노출됨

3. [LOW] package.json — lodash 4.17.19 (취약 버전)
```

### 3단계 — 패치 적용

각 취약점 옆에 "Fix" 버튼이나 명령으로 바로 수정 코드를 제안받고 적용해요:

```bash
# 특정 취약점 수정
/fix-security 1   # 첫 번째 취약점 수정

# 또는 Claude에게 직접 요청
"SQL 인젝션 취약점 1번 고쳐줘"
```

<div class="note-star">
★ 수정 전에 변경 내용을 반드시 검토하세요. 보안 수정이라도 의도치 않은 동작 변화가 생길 수 있어요.
</div>

---

## security-guidance 플러그인과의 차이

| | **claude-security** | **security-guidance** |
|---|---|---|
| **역할** | 기존 코드 전체 스캔 | Claude가 **새로 작성하는 코드** 실시간 감시 |
| **언제 쓰나** | "지금까지 쓴 코드 보안 점검" | "앞으로 쓸 코드가 안전한지 확인" |
| **사용 방식** | 수동으로 스캔 명령 실행 | Claude Code 자동 적용 |

> 🍱 **비유**: claude-security는 "집 전체 안전 점검", security-guidance는 "새로 짓는 방마다 실시간 안전 설계 조언"이에요.

---

## 언제 쓰면 좋을까요?

```
✅ 새 기능을 추가하기 전 기존 코드 점검
✅ 코드 리뷰 전 자동 보안 체크
✅ 오래된 프로젝트 인수인계 받았을 때
✅ 배포 전 마지막 보안 검증
✅ 오픈소스에 기여하기 전 내 코드 검토
```

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ 연관 플러그인 — 실시간 보안 가이드: <a href="https://code.claude.com/docs/en/security-guidance">code.claude.com/docs/en/security-guidance</a><br />
★ 플러그인 전체 안내: <a href="https://code.claude.com/docs/en/plugins">code.claude.com/docs/en/plugins</a>
</div>
