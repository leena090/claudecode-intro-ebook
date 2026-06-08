---
title: "[공] 보안 가이던스 플러그인 — Claude가 코드 쓰는 동시에 취약점 잡기"
description: "security-guidance 플러그인을 설치하면 Claude가 코드를 작성할 때마다 자동으로 보안 취약점을 검사하고, 같은 세션에서 바로 수정까지 해줘요."
tags: ["자동생성", "보안", "security-guidance", "플러그인", "취약점", "Week22"]
category: "advanced"
order: 28
lastUpdated: "2026-06-08"
---

<div class="note-star">
★ <strong>공식 플러그인</strong> — 2026-05-29 Claude Code Week 22에 출시된 Anthropic 공식 플러그인이에요. Claude Code v2.1.144 이상, Python 3.8 이상이 필요합니다. <code>[공]</code>
</div>

## 보안 가이던스 플러그인이란?

Claude가 코드를 작성하는 **바로 그 순간**, 보안 취약점을 검사하고 같은 세션에서 즉시 고쳐주는 플러그인이에요.

> 🍱 **비유로 설명하면**: 요리사가 요리하는 동시에 식품안전 전문가가 옆에서 "이 재료 유통기한 지났어요!"라고 알려주고, 요리사가 바로 교체하는 것과 같아요. PR(풀 리퀘스트)이 올라가기 전에, 사람 검수자에게 가기 전에 미리 잡아주는 거예요.

---

## 설치 방법

Claude Code 세션에서 공식 마켓플레이스에서 설치해요:

```
> /plugin install security-guidance@claude-plugins-official
```

설치 후 현재 세션에서 즉시 활성화:

```
> /reload-plugins
```

### 모든 세션에서 자동으로 켜두려면

사용자 설정에 추가하면 매번 설치하지 않아도 돼요 (프로젝트 `.claude/settings.json`에 추가):

```json
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

> 📌 **참고**: 웹 버전 Claude Code에서는 이 설정 파일 방식을 사용해야 해요 (웹 세션은 Anthropic 서버에서 실행되기 때문).

---

## 3단계 검사 시스템

플러그인은 **3단계**로 나뉘어서 보안을 검사해요:

### 1️⃣ 파일 편집 시 — 즉각 패턴 매칭

Claude가 파일을 수정할 때마다 **모델 호출 없이** 위험 패턴을 찾아요. 추가 비용이 없어요.

검사하는 예시:
- `eval(`, `new Function` — 코드 동적 실행
- `pickle` — 안전하지 않은 직렬화(deserialization)
- `innerHTML =`, `document.write` — DOM 주입(injection)
- `.github/workflows/` 편집 — 레포 권한이 생기는 위험

### 2️⃣ 턴(Turn) 종료 시 — 모델 리뷰

Claude가 한 번의 답변을 마치면, 그 턴에서 변경된 코드 전체를 **별도 Claude 인스턴스**가 백그라운드에서 검토해요. 답변 속도에 영향이 없어요.

패턴 매칭으로 못 잡는 것들을 찾아요:
- 인증 우회(authorization bypass)
- 안전하지 않은 직접 객체 참조
- 인젝션(injection)
- SSRF (서버 측 요청 위조)
- 취약한 암호화

### 3️⃣ 커밋/푸시 시 — 심층 에이전트 리뷰

Claude가 `git commit` 또는 `git push`를 실행할 때, 주변 코드(호출자, sanitizer 등)까지 읽어서 더 정확하게 판단해요. 오탐(false positive)을 줄이기 위해 맥락을 더 넓게 봐요.

---

## 검사 비용은 얼마나 드나요?

| 레이어 | 비용 |
|---|---|
| 파일 편집 시 패턴 매칭 | **무료** (모델 호출 없음) |
| 턴 종료 시 모델 리뷰 | 일반 Claude 요청과 동일 |
| 커밋 시 심층 리뷰 | 에이전트 리뷰 (여러 턴, 시간당 최대 20회) |

리뷰 모델은 기본적으로 **Opus 4.7**을 사용해요. 환경 변수로 변경 가능:
- `SECURITY_REVIEW_MODEL` — 턴 종료 리뷰 모델
- `SG_AGENTIC_MODEL` — 커밋 리뷰 모델

---

## 나만의 규칙 추가하기

### 모델 리뷰용 가이드 추가

프로젝트 안에 `.claude/claude-security-guidance.md` 파일을 만들어요:

```markdown
# 이 프로젝트 보안 가이드

- INFO 레벨 이상 로그에 customer_id나 account_number 기록 금지
- /admin 경로는 모든 DB 접근 전에 require_role("admin") 호출 필수
- 토큰 비교에는 === 대신 crypto.timingSafeEqual 사용
```

### 패턴 매칭 규칙 추가

`.claude/security-patterns.yaml` 파일로 정규식·키워드 규칙을 추가해요:

```yaml
patterns:
  - rule_name: api_key_hardcoded
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키예요. 시크릿 매니저에서 불러오세요."
  - rule_name: tenant_unfiltered
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드에서는 org_id로 필터링해야 해요."
```

---

## 플러그인 끄기

일시 중단:
```
> /plugin disable security-guidance@claude-plugins-official
```

개별 레이어만 끄려면 환경 변수:
- `ENABLE_PATTERN_RULES=0` — 패턴 매칭 끄기
- `ENABLE_STOP_REVIEW=0` — 턴 종료 리뷰 끄기
- `ENABLE_COMMIT_REVIEW=0` — 커밋 리뷰 끄기
- `SECURITY_GUIDANCE_DISABLE=1` — 전체 끄기

---

## 다른 보안 도구와 어떻게 함께 쓰나요?

| 단계 | 도구 | 역할 |
|---|---|---|
| 코드 작성 중 | **security-guidance 플러그인** | Claude 작성 코드의 즉각 취약점 수정 |
| 필요할 때 | `/security-review` | 현재 브랜치 전체 보안 점검 |
| PR 제출 시 | Code Review (Team/Enterprise) | 전체 코드베이스 컨텍스트 기반 리뷰 |
| CI/CD | 기존 정적 분석 도구 | 언어별 규칙, 의존성 검사 |

> ⚠️ **중요**: 이 플러그인은 방어의 한 레이어예요. 모든 취약점을 100% 잡아준다고 보장하지 않아요. 나머지 보안 도구와 함께 사용하세요.

---

## 관련 문서

- [플러그인 소개](/docs/advanced/plugins) — 플러그인 설치·관리 방법
- [훅(Hooks) 자동화](/docs/config/hooks-intro) — 플러그인이 내부적으로 사용하는 기술
- [Week 21-22 업데이트](/docs/next/whats-new-w21-w22) — 이 플러그인이 포함된 릴리즈
