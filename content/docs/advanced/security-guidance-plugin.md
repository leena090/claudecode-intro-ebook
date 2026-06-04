---
title: "[공] 보안 가이드라인 플러그인 — 코딩 중 자동 보안 검사"
description: "security-guidance 플러그인을 설치하면 클로드가 코드를 짤 때마다 보안 취약점을 자동으로 찾아서 그 자리에서 고쳐줘요. Week 22 (2026-05-25) 출시."
tags: ["보안", "security-guidance", "플러그인", "취약점", "자동생성", "고급"]
category: "advanced"
order: 25
lastUpdated: "2026-06-04"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25) 출시. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## 이 플러그인이 뭐예요?

**보안 가이드라인 플러그인(security-guidance plugin)**은 클로드가 코드를 짜는 동안 **보안 취약점을 자동으로 검사**해서, 발견하면 그 자리에서 고쳐주는 플러그인이에요.

> 🍱 **비유로 설명하면**: 요리사가 음식을 만드는 동안, 조수가 옆에서 "거기 소금 너무 많아요!", "그 칼 위험해요!" 하고 실시간으로 알려주는 것처럼 — 코드를 다 짜고 나서 검사하는 게 아니라, **짜는 도중에 바로바로** 알려줘요.

기존 `/code-review`가 PR 단계에서 전체를 검토한다면, 이 플러그인은 **코딩하는 도중** 문제를 미리 잡아줘요.

---

## 준비물 체크

| 조건 | 필요 버전/조건 |
|------|---------------|
| Claude Code | v2.1.144 이상 |
| Python | 3.8 이상 (`python3` 명령어 사용 가능해야 해요) |
| 작업 디렉토리 | git 저장소 안 (일부 기능에 필요) |

---

## 설치 방법

```bash
# 1단계: 플러그인 설치 (Claude Code 세션 안에서)
/plugin install security-guidance@claude-plugins-official

# 2단계: 현재 세션에 바로 적용
/reload-plugins
```

설치 시 **scope(범위)** 선택이 나와요:
- **user scope(유저 스코프)** 선택 → 이 컴퓨터의 모든 새 세션에서 자동으로 켜짐
- **project scope** 선택 → 이 프로젝트 폴더에서만 적용

<div class="note-circle">
○ 마켓을 못 찾는다면: <code>/plugin marketplace add anthropics/claude-plugins-official</code> 먼저 실행하고 재시도<br />
○ Claude Code on the web(웹 버전)은 user scope가 적용 안 돼요 — 대신 project settings 사용
</div>

### 팀 전체에 적용하기 (프로젝트 settings.json)

