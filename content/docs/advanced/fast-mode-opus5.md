---
title: "[공] Fast 모드 업데이트 — Opus 5 기본, $10/$50 가격"
description: "Fast 모드가 Opus 5 기준으로 업데이트됐어요. Opus 4.7은 2026-07-24 완전 제거. 가격은 MTok당 $10/$50 (입력/출력). /fast 로 토글."
tags: ["자동생성", "fast모드", "Opus5", "속도", "가격", "업데이트", "/fast"]
category: "advanced"
order: 28
lastUpdated: "2026-08-23"
---

<div class="note-star">
★ <strong>[공] 2026-07~08 업데이트</strong> — Fast 모드가 <strong>Opus 5 기준</strong>으로 바뀌었어요.<br />
• Opus 4.7 Fast 모드: 2026-06-25 지원 중단 → 2026-07-24 <strong>완전 제거</strong><br />
• v2.1.219+부터 Fast 모드 기본 모델 = <strong>Opus 5</strong><br />
• 가격: 입력 <strong>$10/MTok</strong>, 출력 <strong>$50/MTok</strong> (Opus 5·4.8 동일)<br />
출처: <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a> (공식 전용 페이지 신설)
</div>

## Fast 모드란?

**Fast 모드**는 Claude Opus를 **2.5배 빠르게** 실행하는 설정이에요. 더 빠른 대신 토큰 당 비용이 높아져요.

> 🚗 **비유로 설명하면**: 같은 길을 고속도로로 가면 빠르지만 통행료가 더 비싸요. Fast 모드는 클로드한테 "비용은 더 쓸게, 대신 빠르게 답해줘"라고 말하는 거예요.

Fast 모드는 **다른 모델이 아니에요.** 같은 Opus가 다른 API 설정으로 동작하는 거라서 **품질은 동일**해요.

---

## 변경 요약 (2026-07-24 기준)

| 항목 | 이전 | 현재 (2026-08) |
|------|------|---------------|
| 기본 모델 | Opus 4.7 → 4.8 | **Opus 5** |
| Opus 4.7 지원 | 있었음 | **완전 제거** (2026-07-24) |
| 가격 (입력/출력) | $10/$50 per MTok | **$10/$50 per MTok** (동일) |
| 지원 모델 | Opus 4.8 | **Opus 5**, Opus 4.8 |

<div class="note-star">
💡 <strong>가격 정정 안내</strong>: 이전 자료에 $30/$150로 잘못 기재됐습니다. 공식 가격은 <strong>$10/$50 per MTok</strong>이에요 (리서치 프리뷰 기준, 변동 가능).
</div>

---

## 사용법

### 켜기/끄기

```bash
/fast
```

- `↯` 아이콘이 프롬프트 옆에 표시되면 Fast 모드 ON
- `/fast` 다시 입력하면 OFF

### 기본값으로 설정

```json
// ~/.claude/settings.json
{
  "fastMode": true
}
```

---

## 가격 상세

| 모델 | 입력(MTok) | 출력(MTok) |
|------|------------|------------|
| Opus 5 | $10 | $50 |
| Opus 4.8 | $10 | $50 |
| Opus 4.7 | ~~지원 종료~~ | ~~2026-07-24~~ |

> 💰 **절약 팁**: 대화 중간에 Fast 모드를 켜면 그 시점까지 쌓인 **전체 대화 맥락을 다시 계산**해서 비용이 더 들어요. 처음부터 켜는 게 더 저렴해요.

---

## 언제 쓰면 좋나요?

### ✅ Fast 모드 ON이 유리한 상황

- 코드 수정을 빠르게 여러 번 반복할 때
- 라이브 디버깅으로 실시간 피드백이 필요할 때
- 시간이 촉박한 작업

### ❌ 기본 모드가 더 나은 상황

- CI/CD 파이프라인처럼 배치 처리할 때
- 긴 자율 작업 (속도보다 비용이 중요)
- 비용을 아껴야 할 때

---

## 이용 조건

<div class="note-star">
⚠️ <strong>중요 조건</strong><br />
• Pro·Max·Team·Enterprise: <strong>사용량 크레딧(Usage Credits)</strong>이 활성화되어 있어야 해요<br />
• Team·Enterprise: <strong>Owner가 먼저 활성화</strong>해야 구성원이 쓸 수 있어요<br />
• Amazon Bedrock, Google Cloud, Microsoft Foundry에서는 <strong>지원 안 됨</strong><br />
• 속도 제한(Rate Limit) 초과 시 자동으로 일반 속도로 전환 → ↯ 아이콘이 회색으로 바뀜
</div>

### Pro/Max 사용자

```
설정 → Usage → Usage Credits 섹션에서 활성화
또는 /usage-credits 명령어
```

### Team/Enterprise 관리자

```
Admin Settings → Claude Code → Fast 모드 활성화
```

---

## Fast 모드 vs 노력 수준(Effort Level)

| 설정 | 효과 |
|------|------|
| Fast 모드 ON | 같은 품질, 응답 속도 빠름, 비용 높음 |
| 노력 수준 낮춤 | 생각 시간 줄임, 빠름, 복잡한 문제엔 품질 다소 낮아질 수 있음 |

두 가지를 **동시에** 쓸 수도 있어요. 간단한 작업을 최대한 빠르게 처리하고 싶을 때:

```bash
/fast        # Fast 모드 켜기
/effort low  # 노력 수준도 낮추기
```

---

## 관련 문서

- 🎛️ [음성 입력 & Fast 모드](./voice-fast.md) — 기존 개요 (Opus 4.7 기준, 업데이트됨)
- 💰 [요금 이해하기](../config/settings-json.md)
- 🤖 [모델 설정](../config/settings-json.md)
