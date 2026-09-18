---
title: "[공] 자체 호스팅 환경 — 우리 회사 서버에서 Claude Code 실행하기"
description: "클라우드 세션을 회사 내부 인프라에서 실행하는 Self-Hosted Environments 기능. Team·Enterprise 플랜 공개 베타. 내부망 접근, 사용자 정의 툴링, 보안 컴플라이언스 지원"
tags: ["자동생성", "자체호스팅", "Enterprise", "Team", "보안", "인프라", "클라우드세션", "SelfHosted"]
category: "advanced"
order: 27
lastUpdated: "2026-09-18"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ Team·Enterprise 플랜 공개 베타 (기본 비활성화, 관리자가 직접 활성화 필요)
</div>

> ⚠️ **이 기능은 Team/Enterprise 플랜 전용입니다.** Pro/Max 개인 플랜에서는 사용할 수 없어요.

---

## 자체 호스팅 환경이란?

> 🍱 **비유로 설명하면**: 보통 배달 음식은 외부 배달부가 가져다줘요(Anthropic 서버 실행). 하지만 규모가 큰 식당은 자체 배달 기사(우리 회사 서버)를 두고 싶을 수 있어요. 음식 조리는 외부(Claude AI 추론)에서 하지만, **배달은 우리 집 마당을 통해** 하는 방식이에요.

**Self-Hosted Environments**는 Claude Code의 클라우드 세션을 **Anthropic 서버가 아닌 우리 회사 인프라**에서 실행하는 기능이에요.

### 클라우드 세션이란?

Claude Code는 두 가지 방식으로 실행돼요:

| 방식 | 설명 |
|---|---|
| **로컬 세션** | 개발자 컴퓨터에서 직접 실행 (`claude` CLI, IDE 확장) |
| **클라우드 세션** | Anthropic 또는 우리 서버에서 실행 (claude.ai 웹, 모바일 앱, `claude --cloud`, 예약 루틴) |

자체 호스팅 환경은 이 **클라우드 세션을 우리 서버에서** 돌리는 거예요.

---

## 왜 자체 호스팅이 필요해요?

대부분의 팀은 **Anthropic이 호스팅하는 기본 환경으로 충분**해요. 하지만 다음 상황에서는 자체 호스팅을 고려해볼 만해요:

| 필요 사항 | 자체 호스팅의 이점 |
|---|---|
| 🔒 **내부망 접근** | 공개 인터넷 노출 없이 내부 DB, 서비스, 레지스트리에 바로 접근 |
| 🛠️ **사용자 정의 툴링** | 컴파일러, 내부 SDK, 사내 CLI를 이미지에 설치해 세션 시작 즉시 준비 |
| 📋 **컴플라이언스** | 코드 체크아웃, 빌드 산출물이 우리가 관리하는 인프라에만 존재 |

> ⚠️ **단, 대화 내용(프롬프트·응답·도구 결과)은 여전히 AI 추론을 위해 `api.anthropic.com`으로 전송됩니다.** 완전한 데이터 격리가 아님을 꼭 인지하세요.

---

## 어떻게 작동해요?

```
[개발자] → [claude.ai / 모바일 앱] → [Anthropic 제어 플레인]
                                              ↓
                                    [우리 회사 환경 큐]
                                              ↓
                                    [우리 회사 Runner]
                                              ↓
                             [git 클론 + Claude Code 프로세스 실행]
                             [우리 내부망에서 내부 서비스 접근 가능]
```

세 가지 구성요소:

| 구성요소 | 설명 |
|---|---|
| **환경(Environment)** | claude.ai 관리자 설정에서 생성하는 "목적지" 이름. Runner들의 그룹 |
| **러너(Runner)** | 우리 서버에서 실행하는 프로그램. 세션을 실제로 처리함 |
| **세션(Session)** | 개발자가 시작한 하나의 Claude Code 작업 |

### 보안 포인트

- **Anthropic이 우리 네트워크에 접속하지 않아요** — 모든 연결은 우리 서버에서 밖으로 나가는 방향(아웃바운드)
- Runner가 `api.anthropic.com`에 폴링(polling)해서 작업을 가져오는 방식

---

## 누가 사용할 수 있어요?

```
✅ Team 플랜 조직
✅ Enterprise 플랜 조직

❌ Pro / Max 개인 플랜
❌ Zero Data Retention(ZDR) 활성화 조직
```

> 💡 **개인이 원격 서버에서 세션을 이어가고 싶다면**: [Remote Control](https://code.claude.com/docs/en/remote-control) 기능을 사용하세요. Pro·Max 플랜에서도 사용 가능해요.

---

## 시작하는 방법 (요약)

자세한 설정은 공식 문서를 참조하세요. 큰 흐름은:

1. **관리자**: claude.ai 관리자 설정 → Cloud environments → "Allow self-hosted environments" 활성화
2. **관리자**: 환경(Environment) 생성 → 환경 키(Environment Key) 발급
3. **인프라 담당자**: 우리 서버에 Claude Code 설치 + Runner 실행
4. **개발자**: 세션 시작 시 환경 선택 화면에서 우리 회사 환경 선택

```bash
# Runner 실행 예시 (간략)
claude runner start --env-id <환경ID> --env-key <환경키>

# 특정 환경 지정해서 클라우드 세션 시작
claude --cloud --environment <환경이름>
```

---

## 제한 사항

| 제한 | 내용 |
|---|---|
| AI 추론 경로 | Bedrock, Vertex AI, Microsoft Foundry, LLM 게이트웨이로 **추론 우회 불가** |
| Git 저장소 | 현재 **GitHub**에서만 체크아웃 가능 |
| 일부 기능 미지원 | Claude Security, Code Review 세션은 아직 자체 호스팅 환경으로 미지원 |
| ZDR | Zero Data Retention 활성화 조직은 사용 불가 |

---

## 관련 공식 문서

| 문서 | 설명 |
|---|---|
| [Self-Hosted Environments](https://code.claude.com/docs/en/self-hosted-environments) | 개요 및 개념 설명 |
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [Deploy to Production](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 보안 강화, 네트워크, Kubernetes/Compose 레시피 |
| [Customize Sessions](https://code.claude.com/docs/en/self-hosted-environments-configuration) | MCP 서버, 권한, 라이프사이클 훅 설정 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그, 환경 변수 전체 목록 |
