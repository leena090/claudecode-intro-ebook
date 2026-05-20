---
title: "[공] 주간 업데이트 Week 20 — Fast Mode Opus 4.7 기본화·에이전트 뷰·/goal 정식 공개 (2026년 5월 11~15일)"
description: "Fast Mode가 이제 Opus 4.7에서 기본으로 실행돼요. Agent View와 /goal도 이번 주 공식 문서에 정식 등재됐어요."
tags: ["자동생성", "업데이트", "fast-mode", "opus4.7", "agent-view", "goal", "2026", "week20"]
category: "reference"
order: 8
lastUpdated: "2026-05-20"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/whats-new/2026-w20" target="_blank">code.claude.com 주간 업데이트 Week 20</a>을 바탕으로 작성됐어요.
</div>

## 이번 주(5월 11~15일)에 뭐가 달라졌나요?

Week 19의 플러그인·워크트리 업데이트에 이어, Week 20에는 **매일 쓰는 속도와 관련된 변화**가 왔어요.

---

## 1. ⚡ Fast Mode — 이제 Opus 4.7이 기본

### 뭐가 달라진 건가요?

그동안 Fast Mode는 **Opus 4.6**을 빠르게 돌리는 설정이었어요. 이번 주부터 **Opus 4.7이 기본**이 됐어요.

> 🍱 **비유로 설명하면**: 지금까지는 "빠른 배달"을 고르면 작년 모델 차가 왔어요. 이제는 **올해 가장 최신 차**가 빠른 배달로 와요. 같은 요금, 더 좋은 차.

| 구분 | 이전 | 이번 주부터 |
|---|---|---|
| Fast Mode 기본 모델 | Opus **4.6** | Opus **4.7** ✅ |
| 속도 | Opus 4.6 대비 2.5배 빠름 | Opus 4.7 대비 2.5배 빠름 |
| 비용 | $30/$150 per M tokens | $30/$150 per M tokens (동일) |
| 토글 단축키 | `/fast` 또는 Option+F | 변동 없음 |

<div class="note-star">
★ Fast Mode를 쓰고 있다면, 지금부터는 자동으로 Opus 4.7 기반으로 작동해요. 별도 설정 없이 적용됩니다. <code>[공]</code>
<br />★ 비용은 이전과 동일하지만, 모델이 더 최신이라 결과 품질이 소폭 향상될 수 있어요.
</div>

### Fast Mode가 처음이시라면?

`/fast` 명령어 한 번이면 켜지고 꺼져요.

```
/fast
```

자세한 내용 → 📄 [Fast Mode 전체 가이드](/docs/advanced/voice-fast)

---

## 2. 🖥️ Agent View — 공식 문서에 정식 등재

### 뭔가요?

여러 개의 Claude Code 작업을 **한 화면에서 한꺼번에 관리하는 대시보드**예요. 이번 주 공식 문서에 안정적으로 등재됐어요.

> 🍱 **비유로 설명하면**: 식당 주방장이 여러 테이블 주문을 하나의 주문표에서 한꺼번에 보는 것과 같아요.

```bash
# 에이전트 뷰 실행
claude agents
```

자세한 내용 → 📄 [Agent View 전체 가이드](/docs/advanced/agent-view)

---

## 3. 🎯 /goal — 공식 문서에 정식 등재

### 뭔가요?

완료 조건을 한 문장으로 쓰면, 클로드가 조건이 충족될 때까지 혼자 계속 작업해요.

```
/goal 모든 테스트가 통과할 때까지 버그를 고쳐줘
```

> 🍱 **비유로 설명하면**: 세탁기에 코스를 맞춰놓으면 끝날 때까지 혼자 돌아가는 것과 같아요.

자세한 내용 → 📄 [/goal 전체 가이드](/docs/commands/goal-command)

---

## 이번 주 요약

| 기능 | 변화 내용 | 바로 쓸 수 있나요? |
|---|---|---|
| ⚡ Fast Mode | Opus 4.7이 기본 모델로 자동 적용 | ✅ 즉시 (재설정 불필요) |
| 🖥️ Agent View | 공식 문서 정식 등재 | ✅ `claude agents` |
| 🎯 /goal | 공식 문서 정식 등재 | ✅ `/goal 조건` |

---

<div class="note-star">
📅 다음 업데이트: <a href="https://code.claude.com/docs/en/whats-new/index" target="_blank">code.claude.com/docs/en/whats-new/index</a>에서 Week 21 업데이트를 확인하세요.
</div>
