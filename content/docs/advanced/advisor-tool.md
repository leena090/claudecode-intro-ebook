---
title: "[공] Advisor 도구 — 어려운 결정은 더 강한 모델에게 맡기기"
description: "기본 모델은 빠르게, 중요한 판단 순간만 더 강력한 Advisor 모델에게 에스컬레이션(escalation). 속도와 품질을 동시에 잡는 방법"
tags: ["advisor", "에스컬레이션", "모델", "고급", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/advisor" target="_blank">공식 문서: code.claude.com/docs/en/advisor</a>
</div>

## Advisor 도구가 뭔가요?

Claude Code를 쓸 때 보통 하나의 모델만 씁니다. Advisor 도구는 이걸 **두 층**으로 나눠요.

- **주 모델(main model)**: 빠르고 저렴한 모델이 일상 작업을 처리
- **Advisor 모델**: 어렵고 중요한 결정 순간에만 더 강력한 모델에게 자문

> 🍱 **비유**: 회사에서 실무자(Sonnet)는 매일 업무를 처리하고, 아주 어려운 결정이 생길 때만 팀장(Opus/Fable)에게 올려서 승인을 받는 것처럼요.

---

## 왜 필요한가요?

| 상황 | 문제 |
|------|------|
| 항상 Opus만 쓰면 | 비용 ↑, 속도 ↓ |
| 항상 Sonnet만 쓰면 | 어려운 판단에서 품질 ↓ |
| **Advisor 도구** | 일상은 Sonnet, 중요 순간만 Opus → 비용↓ + 품질↑ |

---

## 설정 방법

`settings.json` 또는 `CLAUDE.md`에 Advisor 모델을 지정하면 돼요.

**settings.json 예시:**
```json
{
  "model": "claude-sonnet-4-6",
  "advisor": {
    "model": "claude-fable-5"
  }
}
```

**CLAUDE.md에서 지정:**
```markdown
<!-- CLAUDE.md -->
advisor-model: claude-opus-4-8
```

설정하면 Claude는 **알아서** 어려운 결정 시점을 판단해 Advisor 모델에게 물어봐요. 사람이 직접 개입하지 않아도 돼요.

---

## Claude가 Advisor에게 물어보는 순간들

- 아키텍처 결정 ("이 코드를 어떤 구조로 리팩토링할까?")
- 보안 관련 코드 작성 ("인증 로직을 어떻게 설계할까?")
- 모호하거나 복잡한 요구사항 해석
- 여러 접근법 중 최선 선택

> 🍱 **비유**: 빵집 아르바이트생(Sonnet)이 새 케이크 레시피를 만들 때는 혼자 결정하지 않고 제과장(Opus/Fable)에게 여쭤보는 것처럼요.

---

## 비용 절감 팁

```
추천 조합 1: 주 모델 Sonnet 4.6 + Advisor Opus 4.8
추천 조합 2: 주 모델 Sonnet 4.6 + Advisor Fable 5
```

**어떻게 절감되나?**

전체 작업의 80~90%는 Sonnet이 처리 → 저렴
나머지 10~20% 핵심 결정만 Opus/Fable → 품질 보장

단순 계산으로도 Opus만 쓰는 것보다 **비용을 크게 줄일 수 있어요**. `[공]`

---

## 자주 묻는 질문

**Q. Advisor가 응답하면 사용자가 볼 수 있나요?**
네. Claude의 답변 안에 Advisor 모델의 자문 내용이 반영돼 최종 답으로 돌아와요.

**Q. Advisor 호출이 얼마나 자주 일어나나요?**
Claude가 알아서 판단해요. 일반 작업 중엔 거의 없고, 복잡하거나 중요한 결정 포인트에서만 발생해요.

**Q. Advisor 모델은 별도 요금이 부과되나요?**
네. Advisor 모델이 응답한 토큰만큼 해당 모델 요금이 추가로 청구돼요.
