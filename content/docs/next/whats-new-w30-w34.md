---
title: "[공] Claude Code 업데이트 요약 — W30~W34 (2026년 7~8월)"
description: "2026년 7월 20일~8월 21일 업데이트 총정리. Opus 5, 자체 호스팅 환경, 세션 간 메시징, Auto Mode 기본값 전환, /design 스킬, Concise 출력 스타일까지"
tags: ["자동생성", "업데이트", "W30", "W32", "W33", "W34", "whats-new", "자체호스팅", "세션메시징"]
category: "next"
order: 18
lastUpdated: "2026-08-30"
---

<div class="note-star">
★ <strong>[공]</strong> <a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30 (Jul 20–24)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3–7)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w33">W33 (Aug 10–14)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w34">W34 (Aug 17–21)</a>
<br />★ 공식 발표 기준. W31 없음 (공식 문서에 미게시).
</div>

## 한 눈에 보는 7~8월 주요 변화

| 주차 | 날짜 | 대표 기능 |
|---|---|---|
| W30 | 7/20~24 | Claude Opus 5 출시, iOS 시뮬레이터, 보안 플러그인 |
| W32 | 8/3~7 | 세션 간 메시징, 자체 호스팅 환경, Auto Mode 기본값 |
| W33 | 8/10~14 | Desktop 자동 재개, Fork Mode 기본값, GitLab MR 지원 |
| W34 | 8/17~21 | /design 스킬, Concise 출력, 폰에서 세션 시작 |

---

## W30 · 7월 20~24일

### ✅ Claude Opus 5 — 새 기본 Opus 모델

Claude Code의 기본 Opus 모델이 **Opus 5**(`claude-opus-5`)로 바뀌었어요.
- 1백만 토큰 컨텍스트 지원 (API/Max/Team/Enterprise)
- Fast Mode도 Opus 5로 전환, 가격 $30/$150 → **$10/$50/MTok**

자세한 내용 → [Claude Opus 5 출시 문서](./claude-opus-5.md)

### ✅ iOS 시뮬레이터 (Desktop, 공개 베타)

Claude Code Desktop에 **iOS 시뮬레이터 창**이 생겼어요. Claude가 앱을 빌드하면 옆에서 화면이 실시간 스트리밍돼요.

### ✅ Claude Security 플러그인

코드베이스 **보안 취약점 자동 스캔** 플러그인이에요. 멀티 에이전트가 아키텍처를 분석·위협 모델 수립·취약점 탐지까지 자동으로 해줘요.

```bash
/plugin install claude-security@claude-plugins-official
/reload-plugins
/claude-security
```

---

## W32 · 8월 3~7일

### ✅ 세션 간 메시징 (Cross-session Messaging)

이제 **여러 Claude Code 세션이 서로 메시지를 주고받을 수** 있어요! (macOS/Linux)

> 🍱 **비유로 설명하면**: 두 직원이 나란히 앉아 일하다가 "야, 내 쪽 코드에서 users.name이 users.display_name으로 바뀌었어. 니 쪽도 고쳐!"라고 메모 넘기는 것처럼요.

```text
# 프롬프트에서 직접 다른 세션에게 전달 요청
Tell the session working on the payments API that users.name is now users.display_name
```

- `@세션이름`으로 직접 언급도 가능 (W33 추가)
- `/list-agents`로 연결 가능한 세션 목록 확인
- W34에서 Windows에서도 지원됨

### ✅ 자체 호스팅 환경 (Self-hosted Environments, Team/Enterprise)

회사 인프라에서 **Claude Code 클라우드 세션을 직접 운영**할 수 있는 기능이에요. (Team/Enterprise 공개 베타)

> 🍱 **비유로 설명하면**: 기존엔 Claude Code 클라우드 세션이 Anthropic 서버에서만 돌았어요. 이제는 **우리 회사 서버에서 직접 돌릴 수 있어요**. 내부망 데이터베이스, 사내 API에 접근하면서 세션을 돌릴 수 있죠.

```bash
# 셀프 호스팅 러너 초기 설정
claude self-hosted-runner setup

# 또는 직접 실행
claude self-hosted-runner
```

- 관리자 설정에서 **Allow self-hosted environments** 활성화 필요
- 러너가 등록되면 관리자 콘솔에 **Healthy** 상태로 표시

### ✅ Auto Mode(오토 모드) — 기본값으로 전환

**2026년 8월 14일부터**, Auto Mode가 Pro/Max/Team 플랜 신규 세션의 기본 권한 모드가 됐어요.

<div class="note-star">
★ 기존에 직접 기본 모드를 설정하셨다면 <strong>변경 안 됩니다</strong>.
<br />★ 한 번만 뜨는 전환 프롬프트를 수락해야 바뀌어요.
<br />★ Auto Mode 분류기(classifier) 호출이 이제 <strong>사용량 한도에 안 잡혀요</strong>!
</div>

