---
title: "[공] Fast Mode(패스트 모드) — Opus를 2.5배 빠르게"
description: "Fast Mode는 Claude Opus를 최대 2.5배 빠르게 실행하는 고속 설정이에요. /fast 명령어로 켜고 끄며, Opus 5·Opus 4.8에서 $10/$50 per MTok으로 제공됩니다"
tags: ["자동생성", "FastMode", "패스트모드", "Opus5", "속도", "비용", "/fast"]
category: "advanced"
order: 27
lastUpdated: "2026-08-14"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a> [공]<br />
★ Opus 5에서 Fast Mode 가격이 <strong>$10/$50 per MTok</strong>으로 인하됨 (이전: $30/$150)<br />
★ 리서치 프리뷰 기능 — 가격·가용성 변경될 수 있음
</div>

## Fast Mode(패스트 모드)가 뭔가요?

**Claude Opus 모델을 최대 2.5배 빠르게 실행하는 고속 설정**이에요. 품질은 그대로이고 속도만 빨라집니다.

> ⚡ **비유로 설명하면**: 도시철도(지하철)와 KTX(고속철도)를 생각해보세요. 같은 역에서 같은 도시로 가는데, KTX가 훨씬 빠르지만 요금이 비싸죠. Fast Mode도 마찬가지예요 — 같은 Opus 모델인데 가격을 더 내면 2.5배 빠르게 답해줘요.

Fast Mode는 **다른 모델이 아니에요**. Opus에 다른 API 설정을 적용해서 응답 속도를 높인 것이고, 품질과 기능은 완전히 동일합니다.

---

## 지원 모델과 가격

| 모델 | 입력 (MTok) | 출력 (MTok) |
|------|------------|------------|
| Opus 5 | **$10** | **$50** |
| Opus 4.8 | **$10** | **$50** |

> 📌 Sonnet, Haiku 등 다른 모델에는 Fast Mode가 없어요. Opus 4.7은 2026년 7월 24일부터 완전 지원 종료.

---

## 어떻게 켜고 끄나요?

### `/fast` 명령어 (가장 쉬운 방법)

```text
> /fast
```

- 현재 상태 확인 및 켜기/끄기 토글
- 켜지면 메시지: "Fast mode ON"
- 상태 표시줄에 `↯` 아이콘 표시

### 설정 파일로 영구 설정

```json
// ~/.claude/settings.json
{
  "fastMode": true
}
```

> 💡 한 번 켜두면 세션이 끝나도 유지돼요. 꺼도 Opus 모델은 유지됩니다 (다른 모델로 바꾸려면 `/model` 사용).

---

## 언제 쓰는 게 좋을까요?

### ✅ Fast Mode가 좋은 상황

| 상황 | 이유 |
|------|------|
| 빠른 반복 코딩 | 수정→확인→수정 사이클이 짧을 때 |
| 실시간 디버깅 | 오류 원인을 빨리 찾아야 할 때 |
| 마감이 급할 때 | 시간이 비용보다 중요할 때 |

### ❌ Fast Mode를 끄는 게 나은 상황

| 상황 | 이유 |
|------|------|
| 장시간 자율 작업 | 서브에이전트가 오래 돌아갈 때 (속도보다 비용 절감) |
| CI/CD 파이프라인 | 사람이 기다리지 않을 때 |
| 비용이 민감할 때 | 대량 처리·배치 작업 |

---

## Fast Mode vs 노력 수준(Effort Level) 차이

두 가지 모두 속도에 영향을 주지만, 작동 방식이 달라요:

| 설정 | 효과 |
|------|------|
| **Fast Mode** | 같은 품질, 낮은 응답 지연, 높은 비용 |
| **낮은 Effort Level** | 생각 시간 감소, 빠른 응답, 복잡한 작업에서 품질 저하 가능 |

> 🚀 **둘 다 함께 쓰기**: Fast Mode ON + 낮은 Effort Level = 단순 작업에서 최고 속도!

---

## 비용 계산 시 주의할 점

Fast Mode를 **대화 중간에** 켜면 그 시점까지 대화 내용 전체에 대해 Fast Mode 요금이 한 번 부과돼요. 대화가 길어진 뒤에 켜면 비용이 더 많이 나올 수 있어요.

> 💰 **팁**: Fast Mode는 **세션 시작부터** 켜두는 게 가장 비용 효율적이에요.

비용 확인 방법:
- **Pro/Max**: claude.ai → Settings > Usage → Usage credits 섹션
- **Team/Enterprise**: Admin Settings > Usage
- **Console**: Usage/Cost 페이지 → "Group by: Speed (Research Preview)"

---

## 사용 요건

Fast Mode를 쓰려면 다음 조건이 모두 필요해요:

1. **Anthropic API 또는 구독 플랜** (Pro/Max/Team/Enterprise)
   - Amazon Bedrock·Google Cloud·Microsoft Foundry에서는 Fast Mode 없음
2. **Usage Credits(이용 크레딧) 활성화** (구독 플랜의 경우)
   - 없으면: `/fast` 실행 시 "Fast mode requires usage credits" 메시지
3. **팀/엔터프라이즈**: Owner가 Admin Settings에서 Fast Mode 활성화 필요

---

## 요금제 표시 요약

| 항목 | 내용 |
|------|------|
| 지원 모델 | Opus 5, Opus 4.8 |
| 가격 | $10 입력 / $50 출력 (per MTok) |
| 결제 | Usage Credits에서 차감 |
| 상태 | 리서치 프리뷰 (가격·가용성 변경 가능) |
| 최소 버전 | v2.1.219 (Opus 5 기본값부터) |

> 🔬 **리서치 프리뷰(Research Preview) 주의**: Fast Mode는 아직 정식 출시 전이에요. 가격·가용성이 바뀔 수 있으니 중요한 결정 전 공식 문서 확인을 권장합니다.
