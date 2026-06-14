---
title: "[공] 어드바이저 도구(Advisor Tool) — 더 똑똑한 AI에게 중요한 결정 물어보기"
description: "주 모델은 일하고, 어려운 결정은 더 강한 어드바이저 모델에게 물어보는 기능. 비용은 줄이면서 품질은 높이는 방법"
tags: ["어드바이저", "advisor", "모델", "고급", "자동생성"]
category: "advanced"
order: 25
lastUpdated: "2026-06-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code v2.1.98 이상에서 사용 가능. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/advisor" target="_blank">공식 문서: code.claude.com/docs/en/advisor</a>
</div>

## 어드바이저 도구란?

**어드바이저 도구(Advisor Tool, 어드바이저 툴)** 는 Claude가 작업하다가 **중요한 결정이 필요할 때**, 더 강한 AI 모델에게 자동으로 물어보는 기능이에요.

> 🍱 **비유**: 부서에 일 잘하는 직원(주 모델)이 있고, 어려운 판단은 경험 많은 부장님(어드바이저 모델)에게 잠깐 물어보는 것과 같아요. 평소엔 직원이 처리하다가 "이건 내 선에서 결정하기 어렵다" 싶으면 잠깐 상담하고 바로 돌아와서 계속 일해요.

**언제 어드바이저를 부르나요?**

Claude가 스스로 판단해서 이런 순간에 어드바이저를 호출해요:
- 작업 방향을 정하기 전 (어떤 방법으로 해야 할지 결정할 때)
- 같은 오류가 계속 반복될 때
- "다 됐다" 선언하기 전 최종 확인

---

## 어드바이저 활성화 방법

### 방법 1: `/advisor` 명령어 (세션 중)

```bash
# Opus를 어드바이저로 설정 (설정이 저장됨)
/advisor opus

# Sonnet을 어드바이저로
/advisor sonnet

# 어드바이저 끄기
/advisor off
```

### 방법 2: 설정 파일로 저장

`~/.claude/settings.json`에 추가하면 항상 적용돼요:

```json
{
  "advisorModel": "opus"
}
```

### 방법 3: 시작할 때 플래그 사용

```bash
# 이번 세션에만 Opus를 어드바이저로 (저장되지 않음)
claude --advisor opus
```

---

## 어드바이저 모델 선택

어드바이저는 반드시 주 모델과 **같거나 더 강한** 모델이어야 해요.

| 주 모델 (일 하는 모델) | 쓸 수 있는 어드바이저 |
|----------------------|----------------------|
| Haiku 4.5 (하이쿠) | Fable, Opus, Sonnet |
| Sonnet 4.6 (소넷) | Fable, Opus, Sonnet |
| Opus 4.6 이상 (오퍼스) | Fable, 같거나 더 높은 Opus 버전 |
| Fable 5 (페이블) | Fable만 가능 |

**추천 조합:**

| 조합 | 언제 쓰나 |
|------|-----------|
| **Sonnet + Opus 어드바이저** | 일상 작업엔 Sonnet, 중요 결정만 Opus에 상담 — 가성비 최고 |
| **Haiku + Opus 어드바이저** | 가장 저렴한 조합, 중요 결정만 Opus에 상담 |
| **Opus + Opus 어드바이저** | 중요한 작업에서 두 Opus가 서로 검토 |

> 💡 **팁**: "Sonnet(주 모델) + Opus(어드바이저)" 조합이 처음부터 끝까지 Opus를 쓰는 것보다 보통 더 저렴하면서 결과는 비슷해요.

---

## 세션에서 어떻게 보이나요?

어드바이저가 호출되면 화면에 이렇게 표시돼요:

```
[Advising — claude-opus-4-8...]   ← 상담 중
[Advised by claude-opus-4-8]      ← 상담 완료
```

**어드바이저 조언 확인하기:**

```
Ctrl+O   ← 어드바이저가 준 전체 조언 펼쳐보기
```

Claude는 어드바이저 조언을 대부분 따르지만, 실제로 시도해봤더니 다른 결과가 나오면 그쪽을 우선해요.

---

## 비용은 얼마나 드나요?

어드바이저를 호출할 때마다 어드바이저 모델 요금이 **추가로** 들어요.

- **API 결제**: 어드바이저 모델 요금 기준으로 입출력 토큰 과금
- **구독 플랜**: 플랜 사용량 한도에 포함

> 💡 **절약 팁**: 어드바이저는 모든 대화가 아닌 **결정 지점에서만** 호출돼요. Sonnet(주 모델) + Opus(어드바이저) 조합이 Opus를 처음부터 끝까지 쓰는 것보다 보통 저렴해요.

사용량 확인:
```bash
/usage
# 어드바이저 사용량도 세션 총합에 포함됩니다
```

---

## 제약 사항

<div class="note-circle">
○ <strong>Anthropic API 전용</strong> — Amazon Bedrock, Google Vertex AI, Microsoft Foundry에서는 작동 안 해요<br />
○ 최소 버전: Claude Code <strong>v2.1.98 이상</strong><br />
○ 어드바이저는 반드시 주 모델과 같거나 더 강해야 해요<br />
○ Fable 5 어드바이저: v2.1.170 이상 + Fable 5 접근 권한 필요 (현재 접근 중단 상태)<br />
○ Fable 5는 <code>/advisor</code> 선택창에 안 보여요 — 직접 입력: <code>/advisor fable</code>
</div>

---

## 다른 기능과 비교

비슷해 보이는 기능들과 차이를 정리했어요:

| 기능 | 강한 모델이 언제 등장? | 시작 방법 |
|------|----------------------|----------|
| **어드바이저 도구** | 결정 지점마다 (Claude가 판단) | Claude가 자동 호출 |
| **Opusplan** | 플랜 모드 중에만 | 플랜 모드 진입 시 |
| **서브에이전트에 모델 지정** | 해당 위임 작업 전체 | Claude가 위임할 때 |
| **`/model`로 전환** | 전환 이후 모든 대화 | 내가 직접 전환 |

---

## 어드바이저 끄기

```bash
# 어드바이저 끄기 (설정 초기화)
/advisor off

# 또는 /advisor 선택창에서 "No advisor" 선택
```

---

> 🔗 **관련 문서**:
> - [어드바이저 전략 블로그](https://claude.com/blog/the-advisor-strategy) — 왜 이 조합이 효율적인지
> - [모델 설정 가이드](/docs/config/settings-json) — 모델 선택 전체 옵션
