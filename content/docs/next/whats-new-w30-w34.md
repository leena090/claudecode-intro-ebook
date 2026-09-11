---
title: "[공] Claude Code What's New — W30~W34 (2026년 7~8월)"
description: "Opus 5 출시, iOS 시뮬레이터, Claude Security 플러그인, /design 스킬, Concise 출력 스타일, Remote Control 정식 출시 등 5주 동안의 주요 업데이트 모음"
tags: ["자동생성", "whats-new", "Opus5", "iOSSimulator", "ClaudeSecurity", "design스킬", "Concise", "RemoteControl", "업데이트"]
category: "next"
order: 18
lastUpdated: "2026-09-11"
---

<div class="note-star">
★ <strong>[공]</strong> W30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a> (Jul 20–24, 2026)
<br />★ <strong>[공]</strong> W34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">code.claude.com/docs/en/whats-new/2026-w34</a> (Aug 17–21, 2026)
<br />★ W31~W33 세부 내용은 공식 문서 참조 (공식 발표 기준)
</div>

## 2026년 7월~8월, 무엇이 바뀌었을까요?

Claude Code가 5주 동안 정말 많이 업데이트됐어요.  
가장 중요한 변화들을 한 곳에 모았어요.

> 🗓️ **W30** = Week 30, 2026년 7월 20~24일  
> **W34** = Week 34, 2026년 8월 17~21일

---

## ⭐ W30 주요 업데이트 (Jul 20–24)

### 1. 🆕 Claude Opus 5 — 새 기본 Opus 모델

Opus 5가 Claude Code의 기본 Opus 모델이 됐어요.

- **1M 토큰 컨텍스트** (API·Max·Team·Enterprise)
- Fast Mode → Opus 5로 이동, **$10/$50 per MTok**
- v2.1.219 이상 필요

👉 자세한 내용은 [Opus 5 & Fable 5.1 출시 문서](/docs/next/opus5-fable51-sep2026) 참조

---

### 2. 📱 iOS 시뮬레이터가 Desktop 앱 안으로! (공개 베타)

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 창**이 생겼어요!

> 🎮 **비유**: 옛날에는 아이폰 앱을 만들면 따로 시뮬레이터 창을 열고 직접 눌러봐야 했는데,  
> 이제는 Claude와 대화하는 창 옆에 **시뮬레이터 화면이 나란히 표시돼요**.  
> Claude가 앱을 직접 눌러보고 "이 버튼이 제대로 작동하는지" 확인해줍니다!

**필요한 것**:
- macOS + Xcode + iOS 플랫폼 설치
- Claude Desktop v1.24012.0 이상
- Pro, Max, Team 플랜

**사용 방법**:
```text
> Build the app and run it in the simulator to check the onboarding flow.
> 앱을 빌드해서 시뮬레이터에서 온보딩 화면을 테스트해줘
```

앱이 실행되면 시뮬레이터 창이 자동으로 열리고,  
Claude가 탭하는 걸 **라이브로 볼 수 있어요**.

---

### 3. 🔐 Claude Security 플러그인 — AI 보안 취약점 스캐너

**Claude Security 플러그인**이 공개됐어요.

> 🕵️ **비유**: 보안 전문가 팀이 여러분 코드를 분석하는 것과 같아요.  
> 한 에이전트는 전체 구조를 파악하고, 다른 에이전트는 취약점을 찾고,  
> 또 다른 에이전트가 그 결과를 독립적으로 검토해요. 마치 "3중 검증" 시스템!

**기능**:
- 코드베이스 전체 또는 PR diff, 특정 커밋만 스캔
- 멀티 에이전트 취약점 분석
- 결과를 `CLAUDE-SECURITY-<timestamp>/` 폴더에 리포트로 저장
- 발견된 취약점을 패치로 적용 가능

```text
# 설치
> /plugin install claude-security@claude-plugins-official

# 스캔 시작
> /claude-security
```

---

### 💡 W30 기타 개선사항

| 기능 | 내용 |
|---|---|
| `/code-review` 백그라운드 실행 | 리뷰가 별도 컨텍스트 창에서 실행됨 |
| 이모지 단축코드 | `:heart:` 입력하면 ❤️ 자동 완성 |
| 동시 서브에이전트 20개 | 기본값, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 변경 가능 |
| `/code-review` 자동 실행 중단 | 명령어로만 실행됨 (Claude가 자동으로 실행 안 함) |

---

## ⭐ W34 주요 업데이트 (Aug 17–21)

### 1. 🎨 /design 스킬 — UI 아트보드 초안 생성 (연구 프리뷰)

```text
> /design redesign the composer based on what people actually use it for
```

