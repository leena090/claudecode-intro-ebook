---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code를 내 맘대로 꾸미기"
description: "Mods(모즈)는 Claude Code의 외관과 동작을 TypeScript 코드로 바꾸는 기능이에요. CLI와 데스크톱 앱 모두 지원해요"
tags: ["자동생성", "Mods", "모즈", "TypeScript", "커스터마이즈", "플러그인", "2026"]
category: "advanced"
order: 28
lastUpdated: "2026-11-24"
---

<div class="note-star">
★ <strong>[공]</strong> — 2026-10-01 공식 발표 기준. 공식 문서: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a><br/>
★ Mods는 CLI와 Desktop 앱 모두 지원해요. TypeScript를 몰라도 갤러리에서 기존 Mod를 설치할 수 있어요.
</div>

## Mods가 뭔가요?

Mods(모즈, 모드)는 Claude Code의 모양새와 동작 방식을 TypeScript(타입스크립트) 코드로 바꿀 수 있는 기능이에요.

> 🎮 **비유로 설명하면**: 스마트폰 배경화면을 바꾸거나 위젯을 추가하는 것처럼, Claude Code의 화면과 기능을 직접 꾸밀 수 있어요. 개발자라면 직접 만들고, 비개발자라면 다른 사람이 만들어놓은 걸 설치하면 돼요.

---

## 무엇을 바꿀 수 있나요?

```
🎨 외관(Interface) — 색상 테마, 폰트, 레이아웃
🔧 동작(Behavior) — Claude의 응답 방식, 단축키 추가
📊 패널·밴드 — 채팅창 옆에 정보 패널 추가
🔔 알림 — 작업 완료 시 커스텀 알림
🛠️ 도구 추가 — 새로운 슬래시 명령어 (/mycommand)
```

---

## 설치 방법 (Mod 갤러리 이용)

**코딩 없이 기존 Mod 설치하기:**

```bash
# Claude Code에서
/plugins

# 또는 설정 → Plugins → Browse Mods
```

갤러리에서 마음에 드는 Mod를 찾아 클릭하면 바로 설치돼요.

---

## 직접 만드는 방법 (기초)

TypeScript를 조금 알면 직접 만들 수 있어요:

```typescript
// 간단한 Mod 예시 — Claude Code에 환영 메시지 추가
export default {
  name: "welcome-banner",
  onSessionStart: () => {
    return {
      banner: "안녕하세요! 오늘도 열심히 코딩해요 🚀"
    };
  }
};
```

> 💡 **입문자 팁**: Mod를 직접 만드는 건 개발자 수준의 기술이 필요해요. 처음에는 갤러리에서 기존 Mod를 써보는 것을 추천해요.

---

## 주요 Mod 종류

| 종류 | 예시 |
|---|---|
| 🎨 테마 Mod | 다크모드, 고대비 색상 |
| 📊 정보 패널 | 토큰 사용량 실시간 표시 |
| ⌨️ 단축키 Mod | 자주 쓰는 프롬프트 단축키 |
| 🔊 알림 Mod | 작업 완료 시 소리 알림 |
| 🌐 번역 Mod | 응답을 특정 언어로 자동 번역 |

---

## Plugins와 Mods의 차이

| 항목 | Plugins | Mods |
|---|---|---|
| 주로 하는 일 | 새 도구·기능 추가 | 외관·동작 방식 변경 |
| 개발 언어 | 다양 | TypeScript |
| 복잡도 | 더 복잡 | 더 가볍고 간단 |

---

## 갤러리에서 찾는 법

공식 Mods 갤러리: `code.claude.com/docs/en/plugins/mods/gallery`

인기 Mod 카테고리:
- **테마** — 다양한 색상·스타일
- **생산성** — 단축키, 자동완성 패턴
- **정보 표시** — 토큰, 비용, 시간 추적
- **팀용** — 팀 공통 규칙 적용

---

> 📌 **요약**: Mods는 Claude Code를 "내 것으로 만드는" 기능이에요. 갤러리에서 찾아 클릭 한 번으로 설치하거나, TypeScript를 알면 직접 만들 수도 있어요.
