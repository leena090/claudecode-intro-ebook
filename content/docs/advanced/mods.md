---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 모양·행동 바꾸기"
description: "Mods(모드)는 TypeScript로 Claude Code의 UI와 동작을 직접 수정하는 플러그인이에요. 사이드바 패널 추가, 색상 변경, 슬래시 명령어 추가가 가능해요"
tags: ["자동생성", "Mods", "플러그인", "TypeScript", "커스터마이징", "UI"]
category: "advanced"
order: 29
lastUpdated: "2026-11-09"
---

<div class="note-star">
★ <strong>공식 출시</strong> — 2026년 10월 1일 CLI·Desktop 앱에서 사용 가능. <code>[공]</code><br />
★ <strong>Mods vs 플러그인</strong>: 일반 플러그인은 도구 추가, Mods는 <strong>Claude Code 자체의 모양과 행동</strong>을 바꿔요.
</div>

## Mods가 뭔가요?

Claude Code의 **인터페이스와 행동**을 TypeScript 코드로 직접 바꾸는 플러그인이에요.

> 🎨 **비유**: 스마트폰을 살 때 기본 앱들이 깔려있지만, 홈화면 배치를 바꾸거나 테마를 바꾸거나 새 위젯을 추가하는 것과 같아요. Mods는 Claude Code의 "테마·위젯·버튼"을 내 마음대로 바꾸는 도구예요.

### 뭘 바꿀 수 있나요?
- 🖼️ **UI 패널 추가** — 채팅 옆에 사이드바 패널 붙이기
- 🎨 **색상·테마 변경** — 나만의 색상 스킴
- ⚡ **슬래시 명령어 추가** — `/mytask` 같은 커스텀 명령
- 🔔 **알림 배너** — 특정 이벤트 발생 시 화면 상단에 메시지
- 📊 **상태 표시줄 커스터마이징** — 하단 상태바에 정보 추가
- 🪝 **Hook 연동** — 도구 호출 전·후에 내 코드 실행

---

## 첫 번째 Mod 만들기

### 1단계: Mod 파일 만들기

```typescript
// .claude/mods/my-first-mod.ts

export default {
  name: "my-first-mod",
  version: "1.0.0",
  
  // 슬래시 명령어 추가
  commands: [
    {
      name: "hello",
      description: "인사하는 명령어",
      handler: async (ctx) => {
        return "안녕하세요! 오늘도 좋은 코딩 되세요 🚀";
      }
    }
  ]
};
```

### 2단계: 활성화

```bash
# Claude Code에서 플러그인으로 로드
/plugins load .claude/mods/my-first-mod.ts

# 또는 settings.json에 영구 등록
# {
#   "plugins": [".claude/mods/my-first-mod.ts"]
# }
```

### 3단계: 사용

```bash
/hello
# → 안녕하세요! 오늘도 좋은 코딩 되세요 🚀
```

---

## 사이드바 패널 추가하기

```typescript
// .claude/mods/task-panel.ts
export default {
  name: "task-panel",
  
  // 채팅 옆에 패널 추가
  panels: [
    {
      id: "tasks",
      title: "할 일 목록",
      position: "right",  // left, right, bottom
      
      render: (ctx) => `
        <div class="task-panel">
          <h3>오늘의 작업</h3>
          <ul>
            <li>✅ 버그 수정</li>
            <li>🔄 테스트 작성</li>
            <li>⏸ 문서화</li>
          </ul>
        </div>
      `
    }
  ]
};
```

---

## Hook 연동 — 도구 호출 전·후에 코드 실행

```typescript
// .claude/mods/safety-check.ts
export default {
  name: "safety-check",
  
  hooks: {
    // 파일 편집 전에 실행
    beforeEdit: async (ctx) => {
      if (ctx.filePath.includes("production")) {
        const ok = await ctx.confirm(
          "⚠️ 프로덕션 파일을 수정하려고 해요. 계속할까요?"
        );
        if (!ok) return { cancel: true };
      }
    },
    
    // git push 전에 실행
    beforeBash: async (ctx) => {
      if (ctx.command.includes("git push")) {
        console.log("🔍 푸시 전 린트 검사 중...");
      }
    }
  }
};
```

---

## Mod 갤러리 — 커뮤니티가 만든 Mods

공식 Mod 갤러리에서 다른 사람이 만든 Mods를 찾아 쓸 수 있어요 (공식 문서: `plugins/mods/gallery`).

| Mod 이름 | 기능 | 적합한 사용자 |
|---|---|---|
| dark-pro | 개발자용 다크 테마 | 야간 작업자 |
| git-status-bar | 하단에 git 상태 표시 | git 헤비유저 |
| jira-panel | Jira 티켓 사이드바 | 엔터프라이즈 |
| test-runner | 저장 시 자동 테스트 | TDD 개발자 |

```bash
# 갤러리에서 설치
/plugins install dark-pro

# 설치된 Mod 목록
/plugins list
```

---

## Mod vs 플러그인 차이

| 구분 | 플러그인(Plugin) | Mod |
|---|---|---|
| **목적** | 클로드에 새 도구 추가 | Claude Code UI/행동 변경 |
| **예시** | Jira 연동, Slack 전송 | 사이드바 패널, 커스텀 테마 |
| **접근 범위** | 외부 서비스 API | Claude Code 인터페이스 |
| **만들기 난이도** | 보통 | TypeScript 초보자도 가능 |

---

## 자주 묻는 질문

**Q: Mod 오류가 나면 Claude Code가 고장나나요?**
아니에요. Mod에서 오류가 발생하면 그 Mod만 비활성화되고 Claude Code는 정상 작동해요.

**Q: Mod는 어디에 저장되나요?**
`.claude/mods/` 폴더 (프로젝트별) 또는 `~/.claude/mods/` (전역)에 저장해요.

**Q: 다른 사람과 Mod를 공유할 수 있나요?**
네! `.ts` 파일을 그대로 공유하거나, 플러그인 마켓플레이스에 배포할 수 있어요.

---

## 연관 문서
- [플러그인 마켓플레이스](plugin-marketplace.md)
- [Plugin Hints — 플러그인 힌트 시스템](plugin-hints.md)
- [Hooks — 도구 호출 전후에 스크립트 실행](../../config/)
