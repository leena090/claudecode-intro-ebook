---
title: "[공] 신규 기능 요약 W30~W34 (2026년 7~8월)"
description: "Opus 5 출시, 자체 호스팅 환경, 크로스 세션 메시징, 자동 권한 모드, /design 스킬 등 2026년 7~8월 Claude Code 주요 업데이트 모음"
tags: ["자동생성", "신규기능", "업데이트", "opus5", "자체호스팅", "auto모드"]
category: "next"
order: 17
lastUpdated: "2026-09-08"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기반</strong> — <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a> W30~W34 기준<br />
★ 이 문서는 자동 업데이트 감시 에이전트가 생성했어요 (2026-09-08)
</div>

## 한눈에 보기 — 2026년 7~8월 핵심 변화 5가지

| 주차 | 날짜 | 핵심 업데이트 |
|---|---|---|
| W30 | Jul 20–24 | 🤖 **Opus 5** 출시, iOS 시뮬레이터 패널, Claude Security 플러그인 |
| W32 | Aug 3–7 | 💬 **크로스 세션 메시징**, 자체 호스팅 환경, **Auto 모드 기본값** 전환 |
| W33 | Aug 10–14 | ⏸️ 사용량 한도 후 자동 재개, **Fork 모드** 기본 활성화, GitLab 지원 |
| W34 | Aug 17–21 | 🎨 **/design** 스킬 (UI 아트보드), **Concise** 출력 스타일, Remote Control GA |

> 💡 W31은 공식 문서에 없어요 — 해당 주에 주요 기능 출시가 없었던 것으로 추정됩니다.

---

## 🤖 W30: Opus 5 + iOS 시뮬레이터 + Claude Security

### Claude Opus 5 — 새 기본 Opus 모델

> 🍱 **비유**: 회사 팀장이 교체됐어요. 기존 팀장(Opus 4.8)보다 더 실력 있는 새 팀장(Opus 5)이 왔고, 팀의 기본 역할을 맡게 됐습니다.

**Opus 5**가 Claude Code의 새 기본 Opus 모델이 됐어요.

```bash
# Opus 5로 전환하기
/model claude-opus-5
```

주요 사항:
- **1M 토큰 컨텍스트** 지원 (Anthropic API, Max/Team/Enterprise 플랜)
- **Fast mode가 Opus 5로 이동** — 속도는 2.5배, 요금은 **$10/$50 per MTok** (이전 Opus 4.8 기준 $30/$150에서 변경)
- Amazon Bedrock, Google Cloud Agent Platform에서도 지원
- Fast mode는 이제 Opus 5와 Opus 4.8만 지원 (Opus 4.7 제외)
- v2.1.219 이상 필요

### iOS 시뮬레이터 패널 (macOS Desktop)

Claude Code Desktop이 macOS에서 **iOS 시뮬레이터 패널**을 열어요. Claude가 앱을 빌드하거나 시뮬레이터를 실행하면, 대화 옆에 패널이 자동으로 열리며 디바이스 화면이 **실시간 스트리밍**됩니다.

```bash
# 시뮬레이터에서 앱 테스트 요청 예시
> 앱 빌드하고 시뮬레이터에서 실행해서 온보딩 플로우 확인해줘
```

- Pro, Max, Team 플랜 공개 베타
- Xcode + iOS 플랫폼 설치 필요
- Claude Desktop v1.24012.0 이상

### Claude Security 플러그인

취약점을 찾는 **멀티 에이전트 보안 스캔** 도구예요.

```bash
# 플러그인 설치 후 스캔 실행
/plugin install claude-security@claude-plugins-official
/claude-security
```

에이전트들이 자동으로:
1. 아키텍처 분석
2. 위협 모델 수립
3. 취약점 탐색
4. 독립 검토 후 보고서 작성 (`CLAUDE-SECURITY-<timestamp>/` 폴더)

저장소 전체, 브랜치 diff, PR, 특정 커밋 단위로 스캔 가능해요.

---

