---
title: "[공] Self-hosted Environments — 회사 내부 인프라에서 Claude Code 실행하기"
description: "클라우드 세션을 회사 자체 서버에서 실행하는 기능. 내부망 서비스 접근, 데이터 보안, 컴플라이언스 요건을 충족하면서 Claude Code를 쓸 수 있습니다"
tags: ["자동생성", "셀프호스티드", "엔터프라이즈", "보안", "내부망", "고급"]
category: "advanced"
order: 28
lastUpdated: "2026-09-19"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>공개 베타</strong> — 2026년 8월 7일 (W32) 출시
</div>

## Self-hosted Environments가 뭔가요?

**Self-hosted Environments(셀프호스티드 환경)** 는 Claude Code의 클라우드 세션을 **Anthropic 서버가 아닌 여러분 회사의 서버에서 실행**하는 기능이에요.

> 🍱 **비유로 설명하면**: 택시(Anthropic 클라우드)를 타는 대신, **내 차(회사 서버)**로 직접 운전하는 거예요. 경로(내부망)를 내가 완전히 통제할 수 있어요.

---

## 왜 필요한가요?

### 클라우드 세션의 한계

기본 Claude Code는 Anthropic 클라우드에서 실행돼요. 이런 경우에 문제가 생겨요:

- 🏦 **금융·의료**: 외부로 나가면 안 되는 민감한 코드·데이터
- 🏢 **내부망 전용 서비스**: 외부에서 접근 불가능한 내부 DB, API
- 🔒 **컴플라이언스**: SOC2, HIPAA 등 데이터 외부 전송 금지 정책
- 🌐 **네트워크 제한**: VPN이나 방화벽 안에서만 동작하는 시스템

### Self-hosted로 해결

| 문제 | 해결 방법 |
|---|---|
| 민감한 코드가 외부로 못 나감 | 내부 서버에서 실행, 외부 전송 없음 |
| 내부 DB에 Claude가 접근 불가 | 내부망 옆에서 실행, 직접 접근 |
| 데이터 외부 전송 규정 위반 | 데이터가 내부에서만 처리됨 |

---

## 어떻게 작동하나요?

```
일반 클라우드 세션:
사용자 → Anthropic 클라우드 → 코드 실행 → 결과 반환

Self-hosted:
사용자 → 회사 내부 서버 → 코드 실행 → 결과 반환
                  ↕
           회사 내부 서비스들
         (내부 DB, 내부 API 등)
```

Claude의 모델 추론(AI 두뇌 역할)은 여전히 Anthropic API를 통해 이루어지지만, **실행 환경(코드가 실제로 실행되는 곳)**은 여러분의 서버예요.

---

## 구성 요소

공식 문서 기준, 셀프호스티드 환경은 다음으로 구성돼요:

| 구성 요소 | 설명 |
|---|---|
| **환경 런타임** | 실제 코드 실행 컨테이너 |
| **ID 연동** | 회사 계정 인증 시스템 연결 |
| **네트워크 정책** | 접근 가능한 서비스 제어 |
| **설정 관리** | 환경별 설정 중앙 관리 |

---

## 시작하는 방법

> ⚠️ **중요**: 셀프호스티드 환경은 **기술적 설정이 필요한 엔터프라이즈/팀 기능**이에요. 개인 사용자보다는 IT팀이 있는 조직에 적합해요.

공식 문서에 따른 설정 흐름:

```
1. 환경 설정 (서버 준비)
2. 빠른 시작 가이드 실행
3. 배포 구성
4. 설정 커스터마이징
5. 테스트 및 검증
6. 신원 통합 (회사 SSO 등)
```

각 단계별 공식 문서:
- 빠른 시작: `self-hosted-environments-quickstart`
- 배포: `self-hosted-environments-deploy`
- 설정: `self-hosted-environments-configuration`
- 테스트: `self-hosted-environments-testing`
- 신원 통합: `self-hosted-environments-identity`

👉 [공식 Self-hosted Environments 문서](https://code.claude.com/docs/en/self-hosted-environments)

---

## 일반 사용자는 지금 당장 어떻게 해야 하나요?

**개인 사용자라면**: 셀프호스티드 환경이 필요 없어요. 기존 Claude Code 그대로 쓰시면 돼요.

**팀/조직에서 쓴다면**: IT 담당자 또는 DevOps 팀에 다음 공식 문서 링크를 공유하세요:
- [공식 Self-hosted Environments 문서](https://code.claude.com/docs/en/self-hosted-environments)

---

## Cloud Environments vs. Self-hosted

| | **Cloud Environments** | **Self-hosted Environments** |
|---|---|---|
| **실행 위치** | Anthropic 클라우드 | 내 회사 서버 |
| **설정 복잡도** | 없음 (즉시 사용) | IT팀 설정 필요 |
| **내부망 접근** | 불가 | 가능 |
| **데이터 통제** | Anthropic 정책 | 내 조직 정책 |
| **적합한 경우** | 개인·일반 팀 | 금융·의료·정부·보안 요건 강한 기업 |
