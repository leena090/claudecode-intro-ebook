---
title: "[공] 셀프 호스티드 환경 — 내 서버에서 Claude Code 실행하기"
description: "클라우드가 아닌 우리 회사 서버에서 Claude Code를 안전하게 실행하는 Self-hosted Environments 기능 안내"
tags: ["자동생성", "self-hosted", "셀프호스티드", "보안", "엔터프라이즈", "클라우드환경"]
category: "advanced"
order: 24
lastUpdated: "2026-09-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> (2026년 신규 등재)
</div>

## 이 기능이 왜 생겼을까요?

Claude Code는 보통 Anthropic의 클라우드 서비스를 통해 실행돼요. 그런데 어떤 기업들은 법규나 보안 정책 때문에 **코드가 외부 서버로 나가면 안 되는** 경우가 있어요.

예를 들어:
- 🏦 금융권 — 고객 코드와 데이터를 외부로 보낼 수 없음
- 🏥 의료 분야 — 개인정보보호법(HIPAA 등) 적용
- 🏢 대기업 — 사내 정책상 외부 API 호출 제한

바로 이런 곳을 위해 **Self-hosted Environments(셀프 호스티드 환경)** 기능이 등장했어요.

> 🏠 **비유**: 음식 배달 앱 쓰는 대신 직접 주방을 차려서 요리하는 것과 비슷해요. 약간 더 손이 가지만, 재료(코드)가 어디 나가지 않고 우리 집 주방(우리 서버)에서만 요리됩니다.

---

## 셀프 호스티드 환경이란?

| 구분 | 일반 Claude Code | **셀프 호스티드 환경** |
|------|----------------|----------------------|
| 실행 위치 | Anthropic 클라우드 | **우리 회사 서버** |
| 코드 전송 | Anthropic 서버로 전송 | **내부 네트워크에서만** |
| 보안 제어 | Anthropic 정책 | **우리가 직접 관리** |
| 설정 복잡도 | 간단 | 더 복잡 (IT팀 필요) |
| 대상 | 개인·소규모 팀 | **엔터프라이즈·보안 요구 기업** |

---

## 어떻게 구성하나요? (공식 문서 기준)

공식 문서에는 총 6가지 세부 가이드가 있어요:

### 문서 구조

| 문서 | 내용 |
|------|------|
| `self-hosted-environments` | 개요 및 개념 설명 |
| `self-hosted-environments-quickstart` | 빠른 시작 (처음 설정) |
| `self-hosted-environments-deploy` | 배포 방법 |
| `self-hosted-environments-configuration` | 상세 설정 옵션 |
| `self-hosted-environments-testing` | 테스트 방법 |
| `self-hosted-environments-reference` | API·명령어 레퍼런스 |
| `self-hosted-environments-identity` | 사용자 인증·신원 관리 |

> ⚠️ **추정**: 이 가이드들은 2026년 공식 문서에 신규 등재된 내용입니다. 세부 설정 방법은 항상 최신 공식 문서에서 확인하세요.

### 기본 흐름 (추정 기반)

```
1. 회사 서버에 Claude Code 실행 환경 구성
        ↓
2. Anthropic과 인증 연결 (API 키 또는 SSO)
        ↓
3. 코드 실행이 내부 네트워크에서만 이루어지도록 설정
        ↓
4. 사용자 신원 관리 (identity) 연결
        ↓
5. 테스트 & 배포
```

---

## 관련 기능: Cloud Environments vs Self-hosted Environments

공식 문서에 **Cloud Environments**와 **Self-hosted Environments** 두 가지가 나란히 있어요.

| | Cloud Environments | Self-hosted Environments |
|---|---|---|
| 호스팅 | Anthropic 관리 클라우드 | **우리 서버** |
| 설정 난이도 | 낮음 | 높음 (IT 전문가 필요) |
| 네트워크 격리 | 부분적 | **완전 격리 가능** |
| 비용 | 사용량 기반 | 인프라 비용 별도 |
| 적합 대상 | 일반 팀, 중소기업 | 보안 규정 있는 대기업 |

---

## 이런 분께 필요해요

✅ 다음 중 하나라도 해당된다면 셀프 호스티드 환경을 고려해보세요:
- 사내 보안팀에서 "외부 API 호출 금지" 정책을 시행 중
- 개인정보보호법이나 금융 규제로 데이터 국외 반출 제한
- 코드베이스에 고객 정보나 영업 비밀이 포함됨
- IT 인프라를 자체 관리하는 엔터프라이즈 환경

❌ 다음에 해당한다면 일반 Claude Code로도 충분해요:
- 개인 프로젝트나 오픈소스 작업
- 소규모 스타트업 (별도 보안 규제 없는 경우)
- 빠른 실험과 프로토타입 제작

---

## 시작 전 준비사항

> ⚠️ **주의**: 셀프 호스티드 환경 설정은 IT 전문가나 인프라 담당자가 진행하는 작업이에요. 개인 사용자가 혼자 설정하기는 어렵습니다.

시작 전에 필요한 것들 (공식 발표 기준):
1. **서버/클라우드 인프라** — AWS, GCP, Azure 등 또는 온프레미스
2. **Anthropic Enterprise 계약** — 이 기능은 엔터프라이즈 플랜 대상
3. **IT/인프라 팀 협력** — 네트워크 설정, 인증 연동 등
4. **공식 문서 정독** — [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

---

*출처: [공] code.claude.com/docs/en/self-hosted-environments* (2026년 llms.txt 신규 등재 확인 — 세부 내용은 추정 포함)*
