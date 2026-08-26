---
title: "[공] W30~W34 주간 업데이트 (2026년 7~8월) — Opus 5, 자체 호스팅, 세션 메시지"
description: "2026년 7월 20일~8월 21일 사이 Claude Code에 추가된 주요 기능들을 한눈에 정리. Opus 5 출시, 세션 간 메시징, 자체 호스팅 환경, Concise 스타일 등 5주치 핵심 요약"
tags: ["자동생성", "whats-new", "주간업데이트", "Opus 5", "opus5", "세션메시징", "자체호스팅", "concise", "auto mode", "fork mode", "design skill"]
category: "next"
order: 16
lastUpdated: "2026-08-26"
---

<div class="note-star">
★ <strong>공식 출처</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w33">W33</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w34">W34</a> 공식 문서 기준으로 작성했어요.
<br />★ <strong>2026-08-26 자동 감지</strong> — docs-watch 루틴이 신규 URL 4개를 발견해 정리한 글이에요.
</div>

## 5주치 핵심만 쏙 — W30~W34

> 🍱 **비유로 설명하면**: 5주 동안 Claude Code 팀이 조용히 퇴근했다가, 매주 깜짝 선물 박스를 두고 간 거예요. 이번 5주는 박스가 특히 크게 왔습니다.

---

## 🦾 W30 (7월 20~24일) — Opus 5 등장, iOS 시뮬레이터, 보안 스캐너

### Claude Opus 5 출시 🆕

Claude Code의 기본 Opus 모델이 **Opus 5**로 바뀌었어요.

| 항목 | 내용 |
|---|---|
| 기본 모델 | Max·Team Premium·Enterprise·API 기본값 |
| 컨텍스트 창 | **100만 토큰** (API·Max·Team·Enterprise) |
| Fast Mode | Opus 5 기반, **$10/$50 per MTok** (이전: Opus 4.8, $30/$150) |
| 전환 방법 | `/model claude-opus-5` |
| 최소 버전 | v2.1.219 이상 |

> 🍱 **비유로 설명하면**: 이전에는 "베테랑 주임"(Opus 4.8)이 일을 맡았는데, 이제는 "수석 이사급"(Opus 5)이 직접 챙겨준다는 느낌이에요. 100만 토큰 컨텍스트는 책 두 권 분량을 한 번에 읽을 수 있는 기억력이고요.

### iOS 시뮬레이터 패널 (Desktop, macOS) 🆕

macOS Claude Code Desktop에서 iOS 앱 개발 시 **시뮬레이터 화면이 대화 옆에 실시간으로** 뜹니다.

- Claude가 앱을 빌드·실행·테스트할 때 화면을 직접 볼 수 있어요
- Pro·Max·Team 플랜, Xcode 필요, Desktop v1.24012.0 이상

```
> Build the app and run it in the simulator to check the onboarding flow.
```

→ 시뮬레이터가 켜지면서 클로드가 탭하고 스크롤하는 모습을 실시간으로 볼 수 있어요.

### Claude Security 플러그인 🆕

`/claude-security` 명령어로 코드베이스 취약점을 멀티 에이전트로 스캔합니다.

```
> /plugin install claude-security@claude-plugins-official
> /claude-security
```

→ 아키텍처 맵 작성 → 위협 모델 수립 → 취약점 사냥 → 독립 리뷰 → 보고서 생성까지 자동으로. 결과는 `CLAUDE-SECURITY-<timestamp>/` 폴더에 저장돼요.

---

## 🔗 W32 (8월 3~7일) — 세션 간 메시징, 자체 호스팅, auto 기본값

### 세션 간 메시징 (Cross-session messaging) 🆕

여러 터미널에 열려 있는 Claude Code 세션들이 **서로 메시지를 주고받을 수 있어요**.

```
# 세션 A에서
Tell the session working on the payments API that users.name is now users.display_name
```

- 상대 세션에 `Message from` 행이 표시되고, `Ctrl+O`로 펼쳐서 읽어요
- `/list-agents`로 현재 연결 가능한 세션 목록 확인
- macOS·Linux, v2.1.224 이상 필요

> 🍱 **비유로 설명하면**: 서로 다른 방에서 일하는 직원들이 "내부 메신저"로 소통하는 거예요. 한쪽에서 컬럼 이름이 바뀌면, 다른 쪽 작업 중인 세션에 바로 알려줄 수 있어요.

### 자체 호스팅 환경 (Self-hosted Environments) 🆕

팀·기업 플랜에서 **내 회사 인프라 위에서 Claude Code 클라우드 세션을 실행**할 수 있어요 (공개 베타).

```bash
# 내 서버에서 runner 실행
claude self-hosted-runner setup
```

