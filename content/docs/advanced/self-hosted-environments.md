---
title: "[공] 자체 서버에서 Claude Code 돌리기 — Self-hosted Environments 퍼블릭 베타"
description: "회사 내부 네트워크·인프라에서 Claude Code 세션을 직접 실행하는 자체 호스팅 환경 설정 방법"
tags: ["자동생성", "self-hosted", "자체호스팅", "보안", "엔터프라이즈", "퍼블릭 베타"]
category: "advanced"
order: 55
lastUpdated: "2026-10-07"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 2026년 8월 7일, Claude Code 세션을 Anthropic 클라우드가 아닌 <strong>우리 회사 서버</strong>에서 직접 실행하는 기능이 퍼블릭 베타로 공개됐어요. 보안이 중요한 기업 환경을 위한 기능이에요. <code>[공]</code><br />
★ <strong>출처</strong>: claude.com/claude-code 공식 마케팅 페이지 (2026년 8월 공지), 세부 구성은 공식 문서 기준 추정 포함.
</div>

## "코드가 Anthropic 서버를 거치는 게 걱정돼요"

Claude Code를 업무에 쓰고 싶은데 이런 걱정이 드는 분들이 있어요:

- "우리 회사 소스코드가 외부 서버로 나가는 게 내부 보안 정책상 안 돼요"
- "의료·금융 데이터를 다루는데 클라우드 처리가 규정 위반일 수 있어요"
- "VPN 안쪽에 있는 내부 서비스랑 연결해서 써야 해요"

이런 상황을 위해 만들어진 것이 **Self-hosted Environments**예요.

---

## Self-hosted Environments가 뭔가요?

Anthropic 공식 발표 (2026년 8월 6일 블로그):
> "Claude Code 세션을 우리 회사 인프라 안에서, 내부 네트워크 바로 옆에, 내부 서비스와 함께 실행하세요. 퍼블릭 베타로 출시됩니다."

한 줄로: **Claude Code가 Anthropic 클라우드가 아니라 우리 회사 서버에서 실행돼요.**

🏢 비유: 기존 방식이 "외부 콜센터에 전화해서 업무 처리"라면, Self-hosted는 "사무실 안에 직원을 직접 고용해서 처리"하는 것이에요.

---

## 기존 방식 vs. Self-hosted

| 항목 | 기존 (Anthropic 클라우드) | Self-hosted |
|---|---|---|
| 실행 위치 | Anthropic 서버 | **우리 회사 서버** |
| 코드 이동 경로 | 인터넷 → Anthropic → 응답 반환 | **내부 네트워크 안에서만** |
| 내부 서비스 접근 | VPN 터널링 필요 | **직접 연결** |
| 보안 통제 | Anthropic 정책 따름 | **자체 보안 정책 적용** |
| 설정 복잡도 | 낮음 | 높음 (인프라 구성 필요) |

---

## 어떤 회사에 필요한가요?

✅ **이런 경우 Self-hosted를 고려하세요:**

- **금융·의료**: 고객 데이터나 환자 정보가 외부로 나가면 안 되는 경우
- **방산·정부**: 보안 등급이 높아 외부 클라우드 사용이 제한된 경우
- **대형 기업**: 내부 서비스(사내 Git, 사내 DB 등)와 직접 연결해야 하는 경우
- **GDPR·HIPAA 대응**: 데이터 처리 위치를 직접 통제해야 하는 경우

❌ **이런 경우는 기존 클라우드 방식이 더 편해요:**

- 개인 프로젝트나 소규모 팀
- 코드에 특별한 기밀 사항이 없는 경우
- 인프라 구성·관리가 부담스러운 경우

---

## 어떻게 구성하나요?

Self-hosted Environments는 여러 배포 옵션을 지원해요 (공식 문서 기준):

### 빠른 시작 옵션들

| 방식 | 설명 |
|---|---|
| 로컬 컨테이너 | 개발 머신에서 Docker/Podman으로 실행 |
| 사내 쿠버네티스 | 기업 K8s 클러스터에 배포 |
| AWS 자체 배포 | Bedrock이 아닌 자체 AWS 계정에 배포 |
| GCP 자체 배포 | Vertex AI가 아닌 자체 GCP에 배포 |

<div class="note-circle">○ Self-hosted Environments는 현재 퍼블릭 베타예요. 프로덕션 환경에 적용하기 전에 충분히 테스트해 보세요. 베타 기간 중 사양이 바뀔 수 있어요.</div>

---

## 기존 클라우드 옵션과 비교

Claude Code는 자체 호스팅 외에도 다양한 클라우드 배포 옵션이 있어요.

| 방식 | 위치 | 특징 |
|---|---|---|
| Anthropic 클라우드 | Anthropic 서버 | 기본, 간편 |
| Amazon Bedrock | AWS | AWS 사용자 |
| Google Vertex AI | GCP | GCP 사용자 |
| Microsoft Foundry | Azure | Azure 사용자 |
| **Self-hosted** | **우리 서버** | **최대 통제** |

---

## 공식 문서 링크

Self-hosted Environments는 설정이 복잡하기 때문에 공식 문서를 꼭 참고하세요:

- 개요: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
- 빠른 시작: [code.claude.com/docs/en/self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- 배포 가이드: [code.claude.com/docs/en/self-hosted-environments-deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- 설정 참조: [code.claude.com/docs/en/self-hosted-environments-configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration)

<div class="note-star">★ 퍼블릭 베타 기간 중 피드백은 Anthropic 공식 피드백 채널이나 Support를 통해 전달할 수 있어요. 베타 기간이 끝나면 GA(정식 출시)가 될 예정이에요 (추정).</div>
