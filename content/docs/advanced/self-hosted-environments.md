---
title: "[공] Self-Hosted Environments — 우리 회사 클라우드에 Claude 환경 직접 구축"
description: "기업이 자체 클라우드(AWS·GCP·Azure)에 Claude Code 실행 환경을 직접 배포하는 Self-Hosted Environments 기능이 공식 문서에 등장했어요"
tags: ["자동생성", "엔터프라이즈", "self-hosted", "환경설정", "보안", "클라우드", "고급"]
category: "advanced"
order: 39
lastUpdated: "2026-11-25"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/self-hosted-environments 계열 신규 문서 기반.
<br />★ 엔터프라이즈 전용 기능으로 추정. 세부 사항은 공식 문서 확인 필요.
</div>

## Self-Hosted Environments란?

> 🏠 **비유로 설명하면**: 카페(Anthropic 클라우드)에서 커피 마시는 대신, 우리 사무실 주방에 에스프레소 머신을 직접 들여놓는 거예요. 더 불편하지만 완전한 통제권이 생겨요.

지금까지 Claude Code 에이전트는 Anthropic의 클라우드 환경에서 실행됐어요. **Self-Hosted Environments**는 기업이 **자사 인프라에 직접 Claude Code 실행 환경을 구축**하는 기능이에요.

---

## 왜 필요한가요?

```
일반 클라우드 환경:
코드 → Anthropic 클라우드 → 결과

Self-Hosted 환경:
코드 → 우리 회사 서버 → 결과
         (외부 전송 없음)
```

> 🔒 **보안이 최우선인 기업** — 금융·의료·정부·방산 분야에서 코드가 외부 클라우드에 나가면 안 될 때 필요해요.

---

## 공식 문서 구조 (신규 감지)

| 문서 | 내용 |
|---|---|
| `self-hosted-environments` | 개요 |
| `self-hosted-environments-quickstart` | 빠른 시작 |
| `self-hosted-environments-deploy` | 배포 방법 |
| `self-hosted-environments-configuration` | 상세 설정 |
| `self-hosted-environments-testing` | 테스트 방법 |
| `self-hosted-environments-reference` | 레퍼런스 문서 |
| `self-hosted-environments-identity` | 인증·ID 관리 |

> 7개 세부 문서가 존재한다는 건 상당히 복잡한 설정이 필요한 기능이에요.

---

## 어떤 인프라에서 쓸 수 있나요?

기존 `cloud-environments` 문서도 함께 등장했어요. 추정:

| 환경 | 지원 여부 |
|---|---|
| ☁️ Anthropic 관리 클라우드 | ✅ 기본 |
| 🟠 AWS (Amazon Bedrock) | ✅ 기존 |
| 🔵 Google Cloud | ✅ 기존 |
| 🟣 Azure (Microsoft Foundry) | ✅ 기존 |
| 🏢 **자체 클라우드 (Self-Hosted)** | ✅ **신규** |

---

## Claude Apps Gateway와의 관계

기존에 발표된 **Claude Apps Gateway**가 외부 트래픽을 제어하는 게이트웨이라면, **Self-Hosted Environments**는 에이전트 실행 환경 자체를 사내에 두는 것으로 추정돼요:

```
Self-Hosted 아키텍처 (추정):
사내망 → Self-Hosted Claude 환경
              ↕ (Anthropic API 호출만)
           Anthropic API
```

> 코드 자체는 사내에서만 처리되고, Anthropic API는 모델 추론에만 사용.

---

## 설정 개요 (추정)

```bash
# 1. Self-Hosted 환경 이미지 다운로드 (추정)
docker pull anthropic/claude-code-environment:latest

# 2. 사내 클라우드에 배포
# kubernetes, docker-compose 등 (추정)

# 3. Identity 설정 (SSO, OAuth 연동)
# code.claude.com/docs/en/self-hosted-environments-identity 참조

# 4. 테스트
# code.claude.com/docs/en/self-hosted-environments-testing 참조
```

> ⚠️ 실제 배포 명령어는 공식 문서 참조: `code.claude.com/docs/en/self-hosted-environments-deploy`

---

## 이런 분께 필요해요

- 🏦 **금융권** — 소스코드가 외부로 나가면 안 되는 규정
- 🏥 **의료기관** — HIPAA, 환자정보 보호
- 🏛️ **공공기관** — 국가 보안 데이터 처리
- 🔐 **보안 중시 기업** — 제로트러스트 아키텍처 구현

---

## HIPAA 설정도 신규 등장

별도로 `hipaa-setup` 문서도 새로 생겼어요. 미국 의료 정보 보호법(HIPAA) 준수를 위한 Claude Code 설정 가이드 (추정).

> 📖 `code.claude.com/docs/en/hipaa-setup`

---

*출처: [공] code.claude.com/docs/en/self-hosted-environments 계열 (2026-11-25 신규 감지). 작동 방식은 URL 구조 기반 추정 포함 — 공식 문서 직접 확인 권장.*
