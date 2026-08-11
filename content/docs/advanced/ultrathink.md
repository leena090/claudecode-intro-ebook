---
title: "울트라씽크(ultrathink) — 클로드가 더 깊이 생각하게 만드는 마법 단어"
description: "프롬프트에 'ultrathink' 한 단어를 넣으면 클로드가 평소보다 오래 생각하고 답해요. Option+T 토글, /effort, MAX_THINKING_TOKENS까지 한 번에 정리"
tags: ["고급", "ultrathink", "울트라씽크", "thinking", "extended thinking", "effort", "사고"]
category: "advanced"
order: 19
lastUpdated: "2026-04-20"
---

<div class="note-star">
★ <strong>공식 키워드</strong> — 2026-04 현재 Claude Code 공식 문서에 <code>ultrathink</code>가 명시돼 있어요 (<a href="https://code.claude.com/docs/en/common-workflows#use-extended-thinking-thinking-mode">common-workflows</a>).
<br />★ <strong>주의</strong> — "think", "think hard", "think more" 같은 말은 <strong>그냥 일반 프롬프트</strong>로 처리돼요. <strong>오직 <code>ultrathink</code></strong>만 공식 키워드입니다. <code>[공식]</code>
<br />★ 한국어로 "더 깊이 생각해줘"라고 써도 클로드가 알아서 사고하긴 하지만, <strong>확실한 트리거는 영문 <code>ultrathink</code></strong>예요.
</div>

## 울트라씽크(ultrathink)가 뭔가요?

프롬프트 안에 **`ultrathink`** 라는 단어 한 개만 끼워 넣으면, 클로드가 **이 턴만큼은 평소보다 더 오래, 더 깊이 생각하고** 답을 줘요.

> 🍱 **비유로 설명하면**: 친구한테 "저녁 뭐 먹을까?"라고 물으면 5초 만에 "김밥"이라고 답하지만, "저녁 뭐 먹을까? **진지하게 말이야**"라고 하면 냉장고도 한번 열어보고 동네 맛집 지도도 펼쳐보고 15분 고민해서 추천해주는 것과 같아요. `ultrathink`는 그 "**진지하게 말이야**" 스위치예요.

---

## 어디에 써야 좋아요?

### ✅ 이럴 때 효과가 크게 나요

- 🏗️ **복잡한 아키텍처 결정** — "이 시스템을 마이크로서비스로 쪼개는 게 나을까?"
- 🐛 **까다로운 버그 추적** — 원인이 3~4단계 뒤에 숨어 있는 상황
- 🔀 **여러 접근법 비교** — "A 방식 vs B 방식 vs C 방식, 각각의 trade-off는?"
- 📋 **다단계 구현 계획** — "결제 시스템 전체 설계해줘"
- 🧩 **수학·알고리즘 문제** — 경계 조건이 까다로운 로직

### ❌ 이럴 때는 낭비예요

- 단순한 코드 수정 ("오타 고쳐줘")
- "이 파일 읽어줘" 같은 조회성 요청
- 이미 답이 명확한 질문

---

## 쓰는 법 — 프롬프트 어디든 `ultrathink` 한 단어만

```
/* 예시 1: 시작에 넣기 */
ultrathink — 이 결제 시스템 롤백 전략 3가지 비교해줘

/* 예시 2: 끝에 넣기 */
이 레거시 코드 리팩토링 방향 잡아줘. ultrathink

/* 예시 3: 문장 중간에도 OK */
우리 DB 스키마 마이그레이션할 건데 ultrathink해서 서비스 중단 없는 전략 세워줘
```

> 🍱 **비유로 설명하면**: 마법 주문은 어디에 쓰든 효과가 같아요. 위치는 상관없고, **단어가 있기만 하면** 트리거됩니다.

<div class="note-star">
★ <strong>중요 — 이 말들은 트리거 아니에요</strong>
<br />❌ <code>think hard</code> · <code>think harder</code> · <code>think more</code> · <code>think very carefully</code>
<br />전부 그냥 일반 프롬프트로 읽힙니다. 예전(2025년)엔 이것도 트리거였지만, 2026-01에 단순화되면서 <strong>`ultrathink` 한 단어만</strong> 공식으로 남았어요. <code>[공식]</code>
</div>

