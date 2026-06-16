---
title: "[공] Advisor 도구 — 더 강한 모델이 중간중간 도와주는 기능"
description: "Sonnet으로 작업하다가 어려운 결정이 생기면 Opus·Fable이 자동으로 조언해주는 Advisor 기능. 설정법, 모델 조합, 비용까지 한 번에"
tags: ["고급", "advisor", "모델조합", "sonnet", "opus", "비용절감", "자동생성"]
category: "advanced"
order: 20
lastUpdated: "2026-06-15"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code v2.1.98 이상 필요. Anthropic API 전용(Bedrock·Vertex·Foundry 미지원). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/advisor" target="_blank">공식 문서: code.claude.com/docs/en/advisor</a>
</div>

## Advisor가 뭔가요?

**Advisor(어드바이저)** 는 Claude가 작업 중에 **어려운 결정 앞에서 더 강한 모델에게 자문**을 구하는 기능이에요.

> 🍱 **비유**: 신입 의사(Sonnet)가 진료하다가 복잡한 케이스가 생기면 지도 교수(Opus)한테 조언을 구하는 것과 같아요. 평소엔 신입 의사가 혼자 처리하고, 어려울 때만 교수님이 나서요.

**언제 자문을 구하나요?**
- 접근 방식을 결정하기 전에
- 같은 에러가 반복될 때
- "작업이 완료됐다"고 선언하기 전에

이 타이밍은 **Claude가 스스로 판단**해요. 사람이 직접 정하는 게 아니에요.

---

## 설정 방법 3가지

### 방법 1: `/advisor` 명령어 (가장 쉬움)

```bash
# 선택 메뉴 열기
/advisor

# 바로 Opus로 설정
/advisor opus

# Fable 5로 설정 (v2.1.170+ 필요, 메뉴에 안 나타남 — 직접 입력)
/advisor fable

# 끄기
/advisor off
```

설정하면 **사용자 설정에 자동 저장**돼서 다음 세션에서도 유지돼요.

### 방법 2: 설정 파일에 고정

`~/.claude/settings.json` (사용자 설정):

```json
{
  "advisorModel": "opus"
}
```

### 방법 3: 한 세션만 임시 적용

```bash
# 이번 세션에만 Opus를 어드바이저로
claude --advisor opus
```

`--advisor` 플래그는 저장된 설정보다 우선하지만, 세션이 끝나면 사라져요.

---

## 모델 조합 — 어떤 조합이 나한테 맞을까?

| 메인 모델 | 어드바이저 | 이럴 때 써요 |
|-----------|----------|------------|
| **Sonnet 4.6** | **Opus** | 💰 가장 경제적 — 일상 코딩은 Sonnet, 중요 결정만 Opus |
| **Sonnet 4.6** | **Fable** | 🚀 Fable의 판단력을 결정 순간에만 활용 (v2.1.170+, Fable 접근 필요) |
| **Haiku 4.5** | **Opus** | 💸 최저 비용 메인 + 강력한 어드바이저 |
| **Opus 4.8** | **Opus 4.8** | 🔒 고위험 작업 — 독립적인 두 번째 검토가 필요할 때 |
| **Fable 5** | **Fable 5** | ⚡ 최고 성능 조합 (Fable 접근 가능할 때) |

<div class="note-circle">
○ 어드바이저는 메인 모델보다 같거나 강해야 해요 (약한 모델로 어드바이저 설정 불가)<br />
○ Fable 5는 Fable 5끼리만 어드바이저 가능 — Opus를 Fable의 어드바이저로 설정 불가
</div>

---

## 쓰는 법 — 일반 대화와 똑같아요

어드바이저를 켜놓으면 그냥 평소처럼 작업하면 돼요. Claude가 알아서 자문 타이밍을 결정해요.

```bash
# 어드바이저 켜기 (Opus로)
/advisor opus

# 이후 평소처럼 작업
> 이 결제 시스템 롤백 전략 설계해줘
```

화면에는 이렇게 표시돼요:
```
⟳ Advising (claude-opus-4-8)...     ← 자문 요청 중
✓ Advisor has reviewed               ← 자문 완료
```

> `Ctrl+O`를 눌러 어드바이저의 전체 답변을 볼 수 있어요.

**직접 자문을 요청할 수도 있어요:**
```bash
> 계속하기 전에 어드바이저한테 먼저 확인해봐
```

---

## 비용은 얼마나 더 드나요?

어드바이저가 호출될 때마다 **대화 전체를 어드바이저 모델이 읽어요**. 그만큼 토큰이 더 소비돼요.

> 🍱 **비유**: 지도 교수를 부를 때마다 "지금까지 환자 기록 전부" 를 보여줘야 해요 — 볼 때마다 비용이 들지만, 매 턴마다 교수님이 있는 것보단 훨씬 싸요.

**Sonnet + Opus 조합 예시:**

```
메인 (Sonnet 4.6):   대부분의 턴 처리   → 저렴
어드바이저 (Opus):   결정 시 호출만       → 추가 비용 발생
합계:               Opus 단독보다 저렴, Sonnet 단독보다 더 나은 결과
```

비용 확인:
```bash
/usage  ← 어드바이저 사용량 포함해서 표시돼요
```

---

## 다른 기능과 비교

| 기능 | 언제 강한 모델이 개입? | 시작 방법 |
|------|---------------------|----------|
| **Advisor** | 중요 결정 시점마다 자동 | `/advisor` 설정 |
| `/model` 전환 | 전환 후 모든 턴 | 내가 직접 전환 |
| 서브에이전트 | 위임된 하위 작업 전체 | Claude가 위임 |

---

## 요구사항 요약

| 항목 | 조건 |
|------|------|
| 최소 버전 | Claude Code **v2.1.98** 이상 |
| Fable 5 어드바이저 | **v2.1.170** 이상 + Fable 5 접근 권한 |
| API 제공자 | **Anthropic API** 전용 (Bedrock·Vertex·Foundry 미지원) |
| LLM 게이트웨이 | ANTHROPIC_BASE_URL 설정 시 게이트웨이 경유 가능 (지원 여부 게이트웨이 의존) |

```bash
# 버전 확인
claude --version

# 업데이트
claude update
```

---

<div class="note-circle">
○ 어드바이저는 실험적(experimental) 기능이에요 — 동작·가격·가용성이 바뀔 수 있어요<br />
○ 캐시 영향: <code>/advisor</code> 켜고 끄는 것은 프롬프트 캐시를 초기화하지 않아요<br />
○ 어드바이저 자체는 매 호출마다 전체 대화를 새로 읽어요 (캐시 재사용 없음)
</div>
