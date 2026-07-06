---
title: "[블] Claude Sonnet 5 출시 (2026년 6월 30일)"
description: "코딩·에이전트·업무에서 프런티어 성능을 내는 새 Sonnet 5 모델 발표 — Opus 급 성능에 Sonnet 급 속도"
tags: ["모델", "sonnet-5", "2026", "claude-sonnet-5", "자동생성"]
category: "next"
order: 14
lastUpdated: "2026-07-06"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — 2026-06-30 Anthropic 발표. <code>[블]</code><br />
👉 <a href="https://www.anthropic.com/news" target="_blank">공식 뉴스룸: anthropic.com/news</a><br />
⚠️ 일부 세부 사항은 공식 발표에서 직접 확인하세요 — 이 문서는 발표 당시 정보 기준이에요.
</div>

## Claude Sonnet 5가 출시됐어요! 🎉

2026년 6월 30일, Anthropic이 **Claude Sonnet 5**를 공식 발표했어요.

> 🍱 **비유**: 지금까지 "프리미엄 운동화(Sonnet 4.6)"가 있었다면, Sonnet 5는 **전문 마라토너용 최신 운동화**예요 — 가격대는 비슷한데 성능이 훨씬 올라갔어요.

---

## Sonnet 5의 특징

Anthropic의 공식 발표에 따르면, Sonnet 5는 다음 영역에서 **프런티어(최첨단) 성능**을 제공해요:

| 영역 | 설명 |
|------|------|
| 코딩(Coding) | 복잡한 코드 작성·리팩토링·디버깅 |
| 에이전트(Agents) | 장시간 자율 작업, 복잡한 작업 흐름 처리 |
| 전문 업무(Professional work) | 대규모 팀 환경에서도 안정적인 성능 |

공식 발표 문구: *"Sonnet 5 delivers frontier performance across coding, agents, and professional work at scale."*

---

## 모델 계층 업데이트 (2026-07-06 기준)

```
모델 계층 (추정 — 공식 비교표 별도 확인 필요):
────────────────────────────────────────
🆕 Claude Sonnet 5        ← 신규 (균형형 최강)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Claude Opus 4.8         ← 심층 추론·에이전트 최강
   Claude Sonnet 4.6       ← 이전 균형형
   Claude Haiku 4.5        ← 경량·빠름
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ Fable 5 / Mythos 5  ← 최상위(수출통제 이후 복귀)
```

<div class="note-circle">
○ 모델 간 정확한 성능 비교는 <a href="https://www.anthropic.com/news" target="_blank">Anthropic 공식 발표</a>를 참조하세요<br />
○ Claude Code에서 사용 방법: <code>/model claude-sonnet-5</code>
</div>

---

## Claude Code에서 어떻게 쓰나요?

```bash
# Claude Code 최신 버전으로 업데이트
claude update

# Sonnet 5로 전환
/model claude-sonnet-5
```

또는 설정 파일에서 고정:

```json
// .claude/settings.json
{
  "model": "claude-sonnet-5"
}
```

---

## 어떤 작업에 적합한가요?

| 작업 유형 | 추천 모델 |
|---|---|
| 일상적인 코딩 · 중간 복잡도 | **Sonnet 5** (균형 + 속도) |
| 복잡한 추론 · 장시간 에이전트 | Opus 4.8 (깊이 우선) |
| 빠른 질문·짧은 작업 | Haiku 4.5 (속도 우선) |
| 최상위 성능 필요 | Fable 5 (수출통제 이후 복귀 — 아래 참고) |

---

## Fable 5도 같은 날 복귀했어요 🔄

Sonnet 5 출시와 같은 날인 **2026년 6월 30일**, Fable 5도 전 세계에 재배포(재개)됐어요.

6월 12일 미국 정부 수출통제 지시로 일시 정지됐던 Fable 5가 약 3주 만에 돌아왔어요. 자세한 내용은 **[신규 모델 총정리 문서](./new-models-2026-06.md)**를 참조하세요.

<div class="note-circle">
○ 이 문서의 정보는 발표 당일(2026-06-30) 기준이에요<br />
○ 가격·플랜 정보는 <a href="https://claude.ai/pricing" target="_blank">claude.ai/pricing</a>에서 최신 정보를 확인하세요
</div>
