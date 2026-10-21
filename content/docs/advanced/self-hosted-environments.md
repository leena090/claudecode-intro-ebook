---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 Claude Code 실행하기"
description: "Team·Enterprise 전용 자체 호스팅 환경은 사내 네트워크 안에서 Claude Code 클라우드 세션을 실행해 보안·컴플라이언스 요구사항을 충족합니다"
tags: ["자동생성", "자체호스팅", "self-hosted", "엔터프라이즈", "Enterprise", "보안", "compliance"]
category: "advanced"
order: 25
lastUpdated: "2026-10-21"
---

<div class="note-star">
★ <strong>공식 기능</strong> — code.claude.com/docs/en/self-hosted-environments 기반입니다 <code>[공]</code><br />
★ <strong>Team·Enterprise 플랜 전용</strong>, 공개 베타. 기본 꺼짐 — 관리자가 직접 켜야 해요.<br />
★ Zero Data Retention(제로 데이터 보존) 또는 HIPAA 설정 조직은 미지원.
</div>

## 자체 호스팅 환경이 뭔가요?

일반적으로 Claude Code 클라우드 세션(cloud session)은 **앤트로픽 서버**에서 실행돼요. 아주 편리하지만, 일부 기업은 이걸 원하지 않을 수 있어요.

> 🏢 **회사 냉장고 비유**: 편의점 도시락(Anthropic 서버)은 간편하지만, 회사 구내식당(자체 호스팅)은 식재료가 회사 안에 있어서 레시피(코드)가 밖으로 나가지 않아요. 보안·규정 준수에 민감한 회사에게는 구내식당이 필요해요.

자체 호스팅 환경은 **같은 Claude Code 클라우드 세션 경험**을 유지하면서, 실행만 **여러분 회사 인프라 안**에서 하는 거예요.

---

## 왜 필요한가요?

대부분의 팀은 Anthropic 서버로 충분해요. 자체 호스팅이 필요한 경우:

| 상황 | 왜 자체 호스팅이 필요한가 |
|---|---|
| 사내 DB·서비스 접근 | 외부 공개 없이 내부 네트워크에서만 접근 가능 |
| 보안 규정 준수 | 코드 체크아웃·빌드 결과물이 사내 서버에만 존재 |
| 사내 빌드 도구 | 컴파일러·SDK·내부 CLI를 미리 설치한 이미지 사용 |
| 금융·의료·정부 기관 | 데이터 주권 요구사항 충족 |

> ⚠️ **중요**: 대화 내용(프롬프트·응답)은 여전히 `api.anthropic.com`으로 전송돼요. 자체 호스팅은 **코드 실행 위치**를 사내로 가져오는 것이지, 모델 추론(inference)을 사내에서 하는 게 아닙니다. (Amazon Bedrock·Google Cloud 설정 시 모델 추론도 사내 가능)

---

## 어떻게 동작하나요?

세 가지 구성 요소로 이해하면 쉬워요:

```
┌──────────── 여러분 회사 네트워크 ────────────┐
│                                              │
│  🏃 Runner (실행자)                          │
│    ├── Claude Code 세션 1 실행 중           │
│    └── Claude Code 세션 2 실행 중           │
│                                              │
│  📁 코드 저장소 (사내 Git 서버)              │
│                                              │
└──────────────────────────────────────────────┘
          ↑↑ 모든 연결은 아웃바운드 HTTPS
          
🌐 api.anthropic.com
  - 세션 큐 관리
  - 모델 추론
  - 이벤트 스트림
```

**동작 흐름**:
1. 개발자가 claude.ai에서 세션 시작 → **여러분 환경** 선택
2. 앤트로픽 서버가 요청을 **여러분 환경 큐**에 넣음
3. 사내 **Runner**가 큐에서 작업 수거
4. Runner가 저장소 체크아웃 후 Claude Code 프로세스 시작
5. 실행은 사내에서, 대화 스트림만 api.anthropic.com과 통신

> 🔐 **보안 핵심**: **앤트로픽이 여러분 네트워크에 연결하지 않아요.** 모든 연결은 여러분 서버에서 밖으로 나가는 아웃바운드(outbound) HTTPS만 씁니다.

---

## 핵심 용어

| 용어 | 설명 |
|---|---|
| **Environment** | 여러분 Runner 그룹의 이름. claude.ai 관리자 설정에서 생성 |
| **Runner** | 여러분 서버에서 실행되는 프로세스. 세션을 실제로 실행 |
| **Session** | 개발자가 시작한 Claude Code 작업 하나 |
| **Environment key** | Runner가 환경에 인증할 때 쓰는 비밀 키 (최초 1회 발급) |

---

## 설정 방법 (큰 그림)

```bash
# 1. 환경 생성 (claude.ai 관리자 설정)
# Admin Settings → Cloud Environments → "Allow self-hosted environments" ON
# → New Environment 생성 → Environment key 복사

# 2. Runner 설치 (여러분 서버에서)
npm install -g @anthropic-ai/claude-code
# 또는 Docker 이미지 사용

# 3. Runner 시작
claude-code-runner \
  --environment-key "your-key-here" \
  --capacity 5

# 4. 개발자가 세션 시작 시 환경 선택
# claude.ai/code → 세션 시작 → 환경 피커에서 "우리 회사 환경" 선택
```

> 📖 **자세한 설정**: [공식 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart) 참조

---

## 현재 제한 사항

- **Team·Enterprise 전용** (Pro·Max 미지원)
- **기본값은 꺼짐** — 조직 Owner가 직접 활성화해야 함
- **Zero Data Retention** 또는 **HIPAA** 설정 조직은 사용 불가
- **Claude Security·Code Review** 세션은 아직 자체 호스팅 미지원 (추후 지원 예정)
- 저장소는 **GitHub**만 지원 (GitLab·Bitbucket은 추후)

---

## 자체 호스팅 vs Anthropic 서버 비교

| 항목 | Anthropic 서버 (기본) | 자체 호스팅 |
|---|---|---|
| 설정 복잡도 | 없음 (바로 사용) | 높음 (인프라 운영 필요) |
| 사내 네트워크 접근 | ❌ 불가 | ✅ 가능 |
| 코드 체크아웃 위치 | Anthropic 서버 | 우리 서버 |
| 대화 내용 위치 | api.anthropic.com | api.anthropic.com (동일) |
| 운영 책임 | Anthropic | 우리 팀 |
| 맞춤 도구 설치 | ❌ 불가 | ✅ 가능 |

---

## 입문자를 위한 한 줄 정리

> 🎯 **일반 개발자·스타트업**: 그냥 Anthropic 서버 써요. 훨씬 간편하고 대부분의 경우 충분해요.
>
> 🏦 **금융·의료·대기업**: 규정 준수가 필요하거나 사내 네트워크 접근이 꼭 필요하면 자체 호스팅을 검토하세요. 단, IT 인프라팀과 함께해야 해요.

---

> 📌 **이 문서는** code.claude.com/docs/en/self-hosted-environments 공식 문서를 바탕으로 2026-10-21 자동 감시 루틴이 작성했습니다. `[공]`
