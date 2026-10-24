---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 Claude Code 세션 실행하기"
description: "Claude Code 세션을 자체 인프라, 회사 내부 네트워크 안에서 실행하는 셀프 호스팅 환경 기능 소개 (퍼블릭 베타)"
tags: ["자동생성", "self-hosted", "셀프호스팅", "인프라", "보안", "enterprise", "퍼블릭베타"]
category: "advanced"
order: 27
lastUpdated: "2026-10-24"
---

<div class="note-star">
★ <strong>[공] 출처</strong> — Claude Code 공식 문서 <code>self-hosted-environments</code> + 마케팅 페이지 (2026-08-06 퍼블릭 베타 공개)
<br />★ 현재 <strong>퍼블릭 베타(Public Beta)</strong> 상태입니다. 세부 설정이 추후 변경될 수 있어요.
</div>

## 셀프 호스팅 환경이 뭔가요?

기본적으로 Claude Code는 Anthropic의 클라우드 서버에서 세션이 실행돼요. 그런데 회사 보안 정책이나 컴플라이언스(규정 준수) 요구로 인해 **코드가 외부 클라우드에 나가면 안 되는 경우**가 있어요.

**셀프 호스팅 환경(Self-hosted Environments)**은 Claude Code 세션을 **자기 회사 인프라(서버, AWS, GCP 등) 안**에서 실행할 수 있게 해줘요.

> 🏠 **비유로 설명하면**: 식당 음식을 배달시켜 먹는 대신, 재료를 사다가 **집에서 직접 요리**하는 거예요. 외부에 의존하지 않고, 내 주방(인프라)에서 내가 원하는 방식으로 만들 수 있어요.

---

## 어떤 조직에 필요한가요?

| 상황 | 셀프 호스팅 필요 여부 |
|---|---|
| 공개 오픈소스 프로젝트 작업 | 필요 없음 |
| 일반 스타트업 비즈니스 코드 | 필요 없음 |
| 금융·의료·국방 관련 코드 | **필요할 수 있음** |
| HIPAA, SOC2, ISO27001 등 컴플라이언스 요구 | **필요할 수 있음** |
| 인터넷 차단된 에어갭(Air-gap) 네트워크 | **필요함** |
| 데이터가 절대 외부로 나가면 안 되는 경우 | **필요함** |

---

## 핵심 특징

### 1. 코드가 내 네트워크 안에 머물러요

```
[기존 방식]
개발자 → Claude Code → Anthropic 클라우드 ← 코드/데이터

[셀프 호스팅]
개발자 → Claude Code → 내 회사 인프라 (AWS/GCP/온프레미스)
                           ↑ 코드/데이터 외부 유출 없음
```

### 2. 내부 서비스와 직접 연결

Claude Code 세션이 **회사 내부 서비스 옆**에서 실행되기 때문에:
- 내부 데이터베이스에 직접 접근 가능
- 방화벽 안의 내부 API와 통신 가능
- VPN 없이도 내부 리소스 활용 가능

### 3. 인프라 선택의 자유

공식 문서에 따르면 다음 환경을 지원해요:
- AWS (Amazon Web Services)
- GCP (Google Cloud Platform)
- 온프레미스(On-premises) — 자체 데이터센터

---

## 퍼블릭 베타 — 지금 어떤 상태인가요?

2026년 8월 6일 **퍼블릭 베타**로 공개됐어요. 퍼블릭 베타란:

> 🧪 **비유로 설명하면**: 새 식당이 정식 오픈 전에 "소프트 오픈"으로 먼저 손님을 받는 거예요. 음식은 나오지만, 메뉴가 바뀌거나 서비스 방식이 달라질 수 있어요.

- ✅ 실제 사용 가능
- ⚠️ 기능·설정 방식이 변경될 수 있음
- ⚠️ 일부 엣지 케이스(edge case = 특수 상황)에서 버그 발생 가능

---

## 기존 클라우드 환경과의 차이

| 항목 | 기본 클라우드 환경 | 셀프 호스팅 환경 |
|---|---|---|
| 실행 위치 | Anthropic 클라우드 | 내 인프라 |
| 설정 난이도 | 없음 (바로 사용) | 별도 설정 필요 |
| 내부 서비스 접근 | VPN 등 필요 | 직접 가능 |
| 데이터 외부 전송 | 있음 | 없음 |
| 대상 | 일반 사용자 | 기업·보안 요구 조직 |
| 비용 | 일반 요금 | 추가 인프라 비용 |

---

## 어떻게 시작하나요?

셀프 호스팅 환경은 **Team 이상 플랜** 또는 **Enterprise 플랜** 고객에게 제공돼요.

공식 문서에서 단계별 가이드를 제공합니다:

1. **빠른 시작** → `self-hosted-environments-quickstart`
2. **배포** → `self-hosted-environments-deploy`
3. **설정** → `self-hosted-environments-configuration`
4. **테스트** → `self-hosted-environments-testing`
5. **참조 문서** → `self-hosted-environments-reference`
6. **ID 관리** → `self-hosted-environments-identity`

> 💡 처음이라면 **빠른 시작 문서**부터 읽고, 인프라 담당자와 함께 진행하는 걸 권장해요.

---

## 보안 요구가 없는 개인 개발자라면?

굳이 셀프 호스팅 환경을 설정할 필요 없어요.

기본 **클라우드 환경(Cloud Environments)** 이나 **샌드박스 환경(Sandbox Environments)** 이 훨씬 빠르고 간편합니다.

| 나는... | 추천 환경 |
|---|---|
| 개인 프로젝트, 오픈소스 | 기본 클라우드 환경 |
| 격리된 안전한 실행 필요 | 샌드박스 환경 |
| 기업 보안·컴플라이언스 필요 | **셀프 호스팅 환경** |

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ 관련 문서: <a href="/docs/advanced/sandbox-environments">샌드박스 환경</a>
</div>
