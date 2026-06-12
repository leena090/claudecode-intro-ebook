---
title: "[공] Security Guidance 플러그인 — AI가 쓴 코드를 AI가 바로 점검"
description: "security-guidance 플러그인을 설치하면 Claude가 코드를 작성하는 동시에 보안 취약점을 발견하고 같은 세션 안에서 바로 수정해요"
tags: ["security", "보안", "플러그인", "취약점", "security-guidance", "고급", "자동생성"]
category: "advanced"
order: 30
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — 2026 Week 22 신규 기능. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## Security Guidance 플러그인이 뭔가요?

Claude가 코드를 작성할 때 **동시에** 그 코드의 보안 취약점을 검토하고, 발견하면 **같은 세션 안에서 바로 수정**해주는 플러그인이에요.

> 🍱 **비유**: 건물을 지을 때 건축가가 설계도를 그리면서 동시에 안전 점검관이 옆에서 "이 부분은 지진에 취약해요"라고 바로 알려주고, 건축가가 즉시 수정하는 것처럼요.

기존에는 코드를 다 짠 다음에 보안 검토를 따로 했다면, 이 플러그인은 **짜면서 동시에 점검**해요.

---

## 설치 방법

```bash
# 플러그인 설치
/plugin install security-guidance

# 설치 확인
/plugin list
```

설치 후 별도 설정 없이 바로 작동해요. Claude가 코드를 작성할 때마다 자동으로 보안 검토를 병행해요.

---

## 어떤 취약점을 잡아주나요?

| 취약점 유형 | 설명 | 예시 |
|-----------|------|------|
| **SQL 인젝션** | 악의적 SQL 코드 삽입 | `"SELECT * WHERE id=" + userId` |
| **XSS** | 악성 스크립트 삽입 | `innerHTML = userInput` |
| **인증 문제** | 잘못된 로그인/권한 체크 | 비밀번호 평문 저장 |
| **민감 정보 노출** | API 키·비밀번호 코드에 직접 기입 | `API_KEY = "sk-abc123"` |
| **CSRF** | 사이트 간 요청 위조 | CSRF 토큰 미검증 |
| **안전하지 않은 역직렬화** | 데이터 변환 시 취약점 | pickle.loads(untrusted) |

---

## 실제 작동 예시

**Claude가 이런 코드를 작성하려 하면:**
```python
def get_user(user_id):
    query = "SELECT * FROM users WHERE id = " + user_id
    return db.execute(query)
```

**Security Guidance가 바로 감지하고:**
```
⚠️ 보안 경고: SQL 인젝션 취약점 감지
- user_id를 직접 쿼리에 연결하면 악의적 입력으로 DB 전체가 노출될 수 있어요

🔧 수정된 코드:
```

**자동 수정 제안:**
```python
def get_user(user_id):
    query = "SELECT * FROM users WHERE id = ?"
    return db.execute(query, (user_id,))  # 파라미터화된 쿼리
```

---

## 프로젝트별 보안 규칙 추가

특정 프로젝트에 맞는 보안 규칙을 추가로 정의할 수 있어요.

```markdown
<!-- CLAUDE.md -->
## 보안 규칙
- 모든 사용자 입력은 반드시 검증(validation) 후 사용
- 비밀 키는 환경 변수(.env)에만 저장, 절대 코드에 직접 쓰지 말 것
- 외부 라이브러리 추가 시 최신 버전 확인 필수
```

---

## 기존 보안 검토 방법과 비교

| 항목 | 기존 방식 | Security Guidance 플러그인 |
|------|---------|--------------------------|
| 타이밍 | 코드 완성 후 별도 검토 | **코드 작성 중 동시에** |
| 발견 시점 | 늦게 (리뷰/배포 단계) | 빠르게 (작성 단계) |
| 수정 편의 | 따로 수정해야 함 | **같은 세션에서 즉시 수정** |
| 도구 필요 | 별도 보안 스캐너 | Claude Code 안에서 완결 |

> 🍱 **비유**: 맞춤법 자동 교정처럼 — 글을 다 쓰고 나서 맞춤법 검사를 돌리는 것(기존 방식)보다, 쓰면서 빨간 줄이 뜨는 것(플러그인)이 훨씬 빠르게 수정할 수 있어요.

---

## 주의 사항

<div class="note-circle">
○ 보안 플러그인이 있어도 100% 완벽하지 않아요 — 심층 보안 검토는 전문가에게 별도로 받으세요<br />
○ 모든 경고가 반드시 취약점은 아닐 수 있어요 — Claude의 설명을 읽고 판단하세요<br />
○ 보안에 민감한 금융·의료 서비스는 이 플러그인 외에도 추가 보안 감사를 권장해요
</div>

`[공]` 출처: code.claude.com/docs/en/security-guidance