Claude가 **UI 아트보드(편집 가능한 디자인 캔버스)**를 생성해줘요!

> 🖼️ **비유**: 건축가가 집 도면을 여러 버전으로 그려서 보여주는 것처럼,  
> Claude가 UI 시안을 여러 버전으로 제안하고,  
> 마음에 드는 걸 골라서 실제 코드로 구현해달라고 할 수 있어요.

**특징**:
- CLI와 Claude Code Desktop에서 사용 가능
- Artifacts 기반으로 편집 가능한 캔버스 생성
- Pro, Max, Team, Enterprise 모두 사용 가능
- v2.1.234 이상 필요

---

### 2. ✂️ Concise 출력 스타일 — 핵심만 바로 보여줘

새로운 내장 출력 스타일 **"Concise"**가 추가됐어요.

> 📰 **비유**: 신문의 헤드라인 같아요.  
> Default 스타일이 기사 전체를 읽어주는 방식이라면,  
> Concise는 **"결론부터"** 알려주는 방식이에요.  
> 필요하면 "더 자세히 설명해줘"라고 하면 됩니다.

**설정 방법**:
```text
/config 에서 Output style → Concise 선택
```
또는 설정 파일에서:
```json
{
  "outputStyle": "Concise"
}
```

**특징**:
- 결론을 먼저 보여주고 군더더기를 생략
- "설명해줘" 물으면 여전히 상세히 답변
- 오류, 보안 경고, 위험한 작업 확인은 항상 전체 내용 표시

---

### 3. 📲 Remote Control 정식 출시 — 연구 프리뷰 졸업!

**Remote Control**이 연구 프리뷰를 벗어나 정식 출시됐어요! 🎉

> 📡 **비유**: 예전에는 "실험적인 기능"이었는데, 이제는 공식 제품이 된 거예요.  
> 스마트폰에서 집 컴퓨터를 원격으로 켜고 Claude Code를 실행할 수 있어요.

**새 기능**:
- 내 머신에서 `claude remote-control`을 실행하면  
  → 모바일 앱 Code 탭 상단에 **기기 카드**로 표시돼요
- 탭하면 **디렉토리 선택 후 바로 세션 시작** 가능
- 폰에서 **effort level 변경**하면 PC 세션에 즉시 반영
- Remote Control이 Desktop 앱·VS Code에서도 연결된 기기에 현재 권한 모드 표시

```bash
# 내 Mac/PC에서 실행
claude remote-control

# → 모바일 앱 Code 탭에서 기기 확인 후 탭!
```

---

### 💡 W34 기타 개선사항

| 기능 | 내용 |
|---|---|
| 스펠체크 | 입력창에서 오타 실시간 밑줄 표시 (aspell/hunspell 필요, 설정에서 켜기) |
| 내 메시지에도 마크다운 | 내가 쓴 프롬프트도 코드 블록·리스트 등 마크다운으로 렌더링 |
| `ANTHROPIC_DEFAULT_MODEL` | 새 세션 시작 시 기본 모델 환경변수로 지정 가능 |
| `/permissions` 실행 중 수정 | Claude가 작업하는 도중에도 권한 규칙 변경 가능 |
| Ctrl+W readline 모드 | `keybindingFlavor: "readline"` 설정 시 Bash처럼 Ctrl+W가 단어 단위 삭제 |
| GitLab MR 배지 | 오픈 MR이 있으면 하단에 `MR !N` 배지 표시 |
| `/goal` 체크인 | 백그라운드 작업 대기 시 30분마다 자동 체크인 |
| Windows 세션 간 메시지 | 네이티브 Windows에서도 `SendMessage`·`ListAgents` 가능 |
| Usage limit 자동 재개 | 사용량 초과 후 리셋되면 세션 자동 재개 (`/config`에서 설정 가능) |

---

## 전체 업데이트 한눈에 보기

| 주차 | 날짜 | 핵심 기능 |
|---|---|---|
| **W30** | Jul 20–24 | Opus 5 출시, iOS 시뮬레이터, Claude Security 플러그인 |
| W31 | Jul 27–31 | [공식 문서 참조](https://code.claude.com/docs/en/whats-new/2026-w31) |
| W32 | Aug 3–7 | [공식 문서 참조](https://code.claude.com/docs/en/whats-new/2026-w32) |
| W33 | Aug 10–14 | [공식 문서 참조](https://code.claude.com/docs/en/whats-new/2026-w33) |
| **W34** | Aug 17–21 | /design 스킬, Concise 스타일, Remote Control 정식 출시 |

> 📌 W31~W33 상세 내용은 [공식 What's New 페이지](https://code.claude.com/docs/en/whats-new/index)에서 확인하세요.
