---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 세션 직접 실행하기 (공개 베타)"
description: "회사 네트워크 안쪽, 내부 서비스 옆에서 Claude Code 세션을 직접 실행할 수 있는 '자체 호스팅 환경'이 공개 베타로 출시됐어요"
tags: ["자동생성", "self-hosted", "자체호스팅", "환경", "보안", "enterprise", "내부망", "공개베타"]
category: "advanced"
order: 28
lastUpdated: "2026-09-29"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 claude.com/claude-code 마케팅 페이지 발표 (Aug 7, 2026) 및 공식 문서를 기반으로 작성됐습니다.
<br />★ <strong>핵심</strong>: Claude Code 세션을 Anthropic 클라우드가 아닌 <strong>내 인프라에서 직접 실행</strong>할 수 있어요. 2026년 8월 7일 공개 베타 시작.
<br />★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 자체 호스팅 환경이 뭔가요?

**자체 호스팅 환경(Self-hosted Environments)**은 Claude Code 세션을 **내 회사 서버나 클라우드 인프라에서 실행**할 수 있게 해주는 기능이에요.

> 🍱 **비유로 설명하면**: 지금까지 클로드가 Anthropic 건물(서버)에서 일했다면, 이제는 **우리 회사 사무실(서버)로 클로드를 데려와서** 일하게 할 수 있어요. 외부와 단절된 내부망 안에서도 클로드가 실행될 수 있게 됩니다.

---

## 왜 필요한가요?

### 🔒 보안·컴플라이언스 요구사항

| 상황 | 자체 호스팅 필요한 이유 |
|---|---|
| 금융·의료·정부 기관 | 데이터가 외부 서버에 나가면 안 되는 규정 |
| 내부 API/서비스 연결 | 인터넷에 노출되지 않은 내부 서비스에 접근 |
| 네트워크 정책 | 방화벽 안에서만 실행 가능한 환경 |
| 데이터 주권 | 코드·데이터가 특정 지역 서버에만 있어야 하는 경우 |

---

## 주요 특징

### 1. 🏠 내부 네트워크에서 실행

Claude Code 세션이 **내 네트워크 안에서, 내부 서비스 바로 옆에서** 실행돼요.

```
기존: Claude Code ← Anthropic 클라우드 → 내 코드 (왕복 지연)
자체 호스팅: Claude Code ← 내 서버 → 내 서비스 (초저지연, 직접 접근)
```

### 2. 🔌 내부 서비스 직접 연결

데이터베이스, 내부 API, 모니터링 시스템 등 외부에서 접근할 수 없는 서비스에 Claude가 직접 연결할 수 있어요.

### 3. 🔐 보안 제어

- 데이터가 내 인프라를 벗어나지 않음
- 내부 보안 정책 그대로 적용
- 접근 권한을 내가 완전히 제어

---

## 공식 문서 구성 (2026-09-29 기준)

자체 호스팅 환경 관련 공식 문서가 **6개 섹션**으로 구성됐어요:

| 문서 | 내용 |
|---|---|
| [개요](https://code.claude.com/docs/en/self-hosted-environments) | 개념 및 아키텍처 |
| [빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 처음 설정하기 |
| [배포](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 실제 서버에 배포하기 |
| [설정](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 세부 설정 옵션 |
| [테스트](https://code.claude.com/docs/en/self-hosted-environments-testing) | 환경 검증하기 |
| [인증·보안](https://code.claude.com/docs/en/self-hosted-environments-identity) | 사용자 인증 설정 |

---

## 클라우드 환경 vs 자체 호스팅 환경

| 항목 | 클라우드 환경 | 자체 호스팅 환경 |
|---|---|---|
| 실행 위치 | Anthropic 관리 서버 | 내 인프라 |
| 설정 난이도 | 쉬움 (자동) | 복잡 (직접 설정) |
| 내부망 접근 | 불가 | ✅ 가능 |
| 데이터 제어 | Anthropic 정책 적용 | 완전한 자체 제어 |
| 비용 | 내장 | 인프라 운영비 추가 |
| 대상 | 개인·소규모 팀 | 보안 요구사항 높은 기업 |

---

## 누구에게 필요한가요?

✅ **자체 호스팅이 필요한 경우:**
- 금융, 의료, 법률, 정부 기관
- 내부망 전용 서비스를 개발하는 팀
- 엄격한 데이터 보안 규정이 있는 기업
- 코드가 외부로 나가면 안 되는 기밀 프로젝트

❌ **필요하지 않은 경우:**
- 개인 개발자
- 소규모 팀의 일반적인 코딩 작업
- 클라우드 서비스로 충분한 스타트업

---

## 현재 상태

> **공개 베타** (2026년 8월 7일 ~ )

아직 정식 출시 전 베타 단계예요. 기업 고객이 먼저 사용해볼 수 있고, 피드백을 거쳐 정식 출시 예정입니다.

- 관심 있는 기업: [공식 문서](https://code.claude.com/docs/en/self-hosted-environments)에서 신청 방법 확인
- Enterprise 플랜 필요 여부: 공식 발표 기준 확인 필요 (추정)
