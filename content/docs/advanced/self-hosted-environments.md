---
title: "[공] 자체 호스팅 환경(Self-Hosted Environments) — 내 서버에서 Claude Code 실행하기"
description: "회사 네트워크 안에서 Claude Code 세션을 직접 호스팅할 수 있는 Self-Hosted Environments 기능 소개 (2026년 8월 공개 베타)"
tags: ["자동생성", "selfhosted", "보안", "엔터프라이즈", "인프라", "베타"]
category: "advanced"
order: 27
lastUpdated: "2026-10-02"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> (Aug 7, 2026 공개 베타)
<br />★ <strong>[공]</strong> 마케팅 발표: <a href="https://claude.com/claude-code">claude.com/claude-code</a> "Self-hosted environments" Blog Aug 7, 2026
</div>

## 자체 호스팅이 뭔가요?

비유로 설명해볼게요.

기존 Claude Code 클라우드 환경은 **커피숍 공용 와이파이**예요. 빠르고 편리하지만, 회사 내부 서버 같은 비공개 자원에는 직접 접근하기 어려워요.

**자체 호스팅 환경(Self-Hosted Environments)**은 **회사 내부에 전용 Claude Code 서버를 설치**하는 거예요. 마치 회사 사무실에 자체 와이파이 공유기를 두는 것처럼요.

이렇게 하면:
- 🏠 Claude Code 세션이 내 네트워크 안에서 실행돼요
- 🔒 내부 데이터베이스, 내부 API에 직접 접근 가능해요
- 🛡️ 코드와 데이터가 외부로 나가지 않아요

---

## 언제 필요할까요?

| 상황 | 설명 |
|---|---|
| 금융·의료 규제 환경 | 데이터가 회사 외부로 나가면 안 되는 경우 |
| 내부 전용 서비스 | 외부에서 접근 불가한 내부 API나 DB 활용 시 |
| 보안 정책 | 클라우드 SaaS 사용 제한이 있는 기업 |
| 지연 시간 최소화 | 내부 서비스와 물리적으로 가까이 있어야 할 때 |

---

## 관련 공식 문서 목록

2026년 8월 공개 베타와 함께 여러 문서가 동시에 추가됐어요:

| 문서 | 내용 |
|---|---|
| `self-hosted-environments` | 개요 및 소개 |
| `self-hosted-environments-quickstart` | 빠른 시작 가이드 |
| `self-hosted-environments-deploy` | 배포 방법 |
| `self-hosted-environments-configuration` | 설정 상세 |
| `self-hosted-environments-testing` | 테스트 방법 |
| `self-hosted-environments-reference` | 레퍼런스 문서 |
| `self-hosted-environments-identity` | 인증/신원 관리 |

→ 전체 문서: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

---

## 기존 샌드박스 환경과의 차이점

이미 소개된 **Sandbox Environments** (`content/docs/advanced/sandbox-environments.md`)는 Claude Code가 코드를 실행할 때 격리된 컨테이너에서 실행하는 기능이에요.

**Self-Hosted Environments**는 그와 달리:

| 구분 | Sandbox Environments | Self-Hosted Environments |
|---|---|---|
| 목적 | 코드 실행 격리 (보안) | 세션 전체를 내 인프라에서 실행 |
| 위치 | Anthropic 클라우드 | 내 회사 서버/클라우드 |
| 대상 | 모든 사용자 | 주로 기업 |
| 데이터 흐름 | 클라우드로 일부 전송 | 완전히 내부 유지 가능 |

---

## 입문자에게 드리는 조언

개인 개발자나 소규모 팀이라면 지금 당장 필요한 기능은 아니에요. 하지만 회사에서 Claude Code 도입을 검토 중이고 IT 보안팀에서 "데이터가 외부로 나가면 안 된다"는 조건이 있다면, 이 기능이 해결책이 될 수 있어요.

공식 베타이므로 아직 변경 사항이 있을 수 있어요 (추정).

> ⚠️ 2026년 8월 공개 베타 기준. 세부 사양은 공식 문서를 반드시 확인하세요.
