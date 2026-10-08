---
title: "[공] Self-Hosted Environments — 내 서버에서 Claude Code 돌리기"
description: "회사 내부 네트워크에서 Claude Code 세션을 직접 운영하는 Self-Hosted Environments가 퍼블릭 베타로 출시됐어요"
tags: ["자동생성", "SelfHosted", "보안", "엔터프라이즈", "프라이빗클라우드", "퍼블릭베타"]
category: "advanced"
order: 28
lastUpdated: "2026-10-08"
---

<div class="note-star">
★ <strong>[공]</strong> Self-Hosted Environments 공개 베타: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs</a> (Aug 7, 2026 — 퍼블릭 베타)
</div>

## "Claude Code를 우리 서버에서만 쓸 수 없나요?" — 드디어 됩니다

회사 보안 정책, 내부 네트워크 데이터, HIPAA/금융 규제 등의 이유로 외부 클라우드에 코드를 올리기 꺼려졌던 분들을 위한 기능입니다.
**Self-Hosted Environments**(자체 호스팅 환경)로 Claude Code 세션을 **내 인프라, 내 네트워크 안에서** 실행할 수 있어요.

> 🍱 **비유로 설명하면**: 편의점 POS 시스템을 본사 서버에 연결하는 대신, **내 건물 지하 서버실에 직접 설치하는 것**과 같아요. 외부와 단절된 상태에서도 모든 기능이 작동해요.

---

## 왜 필요한가요?

| 상황 | Self-Hosted가 해결하는 것 |
|---|---|
| 🏦 금융·의료 데이터 규제 | 코드·데이터가 외부 서버로 나가지 않음 |
| 🔒 사내망 전용 서비스 | 인터넷 없이도 내부 API에 Claude Code 연결 |
| 📋 감사/컴플라이언스 | 자체 로깅·모니터링으로 완전한 가시성 |
| 🏢 내부 개발 도구 연동 | 사내 CI/CD, DB, 서비스에 직접 접근 |

---

## 핵심 특징

### 1️⃣ 내부 네트워크에서 실행

Claude Code 세션이 회사 방화벽 **안쪽**에서 돌아가기 때문에, 내부 서비스에 아무 문제없이 접근해요.

```
[회사 내부망]
  ├── Claude Code 세션 (self-hosted)
  ├── 내부 데이터베이스
  ├── 사내 API 서버
  └── 개발 도구 (Jenkins, GitLab, etc.)
```

### 2️⃣ 데이터가 밖으로 나가지 않음

코드와 데이터가 내 인프라를 벗어나지 않아요.

```
이전 (클라우드): 내 코드 → Anthropic 서버 → 결과 반환
이후 (self-hosted): 내 코드 → 내 서버 → 결과 반환
```

### 3️⃣ 확장 가능한 구조

팀 규모나 워크로드에 맞게 인프라를 직접 조정할 수 있어요.

---

## 구성 방법 (개요)

<div class="note-star">
⚠️ <strong>퍼블릭 베타</strong>: 아직 베타 단계라 세부 절차가 변경될 수 있어요. 최신 공식 문서를 참고하세요.
</div>

공식 문서에는 6개 섹션으로 나뉜 상세 가이드가 있어요:

| 문서 | 내용 |
|---|---|
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [Deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 방법 |
| [Configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 설정 옵션 |
| [Testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | API 레퍼런스 |
| [Identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증·ID 관리 |

```bash
# 기본 접근 방식 (추정 — 공식 발표 기준)
# 1. 환경 설치
claude-code-server install --type self-hosted

# 2. 내부 엔드포인트 설정
export CLAUDE_CODE_SERVER="https://your-internal-server.company.com"

# 3. 일반적인 Claude Code 사용
claude "내부 DB 연결해서 성능 분석해줘"
```

---

## 클라우드 환경 vs Self-Hosted 비교

| 항목 | 클라우드 환경 | Self-Hosted |
|---|---|---|
| **설정 난이도** | ⭐ 쉬움 | ⭐⭐⭐ 복잡 |
| **보안·컴플라이언스** | 보통 | 최고 수준 |
| **내부 서비스 접근** | 제한적 | 제한 없음 |
| **인프라 관리** | Anthropic이 관리 | 직접 관리 |
| **대상** | 개인·소규모 팀 | 대기업·금융·의료 |

---

## 이 기능이 필요한지 체크리스트

아래 항목 중 하나라도 해당되면 Self-Hosted를 검토해 보세요:

- [ ] 코드나 데이터가 외부 서버에 올라가면 안 된다
- [ ] 회사 내부망 전용 API/DB에 Claude Code를 연결해야 한다
- [ ] HIPAA, SOC 2, ISO 27001 등 규정 준수가 필요하다
- [ ] 감사 로그를 직접 관리해야 한다
- [ ] 인터넷 없이도 동작해야 한다

체크 없음 → 일반 클라우드 환경으로 충분해요 👍

---

## 관련 문서

- [Cloud Environments](https://code.claude.com/docs/en/cloud-environments) — 클라우드 실행 환경
- [Sandbox Environments](./sandbox-environments.md) — 샌드박스 보안 실행
- [Security Guidance](https://code.claude.com/docs/en/security-guidance) — 보안 가이드
- [HIPAA Setup](https://code.claude.com/docs/en/hipaa-setup) — HIPAA 준수 설정

<div class="note-star">
📝 <strong>공식 발표 기준</strong>: Self-Hosted Environments는 2026년 8월 7일 퍼블릭 베타로 출시됐습니다. 구체적인 가격·시스템 요구사항은 <a href="https://code.claude.com/docs/en/self-hosted-environments">공식 문서</a>에서 확인하세요.
</div>
