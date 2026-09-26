---
title: "[공] 셀프 호스팅 환경 — 회사 서버에서 클라우드 세션 실행하기"
description: "Team·Enterprise 고객이 Claude Code 클라우드 세션을 자사 인프라에서 실행할 수 있어요. 내부 네트워크 접근, 커스텀 도구, 보안 컴플라이언스가 필요한 기업용 기능"
tags: ["자동생성", "셀프호스팅", "self-hosted", "엔터프라이즈", "클라우드세션", "보안", "인프라"]
category: "codeweb"
order: 5
lastUpdated: "2026-09-26"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ Team · Enterprise 플랜 공개 베타 — 기본값은 OFF, 관리자가 활성화해야 해요
<br />★ 2026년 8월 7일 공개 베타 출시 <code>[공식 발표 기준]</code>
</div>

## 셀프 호스팅 환경이 뭔가요?

보통 Claude Code의 **클라우드 세션**은 Anthropic 서버에서 실행돼요. 셀프 호스팅 환경은 그 클라우드 세션을 **우리 회사 서버에서 실행**하는 기능이에요.

> 🍱 **비유로 설명하면**: 평소엔 클로드가 Anthropic 클라우드 오피스에서 우리 일을 처리하는데, 셀프 호스팅을 사용하면 **클로드를 우리 회사 사무실 안으로 데려와서** 내부 시스템에 직접 접근하면서 일하게 하는 거예요.

---

## 왜 셀프 호스팅이 필요할까요?

| 상황 | 이유 |
|---|---|
| **사내 DB·서비스 접근** | 외부 인터넷에 노출 안 된 내부 시스템에 접근해야 할 때 |
| **커스텀 도구 사전 설치** | 회사 전용 컴파일러, SDK, CLI가 매 세션마다 필요할 때 |
| **보안·컴플라이언스** | 코드가 회사 인프라 밖으로 나가면 안 될 때 |
| **규제 산업** | 금융, 의료, 정부 등 데이터 위치 규정이 있을 때 |

---

## 어떻게 동작하나요?

### 3가지 핵심 구성 요소

```
환경 (Environment)
  └── 러너들 (Runners)
        └── 세션들 (Sessions)
```

| 용어 | 설명 |
|---|---|
| **환경 (Environment)** | 회사가 만드는 "명칭이 있는 목적지" — 세션이 우리 러너로 라우팅됨 |
| **러너 (Runner)** | 우리 서버에서 실행하는 프로그램 — 실제로 세션을 처리 |
| **세션 (Session)** | 개발자가 시작한 Claude Code 작업 하나 |

### 동작 순서

```
1. 개발자가 클라우드 세션 시작
2. 환경 선택 화면에서 회사 환경 선택
3. Anthropic 제어 플레인이 우리 환경 큐에 세션 배치
4. 우리 러너가 세션 수신
5. 러너가 레포지토리 클론 + Claude Code 프로세스 시작
6. 세션이 우리 내부 네트워크에서 실행
```

### 네트워크 구조

```
[우리 회사 네트워크]
  ├── 러너 (Runner)
  ├── Claude Code 세션 프로세스
  └── 내부 서비스 (DB, API 등)
              │
              │ 아웃바운드 HTTPS만
              ↓
  [Anthropic — api.anthropic.com]
  ├── 세션 큐
  ├── 이벤트 스트림
  └── 모델 추론 (AI 계산)
```

> 💡 **중요**: Anthropic에서 우리 네트워크로 들어오는 인바운드 연결은 없어요. 우리 러너가 아웃바운드로 나가는 방식이에요.

---

## 무엇이 우리 서버에 남나요?

| 우리 서버에 남는 것 | Anthropic으로 가는 것 |
|---|---|
| 저장소 코드 체크아웃 | AI 모델 추론 (프롬프트·응답) |
| 빌드 아티팩트 | 세션 이벤트 스트림 |
| 비밀 키·환경변수 | 세션 기록 (재개용) |
| 세션 중 생성 파일 | |

---

## 사용 조건

| 항목 | 내용 |
|---|---|
| **플랜** | Team · Enterprise (공개 베타) |
| **기본 상태** | **OFF** — 관리자가 claude.ai 관리 설정에서 활성화 |
| **Zero Data Retention** | 사용 불가 (ZDR 조직 제외) |
| **모델 추론 라우팅** | Anthropic API 직접 — Bedrock/Google/Azure 불가 |
| **저장소** | GitHub (현재 기준) |

---

## 설정 시작 방법

공식 가이드는 단계별로 나뉘어 있어요:

1. **[퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart)** — Claude Code 설치, 환경 생성, 러너 시작, 첫 세션 라우팅
2. **[프로덕션 배포](https://code.claude.com/docs/en/self-hosted-environments-deploy)** — 보안 강화, 네트워크 설정, Kubernetes/Compose 레시피
3. **[세션 커스터마이즈](https://code.claude.com/docs/en/self-hosted-environments-configuration)** — 세션별 자격증명, 라이프사이클 훅, 온디맨드 러너
4. **[테스트](https://code.claude.com/docs/en/self-hosted-environments-testing)** — CI 스모크 테스트

---

## 셀프 호스팅 vs 기본 클라우드 vs Remote Control

| 방식 | 실행 위치 | 내부망 접근 | 적합한 팀 |
|---|---|---|---|
| **기본 클라우드** | Anthropic 서버 | ❌ | 대부분의 팀 |
| **셀프 호스팅** | 우리 회사 서버 | ✅ | 보안·컴플라이언스 필요 팀 |
| **Remote Control** | 내 로컬 PC | ✅ | 개인 · Pro · Max 사용자 |

> 💡 **대부분의 팀은 셀프 호스팅이 필요 없어요.** 셀프 호스팅은 직접 인프라를 운영해야 해서 관리 부담이 있어요. 내부망 접근 없이도 일하는 팀이라면 기본 클라우드로 충분해요.

---

## 요약

- **클라우드 세션을 우리 회사 서버에서 실행**하는 Enterprise 기능
- 내부 서비스 접근 + 커스텀 도구 + 보안 컴플라이언스 충족
- Team · Enterprise 공개 베타 (관리자가 활성화 필요)
- 러너(Runner)라는 프로그램을 우리 서버에 설치·운영
- 코드는 우리 서버에 남고, AI 추론만 Anthropic API 사용
