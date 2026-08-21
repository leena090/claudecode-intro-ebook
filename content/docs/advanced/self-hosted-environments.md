---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 Claude Code 클라우드 실행하기"
description: "Claude Code 클라우드 세션을 Anthropic 서버가 아닌 내 인프라에서 실행하는 셀프 호스팅 환경을 설명해요. 데이터 보안이 중요한 기업에 적합합니다."
tags: ["자동생성", "셀프호스팅", "self-hosted", "클라우드", "보안", "엔터프라이즈", "인프라"]
category: "advanced"
order: 28
lastUpdated: "2026-08-21"
---

<div class="note-star">
★ <strong>[공]</strong> 이 기능은 <a href="https://code.claude.com/docs/en/self-hosted-environments.md">code.claude.com 공식 문서</a>에 게시된 내용 기반입니다.
<br />★ 2026-08-07 (W32) 신규 출시된 기능이에요.
<br />★ 이 기능은 주로 <strong>기업·조직 환경</strong>을 위한 고급 기능이에요. 개인 사용자에겐 일반 클라우드 환경으로 충분해요.
</div>

## 셀프 호스팅 환경이 뭔가요?

Claude Code 클라우드 세션은 기본적으로 **Anthropic의 서버**에서 실행돼요. 셀프 호스팅 환경을 사용하면 이 세션을 **내 회사의 서버(인프라)** 위에서 실행할 수 있어요.

> 🍱 **비유로 설명하면**: 음식 배달 앱을 쓸 때, 기본은 배달 앱 회사의 배달 기사가 가져다줘요. 셀프 호스팅은 **우리 회사 직원이 직접 배달**하는 것과 같아요. 음식 레시피(AI 기능)는 똑같지만, 배달 경로와 정보가 우리 통제 하에 있어요.

---

## 왜 필요한가요?

| 이유 | 설명 |
|---|---|
| 🔒 **데이터 보안** | 코드, 대화 내용이 외부 서버를 거치지 않음 |
| 📋 **규정 준수** | 금융·의료·공공기관의 데이터 로컬 처리 요건 충족 |
| 🔧 **내부 도구 접근** | 사내 네트워크 내 DB·API·서비스에 직접 접근 가능 |
| 💰 **비용 통제** | 인프라 비용을 직접 관리 |

---

## 어떻게 구성하나요?

### 1단계: 기본 개념 이해

셀프 호스팅 환경은 크게 3가지 구성 요소로 이뤄져요:

```
[Claude Code 클라이언트]  ←→  [셀프 호스팅 러너]  ←→  [Anthropic API]
     (사용자 기기)              (내 서버에서 실행)        (AI 모델)
```

| 구성 요소 | 역할 | 위치 |
|---|---|---|
| **Claude Code 클라이언트** | 사용자가 직접 사용하는 앱/CLI | 사용자 기기 |
| **셀프 호스팅 러너** | 세션 실행 엔진 | 내 서버 (Docker/K8s) |
| **Anthropic API** | AI 모델 호출 | Anthropic 서버 |

> ⚠️ **주의**: 코드와 파일은 내 서버에서 처리되지만, AI 모델 추론(생각하는 과정)은 여전히 Anthropic API를 통해요. 완전한 온프레미스(오프라인)가 아니에요.

---

### 2단계: 빠른 시작

```bash
# 1. Claude Code CLI 설치 (이미 설치했다면 스킵)
curl -fsSL https://claude.ai/install.sh | bash

# 2. 셀프 호스팅 환경 생성
claude env create my-company-env \
  --type self-hosted \
  --runner-image "내 Docker 이미지 URL"

# 3. 러너 시작 (내 서버에서 실행)
claude runner start --env my-company-env

# 4. 세션을 셀프 호스팅 환경에서 실행
claude --env my-company-env "프로젝트 분석해줘"
```

공식 빠른 시작 가이드: [셀프 호스팅 환경 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart.md) [공]

---

### 3단계: 프로덕션 배포

실제 운영 환경에서는 보안 강화와 고가용성이 필요해요:

| 항목 | 권장 설정 |
|---|---|
| 컨테이너 오케스트레이션 | Kubernetes 또는 Docker Compose |
| 네트워크 제어 | 아웃바운드 트래픽 allowlist |
| 자격 증명 관리 | AWS Secrets Manager, GCP Secret Manager 등 |
| 모니터링 | Prometheus 메트릭 수집 |
| 확장성 | 온디맨드 러너 스폰 (요청 시 러너 자동 생성) |

---

## 주요 공식 문서 목록

셀프 호스팅 환경은 여러 세부 가이드로 나뉘어 있어요:

| 문서 | 내용 |
|---|---|
| [개요](https://code.claude.com/docs/en/self-hosted-environments.md) | 아키텍처와 기본 개념 |
| [빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart.md) | 첫 셀프 호스팅 환경 구성 |
| [프로덕션 배포](https://code.claude.com/docs/en/self-hosted-environments-deploy.md) | 운영 환경 배포 (K8s/Compose) |
| [커스터마이즈](https://code.claude.com/docs/en/self-hosted-environments-configuration.md) | 래퍼 스크립트, 라이프사이클 훅 |
| [테스트](https://code.claude.com/docs/en/self-hosted-environments-testing.md) | CI에서 엔드투엔드 검증 |
| [레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference.md) | CLI 플래그, 환경변수, 메트릭 |
| [신원 검증](https://code.claude.com/docs/en/self-hosted-environments-identity.md) | JWT 기반 세션 신원 확인 |

---

## 일반 클라우드 환경과 비교

| 구분 | 일반 클라우드 환경 | 셀프 호스팅 환경 |
|---|---|---|
| 설정 난이도 | 쉬움 (즉시 사용) | 어려움 (인프라 설정 필요) |
| 데이터 위치 | Anthropic 서버 | 내 서버 |
| 내부 네트워크 접근 | 제한적 | 자유로움 |
| 유지보수 | Anthropic이 담당 | 직접 담당 |
| 적합한 대상 | 개인, 스타트업 | 기업, 보안 민감 환경 |

---

## 이런 분들께 권장해요

- ✅ 코드나 데이터가 외부 서버에 전송되면 안 되는 규정이 있는 기업
- ✅ 사내 네트워크의 DB나 내부 API를 Claude Code에서 직접 사용해야 하는 팀
- ✅ 클라우드 비용을 직접 관리하고 싶은 조직
- ❌ 개인 개발자나 소규모 팀 → 일반 클라우드 환경으로 충분해요

---

## 관련 링크

- [클라우드 환경 설정](https://code.claude.com/docs/en/cloud-environments.md) [공]
- [W30·W32 주간 업데이트](../../next/whats-new-w30-w32.md)
- [샌드박스 환경 선택 가이드](./sandbox-environments.md)
