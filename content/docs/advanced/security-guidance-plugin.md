---
title: "[공] 보안 가이던스 플러그인 — 코드를 쓰는 순간부터 취약점 자동 점검"
description: "security-guidance 플러그인 설치 한 번으로 Claude가 코드를 수정할 때마다 자동 보안 검사 실시. 커스텀 규칙 추가도 가능"
tags: ["고급", "보안", "security-guidance", "플러그인", "취약점", "보안검사", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-05-31"
---

<div class="note-star">
★ <strong>공식 플러그인</strong> — 2026-05-25 Week 22에 공식 Anthropic 마켓플레이스에서 공개. <code>[공]</code><br />
★ Claude Code CLI v2.1.144 이상 + Python 3.8 이상 필요.<br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## 이 플러그인이 뭔가요?

Claude가 코드를 수정하는 **그 순간**부터 자동으로 보안 취약점을 검사하고, 문제가 발견되면 **같은 세션에서 바로 수정**해줘요.

> 🛡️ **비유로 설명하면**: 워드프로세서 맞춤법 검사기처럼 — 타이핑하는 즉시 빨간 밑줄이 그어지는 것처럼, Claude가 코드를 쓰는 순간 인젝션·DOM 오염·안전하지 않은 역직렬화 같은 문제를 바로 잡아내고 고쳐줘요.

따로 "보안 검토해줘"라고 말하지 않아도 **자동으로** 작동해요.

---

## 설치 방법

```bash
# 1) 공식 Anthropic 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 2) 현재 세션에 즉시 적용 (재시작 불필요)
/reload-plugins
```

<div class="note-circle">
○ "마켓플레이스를 찾을 수 없다"는 오류가 나오면 아래를 먼저 실행하세요:<br />
<code>/plugin marketplace add anthropics/claude-plugins-official</code><br /><br />
○ 다음 세션부터는 자동 로드돼요. 지금 세션에만 <code>/reload-plugins</code>가 필요해요.
</div>

---

## 세 단계 보안 검사

이 플러그인은 **세 시점**에 각기 다른 깊이로 보안을 점검해요.

### 단계 1 — 파일 편집할 때마다 (즉시 패턴 검사)

파일이 저장되는 순간, 알려진 위험 패턴을 문자열 매칭으로 검사해요.

> ⚡ AI 모델 호출 없이 진행 → **추가 비용 없음**, 즉시 결과

검사 대상 예시:
| 카테고리 | 위험 코드 패턴 |
|----------|--------------|
| 동적 코드 실행 | `eval(`, `new Function`, `os.system`, `exec` |
| 안전하지 않은 역직렬화 | `pickle` |
| DOM 주입 | `dangerouslySetInnerHTML`, `.innerHTML =` |
| 워크플로우 파일 | `.github/workflows/` 내 파일 수정 |

### 단계 2 — 매 대화 턴 종료 후 (AI 리뷰)

Claude가 한 번 답하고 나면, 그 턴에서 바뀐 모든 코드를 **별도 AI 인스턴스**가 백그라운드에서 검토해요.

> 🔍 패턴 매칭으로 못 잡는 것들: 권한 우회, 불안전한 직접 객체 참조, 인젝션, SSRF, 약한 암호화

<div class="note-circle">
○ 백그라운드 실행이라 Claude의 답변 속도에 영향 없어요<br />
○ 문제 발견 시 Claude가 추가 수정 작업을 시작해요<br />
○ 한 턴에 최대 30개 파일 변경까지 검사, 연속 3회까지 재검사
</div>

### 단계 3 — git commit/push 시 (심층 AI 리뷰)

Claude가 `git commit` 또는 `git push`를 실행하면, 변경 코드 **주변 맥락**까지 읽어서 심층 분석해요.

> 🏗️ 주변 코드(호출자, 검증 로직, 관련 파일)를 함께 분석 → 오탐(false positive) 최소화

<div class="note-circle">
○ 내 셸에서 직접 실행한 commit은 검사 안 해요 (Claude가 실행한 것만)<br />
○ 1시간 rolling 기준 최대 20회 commit 리뷰
</div>

---

## 나만의 규칙 추가하기

### 1) AI 리뷰용 프로젝트 보안 지침

`.claude/claude-security-guidance.md` 파일을 만들어서 우리 프로젝트만의 규칙을 추가해요.

```markdown
# 이 프로젝트의 보안 지침

- INFO 레벨 이상 로그에 customer_id, account_number를 포함하지 마세요.
- /admin 경로 아래 모든 라우트는 DB 조회 전에 require_role("admin")을 반드시 호출.
- 토큰 비교는 === 대신 crypto.timingSafeEqual을 사용.
```

### 2) 패턴 매칭 규칙 추가

`.claude/security-patterns.yaml` 파일로 커스텀 패턴을 추가해요.

```yaml
patterns:
  - rule_name: internal_api_key
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키 감지. 시크릿 매니저에서 불러오세요."
  
  - rule_name: tenant_unfiltered_query
    regex: "\.objects\.all\(\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드에서는 org_id로 반드시 필터링하세요."
```

| 필드 | 설명 |
|------|------|
| `rule_name` | 경고 메시지에 표시될 이름 |
| `reminder` | Claude에게 전달될 경고 문구 (최대 1KB) |
| `substrings` | 검색할 문자열 목록 |
| `regex` | Python 정규식 (substrings 대신 사용) |
| `paths` | 적용할 파일 경로 glob (선택) |

---

## 비용

| 검사 단계 | 비용 |
|-----------|------|
| 파일 편집 시 패턴 매칭 | **무료** (AI 호출 없음) |
| 매 턴 종료 AI 리뷰 | 일반 Claude 요청과 동일하게 과금 |
| commit/push AI 리뷰 | 에이전트형 (여러 턴) — 1시간 20회 제한 |

<div class="note-circle">
○ AI 리뷰는 기본적으로 Claude Opus 4.7 모델을 사용해요<br />
○ 모델 변경: <code>SECURITY_REVIEW_MODEL</code> 환경변수 (턴 리뷰), <code>SG_AGENTIC_MODEL</code> (commit 리뷰)<br />
○ 모든 플랜에서 사용 가능
</div>

---

## 비활성화·삭제

특정 레이어만 끄거나, 전체를 끌 수 있어요.

| 환경변수 | 효과 |
|----------|------|
| `ENABLE_PATTERN_RULES=0` | 파일 편집 시 패턴 검사 비활성화 |
| `ENABLE_STOP_REVIEW=0` | 매 턴 AI 리뷰 비활성화 |
| `ENABLE_COMMIT_REVIEW=0` | commit/push AI 리뷰 비활성화 |
| `SECURITY_GUIDANCE_DISABLE=1` | 플러그인 전체 일시 비활성화 |

```bash
# 내 유저 설정에서 비활성화
/plugin disable security-guidance@claude-plugins-official

# 완전 제거
/plugin uninstall security-guidance@claude-plugins-official
```

<div class="note-circle">
○ 프로젝트 설정(<code>.claude/settings.json</code>)으로 활성화된 경우, 비활성화하면<br />
　개인 <code>.claude/settings.local.json</code>에 오버라이드 기록 (팀원은 영향 없음)
</div>

---

## 다른 보안 도구와의 관계

이 플러그인 하나로 모든 보안이 해결되는 건 아니에요. 각 단계별로 역할이 달라요.

| 단계 | 도구 | 역할 |
|------|------|------|
| **코드 작성 중** | 보안 가이던스 플러그인 | Claude가 만드는 코드 즉시 점검 |
| **필요할 때** | `/security-review` 명령 | 현재 브랜치 전체 한 번 점검 |
| **PR 제출 시** | Code Review (Team/Enterprise) | 전체 코드베이스 맥락으로 점검 |
| **CI 단계** | 기존 정적 분석·의존성 스캐너 | 정책 강제, 공급망 보안 |

---

## 요약

```
🛡️ 설치: /plugin install security-guidance@claude-plugins-official → /reload-plugins
🔍 3단계 검사: 편집 시 패턴 → 턴 종료 AI → commit 심층 AI
📝 커스텀 규칙: .claude/claude-security-guidance.md (AI 지침)
📝 커스텀 패턴: .claude/security-patterns.yaml (패턴 매칭)
💰 비용: 패턴 검사 무료, AI 리뷰는 일반 요청과 동일
```