## 💬 W32: 크로스 세션 메시징 + 자체 호스팅 + Auto 모드 기본값

### 크로스 세션 메시징 (Cross-Session Messaging)

> 🍱 **비유**: 직장에서 서로 다른 방에서 일하는 동료들이 이제 사내 메신저로 실시간 소통할 수 있게 됐어요!

같은 머신에서 실행 중인 **여러 Claude Code 세션이 서로 메시지를 보낼 수 있어요**.

```bash
# 한 세션에서 다른 세션에게 변경사항 알리기
> 결제 API 작업 중인 세션한테 전달해줘: users.name이 users.display_name으로 바뀌었어
```

- `@세션이름` 으로 특정 세션 멘션 가능
- `/list-agents` 로 연결 가능한 세션 목록 확인
- `Ctrl+O` 로 받은 메시지 펼쳐보기
- macOS, Linux 지원 (v2.1.224 이상), Windows는 W34에서 추가됨

### 자체 호스팅 환경 (Self-Hosted Environments)

> 🍱 **비유**: 클라우드 카페에서 일하다가, 이제는 **우리 회사 사무실 서버**에서 클라우드 세션을 돌릴 수 있게 된 거예요. 사내 데이터베이스나 내부 서비스에 접근하면서요.

Team/Enterprise 플랜에서 조직의 **자체 인프라에 클라우드 세션**을 실행할 수 있어요.

```bash
# 러너 설치 및 환경 설정
claude self-hosted-runner setup
```

설정 후 사용자가 claude.ai, 모바일/데스크톱 앱, 또는 `claude --cloud`로 세션을 시작할 때 해당 환경을 선택하면, 세션이 **내부 네트워크 안에서 실행**돼요.

- Owner가 관리자 설정에서 **Allow self-hosted environments** 활성화 필요
- 공개 베타 (Team/Enterprise 플랜)

### Auto 모드가 기본값으로 전환

2026년 8월 14일부터 **Pro, Max, Team 플랜의 새 세션 기본 권한 모드**가 Auto 모드로 변경됐어요.

```json
// 미리 Auto 모드를 기본값으로 설정하는 방법
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

- 본인이 기본 모드를 직접 설정했다면, 그 설정이 유지돼요
- 조직에서 관리하는 기본값은 변경되지 않아요
- Auto 모드의 분류기 호출은 사용량 한도에 포함되지 않아요

---

## ⏸️ W33: 자동 재개 + Fork 모드 기본 활성화 + GitLab

### 사용량 한도 후 자동 재개 (Desktop)

세션 한도에 걸렸을 때, **"한도 초기화 시 자동 재개"** 체크박스를 선택하면 리셋 후 자동으로 작업이 이어져요. (주간 한도 카드는 해당 없음)

### Fork 모드 기본 활성화

이제 인터랙티브 세션에서 **Fork 모드가 기본으로 켜져** 있어요.

> 🍱 **비유**: 작업 도중 별도 심부름을 시킬 때, 지금까지 나눈 대화 내용을 **처음부터 다시 설명하지 않아도** 되는 거예요. Fork된 서브에이전트가 기존 대화를 그대로 이어받아요.

```bash
# 현재 대화 맥락을 이어받는 서브태스크 시작
/subtask 지금까지 변경한 파서 코드에 대한 유닛 테스트 작성해줘
```

- 끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0`

### GitLab 지원 강화

- `--worktree` 플래그에 **GitLab MR URL** 사용 가능
- 플러그인 마켓플레이스가 `gitlab.com` URL 지원
- 풋터에 `!N` 배지 (MR 번호 표시)
- `glpat-`, `glrt-` 같은 GitLab 토큰 자동 보호

