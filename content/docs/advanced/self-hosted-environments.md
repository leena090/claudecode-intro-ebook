---
title: "[공] 자체 호스팅 환경: 회사 서버에 Claude Code 설치하기"
description: "2026년 8월부터 퍼블릭 베타로 제공되는 Self-hosted environments — 내 회사 네트워크 안에 Claude Code 세션을 직접 실행"
tags: ["자동생성", "엔터프라이즈", "self-hosted", "보안", "인프라", "2026-Q3"]
category: "advanced"
order: 10
lastUpdated: "2026-10-10"
---

## "우리 회사 서버에 Claude Code를 설치할 수 있나요?"

네, 이제 가능합니다! **Self-hosted environments(자체 호스팅 환경)**은 2026년 8월 7일 퍼블릭 베타로 공개된 기능으로, Claude Code 세션을 **여러분의 인프라 안에서** 직접 실행할 수 있습니다.

마치 회사 사무실 안에 AI 직원을 직접 고용해 두는 것처럼 — 외부에 데이터를 내보내지 않고, 내부 시스템과 직접 연결돼 작업합니다.

> **[공] 공식 발표 기준** — anthropic.com/news/self-hosted-environments (2026-08-07), code.claude.com/docs/en/self-hosted-environments

---

## 왜 자체 호스팅이 필요할까요?

| 상황 | 클라우드 환경 | 자체 호스팅 환경 |
|---|---|---|
| 소스코드 위치 | Anthropic 클라우드 | **내 회사 서버** |
| 내부 DB 접근 | VPN 필요 또는 불가 | **직접 연결 가능** |
| 보안 규정 | 일반 SaaS 수준 | **기업 보안 정책 적용** |
| 데이터 이동 | 외부 전송 | **내부 네트워크에서만** |

금융, 의료, 정부 기관처럼 **데이터를 외부로 내보낼 수 없는 환경**에서 특히 유용합니다.

---

## 어떻게 작동하나요?

```
[기존 방식]
사용자 → claude.ai/code (Anthropic 클라우드) → 모델 API → 결과

[자체 호스팅]
사용자 → 내 회사 서버(Claude Code Runtime) → 모델 API → 결과
          ↑ 회사 네트워크 안에서만 동작
```

Claude Code의 **세션 런타임**을 여러분의 인프라에 직접 배포하는 방식입니다. AI 모델 자체는 Anthropic API를 통해 호출하지만, 세션 관리·파일 접근·명령 실행은 모두 내부 서버에서 일어납니다.

---

## 무엇을 할 수 있나요?

자체 호스팅 환경에서는:

- 🏠 **내부 네트워크 서비스와 직접 연결** (사내 DB, 내부 API)
- 🔒 **기업 보안 정책 완전 적용** (방화벽, IAM, 감사 로그)
- 📁 **코드가 외부로 나가지 않음**
- ⚙️ **세션 동작 방식 커스터마이즈** (설정 파일로 세밀하게 조정)
- 🔍 **신원 검증** (세션 아이덴티티 인증 기능 포함)

---

## 설치 방법 개요 (공식 문서 기준)

공식 문서에는 총 7개 페이지 분량의 상세 가이드가 있습니다:

```
1. 빠른 시작        → /docs/en/self-hosted-environments-quickstart
2. 프로덕션 배포    → /docs/en/self-hosted-environments-deploy
3. 세션 커스터마이즈 → /docs/en/self-hosted-environments-configuration
4. 종단간 테스트    → /docs/en/self-hosted-environments-testing
5. 레퍼런스         → /docs/en/self-hosted-environments-reference
6. 신원 검증        → /docs/en/self-hosted-environments-identity
```

> ⚠️ 자체 호스팅은 **Team·Enterprise 플랜** 전용 기능입니다. 개인 Pro 플랜에서는 사용할 수 없어요.

---

## 지금 당장 사용하지 않아도 알아야 할 이유

개인 개발자라면 당장 필요하지 않을 수 있지만, 이런 상황이라면 참고하세요:

- 🏢 **회사에서 Claude Code 도입을 검토 중**이라면 이 기능 덕분에 보안 심사를 통과할 수 있어요
- 👩‍💼 **IT 관리자나 CTO에게 제안**할 때 "데이터가 외부로 나가지 않는다"는 포인트가 강력합니다
- 📋 **HIPAA, 금융 규제** 등 컴플라이언스가 중요한 업종에서도 사용 가능

---

## Cloud environments도 있어요

자체 호스팅 외에 **Cloud environments(클라우드 환경)** 문서도 새로 생겼습니다 (`/docs/en/cloud-environments`). 이쪽은 Anthropic 관리형 클라우드 환경을 좀 더 세밀하게 설정하는 가이드입니다.

---

> 📌 **출처**: [공] anthropic.com/news/self-hosted-environments (2026-08-07)  
> 상세 문서: code.claude.com/docs/en/self-hosted-environments
