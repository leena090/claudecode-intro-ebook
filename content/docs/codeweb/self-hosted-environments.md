---
title: "[공] 자체 호스팅 환경(Self-Hosted Environments) — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "클라우드 세션을 Anthropic 서버가 아닌 우리 회사 서버에서 실행할 수 있어요. 내부 네트워크 접근, 보안 정책 준수, 커스텀 툴 설치가 필요한 팀을 위한 Team/Enterprise 기능"
tags: ["자동생성", "자체호스팅", "셀프호스팅", "클라우드세션", "Team", "Enterprise", "보안", "내부네트워크"]
category: "codeweb"
order: 6
lastUpdated: "2026-09-27"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
<br />★ <strong>Team · Enterprise</strong> 플랜 전용. 공개 베타, 기본적으로 꺼져 있음.
<br />★ 개인 Pro · Max 사용자에게는 해당 없어요. "우리 회사 서버에서 돌리고 싶다"는 팀 담당자를 위한 기능.
</div>

## 자체 호스팅 환경이 뭔가요?

보통 Claude Code 클라우드 세션은 **Anthropic 서버**에서 실행돼요. 자체 호스팅 환경은 그 클라우드 세션을 **우리 회사 서버(인프라)에서** 실행하는 기능이에요.

> 🍱 **비유로 설명하면**: 배달 음식을 시킬 때 보통 배달 회사 기사님이 음식을 배달하는데, "우리 회사 직원이 직접 픽업해서 가져오고 싶다"는 것과 비슷해요. 음식(Claude의 AI 기능)은 같지만, 배달 경로(세션 실행 위치)가 내 회사 안에 있는 거예요.

---

## 어떤 팀에 필요한가요?

**대부분의 팀에는 필요 없어요.** Anthropic 호스팅이 훨씬 간편하고 관리 부담이 없거든요.

이런 상황에서만 자체 호스팅을 고려하세요:

| 이유 | 설명 |
|---|---|
| **내부 네트워크 접근** | 클라우드 세션이 회사 내부 DB, API, 서비스에 접근해야 할 때 |
| **커스텀 툴** | 컴파일러, 내부 CLI, 특수 SDK를 러너 이미지에 미리 설치해야 할 때 |
| **보안/컴플라이언스** | 코드 체크아웃·빌드 결과물이 회사 인프라 밖으로 나가면 안 될 때 |

> ⚠️ **주의**: 자체 호스팅은 "운영 부담"이 따릅니다. 러너 이미지 관리, 서버 운영, 네트워크 설정을 직접 해야 해요.

---

## 구성 요소 3가지

자체 호스팅 환경은 세 가지 개념으로 이루어져요.

| 구성 요소 | 역할 |
|---|---|
| **Environment(환경)** | 회사가 claude.ai 관리자 설정에서 만드는 "목적지". 러너들의 그룹. |
| **Runner(러너)** | 실제 세션을 실행하는 프로그램. 회사 서버에서 직접 실행. |
| **Session(세션)** | 개발자가 시작한 하나의 Claude Code 작업. |

> 🍱 **비유**: 환경은 "우리 회사 배달 센터(주소)", 러너는 "배달원", 세션은 "주문 건"이에요.

---

## 어떻게 작동하나요?

```
[개발자가 claude.ai에서 세션 시작 + 환경 선택]
        ↓
[Anthropic 제어 서버가 세션을 환경 큐에 배치]
        ↓
[회사 러너가 큐에서 세션을 가져감]
        ↓
[러너가 저장소 클론 + Claude Code 프로세스 시작]
        ↓
[세션이 내부 네트워크 내에서 실행]
        ↓
[모델 추론(AI 처리)은 여전히 Anthropic API로]
```

**중요한 점**: Anthropic이 회사 네트워크 안으로 접속하지 않아요. 모든 연결은 **회사 서버 → Anthropic API** 방향으로만 나가요.

---

## 무엇이 회사 서버에 남나요?

| 회사 서버에 남는 것 | Anthropic에 가는 것 |
|---|---|
| 저장소 체크아웃 파일 | 대화 내용 (프롬프트·응답) |
| 빌드 결과물 | 모델 추론 요청 |
| 세션 중 생성/수정한 파일 | 세션 트랜스크립트 (이어받기용) |
| 회사 내부 환경 변수 | - |

> ⚠️ **주의 (공식 발표 기준)**: 대화 내용과 AI 추론은 여전히 `api.anthropic.com`을 통해요. 자체 호스팅은 "세션 실행 위치"를 옮기는 것이지, AI 처리를 완전히 내부화하는 게 아니에요.

---

## 제약 사항

- **플랜**: Team · Enterprise만 지원
- **기본값**: 비활성화 (관리자가 설정에서 활성화해야 함)
- **ZDR(Zero Data Retention) 고객**: 사용 불가
- **모델 추론**: Amazon Bedrock, Google Vertex, Microsoft Foundry 경유 불가 (Anthropic API만)
- **저장소**: GitHub만 지원 (2026-09 기준)

---

## 시작하려면

1. **Admin 설정 접근**: `claude.ai/admin-settings/cloud-environments`
2. **Self-hosted environments 활성화**
3. **Environment 생성** → 환경 키(environment key) 발급
4. **러너 배포**: 서버에서 러너 프로그램 실행 (환경 키로 인증)
5. **테스트**: 개발자가 세션 시작 시 환경 선택

자세한 설정은 [공식 Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)를 참고하세요.

---

## 관련 문서 링크

| 문서 | 내용 |
|---|---|
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 처음 설정 가이드 |
| [Deploy to production](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 보안 강화, 네트워크 설정, Kubernetes |
| [Configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 세션 커스터마이즈, on-demand 러너 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | CLI 플래그, 환경 변수 전체 목록 |
