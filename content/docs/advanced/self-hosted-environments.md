---
title: "[공] 자체 호스팅 환경 — 회사 서버에서 Claude Code 돌리기"
description: "사내 보안 정책이 있어도 OK. 자체 인프라에서 Claude Code 세션을 실행하는 Self-hosted Environments를 소개합니다 (2026년 8월 공개 베타)"
tags: ["자동생성", "자체호스팅", "self-hosted", "보안", "엔터프라이즈", "공개베타", "인프라"]
category: "advanced"
order: 24
lastUpdated: "2026-10-17"
---

<div class="note-star">
★ <strong>[공]</strong> 공개 베타 출시: 2026년 8월 7일 (Blog 확인)
<br />★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ 이 글은 마케팅 페이지와 공식 문서 목록 기반으로 작성됐습니다. 세부 설정 방법은 공식 문서를 참고하세요.
</div>

## 자체 호스팅 환경이 뭔가요?

기본적으로 Claude Code는 Anthropic의 클라우드 서버를 통해 동작해요. 그런데 회사 보안 정책 때문에 외부 클라우드를 쓸 수 없는 곳도 있죠.

**자체 호스팅 환경(Self-hosted Environments)**은 회사 내부 서버에서 Claude Code 세션을 직접 실행할 수 있도록 해주는 기능이에요.

> 🏢 **비유로 설명하면**:
> 카카오톡이 본사 서버를 쓰는 것처럼, 이제 우리 회사만의 전용 서버에서 Claude Code를 운영할 수 있어요.
> 마치 사내 전용 클라우드를 만드는 것과 같아요.

---

## 왜 필요한가요?

### 이런 상황에 딱 맞아요

| 상황 | 기존 방식 문제 | 자체 호스팅 해결책 |
|---|---|---|
| 금융권·의료기관 | 외부 클라우드 데이터 전송 규제 | 사내 서버에서만 실행 |
| 보안 등급이 높은 프로젝트 | 소스코드 외부 전송 우려 | 네트워크 외부로 나가지 않음 |
| 사내 DB·API 연결 | 외부에서 접근 불가능 | 내부 서버에서 직접 연결 |
| 규정 준수(Compliance) 요구사항 | 데이터 위치 통제 불가 | 우리가 직접 인프라 관리 |

### 일반 사용자에게는 필요 없어요

> 💡 개인 사용자나 스타트업이라면 일반 Claude Code로 충분해요. 자체 호스팅 환경은 주로 **엔터프라이즈(기업)** 환경을 위한 고급 기능입니다.

---

## 핵심 특징

### 🔒 보안: 데이터가 회사 밖으로 나가지 않아요

```
일반 Claude Code:
  내 컴퓨터 → Anthropic 클라우드 → 응답 반환

자체 호스팅 환경:
  내 컴퓨터 → 우리 회사 서버(내부) → 응답 반환
                    ↕ (외부 차단)
              Claude 모델 API 호출만 허용
```

### 🏭 내부 서비스 연결

- 사내 데이터베이스에 직접 접근
- 내부 API 서버와 연동
- 사내 코드 저장소(GitLab 등) 직접 연결

### 📋 규정 준수 지원

- HIPAA (의료 정보 보호법) 관련 환경 설정 가능
- `hipaa-setup` 전용 가이드 문서 신설 (공식 확인)
- 데이터 위치 및 처리 방식 직접 통제

---

## 공식 문서 구성 (2026-08 신설)

공식 docs에 자체 호스팅 전용 섹션이 7개 페이지로 새로 만들어졌어요:

| 문서 | 내용 |
|---|---|
| `self-hosted-environments` | 개요 및 소개 |
| `self-hosted-environments-quickstart` | 빠른 시작 가이드 |
| `self-hosted-environments-deploy` | 배포 방법 |
| `self-hosted-environments-configuration` | 상세 설정 |
| `self-hosted-environments-testing` | 테스트 방법 |
| `self-hosted-environments-reference` | API 레퍼런스 |
| `self-hosted-environments-identity` | 신원 인증 설정 |

---

## 어디서 시작하면 되나요?

### 빠른 확인 방법

1. **공식 문서 먼저**: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
2. **엔터프라이즈 플랜 확인**: 자체 호스팅은 Enterprise 플랜 이상에서 지원될 가능성이 높아요 (공식 확인 필요)
3. **IT팀과 협의**: 회사 인프라 환경에 맞게 설정해야 하므로 IT팀의 도움이 필요해요

### 관련된 다른 문서들

- `cloud-environments` — 클라우드 환경 (자체 호스팅의 대안)
- `sandbox-environments` — 격리된 샌드박스 환경
- `devcontainer` — 개발 컨테이너 설정

---

<div class="note-star">
★ <strong>공개 베타 주의사항</strong>: 2026년 8월 기준 공개 베타입니다. 기능이 변경될 수 있어요.
<br />★ 최신 상태는 <a href="https://code.claude.com/docs/en/self-hosted-environments">공식 문서</a>에서 확인하세요.
</div>
