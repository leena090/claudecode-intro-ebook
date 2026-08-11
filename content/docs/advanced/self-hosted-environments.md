---
title: "[공] 자체 호스팅 환경 — 내 서버에서 클라우드 세션 실행하기"
description: "Team·Enterprise 플랜의 조직이 Claude Code 클라우드 세션을 자체 인프라에서 실행하는 방법. 내부 네트워크 접근, 커스텀 도구, 데이터 보안을 한 번에 해결합니다."
tags: ["자동생성", "자체 호스팅", "self-hosted", "Enterprise", "Team", "클라우드 세션", "runner", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-08-11"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">self-hosted-environments</a> — v2.1.224 이상, <strong>Team·Enterprise 공개 베타</strong><br />
★ 기본값은 <strong>비활성화</strong>예요. Owner 또는 관리자가 admin 설정에서 먼저 활성화해야 합니다.<br />
★ 클라우드 세션을 쓰지 않는 팀 (터미널·IDE에서만 사용)은 이 기능이 필요 없어요.
</div>

## 자체 호스팅 환경이 뭔가요?

보통 Claude Code **클라우드 세션**(웹·앱·모바일에서 시작하는 세션)은 Anthropic 서버에서 실행돼요. **자체 호스팅 환경**은 그 실행 위치를 **우리 조직의 서버로 옮기는** 기능입니다.

> 🍱 **비유로 설명하면**: 클라우드 세션이 "공용 주방에서 요리하는 것"이라면, 자체 호스팅 환경은 "우리 회사 전용 주방을 차려서 거기서 요리하는 것"이에요. 재료(코드·데이터)가 건물 밖으로 나가지 않아요.

---

## 언제 필요한가요?

### ✅ 이럴 때 유용해요

- **내부 서비스 접근 필요**: 인트라넷 DB, 내부 API, 사설 레지스트리
- **코드 체크아웃이 외부로 나가면 안 됨**: 금융·의료·공공기관 규정 준수
- **커스텀 도구 사전 설치**: 사내 CLI, 컴파일러, 독점 SDK
- **컴플라이언스**: 빌드 결과물·코드가 자체 인프라에 보관

### ❌ 이럴 때는 Anthropic 호스팅이 더 나아요

- 터미널·IDE에서만 Claude Code를 사용하는 팀 (설정 불필요)
- 클라우드 세션을 쓰더라도 외부 네트워크 접근만 필요한 경우
- 인프라 운영 부담을 피하고 싶을 때

---

## 구조 이해하기

```
[개발자 세션 시작]
    ↓
[환경 선택창: Anthropic 호스팅 or 내 환경 "linux-dev"]
    ↓
[우리 서버의 Runner가 세션 수락]
    ↓
[Runner가 Git 리포지토리 체크아웃 → Claude Code 프로세스 시작]
    ↓
[세션이 내부 네트워크에서 작업]
    ↓ (아웃바운드 HTTPS만)
[api.anthropic.com으로 모델 추론 요청]
```

### 핵심 용어

| 용어 | 설명 |
|---|---|
| **환경 (Environment)** | 조직이 admin 설정에서 만드는 러너 그룹의 이름 |
| **러너 (Runner)** | 조직 서버에서 실행되는 세션 실행 프로세스 |
| **세션 (Session)** | 개발자가 시작한 Claude Code 작업 단위 |
| **환경 시크릿** | 러너가 환경에 등록할 때 쓰는 1회용 인증 키 |

> 🍱 **비유**: 환경은 "우리 회사 주방", 러너는 "요리사", 세션은 "주문 한 건"이에요. 요리사(러너)가 주방(환경)에 등록하면, 고객 주문(세션)을 받아 처리합니다.

---

## 설정 방법

### 1단계: 관리자 설정에서 활성화

Owner 또는 admin 계정으로 [claude.ai 관리자 설정 → Cloud environments](https://claude.ai/admin-settings/cloud-environments)에 접속해서 **"Allow self-hosted environments"** 를 켜세요.

⚠️ 이 설정은 조직에 **Claude Code on the web**이 활성화되어 있어야 보입니다.

### 2단계: 환경과 러너 생성

```bash
# Owner 또는 admin 권한으로 실행
claude self-hosted-runner setup
```

안내 마법사가 환경 생성 → 러너 시작까지 자동으로 이끌어줘요.

성공하면 관리자 설정에서 **"Healthy"** 상태가 표시됩니다.

### 3단계: 개발자가 사용

개발자가 클라우드 세션을 시작할 때 환경 선택창에 내 환경이 보여요. 선택하면 그 세션이 조직 서버에서 실행됩니다.

---

## 보안 구조

<div class="note-star">
✅ <strong>Anthropic에서 내 네트워크로 들어오는 연결 없음</strong> — 모든 연결은 내 서버에서 바깥으로 나가는 아웃바운드 HTTPS예요.<br />
✅ 코드 체크아웃, 빌드 결과물, 세션에서 만들거나 수정한 파일 → <strong>내 인프라에 보관</strong><br />
⚠️ 대화 내용(프롬프트·응답·도구 결과) → <strong>모델 추론을 위해 api.anthropic.com으로 전송</strong> (Anthropic이 세션 기록 보관)
</div>

| 데이터 | 위치 |
|---|---|
| 코드 체크아웃 | ✅ 내 서버 |
| 빌드 결과물·파일 | ✅ 내 서버 |
| 환경 변수·시크릿 | ✅ 내 서버 |
| 대화·추론 | ⚠️ api.anthropic.com |
| 세션 UI·컨트롤 | ⚠️ Anthropic 호스팅 |

---

## 제한 사항 (공개 베타 기준)

| 항목 | 상태 |
|---|---|
| **플랜** | Team·Enterprise만 (Pro·Max 불가) |
| **Zero Data Retention 조직** | 이용 불가 |
| **모델 추론 경로** | Anthropic API만 (Bedrock·Vertex·LLM Gateway 불가) |
| **GitHub 외 Git** | 미지원 (GitLab·Bitbucket 등 예정) |
| **Claude Tag·Claude Security·Code Review** | 자체 호스팅 환경 미지원 (추후 추가 예정) |

---

## 오토스케일링 지원

서버를 항상 켜두지 않아도 돼요. **오토스케일링 오케스트레이터**를 사용하면 세션이 들어올 때만 러너를 시작하고, 작업이 끝나면 자동으로 종료합니다. Kubernetes나 Docker Compose 레시피를 공식 문서에서 확인하세요.

---

## 기업 프록시 지원

기업 방화벽이나 HTTP 프록시를 사용하는 환경에서도 동작해요.

```bash
# 러너 시작 환경에서 프록시 설정
export HTTPS_PROXY=https://proxy.internal:8080
export NO_PROXY=localhost,127.0.0.1
```

---

## 더 알아보기

- [공식 — 자체 호스팅 환경 개요](https://code.claude.com/docs/en/self-hosted-environments)
- [공식 — 빠른 설정 (Quickstart)](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [공식 — 프로덕션 배포 (보안·네트워크·Kubernetes 등)](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [공식 — 세션 커스터마이징](https://code.claude.com/docs/en/self-hosted-environments-configuration)
- [W30·W32 업데이트 노트](/docs/next/whats-new-w30-w32)