---

## `ultrathink` vs 다른 사고 조절 방법 — 뭐가 다른가요?

Claude Code엔 "얼마나 오래 생각할지" 조절하는 방법이 **4가지**예요. 작동 방식이 다르니 헷갈리면 안 돼요.

| 방법 | 범위 | 지속 시간 | 설정 위치 |
|---|---|---|---|
| **`ultrathink` 키워드** | 그 턴 1번만 | 1개 응답 | 프롬프트 안에 단어 끼워넣기 |
| **`/effort` 명령어** | 세션 전체 | 세션 끝날 때까지 | `/effort low`·`medium`·`high` 또는 `/model`에서 조절 |
| **`Option+T` 토글** | 세션 전체 | 현재 세션 | macOS: `Option+T`, Windows/Linux: `Alt+T` |
| **`alwaysThinkingEnabled`** | 모든 프로젝트 | 영구 | `~/.claude/settings.json` |

> 🍱 **비유로 설명하면**: `ultrathink`는 **일회용 주문서**(이 요리만 특별히), `/effort`는 **주방 조리 모드 설정**(저녁 내내 느긋하게), `Option+T`는 **주방 전원 스위치**(오늘은 켤까 끌까), settings.json은 **가게 영업 방침**(평생 이렇게 가자)이에요.

---

## `/effort` 명령어 — 세션 전체 사고 깊이 조절

```bash
/effort high     # 꼼꼼하게 (2026-04 기준 기본값)
/effort medium   # 보통
/effort low      # 빠르게, 적게 생각
```

- ★ **2026-04-04 v2.1.92에서 단순화됐어요** — 기존 ultrafast/fast/balanced/thorough/ultrathink 5단계가 **low / medium / high** 3단계로 깔끔해졌어요.
- ★ **v2.1.94(2026-04-07)부터 기본값이 `high`** 예요. 예전에는 `medium`이었지만 이제는 처음부터 꼼꼼하게 작업합니다. `[공식]`
- ★ 로고와 스피너에 현재 effort 레벨이 **자동 표시**돼요.

<div class="note-star">
★ <strong>효과 차이</strong> — `ultrathink` 키워드는 "**그 턴만** 더 생각해" 지시라서, `/effort` 레벨 자체를 바꾸진 않아요. 세션 내내 깊이 생각하게 하고 싶으면 `/effort high`를, 이번 답변만 특별히 깊이 생각하게 하고 싶으면 `ultrathink`를 쓰세요.
</div>

---

## `Option+T` — 사고 모드 자체를 껐다 켰다

| OS | 단축키 |
|---|---|
| macOS | `Option+T` |
| Windows/Linux | `Alt+T` |

- 현재 세션에서만 사고 모드를 켜거나 끕니다.
- 사고 과정을 **회색 기울임체**로 보고 싶으면 `Ctrl+O`로 verbose 모드 토글.

---

## 사고 과정 보기 — `Ctrl+O`

기본 상태에서 클로드의 "생각"은 접힌 스텁으로만 보여요. 전체를 펼쳐 보려면:

```bash
# 세션 중에 단축키
Ctrl+O    # verbose 모드 토글 (사고 과정이 회색 이탤릭으로 표시)
```

또는 영구 설정:

```json
// ~/.claude/settings.json
{
  "showThinkingSummaries": true
}
```

---

## 토큰 예산 — `MAX_THINKING_TOKENS`

사고에도 **토큰이 소모**돼요. 과금도 발생합니다. 제한하고 싶다면:

```bash
# 사고 완전 비활성화
export MAX_THINKING_TOKENS=0

# 특정 토큰으로 제한 (구형 모델만 해당)
export MAX_THINKING_TOKENS=10000
```

