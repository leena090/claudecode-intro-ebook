---
title: "[공] Auto 모드 기본값 전환 + 셀프호스팅 환경 베타 (2026년 8월)"
description: "Auto 모드가 Pro·Max·Team의 기본값이 됐어요. 그리고 이제 Claude Code를 내 서버에서 직접 돌릴 수도 있어요"
tags: ["자동생성", "auto모드", "오토모드", "기본값", "셀프호스팅", "self-hosted", "보안", "내부망"]
category: "next"
order: 19
lastUpdated: "2026-10-25"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 2026년 8월 7일부터 <strong>auto 모드가 기본</strong>이에요. Pro·Max·Team 사용자는 별도 설정 없이 auto로 시작해요.
<br />★ <strong>셀프호스팅 공개 베타</strong> — 2026년 8월 6일부터 내 서버에서 Claude Code 세션을 돌릴 수 있어요. 기업 내부망 사용 가능.
<br />★ <strong>공식 문서</strong>: code.claude.com/docs/en/auto-mode-config | code.claude.com/docs/en/self-hosted-environments
</div>

---

## 1부: Auto 모드가 기본값이 됐어요

### 무슨 변화인가요?

이전에는 Claude Code를 켜면 **default 모드**(매번 허락 받는 모드)가 기본이었어요. 이제는 **auto 모드**가 기본이에요.

> 🤖 **비유로 설명하면**: 
> - 이전: "커피 한 잔 내릴 때도 물어보는 새 인턴"
> - 이제: "할 일은 알아서 하되, 위험한 건 알림 주는 경력직"

### 어떤 플랜에서 바뀌나요?

| 플랜 | Auto 기본값 | 비고 |
|---|---|---|
| **Pro** | ✅ 기본 | 2026-08-07부터 |
| **Max** | ✅ 기본 | 2026-08-07부터 |
| **Team** | ✅ 기본 | 2026-08-07부터 |
| Enterprise | 관리자 설정에 따라 다름 | 별도 안내 |

### Auto 모드가 뭐가 좋아요?

- **더 오래 일해요**: 매번 허락 안 받아도 되니까 긴 작업이 중간에 멈추지 않아요
- **안전 체크가 내장되어 있어요**: "위험할 수 있는 명령"은 백그라운드 안전 분류기가 잡아줘요
- **효율이 올라가요**: 멈춤 없이 흐르는 자동화 경험

> ⚠️ **중요**: Auto 모드도 **보호 경로**(.git, .claude 등)는 자동으로 건드리지 않아요. 완전 방목이 아니에요.

### Auto 모드를 끄고 싶다면

`Shift+Tab`으로 언제든 모드를 바꿀 수 있어요:

```
default → acceptEdits → plan → auto (순환)
```

또는 CLAUDE.md에서 설정할 수도 있어요:

```markdown
# CLAUDE.md
permissionMode: default
```

---

## 2부: 셀프호스팅 환경 (Self-Hosted Environments)

### 이게 뭔가요?

Claude Code 세션을 **Anthropic 서버가 아닌 내 서버에서** 돌리는 기능이에요.

> 🏠 **비유로 설명하면**: 카페에서 커피를 마시는 대신(클라우드), **우리 집 부엌에서 직접 커피를 내리는 것**(셀프호스팅)이에요. 더 비공개적이고, 내 식대로 할 수 있어요.

### 왜 필요한가요?

주로 **기업 환경**에서 필요해요:

| 상황 | 셀프호스팅 이유 |
|---|---|
| 금융·의료·국방 기업 | 코드가 외부 서버에 나가면 안 되는 규정 |
| 내부망(인트라넷) 서비스 | 클라우드에서 접근 불가한 내부 서비스와 연동 |
| 보안 컴플라이언스 | 데이터가 회사 네트워크 밖으로 나가면 안 됨 |
| 대규모 엔터프라이즈 | 자체 인프라에서 비용·성능 최적화 |

### 지원 환경

공식 문서 기준으로 7개 가이드 페이지가 새로 생겼어요:
- `self-hosted-environments` — 개요
- `self-hosted-environments-quickstart` — 빠른 시작
- `self-hosted-environments-deploy` — 배포
- `self-hosted-environments-configuration` — 설정
- `self-hosted-environments-testing` — 테스트
- `self-hosted-environments-reference` — 레퍼런스
- `self-hosted-environments-identity` — 사용자 인증

### 일반 사용자라면?

솔직히 **개인 입문자에게는 필요 없는 기능**이에요. Claude Code가 이미 안전하게 Anthropic 서버를 통해 동작하고 있어요.

셀프호스팅은 **IT 담당자나 개발팀장**이 조직 전체에 Claude Code를 도입할 때 고려하는 옵션이에요.

> 💡 **현재 상태**: 2026년 8월 6일 **공개 베타** 시작. 정식 출시는 추후 발표 예정. (공식 발표 기준)

---

## 8월 업데이트 한눈에 요약

| 날짜 | 업데이트 | 누구에게? |
|---|---|---|
| 2026-08-06 | Self-hosted environments 공개 베타 | 기업 IT팀 |
| 2026-08-07 | Auto mode Pro·Max·Team 기본값 전환 | 모든 구독자 |
