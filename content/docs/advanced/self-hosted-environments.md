---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 Claude Code 웹 세션 실행하기"
description: "Team·Enterprise 플랜에서 Claude Code 웹 세션을 Anthropic 서버 대신 우리 인프라에서 실행할 수 있어요. 내부 네트워크 접근, 커스텀 툴링, 컴플라이언스 요구사항을 충족"
tags: ["자동생성", "자체호스팅", "self-hosted", "Team", "Enterprise", "내부네트워크", "Runner", "고급"]
category: "advanced"
order: 29
lastUpdated: "2026-08-08"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ 상태: 공개 베타 (Team, Enterprise 플랜, 기본 비활성)
<br />★ 관련: <a href="/docs/advanced/cloud-environments">클라우드 환경 설정</a>
</div>

## 자체 호스팅 환경이 뭔가요?

Claude Code 웹 세션(claude.ai에서 시작하는 세션)은 기본적으로 **Anthropic의 서버**에서 실행돼요. 자체 호스팅 환경은 이 세션을 **우리 회사 서버**에서 실행할 수 있게 해줘요.

> 🏢 **비유로 설명하면**: 보통은 Anthropic이 제공하는 회의실(서버)을 빌려서 쓰는데, 자체 호스팅은 **우리 회사 회의실에서 회의하는 것**과 같아요. 회사 자료에 쉽게 접근하고, 회사 규정을 지키면서 일할 수 있어요.

---

## 왜 자체 호스팅이 필요한가요?

| 이유 | 설명 |
|---|---|
| 🔒 **내부 네트워크 접근** | 사내 DB, API, 레지스트리에 Claude가 바로 접근 |
| 🛠️ **커스텀 툴링** | 사내 전용 컴파일러, SDK, CLI를 미리 설치 |
| 📋 **컴플라이언스** | 코드와 빌드 결과물이 우리 인프라 안에 머뭄 |

> ⚠️ **중요**: 대부분의 팀에게는 Anthropic 호스팅 환경이 더 편해요. 별도 인프라 운영이 필요 없거든요. 자체 호스팅은 **네트워크·보안·컴플라이언스 요구사항**이 있는 팀을 위한 것이에요.

---

## 핵심 구성 요소 3가지

### 1️⃣ 환경 (Environment)
- claude.ai 어드민에서 만드는 **명명된 그룹**
- 여러 Runner를 하나로 묶음
- 세션 시작 시 개발자가 선택

### 2️⃣ 러너 (Runner)
- **우리 서버에서 실행되는 프로그램**
- 세션이 요청되면 저장소를 클론하고 Claude Code를 실행
- CI 셀프 호스팅 러너(GitHub Actions self-hosted runner)와 개념 동일

### 3️⃣ 세션 (Session)
- 개발자가 시작한 **하나의 Claude Code 작업**
- 러너 위에서 실행되는 프로세스

---

## 어떻게 작동하나요?

```
개발자가 claude.ai에서 세션 시작
    ↓
"우리 회사 환경" 선택
    ↓
Anthropic 제어 플레인이 요청을 환경 큐에 배치
    ↓
우리 서버의 Runner가 요청 수락
    ↓
Runner가 GitHub 저장소를 클론
    ↓
Runner가 Claude Code 프로세스 시작
    ↓
세션 실행 (대화는 api.anthropic.com 경유)
```

**네트워크 흐름**:
- ✅ 우리 서버 → Anthropic (아웃바운드 HTTPS만)
- ❌ Anthropic → 우리 서버 (인바운드 없음)

> 🍱 **비유로 설명하면**: 외주 직원이 우리 사무실에 출근해서 일하는 것과 같아요. 회사 내부 시스템에 접근하면서 일하지만, 보고는 원격 본사(Anthropic)에 해요.

---

## 무엇이 우리 서버에 남나요?

| 우리 서버에 보관 | Anthropic 서버로 전송 |
|---|---|
| 저장소 클론 | 대화 내용 (프롬프트·응답) |
| 빌드 결과물 | 세션 트랜스크립트 (재개 위해) |
| 시크릿·자격증명 | 모델 추론 요청 |
| 세션 중 생성 파일 | |

---

## 사용 가능 조건

```
✅ Team 또는 Enterprise 플랜
✅ Claude Code on the web 활성화된 조직
✅ 어드민이 "Allow self-hosted environments" 설정 활성화 필요
✅ Zero Data Retention(ZDR) 비활성화 상태

❌ 무료, Pro, Max 플랜 불가
❌ Amazon Bedrock, Google Cloud, Microsoft Foundry 통한 추론 불가
❌ Zero Data Retention 설정 시 불가
❌ Claude Tag, Claude Security, Code Review 세션 미지원 (추후 추가 예정)
```

---

## 세션 보안 원칙

**사용자 격리**: 러너가 첫 번째 세션을 받으면 해당 사용자에게 잠금돼요. 다른 사용자의 코드와 섞이지 않아요.

---

## 자체 호스팅 vs 클라우드 환경

| 구분 | 자체 호스팅 | Anthropic 클라우드 환경 |
|---|---|---|
| 서버 위치 | 우리 서버 | Anthropic 서버 |
| 내부 네트워크 | ✅ 접근 가능 | ❌ 불가 |
| 운영 부담 | 높음 (인프라 관리 필요) | 없음 |
| 설정 복잡도 | 복잡 | 간단 |
| 대상 요금제 | Team, Enterprise | 모든 플랜 |
| 상태 | 공개 베타 | 일반 제공 |

---

## 시작하는 방법

공식 문서의 순서를 따르세요:

1. **Quickstart** — Runner 설치, 환경 생성, 첫 세션 라우팅
2. **Deploy to production** — 보안 설정, 네트워크 구성, Kubernetes/Compose 레시피
3. **Customize sessions** — 세션별 자격증명, 라이프사이클 훅, 온디맨드 러너
4. **Test end to end** — Runner 이미지 CI 검증
5. **Reference** — 모든 CLI 플래그, 환경 변수, 메트릭

---

## 관련 문서

- [클라우드 환경 설정](/docs/advanced/cloud-environments) — 간단한 웹 세션 환경 설정
- [Claude Code 웹 시작하기](/docs/codeweb/codeweb-intro)
- [Routines 자동화](/docs/advanced/routines)
