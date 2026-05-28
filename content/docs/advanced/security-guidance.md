---
title: "[공] security-guidance 플러그인 — 클로드가 스스로 보안 취약점을 잡아요"
description: "코드를 작성하면서 동시에 보안 취약점도 검토해주는 security-guidance 플러그인. 설치 방법과 어떤 보안 문제를 잡는지 쉽게 설명해요."
tags: ["자동생성", "security-guidance", "보안", "플러그인", "취약점", "XSS", "SQL 인젝션", "OWASP"]
category: "advanced"
order: 28
lastUpdated: "2026-05-28"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — code.claude.com/docs/en/security-guidance. <code>[공]</code><br />
★ <strong>핵심</strong>: Claude Code가 코드를 작성할 때, 같은 세션 안에서 <strong>자기가 쓴 코드의 보안 문제를 스스로 검토하고 고쳐요.</strong>
</div>

## security-guidance가 뭔가요?

**security-guidance**(시큐리티-가이던스)는 Claude Code의 **공식 플러그인**(plugin)이에요.

이 플러그인을 설치하면 클로드가 코드를 작성할 때마다 자동으로 이런 질문을 자기 자신에게 해요:

> "내가 방금 쓴 코드에 보안 구멍이 있지 않을까?"

그리고 문제를 발견하면 **같은 세션 안에서 바로 고쳐요.**

> 🍱 **비유**: 요리사가 음식을 만들면서 동시에 음식 안전 기준도 스스로 체크하는 것. 요리 끝나고 나중에 검사하는 게 아니라, **만들면서 실시간으로** 확인해요.

---

## 어떤 보안 문제를 잡나요?

일반적으로 보안 취약점 리스트로 유명한 **OWASP Top 10**(오와스프 탑 텐) 기준의 문제들이에요:

| 취약점 | 예시 | 설명 |
|---|---|---|
| **XSS** | `<script>` 삽입 | 악성 코드를 웹페이지에 심는 공격 |
| **SQL 인젝션** | `'; DROP TABLE--` | DB 쿼리를 조작하는 공격 |
| **인증 오류** | 비밀번호 평문 저장 | 로그인 관련 보안 구멍 |
| **민감 정보 노출** | API 키 하드코딩 | 코드에 비밀 값이 그대로 박혀있는 경우 |
| **잘못된 권한** | 누구나 admin 접근 | 권한 체크 미흡 |

> 🍱 **비유**: 집을 짓는데 현관 자물쇠 없이 짓거나, 창문이 잠기지 않는 구조로 짓는 실수들 — 설계할 때 바로 지적받으면 훨씬 낫잖아요.

---

## 설치 방법

### 방법 1: `/install-plugin` 명령 (가장 쉬움)

```
/install-plugin security-guidance
```

Claude Code 세션 안에서 위 명령을 치면 자동으로 설치돼요.

### 방법 2: `.claude/settings.json`에 직접 추가

```json
{
  "plugins": [
    "security-guidance"
  ]
}
```

설치 후에는 **별도 명령 없이 자동**으로 작동해요.

---

## 실제로 어떻게 작동하나요?

예를 들어 클로드에게 "사용자 검색 기능 만들어줘"라고 하면:

**Without security-guidance:**
```python
# 클로드가 만들어준 코드 (취약한 버전)
def search_user(username):
    query = "SELECT * FROM users WHERE name = '" + username + "'"
    return db.execute(query)
```
→ SQL 인젝션 취약점이 그대로 남아있음 😟

**With security-guidance 설치:**
```python
# 클로드가 만들고 스스로 고친 코드 (안전한 버전)
def search_user(username):
    query = "SELECT * FROM users WHERE name = ?"
    return db.execute(query, (username,))  # 파라미터 바인딩 사용
```
→ 자동으로 안전한 방식으로 수정됨 ✅

---

## 누가 쓰면 좋을까요?

| 상황 | security-guidance 추천 여부 |
|---|---|
| 웹 서비스·API 개발 | ✅ 강력 추천 |
| 사용자 입력을 받는 코드 작성 | ✅ 강력 추천 |
| DB와 연동하는 기능 개발 | ✅ 강력 추천 |
| 내부 스크립트·개인 도구 | 선택적 |
| 데이터 분석·주피터 노트북 | 선택적 |

---

## 주의사항

- 이 플러그인은 **보조 도구**예요. 100% 모든 취약점을 잡아주진 않아요.
- 중요한 프로젝트는 전문 보안 감사(security audit)를 별도로 받는 게 좋아요.
- 공식 발표 기준 — 세부 감지 항목은 플러그인 업데이트에 따라 변경될 수 있어요.

---

**참고 링크**
- [공식 문서] code.claude.com/docs/en/security-guidance
- [관련] 플러그인 설치 가이드 — `advanced/plugins.md`
- [관련] 권한 설정 — `config/permissions-guide.md`
