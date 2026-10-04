---
title: "[공] 셀프 호스팅 환경 — 우리 서버에서 Claude Code 실행하기"
description: "회사 인프라에서 직접 Claude Code 클라우드 세션을 실행하는 셀프 호스팅 환경을 소개해요. 내부 네트워크 안에서, 데이터 외부 유출 없이 Claude를 쓸 수 있어요"
tags: ["자동생성", "셀프호스팅", "self-hosted", "기업", "인프라", "보안", "고급", "클라우드세션"]
category: "advanced"
order: 57
lastUpdated: "2026-10-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> What's New W32: code.claude.com/docs/en/whats-new/2026-w32 (Aug 3–7, 2026)<br />
★ <strong>[공]</strong> 마케팅 발표: "Now in public beta" (Aug 7, 2026)
</div>

## 셀프 호스팅 환경이 뭔가요?

**셀프 호스팅 환경**은 Claude Code 클라우드 세션을 **Anthropic의 서버가 아닌 우리 회사 서버에서** 실행하는 기능이에요.

> 🍱 **비유로 설명하면**: 보통은 인터넷 카페(Anthropic 서버)에서 일하는 방식이라면, 셀프 호스팅은 우리 회사 컴퓨터실에 인터넷 카페를 직접 차려서 그 안에서 일하는 방식이에요. 데이터가 회사 밖으로 나가지 않아요.

공식 소개: **"Run Claude Code cloud sessions on infrastructure you control: set up a self-hosted environment, deploy runners, and route sessions to your own compute."**

---

## 왜 필요한가요?

### 일반 클라우드 세션의 한계

| 상황 | 일반 클라우드 세션 | 셀프 호스팅 |
|---|---|---|
| 내부 데이터베이스 접근 | ❌ 어려움 | ✅ 직접 연결 |
| 내부 API 서버 접근 | ❌ VPN 설정 필요 | ✅ 직접 연결 |
| 코드 외부 유출 우려 | ⚠️ Anthropic 서버 경유 | ✅ 회사 서버 내부에서만 |
| 금융·의료 규정 준수 | ⚠️ 검토 필요 | ✅ 내부 정책 적용 가능 |

### 셀프 호스팅이 맞는 경우

- 민감한 코드나 데이터를 다루는 금융·의료·보안 업종
- 내부 마이크로서비스에 직접 접근해야 하는 작업
- 데이터 국내 보관 의무가 있는 경우
- 보안 정책상 외부 서버 접근이 제한된 경우

---

## 구조 이해하기

```
[내 컴퓨터 / Claude Code CLI]
        ↓
[셀프 호스팅 러너 (회사 서버)]  ←← 회사 내부 네트워크
        ↓                              ↓
[내부 DB]  [내부 API]  [내부 서비스들]
```

- **러너(Runner)**: 세션을 실제로 실행하는 서버. 회사 인프라에 배포해요.
- **오케스트레이터**: 어떤 러너에서 세션을 실행할지 결정해요.
- **세션**: 클로드가 실제로 일하는 공간.

---

## 시작하는 방법 (개요)

> ⚠️ **주의**: 이 기능은 팀·엔터프라이즈 환경을 위한 고급 기능이에요. IT 담당자와 함께 설정하는 것을 권장해요.

공식 빠른 시작:

```bash
# 1. Claude Code CLI 설치 (이미 됐다면 생략)
curl -fsSL https://claude.ai/install.sh | bash

# 2. 셀프 호스팅 환경 생성
claude env create my-company-env

# 3. 러너 배포 (서버에서)
# (공식 문서의 러너 설치 가이드 참조)

# 4. 세션 라우팅
claude --env my-company-env "내부 DB 스키마 분석해줘"
```

자세한 설정은 [공식 빠른 시작 문서](https://code.claude.com/docs/en/self-hosted-environments-quickstart)를 참고하세요.

---

## 여러 배포 방식

| 방식 | 적합한 경우 |
|---|---|
| **Docker Compose** | 소규모 팀, 단순 설정 |
| **Kubernetes** | 대규모 조직, 고가용성 필요 |
| **Cloud Run (GCP)** | Google Cloud 사용 중 |
| **ECS Fargate (AWS)** | AWS 사용 중 |

---

## 보안 고려사항

셀프 호스팅 환경도 보안 설정이 중요해요:

- **JWT 토큰 검증**: 세션이 우리 환경에서 왔는지 확인할 수 있어요
- **네트워크 격리**: 러너가 접근할 수 있는 네트워크 범위를 제한할 수 있어요
- **자격증명 관리**: 세션별 자격증명 주입 방식을 설정할 수 있어요

> 💡 **추정**: 구체적인 보안 설정 방법은 [공식 문서](https://code.claude.com/docs/en/self-hosted-environments-identity)에서 확인하세요.

---

## 일반 사용자에게도 필요한가요?

**아니요.** 셀프 호스팅 환경은 주로 기업 환경에서 필요해요.

- 개인 개발자, 소규모 팀 → **일반 클라우드 세션** 또는 **로컬 CLI**로 충분해요
- 사내 보안 정책이 있는 기업 → **셀프 호스팅** 고려

---

## 더 알아보기

- [공식 문서 — 셀프 호스팅 환경](https://code.claude.com/docs/en/self-hosted-environments)
- [공식 문서 — 빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [공식 문서 — 프로덕션 배포](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [공식 문서 — 클라우드 환경 설정](https://code.claude.com/docs/en/cloud-environments)
- [W32 업데이트 요약](/docs/next/whats-new-w30-w37)
