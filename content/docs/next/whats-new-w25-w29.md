---
title: "[공] 주간 업데이트 모음: 2026년 6월 15일 ~ 7월 18일 (Week 25~29)"
description: "Sonnet 5 출시 & 기본 모델 전환, Fable 5 글로벌 복귀, Android 앱 정식 출시, Linux 데스크톱 베타, Claude for Teachers"
tags: ["업데이트", "2026", "week25", "week26", "week27", "week28", "week29", "sonnet5", "android", "linux", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-19"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Week 25~29 (2026-06-15 ~ 2026-07-18) 업데이트 모음. <code>[공]</code><br />
👉 원문: <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">whats-new/2026-w25</a> ~ <a href="https://code.claude.com/docs/en/whats-new/2026-w29" target="_blank">whats-new/2026-w29</a>
</div>

이번 5주는 Claude Code 역사에서 가장 굵직한 변화가 몰린 기간이에요. 새 모델 출시, 모바일 앱 확장, Linux 지원까지 — 정리해드릴게요.

---

## 🏆 이 기간 핵심 변화 5가지

| 항목 | 시기 | 한 줄 요약 |
|------|------|-----------|
| Sonnet 5 기본 모델 전환 | W27 (Jul 1) | 더 강력한 Sonnet 5가 기본값으로 |
| Fable 5 글로벌 복귀 | W27 (Jul 1) | 수출통제로 잠시 중단 후 재개 |
| Android 앱 정식 출시 | W29 | Google Play에서 내려받기 가능 |
| Linux 데스크톱 앱 베타 | W29 | macOS·Windows에 이어 Linux까지 |
| Claude for Teachers | W29 (Jul 14) | 교육자 전용 Claude 서비스 출시 |

---

## W27 핵심 — 기본 모델이 바뀌었어요 🔄

### Sonnet 5가 새 기본 모델 (2026-07-01)

Claude Code를 실행하면 이제 **Sonnet 5**가 기본으로 적용돼요 (이전: Opus 4.8).

> 🍱 **비유**: 스마트폰 새 기종이 나오면 마트 진열대 정중앙 자리를 차지하는 것처럼, Sonnet 5가 Claude Code의 "기본 자리"를 받았어요.

```
모델 계층 (2026-07-01 이후):
────────────────────────────
🏆 Fable 5          ← 최상위 (초고성능)
🥈 Opus 4.8         ← 고성능 (대형 코드베이스)
✅ Sonnet 5         ← 기본값 ← 새로 바뀜
   Haiku 4.5        ← 경량 (빠른 작업)
```

**Sonnet 5로 모델 확인하기:**
```bash
# 현재 사용 중인 모델 확인
/model

# 명시적으로 Sonnet 5 선택
/model claude-sonnet-5
```

<div class="note-circle">
○ 기존 설정 파일(settings.json)에 <code>"model"</code>이 Opus 4.8로 고정되어 있다면 그대로 유지돼요<br />
○ 기본값만 바뀐 것이고, 여전히 Opus 4.8이나 Fable 5로 바꿀 수 있어요
</div>

---

### Fable 5 글로벌 복귀 (2026-07-01)

지난 6월 12일 미국 정부 수출통제로 접근이 중단됐던 **Fable 5**가 7월 1일 전 세계에서 다시 사용 가능해졌어요.

> Anthropic은 Fable 5 복귀와 함께 Amazon, Microsoft, Google 등과 공동으로 **잼브레이크(Jailbreak) 심각도 평가 프레임워크**를 제안했어요 (공식 발표 기준).

```bash
# Fable 5 사용하기 (고성능 작업에 필요할 때)
/model fable
```

자세한 내용은 → **[신규 모델 총정리: Opus 4.8, Fable 5 (2026년 5~6월)]** 및 **[Sonnet 5 & Fable 5 복귀 — 2026년 7월]** 문서를 참고해요.

---

## W29 핵심 — 모바일 & Linux 확장 📱🐧

### Android 앱 정식 출시

이제 **Android 기기**에서도 Claude Code를 쓸 수 있어요. Google Play에서 내려받을 수 있어요.

| 플랫폼 | 다운로드 |
|--------|---------|
| iOS | App Store |
| Android | **Google Play** ← 신규 |

> 🍱 **비유**: 지하철에서 노트북 없어도, 스마트폰으로 AI가 짜준 코드 결과를 확인하고 "좋아, 배포해" 한 마디만 하면 돼요.

모바일 활용법 → **[스마트폰으로 Claude Code 쓰기]** 문서 참고.

---

### Linux 데스크톱 앱 베타

Claude Code 데스크톱 앱이 **Linux 베타**를 시작했어요 (공식 문서: `desktop-linux` 페이지 추가 기준).

| 플랫폼 | 상태 |
|--------|------|
| macOS | ✅ 정식 |
| Windows | ✅ 정식 |
| Linux | 🆕 베타 |

<div class="note-circle">
○ Linux 베타는 아직 안정화 단계예요 — 일부 기능이 제한될 수 있어요<br />
○ 터미널(CLI)은 Linux에서 이미 완벽히 작동해요 — 데스크톱 GUI가 추가된 거예요
</div>

---

## W28 주목할 소식 — Claude Code 탄생 비화 📖

Anthropic이 2026년 7월 6일 블로그에 **"The Making of Claude Code"**를 공개했어요. Claude Code가 내부 CLI 도구에서 공식 코딩 에이전트로 성장한 과정을 담은 이야기예요.

자세한 내용 → **[Claude Code 탄생 비화 — The Making of Claude Code]** (stories 섹션) 참고.

---

## W25~W26 기타 변화

| 항목 | 날짜 | 내용 |
|------|------|------|
| 서울 오피스 공식 개설 | Jun 17 | 한국 AI 생태계 파트너십 발표 |
| Claude Tag (Slack) | Jun 23 | Slack 팀 협업용 Claude 기능 |
| Claude Science | Jun 30 | 과학자용 AI 워크벤치 (코딩 ebook 범위 외) |

<div class="note-circle">
○ Week 25~29 범위: 2026년 6월 15일 ~ 7월 18일<br />
○ 이 기간 Claude Code 버전: 공식 문서 각 whats-new 페이지에서 확인하세요<br />
○ 모델 기본값 변경 (Opus 4.8 → Sonnet 5): 기존 유료 구독자도 동일하게 적용
</div>
