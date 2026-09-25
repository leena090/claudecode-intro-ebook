---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 Claude Code 실행하기"
description: "Team·Enterprise 플랜에서 Claude Code 클라우드 세션을 내 회사 서버 안에서 돌릴 수 있어요. 사내 네트워크 접근, 보안 규정 준수에 유용합니다"
tags: ["자동생성", "셀프호스팅", "클라우드세션", "enterprise", "보안", "self-hosted"]
category: "advanced"
order: 27
lastUpdated: "2026-09-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
퍼블릭 베타 (2026년 8월 공개) — Team 및 Enterprise 플랜 전용
</div>

## 셀프 호스팅 환경이 뭔가요?

**셀프 호스팅 환경(Self-hosted environments)**은 Claude Code의 **클라우드 세션**을 Anthropic 서버가 아닌 **내 회사 서버(인프라) 위에서 실행**하는 기능이에요.

> 🏢 **비유로 설명하면**: 보통 Claude Code 클라우드 세션은 "카페에서 일하는 것"과 같아요. 편하지만 사내 자료에 바로 접근은 안 되죠. **셀프 호스팅 환경**은 "회사 사무실 안에서 일하는 것"이에요. 내부 서버, 데이터베이스, 사내 도구에 바로 접근할 수 있어요.

---

## 언제 필요한가요?

대부분의 팀은 Anthropic이 운영하는 기본 클라우드 환경으로 충분해요. 셀프 호스팅은 **아래 상황에서 필요**해요:

| 상황 | 설명 |
|---|---|
| 🔒 **사내 네트워크 접근** | 외부에서 접근 불가한 DB, 레지스트리, 내부 API 사용 |
| 🛠️ **맞춤 도구 환경** | 사내 컴파일러, SDK, CLI를 미리 설치해 세션마다 준비된 환경 |
| 📋 **컴플라이언스** | 코드 체크아웃·빌드 산출물을 회사 인프라 밖으로 내보내면 안 될 때 |

---

## 핵심 구성 요소

```
👤 개발자 (claude.ai / 앱)
       ↓ 클라우드 세션 시작
📡 Anthropic 제어 플레인 (세션 큐)
       ↓ 세션 전달
🏃 러너(Runner) — 내 서버 안에서 실행
       ↓ 저장소 클론 + Claude Code 프로세스 실행
🗄️ 내부 서비스 (DB, 레지스트리 등)에 직접 접근 가능
```

| 용어 | 설명 |
|---|---|
| **환경 (Environment)** | 내 러너들의 묶음. claude.ai 관리 설정에서 생성 |
| **러너 (Runner)** | 내 서버에서 실행되는 프로그램. 세션을 받아 실행 |
| **세션 (Session)** | 개발자가 시작한 Claude Code 작업 하나 |

> 💡 러너는 GitHub Actions의 **self-hosted runner**와 개념이 같아요!

---

## 주요 특징

### ✅ 내 네트워크 안에서만 실행

- 세션은 내 서버에서 돌아요
- Anthropic 서버로 나가는 연결만 **아웃바운드 HTTPS**
- Anthropic에서 내 서버로 들어오는 연결 **없음** (인바운드 포트 불필요)

### ✅ 코드와 산출물은 내 인프라에

- 저장소 체크아웃, 빌드 산출물 → 내 서버에만 저장
- 대화 내용 (프롬프트·응답)은 추론을 위해 `api.anthropic.com`으로 전송됨

### ✅ 자동 스케일링 지원

- 러너를 직접 관리하거나
- **자동 스케일링 오케스트레이터** 사용 시 세션이 들어올 때만 러너 시작, 작업 완료 후 자동 종료

---

## 가용성 및 제한사항

| 항목 | 내용 |
|---|---|
| **플랜** | Team·Enterprise (기본 비활성, 관리자가 활성화 필요) |
| **Zero Data Retention** | 해당 조직은 사용 불가 |
| **모델 추론** | Anthropic API 사용 (Bedrock·Vertex·Foundry 불가) |
| **지원 시작 방법** | claude.ai/code, 모바일앱, 데스크톱앱, 스케줄된 루틴, `claude --cloud` |
| **미지원** | Claude Security, Code Review 세션은 아직 미지원 |

---

## 간단한 시작 방법

### 1단계: 관리자가 활성화

1. claude.ai → 관리자 설정 → **Cloud environments**
2. **"Allow self-hosted environments"** 활성화

### 2단계: 환경 생성

```bash
# claude.ai 관리자 페이지에서 환경 생성 후
# 환경 키(Environment Key)를 안전하게 보관
```

### 3단계: 러너 설치 및 실행

```bash
# Claude Code 설치 (이미 돼 있으면 생략)
npm install -g @anthropic-ai/claude-code

# 러너 시작 (환경 키와 환경 ID 필요)
claude runner start \
  --environment-id <환경ID> \
  --environment-key <환경키> \
  --capacity 2
```

### 4단계: 개발자가 사용

- claude.ai/code 또는 앱에서 클라우드 세션 시작 시
- **환경 선택 드롭다운**에서 내 조직 환경 선택
- 이후 사용법은 기존 클라우드 세션과 동일!

---

## 더 자세한 내용

| 문서 | 내용 |
|---|---|
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 설치부터 첫 세션까지 |
| [Deploy to production](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 보안 강화, 네트워크, Kubernetes |
| [Customize sessions](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 자격증명, 라이프사이클 훅, MCP |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그, 환경변수 전체 목록 |

> ⚠️ **현재 퍼블릭 베타 단계**예요. 운영 환경 도입 전 [알려진 이슈](https://code.claude.com/docs/en/self-hosted-environments-deploy#known-issues-and-limitations)를 꼭 확인하세요.
