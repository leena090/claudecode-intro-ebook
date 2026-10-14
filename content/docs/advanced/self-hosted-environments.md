---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "Claude Code 클라우드 세션을 회사 내부 인프라에서 직접 실행하는 자체 호스팅 환경(Self-hosted Environments)이 퍼블릭 베타로 출시됐어요"
tags: ["자동생성", "self-hosted", "자체호스팅", "엔터프라이즈", "클라우드세션", "인프라"]
category: "advanced"
order: 28
lastUpdated: "2026-10-14"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> What's new W32 (Aug 3–7, 2026): 자체 호스팅 환경 출시<br />
★ <strong>[공]</strong> 마케팅 페이지 확인: "퍼블릭 베타" 상태 (2026-10-14 기준)
</div>

## 자체 호스팅 환경이란?

> 🏠 **비유로 설명하면**: 클라우드 세션은 원래 Anthropic의 서버에서 돌아갔는데, 이제는 **우리 회사 서버**에서도 돌릴 수 있게 됐어요. 집(사내 인프라)에 방(실행 환경)을 마련해서 외부에 의존하지 않고 직접 작업을 처리하는 거예요.

공식 문서 기준: **"내가 제어하는 인프라에서 Claude Code 클라우드 세션을 실행. 자체 호스팅 환경을 설정하고, 러너(runner)를 배포하고, 세션을 자체 컴퓨팅에 라우팅합니다."**

---

## 왜 필요한가요?

| 상황 | 자체 호스팅의 장점 |
|---|---|
| 🔒 데이터가 회사 밖으로 못 나가야 할 때 | 모든 세션이 내부 서버에서만 실행 |
| 🏥 HIPAA·금융·정부 규제 환경 | 규정 준수 가능 |
| 🔗 내부 서비스 직접 연결 필요 | 사내 DB·API에 네트워크 연결 |
| 💰 클라우드 비용 최적화 | 기존 인프라 활용 가능 |

---

## 구성 요소

자체 호스팅 환경은 3가지로 구성돼요:

### 1. 자체 호스팅 환경 (Self-hosted Environment)
어떤 인프라를 쓸지 설정해요 (네트워크 접근, 환경변수, 설정 스크립트 등).

### 2. 러너 (Runner)
실제로 Claude Code 세션을 실행하는 프로세스예요. 내 서버에 배포해요.

### 3. 라우팅 (Routing)
새 세션이 생기면 자체 호스팅 러너로 연결해요.

---

## 빠른 시작 (공식 문서 기준)

```bash
# 1. Claude Code 설치
npm install -g @anthropic-ai/claude-code

# 2. 자체 호스팅 환경 생성 (Claude Code에서)
# /create-environment 또는 관리자 설정 통해 생성

# 3. 러너 시작
# docker run anthropic/claude-runner ...
```

> ⚠️ 실제 배포 절차는 [공식 문서](https://code.claude.com/docs/en/self-hosted-environments-quickstart)를 참고하세요. 위 내용은 간략화된 예시입니다.

---

## 관련 문서 모음

공식 문서가 여러 페이지로 구성돼 있어요:

| 문서 | 내용 |
|---|---|
| [self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments) | 개요 |
| [self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 |
| [self-hosted-environments-deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 프로덕션 배포 (Kubernetes, Docker) |
| [self-hosted-environments-configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 세션 커스터마이징 |
| [self-hosted-environments-testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [self-hosted-environments-reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그·환경변수 전체 참조 |
| [self-hosted-environments-identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 세션 JWT 인증 |

---

## Who's it for?

자체 호스팅 환경은 **엔터프라이즈 개발팀**을 위한 기능이에요.

- 개인 사용자나 소규모 팀은 일반 클라우드 세션이 더 간편해요
- 데이터 주권, 규제 준수, 내부 서비스 연결이 필요한 조직에 적합
- Claude Code Team/Enterprise 플랜에서 사용 가능 (추정 — 공식 요금제 페이지 확인 권장)

---

## 관련 기능

- [cloud-environments](https://code.claude.com/docs/en/cloud-environments) — 일반 클라우드 환경 설정 (Anthropic 호스팅)
- [routines](https://code.claude.com/docs/en/routines) — 자동화 루틴 (자체 호스팅 환경에서도 활용 가능)
- [github-actions](https://code.claude.com/docs/en/github-actions) — CI/CD 통합
