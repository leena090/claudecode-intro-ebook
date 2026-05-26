---
title: "[공] 주간 업데이트 Week 20 — 에이전트 뷰·/goal 자동 반복·Fast Mode Opus 4.7 (2026년 5월 11~15일)"
description: "claude agents로 모든 세션을 한 화면에서 관리하고, /goal로 조건 달성까지 Claude가 스스로 반복하고, Fast 모드가 Opus 4.7로 업그레이드"
tags: ["자동생성", "업데이트", "에이전트뷰", "goal", "fast-mode", "opus-4-7"]
category: "reference"
order: 8
lastUpdated: "2026-05-23"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/whats-new/2026-w20">code.claude.com 주간 업데이트 Week 20</a>을 바탕으로 작성됐어요. (버전 v2.1.139 → v2.1.142)
</div>

## 이번 주(5월 11~15일)에 뭐가 달라졌나요?

이번 Week 20에는 **"혼자 알아서 일하는 Claude"**를 완성시켜 주는 세 가지 큰 변화가 들어왔어요.

---

## 1. 🖥️ 에이전트 뷰 (Agent View) — 모든 작업을 한 화면에서

### 뭔가요?

여러 개의 Claude Code 세션을 동시에 돌리고 있을 때, **지금 어떤 작업이 진행 중인지, 어디서 내 응답을 기다리는지, 완료됐는지**를 한 화면에서 볼 수 있는 대시보드예요.

> 🏭 **비유로 설명하면**: 공장 관제실처럼, 여러 생산 라인이 지금 어떻게 돌아가는지 모니터 하나에서 한눈에 보는 거예요. 문제 생긴 라인만 직접 들어가서 보고, 나머지는 알아서 돌아가게 두는 것처럼요.

### 어떻게 사용하나요?

터미널에서 아래 명령어 하나로 실행해요:

```bash
claude agents
```

그러면 이런 화면이 떠요:

| 상태 | 의미 |
|---|---|
| 🔄 실행 중 | Claude가 지금 열심히 작업 중 |
| ⏳ 입력 대기 | Claude가 내 답변을 기다림 → 여기만 들어가면 됨 |
| ✅ 완료 | 작업 끝! 결과 확인만 하면 됨 |

- **특정 작업에 들어가려면**: 해당 줄을 선택해서 Enter (전체 대화 내용 보임)
- **대시보드로 돌아오려면**: `←` 방향키
- **백그라운드 세션**: 터미널을 닫아도 Claude가 계속 일함

### 새로 추가된 옵션들

```bash
# 특정 디렉토리의 세션만 보기
claude agents --cwd /내/프로젝트/폴더

# 특정 설정으로 세션 시작
claude agents --model claude-opus-4-7 --permission-mode accept-edits
```

추가로 사용 가능한 플래그:

| 플래그 | 설명 |
|---|---|
| `--add-dir` | 추가 디렉토리 접근 허용 |
| `--settings` | 커스텀 설정 파일 지정 |
| `--mcp-config` | MCP(엠씨피) 설정 파일 지정 |
| `--model` | 사용 모델 지정 |
| `--effort` | 작업 노력 수준 조정 |

<div class="note-star">
★ 리서치 프리뷰(Research Preview) 단계예요. Pro, Max 플랜에서 사용 가능합니다. <code>[공식]</code>
</div>

---

## 2. 🎯 /goal — "이 조건 달성할 때까지 알아서 해줘"

### 뭔가요?

작업의 **완료 조건**을 말해주면, Claude가 그 조건이 충족될 때까지 **스스로 여러 번 시도**해요. 내가 일일이 "한 번 더 해봐", "아직 안 됐어"라고 말 안 해도 됩니다.

> 🎮 **비유로 설명하면**: 게임에서 "레벨 30 달성하면 알려줘"라고 해두면, 내가 자리를 비워도 게임이 자동으로 진행되는 것처럼요. Claude도 조건이 달성될 때까지 계속 턴을 이어가는 거예요.

### 어떻게 사용하나요?

```
> /goal 테스트가 모두 통과하고 린트(lint)도 깨끗할 것
```

그러면:
1. Claude가 코드를 수정하고 테스트를 돌려요
2. 조건이 안 맞으면 → 자동으로 다음 턴 시작
3. 조건이 달성되면 → Claude가 완료 알림
4. 그 이후는 다시 내가 조작

### 실전 예시

```
> /goal auth/token.ts의 모든 테스트 통과 + TypeScript 컴파일 에러 없음

Claude: /goal 설정됨. 조건 달성까지 반복합니다...
[1턴] 에러 발견: validateToken() 함수 타입 문제
[수정] token.ts 수정 완료
[2턴] 테스트 3개 중 2개 통과...
[수정] 엣지 케이스 추가
[3턴] ✅ 모든 테스트 통과! 컴파일 에러 없음.
/goal 조건 달성 완료.
```

