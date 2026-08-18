---
title: "[블] Anthropic의 오픈웨이츠 모델 입장 — 오픈소스 AI에 대한 공식 견해"
description: "2026년 7월 Anthropic이 공개한 오픈웨이츠(오픈소스) AI 모델에 대한 공식 입장. Claude Code 사용자들이 알아두면 좋은 회사 방향성"
tags: ["자동생성", "오픈소스", "오픈웨이츠", "AI정책", "anthropic"]
category: "next"
order: 27
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[블] 출처</strong>: "Our position on open-weights models" — Anthropic 블로그 2026년 7월 27일
<br />★ <strong>추정 포함</strong> — 공식 블로그 제목과 요약 기반으로 작성. 세부 내용은 공식 발표 기준으로 달라질 수 있어요.
</div>

## 오픈웨이츠 모델이 뭔가요?

**오픈웨이츠(Open-weights)**란 AI 모델의 가중치(내부 파라미터)를 공개해서 누구나 다운받아 직접 돌릴 수 있게 하는 방식이에요. Meta의 Llama, Mistral 등이 대표 사례예요.

> 🍱 **비유로 설명하면**: 레스토랑의 요리 레시피를 공개하는 것과 비슷해요. 누구나 그 레시피로 집에서 똑같은 요리를 만들 수 있죠. 오픈웨이츠 AI는 "AI의 레시피(가중치)"를 공개하는 거예요.

Claude는 현재 **비공개(closed-weights)** 모델이에요. Anthropic API나 Claude Code를 통해서만 접근할 수 있어요.

---

## Anthropic은 왜 공식 입장을 발표했나요?

AI 업계에서 오픈소스 vs 클로즈드 소스 논쟁이 계속되고 있어요. 구글, Meta는 오픈웨이츠를 지지하고, Anthropic은 지금까지 모델을 비공개로 유지해왔죠. 이번 공식 입장 발표는:

1. **투명성**: Anthropic이 왜 현재 방식을 선택하는지 공개 설명
2. **안전 철학**: 오픈웨이츠의 잠재적 위험성 우려 명시
3. **업계 대화**: 규제·표준화 논의에 적극 참여

---

## Claude Code 사용자에게 의미하는 것

현재 Claude Code는 Anthropic API에 종속돼요:

| 구분 | 현황 |
|------|------|
| Claude 모델 자체 호스팅 | ❌ 불가 (비공개 모델) |
| Amazon Bedrock에서 Claude 사용 | ✅ 가능 |
| Google Cloud에서 Claude 사용 | ✅ 가능 |
| 오픈소스 대안 모델 사용 | ⚙️ Claude Code와 별도 API 연결 필요 |

---

## 앞으로의 방향

Anthropic은 안전이 충분히 보장된다면 더 개방적인 방향을 검토할 수 있다는 입장을 시사하고 있어요 (추정). Claude Code 사용자에게 직접적인 즉각 변화는 없지만, 장기적으로 AI 모델 접근 방식에 영향을 줄 수 있어요.

---

## 다음 단계

- **[새 모델 소식 (Opus 5)](/docs/next/claude-opus-5)** — 최신 Claude 모델 정보
- **[Claude Security 철학](/docs/advanced/claude-security-plugin)** — Anthropic의 보안 접근 방식
