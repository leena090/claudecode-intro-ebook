---
title: "[공] 자체 호스팅 환경(Self-hosted Environments) — 회사 서버에서 Claude Code 실행하기"
description: "클라우드 대신 우리 회사 서버에서 Claude Code를 실행하는 '자체 호스팅 환경' 개념과 기본 구조를 소개해요"
tags: ["자동생성", "자체호스팅", "self-hosted", "엔터프라이즈", "보안", "고급", "환경설정"]
category: "advanced"
order: 27
lastUpdated: "2026-09-10"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> (2026-09 신규 등재)
<br />★ <strong>대상</strong>: 기업 IT 담당자·팀장급 이상, 또는 "우리 회사 데이터가 외부로 나가면 안 된다"는 분
<br />★ 이 기능은 <strong>엔터프라이즈·팀 플랜</strong> 대상이에요. 개인 Pro/Max 사용자는 일반 클라우드 환경으로 충분해요.
</div>

## 자체 호스팅 환경이 뭔가요?

> 🍱 **비유로 설명하면**: 음식 배달 앱에는 두 가지 방식이 있어요. 첫 번째는 **배달의민족·쿠팡이츠 같은 공유 플랫폼**을 쓰는 것, 두 번째는 대형 프랜차이즈처럼 **직접 자사 배달 시스템을 구축**하는 것이에요.
>
> Claude Code의 일반 클라우드 환경이 '공유 플랫폼'이라면, **자체 호스팅 환경**은 '우리 회사만의 전용 배달 시스템'을 회사 서버에 직접 구축하는 것이에요.

Anthropic 공식 문서에 따르면(공식 발표 기준):
- Claude Code 에이전트를 **회사 내부 서버(on-premise) 또는 전용 클라우드**에서 실행
- 코드·데이터가 외부로 나가지 않도록 **완전한 통제권** 확보
- 대규모 팀에서 **중앙 관리·감사 로그·비용 분리** 등 엔터프라이즈 기능 활용

---

## 왜 필요한가요?

| 상황 | 일반 클라우드 | 자체 호스팅 |
|---|---|---|
| 💊 의료·금융·법률 코드 | 외부 전송됨 | 서버 내부에서만 처리 |
| 🏛️ 정부·공공기관 | 컴플라이언스 문제 가능 | 망 분리 환경 구축 가능 |
| 🏢 대기업 내부 시스템 | 보안 정책 충돌 가능 | 내부 네트워크에서 실행 |
| 💰 비용 예측 | 사용량 기반 변동 | 인프라 고정비로 예산 관리 |

> 💡 **입문자에게**: 개인이나 소규모 팀은 이 기능이 필요 없어요. **수십 명 이상의 팀에서 민감한 코드를 다루는** 기업 환경에서 고려할 기능이에요.

---

## 공식 문서 구성 (2026-09 신규 7개 페이지)

Anthropic이 한 번에 7개 관련 페이지를 등재했어요:

| 문서 | 내용 |
|---|---|
| [self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments) | 개요·개념 소개 |
| [quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 방법 |
| [configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 상세 설정 |
| [testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트·검증 |
| [reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | 레퍼런스 문서 |
| [identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증·신원 관리 |

> ⚠️ **추정 포함**: 각 페이지의 세부 내용은 공식 문서에서 직접 확인하세요. 이 글은 제목과 구조를 기반으로 작성했어요.

---

## 자체 호스팅 vs 클라우드 환경 비교

| | 일반 클라우드 환경 | 자체 호스팅 환경 |
|---|---|---|
| **설치 난이도** | ⭐ 쉬움 | ⭐⭐⭐⭐ 어려움 |
| **데이터 위치** | Anthropic 서버 | 우리 서버 |
| **비용** | 사용량 기반 | 서버 운영비 + 라이선스 |
| **업데이트** | 자동 | 직접 관리 |
| **보안 통제** | Anthropic 정책 따름 | 직접 정책 설정 |
| **적합 규모** | 개인~중소팀 | 대기업·기관 |

---

## 이런 분이 읽어야 해요

### ✅ 이 문서가 필요한 경우
- IT 인프라 팀이 있는 **중대형 기업**의 기술 의사결정자
- **의료·금융·법률·공공** 등 데이터 규제가 엄격한 분야
- "Claude Code 도입하고 싶은데 보안 부서가 승인 안 해줘요" 하시는 분

### ❌ 지금 당장 필요 없는 경우
- 개인 개발자 또는 소규모 팀 (클라우드 환경으로 충분)
- 이미 Anthropic의 클라우드 보안이 충분하다고 판단한 경우

---

## 관련 기능: 클라우드 환경(Cloud Environments)

같은 시기에 [`cloud-environments`](https://code.claude.com/docs/en/cloud-environments)도 새로 문서에 등재됐어요.

> 🍱 **비유**: 자체 호스팅이 '자가용'이라면, 클라우드 환경은 '렌터카'예요. 직접 소유하진 않지만 **전용으로 빌려 쓰는** 방식이에요.

Anthropic이 관리하는 격리된 클라우드 인프라를 기업 전용으로 제공하는 개념으로 추정돼요 (상세 내용은 공식 문서에서 확인 권장).

---

## 다음 단계

실제 도입을 검토 중이라면:
1. [공식 개요 문서](https://code.claude.com/docs/en/self-hosted-environments) 먼저 읽기
2. Anthropic 영업팀에 **엔터프라이즈 플랜** 문의
3. 내부 IT 보안팀과 [보안 가이드](https://code.claude.com/docs/en/security-guidance) 함께 검토
