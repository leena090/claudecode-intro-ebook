---
title: "[공] 셀프호스팅 환경 — 우리 회사 서버에서 Claude Code 실행하기 (공개 베타)"
description: "외부 클라우드 대신 회사 내부 서버에서 Claude Code 세션을 돌릴 수 있어요. 2026년 8월 7일 공개 베타 시작"
tags: ["자동생성", "self-hosted", "셀프호스팅", "enterprise", "인프라", "내부망", "공개베타", "2026년8월"]
category: "advanced"
order: 24
lastUpdated: "2026-09-28"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 기준 (Blog Aug 7, 2026 — 공개 베타 시작)<br />
★ 현재 <strong>공개 베타(public beta)</strong> 상태<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 셀프호스팅 환경이 뭔가요?

기존 Claude Code는 **Anthropic이 운영하는 클라우드 환경**에서 세션이 실행됐어요.

**셀프호스팅 환경(Self-hosted Environments)**은 Claude Code 세션을 **여러분 회사의 서버**에서 직접 돌리는 기능이에요.

> 🍱 **비유로 설명하면**: 지금까지는 "외부 공유 주방(클라우드)"에서 요리했다면, 셀프호스팅 환경은 **"우리 회사 전용 주방"** 에서 요리하는 거예요. 식재료(코드)가 밖으로 나가지 않고, 우리 냉장고(내부 시스템)도 바로 꺼내 쓸 수 있어요.

---

## 왜 필요한가요?

### 1. 데이터가 회사 밖으로 나가지 않아요

금융, 의료, 법무, 공공기관처럼 **규정상 데이터를 외부로 보낼 수 없는 환경**에서 사용할 수 있어요.

### 2. 내부 시스템에 바로 접근

회사 내부망에 있는 데이터베이스, API, 서비스에 Claude Code가 **직접 연결**할 수 있어요.

기존 클라우드 환경에서는 내부망 서버에 접근하려면 복잡한 네트워크 설정이 필요했지만, 셀프호스팅에서는 Claude Code가 **내부 서버 바로 옆에서** 실행되니까 자연스럽게 접근돼요.

### 3. 인프라를 직접 제어

서버 위치, 리소스 크기, 접근 권한 등을 **IT 팀이 직접 관리**할 수 있어요.

---

## 어떤 환경을 지원하나요?

공식 문서 기준으로 셀프호스팅 환경 가이드는 다음을 포함해요:

| 단계 | 문서 |
|---|---|
| 기본 개요 | Self-hosted environments |
| 빠른 시작 | Quickstart |
| 프로덕션 배포 | Deploy to production |
| 세션 커스터마이징 | Customize sessions |
| 엔드-투-엔드 테스트 | Testing |
| 레퍼런스 | Reference |
| 세션 신원 확인 | Verify session identity |

---

## 어떻게 시작하나요?

> ⚠️ **현재 공개 베타 상태예요.** 실제 운영 환경 적용 전에 충분한 테스트를 권장합니다.

기본 흐름은:

1. **인프라 준비**: 회사 서버 또는 클라우드(AWS, GCP, Azure) 위에 Claude Code 실행 환경 구성
2. **퀵스타트 따라하기**: 공식 퀵스타트 문서로 최소 구성 완성
3. **내부 서비스 연결**: MCP 서버 등으로 내부 도구 연결
4. **권한·보안 설정**: 세션 신원 확인, 접근 권한 설정
5. **테스트 후 프로덕션**: 엔드-투-엔드 테스트 완료 후 실제 팀 배포

---

## 어떤 규모의 팀에게 맞나요?

| 팀 규모 | 적합도 |
|---|---|
| 개인 / 소규모 팀 | ⚠️ 설정 복잡도 대비 효용 낮을 수 있음 |
| 중견 기업 IT팀 | ✅ 내부망 연결, 데이터 규정 충족 가능 |
| 금융·의료·공공기관 | ✅ 규정 준수 환경 구성 핵심 옵션 |
| 글로벌 엔터프라이즈 | ✅ 지역별 데이터 주권 요구 충족 |

---

## 기존 클라우드 환경과 비교

| 항목 | 기존 클라우드 환경 | 셀프호스팅 환경 |
|---|---|---|
| **데이터 위치** | Anthropic 클라우드 | 우리 회사 서버 |
| **내부망 접근** | 별도 설정 필요 | 바로 가능 |
| **설정 난이도** | 낮음 | 높음 (IT 팀 필요) |
| **관리 책임** | Anthropic | 우리 팀 |
| **규정 준수** | 일반적 | 업종별 규정 대응 가능 |

---

## 정리

> 💡 **결론**: 셀프호스팅 환경은 데이터 규정이 엄격하거나, 내부 시스템과 깊이 연동해야 하는 팀을 위한 고급 기능이에요. 공개 베타 단계이니 테스트 환경에서 먼저 시도해보세요. 일반 사용자라면 기존 클라우드 환경이 훨씬 간편해요.

관련 공식 문서:
- [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
- [code.claude.com/docs/en/self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
