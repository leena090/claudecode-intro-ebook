---
title: "[공] Claude Opus 5 & 2026년 7~8월 주요 업데이트 (W30-W34)"
description: "Claude Opus 5 출시, 세션 간 메시지, 셀프 호스팅 환경, /design 스킬, Concise 출력 스타일, Auto 모드 기본값 전환까지 — 2026년 7월~8월의 5주간 핵심 변화 정리"
tags: ["자동생성", "Opus5", "클로드업데이트", "W30", "W31", "W32", "W33", "W34", "신규기능", "cross-session", "self-hosted", "design"]
category: "next"
order: 17
lastUpdated: "2026-08-29"
---

<div class="note-star">
★ <strong>[공]</strong> Week 30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a> (Jul 20–24, 2026)<br />
★ <strong>[공]</strong> Week 32: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">whats-new/2026-w32</a> (Aug 3–7, 2026)<br />
★ <strong>[공]</strong> Week 33: <a href="https://code.claude.com/docs/en/whats-new/2026-w33">whats-new/2026-w33</a> (Aug 10–14, 2026)<br />
★ <strong>[공]</strong> Week 34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">whats-new/2026-w34</a> (Aug 17–21, 2026)
</div>

2026년 7월 하순부터 8월 중순까지 Claude Code가 아주 바빴어요. **Opus 5 새 모델 등장**, **세션끼리 대화**하는 기능, **내 서버에서 클라우드 세션 돌리기**, **폰에서 PC 세션 시작하기** 등 굵직한 기능이 연달아 나왔어요.

주별로 한 눈에 보면:

| 주 | 날짜 | 하이라이트 |
|---|---|---|
| **W30** | 7/20–24 | 🧠 Claude Opus 5 출시 · 📱 iOS 시뮬레이터 · 🔒 보안 스캔 플러그인 |
| **W32** | 8/3–7 | 💬 세션 간 메시지 · 🏗️ 셀프 호스팅 환경 · 🤖 Auto 모드 기본값 전환 |
| **W33** | 8/10–14 | ⏰ 한도 초과 후 자동 재개 · 🍴 Fork 모드 기본값 · 🦊 GitLab 지원 |
| **W34** | 8/17–21 | 🎨 /design 스킬 · 📝 Concise 출력 스타일 · 📞 폰에서 PC 세션 시작 |

---

## 🧠 W30 — Claude Opus 5 등장 (2026-07-20)

### 새 최상위 Opus 모델

**Claude Opus 5**(`claude-opus-5`)가 Claude Code의 새 기본 Opus 모델이 됐어요.

> 🍱 **비유로 설명하면**: Opus 4.8이 "베테랑 부장님"이었다면, Opus 5는 **"경험도 풍부하고 판단력도 월등한 이사님"** 이에요. 같은 자리에 앉았는데 훨씬 예리합니다.

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **컨텍스트 창** | **1M 토큰** (API, Max, Team, Enterprise 기본 제공) |
| **AWS Bedrock / Google Cloud** | 1M 모델 변형을 별도 선택 |
| **Fast Mode 가격** | **$10/$50 per MTok** (입력/출력, Opus 5 기준) |
| **최소 버전** | v2.1.219 이상 |

```bash
# Opus 5로 전환하기
/model claude-opus-5
```

<div class="note-star">
★ <strong>Fast Mode 변경</strong> — 이전(Opus 4.8): $30/$150 → 현재(Opus 5): <strong>$10/$50</strong> per MTok으로 가격이 내려갔어요! 공식 발표 기준.
</div>

### 📱 iOS 시뮬레이터 화면을 클로드가 직접 봐요

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 창**이 생겼어요. (Pro/Max/Team, 공개 베타)

> 🍱 **비유로 설명하면**: 예전엔 클로드에게 "앱이 어떻게 보여?"라고 물어봐도 클로드는 화면을 못 봤어요. 이제는 클로드가 **시뮬레이터 화면을 실시간으로 보면서** 탭도 해보고 확인도 직접 해요.

```
"Build the app and run it in the simulator to check the onboarding flow."
→ 클로드가 앱 빌드 → 시뮬레이터 실행 → 화면 보면서 검증까지 자동!
```

필요한 것: Xcode + iOS 플랫폼 설치, Claude Desktop v1.24012.0 이상

### 🔒 Claude Security 플러그인 — 코드 취약점 자동 스캔

**Claude Security 플러그인**이 출시됐어요. 멀티 에이전트로 코드베이스 전체를 보안 분석해요.

```bash
# 설치
/plugin install claude-security@claude-plugins-official
/reload-plugins
# 실행
/claude-security
```

