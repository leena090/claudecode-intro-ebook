---
title: "[공] 자체 호스팅 환경 — 회사 서버에 Claude Code 직접 설치하기"
description: "기업이 자체 서버(온프레미스 또는 사설 클라우드)에 Claude Code 실행 환경을 구축하는 Self-Hosted Environments 기능 소개"
tags: ["자동생성", "자체호스팅", "엔터프라이즈", "보안", "온프레미스", "self-hosted"]
category: "advanced"
order: 27
lastUpdated: "2026-08-07"
---

<div class="note-star">
★ <strong>[공]</strong> 2026년 8월 공식 문서에 신규 등재된 기능이에요: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>엔터프라이즈 대상 기능</strong> — 개인 사용자보다는 회사 IT팀 또는 개발팀 관리자에게 적합해요<br />
★ 공식 문서 신규 등재 기반. 세부 구성 방법은 공식 문서 확인 권장.
</div>

## 자체 호스팅 환경(Self-Hosted Environments)이 뭔가요?

기존 Claude Code는 Anthropic 클라우드 서비스에 연결해서 사용해요. 하지만 일부 기업은 **회사 데이터를 외부 서버에 보내지 않고** 싶어하거나, **내부 보안 정책** 때문에 외부 네트워크 접근이 제한될 수 있어요.

**Self-Hosted Environments**는 기업이 **자체 서버(온프레미스 또는 사설 클라우드)에 Claude Code 실행 환경을 직접 구축**할 수 있게 해주는 기능입니다.

> 🏢 **비유로 설명하면**: 은행이나 병원처럼 "외부 카페 Wi-Fi 절대 사용 금지" 규정이 있는 곳에서도, 회사 내부 전용 인터넷망 위에 Claude Code를 올려 쓸 수 있게 해주는 거예요. 같은 카페(Claude Code)인데, 인터넷은 회사 전용망만 쓰는 것처럼요.

---

## 왜 필요할까요?

| 상황 | 기존 방식 | 자체 호스팅 |
|---|---|---|
| 코드 보안 | Anthropic 서버 경유 | 자사 서버만 사용 |
| 네트워크 | 공용 인터넷 필요 | 사내 네트워크만으로 동작 |
| 규정 준수 | HIPAA·GDPR 등 제한 있음 | 자체 환경에서 규정 충족 가능 |
| 커스터마이징 | 제한적 | 환경 설정 직접 제어 |

### 이런 기업에게 특히 유용해요

- 🏦 **금융·은행** — 고객 데이터 보호 규정 (금융보안원 기준 등)
- 🏥 **의료·제약** — 환자 정보 보호 (HIPAA 등)
- 🏛️ **공공기관·정부** — 국가 기밀 정보 취급 환경
- 🔒 **방산·보안 기업** — 외부 네트워크 차단 요구사항

---

## 자체 호스팅 문서 구성

공식 문서는 7개 페이지로 구성돼 있어요:

| 문서 | 내용 | 링크 (추정) |
|---|---|---|
| **개요** | 자체 호스팅 환경이란? | `self-hosted-environments` |
| **빠른 시작** | 처음 설치하는 분을 위한 단계별 가이드 | `self-hosted-environments-quickstart` |
| **설정** | 세부 구성 옵션 | `self-hosted-environments-configuration` |
| **배포** | 프로덕션 환경 배포 방법 | `self-hosted-environments-deploy` |
| **아이덴티티** | 사용자 인증·권한 관리 | `self-hosted-environments-identity` |
| **레퍼런스** | 전체 설정 옵션 참조 | `self-hosted-environments-reference` |
| **테스트** | 환경 검증 및 테스트 | `self-hosted-environments-testing` |

---

## 기존 Cloud Environments와 차이

Claude Code의 실행 환경 옵션:

```
┌─────────────────────────────────────────────┐
│         Claude Code 실행 환경                │
├───────────────────┬─────────────────────────┤
│ 클라우드 환경      │  자체 호스팅 환경         │
│ (Cloud Environments) │ (Self-Hosted Environments) │
├───────────────────┼─────────────────────────┤
│ Anthropic 관리    │  기업 자체 관리           │
│ 빠른 설정         │  설치 작업 필요           │
│ 개인/팀 사용자    │  엔터프라이즈 대상        │
│ code.claude.com   │  자체 서버               │
└───────────────────┴─────────────────────────┘
```

---

## 관련 기능과의 연계

### LLM Gateway와의 조합

자체 호스팅 환경과 함께 [LLM Gateway](https://code.claude.com/docs/en/gateways) 기능을 쓰면, **내부 보안 정책을 유지하면서도 다양한 모델 공급자를 선택**할 수 있어요.

### GitHub Actions 연동

자체 호스팅 환경은 GitHub Actions와도 연동할 수 있어요. 최근 `github-actions-cloud-providers` 문서도 신규 추가됐는데, 클라우드 프로바이더별 CI/CD 연동 방법을 다루고 있어요.

---

## 시작하려면?

1. **엔터프라이즈 플랜 확인** — 자체 호스팅은 엔터프라이즈 또는 팀 관리자 권한이 필요해요 (추정)
2. **공식 문서 확인** — [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
3. **영업팀 문의** — 대규모 도입 시 Anthropic 영업팀 (sales@anthropic.com)에 문의

> ⚠️ **추정 포함**: 세부 요구사항 및 지원 범위는 공식 문서와 Anthropic에 직접 확인하세요. 이 문서는 공식 문서 신규 등재를 기반으로 작성됐어요.
