---
title: "[공] Claude Apps Gateway — 기업용 자체 서버 연결"
description: "회사가 직접 운영하는 게이트웨이 서버를 통해 Claude Code를 사용하는 기업 전용 기능. SSO 로그인, 모델 접근 제어, OTLP 텔레메트리 지원 (v2.1.195+)"
tags: ["자동생성", "enterprise", "gateway", "sso", "bedrock", "foundry", "v2.1.195"]
category: "advanced"
order: 27
lastUpdated: "2026-06-29"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-apps-gateway">code.claude.com/docs/en/claude-apps-gateway</a><br />
★ <strong>필요 버전</strong>: v2.1.195 이상 (서버·클라이언트 모두)<br />
★ <strong>대상</strong>: 주로 기업 IT 관리자용. 일반 개인 사용자는 해당 없음.
</div>

---

## Claude Apps Gateway(클로드 앱스 게이트웨이)란?

> 🏢 **비유로 설명하면**: 회사 사무실에 들어갈 때 회사 출입증으로 들어가듯이, 개인 claude.ai 계정이나 API 키 없이도 **회사 계정(SSO)으로 로그인해서 Claude Code를 사용하는 방법**이에요.

회사 IT팀이 자체 서버(게이트웨이)를 구성하면:
- 개발자는 회사 계정으로 `/login` 한 번만 하면 됩니다
- API 키나 개인 구독 없이도 Claude Code 사용 가능
- 회사가 어떤 모델을 쓸 수 있는지, 얼마나 쓸 수 있는지 관리

---

## 어떤 구조인가요?

```
개발자 노트북               회사 인프라                    모델 제공사
┌─────────────────┐    ┌───────────────────┐    ┌─────────────────┐
│   Claude Code   │───▶│  Claude Apps      │───▶│ Amazon Bedrock  │
│  (VS Code/터미널) │    │  Gateway 서버     │    │ Google Cloud    │
│                 │    │                   │    │ MS Foundry      │
│  회사 계정으로    │    │  • SSO 인증       │    │ Anthropic API   │
│  /login 한 번   │    │  • 모델 접근 제어  │    └─────────────────┘
└─────────────────┘    │  • 사용량 추적    │
                       │  • 예산 관리      │
                       └───────────────────┘
```

**핵심**: 모델 API 키는 게이트웨이 서버에만 있고, 개발자는 회사 계정 토큰만 씁니다.

---

## 주요 기능

### 1. 회사 계정 로그인 (SSO)

Okta(옥타), Microsoft Entra(엔트라), Google Workspace(구글 워크스페이스) 등 회사에서 쓰는 OIDC(오아이디씨) 로그인 서비스를 통해 인증합니다.

```
> /login
```

→ 브라우저가 열리며 회사 로그인 페이지로 이동 → 완료하면 Claude Code가 게이트웨이에 연결됩니다.

### 2. 그룹별 모델 접근 제어

IT 부서, 개발 부서, 인턴 등 **팀·직급에 따라 사용 가능한 모델이 달라집니다**.

예: 
- 선임 개발자 → Opus 4.8 사용 가능
- 인턴 → Sonnet 4.6만 사용 가능

### 3. 사용량 추적 (OTLP 텔레메트리)

각 개발자가 어떤 모델을 얼마나 썼는지, 응답 시간이 어떤지 Datadog(데이터독)·Splunk(스플렁크) 같은 관리 도구로 확인할 수 있어요.

### 4. 여러 모델 제공사 지원

| 제공사 | 지원 여부 |
|-------|---------|
| Amazon Bedrock (아마존 베드록) | ✅ |
| Google Cloud Agent Platform | ✅ |
| Microsoft Foundry (파운드리) | ✅ |
| Anthropic API (직접) | ✅ |

IT팀이 제공사를 바꿔도 개발자는 그대로 `/login`만 하면 됩니다.

---

## 개인 사용자에게는 해당 없나요?

네, **일반 개인 사용자는 이 설정이 필요 없습니다.**

| 상황 | 게이트웨이 필요? |
|------|--------------|
| 개인 Claude Pro/Max 구독 사용 | ❌ 불필요 |
| 기업 Teams/Enterprise 플랜 | 선택 사항 (IT팀 결정) |
| AWS Bedrock 직접 사용 (개인) | ❌ 불필요 (기존 방법 사용) |
| 회사 IT팀이 게이트웨이 구성 | ✅ 필요 (IT팀 안내 따름) |

---

## 개발자가 알아야 할 것

게이트웨이가 구성된 회사에 다닌다면, IT팀이 보내준 안내에 따라 이렇게 하면 됩니다:

```bash
# Claude Code 업데이트 (v2.1.195 이상 필요)
claude update

# 로그인 (브라우저로 회사 계정 인증)
> /login
```

한 번 로그인하면:
- API 키 없이 Claude Code 사용 가능
- 회사 정책에 맞는 모델만 표시됨
- `! -p` 자동화 스크립트도 게이트웨이 세션 사용

> ⚠️ **주의**: 게이트웨이 로그인 중엔 개인 claude.ai 구독은 사용되지 않아요. 게이트웨이가 연결된 회사 계정의 크레딧이 사용됩니다.

---

## 기술적 제약 (참고)

| 기능 | 상태 |
|------|------|
| 표준 프롬프트 캐싱 | ✅ 사용 가능 |
| Auto mode | ✅ (옵트인 필요) |
| 서버 웹 검색 | ❌ 미지원 |
| 1시간 캐시 TTL | ❌ 미지원 (5분 기본값 사용) |
| CI 파이프라인 (무인 환경) | ❌ (브라우저 인증 필요) — 직접 API 사용 권장 |

---

## IT 관리자를 위한 빠른 시작

게이트웨이는 `claude` 바이너리에 내장되어 있어서 별도 설치가 필요 없습니다:

```bash
# 최소 구성으로 실행
claude gateway --config gateway.yaml
```

**필요한 것**:
- PostgreSQL(포스트그레스큐엘) 14+
- OIDC IdP (Okta, Entra, Google 등)
- HTTPS (공개 IP 불가 — 내부 네트워크 전용)
- 모델 제공사 자격증명 (Bedrock IAM Role 등)

> 📚 **더 자세한 내용**: [code.claude.com/docs/en/gateways](https://code.claude.com/docs/en/gateways) (게이트웨이 전체 개요)

---

## 한 줄 정리

> Claude Apps Gateway는 회사 IT팀이 구성하는 기업용 연결 서버예요. 개발자는 API 키 없이 회사 계정으로 로그인하고, 회사는 모델 접근과 사용량을 중앙에서 관리합니다. (v2.1.195+, 공식 문서 기준)