<div class="note-star">
★ <strong>Opus 4.7은 항상 적응형 추론</strong> — Opus 4.7은 고정 예산 방식을 지원하지 않아요. `MAX_THINKING_TOKENS`는 `0`(비활성화)만 적용됩니다.
<br />★ <strong>Opus 4.6 / Sonnet 4.6</strong>은 `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1`을 켜야 고정 예산이 되고, 그때만 `MAX_THINKING_TOKENS` 숫자가 의미 있어요. <code>[공식]</code>
</div>

---

## 영구 설정 — "난 항상 깊이 생각하는 클로드가 좋아"

```json
// ~/.claude/settings.json
{
  "alwaysThinkingEnabled": true,
  "showThinkingSummaries": true
}
```

이제 모든 프로젝트에서 사고 모드가 기본 ON 상태.

---

## 실전 예시 — 언제 어떻게 쓰나

### 예시 1: 아키텍처 결정 (ultrathink 최적)

```
우리 앱이 지금 모놀리식인데 트래픽이 10배 늘었어.
마이크로서비스로 쪼개는 게 맞을까, 아니면 수직 확장으로 버티는 게 맞을까?
비용·운영 난이도·장애 격리까지 다 고려해서 ultrathink 해줘
```

→ 클로드가 여러 시나리오를 시뮬레이션하고 trade-off 표까지 만들어 제시.

### 예시 2: 버그 원인 추적 (ultrathink 최적)

```
배포 후에만 간헐적으로 500 에러가 나. ultrathink
로그는 아래야:
[로그 붙여넣기]
가능한 원인을 다 열거하고, 각 가설별로 확인할 방법도 같이 줘
```

→ 보통 3~4단계 뒤에 숨은 원인(예: 컨테이너 메모리 한계, race condition)까지 추적.

### 예시 3: 간단한 질문 (ultrathink 불필요)

```
/* 이럴 땐 쓰지 마세요 */
ultrathink 오타 수정해줘     # ← 낭비. 토큰만 써요.
```

---

## `ultrathink` vs `/plan` — 비교

<div class="note-star">
⚠️ <strong>/ultraplan 제거됨</strong> — 2026년 8월 W32 업데이트에서 /ultraplan 리서치 프리뷰가 공식 종료됐어요. 대안으로 <strong>/plan</strong>을 사용하세요. <a href="/docs/advanced/ultraplan">자세히 보기</a>
</div>

| 비교 | `ultrathink` (키워드) | `/plan` (명령어) |
|---|---|---|
| **실행 위치** | 로컬 세션 | 로컬 세션 |
| **사고 시간** | 증가 | 일반 |
| **UI** | 터미널 그대로 | 터미널 그대로 |
| **대상 작업** | 답변 1회 깊게 | **플래닝 작업** |
| **비용** | 약간 증가 | 보통 |
| **언제?** | 복잡한 질문 1개 | 단계별 계획이 필요할 때 |

> 🍱 **비유로 설명하면**: `ultrathink`는 "**지금 이 요리 특별히 더 공들여 줘**"이고, `/plan`은 "**오늘 메뉴 전체 계획 세워줘**"예요.

---

## 한 줄 요약

> **복잡한 질문 한 개에만** 클로드를 더 똑똑하게 만들고 싶을 때 → 프롬프트에 **`ultrathink`** 한 단어 끼워 넣으세요.
> **세션 전체**를 더 꼼꼼하게 굴리고 싶을 때 → **`/effort high`**.
> **모든 프로젝트에서 영구적**으로 → **`alwaysThinkingEnabled: true`**.

---

## 더 알아보기

- [공식 문서 — Extended thinking mode](https://code.claude.com/docs/en/common-workflows#use-extended-thinking-thinking-mode)
- [ultraplan 종료 안내](/docs/advanced/ultraplan) — ⚠️ 2026-08 제거됨, 대안 안내
- [특수 명령어 모음](/docs/commands/special-commands) — `/effort` 상세
- [settings.json 설정](/docs/config/settings-json) — `alwaysThinkingEnabled`, `showThinkingSummaries`