스캔 범위: 전체 저장소 OR 특정 브랜치 diff, PR, 특정 커밋  
결과: `CLAUDE-SECURITY-<timestamp>/` 폴더에 리포트 생성  
특징: 에이전트들이 위협 모델 구성 → 취약점 탐지 → 독립 교차검증 → 패치 초안 작성

---

## 💬 W32 — 세션끼리 대화한다 (2026-08-03)

### 클로드 세션들이 서로 메시지를 보내요

**Cross-Session Messaging** — 같은 컴퓨터에서 열린 여러 Claude Code 세션이 **서로 메시지를 주고받을 수** 있게 됐어요. (macOS·Linux, v2.1.224 이상)

> 🍱 **비유로 설명하면**: 회사에서 두 팀이 각자 작업하다가 한쪽에서 공통 API 구조를 바꿨을 때, 카카오톡으로 "우리 users.name을 users.display_name으로 바꿨어요!" 라고 알리는 것처럼, 이제 클로드 세션들이 **자동으로 서로에게 알림**을 보낼 수 있어요.

```
"Tell the session working on the payments API that
 users.name is now users.display_name"
→ 다른 세션에 자동으로 메시지 전달!
```

- 메시지 확인: `Ctrl+O`로 펼치기
- 내 세션 목록 확인: `/list-agents`
- W33부터: 프롬프트에 `@세션이름`으로 직접 멘션도 가능!

### 🏗️ 셀프 호스팅 환경 — 내 서버에서 클라우드 세션

**Self-hosted Environments** — 팀·엔터프라이즈 플랜에서, **우리 회사 서버에서 Claude Code 클라우드 세션을 실행**할 수 있어요. (공개 베타)

> 🍱 **비유로 설명하면**: 기존엔 클로드가 Anthropic 서버의 구름 위에서 일했어요. 이제는 우리 회사 전산실 컴퓨터를 클로드 작업실로 설정하면, 클로드가 **우리 회사 내부망에 접근**하면서 일할 수 있어요!

```bash
# 관리자 초기 설정 (1회)
claude self-hosted-runner setup
```

Admin Settings → Cloud Environments에서 "Allow self-hosted environments" 활성화 필요  
용도: 내부 API 서버, 사내 데이터베이스, 방화벽 안쪽 서비스에 접근하는 Claude Code 세션 운영

### 🤖 Auto 모드가 기본값이 됐어요

2026년 8월 14일부터 Pro/Max/Team 플랜의 새 세션은 **Auto 모드가 기본값**이에요.

> 🍱 **비유로 설명하면**: 예전엔 클로드가 뭔가 하기 전에 꼭 "이 파일 수정해도 될까요?"라고 물어봤다면, Auto 모드는 **AI가 알아서 판단해서 진행**하고 정말 중요한 것만 물어봐요.

```json
// 미리 설정해두고 싶다면 (settings.json)
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

이미 다른 기본 모드를 설정해두셨다면 그대로 유지돼요.

### ♻️ Ultraplan 제거됨

`/ultraplan` 명령어와 `ultraplan` 키워드가 **W32부터 완전히 제거**됐어요.  
대안: `/plan` 명령어 또는 Claude Code on the web 사용

---

## ⏰ W33 — 한도 초과 후 자동 재개 (2026-08-10)

### 데스크탑 앱이 한도 초기화 후 자동으로 이어받아요

**Auto-continue after usage limit** — Claude Code Desktop에서 세션 한도에 걸렸을 때, **"Auto-continue when limits reset" 체크박스**를 선택하면 한도가 초기화되는 시각에 자동으로 재개돼요.

> 🍱 **비유로 설명하면**: 밤새 작업 중에 "지금 한도 초과됐어요"가 뜰 때, 예전엔 아침에 일어나서 직접 "계속해줘"를 눌러야 했어요. 이제는 **체크박스 하나 클릭해두면 새벽 4시에 한도 풀리면 클로드가 혼자 이어서 작업**해요!

주의: 주간 한도 카드에는 이 기능이 없어요.

### 🍴 Fork 모드가 기본값으로

**Fork mode on by default** — 이제 인터랙티브 세션에서 서브에이전트를 쓸 때, 기존 대화 맥락을 물려받는 **Fork 방식이 기본값**이에요.

```
> /subtask draft unit tests for the parser changes so far
→ 지금까지 나눈 대화를 다 알고 있는 서브에이전트가 생성됨
```

끄고 싶다면: `CLAUDE_CODE_FORK_SUBAGENT=0`

### 🦊 GitLab Merge Request 직접 지원

GitLab MR URL을 `--worktree`에 바로 넣을 수 있어요:

```bash
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

플러그인 마켓플레이스도 `gitlab.com` URL 직접 지원!

---

## 🎨 W34 — /design 스킬 & 간결 출력 (2026-08-17)

