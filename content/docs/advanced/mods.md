---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 외모·행동 커스터마이징"
description: "Mods(모드)는 TypeScript로 Claude Code의 UI와 동작 방식을 직접 바꿀 수 있는 플러그인 확장 기능이에요. CLI와 데스크톱 앱 모두 지원."
tags: ["자동생성", "Mods", "모드", "TypeScript", "커스터마이징", "플러그인", "고급"]
category: "advanced"
order: 10
lastUpdated: "2026-11-06"
---

<div class="note-star">
🆕 <strong>2026년 10월 1일 출시</strong> — Mods(모드)가 공식 발표됐어요. CLI와 데스크톱 앱 모두에서 사용 가능. <a href="https://code.claude.com/docs/en/plugins/mods/overview">[공] 공식 문서</a>
</div>

## Mods(모드)가 뭐예요?

**Mods**는 TypeScript(타입스크립트) 코드 몇 줄로 Claude Code의 **생김새(UI)**와 **행동 방식**을 바꿀 수 있는 기능이에요.

> 🎮 **비유로 설명하면**: 게임에서 "모드(Mod)"를 설치하면 캐릭터 외형을 바꾸거나 새 아이템을 추가할 수 있잖아요? Claude Code Mods도 똑같아요 — Claude Code라는 "게임"에 나만의 "모드"를 설치해서 내가 원하는 대로 꾸미고 기능을 더할 수 있어요.

---

## Mods로 뭘 만들 수 있나요?

Mods로 만들 수 있는 것들은 크게 세 가지예요:

| 종류 | 설명 | 예시 |
|------|------|------|
| **패널(Panel)** | 대화창 옆에 붙는 사이드 패널 | 실시간 파일 트리, 비용 미터, TODO 목록 |
| **밴드(Band)** | 화면 위·아래에 붙는 가로 띠 | 현재 모델 표시, 토큰 카운터 |
| **슬래시 명령어** | /커스텀명령어 형태의 새 단축키 | /my-review, /daily-report |
| **툴콜 훅** | 도구 실행 전·후에 끼어드는 로직 | 특정 파일 수정 차단, 자동 로깅 |

---

## 간단한 예시 — 첫 번째 Mod 만들기

> ⚠️ **추정**: 아래 예시는 공식 문서 패턴을 기반으로 작성됐어요. 세부 API는 [공식 문서](https://code.claude.com/docs/en/plugins/mods/create)에서 확인하세요.

```typescript
// my-mods/token-counter/index.ts
// — 화면 위쪽에 현재 토큰 소비량을 표시하는 밴드 예시 (추정)

export default {
  name: "token-counter",
  band: {
    position: "top",
    render: ({ session }) => `🪙 토큰: ${session.tokens.used} / ${session.tokens.limit}`
  }
};
```

이 파일을 만들고 Claude Code에서 플러그인으로 불러오면, 화면 위에 토큰 카운터 밴드가 나타나요.

---

## Mods vs 플러그인(Plugin) — 뭐가 달라요?

| | 플러그인(Plugin) | Mods(모드) |
|---|---|---|
| **무엇을 추가하나** | 외부 도구·API 연결 (MCP 서버) | UI 패널·명령어·훅 |
| **개발 언어** | 어떤 언어든 가능 | TypeScript 전용 |
| **변경 범위** | Claude가 쓸 수 있는 도구 추가 | Claude Code 앱 자체를 커스터마이징 |
| **예시** | GitHub MCP, Jira MCP | 사이드 패널, 커스텀 커맨드 |

> 💡 **쉽게 말하면**: 플러그인은 "Claude한테 새 도구를 쥐여주는 것", Mods는 "Claude Code 앱 자체를 내 취향에 맞게 꾸미는 것"이에요.

---

## 어떻게 시작하나요?

### 1단계: Mod 파일 만들기

`.claude/mods/` 폴더 아래에 TypeScript 파일을 만들어요:

```
내 프로젝트/
└── .claude/
    └── mods/
        └── my-first-mod/
            └── index.ts    ← 여기에 코드 작성
```

### 2단계: Claude Code에서 활성화

```bash
# CLI에서 플러그인 목록 확인 및 활성화 (공식 문서 기준)
/plugins
```

### 3단계: 실시간 테스트

Mods는 **핫 리로드(Hot Reload)** 를 지원해서, 파일을 저장하면 Claude Code가 자동으로 반영해줘요. 앱을 껐다 켤 필요 없어요!

---

## 실용적인 Mod 아이디어 모음

🗂️ **프로젝트 미리보기 패널** — 현재 작업 중인 파일 트리를 옆에 계속 표시

💰 **비용 추적기 밴드** — 이번 세션에 쓴 API 비용을 화면 아래에 실시간 표시

🚫 **민감 파일 보호 훅** — `.env` 파일이나 `secrets/` 폴더 수정을 Claude가 시도하면 자동 차단

📋 **커스텀 리뷰 명령어** — `/my-review` 입력 시 팀 코드 스타일에 맞는 리뷰 자동 실행

---

## 더 알아보기

| 주제 | 공식 문서 |
|------|----------|
| Mods 개요 | [plugins/mods/overview](https://code.claude.com/docs/en/plugins/mods/overview) |
| Mod 만들기 | [plugins/mods/create](https://code.claude.com/docs/en/plugins/mods/create) |
| API 참고서 | [plugins/mods/api](https://code.claude.com/docs/en/plugins/mods/api) |
| 갤러리 | [plugins/mods/gallery](https://code.claude.com/docs/en/plugins/mods/gallery) |

---

**출처**: [공] code.claude.com/docs/en/plugins/mods/overview | 마케팅 페이지 "Mods: Change how Claude Code behaves and looks with a few lines of TypeScript. Available in the CLI and desktop app. Blog Oct 1, 2026" (ga-marketing.txt 기준)
