---
title: "[블] Claude Fable 5.1 & Mythos 5.1 — 2026년 9월 신모델 출시"
description: "코딩과 지식 작업에 최적화된 Fable 5.1과 Mythos 5.1 발표, 그리고 연구 능력의 미래 가능성"
tags: ["자동생성", "모델", "fable5.1", "mythos5.1", "2026-09"]
category: "next"
order: 18
lastUpdated: "2026-09-20"
---

<div class="note-star">
★ <strong>블로그 출처</strong>: Anthropic 공식 블로그 "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (2026-09-01)<br />
★ 세부 벤치마크 수치는 공식 발표 기준이며, 추정 사항은 별도 표기합니다.
</div>

## Claude Fable 5.1 & Mythos 5.1 출시

2026년 9월 1일, Anthropic이 두 가지 신모델을 발표했어요:

- **Claude Fable 5.1** (클로드 페이블 5.1) — 코딩과 지식 작업 특화
- **Claude Mythos 5.1** (클로드 미토스 5.1) — 연구 능력 강화

> 🔬 **공식 발표 기준**: "코딩과 지식 작업의 최전선 성능, 그리고 AI 모델이 과학적 발전에 기여하는 방식을 엿볼 수 있는 연구 능력을 제공합니다."

---

## 🤖 Fable 5.1이 Fable 5와 다른 점

Fable 5.1은 Fable 5(2026년 6월 출시)의 개선 버전이에요. Claude Code W36 업데이트(2026-08-31)에서 Desktop 앱을 통해 먼저 전환 옵션이 제공됐고, 9월 정식 발표로 이어졌습니다.

| 항목 | Fable 5 | Fable 5.1 |
|------|---------|-----------|
| 출시일 | 2026-06-09 | 2026-09-01 |
| 코딩 성능 | 최고 수준 | 더 개선됨 |
| 연구 기능 | 기본 | Mythos 5.1과 함께 향상 |
| Claude Code 적용 | W36부터 전환 가능 | 공식 기본 모델 |

---

## 🔭 Mythos 5.1의 특징

Mythos(미토스)는 **연구·과학 작업**에 특화된 모델 계열이에요.

> 🏔️ **비유로 설명하면**: Fable은 "빠르고 능숙한 전문 번역가"라면, Mythos는 "깊이 있는 학술 연구자"예요. 일상 코딩에는 Fable이, 복잡한 과학적 추론이 필요할 때는 Mythos가 적합합니다.

공식 발표에 따르면 Mythos 5.1은 AI 모델이 **과학적 발전에 기여하는 방식을 조기에 엿볼 수 있는 연구 능력**을 갖추고 있다고 합니다. (추정: 생물학·화학·수학 분야 추론 강화)

---

## 💻 Claude Code에서 어떻게 바뀌나요?

### W36 업데이트부터 전환 옵션 제공
Claude Code Desktop 앱에서 설정 → 모델 선택을 통해 Fable 5.1로 전환할 수 있어요.

```bash
# 모델 설정 변경 (설정 파일 기준)
# ~/.claude/settings.json 또는 .claude/settings.json
{
  "model": "claude-fable-5-1"
}
```

### Fast Mode와의 관계
Fast Mode(패스트 모드)는 현재 **Opus 5를 고속 실행**하는 옵션이에요. Fable 5.1은 별도의 고속 옵션이 있을 수 있지만, 현재 공식 발표 기준으로는 별도 Fast Mode가 안내되지 않았습니다 (추정).

---

## 🌐 한국에서 쓸 수 있나요?

2026년 6월에 발표된 Fable 5 초기 버전은 미국 정부 수출 통제로 일시 중단됐다가 복귀했었어요. Fable 5.1은 공식 발표 기준 수출 통제 이슈 없이 정상 출시됐습니다. 다만 특정 지역 제한이 있을 수 있으니 [공식 가용성 페이지](https://code.claude.com/docs/en/feature-availability.md)를 확인하세요.

---

## 📌 요약

- Claude Fable 5.1: 코딩·지식 작업 최적화 최신 모델
- Claude Mythos 5.1: 과학 연구 능력 특화 모델
- Claude Code에서는 W36(2026-08-31)부터 Fable 5.1 전환 옵션 제공
- W37(2026-09-07) 이후 공식 기본 모델로 전환 예정 (추정)
