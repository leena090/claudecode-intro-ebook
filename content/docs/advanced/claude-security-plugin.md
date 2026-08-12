---
title: "[공] Claude Security 플러그인 — 코드베이스 취약점 자동 스캔·패치"
description: "Claude Security 플러그인으로 기존 코드베이스 전체를 취약점 스캔하고, 발견된 보안 문제를 패치로 바로 연결하는 방법"
tags: ["자동생성", "보안", "취약점스캔", "플러그인", "ClaudeSecurity", "W30"]
category: "advanced"
order: 12
lastUpdated: "2026-08-12"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ W30 업데이트(2026-07-20~24)에서 출시된 신규 플러그인입니다.
</div>

## Claude Security 플러그인이란?

**세션 안에서 코드베이스 전체를 보안 취약점 관점으로 스캔하고, 발견된 문제를 바로 패치로 연결해주는 플러그인**이에요.

> 🔍 **비유로 설명하면**: 이 플러그인은 "전문 보안 감사원"을 세션에 초청하는 거예요. 감사원이 코드베이스 전체를 꼼꼼히 살펴보고 "여기 자물쇠가 낡았어요", "저기 창문이 열려있어요" 하고 알려주면, Claude가 바로 수리(패치)까지 제안해줍니다.

---

## 기존 security-guidance 플러그인과의 차이

비슷해 보이지만 역할이 달라요!

| | `security-guidance` | **`claude-security`** (신규) |
|---|---|---|
| **동작 시점** | Claude가 코드를 **작성하는 도중** | 세션에서 **명시적으로 스캔 요청** 시 |
| **대상 범위** | 방금 작성/수정한 코드 | **코드베이스 전체** |
| **비유** | 요리 중 실시간 위생 점검 | **정기 주방 안전 점검** |
| **목적** | 새 취약점 유입 방지 | 기존 코드의 취약점 발견 |

> 💡 **핵심**: 두 플러그인은 보완 관계예요. 신규 코드는 `security-guidance`가 실시간으로 지키고, 기존 코드는 `claude-security`로 정기 점검하는 조합이 이상적입니다.

---

## 설치 방법

```bash
# Claude Code 세션에서 설치
/plugin install claude-security
```

또는 플러그인 마켓플레이스에서 "Claude Security"를 검색해서 설치하세요.

---

## 사용 방법

설치 후 세션에서 자연어로 지시하면 됩니다:

```
# 전체 코드베이스 스캔
> 이 코드베이스의 보안 취약점을 전부 스캔해줘

# 특정 디렉토리 스캔
> src/api 폴더의 취약점만 찾아줘

# 특정 유형의 취약점 스캔
> SQL 인젝션 가능성이 있는 코드 찾아줘

# 발견 후 패치 요청
> 발견된 취약점을 패치로 수정해줘 (적용 전에 확인 요청)
```

---

## 스캔 결과 예시

```
🔐 보안 스캔 완료 — 3건 발견

[HIGH] src/api/users.js:47
  SQL 인젝션 가능성 — 사용자 입력이 직접 쿼리에 삽입됨
  패치: Prepared statement 사용 권장

[MEDIUM] src/auth/token.js:23
  JWT 서명 알고리즘이 'none' 허용 — 인증 우회 가능
  패치: 허용 알고리즘 명시적 지정 권장

[LOW] src/config/cors.js:8
  CORS 와일드카드(*) 사용 — 특정 도메인으로 제한 권장
  패치: 허용 도메인 목록 명시 권장

적용할 패치를 선택하세요:
[1] HIGH 패치만  [2] HIGH+MEDIUM  [3] 전체  [0] 취소
```

---

## 주요 탐지 취약점 유형

| 카테고리 | 예시 |
|---|---|
| **인젝션** | SQL 인젝션, 커맨드 인젝션, XSS |
| **인증/인가** | 취약한 토큰 처리, 권한 검증 누락 |
| **데이터 노출** | 하드코딩된 비밀번호, API 키 |
| **의존성** | 알려진 취약점이 있는 라이브러리 버전 |
| **설정** | 개발용 설정이 프로덕션에 남아있는 경우 |

---

## 기업 환경에서의 활용

### CI/CD 파이프라인 연동

```yaml
# GitHub Actions 예시
- name: Claude Security Scan
  run: |
    claude --headless "보안 스캔 실행 후 HIGH·MEDIUM 취약점만 보고해줘. 
    취약점 발견 시 exit 1로 종료해줘."
```

### 정기 스캔 일정 잡기

```
> 매주 월요일 오전 9시에 이 코드베이스를 보안 스캔하고 
  결과를 security-report.md에 저장하는 루틴을 만들어줘
```

---

## 관련 문서

- [Scan your codebase for vulnerabilities](https://code.claude.com/docs/en/claude-security) — Claude Security 공식 문서
- [Catch security issues as Claude writes code](https://code.claude.com/docs/en/security-guidance) — security-guidance 플러그인
- [Security](https://code.claude.com/docs/en/security) — Claude Code 보안 전반
- [Discover and install prebuilt plugins](https://code.claude.com/docs/en/discover-plugins) — 플러그인 마켓플레이스
