---
title: "[공] 자체 호스팅 환경(Self-hosted Environments) — 우리 회사 서버에서 클로드 돌리기"
description: "Team·Enterprise 팀이 내부 네트워크 안에서 Claude Code 클라우드 세션을 직접 실행하는 방법"
tags: ["자동생성", "self-hosted", "자체호스팅", "enterprise", "보안", "네트워크", "인프라"]
category: "advanced"
order: 28
lastUpdated: "2026-09-21"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/self-hosted-environments 공식 문서 기준 (2026-09-21)<br />
★ <strong>퍼블릭 베타</strong> — Team·Enterprise 플랜 전용. 기본값 꺼져 있음. 관리자가 활성화 필요.<br />
★ 2026년 8월 7일 공식 발표 (Blog: "Self-hosted environments: Now in public beta")
</div>

## 자체 호스팅 환경이란?

> 🏢 **비유로 설명하면**: 보통 Claude Code 클라우드 세션은 Anthropic 서버에서 실행돼요. 자체 호스팅 환경은 마치 **회사 건물 안에 AI 작업실을 따로 만드는** 것이에요. 클로드가 우리 내부 네트워크 안에서 실행되니까, 외부에서 접근할 수 없는 내부 시스템에도 바로 연결할 수 있어요.

**언제 필요한가요?**

| 상황 | 이유 |
|---|---|
| 내부 데이터베이스·API 접근 필요 | 공용 인터넷에 노출 불가 |
| VPN 뒤에 있는 서비스 사용 | 외부에서 접근 불가 |
| 코드·결과물이 사외로 나가면 안 됨 | 컴플라이언스·규정 |
| 회사 전용 컴파일러·SDK 미리 설치 필요 | 커스텀 빌드 환경 |

> 💡 **대부분의 팀은 Anthropic 호스팅으로 충분해요.** 복잡한 네트워크 요건, 규정 준수 요건이 있는 기업 팀만 자체 호스팅이 필요해요.

---

## 구조 이해하기

```
[개발자] → claude.ai / 앱 / 터미널에서 세션 시작
              ↓
[Anthropic 컨트롤 플레인] → 큐에 세션 추가
              ↓ (아웃바운드 HTTPS만)
[우리 회사 네트워크]
  └── [Runner 프로세스] → 세션 수신 → GitHub 클론 → Claude Code 실행
        ↑                               ↑
    api.anthropic.com            내부 서비스·DB·레지스트리
```

**핵심 포인트:**
- Anthropic이 우리 네트워크 **안으로** 들어오지 않아요
- 모든 연결은 **아웃바운드**(밖으로 나가는)
- 저장소 체크아웃·빌드 아티팩트는 우리 서버에 남음
- 모델 추론(AI 응답 생성)은 여전히 api.anthropic.com 사용

---

## 3가지 핵심 개념

| 개념 | 설명 |
|---|---|
| **Environment (환경)** | Runner 그룹에 붙이는 이름. claude.ai 관리자 설정에서 생성 |
| **Runner (러너)** | 우리 서버에서 돌아가는 프로세스. 세션을 실제 실행 |
| **Session (세션)** | 개발자가 시작한 Claude Code 작업 하나 |

> 🚌 **비유로 설명하면**: Environment는 **버스 노선**이고, Runner는 **버스**예요. 개발자가 "자체 호스팅 노선 탑승"을 선택하면, 우리 회사 버스 중 여유 있는 게 손님을 태워요.

---

## 플랜별 가용 여부

| 플랜 | 가용 여부 |
|---|---|
| Pro / Max | ❌ 미지원 |
| **Team** | ✅ 퍼블릭 베타 |
| **Enterprise** | ✅ 퍼블릭 베타 |
| Zero Data Retention 조직 | ❌ 미지원 |

> ⚙️ 관리자가 **claude.ai 관리자 설정 → Cloud environments → "Allow self-hosted environments"** 활성화 필요

---

## 자체 호스팅 vs Anthropic 호스팅 비교

| 항목 | Anthropic 호스팅 | 자체 호스팅 |
|---|---|---|
| **설정 필요** | 없음 | 러너 배포·관리 필요 |
| **내부 네트워크 접근** | ❌ | ✅ |
| **코드·아티팩트 위치** | Anthropic 인프라 | 우리 서버 |
| **모델 추론** | Anthropic API | Anthropic API (동일) |
| **커스텀 도구 설치** | 제한적 | ✅ 완전 커스터마이즈 |
| **운영 부담** | 없음 | 러너 이미지·플릿 관리 |
| **대상** | 대부분 팀 | 엄격한 보안·규정 팀 |

---

## 실제 적용 방법 (요약)

자세한 설정은 공식 문서를 참고하세요. 큰 흐름은 이래요:

1. **관리자 설정에서 환경(Environment) 생성** → 환경 키(secret) 발급
2. **회사 서버에 Runner 배포** — Kubernetes·Docker Compose 사용 가능
   ```bash
   # 러너 실행 예시 (단순화)
   claude-runner start \
     --environment-id <env-id> \
     --environment-secret <env-secret> \
     --capacity 4
   ```
3. **개발자가 세션 시작 시 환경 선택** — 드롭다운에서 우리 회사 환경 선택
4. **세션 실행 확인** — 러너 로그에서 세션 수신 확인

공식 문서 단계별 가이드: [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)

---

## 보안 측면 이해하기

**우리 서버에 남는 것:**
- 저장소 체크아웃 내용
- 빌드 아티팩트
- 세션이 생성·수정한 파일

**Anthropic 서버로 가는 것:**
- 대화 내용(프롬프트·응답·툴 결과) — 모델 추론용
- 세션 이벤트 스트림 — 개발자 화면에 표시용

> ⚠️ **중요**: 자체 호스팅을 해도 **AI 모델이 보는 내용**은 여전히 Anthropic API를 통과해요. 코드 자체가 AI에게 보이지 않길 원한다면 별도로 검토가 필요해요.

---

## 입문자를 위한 요약

- 🏠 **일반 사용자**: 신경 안 써도 돼요. Anthropic 호스팅이 더 편하고 간단해요.
- 🏢 **IT 담당자·보안 팀**: 내부 네트워크 접근이 필요하거나 규정 때문에 외부 서버를 못 쓴다면, Team·Enterprise 플랜에서 베타 신청 가능해요.
- 🔧 **운영 팀**: 자체 호스팅은 CI/CD처럼 러너 이미지 관리와 플릿 운영이 필요해요.

> 📌 공식 문서 링크: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
