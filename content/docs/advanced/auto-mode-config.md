---
title: "[공] 오토 모드 세밀하게 조정하기 — auto-mode-config 가이드"
description: "오토 모드 분류기에 믿을 수 있는 저장소·도메인·버킷을 알려주고, 기본 허용·차단 규칙을 덮어쓰는 방법"
tags: ["자동생성", "auto mode", "오토모드", "config", "설정", "권한", "enterprise", "CLI", "분류기", "classifier"]
category: "advanced"
order: 21
lastUpdated: "2026-04-27"
---

<div class="note-star">
★ <strong>이 문서는 auto 모드를 이미 쓰고 있는 분을 위한 "고급 조정 가이드"예요.</strong><br />
★ auto 모드 자체가 처음이라면 먼저 <a href="/docs/advanced/permission-modes">권한 모드 완전 정리</a>를 읽어보세요.<br />
★ <strong>v2.1.113 신규</strong>: Max 구독자 + Opus 4.7 조합에서는 이제 <code>--enable-auto-mode</code> 플래그 없이도 auto 모드가 자동 활성화됩니다.<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/auto-mode-config">code.claude.com/docs/en/auto-mode-config</a>
</div>

## auto-mode-config가 뭐예요?

[권한 모드 문서](/docs/advanced/permission-modes)에서 배운 `auto` 모드는 **별도 분류 모델(classifier · 클래시파이어)이 Claude가 하려는 액션을 실시간으로 검사**해서 위험하면 막아주는 모드예요.

그런데 이 분류기는 기본적으로 **"뭘 믿어야 하는지" 잘 모릅니다**. 회사 전용 S3 버킷을 외부 서버로 오해하거나, 사내 Git 저장소를 미검증 소스로 보거나, 내부 도메인을 차단하는 일이 생길 수 있어요.

`auto-mode-config`는 이런 분류기에게 **"이건 우리 거야, 믿어도 돼"** 라고 알려주는 설정이에요.

> 🍱 **비유로 설명하면**: 새로 입사한 보안 담당자(분류기)가 있어요. 이 분은 처음에는 회사 서버도 "모르는 외부 서버"로 볼 수 있어요. 여러분이 "우리 회사 서버는 이 IP야", "이 GitHub 조직은 우리 팀이야", "이 S3 버킷은 내부 백업용이야"라고 알려주면 그때부터 맞춤 판단을 해줍니다.

---

## 어떤 걸 설정할 수 있어요?

| 설정 항목 | 영어 키워드 | 설명 |
|---|---|---|
| **신뢰 저장소** | trusted repos | 분류기가 내부 코드로 인정할 Git 저장소 |
| **신뢰 버킷** | trusted buckets | 내부 클라우드 스토리지 (S3·GCS 등) |
| **신뢰 도메인** | trusted domains | 읽기·쓰기를 허용할 내부 네트워크 도메인 |
| **환경 컨텍스트** | environment context | "이 환경은 CI야", "프로덕션 아니야" 같은 맥락 정보 |
| **허용 규칙 덮어쓰기** | override allow rules | 기본으로 차단되는 것 중 허용하고 싶은 것 |
| **차단 규칙 덮어쓰기** | override block rules | 기본으로 허용되는 것 중 추가로 막고 싶은 것 |

---

## 설정 방법

### 방법 1: CLI 서브커맨드 (auto-mode CLI subcommands)

터미널에서 `claude auto-mode` 뒤에 명령어를 붙여 사용해요 (공식 발표 기준).

```bash
# 현재 유효한 설정 확인
claude auto-mode inspect

# 신뢰 저장소 추가
claude auto-mode trust-repo https://github.com/my-org/my-repo

# 신뢰 도메인 추가
claude auto-mode trust-domain api.internal.mycompany.com

# 신뢰 버킷 추가 (S3 예시)
claude auto-mode trust-bucket s3://my-company-internal-bucket

# 환경 컨텍스트 설정
claude auto-mode set-context "CI environment, not production"
```

> ⚠️ **참고**: 서브커맨드 정확한 이름은 `claude auto-mode --help`로 확인하세요. 버전에 따라 다를 수 있어요.

### 방법 2: settings.json에 직접 작성

`.claude/settings.json` (프로젝트별) 또는 `~/.claude/settings.json` (전역) 에 설정을 넣을 수 있어요.

```json
{
  "autoMode": {
    "trustedRepos": [
      "github.com/my-org",
      "gitlab.internal.mycompany.com/backend-team"
    ],
    "trustedDomains": [
      "*.internal.mycompany.com",
      "api.myservice.local"
    ],
    "trustedBuckets": [
      "s3://my-company-builds",
      "gs://my-company-artifacts"
    ],
    "environmentContext": "Development environment, feature branch work only",
    "overrideAllowRules": [
      "push to deployment/staging branch"
    ],
    "overrideBlockRules": [
      "no external npm installs without approval"
    ]
  }
}
```

> 🍱 **비유로 설명하면**: 이 JSON 파일은 신입 보안 담당자에게 주는 **"우리 회사 인트라넷 지도"**예요. 한 번만 세팅해두면 매번 물어보지 않아도 됩니다.

---

## 현재 설정 확인하기

오토 모드가 어떤 규칙으로 동작하는지 실시간으로 보고 싶다면:

