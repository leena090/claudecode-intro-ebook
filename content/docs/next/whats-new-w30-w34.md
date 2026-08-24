---
title: "[공] W30~W34 업데이트 — 2026년 7~8월 주요 변경 모음"
description: "Claude Code W30(7월)부터 W34(8월)까지 출시된 주요 기능들을 한데 모았어요. Opus 5·/design 스킬·Concise 출력 스타일·iOS 시뮬레이터·Remote Control 전화 시작 등."
tags: ["자동생성", "업데이트", "W30", "W32", "W33", "W34", "Claude Code", "새 기능"]
category: "next"
order: 18
lastUpdated: "2026-08-24"
---

<div class="note-star">
★ <strong>[공]</strong> Claude Code 공식 문서 — What's New 시리즈 (W30·W32·W33·W34)<br />
★ W31 문서는 현재 공식 사이트에 게시되지 않았어요 (공식 발표 기준)<br />
★ W32·W33 상세 내용은 다음 회차에서 추가 업데이트 예정이에요.
</div>

---

## ⚡ W34 (2026-08-17~21) — v2.1.234~v2.1.239

> */design 스킬로 UI 아트보드 초안 작성, Concise 출력 스타일, 전화기에서 내 컴퓨터 세션 시작*

### 🎨 `/design` 스킬 — AI가 UI 시안을 직접 그려줘요 (리서치 프리뷰)

```text
> /design redesign the composer based on what people actually use it for
```

Claude Code가 **UI 아트보드 캔버스**를 바로 만들어 링크로 넘겨줘요.  
여러 시안 중 하나를 고르면 그걸 바탕으로 구현까지 이어서 해줘요.

> 🎨 **비유로 설명하면**: 인테리어 회사에 "주방 리모델링해줘"라고 하면 먼저 3가지 설계 도면을 그려서 보여주고, 마음에 드는 걸 고르면 공사에 들어가는 것과 같아요. `/design`이 그 "먼저 도면 그려주는" 단계예요.

