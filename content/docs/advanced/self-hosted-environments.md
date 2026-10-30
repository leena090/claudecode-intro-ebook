---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 Claude Code 실행하기"
description: "Claude Code 세션을 회사 내부 인프라에서 직접 실행하는 Self-hosted Environments 공개 베타 소개"
tags: ["자동생성", "셀프호스팅", "self-hosted", "enterprise", "인프라", "보안", "cloud-environments"]
category: "advanced"
order: 27
lastUpdated: "2026-10-30"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026년 8월 (공개 베타) — 마케팅 페이지 확인 기준<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 셀프 호스팅이 왜 필요한가요?

기본적으로 Claude Code 세션은 Anthropic 클라우드에서 실행됩니다. 하지만 많은 기업에서 이런 제약이 있어요:

> 🏭 **비유로 설명하면**: 남의 집 주방(Anthropic 클라우드)에서 요리하는 게 기본인데, 이제는 **내 공장 구내식당(회사 서버)에서 직접 요리**할 수 있게 됐어요. 재료가 밖으로 나가지 않으니 안심이죠.

| 상황 | 문제 |
|------|------|
| 코드가 외부로 나가면 안 됨 | 클라우드 실행 부담 |
| 내부 시스템과 연결 필요 | VPN 밖에서 접근 불가 |
| 보안 감사 요건 충족 | 외부 서비스 사용 제한 |
| 데이터 잔류 요건 (GDPR 등) | 특정 리전에만 데이터 보관 |

---

## 무엇이 달라지나요?

### 기존 방식 (클라우드 실행)
```
사용자 → [인터넷] → Anthropic 클라우드 → Claude Code 실행
```

### 셀프 호스팅 방식
```
사용자 → [내부 네트워크] → 회사 서버 → Claude Code 실행
                              ↕
                         내부 DB, API, 서비스들
```

---

## 어디서 쓸 수 있나요?

| 플랜 | 지원 |
|------|------|
| Pro / Max | ❌ |
| **Team** | ✅ (공개 베타) |
| **Enterprise** | ✅ (공개 베타) |

> 📌 현재 **공개 베타(Public Beta)** 단계입니다. 정식 출시 전 일부 기능은 변경될 수 있어요.

---

## 공식 문서 구조

셀프 호스팅 기능은 **7개의 서브페이지**로 상세하게 문서화돼 있습니다:

| 페이지 | 내용 |
|--------|------|
| `self-hosted-environments` | 개요 및 개념 |
| `self-hosted-environments-quickstart` | 빠른 시작 가이드 |
| `self-hosted-environments-deploy` | 배포 방법 |
| `self-hosted-environments-configuration` | 설정 파일 상세 |
| `self-hosted-environments-testing` | 테스트 방법 |
| `self-hosted-environments-reference` | API 레퍼런스 |
| `self-hosted-environments-identity` | ID·인증 설정 |

---

## Cloud Environments vs Self-hosted Environments

Claude Code에는 이제 두 가지 관리형 실행 환경이 있습니다:

| 항목 | Cloud Environments | Self-hosted Environments |
|------|-------------------|--------------------------|
| 실행 위치 | Anthropic 클라우드 | 회사 인프라 |
| 설정 복잡도 | 낮음 | 높음 |
| 내부 네트워크 접근 | ❌ | ✅ |
| 비용 | 클라우드 비용 포함 | 인프라 비용 별도 |
| 데이터 잔류 | Anthropic 리전 | 내 리전 |

---

## 어떻게 시작하나요?

1. **Team·Enterprise 관리자**로 로그인
2. Admin 설정에서 **Self-hosted Environments** 활성화
3. 공식 [quickstart 가이드](https://code.claude.com/docs/en/self-hosted-environments-quickstart) 따라 서버 구성
4. 팀원들이 기존과 동일하게 Claude Code 사용

> ⚙️ 정확한 서버 요구사항과 배포 방법은 공식 문서를 참고하세요. 셀프 호스팅은 인프라 설정 경험이 필요합니다.

---

## 관련 기능

- [Cloud Environments](https://code.claude.com/docs/en/cloud-environments) — Anthropic 관리 클라우드 실행
- [Sandbox Environments](/docs/advanced/sandbox-environments) — 격리된 테스트 환경
- [Zero Data Retention](https://code.claude.com/docs/en/zero-data-retention) — 데이터 미보관 옵션
