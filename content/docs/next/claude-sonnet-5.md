---
title: "[블] Claude Sonnet 5 출시 — 코딩·에이전트·전문 업무 최전선 성능"
description: "2026년 6월 30일 발표된 Claude Sonnet 5. 코딩, 에이전트 작업, 전문 업무에서 최상급 성능을 균형 있는 속도로 제공"
tags: ["sonnet5", "claude-sonnet-5", "신규모델", "2026", "블로그", "자동생성"]
category: "next"
order: 18
lastUpdated: "2026-07-08"
---

<div class="note-star">
★ <strong>Anthropic 공식 블로그 발표 기준</strong> (2026-06-30). <code>[블]</code><br />
⚠️ <strong>모델 ID, 가격, 컨텍스트 등 세부 사항은 공식 발표문 기준</strong> — 추가 해석은 "추정"으로 표시
</div>

---

## Claude Sonnet 5가 뭔가요? 🆕

**2026년 6월 30일**, Anthropic이 **Claude Sonnet 5**를 발표했어요.

> 공식 설명: *"Sonnet 5 delivers frontier performance across coding, agents, and professional work at scale."*
> (코딩, 에이전트, 전문 업무 전반에서 최전선 수준의 성능을 대규모로 제공한다)

> 🍱 **비유**: 모델 가족 중에서 Sonnet은 "빠른 속도와 강한 성능을 동시에 잡는 중간 타자"예요. Haiku보다 훨씬 강하고, Opus보다 빠른 균형형이에요. Sonnet 5는 그 Sonnet 라인업의 최신 세대예요.

---

## Claude 모델 라인업 전체 그림

| 모델 | 특징 | 용도 |
|---|---|---|
| **Haiku 4.5** | 가장 빠름·가장 저렴 | 간단한 작업, 대량 처리 |
| **Sonnet 5** ← 신규 | 빠름·강한 성능 균형 | 코딩, 에이전트, 전문 업무 |
| **Opus 4.8** | 최상급 성능 | 복잡한 분석, 대형 프로젝트 |
| ~~Fable 5·Mythos 5~~ | 실험적 최상위 | (수출통제로 현재 접근 제한) |

---

## Sonnet 5의 핵심 강점

공식 발표 기준으로 Sonnet 5가 특히 강조하는 영역이에요.

### 🖥️ 코딩 (Coding)
- 복잡한 코드베이스 이해 및 수정
- 버그 탐지와 수정 정확도 향상
- 테스트 코드 작성 품질 개선

### 🤖 에이전트 작업 (Agents)
- 멀티스텝 작업에서의 일관성 유지
- 서브에이전트·워크플로 활용 시 성능
- 도구 사용(Tool Use) 정확도

### 💼 전문 업무 (Professional work at scale)
- 대규모 조직 환경에서의 안정적 성능
- 긴 컨텍스트 처리 능력
- 분석·요약·문서화 등 다양한 업무

---

## Claude Code에서 Sonnet 5 사용하기

Claude Code에서 모델을 바꾸는 방법이에요.

```bash
# CLI에서 모델 지정
claude --model claude-sonnet-5

# 세션 안에서 변경
/model claude-sonnet-5

# 또는 /config로
/config model=claude-sonnet-5
```

**settings.json에서 기본 모델 설정:**

```json
// .claude/settings.json
{
  "model": "claude-sonnet-5"
}
```

<div class="note-circle">
○ 정확한 모델 ID는 <code>claude-sonnet-5</code>예요 (추정 — 공식 확인 필요)<br />
○ 현재 Claude Code의 기본 모델은 <code>claude-sonnet-4-6</code>이에요
</div>

---

## Sonnet 4.6에서 Sonnet 5로 바꿔야 할까요?

| 상황 | 추천 |
|---|---|
| 코딩 품질을 더 높이고 싶다 | ✅ Sonnet 5 시도 |
| 빠른 응답이 최우선이다 | 현재 모델 유지 또는 Haiku |
| 예산을 절약하고 싶다 | Sonnet 4.6 유지 (가격 차이 공식 확인 필요) |
| 복잡한 분석·계획이 필요하다 | Opus 4.8 고려 |

<div class="note-circle">
○ 가격·속도 비교는 공식 anthropic.com 가격 페이지에서 확인하세요<br />
○ 일주일 정도 Sonnet 5로 써보고 본인 작업에 맞는지 판단하는 걸 추천해요
</div>

---

## Sonnet 5와 같은 날 발표된 것들 (2026-06-30)

같은 날 Anthropic에서 세 가지가 동시에 발표됐어요.

| 발표 | 내용 |
|---|---|
| **Claude Sonnet 5** | 코딩·에이전트·전문 업무 최전선 모델 |
| **Fable 5 재배포** | 수출 통제 해제 후 Fable 5 글로벌 재공개 + 보안 프레임워크 |
| **Claude Science** | 과학자를 위한 AI 워크벤치 (연구 도구·계산 환경 통합) |

> 🍱 **비유**: 같은 날 신제품 3개를 동시에 출시한 것처럼 Anthropic의 빠른 제품 출시 속도를 보여주는 날이었어요.

<div class="note-circle">
○ 공식 블로그 원문: anthropic.com/news/claude-sonnet-5 (2026-06-30 발표)<br />
○ Fable 5는 2026-06-12 수출통제 지시 이후 약 2.5주 만에 재배포됐어요
</div>
