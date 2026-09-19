---
title: "[공] What's New W30~W37 — 2026년 7~9월 주요 업데이트 정리"
description: "Opus 5 기본 모델 전환, Claude Security 플러그인, Self-hosted Environments, Fable 5.1/Mythos 5.1, claude plugin eval 등 2026년 7~9월 핵심 변경 사항"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "클로드보안플러그인", "셀프호스티드", "플러그인eval", "whats-new"]
category: "next"
order: 17
lastUpdated: "2026-09-19"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 What's New 기준 — <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a><br />
★ W30(2026-07-20) ~ W37(2026-09-11) 구간 (W31 공식 미게시)
</div>

## 한눈에 보는 주요 변경 타임라인

| 주차 | 날짜 | 핵심 변경 |
|---|---|---|
| **W30** | 7/20–24 | **Opus 5** 기본 모델 전환 · iOS 시뮬레이터 · Claude Security 플러그인 |
| **W32** | 8/4–8 | **Self-hosted Environments** 공개 베타 · Fable 5 생물학 안전장치 개선 |
| **W33** | 8/11–15 | **텍스트 워터마크** 세부 공개 |
| **W34** | 8/18–22 | 다양한 품질 개선 |
| **W35** | 8/25–29 | **Model Hardware Standard** 예고 · 과학자 지원 확대 |
| **W36** | 9/1–5 | **Fable 5.1 + Mythos 5.1** 신규 모델 출시 |
| **W37** | 9/7–11 | **`claude plugin eval`** 출시 · 데스크톱 팝아웃 창 |

> ⚠️ **W31(7/28–8/1)**: 공식 What's New 페이지가 미게시. 마이너 패치 주간으로 추정.

---

## W30 (7월 20–24일)

### 🆕 Claude Opus 5 — 새 기본 Opus 모델

`claude-opus-5`가 Claude Code의 새 **기본 Opus 모델**이 됐어요.

> 🍱 **비유**: Opus 4.8이 "작년 최고 선수"라면, Opus 5는 "이번 시즌 새로운 에이스"예요. 자동으로 업그레이드됩니다.

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **컨텍스트 창** | **1M 토큰** (Anthropic API · Max · Team · Enterprise) |
| **Fast Mode** | Opus 5 기준, **$10/$50 per MTok** (이전 Opus 4.8 기준 $30/$150에서 변경) |
| **적용 플랫폼** | Anthropic API, Max, Team Premium, Enterprise, Bedrock, Google Cloud Agent Platform |

```bash
# Opus 5로 전환
/model claude-opus-5
```

👉 [모델 설정 공식 문서](https://code.claude.com/docs/en/model-config)

---

### 🆕 iOS 시뮬레이터 패널 (Desktop, 베타)

macOS용 Claude Code Desktop에 **iOS 시뮬레이터 패널**이 추가됐어요 (Pro·Max·Team 공개 베타).

Claude가 앱을 빌드하거나 시뮬레이터에서 실행할 때, **실시간 화면 스트리밍**으로 옆 패널에서 바로 확인할 수 있어요.

```
> Build the app and run it in the simulator to check the onboarding flow.
```

> 📌 **요건**: Xcode + iOS 플랫폼 설치, Claude Desktop v1.24012.0 이상 필요

---

### 🆕 Claude Security 플러그인

**Claude Security** 플러그인이 공식 Anthropic 마켓플레이스에 출시됐어요.

코드베이스 전체를 **멀티 에이전트 취약점 스캔**으로 자동 검사해요:

1. 아키텍처 매핑
2. 위협 모델 구축
3. 취약점 탐지
4. 독립 검토 후 보고서 작성 → `CLAUDE-SECURITY-<타임스탬프>/` 폴더

```bash
# 설치 → 리로드 → 스캔 시작
/plugin install claude-security@claude-plugins-official
/reload-plugins
/claude-security
```

---

## W36 (9월 1–5일)

### 🆕 Claude Fable 5.1 + Mythos 5.1

**Fable 5.1**과 **Mythos 5.1**이 공식 출시됐어요 (2026년 9월 1일).

> 🍱 **비유**: 같은 엔진에 성능 튜닝을 마친 버전이에요. 코딩과 지식 업무 전반에서 더 정확해졌고, 과학 연구 능력도 초기 수준이지만 탑재됐어요.

| 모델 | 설명 |
|---|---|
| **claude-fable-5-1** | 코딩·복잡한 작업 최적화 |
| **claude-mythos-5-1** | 장기 추론·지식 업무 최적화 |

**주요 개선점** (공식 발표 기준):
- 코딩 및 지식 업무 성능 향상
- AI 모델의 과학 연구 기여 첫 번째 사례 수준의 연구 능력

👉 자세한 내용: [Fable 5.1 + Mythos 5.1 전용 문서](./fable-5-1-models.md)

---

## W37 (9월 7–11일)

### 🆕 `claude plugin eval` — 플러그인 평가 도구

플러그인을 **테스트 케이스로 자동 평가**하는 `claude plugin eval` 명령어가 출시됐어요.

> 🍱 **비유**: 플러그인 성적표예요. "이 플러그인이 있을 때 vs. 없을 때" 결과를 비교해서 얼마나 도움이 됐는지 점수로 보여줘요.

```bash
# 1단계: 테스트 초안 생성 (Claude가 대화로 도와줌)
claude plugin eval init

# 2단계: 평가 실행
claude plugin eval .
```

- 결과: 터미널에 점수 표 출력 + `evals/results/report.html` 저장
- 플러그인 있을 때 / 없을 때 점수 비교

---

### 🆕 데스크톱 패널 팝아웃

Claude Code Desktop에서 **패널을 독립 창으로 분리**할 수 있게 됐어요.

diff 창이나 터미널 창을 **두 번째 모니터에 띄워놓고**, Claude는 메인 창에서 계속 작업할 수 있어요.

---

## 기타 주목할 만한 작은 변경들 (W30–W37)

| 변경 | 설명 |
|---|---|
| `maxEffortLevel` 설정 | 모든 Provider(Bedrock, Google Cloud, Foundry 포함)에서 effort 레벨 상한 설정 가능 |
| `/code-review` 백그라운드 | 서브에이전트로 분리 실행, 대화 컨텍스트 오염 없음 |
| 이모지 자동완성 | `:heart:` 입력 시 이모지로 변환 (`emojiCompletionEnabled` 설정) |
| 동시 서브에이전트 한도 | 기본 20개, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 |
| WebFetch 타임아웃 | 5분 초과 시 자동 실패 (`CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 조정) |
| VS Code 에이전트 맵 | 프롬프트 입력창 하단 에이전트 수를 클릭 → 서브에이전트 지도 열기 |

---

## 요약: 지금 당장 체크할 것

1. ✅ **Fast Mode 가격 확인**: Opus 5 전환으로 $10/$50 per MTok으로 변경됨
2. ✅ **Claude Security 플러그인**: 코드 취약점 스캔 도구 설치 고려
3. ✅ **claude plugin eval**: 플러그인 개발자라면 테스트 자동화 시작
4. ✅ **Self-hosted Environments**: 회사 내부망에서 Claude Code 실행 필요하면 공식 베타 확인