```bash
# 현재 적용 중인 유효 설정 전체 보기
claude auto-mode inspect
```

출력 예시:

```
Auto mode effective configuration:
  Trusted repos:     github.com/my-org (3)
  Trusted domains:   *.internal.mycompany.com (1)
  Trusted buckets:   s3://my-company-* (2)
  Environment:       "Development, non-production"
  Allow overrides:   2 rules
  Block overrides:   1 rule
  Base policy:       standard
```

> 🍱 **비유로 설명하면**: 보안 담당자한테 "지금 네가 알고 있는 우리 회사 구조가 뭐야?" 하고 물어보는 것과 같아요.

---

## 관리자가 조직 전체에 적용하기 (Team·Enterprise)

개인 설정이 아니라 팀 전체의 auto 모드 분류기 규칙을 통일하고 싶다면, **Server-Managed Settings** (서버 관리 설정) 를 사용해요.

```json
// Anthropic 관리 콘솔 또는 managed-settings.json
{
  "autoMode": {
    "trustedRepos": ["github.com/company-org"],
    "trustedDomains": ["*.company-internal.com"],
    "environmentContext": "Enterprise team environment",
    "overrideBlockRules": [
      "no push to main without PR review"
    ]
  }
}
```

직원이 개별적으로 `trust-repo`를 호출하지 않아도 회사 표준 설정이 자동 적용돼요.

> 📌 **서버 관리 설정 상세**: [server-managed-settings 공식 문서](https://code.claude.com/docs/en/server-managed-settings)

---

## `"$defaults"` 키워드 — 기본 규칙을 유지하면서 추가하기

`overrideAllowRules`, `overrideBlockRules`, `environmentContext`에서 기본 내장 규칙 목록을 통째로 교체하지 않고 **거기에 추가만 할 수 있어요**.

```json
{
  "autoMode": {
    "allow": ["$defaults", "push to deployment/staging"],
    "soft_deny": ["$defaults", "delete production database"],
    "environment": ["$defaults", "CI environment, non-production"]
  }
}
```

`"$defaults"`를 배열 앞에 넣으면 Anthropic이 관리하는 **기본 허용/차단 목록 전체가 먼저 적용**되고, 그 뒤에 내 규칙이 추가돼요.

> 🍱 **비유로 설명하면**: 회사 보안 규칙(기본 목록)이 있는데, 거기다 우리 팀 전용 규칙만 덧붙이는 거예요. 기본 규칙을 버리지 않고 확장하는 방식.

<div class="note-star">
★ `"$defaults"`를 생략하면 기본 내장 목록이 <strong>완전히 교체</strong>돼요 — 신중하게 쓰세요.<br />
★ v2.1.114부터 지원돼요 (공식 발표 기준).
</div>

---

## 기본 허용·차단 규칙 덮어쓰기 — 조심해야 해요

`overrideAllowRules`와 `overrideBlockRules`는 강력하지만 신중하게 써야 해요.

### 허용 규칙 덮어쓰기 (기본 차단 → 허용)

auto 모드가 기본으로 막는 것들 중, 우리 상황에서는 괜찮은 것만 풀어줘요.

```json
"overrideAllowRules": [
  "push to deployment/staging",
  "run docker build in /ci directory"
]
```

⚠️ `curl | bash` 처럼 외부 코드 실행이나 프로덕션 배포는 풀어주지 마세요.

### 차단 규칙 덮어쓰기 (기본 허용 → 차단)

기본으로 허용되지만 우리 팀에서는 추가로 금지할 것들이에요.

```json
"overrideBlockRules": [
  "no npm publish",
  "no access to /secrets directory"
]
```

> 🍱 **비유로 설명하면**: 허용 덮어쓰기는 "우리 회사는 이 문을 열어도 돼" 추가 열쇠, 차단 덮어쓰기는 "이 서랍은 절대 열지 마" 잠금 추가예요.

---

## 자주 묻는 질문

### Q1. 신뢰 설정을 잘못 넣었을 때는?

```bash
# 신뢰 저장소 제거
claude auto-mode remove-repo https://github.com/my-org/wrong-repo

# 모든 신뢰 설정 초기화 (추정 — 버전 따라 다를 수 있음)
claude auto-mode reset
```

### Q2. 조직 설정과 개인 설정이 충돌하면?

서버 관리 설정(조직)이 개인 설정보다 **우선합니다**. 조직 설정이 없는 부분만 개인 설정이 채워요.

### Q3. auto 모드 사용 조건(요금제 등)은?

auto 모드 자체의 사용 조건은 [권한 모드 문서 — auto 섹션](/docs/advanced/permission-modes#4️⃣-auto-⭐-2026-new--물어보진-않되-안전-체크는-해요)에서 확인하세요.

---

## 더 알아보기

- [공식 문서 — auto-mode-config](https://code.claude.com/docs/en/auto-mode-config)
- [공식 문서 — permission-modes](https://code.claude.com/docs/en/permission-modes)
- [권한 모드 완전 정리 (이 ebook)](/docs/advanced/permission-modes)
- [permissions.json 설정 가이드 (이 ebook)](/docs/config/permissions-guide)
- [서버 관리 설정 — server-managed-settings](https://code.claude.com/docs/en/server-managed-settings)
