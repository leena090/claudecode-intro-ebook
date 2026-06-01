---
title: "[공] Security Guidance 플러그인 — Claude가 짜는 코드 보안 취약점 자동 감지"
description: "코드를 작성하는 순간순간 자동으로 보안 취약점을 스캔하고 같은 세션에서 바로 수정해주는 공식 Anthropic 플러그인"
tags: ["고급", "보안", "security", "플러그인", "취약점", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05-25 Week 22 출시. CLI v2.1.144 이상, Python 3.8 이상 필요. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## Security guidance 플러그인이 뭔가요?

Claude가 코드를 작성하는 동안 **실시간으로 보안 취약점을 자동 탐지하고, 같은 세션에서 바로 수정**해주는 공식 Anthropic 플러그인이에요. 설치하고 나면 따로 명령어를 입력할 필요 없이 **자동으로 작동**해요.

> 🍱 **비유**: 문서를 작성할 때 맞춤법 자동 교정 기능이 빨간 밑줄을 쳐주는 것처럼, Claude가 코드를 짤 때 "이 부분 보안 위험 있어요"라고 알려주고 바로 고쳐줘요.

---

## 설치 방법

```bash
# 1. 공식 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 2. 현재 세션에 바로 적용
/reload-plugins
```

설치 범위 선택 프롬프트가 뜨면 **user scope(사용자 범위)** 를 선택하면 앞으로 모든 로컬 세션에 자동 적용돼요.

> 🍱 **비유**: 스마트폰에 바이러스 백신 앱을 설치하는 것처럼 — 한 번 설치하면 그다음부터는 배경에서 항상 돌아가요.

### 프로젝트 전체 팀에게 적용하기

```json
// .claude/settings.json에 추가하고 레포지토리에 커밋
{
  "enabledPlugins": {
    "security-guidance@claude-plugins-official": true
  }
}
```

---

## 자동으로 검사하는 3단계

### 단계 1: 파일을 편집할 때마다 (즉각·무료)

모델 호출 없이 위험한 패턴을 **즉시** 감지해요. 비용 없음.

감지 패턴 예시:
- `eval(`, `new Function` — 동적 코드 실행
- `os.system`, `child_process.exec` — 쉘 명령 실행
- `pickle` — 안전하지 않은 역직렬화
- `dangerouslySetInnerHTML`, `.innerHTML =` — DOM 삽입 취약점
- `.github/workflows/` 파일 편집 — 권한 남용 위험

### 단계 2: 턴 종료 후 (배경 모델 리뷰)

해당 턴에서 변경된 **전체 코드 diff**를 별도 Claude 모델이 배경에서 분석해요. 발견 사항이 있으면 수정 요청이 세션에 자동 추가돼요.

감지 항목:
- 인증 우회 (Authorization bypass)
- 안전하지 않은 직접 객체 참조 (IDOR)
- 인젝션 공격 (SQL, Command 등)
- 서버사이드 요청 위조 (SSRF)
- 약한 암호화

> 🍱 **비유**: 글쓰기 도중 실시간 교정이 아니라, 글을 다 쓴 뒤 선생님이 전체를 한 번 읽고 피드백 주는 것처럼요.

### 단계 3: git commit/push 시 (심층 에이전트 리뷰)

Claude가 `git commit`이나 `git push`를 실행할 때, **주변 코드·호출부·정제 코드까지 함께 읽는** 에이전트 리뷰가 돌아가요.

- 단계 2에서 이미 보고한 내용은 중복 보고 안 함
- 시간당 최대 20회
- 여러분이 직접 실행하는 git 명령은 검토 대상 아님 (Claude가 Bash 도구로 실행할 때만)

---

## 프로젝트별 보안 규칙 추가

`.claude/claude-security-guidance.md` 파일을 만들면 우리 프로젝트만의 보안 규칙을 추가할 수 있어요.

```markdown
# 보안 가이드라인 (이 레포지토리)

- customer_id, account_number는 INFO 레벨 이상 로깅 금지
- /admin 하위 경로는 모든 DB 읽기 전에 require_role("admin") 호출 필수
- 토큰 비교는 === 대신 crypto.timingSafeEqual 사용
```

### 패턴 매칭 규칙 추가

`.claude/security-patterns.yaml`:
```yaml
patterns:
  - rule_name: hardcoded_api_key
    substrings: ["sk_live_", "AKIA"]
    reminder: "하드코딩된 API 키입니다. 비밀 관리자에서 불러오세요."
  - rule_name: tenant_query
    regex: "\\.objects\\.all\\(\\)"
    paths: ["**/src/tenants/**"]
    reminder: "멀티테넌트 코드는 반드시 org_id로 필터링하세요."
```

---

## 다른 보안 도구와의 관계

| 시점 | 도구 | 커버 범위 |
|------|------|----------|
| 코딩 중 | Security guidance 플러그인 (이 플러그인) | Claude가 짜는 코드 실시간 취약점 탐지·수정 |
| 요청 시 | `/security-review` 명령어 | 현재 브랜치 전체 보안 점검 |
| PR 시 | Code Review (Team·Enterprise) | 전체 코드베이스 컨텍스트 다중 에이전트 리뷰 |
| CI | 기존 SAST·의존성 스캐너 | 언어별 규칙·공급망 취약점 |

> 🍱 **비유**: 이 플러그인은 "운전 중 차선 이탈 경고"예요. 운전을 하면서 즉시 피드백을 주죠. 이후 단계(PR 리뷰, CI)는 "도착 후 전체 차량 점검" 같은 거예요. 각 단계가 이전 단계에서 놓친 걸 잡아요.

---

## 비용

- 파일 편집 시 패턴 체크: **무료** (모델 호출 없음)
- 턴 종료 후 diff 리뷰: 일반 Claude 요청과 동일하게 사용량 소비
- commit 리뷰: 에이전트 방식이라 약간 더 소비 (시간당 최대 20회 제한)

기본 리뷰 모델은 Claude Opus 4.7. 환경변수로 변경 가능:
```bash
SECURITY_REVIEW_MODEL=claude-sonnet-4-6  # 턴 종료 리뷰 모델 변경
SG_AGENTIC_MODEL=claude-sonnet-4-6       # commit 리뷰 모델 변경
```

---

## 플러그인 끄기

```bash
# 특정 레이어만 끄기
ENABLE_PATTERN_RULES=0        # 파일 편집 패턴 체크 OFF
ENABLE_STOP_REVIEW=0          # 턴 종료 리뷰 OFF
ENABLE_COMMIT_REVIEW=0        # commit 리뷰 OFF
ENABLE_CODE_SECURITY_REVIEW=0 # 모델 리뷰 전체 OFF
SECURITY_GUIDANCE_DISABLE=1   # 플러그인 전체 비활성화

# 또는 명령어로
/plugin disable security-guidance@claude-plugins-official
```

---

> 💡 **입문자 팁**: 보안에 대해 잘 모르더라도 이 플러그인은 유용해요. 설치만 해두면 Claude가 코드를 짤 때 "이 부분 주의하세요"라고 알려주니까요. 특히 웹 앱을 만들 때 SQL 인젝션이나 XSS 같은 기본 취약점을 자동으로 잡아줘서 든든해요.
