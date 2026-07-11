---
title: "[공] Claude Apps Gateway — 기업용 자체 호스팅 게이트웨이"
description: "회사 서버에 Claude 게이트웨이를 직접 운영하는 방법. SSO 로그인, 그룹별 모델 권한, 사용량 추적까지 한 번에"
tags: ["기업", "게이트웨이", "gateway", "SSO", "보안", "enterprise", "자동생성"]
category: "advanced"
order: 22
lastUpdated: "2026-07-11"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Apps Gateway (2026-07-11). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/claude-apps-gateway" target="_blank">공식 문서: code.claude.com/docs/en/claude-apps-gateway</a>
</div>

<div class="note-circle">
⚠️ 이 기능은 <strong>기업(Enterprise) 수준 설정</strong>이에요. 개인 사용자나 소규모 팀은 일반 Claude Code나 Claude Enterprise 플랜을 사용하세요.
</div>

## Claude Apps Gateway가 뭔가요?

**Claude Apps Gateway(게이트웨이)**는 회사가 자체 서버에 설치해서 운영하는 **중간 프록시 서버**예요. 개발자들의 Claude Code와 실제 AI 모델(Amazon Bedrock, Google Cloud 등) 사이에 위치해요.

> 🍱 **비유**: 직원들이 AI를 쓸 때 인터넷에 직접 나가지 않고, 회사 보안 게이트를 통해 나가도록 하는 거예요. 게이트에서 누가 뭘 얼마나 썼는지 기록하고, 누구는 어떤 모델을 쓸 수 있는지 관리해요.

---

## 어떤 문제를 해결하나요?

개발자가 100명인 회사를 생각해봐요. 그냥 API 키를 나눠주면:

| 문제 | 설명 |
|------|------|
| 퇴직자 처리 | API 키를 일일이 무효화해야 함 |
| 사용량 관리 | 누가 얼마나 썼는지 파악 어려움 |
| 보안 규정 | AI 쿼리가 Anthropic 서버를 거치는 게 규정 위반일 수 있음 |
| 팀별 권한 | 어떤 팀은 강력한 모델, 어떤 팀은 기본 모델만 써야 할 때 |

Claude Apps Gateway는 이 모든 문제를 해결해줘요.

---

## 주요 기능

### 1. 회사 계정으로 로그인 (SSO)

개발자들이 API 키 없이 **회사 이메일·계정**으로 로그인해요:

```bash
# 개발자 노트북에서
/login
# → 회사 Okta·Microsoft·Google 계정으로 로그인 →
# → 로그인 성공, Claude Code 사용 가능!
```

직원이 퇴사하면 회사 계정을 비활성화하면 끝이에요. API 키를 따로 관리할 필요 없어요.

### 2. 그룹별 모델 권한

| 팀 | 사용 가능 모델 |
|----|--------------|
| 핵심 엔지니어링팀 | Sonnet 5, Opus 4.8 |
| 일반 개발팀 | Sonnet 5 |
| 인턴/임시직 | Haiku 4.5 |

### 3. 사용량 추적 (OTLP)

개발자별 토큰 사용량, 응답 시간 등을 회사 Datadog·Splunk 등에 자동으로 기록해요.

### 4. 데이터 국내 처리

AI 쿼리가 Amazon Bedrock(서울 리전), Google Cloud, Microsoft Foundry 등 **회사가 선택한 곳**으로만 가요. Anthropic에 직접 안 보내도 돼요.

---

## 작동 구조

```
개발자 노트북
  ↓ (회사 SSO로 인증된 토큰)
[Claude Apps Gateway] ← 회사 서버에 설치됨
  ↓ (회사 API 키·클라우드 자격증명)
Amazon Bedrock / Google Cloud / Microsoft Foundry / Anthropic API
```

**핵심 포인트**: 개발자는 API 키를 가지지 않아요. 게이트웨이가 가지고 있어요.

---

## 설치 요구 사항

| 항목 | 요구 사항 |
|------|---------|
| Claude Code 버전 | v2.1.195 이상 |
| 인증 방식 | OIDC 지원 IdP (Okta, Microsoft Entra, Google Workspace 등) |
| 데이터베이스 | PostgreSQL 14 이상 |
| 서버 OS | Linux (서버 운영), macOS (개발/테스트만) |
| 네트워크 | 사내 네트워크 주소만 지원 (공개 IP 사용 불가) |
| 모델 업스트림 | Amazon Bedrock, Google Cloud, Microsoft Foundry, 또는 Anthropic API |

---

## 설치 방식

놀랍게도 **추가 소프트웨어가 필요 없어요**. `claude` 바이너리 하나로 게이트웨이 서버도 돌아요:

```bash
# 게이트웨이 서버 실행
claude gateway --config gateway.yaml
```

`gateway.yaml` 설정 파일 한 개로 모든 설정을 관리해요.

---

## 주의: 베타 한계

| 기능 | 지원 여부 |
|------|---------|
| 웹 검색 (WebSearch) | ❌ 게이트웨이 세션에서 미지원 |
| 1시간 프롬프트 캐시 TTL | ❌ (5분 TTL만 지원) |
| CI/CD 파이프라인 로그인 | ❌ 브라우저 SSO 필요, 자동화 불가 |
| Windows 서버 | ❌ Linux만 지원 |
| SAML/LDAP 인증 | ❌ OIDC만 지원 |
| 관리 UI | ❌ YAML 파일로만 관리 |

---

## 언제 이 기능이 필요한가요?

✅ **필요한 경우:**
- 데이터 국내/역내 처리 규정이 있을 때
- 직원 100명 이상 대규모 팀
- AI 사용량 감사 및 비용 관리가 필요할 때
- 팀별 모델 접근 권한을 다르게 설정해야 할 때

❌ **필요 없는 경우:**
- 개인 또는 소규모 팀 (5~10명 이하)
- 데이터 처리 규정이 없는 경우
- Claude Enterprise 플랜으로 충분한 경우

<div class="note-circle">
○ Claude Enterprise는 게이트웨이 없이도 SCIM 프로비저닝·웹/모바일 접근 등을 지원해요<br />
○ 둘의 차이는 <a href="https://code.claude.com/docs/en/feature-availability" target="_blank">feature-availability 페이지</a>에서 확인
</div>

---

## 관련 문서

| 문서 | 내용 |
|------|------|
| [게이트웨이 개요](/docs/en/gateways) | 게이트웨이 선택 가이드 |
| [설정 레퍼런스](/docs/en/claude-apps-gateway-config) | gateway.yaml 전체 옵션 |
| [배포 가이드](/docs/en/claude-apps-gateway-deploy) | Kubernetes·Cloud Run 배포 |
| [지출 한도](/docs/en/claude-apps-gateway-spend-limits) | 사용자/그룹별 예산 관리 |
| [GCP 배포 예시](/docs/en/claude-apps-gateway-on-gcp) | Google Cloud 실전 예제 |
