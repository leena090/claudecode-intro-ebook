---
title: "[공] Mods — TypeScript로 Claude Code 외관·동작 바꾸기"
description: "몇 줄의 TypeScript 코드로 Claude Code에 패널·명령어·버튼을 추가하거나 도구 호출 방식을 바꾸는 경량 플러그인. CLI와 데스크톱 앱 모두 지원."
tags: ["자동생성", "고급", "Mods", "플러그인", "TypeScript", "커스터마이징"]
category: "advanced"
order: 28
lastUpdated: "2026-11-23"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — CLI 및 데스크톱 앱 지원. 2026년 10월 출시. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/plugins/mods/overview" target="_blank">공식 문서: code.claude.com/docs/en/plugins/mods/overview</a>
</div>

## Mods가 뭔가요?

**Mods(모드)** 는 몇 줄의 TypeScript(타입스크립트) 코드로 Claude Code의 모습과 동작을 바꾸는 경량(가벼운) 플러그인이에요.

> 🎮 **비유**: 게임 '마인크래프트'의 모드(MOD)처럼, 기본 게임에 새 블록이나 기능을 추가하는 거예요. Claude Code라는 게임에 나만의 버튼·패널·명령어를 추가하는 거죠.

기존 플러그인보다 훨씬 **가볍고 빠르게** 만들 수 있어요. 복잡한 설치 없이 `~/.claude/mods/` 폴더에 `.js` 파일 하나만 넣으면 바로 동작해요.

---

## Mods로 뭘 할 수 있나요?

| 가능한 것 | 예시 |
|---------|-----|
| **새 패널 추가** | 현재 컨텍스트 토큰 사용량을 항상 보여주는 사이드 패널 |
| **새 명령어 추가** | `/deploy` 명령어로 배포 스크립트 자동 실행 |
| **버튼·입력창** | 프롬프트 아래 "번역 요청" 버튼 추가 |
| **도구 호출 감시** | Claude가 파일 쓰기 전에 경고 표시 |
| **타이머 작업** | 30분마다 자동으로 `git status` 체크 |
| **세션 간 메시지** | 다른 Claude Code 세션에 알림 보내기 |

---

## 간단한 예시: 토큰 카운터 패널

```typescript
// ~/.claude/mods/token-counter.js
export default {
  name: "token-counter",
  version: "1.0.0",

  setup({ claude }) {
    // 프롬프트 아래에 작은 패널 표시
    claude.render("statusline", () => ({
      text: `🪙 토큰: ${claude.session.tokenCount.toLocaleString()}`,
    }));
  }
};
```

이 파일 하나로 Claude Code 하단에 현재 토큰 사용량이 실시간으로 표시돼요.

---

## 기존 플러그인과 비교

| 비교 항목 | Mods | 일반 플러그인 |
|---------|------|------------|
| 복잡도 | ⭐ 간단 | ⭐⭐⭐ 복잡 |
| 파일 위치 | `~/.claude/mods/` | 마켓플레이스에서 설치 |
| 사용 범위 | 나만의 커스터마이징 | 팀/조직 배포 가능 |
| 언어 | TypeScript/JavaScript | TypeScript/JavaScript |
| MCP 서버 포함 | ❌ | ✅ |

> 💡 **팁**: 나 혼자 쓸 간단한 기능이면 Mods, 팀 전체에 배포할 기능이면 일반 플러그인을 쓰세요.

---

## 어떻게 만드나요?

### 방법 1: Claude한테 부탁하기 (가장 쉬움)

```
Claude야, 내가 Ctrl+Shift+G를 누르면 git log --oneline -10 결과를
오른쪽 패널에 보여주는 Mod를 만들어줘.
```

Claude가 완성된 `.js` 파일을 만들어줘요. `~/.claude/mods/`에 저장하면 끝!

### 방법 2: 직접 작성

1. `~/.claude/mods/` 폴더 생성
2. `my-mod.js` 파일 작성 (위 예시 참고)
3. Claude Code에서 `/reload-plugins` 실행
4. 바로 적용!

---

## 현재 지원 기능 (공식 발표 기준)

✅ 패널·버튼·텍스트 필드 (UI 렌더링)  
✅ 도구 호출 감시·수정·응답  
✅ 사용자 지정 명령어(`/my-command`)  
✅ 타이머 기반 작업  
✅ 세션 간 메시지 보내기  
✅ 파일·네트워크 접근  
❌ MCP 서버 (일반 플러그인만 가능)

---

## 주의할 점

- Mods는 **내 로컬 컴퓨터에서만 실행**돼요 (클라우드 세션 미지원 — 추정)
- 조직 관리자는 `managed settings`로 외부 Mod를 차단할 수 있어요
- TypeScript를 모른다면 Claude한테 대신 만들어 달라고 하면 돼요 😊

---

## 한국 사용자에게 한마디

Mods는 "Claude Code를 나만의 도구로 만들고 싶다"는 분들을 위한 기능이에요. 프로그래밍을 잘 몰라도 괜찮아요. Claude한테 "이런 버튼을 만들어줘"라고 부탁하면 Mod 파일을 완성해 줘요. 나만의 비서를 꾸미는 느낌으로 시작해 보세요! ✨