| 지원 환경 | 사용 가능 여부 |
|---|---|
| 일반 대화 모드 | ✅ |
| `-p` 파이프 모드 | ✅ |
| Remote Control(원격 제어) | ✅ |

<div class="note-star">
★ 목표가 달성되면 goal(골)이 자동으로 해제돼요. 중간에 취소하고 싶으면 <code>/goal clear</code>나 Ctrl+C를 사용하세요. <code>[공식]</code>
</div>

---

## 3. ⚡ Fast Mode — 이제 Opus 4.7로 기본 전환

### 뭐가 달라진 건가요?

`/fast` 명령어로 켜는 **Fast Mode(패스트 모드)**가 이제 기존의 **Opus 4.6 대신 Opus 4.7**을 기본으로 사용해요.

> 🚗 **비유로 설명하면**: 택시를 부르면 예전엔 구형 모델이 왔는데, 이제 같은 요금으로 더 좋은 최신 모델이 오는 거예요. 속도(2.5배 빠름)는 그대로, 성능은 더 좋아진 거예요.

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 기본 모델 | Opus 4.6 | **Opus 4.7** |
| 속도 | 일반보다 약 2.5배 빠름 | 동일 |
| 요금 | 입력 $30/백만 토큰, 출력 $150/백만 토큰 | **동일 (요금 변동 없음)** |
| 품질 | Opus 4.6 수준 | **Opus 4.7 수준 (향상)** |

### 이전 Opus 4.6으로 고정하려면?

환경변수를 설정하면 돼요:

```bash
# .env 파일이나 터미널에서
export CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1
```

---

## 이번 주 세부 업데이트 (기타 개선사항)

### 🔗 훅(Hook) 개선

| 기능 | 설명 |
|---|---|
| 새 실행 방식 | `args: string[]` 형식으로 셸(Shell) 없이 직접 명령 실행. 경로에 따옴표 필요 없음 |
| `continueOnBlock` 옵션 | PostToolUse 훅이 거부 이유를 Claude에게 전달하고 작업 계속 진행 가능 |
| `terminalSequence` 필드 | 훅에서 데스크톱 알림, 창 제목, 벨 소리 출력 가능 |

### 📜 대화 되감기 (Rewind) 개선

**"여기까지 요약"** 옵션이 추가됐어요. 이전 대화를 요약해서 컨텍스트를 압축하면서도 최근 대화는 그대로 유지해요.

> 📚 비유: 두꺼운 소설에서 1~5장은 요약본으로 줄이고, 6~10장은 그대로 읽는 것처럼요.

### 🔌 MCP 환경변수 개선

MCP(엠씨피) stdio 서버들이 이제 자동으로 `CLAUDE_PROJECT_DIR` 환경변수를 받아요. 플러그인 설정에서 `${CLAUDE_PROJECT_DIR}`로 현재 프로젝트 경로를 참조할 수 있어요.

### 🔐 API 키 사용 시 기능 제한

`ANTHROPIC_API_KEY`를 직접 설정한 경우, 아래 기능들이 자동으로 꺼져요 (Claude.ai 구독 전용 기능):
- Remote Control (원격 제어)
- /schedule (스케줄 설정)
- Claude.ai MCP 커넥터
- 알림 설정

API 키를 제거하면 다시 사용 가능해요.

### 🧩 플러그인 상세 정보

```bash
claude plugin details <플러그인이름>
```

이 명령어로 이제 플러그인이 어떤 구성 요소를 포함하는지, 세션당 예상 토큰 비용이 얼마인지 볼 수 있어요.

---

## 이번 주 업데이트 한눈에 보기

| 기능 | 핵심 변화 | 주요 혜택 |
|---|---|---|
| 🖥️ Agent View | `claude agents` 명령어 | 멀티 세션 관제실 |
| 🎯 /goal | 완료 조건 자동 반복 실행 | 손 놓고 기다리기 가능 |
| ⚡ Fast Mode | Opus 4.6 → 4.7 기본화 | 같은 요금에 더 좋은 성능 |
| 🔗 훅 개선 | 셸 없이 직접 실행, continueOnBlock | 훅 안정성 향상 |
| 📜 Rewind 개선 | "여기까지 요약" 옵션 | 선택적 컨텍스트 압축 |

---

## 지난 주 업데이트도 놓쳤다면?

→ [Week 19 업데이트](/docs/reference/whats-new-2026-w19)
→ [Week 17 업데이트 — /ultrareview 프리뷰·세션 요약·컬러 테마·웹 재설계](/docs/reference/whats-new-2026-w17)

---

## 더 알아보기

- [공식 Week 20 릴리즈 노트](https://code.claude.com/docs/en/whats-new/2026-w20)
- [에이전트 뷰 공식 문서](https://code.claude.com/docs/en/agent-view)
- [Goal(골) 공식 문서](https://code.claude.com/docs/en/goal)
- [Fast Mode 상세 가이드](https://code.claude.com/docs/en/fast-mode)
