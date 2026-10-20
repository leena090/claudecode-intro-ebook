---
title: "[공] 자체 호스팅 환경 — 내 회사 서버에서 Claude Code 클라우드 세션 실행하기"
description: "Self-hosted Environments는 Claude Code 클라우드 세션을 내부 네트워크 서버에서 실행하는 기능이에요. 보안·컴플라이언스가 중요한 기업에 최적화돼 있어요."
tags: ["자동생성", "자체호스팅", "SelfHosted", "엔터프라이즈", "보안", "컴플라이언스", "퍼블릭베타"]
category: "advanced"
order: 32
lastUpdated: "2026-10-20"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> 발표: W32 (Aug 6, 2026) — 퍼블릭 베타
</div>

## 자체 호스팅 환경이란?

보통 Claude Code의 클라우드 세션은 **Anthropic 서버**에서 실행돼요. 하지만 **자체 호스팅 환경(Self-hosted Environments)**을 쓰면 **여러분 회사 서버**에서 실행할 수 있어요.

> 🏘️ **비유로 설명하면**: 전세 아파트(Anthropic 클라우드)에 살다가, 이제 내 땅에 내 집을 지어서 사는 거예요. 집 안이 어떻게 돌아가는지 내가 다 통제할 수 있어요.

---

## 누가 써야 할까요?

| 상황 | 자체 호스팅 권장? |
|---|---|
| 개인 개발자, 스타트업 | ❌ Anthropic 클라우드면 충분 |
| 의료·금융·공공기관 (HIPAA, SOC2 등) | ✅ 강력 권장 |
| 내부 데이터베이스나 API에 접근 필요 | ✅ 권장 |
| 외부 인터넷 없는 망분리 환경 | ✅ 필수 |

---

## 주요 특징

### 1. 내부 네트워크 직접 접근

```
Claude 세션 (내 서버) → 내부 DB, API → 코드 수정
```

외부를 거치지 않고 내부 서비스에 직접 접근해요.

### 2. 데이터가 내부에서만 처리

코드·비밀·데이터가 회사 네트워크 밖으로 나가지 않아요.

### 3. Kubernetes, Docker Compose 지원

```yaml
# docker-compose.yml 예시
services:
  claude-runner:
    image: claude-code-runner:latest
    environment:
      - CLAUDE_API_KEY=...
    volumes:
      - /workspace:/workspace
```

---

## 시작하는 방법

```bash
# 1. Claude Code CLI 설치
curl -fsSL https://claude.ai/install.sh | bash

# 2. 자체 호스팅 환경 생성 (Admin 권한 필요)
claude environments create my-runner \
  --type self-hosted \
  --network internal

# 3. 러너(실행 에이전트) 시작
claude runner start

# 4. 세션을 내 서버로 라우팅
claude --environment my-runner "코드 리뷰해줘"
```

자세한 설정은 공식 문서를 참고하세요:
- [Self-hosted quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [프로덕션 배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy)

---

## 클라우드 환경과 비교

| 항목 | Anthropic 클라우드 | 자체 호스팅 |
|---|---|---|
| **설정 난이도** | 쉬움 (즉시 사용) | 복잡 (DevOps 필요) |
| **내부 네트워크 접근** | ❌ | ✅ |
| **데이터 위치** | Anthropic 인프라 | 내 회사 서버 |
| **비용** | Anthropic 과금 | 서버 직접 부담 |
| **컴플라이언스** | 기본 보장 | 직접 관리 |

> 📌 **참고**: 현재 **퍼블릭 베타** 상태예요. 기능이 변경되거나 추가될 수 있어요 (공식 발표 기준).

---

## 관련 문서

- [클라우드 환경 설정](/docs/codeweb/codeweb-intro)
- [Projects — 에이전트 팀 관리](/docs/advanced/projects-feature)
