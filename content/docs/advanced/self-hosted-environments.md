---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "Self-hosted environments로 Claude Code 클라우드 세션을 내가 직접 제어하는 인프라에서 실행하는 방법. Runner 설치·환경 생성·세션 라우팅까지"
tags: ["자동생성", "자체호스팅", "클라우드", "인프라", "엔터프라이즈", "Runner", "Kubernetes", "Docker"]
category: "advanced"
order: 10
lastUpdated: "2026-08-12"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> (2026-08-12 신규 추가)
</div>

## 자체 호스팅 환경이란?

**Claude Code 클라우드 세션을 Anthropic의 서버가 아니라, 내가 직접 운영하는 서버(인프라)에서 실행하는 기능**이에요.

> 🏭 **비유로 설명하면**: 일반 Claude Code 클라우드 세션이 "공유 사무실(코워킹 스페이스)"에서 일하는 거라면, 자체 호스팅 환경은 **"우리 회사 사무실"에 Claude 직원을 파견 받아** 일하게 하는 것입니다. 장비·네트워크·보안 규정 모두 우리가 통제할 수 있어요.

---

## 어떤 경우에 필요한가요?

| 상황 | 이유 |
|---|---|
| 보안 정책상 코드가 외부 서버를 거치면 안 될 때 | 코드가 내 서버 밖을 나가지 않음 |
| 인트라넷·방화벽 내부 코드베이스 작업 | 외부 인터넷 없어도 작동 |
| 특수 컴퓨팅 자원이 필요한 대규모 작업 | 내 GPU·메모리·스토리지 사용 가능 |
| 엔터프라이즈 규정 준수(컴플라이언스) | 데이터 잔류 요건 충족 |

---

## 전체 구조

```
사용자 (웹·앱·터미널)
    ↓
Claude Code 오케스트레이터 (Anthropic 서버 — 세션 라우팅만 담당)
    ↓
Self-Hosted Runner (내 서버)  ← 실제 코드 실행 여기서!
    ↓
내 코드베이스 / 내 도구들
```

> 💡 **핵심 포인트**: Claude AI 모델 자체는 Anthropic API를 통해 호출됩니다. 자체 호스팅 환경은 "코드가 실행되는 환경"을 내 서버로 옮기는 것이지, AI 모델 자체를 내 서버에 올리는 것이 아니에요.

---

## 빠른 시작 (Quickstart)

### 1단계: 자체 호스팅 환경 생성

```bash
# Claude Code CLI에서 환경 만들기
claude env create my-company-env
```

### 2단계: 내 서버에 Runner 설치 및 시작

```bash
# Runner 바이너리 설치 (서버에서 실행)
curl -fsSL https://claude.ai/install-runner.sh | bash

# Runner 시작 (환경 이름과 인증 토큰 필요)
claude runner start \
  --environment my-company-env \
  --token <YOUR_RUNNER_TOKEN>
```

### 3단계: 세션 라우팅

웹(claude.ai/code) 또는 앱에서 세션 시작 시 환경을 선택하면 됩니다.

```bash
# CLI에서 자체 호스팅 환경으로 세션 시작
claude --environment my-company-env
```

---

## 프로덕션 배포 옵션

### Docker Compose

```yaml
# docker-compose.yml 예시
version: '3.8'
services:
  claude-runner:
    image: anthropic/claude-runner:latest
    environment:
      - CLAUDE_ENV_NAME=my-company-env
      - CLAUDE_RUNNER_TOKEN=${RUNNER_TOKEN}
    volumes:
      - /path/to/code:/workspace
    restart: always
```

### Kubernetes

Kubernetes 환경에서는 Deployment로 Runner를 관리하고, Horizontal Pod Autoscaler로 부하에 따라 자동 확장할 수 있어요.

📄 상세 안내: [Deploy self-hosted environments to production](https://code.claude.com/docs/en/self-hosted-environments-deploy)

---

## 보안 고려사항

| 항목 | 설명 |
|---|---|
| **JWT 인증** | `CLAUDE_CODE_SESSION_ACCESS_TOKEN`으로 세션 신원 검증 |
| **네트워크 제어** | Runner의 네트워크 송신(egress) 정책 직접 설정 가능 |
| **자격증명 관리** | 세션별 임시 자격증명 생성 가능 (wrapper script 사용) |
| **감사 로그** | Prometheus 메트릭으로 사용량·에러 모니터링 |

세션 신원 검증 방법: [Verify session identity](https://code.claude.com/docs/en/self-hosted-environments-identity)

---

## 자체 환경 커스터마이징

Runner가 시작될 때 실행할 스크립트로 환경을 세밀하게 설정할 수 있어요:

```bash
# 세션별 자격증명 주입 예시 (wrapper script)
#!/bin/bash
# 세션 시작 전 AWS 임시 자격증명 발급
export AWS_SESSION_TOKEN=$(aws sts get-session-token ...)
exec "$@"
```

📄 상세 안내: [Customize sessions in self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments-configuration)

---

## 관련 공식 문서 모음

| 문서 | 내용 |
|---|---|
| [Self-hosted environments overview](https://code.claude.com/docs/en/self-hosted-environments) | 개요 및 아키텍처 |
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 첫 번째 환경 만들기 |
| [Deploy to production](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 프로덕션 배포 |
| [Customize sessions](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 세션 커스터마이징 |
| [End-to-end testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | CI에서 Runner 이미지 검증 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그·환경변수·Prometheus 메트릭 |
| [Verify session identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | JWT 기반 세션 신원 검증 |
| [Cloud environments](https://code.claude.com/docs/en/cloud-environments) | 일반 클라우드 환경 설정 (비교용) |