### /design — 클로드가 UI 시안을 아트보드로 만들어줘요

**/design 스킬** — 간단한 요청만 해도 클로드가 **편집 가능한 UI 아트보드 캔버스**를 만들어줘요. (Pro/Max/Team/Enterprise, 리서치 프리뷰)

> 🍱 **비유로 설명하면**: 예전엔 "로그인 화면 만들어줘"라고 하면 코드만 주었어요. 이제는 **여러 디자인 시안을 캔버스에 펼쳐서 보여주고**, 마음에 드는 걸 선택하면 코드로 구현까지 해줘요!

```bash
/design redesign the composer based on what people actually use it for
```

1. 클로드가 캔버스 링크 출력
2. 링크 열어서 아트보드 확인·수정
3. 마음에 드는 시안 선택 → 클로드에게 구현 요청

### 📝 Concise — "결론부터 말해줘" 출력 스타일

**Concise 출력 스타일** — 클로드가 서론/배경 설명 없이 **결론부터 바로 말하는** 모드예요.

> 🍱 **비유로 설명하면**: 상사가 "오늘 미팅 결과가 어떻게 됐어?"라고 물을 때, "네, 오늘 오후 2시에 시작된 미팅에서 먼저 A안을 검토했고..." 가 아니라 **"계약 성사됐습니다"** 로 바로 시작하는 보고 스타일이에요.

활성화 방법:
```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```
또는 `/config` → Output style → Concise 선택  
(적용하려면 `/clear` 또는 새 세션 시작)

에러 보고, 보안 경고, 위험 작업 확인은 항상 전체 내용으로 표시돼요.

### 📞 폰에서 PC 클로드 세션 시작하기

**Remote Control GA** — `claude remote-control`이 **리서치 프리뷰를 졸업**하고, 이제 모바일 앱 Code 탭에 **디바이스 카드**로 PC가 표시돼요!

```bash
# PC에서 실행
claude remote-control
→ 그러면 모바일 앱 Code 탭 상단에 내 PC가 카드로 뜸
→ 탭하면 디렉토리 선택 → 세션 시작!
```

---

## 기타 주요 변경사항 모음

| 항목 | 내용 |
|---|---|
| **서브에이전트 동시 실행** | 기본 20개, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 가능 |
| **200개 세션 캡 제거** | 장시간 실행 세션에서 서브에이전트 무제한 (동시 실행 제한은 유지) |
| **이모지 자동완성** | `:heart:` 입력 시 이모지로 자동 변환 (끄기: `emojiCompletionEnabled: false`) |
| **Spellcheck** | `spellcheck` 설정으로 입력창 실시간 맞춤법 검사 (aspell/hunspell/ispell) |
| **ANTHROPIC_DEFAULT_MODEL** | 환경변수로 새 세션 기본 모델 지정 |
| **/code-review 배경 실행** | 이제 별도 컨텍스트 창에서 백그라운드로 실행 |
| **내 프롬프트에도 마크다운** | 내가 입력한 텍스트도 마크다운으로 렌더링 |
| **Task 도구 변경** | `TaskCreate`·`TaskUpdate`·`TodoWrite` 등 Opus 4.8/Sonnet 5/Fable 5 이상에선 기본 비활성화 (재활성화: `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`) |
| **WorkTree 격리 강화** | Bash 명령어도 메인 체크아웃 접근 차단 |
| **VS Code 세션 그룹화** | 우클릭으로 세션 목록 그룹 생성·정리 |

---

## 모델 전환 정리 (2026-08 현재)

| 모델 | 역할 |
|---|---|
| `claude-opus-5` | 🧠 최상위 Opus (긴 컨텍스트, 복잡한 작업) |
| `claude-sonnet-5` | ⚡ 기본 모델 (속도+성능 균형) |
| `claude-fable-5` | 🏆 최전선 창작·추론 (선택 사용) |
| `claude-haiku-4-5` | 💨 경량 고속 (단순 작업) |
| `claude-opus-4-8` | (Opus 5로 대체됨, 여전히 사용 가능) |

---

## 출처

- [공] [Week 30 · July 20–24](https://code.claude.com/docs/en/whats-new/2026-w30) — Opus 5, iOS Simulator, Claude Security plugin
- [공] [Week 32 · August 3–7](https://code.claude.com/docs/en/whats-new/2026-w32) — Cross-session messaging, Self-hosted environments, Auto mode default
- [공] [Week 33 · August 10–14](https://code.claude.com/docs/en/whats-new/2026-w33) — Auto-continue, Fork mode default, GitLab
- [공] [Week 34 · August 17–21](https://code.claude.com/docs/en/whats-new/2026-w34) — /design, Concise style, Remote Control GA
