---
title: "[공] Claude Apps Gateway — 기업용 통합 API 게이트웨이"
description: "Bedrock·GCP·Foundry를 단일 게이트웨이로 묶어 SSO 로그인, 그룹별 모델 접근, OTLP 텔레메트리를 중앙 관리하는 기업용 인프라 설명"
tags: ["자동생성", "기업", "enterprise", "gateway", "bedrock", "GCP", "Foundry", "SSO", "고급"]
category: "advanced"
order: 36
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Claude Code 공식 문서 <a href="https://code.claude.com/docs/en/claude-apps-gateway" target="_blank">Claude Apps Gateway</a> <code>[공]</code><br />
★ <strong>대상</strong> — 팀/기업 단위 Claude Code 배포를 담당하는 IT 관리자·DevOps 엔지니어<br />
★ 입문자보다는 <strong>조직 배포 담당자</strong>에게 필요한 내용이에요
</div>

---

## Claude Apps Gateway가 뭔가요?

여러 클라우드에서 Claude Code를 사용하는 조직이 **하나의 게이트웨이 서버**를 통해 인증·접근 제어·사용량 추적을 통합 관리할 수 있게 해주는 자체 호스팅 인프라예요.

> 🍱 **비유**: 건물에 출입문이 여러 개(AWS, Google Cloud, Microsoft Azure) 있는데, 모든 출입문을 하나의 경비실에서 통합 관리하는 것과 같아요. 경비원 한 명(게이트웨이)이 누가 어느 문으로 들어왔는지, 어디서 무엇을 했는지 다 기록해요.

---

## 지원 클라우드

| 클라우드 | 연결 방식 |
|---|---|
| Amazon Bedrock | AWS IAM + Bedrock API |
| Claude Platform on AWS | Anthropic 운영 AWS 기반 API |
| Google Cloud (Vertex AI) | GCP 서비스 계정 + Agent Platform |
| Microsoft Foundry | Azure 기반 Foundry API |

하나의 게이트웨이로 이 모두를 중앙에서 관리해요.

---

## 주요 기능

### 1. SSO 로그인
조직의 OIDC 기반 SSO(구글 워크스페이스, Microsoft Entra 등)와 연동해 직원들이 별도 API 키 없이 로그인해요.

### 2. 그룹별 모델 접근 제어
부서·팀별로 사용할 수 있는 모델을 다르게 설정해요.

```yaml
# gateway.yaml 예시 (공식 발표 기준)
upstreams:
  - name: bedrock
    modelRouting:
      groups:
        - group: "dev-team"
          models: ["claude-sonnet-4-6"]
        - group: "ml-team"
          models: ["claude-opus-4-8", "claude-fable-5"]
```

### 3. OTLP 텔레메트리
OpenTelemetry(OTLP) 프로토콜로 모든 API 호출 로그를 Datadog, Grafana, Prometheus 등 기존 모니터링 시스템에 전송해요.

### 4. 개발자별 지출 한도
하루·주·월 단위로 개발자별 API 사용 비용 상한선을 설정할 수 있어요.

```bash
# Admin API로 지출 한도 설정 (추정 예시)
claude gateway spend-limit set --user alice@company.com --daily 5.00
```

---

## 관련 공식 문서 (기업 담당자용)

| 문서 | 내용 |
|---|---|
| [Claude Apps Gateway 개요](https://code.claude.com/docs/en/claude-apps-gateway) | 아키텍처 개요, 지원 클라우드 |
| [gateway.yaml 설정 레퍼런스](https://code.claude.com/docs/en/claude-apps-gateway-config) | 모든 설정 옵션 상세 |
| [배포 및 운영 가이드](https://code.claude.com/docs/en/claude-apps-gateway-deploy) | Docker/Kubernetes 배포, 운영 |
| [GCP 배포 예제](https://code.claude.com/docs/en/claude-apps-gateway-on-gcp) | Google Cloud에서 실제 구축 |
| [지출 한도 설정](https://code.claude.com/docs/en/claude-apps-gateway-spend-limits) | 개발자별 비용 상한 관리 |
| [LLM 게이트웨이 통합 개요](https://code.claude.com/docs/en/gateways) | 서드파티 게이트웨이와의 통합 |

---

## 일반 사용자에게는 해당 없어요

이 기능은 **IT 관리자나 DevOps 담당자**가 조직 단위로 Claude Code를 배포할 때 사용해요. 개인 사용자나 소규모 팀이라면:

- 그냥 `claude.com` 구독으로 시작하세요
- Team 플랜(5인 이상)이면 별도 게이트웨이 없이 사용 가능해요

<div class="note-circle">
○ 이 문서는 2026-07-03 공식 문서 기준으로 작성됐어요<br />
○ 구체적인 배포 방법은 각 공식 문서 링크를 참고하세요<br />
○ 기업 도입 문의: <a href="https://www.anthropic.com/contact-sales" target="_blank">Anthropic 영업팀</a>
</div>
