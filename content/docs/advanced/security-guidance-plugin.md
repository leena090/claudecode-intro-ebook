---
title: "[공] security-guidance 플러그인 — 코딩하면서 보안 취약점 자동 감지"
description: "클로드가 코드를 작성할 때 보안 취약점을 실시간으로 스스로 검토하고 수정하는 플러그인. eval, innerHTML, SQL 인젝션 등 위험 패턴을 3단계로 자동 감지해요."
tags: ["고급", "보안", "security-guidance", "플러그인", "취약점", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-06-05"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code v2.1.144+ 에서 사용 가능. <a href="https://code.claude.com/docs/en/security-guidance">원문 보기</a> <code>[공]</code>
<br />★ 이 플러그인은 <strong>모든 플랜</strong>에서 사용 가능해요.
</div>

## security-guidance 플러그인이 뭔가요?

클로드가 코드를 작성하는 **바로 그 순간**, 보안 취약점을 스스로 발견하고 같은 세션에서 고쳐주는 플러그인이에요.

> 🍱 **비유로 설명하면**: 요리사(클로드)가 음식을 만들면서 옆에 위생 검사관이 계속 지켜보는 거예요. "이 칼 덜 닦인 거 아닌가요?", "이 식재료 날것 아닌가요?" — 즉시 알려주고 바로 고쳐요.

---

## 설치 방법

Claude Code 세션 안에서:

```
/plugin install security-guidance@claude-plugins-official
```

마켓플레이스가 없다는 오류가 나면 먼저:
```
/plugin marketplace add anthropics/claude-plugins-official
```

설치 후 현재 세션에 적용:
```
/reload-plugins
```

---

## 3단계 자동 보안 검토

### 1단계: 파일 수정 즉시 — 패턴 매칭 (비용 없음)

파일을 수정하는 순간 위험한 패턴을 즉시 감지해요.

| 패턴 카테고리 | 예시 |
|--------------|------|
| 동적 코드 실행 | `eval()`, `new Function()`, `os.system()` |
| 안전하지 않은 역직렬화 | `pickle` |
| DOM 인젝션 | `dangerouslySetInnerHTML`, `.innerHTML =`, `document.write` |
| GitHub Actions 워크플로우 | `.github/workflows/` 아래 파일 수정 |

> 💡 이 단계는 AI 모델 호출이 없어요. 추가 비용이 발생하지 않아요.

### 2단계: 각 턴(turn) 종료 시 — AI 모델 리뷰

클로드가 한 번 응답을 마칠 때마다 **그 턴에서 변경한 모든 파일**을 보안 관점에서 리뷰해요. 패턴 매칭이 잡지 못하는 문제를 찾아요.

| 이런 문제를 찾아요 |
|------------------|
| 인증 우회 (Authorization bypass) |
| 안전하지 않은 직접 객체 참조 |
| 인젝션 취약점 |
| 서버 측 요청 위조 (SSRF) |
| 약한 암호화 |

### 3단계: git commit/push 시 — 심층 에이전트 리뷰

클로드가 `git commit` 또는 `git push`를 실행할 때, 변경 코드 주변 전체를 깊이 있게 분석해요.

> 🍱 **비유로 설명하면**: 1단계는 금속 탐지기 통과, 2단계는 엑스레이 검사, 3단계는 폭발물 처리반이 직접 조사하는 수준이에요.

---

## 내 프로젝트에 맞는 규칙 추가하기

### 모델 리뷰에 지침 추가

`.claude/claude-security-guidance.md` 파일을 만들어요.

```markdown
# 이 프로젝트 보안 지침

- customer_id, account_number는 INFO 레벨 로그에 남기지 말 것
- /admin 아래 모든 라우트는 require_role("admin") 호출 필수
- 토큰 비교에는 crypto.timingSafeEqual 사용 (=== 금지)
```

### 패턴 매칭 규칙 추가

`.claude/security-patterns.yaml` 파일을 만들어요.

```yaml
patterns:
  - rule_name: internal_api_key
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키 발견! 시크릿 매니저에서 불러오세요."
  - rule_name: tenant_query
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드는 org_id로 필터링이 필수예요."
```

---

## 비용

| 단계 | 비용 |
|------|------|
| 1단계 (패턴 매칭) | 없음 |
| 2단계 (턴 종료 리뷰) | 일반 Claude 요청과 동일 |
| 3단계 (commit 리뷰) | 추가 에이전트 비용 (시간당 최대 20회) |

기본으로 **Claude Opus 4.7** 모델을 사용해요.

```bash
# 모델 변경 (비용 절감)
export SECURITY_REVIEW_MODEL=claude-sonnet-4-6
export SG_AGENTIC_MODEL=claude-sonnet-4-6
```

---

## 일부 또는 전체 비활성화

```bash
# 패턴 매칭만 끄기
export ENABLE_PATTERN_RULES=0

# 턴 종료 리뷰만 끄기
export ENABLE_STOP_REVIEW=0

# commit 리뷰만 끄기
export ENABLE_COMMIT_REVIEW=0

# 플러그인 전체 끄기
export SECURITY_GUIDANCE_DISABLE=1
```

세션에서 일시 비활성화:
```
/plugin disable security-guidance@claude-plugins-official
```

---

## 보안 도구 레이어 전체 이해

| 단계 | 도구 | 역할 |
|------|------|------|
| **코딩 중** | security-guidance 플러그인 | 작성 중인 코드 실시간 감지 |
| 요청 시 | `/security-review` | 현재 브랜치 전체 보안 검토 |
| PR 시 | Code Review (Team/Enterprise) | 멀티에이전트 PR 리뷰 |
| CI/CD | 기존 정적 분석 도구 | 언어별 규칙, 의존성 검사 |

> 🍱 **비유로 설명하면**: security-guidance는 공장 라인의 실시간 품질 검사, `/security-review`는 출고 전 최종 검수, Code Review는 고객 납품 전 QA팀 검수예요.

---

## 시스템 요구사항

| 항목 | 요건 |
|------|------|
| Claude Code | v2.1.144 이상 |
| Python | 3.8 이상 (`python3`, `python`, `py -3` 중 하나) |
| git 저장소 | 2·3단계 리뷰에 필요 (1단계는 어디서든 작동) |

---

## 관련 가이드

- [Week 22 업데이트 요약](/docs/next/whats-new-w22) — 이 플러그인이 포함된 주간 업데이트
- [공식 문서 (영어)](https://code.claude.com/docs/en/security-guidance)
- [플러그인 설치 가이드](/docs/advanced/plugins)
