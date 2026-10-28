---
title: "[공] Self-hosted Environments — 내 서버에서 직접 Claude Code 실행하기"
description: "회사 내부 네트워크나 자체 인프라 위에서 Claude Code 세션을 실행하는 기능이에요. 외부 클라우드로 코드가 나가지 않아야 하는 기업에 적합합니다 (공개 베타)"
tags: ["자동생성", "self-hosted", "자체호스팅", "엔터프라이즈", "보안", "인프라", "공개베타"]
category: "advanced"
order: 28
lastUpdated: "2026-10-28"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> 마케팅 발표: Aug 6, 2026 (공개 베타 출시)<br />
👉 현재 <strong>공개 베타(Public Beta)</strong> 상태 — 세부 기능은 변경될 수 있어요
</div>

## Self-hosted Environments란?

**Self-hosted Environments(자체 호스팅 환경)** 는 Claude Code의 실행 환경을 **내 회사 서버·클라우드 계정 안에 직접 구성**하는 기능이에요.

> 🍱 **비유**: 보통은 커피를 카페(Anthropic 클라우드)에서 마시는데, 이 기능은 카페의 커피 머신을 우리 사무실에 가져와 직접 운영하는 것과 같아요. 재료(코드·데이터)가 외부 카페로 나가지 않아요.

---

## 왜 필요한가요?

| 상황 | 이유 |
|---|---|
| 금융·의료·법률 코드베이스 | 코드가 외부 서버에 전달되지 않아야 함 |
| 내부 서비스와 연동 필요 | DB, API 서버가 내부 망에만 있을 때 |
| 보안 정책이 엄격한 기업 | 데이터 국경(data residency) 요건 |
| 대규모 팀 동시 실행 | 자체 컴퓨팅 자원 최대 활용 |

---

## 어떤 구성이 가능한가요?

공식 문서 기준으로 다음 6가지 페이지로 설정 과정이 세분화됐어요.

| 단계 | 문서 | 내용 |
|---|---|---|
| 1 | `self-hosted-environments` | 개요 및 아키텍처 |
| 2 | `self-hosted-environments-quickstart` | 빠른 시작 가이드 |
| 3 | `self-hosted-environments-deploy` | 실제 배포 방법 |
| 4 | `self-hosted-environments-configuration` | 세부 설정 |
| 5 | `self-hosted-environments-testing` | 테스트 방법 |
| 6 | `self-hosted-environments-reference` | 레퍼런스 |
| 7 | `self-hosted-environments-identity` | 인증·ID 관리 |

---

## 기존 Sandbox vs Self-hosted 차이

| | **Cloud Sandbox** | **Self-hosted** |
|---|---|---|
| 실행 위치 | Anthropic 클라우드 | **내 인프라** |
| 코드 전송 | Anthropic 서버로 전송 | **외부 전송 없음** |
| 설정 복잡도 | 간단 | 복잡 (직접 운영) |
| 보안 요건 충족 | 일반적 | **엄격한 보안 환경** |
| 내부 서비스 접근 | 제한적 | **자유로움** |

---

## 어떻게 접근하나요?

**일반 개인 사용자** — 이 기능은 지금 당장 필요 없어요. Anthropic 클라우드로 충분해요.

**기업 사용자** — 보안 정책상 코드가 외부로 나가면 안 되는 경우에만 검토하세요.

```
공식 빠른 시작:
https://code.claude.com/docs/en/self-hosted-environments-quickstart
```

> ⚠️ **공개 베타**: 2026년 8월 6일 기준 공개 베타로 출시됐어요. 세부 요건·API·비용은 정식 출시 전에 바뀔 수 있어요. 도입 검토 시 최신 공식 문서를 참조하세요.

---

## 관련 기능

- **Cloud Environments** (`cloud-environments`): AWS·GCP 같은 클라우드 제공자에서 격리된 환경 실행
- **Sandbox Environments** (`sandbox-environments`): 코드 실행 격리 (기존 기능)
- **Devcontainer** (`devcontainer`): Dev container 기반 격리 환경