```bash
# GitLab MR에서 워크트리 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

---

## 🎨 W34: /design 스킬 + Concise 스타일 + Remote Control GA

### /design — UI 아트보드 스킬

> 🍱 **비유**: 인테리어 디자이너한테 "침실 리모델링해줘"라고 하면 여러 안을 스케치해주잖아요. `/design`이 바로 그 디자이너예요 — UI 안들을 아트보드로 그려주고, 맘에 드는 걸 골라 실제로 만들게 해줘요.

```bash
# 사용 예시
/design 실제로 사람들이 쓰는 방식 기반으로 컴포저를 리디자인해줘
```

Claude가 편집 가능한 아트보드 캔버스를 발행하고, 브라우저 링크를 알려줘요. 옵션을 선택해서 Claude에게 구현을 지시하면 돼요.

- Pro, Max, Team, Enterprise 지원
- v2.1.234 이상 필요
- **Research Preview** 상태

### Concise 출력 스타일

새로운 내장 출력 스타일 **"Concise"**가 추가됐어요.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** 에서 설정.

- 결과를 먼저 표시, 서문·설명 생략
- 설명 요청 시에는 완전한 답변 제공
- 오류, 보안 경고, 중요 확인은 항상 완전히 표시
- v2.1.237 이상

### Remote Control — GA 전환

`claude remote-control`이 **리서치 프리뷰에서 정식 출시(GA)**로 전환됐어요.

- 폰의 Code 탭 상단에 **기기 카드**로 머신 표시
- 탭해서 디렉토리 선택 후 세션 시작 가능
- 폰에서 **노력 수준(effort level) 변경** 가능 → 머신의 세션에 즉시 반영
- Windows에서도 크로스 세션 메시징 (SendMessage/ListAgents) 지원

---

## 기타 주목할 만한 변화들

| 기능 | 주차 | 내용 |
|---|---|---|
| `/code-review` 백그라운드 실행 | W30 | 대화 맥락과 분리된 별도 서브에이전트로 실행 |
| 동시 서브에이전트 20개 기본값 | W30 | `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 변경 가능 |
| 서브에이전트 200개 상한 제거 | W32 | 장기 세션에서 서브에이전트 거부 없음 |
| `/review` = `/code-review` 별칭 | W32 | 마지막 effort 수준 재사용 |
| 이모지 자동완성 | W30 | `:heart:` 입력하면 이모지로 자동변환 |
| `ANTHROPIC_DEFAULT_MODEL` 환경변수 | W34 | 새 세션 기본 모델 설정 |
| 맞춤법 검사 | W34 | `spellcheck` 설정 (aspell/hunspell/ispell 사용) |
| 내 프롬프트도 마크다운 렌더링 | W34 | 대화창에서 내가 보낸 메시지도 코드 하이라이트 등 렌더링 |
| `keybindingFlavor: "readline"` | W34 | `Ctrl+W`가 이전 공백까지 삭제 (Bash 방식) |
| Task 추적 도구 변경 | W33 | Opus 5, Sonnet 5, Fable 5 이상에서 `TaskCreate` 등 기본 비활성화 (`CLAUDE_CODE_ENABLE_TODO_TOOLS=1`로 재활성화) |
| **`/ultraplan` 제거** | W32 | Research preview 종료. `/plan` 또는 Claude Code on the web 사용 권장 |

---

## ⚠️ 중요: 제거된 기능

### `/ultraplan` 명령어 제거 (W32)

`/ultraplan` 명령어와 `ultraplan` 키워드가 **공식 제거**됐어요.

- 대안: `/plan` 또는 **Claude Code on the web (claude.ai/code)** 에서 플래닝
- 기존 `content/docs/advanced/ultraplan.md` 문서는 deprecated 공지가 추가됐어요

---

## 다음 단계

- **[크로스 세션 메시징](/docs/advanced/channels)** — 세션 간 통신 더 알아보기
- **[자체 호스팅 환경](/docs/advanced/self-hosted-environments)** — 기업 환경에서 클라우드 세션 운영
- **[Auto 모드 설정](/docs/advanced/auto-mode-config)** — 권한 모드 세부 설정
- **[Opus 5 & Fable 5.1 신모델 안내](/docs/next/fable51-opus5-models)** — 최신 모델 정보
