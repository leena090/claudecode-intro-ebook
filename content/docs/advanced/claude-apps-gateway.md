---
title: "[공] Claude Apps Gateway — 회사 전용 API 중계 서버 직접 운영하기"
description: "Anthropic이 claude 실행파일 안에 내장한 자체 호스팅 게이트웨이. AWS Bedrock·Google Cloud·MS Foundry로 라우팅, SSO 로그인, OTLP 원격 측정. 기업 팀을 위한 고급 설정"
tags: ["고급", "기업", "enterprise", "gateway", "게이트웨이", "bedrock", "SSO", "OTLP", "2026", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-07-02"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Apps Gateway는 고급 기업 기능이에요. <code>[공]</code><br />
⚠️ <strong>대상 독자</strong> — 팀/조직 관리자 또는 기업 IT 담당자를 위한 내용이에요. 개인 사용자는 이 기능이 필요 없어요.<br />
👉 <a href="https://code.claude.com/docs/en/claude-apps-gateway" target="_blank">공식 문서: code.claude.com/docs/en/claude-apps-gateway</a>
</div>

## "게이트웨이"가 뭔가요? 왜 필요한가요?

> 🍱 **비유**: 회사 직원들이 각자 카페에 가서 커피를 사먹는 대신, 회사가 "사내 카페"를 운영하는 것과 같아요. 직원들은 사내 카페에서 사원증으로 주문하고, 사내 카페가 외부 커피 공급업체와 계약해서 커피를 가져와요. 회사는 누가 얼마나 마셨는지 한 번에 관리할 수 있어요.

일반적으로 개발자들이 Claude Code를 쓸 때:
- 각자 Anthropic API 키를 가지고 있거나
- claude.ai 구독을 사용해요

하지만 회사 차원에서 관리하면:
- **API 키를 개발자가 직접 갖지 않아도** 돼요 (보안 강화)
- **누가 얼마나 썼는지** 중앙에서 추적 가능
- **어떤 모델을 쓸 수 있는지** 팀별로 제어 가능
- **회사 클라우드(AWS·GCP·Azure)** 를 통해 라우팅 가능

이를 위한 것이 **Gateway(게이트웨이)**예요.

---

## Claude Apps Gateway란?

Claude Apps Gateway는 Anthropic이 만든 **자체 호스팅 게이트웨이 서버**예요. 특별한 건, 이게 **`claude` 실행파일 안에 이미 내장**되어 있어요.

```bash
# claude 실행파일 하나로 게이트웨이 서버도 실행 가능
claude gateway --config gateway.yaml
```

별도 소프트웨어를 설치하지 않아도 돼요.

### 어디로 라우팅할 수 있나요?

| 클라우드 | 지원 |
|---------|------|
| 🟠 Amazon Bedrock | ✅ |
| 🔵 Google Cloud (Agent Platform) | ✅ |
| 🟣 Microsoft Azure Foundry | ✅ |
| ⬛ Anthropic API | ✅ |

---

## 주요 기능

### 🔐 SSO 로그인 (Single Sign-On)

개발자들이 회사 계정(Okta, Microsoft Entra, Google Workspace 등)으로 로그인해요.

```bash
# 개발자가 터미널에서 실행
/login
# → 브라우저에서 회사 계정으로 로그인
# → 완료, API 키 없이 바로 사용 가능
```

- API 키를 각자 관리할 필요 없어요
- 퇴사자의 접근권한이 회사 IdP(계정 관리 시스템)에서 제거하면 자동 만료돼요

### 👥 팀별 모델 접근 제어

IdP 그룹(예: "개발팀", "디자인팀")별로 사용 가능한 모델을 다르게 설정할 수 있어요.

```yaml
# gateway.yaml 예시
managed:
  policies:
    - groups: ["dev-team"]
      availableModels:
        - claude-opus-4-8
        - claude-sonnet-4-6
    - groups: ["design-team"]
      availableModels:
        - claude-sonnet-4-6
        - claude-haiku-4-5
```

### 📊 OTLP 원격 측정 (Telemetry)

Datadog, Splunk, ClickHouse 같은 기업 모니터링 도구로 사용량 데이터를 보낼 수 있어요.

```yaml
telemetry:
  - endpoint: https://otel-collector.internal.example.com/v1/metrics
    headers:
      Authorization: Bearer ${OTEL_TOKEN}
```

각 요청별로 **누가(개발자 ID), 어떤 모델, 몇 토큰, 얼마나 걸렸는지** 기록돼요.

<div class="note-circle">
○ 프롬프트 내용 자체는 게이트웨이가 저장하지 않아요<br />
○ 상세 로그(명령어·파일 경로 포함)는 선택적으로 활성화할 수 있어요
</div>

---

## 시스템 요구사항

| 항목 | 요구사항 |
|------|---------|
| Claude Code 버전 | **v2.1.195 이상** (서버 + 모든 개발자 기기) |
| OS (서버) | **Linux** (macOS는 로컬 개발용만) |
| 데이터베이스 | PostgreSQL **14 이상** |
| IdP | OIDC 호환 (Okta, Entra, Google Workspace, Keycloak 등) |
| 네트워크 | 게이트웨이 주소가 **사설 IP**여야 함 (보안 제약) |

<div class="note-circle">
○ Windows는 서버 플랫폼으로 지원하지 않아요<br />
○ SAML·LDAP은 지원하지 않아요 (OIDC만 지원)
</div>

---

## 기본 설정 파일 구조 (gateway.yaml)

```yaml
listen:
  host: 0.0.0.0
  port: 8080
  public_url: https://claude-gateway.internal.example.com

oidc:
  issuer: https://login.example.com
  client_id: 0oa1example2
  client_secret: ${OIDC_CLIENT_SECRET}
  allowed_email_domains: [example.com]

session:
  jwt_secret: ${GATEWAY_JWT_SECRET}
  ttl_hours: 1

store:
  postgres_url: ${GATEWAY_POSTGRES_URL}

upstreams:
  - provider: bedrock
    region: us-east-1
    auth: {}  # AWS 기본 자격증명 체인 사용

auto_include_builtin_models: true
```

---

## 개발자 입장에서 보면?

게이트웨이가 설정된 환경에서 개발자는:

1. 터미널에서 `/login` 입력
2. 브라우저에서 회사 계정으로 로그인
3. 완료 — API 키 없이 그냥 쓰면 돼요

게이트웨이 세션이 활성화되면:
- 개인 `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_API_KEY`는 무시돼요
- 팀 정책에서 허용된 모델만 `/model` 선택지에 나타나요
- 허용되지 않은 모델 요청 시 차단 메시지 표시

---

## 지원 기능 요약

| 기능 | 상태 | 비고 |
|------|------|------|
| 추론 라우팅 (Bedrock·GCP·Foundry·Anthropic) | ✅ | 모델 자동 변환 포함 |
| IdP 그룹별 모델 제어 | ✅ | 서버 사이드 적용 |
| OTLP 원격 측정 | ✅ | 프로토버프·JSON 모두 지원 |
| 표준 프롬프트 캐싱 | ✅ | |
| 서브에이전트 권한 프롬프트 | ✅ | 메인 세션에 표시 |
| 1시간 캐시 TTL | ❌ | 5분 TTL만 지원 |
| 서버 사이드 웹 검색 | ❌ | 클라이언트 기반 사용 |
| SAML·LDAP 인증 | ❌ | OIDC만 지원 |
| Windows 서버 | ❌ | Linux만 지원 |
| Auto mode | ⚠️ 조건부 | `CLAUDE_CODE_ENABLE_AUTO_MODE=1` 필요 |

---

## Claude Enterprise와 비교

| | Claude Apps Gateway | Claude Enterprise |
|-|---------------------|-------------------|
| 데이터 경로 | 자사 클라우드 경유 | Anthropic 서버 경유 |
| 데이터 상주 요건 | ✅ 자체 제어 가능 | ❌ |
| SCIM 프로비저닝 | ❌ | ✅ |
| Claude Code on Web·Mobile | ❌ | ✅ |
| 추가 인프라 운영 | 필요 (PostgreSQL 등) | 불필요 |

> 데이터가 자사 클라우드 밖으로 나가면 안 되는 금융·의료·공공 조직에 Claude Apps Gateway가 유용해요.

---

## 이런 경우가 아니라면 불필요해요

Claude Apps Gateway는 **기업 IT 인프라 수준의 설정**이에요. 다음 경우라면 필요 없어요:

- 개인 개발자 또는 소규모 팀
- claude.ai 구독으로 충분한 경우
- 데이터 상주 요건이 없는 경우

개인·소팀용은 그냥 Claude Code를 claude.ai 계정으로 쓰면 돼요.
