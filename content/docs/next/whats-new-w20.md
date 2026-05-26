---
title: "[공] 2026년 Week 20 업데이트 — Agent View, /goal, Fast 모드 Opus 4.7"
description: "5월 11~15일 릴리즈: 여러 세션 한 화면 관리, 목표 설정 자율 실행, Fast 모드 최신 모델 적용"
tags: ["자동생성", "whats-new", "agent-view", "goal", "fast-mode", "opus47", "week20"]
category: "next"
order: 7
lastUpdated: "2026-05-22"
---

<div class="note-star">
★ <strong>출처</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w20">code.claude.com/docs/en/whats-new/2026-w20</a> (v2.1.139 → v2.1.142, 2026-05-11~15) <code>[공]</code>
</div>

## Week 20 핵심 3가지

이번 주엔 Claude Code를 **혼자 일하는 부하직원 → 팀을 이끄는 PM**으로 업그레이드하는 기능들이 나왔어요.

---

## 1️⃣ Agent View — 여러 작업을 한 화면에서

### 어떤 기능인가요?

```bash
claude agents
```

이 명령어 하나로 **지금 돌아가는 모든 Claude Code 세션을 한 화면**에서 볼 수 있어요.

🍱 **비유**: 사무실 CCTV 모니터 같은 거예요. 직원 A는 버그 수정 중, 직원 B는 PR 리뷰 중, 직원 C는 테스트 조사 중 — 전부 한 화면에서 상태를 확인하고, 필요할 때만 들어가서 지시하면 됩니다.

### 어떻게 쓰나요?

```bash
# 대시보드 열기
claude agents

# 특정 디렉터리의 세션만 보기
claude agents --cwd ./my-project
```

- 각 세션은 "실행 중 / 내 입력 기다림 / 완료" 상태로 표시
- 세션 행을 선택하면 **그 대화로 바로 들어가기**
- `←` 키를 누르면 다시 목록으로
- 터미널을 닫아도 백그라운드 세션은 계속 실행

### 새로 추가된 플래그들

```bash
claude agents \
  --add-dir ./extra-context \
  --model claude-opus-4-7 \
  --permission-mode plan \
  --effort high
```

| 플래그 | 설명 |
|---|---|
| `--add-dir <경로>` | 추가 디렉터리를 세션에 포함 |
| `--model <모델명>` | 사용할 모델 지정 |
| `--permission-mode <모드>` | 허가 모드 설정 |
| `--effort <레벨>` | 작업 깊이 설정 (low/medium/high) |
| `--settings <파일>` | 커스텀 설정 파일 경로 |

<div class="note-circle">
○ 리서치 프리뷰 단계입니다. 기능이 계속 발전 중이에요.
</div>

---

## 2️⃣ /goal — "이게 될 때까지 알아서 해줘"

### 어떤 기능인가요?

```
> /goal 테스트 디렉터리의 모든 auth 테스트가 통과하고 lint가 깨끗한 상태
```

이렇게 **완료 조건**을 말하면, Claude가 그 조건을 달성할 때까지 **자동으로 여러 턴을 진행**합니다.

🍱 **비유**: 내비게이션처럼요. "목적지: 부산"을 입력하면, 신호등·주유·우회로 상황을 알아서 처리하고 도착할 때까지 안내합니다. 중간마다 "이제 어디로 갈까요?"라고 묻지 않아요.

### 사용 예시

```
> /goal auth 테스트 전체 통과 + lint 에러 없음
```

→ Claude가 알아서 테스트 실행 → 실패 분석 → 코드 수정 → 재실행 ... 목표 달성 시 자동 종료

```
> /goal 로그인 페이지 TypeScript 에러 없이 빌드 성공
```

→ tsc 실행 → 에러 수정 → 재빌드 ... 완료 시 "목표 달성" 알림

### 어디서 쓸 수 있나요?

- 일반 대화 중 (`/goal` 명령어)
- `claude -p` 비대화 모드
- Remote Control (모바일에서 지시)

<div class="note-star">
★ <strong>목표 달성 판단 방식</strong>: 매 턴이 끝날 때마다 빠른 판단 모델이 조건 충족 여부를 확인합니다. 목표 클리어 시 자동으로 종료돼요. <code>[공식]</code>
</div>

---

## 3️⃣ Fast 모드 → Opus 4.7 기본값

### 무엇이 바뀌었나요?

`/fast` 명령어를 켰을 때 이제 **Opus 4.7**이 기본으로 실행됩니다. (이전엔 Opus 4.6)

| 항목 | 이전 | 이후 |
|---|---|---|
| Fast 모드 기본 모델 | Opus 4.6 | **Opus 4.7** |
| 속도 | 2.5배 빠름 | 동일 (2.5배 빠름) |
| 요금 | $30/$150 per MTok | **동일** (변경 없음) |

### Opus 4.6으로 고정하고 싶다면?

```bash
# 환경변수 설정으로 Opus 4.6 고속 모드 유지
export CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1
```

<div class="note-circle">
○ 요금은 그대로입니다. 더 좋은 모델로 같은 가격에 업그레이드된 셈이에요. 🎉
</div>

---

## 그 외 소소한 개선들

<details>
<summary>자세히 보기 (기술 사용자용)</summary>

| 항목 | 내용 |
|---|---|
| **Rewind에 "여기까지 요약"** | 오래된 컨텍스트를 압축하면서도 최근 대화는 보존 |
| **Hook args 배열 형식** | `args: string[]` 형태로 작성하면 쉘 없이 직접 실행 (경로에 공백 있어도 안전) |
| **PostToolUse `continueOnBlock`** | 훅이 거부해도 이유를 Claude에게 알려주고 턴 계속 진행 |
| **`terminalSequence` 출력** | 훅이 터미널 알림·창 제목·벨 소리를 보낼 수 있게 됨 |
| **MCP에 `CLAUDE_PROJECT_DIR`** | MCP stdio 서버도 현재 프로젝트 디렉터리 경로를 환경변수로 받음 |
| **API Key 설정 시 일부 기능 비활성화** | `ANTHROPIC_API_KEY` 등 설정 시 Remote Control·/schedule·Claude.ai MCP 커넥터 자동 비활성화 |
| **`claude plugin details <이름>`** | 플러그인 컴포넌트 목록 + 세션당 예상 토큰 비용 표시 |
| **/feedback 범위 확장** | 최근 24시간 또는 7일 세션을 포함해서 신고 가능 |

</details>

---

## 한 줄 요약

> **Agent View**로 여러 작업을 한눈에 → **`/goal`**로 달성 조건만 주고 기다리기 → **Fast 모드**는 이제 Opus 4.7로 더 스마트하게.

---

## 더 알아보기

- [Agent View 공식 문서](https://code.claude.com/docs/en/agent-view) `[공]`
- [/goal 명령어 문서](https://code.claude.com/docs/en/goal) `[공]`
- [Fast 모드 문서](https://code.claude.com/docs/en/fast-mode) `[공]`
- [이 ebook의 Agent View 문서](/docs/advanced/agent-view)
- [이 ebook의 /goal 명령어 문서](/docs/commands/goal-command)
