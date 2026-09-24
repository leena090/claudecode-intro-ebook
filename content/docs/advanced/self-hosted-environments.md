---
title: "[공] 자체 호스팅 환경 — 회사 서버에서 Claude Code 클라우드 실행하기"
description: "Self-hosted environments는 Claude Code 클라우드 세션을 회사 내부 인프라에서 실행하는 기능이에요. 코드가 외부로 나가지 않아야 하는 기업 환경에 적합해요"
tags: ["자동생성", "자체호스팅", "보안", "엔터프라이즈", "클라우드", "인프라"]
category: "advanced"
order: 28
lastUpdated: "2026-09-24"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ 2026년 8월 7일 공개 베타 출시 (W32, 공식 발표 기준)
</div>

## 자체 호스팅 환경이란?

**Self-hosted Environments**(자체 호스팅 환경)는 Claude Code 클라우드 세션을 **회사 내부 서버나 클라우드 인프라에서 실행**할 수 있게 해주는 기능이에요.

> 🏢 **비유로 설명하면**: 일반 Claude Code 클라우드는 "Anthropic이 운영하는 공용 사무실에서 일하는 것"이에요. 자체 호스팅 환경은 **"회사 건물 안에 전용 사무실을 만들어서 그 안에서만 일하는 것"** 이에요. 코드와 데이터가 회사 밖으로 나가지 않아요.

---

## 왜 필요한가요?

| 상황 | 일반 클라우드 | 자체 호스팅 |
|---|---|---|
| 코드가 외부 서버로 이동 | ⭕ (Anthropic 서버) | ❌ (내부에서만) |
| 보안 규정 준수 (금융·의료·정부) | 어려울 수 있음 | 가능 |
| 내부 서비스 직접 접근 | 불가 | 가능 |
| 네트워크 격리 요건 | 맞추기 어려움 | 맞출 수 있음 |

---

## 어떻게 동작하나요?

```
[개발자] → [Claude Code] → [회사 내부 Runner] → [내부 서비스·코드베이스]
                              ↑
                    (회사 서버에서 실행)
```

1. 회사 서버에 **Runner**(실행기)를 설치해요
2. Claude Code가 클라우드 세션을 이 Runner로 라우팅해요
3. Runner가 내부 네트워크에서 작업을 처리해요
4. 결과만 Claude Code로 돌아와요

---

## 기본 설정 흐름

공식 문서 기준 주요 단계:

### 1. 환경 생성

```bash
# Claude Code CLI로 자체 호스팅 환경 생성
claude env create --name "my-company-env" --type self-hosted
```

### 2. Runner 설치 및 시작

회사 서버(Docker/Kubernetes 등)에 Runner를 배포해요:

```bash
# Docker 예시
docker run anthropic/claude-code-runner \
  --env-id <환경 ID> \
  --token <인증 토큰>
```

### 3. 세션 라우팅

```bash
# 자체 호스팅 환경으로 세션 시작
claude --env my-company-env "리팩토링 작업 시작해줘"
```

---

## 주요 특징

| 특징 | 내용 |
|---|---|
| **코드 격리** | 소스 코드가 회사 네트워크 밖으로 나가지 않음 |
| **내부 서비스 접근** | 내부 DB, API 등에 직접 연결 가능 |
| **보안 강화** | JWT 세션 ID 검증, IAM 권한 제어 |
| **운영 유연성** | Docker, Kubernetes, Cloud Run 등 지원 |
| **모니터링** | Prometheus 메트릭, OTLP 텔레메트리 |

---

## 지원 배포 환경

| 플랫폼 | 상태 |
|---|---|
| Docker / Docker Compose | ✅ 지원 |
| Kubernetes | ✅ 지원 |
| AWS ECS/EKS | ✅ 지원 (별도 가이드 있음) |
| Google Cloud Run/GKE | ✅ 지원 (별도 가이드 있음) |
| 기타 컨테이너 환경 | 추정 가능 |

---

## 언제 사용하나요?

**자체 호스팅이 필요한 경우:**
- 🏦 금융·의료·정부 등 데이터 주권 요건이 있는 산업
- 🔒 소스 코드가 절대 외부로 나가면 안 되는 환경
- 🌐 인터넷 단절 환경에서 개발하는 경우
- 🔗 Claude Code가 회사 내부 서비스에 직접 접근해야 하는 경우

**일반 클라우드로 충분한 경우:**
- 🚀 스타트업 / 소규모 팀
- 💻 개인 프로젝트 / 오픈소스 개발
- ⚡ 빠른 시작이 우선인 경우

---

## 관련 문서

- 자체 호스팅 환경 빠른 시작: [self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- 프로덕션 배포: [self-hosted-environments-deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- 세션 커스터마이즈: [self-hosted-environments-configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration)

<div class="note-star">
★ 자체 호스팅 환경은 현재 <strong>공개 베타</strong> 상태예요 (2026년 8월 기준). 프로덕션 사용 시 안정성을 충분히 테스트하세요.
</div>

---

## 정리

자체 호스팅 환경은 보안이 중요한 기업 환경에서 Claude Code를 안심하고 사용할 수 있게 해줘요. 회사 인프라 안에 Runner를 설치하면, 코드와 데이터가 외부로 나가지 않으면서 Claude Code의 모든 기능을 그대로 활용할 수 있어요.