→ 브라우저·앱에서 "우리 회사 환경"을 선택하면, 세션이 사내 네트워크 안에서 돌아요. 내부 DB, 내부 API에 직접 접근 가능.

### Auto mode가 기본 권한 모드로 변경 ⭐

**2026년 8월 14일부터** Pro·Max·Team 플랜에서 auto mode가 기본 권한 모드가 됐어요.

```json
// 미리 설정하고 싶다면 settings.json에:
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

- 이미 직접 설정한 모드가 있으면 유지
- 조직에서 관리하는 설정도 유지
- auto mode 분류기 API 호출이 사용량 한도에서 제외됨

---

## 🍴 W33 (8월 10~14일) — Fork mode 기본 활성화, GitLab MR 지원

### Fork mode 기본 활성화 🆕

이제 `/subtask`로 부작업을 실행하면 **전체 대화 맥락을 물려받아** 시작해요.

```
> /subtask draft unit tests for the parser changes so far
```

→ 새 서브에이전트가 "처음부터 설명하지 않아도" 지금까지 이야기한 맥락을 다 알고 일을 시작해요.

- 끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0`
- 포크된 세션은 백그라운드에서 실행, 완료 시 결과를 대화에 전달

### GitLab 병합 요청 지원 🆕

```bash
# GitLab MR에서 바로 worktree 생성
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

- `glab`을 통해 GitLab MR 정보 연동
- 하단 상태바에서 MR 번호(`!42`)와 상태 표시
- 플러그인 마켓플레이스에서 `gitlab.com` URL 직접 클론 지원

---

## 🎨 W34 (8월 17~21일) — /design 스킬, Concise 스타일, 모바일 세션 시작

### /design 스킬 (research preview) 🆕

`/design`을 실행하면 클로드가 **UI 아트보드를 여러 안으로 그려서 Artifact로 발행**해요.

```
> /design redesign the composer based on what people actually use it for
```

→ 링크가 나오면 브라우저에서 아트보드 선택 → "이걸 구현해줘"라고 하면 실제 코드 작성.

- Pro·Max·Team·Enterprise, v2.1.233 이상
- Claude Design 아트보드 워크플로우를 CLI에서 그대로 사용

### Concise 출력 스타일 🆕

새로운 내장 출력 스타일. **결과를 먼저 주고 불필요한 서론은 생략**해요.

```json
// settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config`에서 **Output style → Concise**로 변경.

> 🍱 **비유로 설명하면**: 기존 Default 스타일은 "안녕하세요! 지금부터 파일을 수정해드리겠습니다…"라고 시작한다면, Concise 스타일은 그냥 파일을 수정하고 "완료"라고 한 줄만 해요. 설명이 필요하면 물어보면 더 알려줘요.

### 모바일에서 내 PC에 세션 시작 🆕

`claude remote-control`을 실행 중인 PC가 **모바일 앱의 Code 탭 상단에 카드로** 표시됩니다.

- Remote Control이 research preview → **정식 기능** 졸업
- 모바일에서 탭해서 디렉토리 선택 → PC에서 세션 시작

---

## 그 외 주목할 변경

| 항목 | 내용 |
|---|---|
| `/ultraplan` 제거 | W32에서 완전히 폐기. `/plan` 모드나 Claude Code Web 사용 |
| 서브에이전트 200개 제한 제거 | 이제 세션당 서브에이전트 수 제한 없음 |
| `@세션명` 멘션 | 프롬프트에서 `@`으로 다른 세션 호출 |
| 스펠체크 | `spellcheck` 설정으로 타이핑 중 오타 밑줄 표시 |
| `ANTHROPIC_DEFAULT_MODEL` 환경변수 | 새 세션의 기본 모델 설정 |
| GitLab 토큰 자동 마스킹 | `glpat-` 등 GitLab 토큰 자동 보호 |
| 내 프롬프트도 마크다운 렌더링 | 내가 입력한 텍스트도 예쁘게 표시 |

---

## 정리 — 이번 5주의 핵심

1. **Opus 5 기본 탑재** — 더 강력하고, 100만 토큰 컨텍스트
2. **세션들이 서로 소통** — 멀티 세션 작업의 새 패러다임
3. **회사 인프라 위에서 실행** — 기업 보안 걱정 해소
4. **Auto mode가 이제 기본** — 묻지 않고 일하는 게 표준
5. **/design으로 UI 시안 그리기** — 코딩과 디자인의 경계가 사라지는 중

> 💡 **초보자 팁**: 당장 써볼 수 있는 것부터 → `Concise` 스타일 설정, `@` 멘션으로 다른 세션 호출, `/code-review`를 백그라운드로 돌리기.
