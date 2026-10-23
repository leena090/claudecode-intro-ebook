---
title: "[공] Self-hosted environments — 회사 서버에서 Claude Code 실행하기"
description: "자체 인프라(회사 내부망·클라우드)에서 Claude Code 세션을 직접 운영하는 Self-hosted environments 공개 베타를 소개해요."
tags: ["자동생성", "self-hosted", "셀프호스팅", "enterprise", "인프라", "보안", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-10-23"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — code.claude.com/docs/en/self-hosted-environments (2026-08-06 공개 베타 출시).
★ <strong>대상</strong>: 보안 요구사항이 높은 기업·팀 관리자
★ <strong>참고</strong>: 세부 설정은 추정을 최소화하고 공식 문서 링크를 안내했어요.
</div>

## Self-hosted environments란?

**Claude Code 세션을 Anthropic 서버가 아닌, 여러분의 인프라에서 직접 실행**하는 기능이에요.

> 🏢 **비유로 설명하면**: 지금까지는 카페 와이파이(Anthropic 서버)를 빌려 쓰는 것이었다면, Self-hosted environments는 **우리 회사 건물 안에 직접 와이파이 공유기를 설치**하는 거예요. 데이터가 외부로 나가지 않고, 내부망에 있는 시스템에 바로 접근할 수 있어요.

---

## 왜 필요한가요?

### 기존 방식의 한계

- 민감한 소스코드가 Anthropic 서버를 거쳐야 할 수 있어요
- 회사 내부 데이터베이스, API에 직접 접근하기 어려울 수 있어요
- 금융·의료·정부 등 규제 산업은 데이터 위치 규정이 있어요

### Self-hosted로 해결되는 것

| 문제 | 해결 |
|------|------|
| 데이터 외부 전송 걱정 | 코드·데이터가 내부망을 벗어나지 않아요 |
| 내부 서비스 접근 | Claude Code 세션이 내부망에 있어서 직접 접근 |
| 규정 준수 | 데이터가 어디 있는지 직접 통제 |

---

## 어떤 환경에서 쓸 수 있나요?

공식 문서에 따르면 다음 환경을 지원해요 (공식 발표 기준):

- **자체 클라우드 인프라** (AWS, GCP, Azure 등)
- **회사 내부 서버**
- **개발 컨테이너** (devcontainer)

> ⚙️ **주의**: Self-hosted environments는 기술적 설정이 필요한 **고급 기능**이에요. 일반 개인 사용자보다는 팀/기업 환경 관리자에게 적합해요.

---

## 어떻게 시작하나요?

### 공식 문서 순서 (요약)

공식 문서는 단계별로 나뉘어 있어요:

1. **[개요](https://code.claude.com/docs/en/self-hosted-environments)** — 전체 아키텍처 이해
2. **[빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)** — 가장 빠른 테스트 방법
3. **[배포](https://code.claude.com/docs/en/self-hosted-environments-deploy)** — 프로덕션 배포
4. **[설정](https://code.claude.com/docs/en/self-hosted-environments-configuration)** — 세부 설정
5. **[인증 연동](https://code.claude.com/docs/en/self-hosted-environments-identity)** — 사내 인증 시스템 연결
6. **[테스트](https://code.claude.com/docs/en/self-hosted-environments-testing)** — 검증
7. **[레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference)** — 설정 항목 전체 목록

> 📌 **권장**: 먼저 빠른 시작 문서를 읽고, 팀 환경에 맞는 배포 방법을 선택하세요.

---

## Cloud environments와의 차이

| | **Cloud environments** | **Self-hosted environments** |
|--|------------------------|------------------------------|
| 서버 위치 | Anthropic 관리 클라우드 | 내 인프라 |
| 설정 난이도 | 쉬움 | 복잡 |
| 데이터 위치 | Anthropic 서버 | 내가 선택한 위치 |
| 내부망 접근 | 제한적 | 직접 접근 가능 |
| 공개 베타 출시 | 기존 | 2026년 8월 6일 |

> [공식] [Cloud environments vs Self-hosted](https://code.claude.com/docs/en/cloud-environments)

---

## 현재 상태 (공식 발표 기준)

- **공개 베타** (2026년 8월 6일 출시)
- Team·Enterprise 플랜에서 사용 가능 (공식 발표 기준)

---

## 관련 공식 문서

- [공] [Self-hosted environments 전체 문서](https://code.claude.com/docs/en/self-hosted-environments)
- [공] [Cloud environments](https://code.claude.com/docs/en/cloud-environments)
- [공] [Sandboxing 설명](https://code.claude.com/docs/en/sandboxing)
- [공] [보안 가이드](https://code.claude.com/docs/en/security-guidance)
