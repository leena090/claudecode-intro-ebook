---
title: "[공] Advisor Tool — 더 강한 모델을 결정적 순간에만 불러오기"
description: "평소엔 빠른 모델이 일하다가, 중요한 결정 순간에만 더 강력한 모델이 조언해주는 Advisor Tool 완전 가이드"
tags: ["advisor", "advisor-tool", "모델설정", "비용최적화", "자동생성", "v2.1.98"]
category: "advanced"
order: 27
lastUpdated: "2026-06-11"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code v2.1.98 이상, Anthropic API 전용. <code>[공]</code><br />
★ Fable 5를 어드바이저로 쓰려면 v2.1.170 이상 필요<br />
👉 <a href="https://code.claude.com/docs/en/advisor" target="_blank">공식 문서: code.claude.com/docs/en/advisor</a>
</div>

## Advisor Tool이란?

**두 개의 모델을 조합해서 쓰는 방법**이에요. 평소엔 빠르고 저렴한 모델이 일하다가, **계획 수립·반복 실패·작업 완료 확인** 같은 결정적 순간에만 더 강력한 모델이 조언해줘요.

> 🍱 **비유**: 공사 현장에서 일반 직원(Sonnet)이 작업을 하다가, 중요한 설계 결정을 내려야 할 때만 수석 엔지니어(Opus)를 부르는 것처럼요. 수석 엔지니어를 매일 현장에 붙여두는 것보다 훨씬 경제적이에요.

---

## 언제 쓰면 좋아요?

| 상황 | Advisor 없이 | Advisor 있으면 |
|------|-------------|--------------|
| 대규모 리팩토링 | Opus로 전체 진행 → 비용 높음 | Sonnet이 하고, 계획 단계만 Opus 조언 |
| 같은 에러 반복 발생 | Claude가 헤매다 포기 | Advisor가 새 관점으로 방향 제시 |
| 긴 마이그레이션 작업 | 컨텍스트가 커져 성능 저하 | 결정 포인트마다 강력한 모델이 체크 |

**이럴 때는 Advisor 대신 다른 방법이 나아요:**
- 짧은 단발성 작업 → 그냥 강한 모델로 전체 실행
- 매 대화마다 최고 모델이 필요한 작업 → `/model opus` 로 아예 전환

---

## 설정 방법 3가지

### 방법 1: `/advisor` 명령어 (가장 간단)

```bash
# Opus를 어드바이저로 설정
/advisor opus

# Fable 5를 어드바이저로 (v2.1.170+ 필요)
/advisor fable

# 어드바이저 끄기
/advisor off
```

명령어로 설정하면 **사용자 설정에 저장**돼서 다음 세션에도 유지돼요.

### 방법 2: `settings.json`에 기본값 등록

```json
{
  "advisorModel": "opus"
}
```

### 방법 3: `--advisor` 플래그 (한 세션만)

```bash
# 이번 세션에서만 Opus 어드바이저 적용
claude --advisor opus
```

---

## 어떤 모델을 어드바이저로 쓸 수 있어요?

어드바이저는 메인 모델보다 **같은 등급 이상**이어야 해요.

| 메인 모델 | 사용 가능한 어드바이저 |
|-----------|----------------------|
| Haiku 4.5 | Sonnet, Opus, Fable |
| Sonnet 4.6 | Sonnet, Opus, Fable |
| Opus 4.7 | Opus 4.7 이상, Fable |
| Opus 4.8 | Opus 4.8 이상, Fable |
| Fable 5 | Fable만 가능 |

> 🍱 **비유**: 중학생(Haiku)은 선생님(Opus), 박사(Fable) 누구한테나 도움을 받을 수 있지만, 박사(Fable)가 중학생한테 조언을 구하는 건 말이 안 되는 것처럼요.

---

## 추천 조합

| 조합 | 활용 상황 |
|------|-----------|
| Sonnet + Opus 어드바이저 | 가장 균형 잡힌 비용/성능. 일반 코딩 작업에 추천 |
| Sonnet + Fable 어드바이저 | 결정 포인트마다 최고 지능이 필요한 복잡한 프로젝트 |
| Haiku + Opus 어드바이저 | 비용 최소화 + 그래도 강한 계획력 |
| Opus + Opus 어드바이저 | 고위험 작업에서 두 번 검토 (독립적 확인) |
| Fable + Fable 어드바이저 | 최고 성능이 필요한 경우 (Fable 접근 권한 필요) |

---

## 세션 중에 무슨 일이 일어나요?

Claude가 어드바이저를 호출하면 화면에 `Advising` 표시가 나와요.

```
◎ Advising (claude-opus-4-8)...
→ Advisor reviewed the conversation
```

결과를 자세히 보려면 **`Ctrl+O`** 를 누르면 어드바이저의 전체 조언이 펼쳐져요.

**Claude가 어드바이저를 호출하는 시점:**
- 접근 방법을 결정하기 전
- 같은 에러가 반복될 때
- 작업이 완료됐다고 선언하기 전

직접 지시할 수도 있어요:
```bash
> 계속 진행하기 전에 어드바이저에게 먼저 물어봐줘
```

<div class="note-circle">
○ Claude가 어드바이저의 조언을 따르되, 실제 코드/파일 내용이 조언과 다르면 충돌을 알려줘요<br />
○ 어드바이저 호출 횟수에 상한선은 없어요 — 더/덜 부르게 하려면 말로 지시하세요
</div>

---

## 비용은 어떻게 돼요?

어드바이저를 부를 때마다 **어드바이저 모델 요금**이 추가로 발생해요. 하지만 결정 포인트에서만 호출하므로, 처음부터 끝까지 강한 모델을 쓰는 것보다 대체로 저렴해요.

사용량은 `/usage` 에서 확인할 수 있어요.

```bash
/usage
# → 메인 모델 사용량 + 어드바이저 사용량 합산 표시
```

---

## 제약 사항

<div class="note-circle">
○ <strong>Anthropic API 전용</strong> — Amazon Bedrock, Google Vertex AI, Microsoft Foundry에서는 사용 불가<br />
○ Claude Code <strong>v2.1.98 이상</strong> 필요 (<code>claude update</code> 로 업데이트)<br />
○ Fable 5 어드바이저는 <strong>v2.1.170 이상</strong> + Fable 5 접근 권한 필요
</div>

---

## 비슷한 기능 비교

| 기능 | 강한 모델이 실행되는 시점 | 시작 방법 |
|------|--------------------------|-----------|
| **Advisor Tool** | 작업 중 결정 포인트 | Claude가 자동으로 호출 |
| `opusplan` 설정 | 계획(Plan) 모드에서만 | Plan 모드 진입 시 |
| 서브에이전트 `model` 지정 | 위임된 하위 작업 전체 | Claude가 서브에이전트에 위임할 때 |
| `/model` 명령어 | 그 이후 모든 대화 | 직접 전환 |
