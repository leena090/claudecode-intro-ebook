---
title: "[공] 보안 가이드 플러그인(Security Guidance Plugin) — Claude가 코드 짜면서 스스로 보안 검사"
description: "설치만 하면 Claude가 코드를 작성할 때마다 자동으로 보안 취약점을 검사하고 같은 세션 안에서 바로 고쳐주는 플러그인"
tags: ["보안", "security", "플러그인", "취약점", "자동검사", "고급", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code v2.1.144 이상에서 사용 가능. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## 보안 가이드 플러그인이란?

**Security guidance plugin(시큐리티 가이던스 플러그인, 보안 가이드 플러그인)** 은 Claude가 코드를 짤 때 **자동으로 보안 취약점을 검사하고 같은 세션 안에서 바로 고쳐주는** 기능이에요.

> 🍱 **비유**: 워드 프로세서에서 글을 쓸 때 맞춤법 자동 수정이 항상 켜져 있는 것처럼요. 내가 따로 "맞춤법 검사해줘"라고 하지 않아도 빨간 밑줄이 자동으로 표시되는 것처럼, 이 플러그인을 설치해두면 Claude가 코드를 짜면서 "이 부분 보안 위험 있어요, 바로 고칠게요"라고 알아서 처리해요.

**장점:**

- ✅ 별도 명령어 없이 자동으로 작동
- ✅ PR(풀 리퀘스트)에 올라가기 전에 문제를 잡음
- ✅ 문제를 발견하면 같은 세션에서 바로 수정
- ✅ 모든 플랜에서 사용 가능

---

## 설치 방법

```bash
# 1단계: 공식 Anthropic 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# (마켓플레이스를 못 찾는다고 나오면 먼저 이걸 실행)
/plugin marketplace add anthropics/claude-plugins-official

# 2단계: 현재 세션에 바로 적용
/reload-plugins
```

<div class="note-circle">
○ 최소 요구사항: Claude Code v2.1.144 이상, Python 3.8 이상 (PATH에 설치되어 있어야 함)<br />
○ git 저장소 안에 있어야 일부 기능이 작동해요<br />
○ 첫 실행 시 Python 가상 환경 설정이 필요해요 (자동으로 됩니다)
</div>

---

## 어떻게 검사하나요? — 3단계 자동 검사

| 검사 시점 | 방법 | 검사 깊이 |
|-----------|------|-----------|
| **파일 수정할 때마다** | 패턴 매칭 (AI 없음) | 빠른 위험 패턴 감지 |
| **Claude 응답 완료 후** | AI 모델 검토 | 로직 수준 취약점 |
| **`git commit` / `git push` 시** | AI 에이전트 심층 검토 | 주변 코드까지 포함한 정밀 분석 |

### 1. 파일 수정할 때마다

코드를 저장할 때마다 즉시 위험 패턴을 감지해요. AI를 쓰지 않아 비용이 들지 않아요.

감지하는 패턴 예시:

| 패턴 | 위험 이유 |
|------|-----------|
| `eval()`, `new Function` | 임의 코드 실행 가능 |
| `pickle` (Python) | 안전하지 않은 역직렬화 |
| `innerHTML =`, `document.write` | XSS 취약점 (웹 공격) |
| `.github/workflows/` 수정 | 저장소 권한 침해 가능 |

### 2. 응답 완료 후 (End-of-turn)

Claude가 한 번 응답을 완료하면 그 대화 중 바뀐 모든 파일을 AI가 검토해요. 백그라운드에서 실행되므로 여러분 화면에 바로 표시되지 않고, 문제 발견 시 Claude가 다음 대화에서 수정해요.

감지 예시: 권한 우회, SQL 인젝션, SSRF, 약한 암호화 등

### 3. Commit/Push 시 심층 검토

Claude가 `git commit` 또는 `git push` 명령을 실행할 때, 변경 사항 주변 코드(호출하는 곳, 관련 파일)까지 포함해서 더 정밀하게 검사해요.

---

## 내 프로젝트만의 보안 규칙 추가하기

기본 규칙 외에 프로젝트 특유의 규칙을 추가할 수 있어요:

### AI 검토용 규칙 파일

`.claude/claude-security-guidance.md` 파일을 만들어요:

```markdown
# 우리 프로젝트 보안 규칙

- customer_id, account_number는 INFO 레벨 이상 로그에 남기지 말 것
- /admin 라우트는 반드시 require_role("admin") 먼저 호출할 것
- 토큰 비교는 === 대신 timingSafeEqual 사용
```

### 패턴 검사 규칙 파일

`.claude/security-patterns.yaml` 파일로 빠른 패턴 검사 규칙을 추가해요:

```yaml
patterns:
  - rule_name: api_key_leak
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키 발견. 비밀 관리자에서 불러오세요."
  - rule_name: no_raw_sql
    regex: "\\.query\\(['\"]SELECT"
    paths: ["**/src/**"]
    reminder: "ORM을 쓰거나 파라미터 바인딩을 사용하세요."
```

---

## 팀 전체·클라우드 세션에 적용하기

저장소 `.claude/settings.json`에 추가하면 이 저장소를 쓰는 모든 팀원에게 자동 적용돼요:

```json
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

---

## 비용

| 검사 단계 | AI 사용 | 비용 |
|-----------|---------|------|
| 파일 수정 시 패턴 검사 | ❌ 없음 | 무료 |
| 응답 완료 후 검토 | ✅ 있음 | 추가 요금 |
| Commit·Push 심층 검토 | ✅ 있음 | 추가 요금 |

두 번째·세 번째 검사는 AI 모델(기본: Claude Opus 4.7)을 사용해요. 모델 변경:

```bash
# 응답 완료 후 검토 모델 변경 (환경 변수)
SECURITY_REVIEW_MODEL=claude-sonnet-4-6

# Commit·Push 심층 검토 모델 변경
SG_AGENTIC_MODEL=claude-sonnet-4-6
```

---

## 특정 기능만 끄기

전부 끄지 않고 일부만 비활성화할 수 있어요:

| 환경 변수 | 효과 |
|-----------|------|
| `ENABLE_PATTERN_RULES=0` | 파일 수정 시 패턴 검사 끄기 |
| `ENABLE_STOP_REVIEW=0` | 응답 완료 후 검토 끄기 |
| `ENABLE_COMMIT_REVIEW=0` | Commit·Push 심층 검토 끄기 |
| `ENABLE_CODE_SECURITY_REVIEW=0` | AI 검토 전부 끄기 |
| `SECURITY_GUIDANCE_DISABLE=1` | 플러그인 전체 끄기 (삭제 아님) |

**플러그인 일시 중지:**
```bash
/plugin disable security-guidance@claude-plugins-official
```

**플러그인 삭제:**
```bash
/plugin uninstall security-guidance@claude-plugins-official
```

---

## 다른 보안 도구와의 관계

이 플러그인은 보안의 **첫 번째 방어선**이에요. 다른 도구들과 함께 쓰면 더 좋아요:

| 단계 | 도구 | 역할 |
|------|------|------|
| 코드 작성 중 | **보안 가이드 플러그인** (이것!) | Claude가 짜는 동안 실시간 검사 |
| 필요할 때 | `/security-review` 명령어 | 현재 브랜치 한 번에 보안 점검 |
| PR 시 | Code Review (Team·Enterprise) | 전체 코드베이스 맥락으로 심층 검토 |
| CI/CD | 기존 정적 분석 도구 | 언어별 규칙, 공급망 보안 |

---

## 문제 해결

검사가 작동하지 않으면:

```bash
# 로그 확인
cat ~/.claude/security/log.txt
```

자주 있는 문제:

| 증상 | 원인 |
|------|------|
| End-of-turn 검토가 안 됨 | git 저장소 밖에서 실행 중 |
| AI 검토가 안 됨 | Anthropic 인증 없음 (API 키 확인) |
| YAML 패턴 파일 무시됨 | PyYAML이 없음 → JSON 파일로 대체 |