```json
// 미리 설정하고 싶다면 settings.json에:
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

### ⛔ Ultraplan 제거됨

`/ultraplan` 명령어와 `ultraplan` 키워드가 **공식 삭제**됐어요.

> 대신 **플랜 모드**(plan mode)나 **Claude Code on the web**을 사용하세요.

---

## W33 · 8월 10~14일

### ✅ Desktop 사용량 한도 후 자동 재개

Desktop 앱에서 세션 한도에 걸렸을 때 **"한도 초기화 후 자동 재개"** 옵션이 생겼어요. 체크하면 초기화 시간에 자동으로 이어서 작업해요.

### ✅ Fork Mode(포크 모드) — 기본값

**Fork Mode**(포크 모드)가 인터랙티브 세션에서 기본 켜짐이 됐어요.

> 🍱 **비유로 설명하면**: 지금까지 대화한 맥락을 **복사한 새 서브에이전트**를 띄울 수 있어요. 처음부터 다시 설명 안 해도 되죠.

```text
# 현재까지의 맥락을 가지고 서브태스크 시작
/subtask draft unit tests for the parser changes so far
```

끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0` 환경 변수 설정

### ✅ GitLab MR(병합 요청) 지원

GitLab(깃랩) Merge Request(병합 요청) URL로 바로 워크트리를 만들 수 있어요.

```bash
# GitLab MR에서 바로 세션 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

### ✅ 작은 변화들

- **TodoWrite 등 태스크 도구** — Sonnet 5, Opus 5, Fable 5 이후 모델에서 기본 비활성화 (복원: `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`)
- `/code-review` — high/xhigh/max에서도 백그라운드 에이전트로 실행
- Write 도구 — 최신 모델에서 파일을 먼저 읽지 않아도 덮어쓰기 허용

---

## W34 · 8월 17~21일

### ✅ /design 스킬 (리서치 프리뷰)

**`/design`** 스킬을 쓰면 Claude가 **편집 가능한 UI 아트보드 캔버스**를 뽑아줘요! 화면 설계를 Claude가 초안 잡고, 사람이 직접 클릭해서 수정해요.

> 🍱 **비유로 설명하면**: 인테리어 디자이너한테 "거실 어떻게 꾸밀까?" 하면 **평면도 여러 안**을 그려주는 것처럼, Claude가 UI 와이어프레임 여러 안을 만들어줘요.

```text
> /design redesign the composer based on what people actually use it for
```

Pro/Max/Team/Enterprise · v2.1.233 이상 필요

### ✅ Concise(간결) 출력 스타일

새 내장 출력 스타일 **Concise**(컨사이스, 간결)가 추가됐어요.

| 스타일 | 특징 |
|---|---|
| **Default** | 기존 방식. 설명 포함 |
| **Concise** | **결과 먼저** 보여주고 서론·내레이션 생략 |

```json
// settings.json에서 설정
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → Concise 선택

<div class="note-star">
★ 에러·보안 경고·파괴적 작업 확인은 Concise에서도 전체 내용이 표시돼요.
</div>

### ✅ 폰에서 세션 시작 (Remote Control 정식 출시)

`claude remote-control`을 실행 중인 내 PC/Mac가 **모바일 앱 Code 탭 상단의 장치 카드**로 뜨게 됐어요. 폰에서 탭하면 내 컴퓨터에서 새 세션을 시작할 수 있어요.

**Remote Control**(리모트 컨트롤)이 리서치 프리뷰에서 **정식 출시**됐습니다!

```bash
# 내 PC에서 실행
claude remote-control
```

### ✅ 기타 W34 변화

| 기능 | 내용 |
|---|---|
| `ANTHROPIC_DEFAULT_MODEL` | 신규 세션의 기본 모델을 환경 변수로 설정 |
| 스펠체크(spellcheck) | 프롬프트 입력 중 오타 밑줄 표시 (`aspell`/`hunspell` 필요) |
| 내 프롬프트 마크다운 | 내가 보낸 프롬프트도 마크다운으로 렌더링 |
| GitLab MR 뱃지 | 풋터에 `!N` 배지로 MR 상태 표시 |
| /permissions 작업 중 열기 | Claude가 작업하는 도중에도 `/permissions` 열 수 있음 |
| 세션 간 메시징 Windows | 이제 네이티브 Windows에서도 세션 간 메시지 가능 |

---

## 요약 — 이것만 기억하세요

1. 🤖 **Opus 5** — 기본 Opus 모델 교체, 1M 컨텍스트, Fast Mode $10/$50
2. 🏠 **자체 호스팅** — 우리 회사 서버에서 클라우드 세션 운영 (Team/Enterprise)
3. 💬 **세션 간 메시징** — Claude 세션들끼리 메모 전달
4. 🤖 **Auto Mode 기본화** — 8월 14일부터 신규 세션 기본값
5. ⛔ **Ultraplan 삭제** — `/ultraplan` 더 이상 없어요
6. 🎨 **/design 스킬** — UI 아트보드 초안 자동 생성
7. 📝 **Concise 스타일** — 결과 먼저, 군더더기 없이
8. 📱 **Remote Control 정식** — 폰에서 내 PC 세션 시작
