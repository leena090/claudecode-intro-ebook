---
title: "[공] security-guidance 플러그인 — 코딩하면서 실시간 보안 점검"
description: "security-guidance 플러그인을 설치하면 Claude가 코드를 작성하는 그 순간에 보안 취약점을 스스로 검토하고, 같은 세션에서 바로 수정까지 해줘요."
tags: ["고급", "security", "보안", "플러그인", "security-guidance", "자동생성"]
category: "advanced"
order: 29
lastUpdated: "2026-06-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05 Week 22 업데이트 + 공식 문서 신규 추가. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## security-guidance 플러그인이 뭔가요?

**security-guidance** 는 Claude가 코드를 작성하는 **바로 그 순간에** 보안 취약점을 스스로 검토하고, 문제를 발견하면 **같은 세션에서 즉시 수정**까지 해주는 플러그인이에요.

> 🍱 **비유**: 요리사(Claude)가 요리를 만들면서 동시에 식품 안전 담당자(security-guidance)가 옆에서 실시간으로 "이 재료 조합은 식중독 위험 있어요!"라고 알려주고 바로 다른 재료로 바꿔주는 거예요. 요리 다 끝나고 나서 검사하는 게 아니에요.

---

## 설치 방법

```bash
# 플러그인 설치
claude plugins install security-guidance

# 설치 확인
claude plugins list
```

설치만 하면 **별도 설정 없이 자동으로 작동**해요. Claude가 코드를 작성할 때마다 뒤에서 조용히 검토하고 있어요.

---

## 어떤 취약점을 잡아주나요?

security-guidance가 점검하는 주요 보안 문제들 (OWASP Top 10 기준):

| 취약점 | 설명 | 예시 |
|--------|------|------|
| 💉 **SQL 인젝션** | 사용자 입력이 SQL 쿼리에 직접 들어가는 경우 | `"SELECT * FROM users WHERE id = " + userId` |
| 🌐 **XSS (크로스사이트 스크립팅)** | 입력값이 HTML에 그대로 출력되는 경우 | `innerHTML = userInput` |
| 🔑 **취약한 인증** | 비밀번호 평문 저장, 토큰 만료 없음 | `password = "1234"` 하드코딩 |
| 🔓 **민감 정보 노출** | API 키, 비밀번호가 코드에 박혀 있는 경우 | `apiKey = "sk-abc123..."` |
| 📂 **경로 조작** | 사용자 입력으로 파일 경로 구성 | `path = "../" + userInput` |

---

## 실제로 어떻게 작동하나요?

### Claude가 코드 작성 중:

```python
# Claude가 이런 코드를 생성했을 때
def get_user(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"  # ← 위험!
    return db.execute(query)
```

### security-guidance가 개입:

```
🔒 보안 검토 중...

⚠️ 취약점 발견: SQL 인젝션 가능성
   위치: get_user() 함수, f-string으로 쿼리 구성
   위험도: 높음 (High)

🔧 자동 수정 제안:
def get_user(user_id):
    query = "SELECT * FROM users WHERE id = ?"
    return db.execute(query, (user_id,))  # 파라미터화 쿼리 사용

수정 적용하시겠어요? [y/n]
```

> 🍱 **비유**: 문서 작성 중에 자동으로 맞춤법 검사가 붉은 줄로 표시해주고, 클릭 한 번에 고쳐주는 것처럼 — 보안 취약점도 즉시 찾아서 수정 제안을 해줘요.

---

## 세션 종료 시 보안 리포트

세션이 끝날 때 이번 세션에서 발견한 취약점 목록을 요약해서 파일로 저장해요:

```
📄 security-report-2026-06-10.md 생성됨

이번 세션 보안 요약:
  ✅ 수정 완료: 3건
     - SQL 인젝션 (payment.py:47)
     - XSS 취약점 (template.html:23)
     - 하드코딩된 API 키 (config.py:12)
  ⚠️ 검토 필요: 1건
     - 세션 만료 설정 없음 (auth.py:89) — 여러분이 직접 결정
```

---

## 설정 옵션 (고급)

```json
// ~/.claude/settings.json
{
  "plugins": {
    "security-guidance": {
      "severity_threshold": "medium",  // low | medium | high | critical
      "auto_fix": true,               // 자동 수정 여부
      "report_on_exit": true,          // 세션 종료 시 리포트 생성
      "check_on_save": true            // 파일 저장 시마다 점검
    }
  }
}
```

---

## 주의사항

<div class="note-circle">
○ security-guidance는 1차 필터예요 — 전문 보안 감사(Security Audit)를 대체하지 않아요<br />
○ 수정 여부는 항상 여러분이 최종 결정해요 — 자동 수정 설정을 해도 확인 과정이 있어요<br />
○ 검토 속도가 살짝 느려질 수 있어요 — 보안이 중요한 프로젝트에서만 쓰는 게 효율적이에요
</div>

---

## 언제 써야 할까요?

```
✅ 쓰면 좋은 경우:
   - 웹 서비스, API 서버 개발
   - 사용자 데이터를 다루는 프로젝트
   - 팀 프로젝트 (다른 사람 코드도 점검 가능)
   - 보안 교육이 필요한 주니어 개발자

❌ 안 써도 되는 경우:
   - 외부 접근이 없는 로컬 스크립트
   - 단순 데이터 분석, 수식 계산
   - 빠른 프로토타이핑 (나중에 리팩토링 예정인 코드)
```

---

## 관련 기능

| 기능 | 설명 |
|------|------|
| `/code-review` | 작성 완료 후 전체 코드 리뷰 |
| `/code-review ultra` | 클라우드 멀티 에이전트 심층 리뷰 |
| **security-guidance** (이 플러그인) | 코딩 중 실시간 점검 |

> 🍱 **비유**: security-guidance는 "운전하면서 실시간 안전 경고", `/code-review`는 "목적지 도착 후 차량 점검" — 둘 다 쓰면 가장 안전해요.

📄 관련 내용 → [Permission Modes 가이드](/docs/advanced/permission-modes)
