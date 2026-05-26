---
title: "[공] 보안 감시관 플러그인 — Claude가 코드 짜면서 스스로 취약점 점검"
description: "security-guidance 플러그인을 설치하면 Claude가 코드를 작성하는 동시에 보안 취약점을 자동으로 검사하고 바로 수정해요. 파일 저장 시·턴 종료 시·커밋 시 3단계 검사"
tags: ["자동생성", "보안", "security", "플러그인", "취약점", "security-guidance"]
category: "advanced"
order: 27
lastUpdated: "2026-05-26"
---

> **[공] 공식 문서 기반** · 출처: [code.claude.com/docs/en/security-guidance](https://code.claude.com/docs/en/security-guidance)  
> **필요 버전**: Claude Code CLI 2.1.144 이상, Python(파이썬) 3.8 이상

## 이 플러그인이 뭔가요?

**security-guidance(시큐리티 가이던스)** 플러그인은 Claude가 코드를 작성하는 **그 순간부터** 보안 취약점(취약점 = 해킹이 가능한 약점)을 자동으로 검사하고 수정하는 도구예요.

> 🏗️ **비유로 설명하면**: 건물 공사할 때 공사 다 끝나고 나서 안전 점검하면 너무 늦잖아요. 이 플러그인은 **벽돌 하나 쌓을 때마다 안전 검사관이 옆에 서서** "이 자재는 위험해요"라고 바로 알려주는 것과 같아요.

설치하면 **별도 명령어 없이 자동으로** 작동해요. Claude가 파일을 수정하거나 Git(깃) 커밋을 실행할 때마다 백그라운드에서 검사가 이루어져요.

---

## 어떻게 설치하나요?

Claude Code 세션 안에서:

```
/plugin install security-guidance@claude-plugins-official
/reload-plugins
```

처음 실행 시 `~/.claude/security/` 폴더에 Python 가상 환경을 만들고 Claude Agent SDK(에이전트 에스디케이)를 설치해요 (인터넷 연결 필요).

**클라우드 세션이나 팀 전체에 적용하려면** `.claude/settings.json`에 추가:

```json
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

---

## 3단계 자동 검사 시스템

| 단계 | 언제 | 검사 방법 | 비용 |
|---|---|---|---|
| 1️⃣ 파일 수정 시 | Claude가 파일을 저장할 때마다 | 패턴 매칭 (AI 없음) | 무료 |
| 2️⃣ 턴 종료 시 | Claude 응답이 끝날 때마다 | AI 보안 리뷰 | 토큰 사용 |
| 3️⃣ 커밋·푸시 시 | `git commit`/`git push` 실행 시 | AI 심층 에이전트 리뷰 | 토큰 사용 (더 많음) |

### 1단계: 파일 수정 시 패턴 검사 (AI 없음, 무료)

파일이 저장되는 순간 **위험 패턴**을 즉시 검사해요. AI 호출이 없어서 비용이 전혀 들지 않아요.

검사 항목 예시:

| 카테고리 | 위험 패턴 |
|---|---|
| 동적 코드 실행 | `eval(`, `new Function`, `os.system`, `child_process.exec` |
| 안전하지 않은 역직렬화 | `pickle` 사용 |
| DOM 인젝션(injection) | `dangerouslySetInnerHTML`, `.innerHTML =`, `document.write` |
| 워크플로우 파일 | `.github/workflows/` 수정 시 경고 |

같은 파일에서 같은 패턴이 여러 번 발견돼도 **세션당 1회만** 경고해요 (알림 폭탄 방지).

### 2단계: 턴 종료 시 AI 보안 리뷰

Claude가 한 번 응답을 마칠 때마다, **그 턴에 변경된 모든 파일**을 git diff로 뽑아서 별도의 Claude 인스턴스가 보안 리뷰를 해요. 백그라운드에서 실행되므로 응답 속도에 영향이 없어요.

패턴 검사로는 못 잡는 것들을 잡아요:
- 🔐 권한 우회 (Authorization bypass)
- 🗄️ 직접 객체 참조 (IDOR — 허가 없이 타인 데이터 접근)
- 💉 인젝션 취약점
- 🌐 SSRF (서버가 내부 시스템에 요청하도록 유도)
- 🔑 약한 암호화

한 턴에 최대 30개 파일, 연속 3회까지 재검사해요.

> 💡 **핵심**: 코드를 **직접 쓴** Claude 인스턴스가 스스로 심사하는 게 아니에요. **완전히 별개의 Claude 인스턴스**가 diff(변경 내역)만 보고 독립적으로 판단해요.

### 3단계: 커밋·푸시 시 심층 에이전트 리뷰

Claude가 `git commit` 또는 `git push`를 실행할 때 **주변 코드 맥락까지 읽는 심층 리뷰**를 해요. 관련 함수, 호출 경로, 살균(sanitize) 로직까지 확인해서 **오탐률을 낮춰요**.

> ⚠️ **주의**: 이 검사는 Claude가 Bash(배쉬) 도구로 실행한 커밋·푸시에만 적용돼요. 개발자가 직접 터미널에서 실행한 커밋은 검사 안 해요.
> 
> 시간당 최대 20회 리뷰 제한이 있어요.

---

## 내 프로젝트만의 규칙 추가하기

### 방법 1: AI 리뷰에 추가 지침 주기

`.claude/claude-security-guidance.md` 파일을 만들어서 프로젝트 특화 규칙을 추가하세요:

```markdown
# 이 프로젝트의 보안 지침

- INFO 레벨 로그에 `customer_id`나 `account_number` 기록 금지
- `/admin` 라우트는 반드시 `require_role("admin")` 먼저 호출 후 DB 조회
- 토큰 비교는 `===` 대신 `crypto.timingSafeEqual` 사용
```

파일 적용 범위:

| 위치 | 경로 | 적용 범위 |
|---|---|---|
| 개인 | `~/.claude/claude-security-guidance.md` | 내 PC의 모든 프로젝트 |
| 프로젝트 | `.claude/claude-security-guidance.md` | 저장소에 커밋, 팀 전체 |
| 개인+프로젝트 | `.claude/claude-security-guidance.local.md` | 비공개 개인 오버라이드 |

> ⚠️ **주의**: 이 규칙은 AI에게 "주의해"라고 알려주는 것이지, 무조건 차단하는 게 아니에요. "이 취약점은 무시해"라는 규칙은 동작하지 않아요.

### 방법 2: 패턴 검사에 규칙 추가하기

`.claude/security-patterns.yaml` 파일로 1단계 패턴 검사에 직접 규칙 추가:

```yaml
patterns:
  - rule_name: api_key_hardcoded
    substrings: ["sk_live_", "AKIA"]
    reminder: "API 키가 하드코딩되어 있어요. 시크릿 매니저에서 불러오세요."
  
  - rule_name: tenant_filter_missing
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드는 반드시 org_id로 필터링해야 해요."
```

| 필드 | 설명 |
|---|---|
| `rule_name` | 경고에 표시될 식별자 |
| `reminder` | Claude에게 전달되는 경고 문구 (1KB 이하) |
| `substrings` | 문자열 포함 여부 검사 |
| `regex` | 정규식 검사 |
| `paths` | 이 glob 패턴에 맞는 파일만 검사 |
| `exclude_paths` | 이 패턴에 맞는 파일은 제외 |

> 💡 **팁**: PyYAML이 설치 안 되어 있으면 `.yaml` 파일이 무시돼요. 이 경우 `.claude/security-patterns.json`으로 만드세요.

---

## 비용은 얼마나 드나요?

- **1단계 패턴 검사**: 무료 (AI 호출 없음)
- **2단계 턴 리뷰**: 파일을 수정한 턴마다 1회 호출 (기본 모델: Opus 4.7)
- **3단계 커밋 리뷰**: 커밋당 여러 AI 턴 사용 (기본 모델: Opus 4.7)

비용 절감을 위해 더 가벼운 모델로 바꿀 수 있어요:
```bash
# 2단계(턴 리뷰) 모델 변경
SECURITY_REVIEW_MODEL=claude-sonnet-4-6

# 3단계(커밋 리뷰) 모델 변경
SG_AGENTIC_MODEL=claude-sonnet-4-6
```

---

## 끄거나 제거하려면?

**특정 레이어만 끄기** (환경변수):

| 변수 | 효과 |
|---|---|
| `ENABLE_PATTERN_RULES=0` | 1단계 패턴 검사 비활성화 |
| `ENABLE_STOP_REVIEW=0` | 2단계 턴 리뷰 비활성화 |
| `ENABLE_COMMIT_REVIEW=0` | 3단계 커밋 리뷰 비활성화 |
| `ENABLE_CODE_SECURITY_REVIEW=0` | 2·3단계 AI 리뷰 전체 비활성화 |
| `SECURITY_GUIDANCE_DISABLE=1` | 플러그인 전체 일시 정지 |

**일시 정지**:
```
/plugin disable security-guidance@claude-plugins-official
```

**완전 제거**:
```
/plugin uninstall security-guidance@claude-plugins-official
```

> 💡 **팁**: 팀 `.claude/settings.json`에서 활성화된 플러그인을 본인만 끄고 싶다면, `/plugin disable`이 자동으로 `.claude/settings.local.json`에 오버라이드를 써요. 팀원들은 영향 없어요.

---

## 다른 보안 도구와의 관계

이 플러그인은 "모든 것을 잡는 마법"이 아니에요. 여러 방어막 중 가장 빠른 1번째 방어막이에요:

| 단계 | 도구 | 역할 |
|---|---|---|
| 코딩 중 | security-guidance 플러그인 (이것) | 작성 즉시 취약점 감지·수정 |
| 필요할 때 | `/security-review` 명령어 | 현재 브랜치 원샷 보안 점검 |
| PR 시 | Code Review (Team/Enterprise) | 멀티에이전트 전체 코드베이스 리뷰 |
| CI/CD | 기존 정적 분석 도구 | 언어별 규칙, 의존성 검사 |

> **[공] 공식 발표 기준** · 2026-05-26 확인

---

## 트러블슈팅

뭔가 이상하면 먼저 로그 확인:
```bash
cat ~/.claude/security/log.txt
```

| 현상 | 원인 |
|---|---|
| 커밋 리뷰가 안 나와요 | Git 저장소 밖에서 실행 중, 또는 직접 터미널에서 커밋 |
| YAML 패턴 파일이 적용 안 돼요 | PyYAML이 없음 → `.json` 파일로 전환 |
| AI 리뷰가 스킵돼요 | Anthropic 인증 없는 상태 (로그인 확인) |

---

## 참고 링크

- 공식 문서: [code.claude.com/docs/en/security-guidance](https://code.claude.com/docs/en/security-guidance)
- PR 리뷰 자동화: [Code Review](https://code.claude.com/docs/en/code-review) (Team/Enterprise)
- 훅 커스터마이즈: [Automate workflows with hooks](https://code.claude.com/docs/en/hooks-guide)
- 플러그인 더 보기: [Discover and install plugins](https://code.claude.com/docs/en/discover-plugins)
