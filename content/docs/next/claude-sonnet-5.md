---
title: "[블] Claude Sonnet 5 출시 — 코딩·에이전트·업무에서 최상위 성능"
description: "2026년 6월 30일 발표된 Claude Sonnet 5는 Sonnet 계열 최초 프론티어 성능 모델로, 대규모 코딩·에이전트 작업에 최적화됐어요"
tags: ["자동생성", "모델", "sonnet5", "claude-sonnet-5", "2026-06", "신모델"]
category: "next"
order: 14
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Anthropic 공식 블로그 발표 (2026-06-30) <code>[블]</code><br />
★ 공식 발표 기준 정보. 세부 성능 수치 등 일부는 추정이 포함될 수 있어요.<br />
★ 모델 ID: <code>claude-sonnet-5</code> (추정 — 공식 확인 전)
</div>

---

## Claude Sonnet 5가 뭔가요?

2026년 6월 30일, Anthropic이 **Claude Sonnet 5**를 발표했어요. 공식 발표 문구는:

> **"Sonnet 5 delivers frontier performance across coding, agents, and professional work at scale."**
> (Sonnet 5는 코딩, 에이전트, 대규모 전문 업무에서 프론티어 수준의 성능을 제공합니다.)

> 🍱 **비유**: 자동차로 치면 기존 Sonnet이 "연비 좋고 합리적인 중형차"였다면, Sonnet 5는 "슈퍼카 성능을 가진 중형차"예요. 가격 부담은 덜하면서 성능은 최상위 수준이에요.

---

## Claude 모델 계열 한눈에 보기

| 모델 | 특징 | 주요 용도 |
|---|---|---|
| **Claude Sonnet 5** ← 신규 | 프론티어 성능 + 대규모 확장성 | 코딩, 에이전트, 업무 자동화 |
| Claude Opus 4.8 | 최고급 추론 | 복잡한 분석, 심층 사고 |
| Claude Sonnet 4.6 | 균형형 (기존 기본값) | 일반 코딩, 대화 |
| Claude Haiku 4.5 | 경량·초고속 | 빠른 응답, 대량 처리 |
| Claude Fable 5 | 최상위 티어 (수출통제 해제 후 재배포 중) | 최고난도 작업 |

---

## 어떤 점이 달라졌나요?

공식 발표에 따르면 Sonnet 5는 세 가지 영역에서 **프론티어 성능**을 제공해요:

### 1. 코딩 (Coding)
- 복잡한 코드 작성·디버깅·리팩토링
- 대형 코드베이스 이해 및 수정

### 2. 에이전트 (Agents)
- 여러 도구를 연속으로 사용하는 멀티스텝 작업
- Claude Code의 자동화 워크플로에 최적화

### 3. 대규모 전문 업무 (Professional Work at Scale)
- 기업 환경에서의 대량 처리
- 팀·엔터프라이즈 플랜에서의 고부하 작업

---

## Claude Code에서 어떻게 쓰나요?

Claude Code에서 모델 전환은 간단해요:

```bash
# CLI에서 모델 지정
claude --model claude-sonnet-5

# 세션 내 명령어로 전환
/model claude-sonnet-5

# 설정 파일로 기본값 고정
/config model=claude-sonnet-5
```

<div class="note-circle">
○ 모델 ID (<code>claude-sonnet-5</code>)는 공식 확인 전 추정입니다<br />
○ Sonnet 5 가격·토큰 정보는 공식 발표 후 별도 업데이트 예정<br />
○ 공식 블로그: <a href="https://www.anthropic.com/news" target="_blank">anthropic.com/news</a> (2026-06-30)
</div>

---

## 마케팅 페이지 반영 현황

2026-07-03 기준으로 Claude Code 마케팅 페이지(claude.com/claude-code)에는 Sonnet 5가 아직 명시적으로 반영되지 않았어요. 향후 업데이트 예정 (추정).

<div class="note-circle">
○ 새 모델이 발표돼도 마케팅 페이지 업데이트까지 며칠 걸리는 경우가 있어요<br />
○ 공식 확인된 정보가 추가되면 이 문서를 업데이트할게요
</div>
