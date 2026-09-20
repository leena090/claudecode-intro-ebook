---
title: "[공] 셀프 호스티드 환경 — 내 서버에서 Claude 클라우드 세션 실행"
description: "Self-hosted environments: 회사 내부 네트워크에서 Claude Code 클라우드 세션을 실행하는 퍼블릭 베타 기능"
tags: ["자동생성", "self-hosted", "enterprise", "클라우드세션", "인프라"]
category: "advanced"
order: 28
lastUpdated: "2026-09-20"
---

<div class="note-star">
★ <strong>공식 출처</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments.md">code.claude.com/docs/en/self-hosted-environments.md</a><br />
★ 2026년 8월 7일 퍼블릭 베타 출시 (공식 발표 기준)
</div>

## 셀프 호스티드 환경이란?

**셀프 호스티드 환경**(Self-hosted environments)은 Claude Code의 **클라우드 세션을 Anthropic 서버가 아닌 내 회사 서버에서 실행**하는 기능이에요.

> 🏢 **비유로 설명하면**: 보통 클라우드 세션은 임대 사무실(Anthropic 서버)에서 작업하는 것과 같아요. 셀프 호스티드 환경은 회사 자체 사무실에서 작업하는 거예요. 외부에 나가지 않아도 되고, 내부 시스템에 바로 접근할 수 있죠.

---

## 왜 필요한가요?

| 상황 | 일반 클라우드 세션 | 셀프 호스티드 환경 |
|------|-----------------|-----------------|
| 내부 DB 접근 | ❌ 방화벽 통과 어려움 | ✅ 직접 접근 가능 |
| 보안 정책 | ❌ 외부 서버에 코드 전송 | ✅ 코드가 회사 네트워크 내에 머뭄 |
| 내부 API 사용 | ❌ VPN 필요 | ✅ 내부 네트워크에서 직접 호출 |
| 컴플라이언스 | ❌ 데이터 외부 전송 우려 | ✅ 완전 내부 처리 |

---

## 어떻게 작동하나요?

```
[사용자 브라우저/앱]
    ↓ (세션 요청)
[Anthropic 오케스트레이터]
    ↓ (세션 라우팅)
[내 서버의 러너(Runner)]  ← 여기가 "셀프 호스티드"
    ↓ (코드 실행)
[내부 데이터베이스·API·서비스]
```

핵심은 **코드 실행 러너가 내 서버**에 있다는 점이에요. Anthropic의 오케스트레이터가 라우팅만 담당하고, 실제 작업은 내 인프라에서 일어납니다.

---

## 설정 방법 (퀵스타트)

공식 문서에 따르면:

```bash
# 1. Claude Code 설치 및 셀프 호스티드 환경 설정
claude setup self-hosted-env --name "my-company-env"

# 2. 러너(Runner) 시작
claude runner start --env my-company-env

# 3. 세션 라우팅 확인
claude session --cloud --env my-company-env
```

자세한 설정은 [공식 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart.md)를 참고하세요.

---

## 관련 문서 목록

셀프 호스티드 환경은 여러 세부 문서로 구성돼요:

| 문서 | 내용 |
|------|------|
| [퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart.md) | 첫 번째 환경 설정 5단계 |
| [프로덕션 배포](https://code.claude.com/docs/en/self-hosted-environments-deploy.md) | Kubernetes·Docker 설정, 보안 강화 |
| [커스터마이징](https://code.claude.com/docs/en/self-hosted-environments-configuration.md) | 세션별 자격증명, 라이프사이클 훅 |
| [엔드투엔드 테스트](https://code.claude.com/docs/en/self-hosted-environments-testing.md) | CI에서 러너 이미지 검증 |
| [레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference.md) | CLI 플래그, 환경변수, Prometheus 메트릭 |
| [세션 신원 확인](https://code.claude.com/docs/en/self-hosted-environments-identity.md) | JWT 토큰으로 세션 인증 |

---

## 이런 분께 추천해요

- 🔒 **보안이 엄격한 기업**: 금융, 의료, 정부 등 코드가 외부 서버로 나가면 안 되는 환경
- 🏗️ **내부 서비스 접근 필요**: 사내 데이터베이스나 레거시 API에 Claude가 직접 접근해야 하는 경우
- 📋 **컴플라이언스 요구**: GDPR, HIPAA 등 데이터 처리 위치 규정이 있는 경우

> ⚠️ **주의**: 셀프 호스티드 환경 운영을 위해서는 Kubernetes 또는 Docker 등 컨테이너 인프라 지식이 필요합니다 (추정: 엔터프라이즈급 배포 대상).

---

## 퍼블릭 베타 현황

2026년 8월 7일 기준 퍼블릭 베타예요. 정식 출시 전이므로 API가 변경될 수 있습니다. 최신 상태는 [공식 문서](https://code.claude.com/docs/en/self-hosted-environments.md)를 확인하세요.
