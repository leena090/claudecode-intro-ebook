---
title: "[공] Claude Security 플러그인 — AI가 내 코드 보안 취약점을 찾아준다"
description: "Claude Code 세션 안에서 코드베이스 전체의 보안 취약점을 스캔하고 패치까지 제안해주는 Claude Security 플러그인 사용법을 소개해요."
tags: ["자동생성", "보안", "security", "플러그인", "취약점", "claude-security", "보안스캔"]
category: "advanced"
order: 29
lastUpdated: "2026-08-21"
---

<div class="note-star">
★ <strong>[공]</strong> 이 기능은 <a href="https://code.claude.com/docs/en/claude-security.md">code.claude.com 공식 문서</a>에 게시된 내용 기반입니다.
<br />★ 2026-07-20 (W30) 신규 출시된 플러그인이에요.
<br />★ 비슷한 이름의 <a href="https://code.claude.com/docs/en/security-guidance.md">"security-guidance" 플러그인</a>(코드 작성 중 실시간 검토)과 다른 별개 플러그인이에요.
</div>

## Claude Security 플러그인이 뭔가요?

**Claude Security 플러그인**을 설치하면, Claude Code 세션에서 **코드베이스 전체를 대상으로 보안 취약점을 스캔**하고, 발견된 문제에 대한 **패치 코드까지 자동으로 제안**해줘요.

> 🍱 **비유로 설명하면**: 집을 다 지은 후에 **보안 전문가(소방서 점검관)**를 불러서 "이 구조물에서 위험한 부분은 없는지 전체를 훑어봐줘"라고 요청하는 것과 같아요. 클로드가 코드 전체를 읽고 "여기 SQL 인젝션 위험이 있어요, 이렇게 바꾸면 안전해요"라고 알려줘요.

---

## 비슷한 이름 플러그인과의 차이점

| 구분 | **Claude Security** | security-guidance |
|---|---|---|
| 출시 | W30 (2026-07-20) | W22 (2026-05-28) |
| 작동 시점 | 요청 시 전체 스캔 | 코드 작성 **중** 실시간 검토 |
| 범위 | 코드베이스 **전체** | 현재 세션에서 **작성 중인 코드** |
| 주 용도 | 기존 코드 감사 | 새 코드 작성 시 즉시 피드백 |
| 결과 | 취약점 목록 + 패치 제안 | 위험 경고 + 즉시 수정 |

> 🍱 **비유로 설명하면**: `security-guidance`는 요리하면서 "이 재료는 날 것으로 먹으면 위험해"라고 바로 알려주는 **요리 도우미**, `claude-security`는 **요리가 다 끝난 후** "이 음식에 문제 있는 재료가 있는지" 전체를 검사하는 **식품 검사관**이에요.

---

## 설치 방법

```bash
# Claude Security 플러그인 설치
/plugin install claude-security

# 또는 플러그인 마켓플레이스에서 검색
/plugin search security
```

---

## 사용 방법

### 1. 전체 코드베이스 스캔

```bash
# 설치 후 스캔 시작
/security-scan

# 또는 자연어로 요청
"내 코드베이스 전체에서 보안 취약점 찾아줘"
```

### 2. 특정 파일/디렉토리만 스캔

```bash
"src/api/ 폴더에 있는 파일들만 보안 취약점 검사해줘"
"authentication.py 파일에 취약점이 있는지 확인해줘"
```

### 3. 발견된 취약점 패치 적용

```bash
# 클로드가 취약점 목록과 패치 코드를 제안하면:
"발견된 SQL 인젝션 취약점들 모두 수정해줘"

# 또는 선택적으로 적용
"첫 번째 취약점만 패치 적용해줘"
```

---

## 탐지 가능한 취약점 유형

> ⚠️ 탐지 가능한 취약점 유형은 공식 문서에 상세히 나와 있어요. 이 목록은 대표적인 예시예요 (추정).

| 카테고리 | 예시 취약점 |
|---|---|
| 🗄️ **인젝션** | SQL 인젝션, 커맨드 인젝션, XSS |
| 🔐 **인증/인가** | 약한 비밀번호 정책, 불충분한 권한 검사 |
| 🔒 **암호화** | 약한 암호화 알고리즘, 하드코딩된 비밀 키 |
| 📦 **의존성** | 알려진 취약점이 있는 라이브러리 버전 |
| 📂 **파일 처리** | 경로 탐색(Path Traversal), 파일 업로드 취약점 |

---

## 결과물 예시

스캔 후 클로드는 이런 형식으로 결과를 보여줘요:

```
## 발견된 취약점 (3건)

### 1. [높음] SQL 인젝션 — src/database/user.py:42
문제: 사용자 입력이 SQL 쿼리에 직접 삽입됨
현재 코드:
  query = f"SELECT * FROM users WHERE id = {user_id}"

권장 수정:
  query = "SELECT * FROM users WHERE id = ?"
  cursor.execute(query, (user_id,))

### 2. [중간] 하드코딩된 API 키 — config/settings.py:15
문제: API 키가 코드에 직접 노출됨
...
```

---

## 언제 사용하면 좋나요?

| 상황 | 사용 여부 |
|---|---|
| ✅ 새 기능 개발이 마무리됐을 때 | 배포 전 최종 보안 검토 |
| ✅ 레거시 코드를 인수받았을 때 | 기존 코드의 숨은 취약점 파악 |
| ✅ 정기적인 보안 감사 | 주기적으로 실행해서 보안 상태 모니터링 |
| ✅ 오픈소스 공개 전 | 공개 전 보안 취약점 제거 |
| ❌ 코드 작성 중 실시간 가이드 | `security-guidance` 플러그인을 사용하세요 |

---

## 관련 링크

- [공식 문서 — Claude Security 플러그인](https://code.claude.com/docs/en/claude-security.md) [공]
- [실시간 보안 가이드 플러그인 (security-guidance)](https://code.claude.com/docs/en/security-guidance.md) [공]
- [W30·W32 주간 업데이트](../../next/whats-new-w30-w32.md)
- [플러그인 마켓플레이스](./plugin-marketplace.md)
