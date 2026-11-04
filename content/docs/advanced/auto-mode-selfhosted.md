---
title: "[공] Auto 모드 기본값 변경 + 셀프 호스팅 환경 베타"
description: "2026년 8월, Auto 모드가 Pro·Max·Team 기본값으로 바뀌었어요. 그리고 사내 인프라에서 Claude Code 세션을 돌릴 수 있는 Self-hosted environments가 공개 베타로 나왔어요"
tags: ["자동생성", "auto mode", "오토모드", "기본값", "self-hosted", "셀프호스팅", "보안", "엔터프라이즈"]
category: "advanced"
order: 11
lastUpdated: "2026-11-04"
---

<div class="note-star">
★ <strong>[공]</strong> Auto mode by default: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Aug 7, 2026 — Pro·Max·Team 기본값 변경)
<br />★ <strong>[공]</strong> Self-hosted environments: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Aug 6, 2026 — 공개 베타)
<br />★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 2026년 8월, 두 가지 큰 변화

| 변화 | 날짜 | 대상 | 핵심 |
|---|---|---|---|
| **Auto 모드 기본값** | Aug 7, 2026 | Pro·Max·Team | 묻지 않고 길게 일하되, 위험 명령은 감지 |
| **Self-hosted environments** | Aug 6, 2026 | Enterprise (베타) | 사내 서버에서 Claude Code 실행 |

---

## Auto 모드가 이제 기본값이에요

### 무슨 뜻인가요?

기존에는 Claude Code를 처음 켜면 **default 모드**로 시작했어요 — 뭘 할 때마다 "이거 해도 될까요?" 물어보는 모드.

이제 **Pro, Max, Team 플랜**에서는 처음부터 **auto 모드**로 시작해요.

> 🤝 **비유로 설명하면**: 처음 뽑은 인턴에게 "일단 다 물어보고 하세요"라고 했는데, 이제 회사 방침이 "믿고 맡기세요, 대신 안전 체크는 시스템이 해줘요"로 바뀐 거예요.

### Auto 모드의 특징

| 항목 | 내용 |
|---|---|
| 🏃 작업 방식 | 계속 일함 — 중간에 멈추고 물어보는 빈도 감소 |
| 🛡️ 안전 체크 | 백그라운드 classifier가 위험 명령 자동 감지 |
| ⏱️ 장시간 작업 | 몇 시간짜리 리팩토링, 대규모 마이그레이션 등 |
| 🎯 대상 플랜 | Pro, Max, Team |

### 이전 모드로 돌아가고 싶으면?

Auto 모드가 기본값이지만, 원하면 언제든 바꿀 수 있어요:

```bash
# 세션 중에 Shift+Tab으로 모드 순환
# default → acceptEdits → plan → auto 순서로 전환

# 또는 설정 파일에서 고정
# ~/.claude/settings.json
{
  "defaultMode": "default"  # auto 대신 default로 고정
}
```

> 💡 **팁**: Auto 모드에서도 위험 명령(파일 대량 삭제, 권한 변경 등)이 감지되면 여전히 확인을 요청해요. "완전 자동"은 아니에요.

### 비용 주의사항

Auto 모드는 더 길게 더 많이 일하므로 **API 사용량이 늘 수 있어요**. 소비 기반 플랜(consumption-based)을 쓰고 있다면 한도를 미리 설정해두는 게 좋아요.

```bash
# Claude Code에서 사용량 확인
/cost

# 예산 설정 (settings.json)
{
  "maxCostPerSession": 5.00  # 세션당 최대 $5
}
```

---

## Self-hosted Environments — 사내 인프라에서 실행

### 무엇인가요?

**Self-hosted environments**는 Claude Code 세션을 **여러분 회사의 서버** 위에서 돌릴 수 있는 기능이에요. 이제 공개 베타로 사용 가능해요.

> 🏢 **비유로 설명하면**: 클라우드 카페를 쓰는 대신 카페를 회사 건물 안에 차린 거예요. 메뉴는 같지만, 모든 주문 기록이 사내에만 남아요.

### 왜 필요한가요?

보안이 중요한 기업에서는 코드와 데이터가 외부 서버로 나가면 안 되는 경우가 있어요.

| 상황 | Self-hosted로 해결 |
|---|---|
| 금융·의료·정부 등 규제 산업 | 데이터가 사내 네트워크 밖으로 안 나감 |
| 내부 서비스 연결 | DB, 내부 API, 사내 도구에 직접 연결 |
| 보안 감사 필요 | 모든 에이전트 활동이 사내 로그로 기록 |
| 사내 MCP 서버 | 외부 접근 없이 내부 MCP 서버 활용 |

### 어떻게 작동하나요?

```
사용자의 Claude Code
     ↓
사내 네트워크
     ↓
회사 서버에서 Claude Code 세션 실행
     ↓
사내 DB, API, 코드베이스에 직접 접근
     ↓
결과만 사용자에게 반환
```

코드 자체가 외부로 나가지 않고 사내 환경에서 처리돼요.

### 현재 상태 (공개 베타)

> 📌 **공식 발표 기준**: Self-hosted environments는 현재 **공개 베타(public beta)** 단계예요. Enterprise 플랜 대상이며, 추가 설정과 인프라 구성이 필요해요.

관심 있으면 공식 문서를 확인하거나 Anthropic Enterprise 담당자에게 문의하세요.

---

## 두 기능의 관계

Auto 모드 기본값과 Self-hosted는 목표가 달라요:

| 항목 | Auto 모드 기본값 | Self-hosted |
|---|---|---|
| 목적 | 개인 생산성 ↑ | 기업 보안 ↑ |
| 대상 | Pro/Max/Team 개인 사용자 | Enterprise 기업 |
| 주요 이점 | 덜 물어봄 → 길게 일함 | 데이터가 사내에만 머묾 |

기업 환경에서는 **Self-hosted + Auto 모드**를 함께 쓸 수 있어요. 사내 서버에서 돌아가는 세션이 Auto 모드로 길게 작업을 처리하는 형태로요.
