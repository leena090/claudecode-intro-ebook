---
title: "[공] Claude Apps Gateway — 기업용 자체 호스팅 게이트웨이"
description: "AWS Bedrock·Google Cloud·Microsoft Foundry를 통해 Claude Code를 SSO 인증·그룹별 모델 접근·OTLP 텔레메트리와 함께 기업 내부에서 운영하는 자체 호스팅 게이트웨이."
tags: ["기업", "gateway", "bedrock", "sso", "보안", "엔터프라이즈", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — code.claude.com 공식 문서 신규 등재. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/claude-apps-gateway" target="_blank">공식 문서: Claude Apps Gateway</a> |
<a href="https://code.claude.com/docs/en/gateways" target="_blank">게이트웨이 개요</a>
</div>

> 🎯 **대상 독자**: 이 내용은 주로 **기업 IT 관리자·개발팀 리더**에게 해당합니다. 개인 Pro/Max 사용자는 지금 당장 필요하지 않아요.

## 게이트웨이란 뭔가요? 🌐

**게이트웨이(Gateway)**는 Claude Code와 AI 모델 제공사 사이에 기업이 운영하는 **중간 서버**예요.

> 🏢 **회사 보안문 비유**: 직원들이 외부 인터넷에 바로 접속하는 대신, 회사 보안 게이트를 거쳐 나가는 것처럼 — Claude 요청도 기업의 게이트웨이를 통해 나가요.

| 구성 요소 | 역할 |
|-----------|------|
| 개발자 기기의 Claude Code | 게이트웨이로 요청 전송 |
| 기업 게이트웨이 | 인증·권한·로깅·라우팅 |
| AWS Bedrock / GCP / Foundry | 실제 모델 응답 |

## Claude Apps Gateway가 새로 생겼어요

**Claude Apps Gateway**는 Anthropic이 직접 만든 자체 호스팅 게이트웨이예요.

가장 큰 특징: **`claude` 바이너리 안에 포함** — 별도 설치 없이 동일한 실행 파일로 게이트웨이 서버도 실행!

```bash
# Claude Code 게이트웨이 서버 실행
claude gateway --config gateway.yaml
```

## 주요 기능

| 기능 | 설명 |
|------|------|
| 🔐 SSO 인증 | Okta, Microsoft Entra, Google Workspace 등 회사 계정으로 로그인 |
| 🎯 그룹별 모델 접근 | 개발팀·마케팅팀 등 그룹마다 다른 모델 허용 |
| 📊 OTLP 텔레메트리 | 토큰 수·모델·사용자 ID·레이턴시를 회사 관측 스택으로 전송 |
| 🔄 멀티 업스트림 | AWS Bedrock, GCP Agent Platform, Foundry, Anthropic API 간 자동 페일오버 |
| 💰 지출 한도 | 사용자·그룹별 토큰 소비 상한 설정 |
| 🏛️ 데이터 잔류 | 회사 클라우드 내부에서만 인퍼런스 처리 |

## 어떤 기업에 필요한가요?

| 상황 | 게이트웨이 필요성 |
|------|-----------------|
| 데이터가 국내·특정 리전에만 있어야 함 | ✅ 필수 |
| API 키를 개발자마다 발급하기 싫음 | ✅ 권장 |
| 팀별로 다른 모델 권한이 필요 | ✅ 권장 |
| 사용량 통계를 회사 시스템으로 통합 | ✅ 권장 |
| 소규모 팀, Pro/Max 구독 사용 | ❌ 불필요 |

## 개발자 입장에서 어떻게 달라지나요?

회사에서 게이트웨이를 도입하면 개발자는:

1. API 키 없이 **회사 계정(SSO)으로 로그인**
2. `/login` → 브라우저에서 회사 계정 인증 → 완료
3. 이후 평소처럼 Claude Code 사용

```bash
# 관리자가 managed settings로 게이트웨이 URL 배포 후
# 개발자는 이것만 하면 됨:
/login
```

## 지원 클라우드 업스트림

| 클라우드 | 서비스 |
|----------|--------|
| ☁️ Amazon | AWS Bedrock |
| 🌐 Google | Cloud Agent Platform |
| 💙 Microsoft | Foundry |
| 🟠 Anthropic | 직접 API |

## 필수 요건 (기업 관리자용)

- Claude Code v2.1.195 이상 (서버·클라이언트 모두)
- OIDC 지원 ID 제공자 (Okta, Entra, Google Workspace 등)
- PostgreSQL 14 이상
- HTTPS (개인 네트워크 주소 필수)
- Linux 서버 (macOS는 개발용만, Windows 서버 미지원)

> ⚠️ **제한 사항**: CI/CD 파이프라인은 브라우저 인증이 필요해 게이트웨이 미지원 → 직접 클라우드 제공사 자격증명 사용 권장.

> 📌 **관련 문서**: [게이트웨이 개요](https://code.claude.com/docs/en/gateways) | [설정 참조](https://code.claude.com/docs/en/claude-apps-gateway-config) | [배포 가이드](https://code.claude.com/docs/en/claude-apps-gateway-deploy)
