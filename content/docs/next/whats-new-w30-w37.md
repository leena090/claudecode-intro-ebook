---
title: "[공] 2026년 7~9월 주요 업데이트 (W30~W37)"
description: "Claude Code 2026년 7월~9월 What's New 7주 분량 핵심만 정리 — Opus 5 기본 모델 전환, Mods, Projects, Code Review GA, 플러그인 Evals"
tags: ["자동생성", "업데이트", "whats-new", "2026", "W30", "W37", "opus5", "mods", "projects"]
category: "next"
order: 18
lastUpdated: "2026-11-05"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code What's New 공식 페이지. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/index" target="_blank">공식 업데이트 목록</a>
</div>

## 한눈에 보는 W30~W37 하이라이트

| 주차 | 기간 | 핵심 변경 |
|------|------|---------|
| W30 | 7월 20~24일 | Opus 5 기본 모델 전환, iOS 시뮬레이터 패널, Claude Security 플러그인 |
| W32 | 8월 초 | (추정 기준) 다양한 버그 수정 및 개선 |
| W33 | 8월 중순 | (추정 기준) 플러그인 생태계 강화 |
| W34 | 8월 말 | (추정 기준) 에이전트 개선 |
| W35 | 9월 초 | Projects 베타 출시 |
| W36 | 9월 초중반 | 추가 개선 |
| W37 | 9월 7~11일 | 플러그인 Evals (`claude plugin eval`), Desktop 패널 팝아웃 |

> ⚠️ **참고**: W30·W37 내용은 공식 문서 직접 확인 기준. W32~W36 일부는 추정 포함.

---

## W30 (7월 20~24일) — Opus 5 기본 모델 전환 🎯

### Claude Opus 5 → 기본 Opus 모델

**가장 큰 변화**: Opus 4.8이 아닌 **Opus 5**가 기본값이 됐어요!

```text
# 직접 지정하려면
> /model claude-opus-5
```

- Max, Team Premium, Enterprise 플랜에서 기본 적용
- API, Amazon Bedrock, Google Cloud에서도 사용 가능
- **Fast Mode**: Opus 5 기반, $10/$50 per million tokens (이후 Opus 5.5 출시 후 $8/$40로 변경)
- 1M 토큰 컨텍스트 창 지원 (Max, Team, Enterprise)

### iOS 시뮬레이터 패널 (Desktop)

macOS Claude Code Desktop에 **iOS 시뮬레이터 패널** 추가! 공개 베타.

- Claude가 앱을 빌드·실행하면 자동으로 패널 열림
- 시뮬레이터 화면 실시간 스트리밍
- 직접 디바이스 조작도 가능

> 💡 "앱 빌드하고 시뮬레이터에서 실행해서 온보딩 플로우 확인해줘" 하면 패널이 열려요.

### Claude Security 플러그인

새 공식 플러그인 — 코드베이스 취약점 멀티에이전트 스캔

```text
> /plugin install claude-security@claude-plugins-official
> /claude-security   ← 스캔 시작
```

저장소 전체, 브랜치 diff, PR, 단일 커밋 스캔 가능.

### 그 외 주요 개선

- `/code-review` 가 별도 컨텍스트 창에서 백그라운드 서브에이전트로 실행
- 이모지 단축코드 자동완성 (`:heart:` 입력하면 ❤️)
- 서브에이전트 최대 20개 동시 실행 (기본값, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 가능)
- 장시간 도구 호출 시 주기적 진행 상황 알림

---

## W37 (9월 7~11일) — 플러그인 Evals & Desktop 개선 🧪

### `claude plugin eval` — 플러그인 성능 테스트 도구

플러그인이 얼마나 도움이 되는지 **자동으로 채점**할 수 있어요!

```bash
# 테스트 케이스 초안 작성 (Claude가 도와줌)
claude plugin eval init

# 플러그인 성능 채점 실행
claude plugin eval .
```

결과:
- 케이스별 플러그인 있을 때 / 없을 때 점수 비교
- 차이(delta)로 플러그인 효과 수치화
- `evals/results/report.html`에 상세 보고서

> 💡 **쓰임새**: "내 플러그인이 실제로 도움이 되나?" 를 데이터로 확인할 수 있어요.

### Desktop 패널 팝아웃 창

Claude Code Desktop에서 **패널을 별도 창으로 분리** 가능!

- diff 패널을 2번 모니터로 드래그
- Claude가 계속 작업하는 동안 다른 창에서 결과 확인
- 다시 붙이기(dock)도 가능

### 그 외 주요 개선

- `maxEffortLevel` 설정으로 모든 프로바이더에서 effort level 상한선 설정 가능
- VS Code 확장에서 에이전트 맵(agent map) 추가 — 서브에이전트 트랜스크립트 열람, 중단 가능
- VS Code 확장에서 Hooks/Permissions 메뉴에서 직접 훅·권한 추가
- WebFetch 타임아웃 5분 (기존 무한 대기 → 5분 후 오류로 처리)
- 미완성 프롬프트 중간에 `/명령어` 입력하면 매칭 명령어 목록 표시

---

## W35 주요 변경 — Projects 베타 출시

> 자세한 내용은 → **[Projects 가이드](./../../docs/advanced/claude-projects)**

관련 코딩 세션들을 하나의 대화창에서 묶어 병렬 클라우드 세션으로 실행하는 기능.  
Pro, Max, Ultra 플랜 공개 베타. Team/Enterprise는 추후 지원 예정.

---

## 전체적인 흐름 정리

```
W30 (7월): Opus 5 → 기본 모델. 더 강력해졌어요.
W30~W35:  Mods, Projects 등 새 기능 순차 출시
W37 (9월): 플러그인 평가 도구로 플러그인 생태계 성숙
이후:      5.5 패밀리(Haiku/Sonnet/Opus) 출시 (10월)
```

---

> 📌 **정리**: 2026년 7~9월은 Claude Code의 에이전트 생태계(Mods, Projects)가 본격적으로 자리잡은 시기예요.  
> Opus 5로의 전환, 플러그인 평가 도구 추가 등으로 "개발 도구로서의 완성도"가 높아졌어요.