```json
// .claude/settings.json 파일 (리포지토리에 커밋하면 팀 전체 적용)
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

---

## 3단계 보안 검사 시스템

플러그인은 **3가지 시점**에 검사를 실행해요.

### 단계 1️⃣ — 파일 편집 즉시 (모델 호출 없음 → 추가 비용 없음)

코드 한 줄을 편집할 때마다, 위험한 패턴이 있는지 즉시 체크해요. AI 호출이 없어서 **추가 비용이 없어요**.

검사하는 패턴 예시:

| 패턴 | 위험 종류 |
|------|----------|
| `eval(`, `new Function` | 동적 코드 실행 |
| `os.system`, `child_process.exec` | 셸 명령 인젝션 |
| `pickle` | 안전하지 않은 역직렬화 |
| `dangerouslySetInnerHTML`, `.innerHTML =` | DOM 주입 (XSS) |
| `.github/workflows/` 수정 | 저장소 권한 남용 위험 |

### 단계 2️⃣ — 응답(턴) 종료 시 (AI 검토)

클로드가 한 번의 응답을 완료한 뒤, 그 응답 중 변경된 코드 전체를 **별도의 독립 AI 리뷰어**가 검토해요.

> 🍱 **비유로 설명하면**: 요리사(클로드)가 요리를 완성하면, 위생 감독관(별도 AI)이 다시 검사하는 것처럼 — 코드를 쓴 AI가 스스로 검토하는 게 아니라 **다른 AI가 독립적으로** 검사해요.

검사하는 보안 이슈:
- 인증 우회 (Authorization bypass)
- 안전하지 않은 직접 객체 참조 (IDOR)
- 인젝션 공격
- 서버 사이드 요청 위조 (SSRF)
- 약한 암호화

### 단계 3️⃣ — git commit/push 시 (심층 에이전트 리뷰)

클로드가 `git commit` 또는 `git push`를 실행할 때, 주변 코드(호출부, 검증 로직 등)까지 같이 읽는 **더 깊은 에이전트 리뷰**가 돌아가요.

<div class="note-circle">
○ 이 단계는 클로드가 Bash 도구로 실행한 커밋에만 적용돼요<br />
○ 내가 직접 터미널에서 <code>git commit</code>을 실행하면 적용 안 돼요<br />
○ 한 시간에 최대 20회 리뷰 제한
</div>

---

## 내 규칙 추가하기

### 모델 검토 지침 파일 (`.claude/claude-security-guidance.md`)

이 파일에 프로젝트 고유의 보안 규칙을 자유롭게 적어두면, AI 리뷰 시 추가 기준으로 활용돼요.

```markdown
# 이 프로젝트 보안 가이드

- customer_id 또는 account_number를 INFO 레벨 이상으로 로그에 남기지 마세요.
- /admin 아래 모든 라우트는 require_role("admin") 호출이 먼저여야 해요.
- 토큰 비교는 === 대신 crypto.timingSafeEqual을 사용하세요.
```

| 파일 위치 | 범위 |
|----------|------|
| `~/.claude/claude-security-guidance.md` | 내 모든 프로젝트 |
| `.claude/claude-security-guidance.md` | 이 프로젝트만 (팀 공유) |
| `.claude/claude-security-guidance.local.md` | 이 프로젝트, 나만 (gitignore) |

### 패턴 검사 규칙 (`.claude/security-patterns.yaml`)

직접 만든 패턴을 추가할 수 있어요.

```yaml
patterns:
  - rule_name: internal_api_key
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키! 비밀 관리자에서 불러오세요."

  - rule_name: tenant_unfiltered_query
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드는 org_id로 필터링해야 해요."
```

---

## 비용은 얼마나 들까요?

| 검사 단계 | AI 호출 | 추가 비용 |
|----------|---------|----------|
| 편집 즉시 패턴 체크 | ❌ 없음 | 없음 |
| 응답 종료 후 검토 | ✅ 있음 | 일반 Claude 호출과 동일 |
| 커밋/푸시 심층 리뷰 | ✅ 있음 (에이전트 방식, 여러 호출) | 호출 횟수만큼 |

기본 검토 모델: **Claude Opus 4.7** (환경변수로 변경 가능)
```bash
# 비용 절약이 필요하면 소형 모델로 변경
export SECURITY_REVIEW_MODEL=claude-sonnet-4-6
export SG_AGENTIC_MODEL=claude-sonnet-4-6
```

---

## 특정 검사 끄기

| 환경변수 | 효과 |
|---------|------|
| `ENABLE_PATTERN_RULES=0` | 패턴 체크 비활성화 |
| `ENABLE_STOP_REVIEW=0` | 응답 종료 검토 비활성화 |
| `ENABLE_COMMIT_REVIEW=0` | 커밋/푸시 리뷰 비활성화 |
| `ENABLE_CODE_SECURITY_REVIEW=0` | AI 기반 검토 전체 비활성화 |
| `SECURITY_GUIDANCE_DISABLE=1` | 플러그인 전체 비활성화 |

```bash
# 플러그인 일시 비활성화 (제거 없이)
/plugin disable security-guidance@claude-plugins-official

# 플러그인 완전 제거
/plugin uninstall security-guidance@claude-plugins-official
```

---

## 다른 보안 도구와의 역할 분담

| 단계 | 도구 | 역할 |
|------|------|------|
| 코딩 중 | **보안 가이드라인 플러그인** (이 페이지) | 클로드가 짜는 코드의 취약점 즉시 수정 |
| 필요할 때 | `/security-review` | 현재 브랜치 전체 보안 검사 |
| PR 단계 | Code Review (Team/Enterprise) | 전체 코드베이스 맥락의 멀티에이전트 리뷰 |
| CI 단계 | 기존 정적 분석 도구 | 언어별 규칙·의존성·정책 검사 |

> 🍱 **비유로 설명하면**: 요리 중 조수(플러그인) → 서빙 전 총주방장(/security-review) → 레스토랑 평가단(CI). 층층이 안전망이에요.

---

## 문제 해결 (Troubleshooting)

로그 파일에서 원인을 확인할 수 있어요:
```bash
cat ~/.claude/security/log.txt
```

| 증상 | 원인 |
|------|------|
| 리뷰가 안 나타남 | git 저장소가 아닌 디렉토리에서 작업 중 |
| AI 리뷰 없이 패턴 체크만 | Anthropic 인증이 없는 환경 |
| YAML 패턴 파일 무시 | PyYAML 미설치 → `.json` 형식으로 사용 |

---

## 더 알아보기

- [동적 워크플로우 가이드](/docs/advanced/dynamic-workflows) — Week 22 같이 출시된 대형 기능
- [훅(Hooks) 사용 가이드](/docs/config/hooks-intro)
- [플러그인 가이드](/docs/advanced/plugins)
- [공식 문서 — security-guidance](https://code.claude.com/docs/en/security-guidance)
