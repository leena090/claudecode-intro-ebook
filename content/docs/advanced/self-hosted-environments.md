---
title: "[공] 자체 호스팅 환경 — 우리 서버에서 Claude Cloud 세션 돌리기"
description: "Team·Enterprise 플랜에서 Claude Code 클라우드 세션을 Anthropic 서버 대신 우리 회사 인프라에서 실행하는 방법. 내부 네트워크 접근, 보안 격리, 커스텀 도구 사전 설치 가능."
tags: ["자동생성", "고급", "self-hosted", "자체호스팅", "enterprise", "cloud", "runner", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-08-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 8월 (Week 32) 공개 베타. Team·Enterprise 플랜 전용. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/self-hosted-environments" target="_blank">공식 문서: code.claude.com/docs/en/self-hosted-environments</a><br />
⚠️ <strong>공개 베타</strong> — 아직 실험 단계예요. 일부 기능이 제한될 수 있어요.
</div>

## 자체 호스팅 환경이란?

**Claude Code 클라우드 세션을 Anthropic 서버 대신, 우리 회사 서버(인프라)에서 직접 실행**하는 기능이에요.

> 🏭 **비유로 설명하면**:
> 지금까지 Claude Code 클라우드 세션은 Anthropic의 공장(클라우드 서버)에서 돌아가고, 완성된 결과만 여러분한테 배달됐어요.
>
> 자체 호스팅을 쓰면, 우리 회사 내부 공장에 Anthropic의 생산 시스템을 설치한 뒤, 작업 전부를 우리 공장 안에서 진행해요. 회사 내부 창고(데이터베이스)나 설비(내부 서비스)를 바로 써가면서요.
>
> Anthropic은 명령을 보내고 결과를 받는 역할만 하고, 실제 코드 파일은 우리 서버에만 남아요.

---

## 어떤 팀에 필요한가요?

**대부분의 팀은 Anthropic 호스팅 환경으로 충분해요.** 자체 호스팅은 다음 상황에서 필요해요:

| 상황 | 자체 호스팅이 필요한 이유 |
|---|---|
| 🔒 내부 데이터베이스·서비스에 접근 필요 | 인터넷에 노출하지 않고 내부 네트워크에서 직접 접근 |
| 🛡️ 코드가 외부 서버에 올라가면 안 되는 규정 | 코드 체크아웃·빌드 파일이 우리 서버에만 남음 |
| 🔧 특별한 도구·컴파일러 사전 설치 필요 | 러너 이미지에 미리 설치 → 모든 세션이 즉시 준비 |
| 🏢 금융·의료·정부 등 규정 준수 요구 | 데이터 처리 경로를 우리가 직접 통제 |

---

## 어떻게 작동하나요?

자체 호스팅은 세 가지로 구성돼요:

```
개발자 (claude.ai / 앱 / claude --cloud)
       ↓  [세션 시작 — 환경 선택]
Anthropic 제어 플레인 (큐잉·오케스트레이션)
       ↓  [세션을 우리 서버로 전달]
내 회사 서버 (Runner 실행)
       ↓
Claude Code 프로세스 (실제 작업)
       ↓
내부 서비스·DB에 직접 접근 ✅
```

**Environment(환경)**: claude.ai 관리자 설정에서 만드는 이름 붙은 목적지. 여러 러너를 그룹으로 묶어요.

**Runner(러너)**: 우리 서버·컨테이너에서 돌아가는 프로그램. 실제로 세션을 실행해요. CI에서 쓰는 self-hosted runner와 개념이 같아요.

**Session(세션)**: 개발자가 시작한 Claude Code 작업 하나.

---

## 데이터는 어디에 있나요?

| 데이터 종류 | 위치 |
|---|---|
| 코드 체크아웃·빌드 파일 | ✅ **우리 서버에만** |
| 환경 변수·자격증명 | ✅ **우리 서버에만** |
| 대화 내용 (프롬프트·응답) | Anthropic api.anthropic.com으로 전송 (AI 추론용) |
| 세션 기록 | Anthropic 서버에 저장 (재개를 위해) |

> ⚠️ **알아두세요**: 코드 파일은 우리 서버에 남지만, Claude가 주고받는 **대화 내용**은 Anthropic AI가 처리해야 하므로 Anthropic 서버로 전송돼요. 이 점을 법무·보안팀에 미리 확인하세요.

---

## 어떤 연결이 필요한가요?

| 방향 | 연결 | 설명 |
|---|---|---|
| 우리 서버 → Anthropic | **아웃바운드 HTTPS만** | api.anthropic.com 폴링·세션 스트림 |
| Anthropic → 우리 서버 | ❌ **없음** | Anthropic이 우리 네트워크로 들어오지 않아요 |
| 우리 서버 → 내부 서비스 | ✅ 자유롭게 | 내부 DB·서비스에 직접 접근 가능 |

---

## 시작하는 방법

> **필요 조건**: Team 또는 Enterprise 플랜, Owner 또는 Admin 계정

### 1단계: 관리자 설정에서 활성화

1. [claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments) 접속
2. **Allow self-hosted environments** 켜기

### 2단계: 환경 만들고 러너 시작

```bash
# 가이드를 따라 환경 생성 + 러너 시작
claude self-hosted-runner setup
```

설정이 완료되면 관리자 화면에서 **Healthy** 상태로 표시돼요.

### 3단계: 개발자가 세션 시작할 때 환경 선택

개발자가 claude.ai·앱·터미널에서 세션을 시작할 때, 환경 목록에 우리가 만든 환경이 나타나요.

---

## 제한 사항 (공개 베타)

| 항목 | 내용 |
|---|---|
| **플랜** | Team·Enterprise 전용 (Pro·Max 해당 없음) |
| **기본값** | 기본 비활성화. 관리자가 켜야 함 |
| **Zero Data Retention** | ZDR 정책 사용 조직은 사용 불가 |
| **모델 추론** | Anthropic API만 가능 (Bedrock·Vertex·LLM 게이트웨이로 우회 불가) |
| **Claude Tag, Code Review 세션** | 아직 자체 호스팅 라우팅 미지원 |
| **레포지토리** | GitHub만 지원 (공개 베타 기준) |

---

## 요약 — 언제 쓸까요?

```
일반 팀      → Anthropic 호스팅 환경으로 충분 (설정 불필요)
내부망 필요  → 자체 호스팅 환경 (Team/Enterprise)
규정 준수    → 자체 호스팅 환경 (코드 파일 우리 서버에 격리)
```

> 📌 **공식 빠른 시작**: [self-hosted-environments-quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | **배포 가이드**: [self-hosted-environments-deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy)
