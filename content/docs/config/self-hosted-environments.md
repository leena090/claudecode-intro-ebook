---
title: "[공] Self-hosted Environments — 우리 서버에서 Claude Code 실행하기"
description: "Self-hosted environments는 Claude Code 클라우드 세션을 Anthropic 서버 대신 내 회사 인프라에서 실행하는 기능입니다. Team·Enterprise 퍼블릭 베타."
tags: ["자동생성", "셀프호스팅", "엔터프라이즈", "보안", "인프라", "클라우드세션"]
category: "config"
order: 10
lastUpdated: "2026-10-03"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com 공식 문서</a> 내용을 한국어로 정리한 것입니다.<br />
★ Self-hosted environments는 현재 <strong>Team·Enterprise 플랜 퍼블릭 베타</strong>이며 기본적으로 꺼져 있습니다.<br />
★ Pro·Max 플랜은 해당 없음. 원격 작업이 필요한 개인 사용자는 <a href="/docs/en/remote-control">Remote Control</a>을 참고하세요.
</div>

## 이게 왜 필요한가요?

> 🍱 **비유로 설명하면**: 기존에는 클로드가 **Anthropic 데이터센터에 있는 컴퓨터**에서 코드를 실행했어요. Self-hosted environments를 쓰면 클로드가 **우리 회사 서버실에 있는 컴퓨터**에서 실행해요. 데이터가 회사 밖으로 나가지 않죠.

Claude Code 클라우드 세션은 기본적으로 Anthropic 인프라에서 실행됩니다. 하지만 보안·규정 준수·내부 네트워크 접근이 필요한 기업은 **자체 서버에서 세션을 실행**하고 싶을 수 있어요.

---

## 주요 혜택

| 혜택 | 설명 |
|---|---|
| 🔒 **내부 네트워크 접근** | VPN 없이 내부 DB·API·레지스트리에 직접 접근 |
| 🛠️ **맞춤 도구** | 컴파일러, 내부 CLI를 미리 설치한 이미지 사용 |
| 📋 **규정 준수** | 코드 체크아웃·빌드 아티팩트가 내 서버에 남음 |

> ⚠️ **주의**: 대화 내용(프롬프트·응답)은 여전히 `api.anthropic.com`으로 전송됩니다. 코드 자체만 내부에 남는 것이에요.

---

## 구조 이해하기

```
[개발자] → claude.ai에서 세션 시작
    ↓ 환경 선택
[Anthropic 제어 플레인] → 세션을 환경 큐에 배치
    ↓
[내 회사 Runner (내부 서버)] → 세션 처리
    ├── 저장소 클론
    ├── Claude Code 프로세스 시작
    └── 작업 실행 (내부 네트워크 접근 가능!)
    ↓
api.anthropic.com ← 대화 스트림·모델 추론 (아웃바운드만)
```

**Anthropic에서 내 서버로의 인바운드 연결은 없습니다.** 모든 연결은 내 서버에서 외부로 나가는 아웃바운드 HTTPS입니다.

---

## 핵심 용어

| 용어 | 설명 |
|---|---|
| **Environment (환경)** | claude.ai 어드민에서 만드는 이름 있는 그룹. 세션은 환경으로 라우팅됨 |
| **Runner (러너)** | 내 서버에서 실행하는 프로그램. 세션을 받아서 실행 |
| **Session (세션)** | 개발자가 시작한 하나의 Claude Code 작업 |

---

## 시작 조건

1. **플랜**: Team 또는 Enterprise 조직
2. **활성화**: claude.ai 어드민 → Cloud environments → **Allow self-hosted environments** 켜기
3. **Zero Data Retention 조직**: 사용 불가

---

## 어떤 표면에서 작동하나요?

✅ 지원:
- claude.ai/code
- 모바일·데스크톱 앱
- Scheduled routines
- 터미널에서 `claude --cloud`

❌ 아직 미지원:
- Claude Security 세션
- Code Review 세션

---

## 실제로 필요한가요?

대부분의 팀은 **Anthropic 호스팅 환경으로 충분**합니다. Self-hosting은 다음 상황일 때만 고려하세요:

- 클라우드 세션이 내부 서비스에 접근해야 함
- 특정 규정 준수 요건으로 코드가 내부에 있어야 함
- 미리 설치된 전용 개발 도구가 필요함

> 개인 개발자나 Pro·Max 사용자는 [Remote Control](/docs/en/remote-control)로 비슷한 효과를 낼 수 있어요.

---

## 퀵스타트 링크

- [Self-hosted environments 공식 문서 →](https://code.claude.com/docs/en/self-hosted-environments)
- [퀵스타트 (러너 설치 및 첫 세션) →](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [프로덕션 배포 가이드 →](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [설정 커스터마이즈 →](https://code.claude.com/docs/en/self-hosted-environments-configuration)
