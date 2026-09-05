---
title: "[공] 자가 호스팅 환경 — 우리 서버에서 Claude Code 돌리기"
description: "보안 규정이 엄격한 기업이나 팀이 Claude Code를 자체 서버(on-premise)나 클라우드 VPC에서 운용하는 Self-Hosted Environments 기능 소개"
tags: ["자동생성", "자가호스팅", "self-hosted", "엔터프라이즈", "보안", "클라우드환경"]
category: "advanced"
order: 42
lastUpdated: "2026-09-05"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — 2026-09-05 llms.txt에서 신규 확인된 문서 클러스터(7개 페이지). 세부 사항은 공식 문서에서 확인 바랍니다.<br />
★ <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## "우리 데이터가 Anthropic 서버에 안 가면 안 되나요?"

병원이나 금융회사, 국방 관련 기관처럼 **데이터가 외부 서버에 가면 절대 안 되는** 곳들이 있어요. 이런 곳들을 위해 Claude Code가 2026년 하반기에 **Self-Hosted Environments(자가 호스팅 환경)** 기능을 출시했어요.

> 🍱 **비유**: 일반 Claude Code는 "식당 배달 서비스"예요 — 내가 재료(질문)를 보내면 Anthropic 주방(서버)에서 만들어서 돌려줘요. Self-Hosted는 "우리 주방에 셰프를 데려다 놓는 것"이에요 — 재료가 우리 건물 밖으로 한 발짝도 안 나가요.

---

## 자가 호스팅 환경이란? `[공]`

Self-Hosted Environments는 Claude Code의 실행 환경을 **여러분의 자체 인프라(서버, VPC, 클라우드)** 위에 올리는 기능이에요.

### 일반 Cloud vs Self-Hosted 비교

| 항목 | 일반 Cloud 환경 | Self-Hosted 환경 |
|------|----------------|-----------------|
| 코드 처리 위치 | Anthropic 클라우드 | **우리 서버/VPC** |
| 데이터 이동 | Anthropic으로 전송 | **내부망 내에서만** |
| 설정 복잡도 | 낮음 (바로 사용) | 높음 (초기 셋업 필요) |
| 비용 모델 | 구독/API 과금 | 별도 엔터프라이즈 계약 |
| 규정 준수 | 표준 | **HIPAA, SOC2, 자체 정책** |
| 대상 | 일반 사용자·팀 | 보안 규정이 엄격한 기업 |

---

## 어떤 회사가 써야 하나요?

✅ **이런 곳에서 필요해요:**
- 병원·의료기관 (환자 데이터 보호 — HIPAA 등)
- 금융회사·은행 (고객 금융 정보 보안)
- 정부·국방 기관 (기밀 데이터)
- 법률회사 (고객 기밀 유지 의무)
- 자체 IT 보안 정책이 강한 대기업

❌ **이런 경우는 일반 Claude Code로 충분해요:**
- 개인 개발자
- 스타트업·중소기업
- 오픈소스 프로젝트
- 공개 데이터 다루는 팀

---

## 공식 문서 구조 (7개 페이지)

Self-Hosted Environments는 공식 문서가 7개 페이지로 구성돼 있어요:

| 문서 | 내용 |
|------|------|
| **overview** | 자가 호스팅 환경 개요 |
| **quickstart** | 빠른 시작 가이드 |
| **deploy** | 배포 방법 |
| **configuration** | 상세 설정 |
| **testing** | 테스트 방법 |
| **reference** | 레퍼런스 문서 |
| **identity** | 인증·신원 관리 |

```bash
# 공식 문서 링크
# https://code.claude.com/docs/en/self-hosted-environments
# https://code.claude.com/docs/en/self-hosted-environments-quickstart
# https://code.claude.com/docs/en/self-hosted-environments-deploy
# https://code.claude.com/docs/en/self-hosted-environments-configuration
# https://code.claude.com/docs/en/self-hosted-environments-testing
# https://code.claude.com/docs/en/self-hosted-environments-reference
# https://code.claude.com/docs/en/self-hosted-environments-identity
```

---

## 관련 기능: 클라우드 환경 (Cloud Environments) `[공]`

Self-Hosted와 함께 **Cloud Environments** 문서도 신규 추가됐어요.

> 🍱 **비유**: Self-Hosted는 "우리 집 냉장고에 식재료 보관", Cloud Environments는 "보안 창고에 별도 칸을 빌려 잠금장치로 보관"이에요. 둘 다 데이터 통제권이 높지만 방식이 달라요.

| 항목 | Self-Hosted | Cloud Environments |
|------|-------------|-------------------|
| 위치 | 완전 자체 서버 | 클라우드 VPC/격리 환경 |
| 관리 주체 | 자체 IT팀 | 클라우드 제공자 + 우리 팀 |
| 진입 장벽 | 높음 | 중간 |

---

## 이걸 입문자가 직접 설정해야 하나요?

**아니요.** 이 기능은 기업 IT팀 또는 DevOps 담당자가 설정하는 거예요. 입문자가 직접 만질 필요는 없어요. 하지만 알아두면 좋은 이유:

1. **회사에서 Claude Code 도입 제안할 때** — "우리도 보안 걱정 없이 쓸 수 있어요"라고 설명 가능
2. **관리자(Admin)로부터 초대받을 때** — "왜 다른 계정으로 접속하라고 하지?" 이해 가능
3. **엔터프라이즈 플랜 검토할 때** — 어떤 기능이 포함되는지 파악 가능

> 💡 **참고**: Self-Hosted Environments는 Enterprise 플랜에서만 제공될 가능성이 높아요. 세부 조건은 영업팀 문의 필요. `(추정)`

---

## 관리자라면 꼭 읽어야 할 공식 문서 순서

```
1. self-hosted-environments     ← 전체 개요 파악
2. self-hosted-environments-quickstart  ← 빠른 시작
3. self-hosted-environments-configuration  ← 상세 설정
4. self-hosted-environments-identity   ← 인증 체계 이해
5. self-hosted-environments-deploy     ← 실제 배포
6. self-hosted-environments-testing    ← 검증
7. self-hosted-environments-reference  ← 참고 문서
```

---

<div class="note-star">
📌 <strong>출처</strong><br />
[공] code.claude.com/docs/en/self-hosted-environments (및 관련 7개 문서, 2026-09-05 llms.txt 신규 확인)
</div>
