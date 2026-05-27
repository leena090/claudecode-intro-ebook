---
title: "[공] 보안 취약점을 클로드가 스스로 잡는다 — security-guidance 플러그인"
description: "코드를 짜는 순간 클로드가 스스로 SQL 인젝션, DOM 주입, 안전하지 않은 역직렬화를 검사하고 같은 세션 안에서 고쳐요. 플러그인 하나 설치하면 됩니다"
tags: ["고급", "보안", "security", "security-guidance", "플러그인", "plugin", "취약점", "vulnerability", "인젝션", "injection", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-05-27"
---

<div class="note-star">
★ <strong>출처</strong>: 공식 문서 <a href="https://code.claude.com/docs/en/security-guidance">code.claude.com/docs/en/security-guidance</a> — [공]<br />
★ <strong>2026-05-27 신규 등재</strong> — 공식 llms.txt에 오늘 처음 나타난 문서입니다<br />
★ 이 플러그인은 <strong>설치 후 자동 작동</strong>해요. 별도로 명령어를 입력할 필요 없습니다
</div>

## security-guidance 플러그인이 뭔가요?

클로드가 코드를 짜는 **바로 그 순간** 보안 문제를 스스로 찾아내고 고쳐주는 플러그인이에요.

> 🍱 **비유로 설명하면**: 글을 쓰면서 문법 교정 앱이 실시간으로 빨간 줄을 그어주는 것과 같아요. 글 다 쓰고 나서 검토하는 게 아니라 **쓰는 도중에** 잡아줘요.

보통 보안 리뷰는 코드를 다 짜고 PR(풀 리퀘스트) 단계에서 해요. 이 플러그인은 그보다 훨씬 앞 단계인 **작성 중**에 문제를 잡아서 나중에 고치는 수고를 줄여줘요.

---

## 설치 전 확인 사항

| 항목 | 요구사항 |
|---|---|
| Claude Code CLI | **2.1.144 버전 이상** |
| Python | **3.8 이상** (PATH에 python3, python, 또는 py -3) |
| Git 저장소 | 파일 수정 후 diff 비교에 필요 |

> 💡 Python이 왜 필요하냐고요? 플러그인이 처음 실행될 때 `~/.claude/security/` 아래에 가상환경을 만들고 Claude Agent SDK를 설치해요. 이 과정에 Python과 pip가 필요해요.

---

## 설치 방법

Claude Code 세션 안에서 아래 명령어를 입력해요:

```
/plugin install security-guidance@claude-plugins-official
```

마켓플레이스를 먼저 등록해야 한다는 안내가 뜨면:
```
/plugin marketplace add anthropics/claude-plugins-official
```

설치 후 현재 세션에 바로 적용:
```
/reload-plugins
```

### 설치 범위 선택

| 범위 | 설명 | 저장 위치 |
|---|---|---|
| **user 범위** | 내 PC의 모든 세션에 적용 | 사용자 설정 |
| **project 범위** | 팀 전체에 적용 (저장소 커밋) | `.claude/settings.json` |

팀 전체 적용 시 `.claude/settings.json`에 추가:
```json
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

> ⚠️ **클라우드 세션(claude.ai/code)에서는**: user 범위 플러그인이 적용 안 돼요. Anthropic 서버에서 실행되는 환경이라 내 PC 설정이 없거든요. 저장소의 `.claude/settings.json`에 `enabledPlugins`로 넣어야 클라우드 세션에서도 작동해요.

---

## 세 단계 검사

플러그인은 **세 번** 자동으로 검사를 실행해요.

### 1단계: 파일 수정 직후 — 패턴 검사

**비용 없음** (모델 호출 없음). 코드에 위험한 패턴이 있는지 문자열 일치로 바로 스캔해요.

잡아내는 패턴 예시:

| 카테고리 | 검사 대상 |
|---|---|
| 동적 코드 실행 | `eval(`, `new Function`, `os.system`, `child_process.exec` |
| 안전하지 않은 역직렬화 | `pickle` |
| DOM 주입 | `dangerouslySetInnerHTML`, `.innerHTML =`, `document.write` |
| 워크플로우 파일 | `.github/workflows/` 수정 |

> 🍱 **비유**: 공항 X레이 검색대처럼요. 수하물을 직접 열어보는 게 아니라 화면에 비춰서 빠르게 확인해요.

같은 파일에서 같은 패턴이 반복 탐지돼도 **세션당 한 번만** 경고해요 (반복 잔소리 없음).

---

### 2단계: 클로드 응답 끝날 때 — diff 전체 보안 리뷰

한 턴(내가 메시지 보내고 클로드가 답하는 한 사이클)이 끝나면, **백그라운드에서** 그 턴에 바뀐 모든 파일의 diff를 별도 클로드 모델이 리뷰해요.

> ⚠️ **토큰 비용 발생** — 별도 모델 호출이라 토큰을 소비해요.

백그라운드 실행이라 **클로드 응답 속도에는 영향 없어요**.

패턴 검사가 못 잡는 것들을 여기서 잡아요:

- 인증 우회(Authorization bypass)
- 안전하지 않은 직접 객체 참조(Insecure direct object references)
- 인젝션(Injection)
- 서버 사이드 요청 위조(Server-side request forgery · SSRF)
- 약한 암호화(Weak cryptography)

문제가 발견되면 클로드가 같은 세션에서 바로 수정해요. 한 턴에서 최대 **30개 파일** 검사, 연속 최대 **3회** 재검사.

---

### 3단계: git commit·push 시 — 심층 에이전틱 리뷰

클로드가 `git commit` 또는 `git push`를 실행하면 **백그라운드에서** 더 깊은 리뷰를 해요.

> ⚠️ **더 많은 토큰 비용** — 에이전틱 방식으로 주변 코드(호출부, 살균 함수, 관련 파일)까지 읽어가며 리뷰해요.

| 항목 | 제한 |
|---|---|
| 시간당 최대 | 20회 |
| 대상 | 클로드가 Bash로 실행한 commit/push만 (내가 직접 실행한 건 제외) |

> 🍱 **비유**: 1단계는 게이트 X레이, 2단계는 세관원 검사, 3단계는 세관 전문팀이 수하물 내용물까지 꺼내서 확인하는 것이에요.

---

## 리뷰의 독립성

"자기가 짠 코드를 자기가 리뷰하면 의미가 있나?"라는 의문이 드실 수 있어요.

- **1단계** (패턴 검사): 모델 없이 순수 문자열 비교라 완전히 독립적이에요
- **2단계·3단계** (모델 리뷰): 코드를 짠 클로드 인스턴스와 **다른 별도 클로드 호출**이에요. 원래 코드에 대한 맥락 없이 diff와 보안 체크리스트만 받아요

> 단, 어떤 레이어도 완벽하지 않아요. 방어 심층 전략의 한 레이어로 활용하세요.

---

## 내 프로젝트에 맞는 규칙 추가

### 모델 리뷰 지침 추가

`.claude/claude-security-guidance.md` 파일을 만들면 모델 리뷰 시 추가 지침으로 사용돼요:

```markdown
# 이 저장소 보안 지침

- INFO 레벨 이상 로그에 customer_id, account_number 절대 기록 금지.
- /admin 하위 모든 라우트는 DB 읽기 전에 require_role("admin") 호출 필수.
- 토큰 비교는 === 대신 crypto.timingSafeEqual 사용.
```

지침은 추가만 가능해요 (특정 취약점 유형을 무시하도록 쓰는 건 작동 안 해요).

### 패턴 검사 규칙 추가

`.claude/security-patterns.yaml` 파일로 1단계 패턴 검사에 규칙을 추가해요:

```yaml
patterns:
  - rule_name: internal_api_key
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키가 감지됐어요. 시크릿 매니저에서 불러오세요."
  - rule_name: tenant_unfiltered_query
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티 테넌트 코드는 org_id로 필터링 필수."
```

| 필드 | 내용 |
|---|---|
| `rule_name` | 경고에 표시되는 식별자 |
| `reminder` | 경고 메시지 (최대 1KB) |
| `regex` | Python 정규식 |
| `substrings` | 문자열 목록 (regex 대신 사용) |
| `paths` | 이 파일에만 적용 (glob) |
| `exclude_paths` | 이 파일은 제외 (glob) |

최대 50개 규칙 적용. PyYAML이 없으면 `.json` 형식도 가능해요.

---

## 비용 정리

| 단계 | 모델 호출 | 비용 |
|---|---|---|
| 파일 수정 후 패턴 검사 | ❌ 없음 | 무료 |
| 턴 종료 diff 리뷰 | ✅ Opus 4.7 | 토큰 소비 |
| commit/push 에이전틱 리뷰 | ✅ Opus 4.7 | 더 많은 토큰 소비 |

리뷰 모델 변경 (선택사항):
```bash
export SECURITY_REVIEW_MODEL=claude-sonnet-4-6        # 턴 종료 리뷰
export SG_AGENTIC_MODEL=claude-sonnet-4-6              # commit 리뷰
```

모든 플랜에서 사용 가능.

---

## 비활성화 방법

### 레이어별 끄기

| 환경 변수 | 효과 |
|---|---|
| `ENABLE_PATTERN_RULES=0` | 패턴 검사 비활성화 |
| `ENABLE_STOP_REVIEW=0` | 턴 종료 리뷰 비활성화 |
| `ENABLE_COMMIT_REVIEW=0` | commit/push 리뷰 비활성화 |
| `ENABLE_CODE_SECURITY_REVIEW=0` | 모든 모델 리뷰 비활성화 |
| `SECURITY_GUIDANCE_DISABLE=1` | 플러그인 전체 비활성화 |

### 플러그인 비활성화/제거

```
/plugin disable security-guidance@claude-plugins-official
/plugin uninstall security-guidance@claude-plugins-official
```

> 💡 project `.claude/settings.json`으로 팀 전체에 활성화된 플러그인을 개인적으로 끄면, 팀 설정 파일은 건드리지 않고 내 `.claude/settings.local.json`에만 비활성화 기록이 저장돼요.

---

## 보안 도구 스택에서 이 플러그인의 위치

| 단계 | 도구 | 역할 |
|---|---|---|
| **코드 작성 중** | security-guidance 플러그인 | 작성 시 즉시 탐지·수정 |
| **온디맨드** | `/security-review` 명령어 | 현재 브랜치 일회성 보안 점검 |
| **PR 단계** | Code Review (Team·Enterprise) | 전체 코드베이스 맥락의 멀티 에이전트 리뷰 |
| **CI 단계** | 기존 정적 분석·의존성 스캐너 | 언어별 규칙, 공급망 점검 |

플러그인은 이 중에서 **가장 빠른 단계**에서 문제를 잡아요. 나중 단계까지 내려가는 문제 수를 줄이는 게 목표예요.

---

## 문제 해결

리뷰가 작동하지 않으면 `~/.claude/security/log.txt`를 먼저 확인해요.

| 증상 | 원인 |
|---|---|
| 턴 종료 리뷰가 안 뜸 | git 저장소가 아닌 경우 (git repo 밖에서는 스킵됨) |
| 모델 리뷰가 작동 안 함 | Anthropic 인증 없는 세션 (패턴 검사만 작동) |
| YAML 패턴이 무시됨 | PyYAML 미설치 → `.json` 형식 사용 |

---

## 관련 문서

| 문서 | 내용 |
|---|---|
| [Code Review](/docs/codeweb/codeweb-autofix) | PR 단계 보안 리뷰 |
| [훅(Hooks) 활용](/docs/config/hooks-intro) | 직접 보안 훅 만들기 |
| [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) | 기타 공식 플러그인 |
