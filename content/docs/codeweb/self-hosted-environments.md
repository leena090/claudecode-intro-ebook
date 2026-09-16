---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "2026년 8월 신규: 기업 서버에서 Claude Code 클라우드 세션을 직접 실행하는 자체 호스팅 환경 설정 안내"
tags: ["자동생성", "self-hosted", "자체호스팅", "클라우드세션", "enterprise", "보안", "인프라", "w32"]
category: "codeweb"
order: 5
lastUpdated: "2026-09-16"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>2026년 8월 (W32)</strong>에 공개된 기능이에요<br />
★ Team·Enterprise 플랜 대상
</div>

---

## 자체 호스팅 환경이 뭐예요?

Claude Code의 **클라우드 세션**은 원래 Anthropic의 서버에서 실행돼요. 그런데 어떤 기업은 이런 이유로 외부 서버를 쓰기 어려워요:

- 💼 보안 정책상 코드를 외부 서버로 보낼 수 없다
- 🏛️ 규제 산업(금융·의료·공공)의 데이터 현지화 요건
- 🔒 VPN 내부 저장소나 내부 API에만 접근 가능한 코드

**자체 호스팅 환경(Self-hosted Environments)**은 이런 상황을 해결해줘요. 클라우드 세션을 **여러분의 서버에서 직접 실행**할 수 있어요.

🍱 **비유로 설명하면**: 음식 배달 앱을 떠올려보세요. 원래는 배달부(Claude Code 클라우드 세션)가 Anthropic 물류창고에서 출발해요. 자체 호스팅은 "우리 회사 물류창고에서 출발"하도록 바꾸는 거예요. 배달부(Claude)는 같은데, 출발지가 달라지는 거예요.

---

## 구성 요소

자체 호스팅 환경은 3가지로 구성돼요:

```
사용자 브라우저/앱
    ↕  (세션 요청)
Anthropic 오케스트레이터 (세션 라우팅)
    ↕  (세션 실행)
내 서버의 Self-hosted Runner (실제 작업 실행)
    ↕  (코드·도구 접근)
내 회사 저장소 / 내부 API / 데이터베이스
```

| 구성요소 | 역할 | 위치 |
|---|---|---|
| Anthropic 오케스트레이터 | 세션 라우팅 및 관리 | Anthropic 서버 |
| **Self-hosted Runner** | 실제 Claude Code 실행 | **내 서버** |
| 코드·도구 | 접근 대상 | 내 인프라 |

---

## 빠른 시작

### 1단계: 환경 만들기

```bash
# Claude Code CLI로 새 환경 생성
claude environments create my-secure-env
```

### 2단계: Runner 설치 및 시작

```bash
# Runner 설치 (Docker 이미지 사용)
docker pull anthropic/claude-code-runner:latest

# Runner 시작
docker run -d \
  --name claude-runner \
  -e ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY" \
  -e RUNNER_ENV_ID="your-env-id" \
  anthropic/claude-code-runner:latest
```

### 3단계: 세션 라우팅 확인

```bash
# 환경 ID로 세션 시작
claude --environment my-secure-env
```

> ⚠️ 위 명령어는 공식 문서 기반 추정이에요. 실제 설치는 [공식 빠른 시작 문서](https://code.claude.com/docs/en/self-hosted-environments-quickstart)를 따르세요.

---

## 보안 설정

자체 호스팅을 쓰는 핵심 이유 중 하나가 보안이에요. 공식 문서에서 권장하는 보안 항목들이에요:

### 네트워크 나가는 트래픽(Egress) 제한

Runner가 허용된 곳으로만 외부 통신하도록 방화벽 규칙을 설정해요.

```bash
# Kubernetes NetworkPolicy 예시
# Anthropic API와 내부 저장소만 허용, 나머지 차단
```

### Git 자격증명 관리

각 세션마다 별도의 Git 토큰을 주입해서 세션 간 자격증명이 섞이지 않게 해요.

### 세션 격리

Docker 또는 Kubernetes를 사용해서 각 세션을 완전히 분리된 환경에서 실행해요.

---

## 관련 공식 문서 목록

| 문서 | 내용 |
|---|---|
| [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) | 개요 및 아키텍처 |
| [Self-hosted quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 첫 환경 구성 안내 |
| [Deploy to production](https://code.claude.com/docs/en/self-hosted-environments-deploy) | Kubernetes·Compose 배포 레시피 |
| [Customization](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 래퍼 스크립트·라이프사이클 훅 |
| [Testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | CI에서 end-to-end 테스트 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그·환경변수·Prometheus 메트릭 |
| [Identity verification](https://code.claude.com/docs/en/self-hosted-environments-identity) | JWT로 세션 신원 검증 |

---

## 이 기능이 필요한지 판단하기

| 상황 | 추천 |
|---|---|
| 코드를 외부 서버로 보내도 되고, 빠르게 시작하고 싶다 | 기본 클라우드 세션 사용 |
| 보안 정책·규제·내부 API 제한이 있다 | **자체 호스팅 환경** 검토 |
| 아직 잘 모르겠다 | [admin-setup 문서](/docs/config/admin-setup-guide) 참고 후 결정 |

---

## 📎 관련 가이드

- [Claude Code on the Web — 클라우드 세션 기초](/docs/codeweb/codeweb-intro)
- [Admin Setup 가이드](/docs/config/admin-setup-guide)
- [주간 업데이트 W30~W37](/docs/next/whats-new-w30-w37) — 이 기능이 포함된 W32 요약
- [공식 문서 — self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
