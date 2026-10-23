---
title: "[공] 2026년 7~9월 주요 업데이트 — W30~W37 핵심 요약"
description: "Claude Code W30(7월)부터 W37(9월)까지 8주간 출시된 핵심 기능들을 입문자 눈높이에서 정리했어요."
tags: ["자동생성", "업데이트", "whats-new", "2026", "W30", "W37"]
category: "reference"
order: 9
lastUpdated: "2026-10-23"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 기준 — code.claude.com/docs/en/whats-new/ 시리즈 (W30~W37) 직접 확인.
</div>

## 8주 동안 뭐가 바뀌었나요?

2026년 7월 20일 ~ 9월 11일, Claude Code는 **8주 연속 대형 업데이트**를 냈어요. 버전은 v2.1.214에서 v2.1.269까지 올라갔고요.

> 📅 W31은 공식 릴리스 없음 (공식 문서 미게시).

---

## ⭐ W30 (7월 20~24일) — Claude Opus 5 기본값 전환

### 핵심 변화

| 항목 | 내용 |
|------|------|
| **기본 Opus 모델** | Claude Opus 5로 교체 (Max·Team·Enterprise·API) |
| **Fast Mode** | Opus 5 고속 실행, $10/$50 per MTok |
| **iOS 시뮬레이터** | Desktop 앱에서 iPhone 앱 실시간 테스트 패인 (Pro/Max/Team 공개 베타) |
| **Claude Security 플러그인** | `/plugin install claude-security@claude-plugins-official` 으로 코드 취약점 자동 스캔 |

```text Claude Code
> /model claude-opus-5
> /plugin install claude-security@claude-plugins-official
```

> 🛡️ Claude Security 플러그인은 멀티 에이전트가 코드 전체를 스캔하고, 발견된 취약점마다 독립 검토 후 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 보고서를 만들어줘요.

---

## ⭐ W32 (8월 3~7일) — Auto mode 기본값 + Self-hosted 베타

**Pro·Max·Team 플랜에서 Auto mode가 기본값**으로 바뀌었어요. 이제 처음 설치하면 Auto mode로 시작해요.

**Self-hosted environments** (자체 인프라에서 Claude Code 실행)도 **공개 베타**로 출시됐어요. 회사 내부망 안에서 Claude Code를 돌릴 수 있게 됐어요.

> 🏠 **비유**: 카페 와이파이(Anthropic 서버)가 아니라, 우리 회사 건물 안에 있는 와이파이(자체 서버)를 써서 Claude Code를 사용할 수 있게 된 거예요.

---

## ⭐ W33 (8월 10~14일) — Fork mode 기본값 + GitLab 지원

### Fork mode 기본값 ON

**Interactive 세션에서 Fork mode가 기본으로 켜졌어요.** Fork 서브에이전트는 전체 대화 기록을 물려받아 시작하므로, 긴 대화 맥락을 다시 설명할 필요가 없어요.

```text Claude Code
> /subtask 지금까지 얘기한 파서 변경사항 기반으로 유닛 테스트 초안 써줘
```

### GitLab 머지 리퀘스트 지원

```bash
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

GitLab MR URL을 `--worktree`에 넣으면 자동으로 해당 브랜치 워크트리를 만들어줘요.

### 알아두면 좋은 것

- `@세션이름`으로 다른 Claude 세션에 메시지를 보낼 수 있어요 ([크로스 세션 메시징](https://code.claude.com/docs/en/cross-session-messaging))
- Opus 5+에서 TaskCreate 등 태스크 도구가 기본값으로 꺼졌어요 (`CLAUDE_CODE_ENABLE_TODO_TOOLS=1`로 재활성화)

---

## ⭐ W35 (8월 24~28일) — `/resume` + Restricted mode

### `/resume` — CLI 세션을 Desktop 앱에서 이어가기

터미널에서 시작한 세션을 Desktop 앱에서 그대로 이어갈 수 있어요.

```text Claude Code Desktop
> /resume
```

검색창에서 이전 세션을 찾고, Enter하면 대화가 그대로 복원돼요.

### Restricted mode — 안전한 비대화형 실행

명령 실행 도구 없이 Claude Code를 실행하는 모드예요.

```bash
claude --restricted -p "src/에서 SQL 인젝션 위험 코드 리뷰해줘"
```

평가 테스트나 공용 서버에서 안전하게 Claude Code를 쓸 때 유용해요.

### 그 외

- `promptCacheTtl: "1h"` 설정으로 1시간 프롬프트 캐시 유지 (API 키·클라우드 프로바이더)
- `/permissions` → **Auto mode** 탭에서 분류기 규칙 GUI로 편집 가능
- Desktop에서 사용량 한도 초과 시 **자동 재개 체크박스** 추가

---

## ⭐ W36 (8월 31일~9월 4일) — Fable 5.1 + `/diff` 패널 + `/skill-doctor`

### 주요 신기능 3가지

1. **Claude Fable 5.1** — `/model fable` 으로 즉시 전환, 1M 토큰 컨텍스트
2. **라이브 `/diff` 패널** — fullscreen 모드에서 파일 변경을 실시간으로 옆에 표시
3. **`/skill-doctor`** — 내가 등록한 스킬 중 사용 안 하는 것, 컨텍스트 낭비하는 것 진단

```text Claude Code
> /diff          (패널 열기/닫기)
> /skill-doctor  (스킬 사용량 분석)
```

> 🔬 **비유**: `/skill-doctor`는 냉장고 정리예요. 있지도 않은 재료를 목록에 올려두면 냉장고(컨텍스트 창)만 차지해요. 안 쓰는 스킬을 찾아서 끄면 Claude가 더 빠르게 답해줘요.

---

## ⭐ W37 (9월 7~11일) — `claude plugin eval` + Desktop 패인 팝아웃

### 플러그인 평가 테스트 (`claude plugin eval`)

내가 만든 플러그인이 실제로 잘 동작하는지 자동으로 점수를 매겨줘요.

```bash
# 테스트 케이스 초안 생성 (Claude가 제안)
claude plugin eval init

# 점수 측정
claude plugin eval .
```

결과는 터미널에 표로 뜨고, `evals/results/report.html`에 상세 보고서가 저장돼요.

### Desktop 패인 팝아웃

diff 창, 터미널 등 패인을 **별도 창으로 꺼낼 수** 있어요. 듀얼 모니터 사용자에게 특히 편리해요.

---

## 📋 전체 주요 기능 타임라인

| 주 | 하이라이트 |
|----|-----------|
| W30 | Opus 5 기본값 전환, iOS 시뮬레이터, Claude Security |
| W32 | Auto mode 기본값, Self-hosted environments 공개 베타 |
| W33 | Fork mode 기본값 ON, GitLab MR 지원 |
| W34 | (소규모 개선) |
| W35 | `/resume` CLI→Desktop, Restricted mode, `promptCacheTtl` |
| W36 | Fable 5.1, 라이브 `/diff` 패널, `/skill-doctor` |
| W37 | `claude plugin eval`, Desktop 패인 팝아웃 |

---

## 관련 공식 문서

- [공] [What's New 인덱스](https://code.claude.com/docs/en/whats-new/index)
- [공] [모델 설정](https://code.claude.com/docs/en/model-config)
- [공] [서브에이전트](https://code.claude.com/docs/en/sub-agents)
- [공] [스킬 관리](https://code.claude.com/docs/en/skills)