- Pro·Max·Team·Enterprise 플랜 사용 가능
- v2.1.233 이상 필요
- [아티팩트 안내](https://code.claude.com/docs/en/artifacts)

---

### 🎯 Concise 출력 스타일 — 핵심만 콕 짚어요 (v2.1.237+)

새로운 내장 출력 스타일이 추가됐어요. 설정 방법:

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** 메뉴에서 선택.

| 스타일 | 특징 |
|---|---|
| **Default** | 기존 방식 — 설명, 과정, 결과를 풍부하게 |
| **Concise** (신규) | **결과를 먼저**, 서론·해설 생략. 상세 설명 요청 시 전체 답변 |

> ⚠️ 오류 보고·보안 경고·파괴적 작업 확인은 Concise에서도 전체 내용을 유지해요.

적용 후 `/clear` 또는 새 세션 시작하면 즉시 효과가 나타나요.

---

### 📱 전화기로 내 컴퓨터 Claude Code 세션 시작하기 (Remote Control GA)

Remote Control이 **리서치 프리뷰에서 졸업**했어요 🎉

**어떻게 되나요?**
1. 내 컴퓨터에서: `claude remote-control`
2. 폰 Claude 앱 → Code 탭 열기
3. 상단에 내 컴퓨터가 **디바이스 카드**로 나타나요
4. 탭하면 폴더 선택 → 세션 시작!

> 📱 **비유로 설명하면**: TV 리모컨으로 TV를 켜고 채널 바꾸듯, 이제 스마트폰으로 내 컴퓨터의 Claude Code를 켜고 작업 지시를 내릴 수 있어요.

---

### 🔧 W34 기타 개선사항

| 기능 | 설명 |
|---|---|
| **사용 한도 초기화 시 자동 재개** | claude.ai 사용 한도가 리셋되면 Claude Code가 세션을 자동으로 이어가요. `/config`에서 **Continue automatically at usage limit** 설정으로 켜기/끄기 |
| **철자 검사** (`spellcheck` 설정) | 프롬프트 입력창에서 오타에 밑줄. `aspell`·`hunspell`·`ispell` 필요 |
| **GitLab MR 배지** | glab CLI 로그인 시 푸터에 `MR !N` 배지 표시 (초안·오픈·머지 가능 상태별 색상) |
| **폰으로 effort 레벨 변경** | 폰이나 claude.ai/code에서 effort 레벨 바꾸면 내 컴퓨터 세션에 바로 반영 |
| **작업 중 `/permissions` 열기** | Claude가 작업하는 중간에 `/permissions` 열거나 `/add-dir` 실행 가능. 권한 변경은 현재 턴 나머지에 바로 적용 |
| **내 프롬프트에도 마크다운 렌더링** | 내가 입력한 프롬프트도 코드 블록·인라인 코드·목록이 이쁘게 렌더링돼요 |
| **`ANTHROPIC_DEFAULT_MODEL` 환경변수** | 새 세션 시작 시 기본 모델 지정. `/model`로 선택한 건 이보다 우선해요 |
| **SendMessage `notify_when_idle`** | 다른 세션이 유휴 상태가 되면 알림 받기 |
| **Windows `SendMessage`·`ListAgents`** | Windows 네이티브 환경에서도 세션 간 메시지 전송 지원 |
| **`keybindingFlavor: "readline"`** | `Ctrl+W`가 Bash처럼 공백 기준으로 단어 삭제 |

---

## ⚡ W30 (2026-07-20~24) — v2.1.214~v2.1.219

> *Opus 5가 기본 Opus 모델로, Desktop에 iOS 시뮬레이터 창, Claude Security 플러그인 출시*

### 🤖 Claude Opus 5 — 기본 Opus 모델 전환

→ **자세한 내용은 [[블] Claude Opus 5 출시](./claude-opus5) 문서를 확인하세요!**

핵심 요약:
- Opus 5가 Claude Code 기본 Opus 모델
- **1M 토큰** 컨텍스트 (API·Max·Team·Enterprise)
- Fast Mode: Opus 5 기준, **$10/$50/MTok** (이전 대비 1/3 가격)
- v2.1.219 이상 필요

---

### 📱 iOS Simulator 창 — Desktop에서 앱을 실시간으로 확인

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 창**이 추가됐어요.

```text
> Build the app and run it in the simulator to check the onboarding flow.
```

Claude가 앱을 빌드하고 시뮬레이터에서 실행하면, **대화 옆에 디바이스 화면이 실시간 스트리밍**돼요.

- Pro·Max·Team 플랜 퍼블릭 베타
- Xcode + iOS 플랫폼 설치 필요
- Claude Desktop v1.24012.0 이상

> 🎮 **비유로 설명하면**: 게임 개발 중에 PC 화면 왼쪽에서 코드 짜고, 오른쪽에서 실제 핸드폰 화면을 보면서 테스트하는 것과 같아요. 이제 그게 IDE 안에서 자동으로 돼요.

---

### 🔒 Claude Security 플러그인 — 코드 취약점 자동 스캔

멀티 에이전트 기반 보안 취약점 스캐너가 공식 플러그인으로 나왔어요.

```text
> /plugin install claude-security@claude-plugins-official
> /claude-security
```

**작동 방식:**
1. 에이전트들이 코드베이스 아키텍처 분석
2. 위협 모델 구축
3. 취약점 탐색
4. 발견된 취약점을 독립적으로 검토
5. `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 보고서 작성

전체 저장소·브랜치 diff·PR·단일 커밋 단위로 스캔 가능해요.

---

### 🔧 W30 기타 개선사항

| 기능 | 설명 |
|---|---|
| **`/code-review` 서브에이전트** | 백그라운드에서 독립 컨텍스트로 실행. 결과는 작업 완료 후 도착 |
| **수동 실행만 지원** | `/verify`·`/code-review`·`/deep-research`는 직접 호출할 때만 실행. 자동 실행 없음 |
| **이모지 단축코드** | `:heart:` 등 입력하면 이모지로 변환. `emojiCompletionEnabled`로 껐다 켤 수 있어요 |
| **동시 서브에이전트 20개** | 기본값 20개 병렬 실행. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 |
| **Fast Mode Opus 4.7 지원 종료** | Fast Mode는 이제 Opus 5·Opus 4.8만 지원 |
| **`sandbox.filesystem.disabled`** | 파일시스템 격리 없이 네트워크 제어만 유지하는 샌드박스 옵션 |
| **Auto mode 개선** | 위험한 `rm`·백그라운드 작업·Windows 경로 체크가 다이얼로그 대신 classifier로 처리 |

---

## ⚡ W32~W33 (2026-07-27~08-14)

> ⚙️ W32·W33 상세 기능 내용은 다음 회차 자동 업데이트에서 추가될 예정이에요.  
> 현재 ga-blog.txt 등 수집 데이터에서 관련 주요 내용을 확인 중이에요.

공식 문서에서 직접 확인:
- [What's New W32](https://code.claude.com/docs/en/whats-new/2026-w32)
- [What's New W33](https://code.claude.com/docs/en/whats-new/2026-w33)

---

## 출처

- 🔵 **[공]** [What's New W30](https://code.claude.com/docs/en/whats-new/2026-w30) — 2026-07-20~24
- 🔵 **[공]** [What's New W34](https://code.claude.com/docs/en/whats-new/2026-w34) — 2026-08-17~21
- 🔵 **[공]** [Output Styles](https://code.claude.com/docs/en/output-styles)
- 🔵 **[공]** [Remote Control](https://code.claude.com/docs/en/remote-control)
- 🔵 **[공]** [Claude Security](https://code.claude.com/docs/en/claude-security)
