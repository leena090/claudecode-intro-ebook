---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 외관·동작 바꾸기"
description: "Mods(모드)로 Claude Code의 인터페이스를 나만의 것으로 바꿀 수 있어요. TypeScript로 패널, 슬래시 명령어, 훅을 추가하는 공식 커스터마이징 방법입니다."
tags: ["자동생성", "mods", "커스터마이징", "TypeScript", "plugins", "2026-10"]
category: "advanced"
order: 28
lastUpdated: "2026-11-10"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026년 10월 1일 CLI·데스크톱 앱 출시<br />
★ <strong>공식 문서</strong>: code.claude.com/docs/en/plugins/mods/overview
</div>

## Mods(모드)란?

**TypeScript 코드 몇 줄로 Claude Code의 모습과 동작을 바꾸는 공식 커스터마이징 도구**예요.

> 🍱 **비유로 설명하면**: 스마트폰 홈 화면에 위젯을 올려두거나, 카카오톡 테마를 바꾸는 것과 비슷해요. Claude Code라는 앱 위에 나만의 작은 기능이나 화면을 얹어두는 거예요. 프로그래밍 초보도 간단한 Mod는 만들 수 있어요.

---

## 무엇을 바꿀 수 있어요?

| 항목 | 예시 |
|------|------|
| 🖼️ 화면(패널·밴드) | 현재 Git 브랜치를 항상 보여주는 사이드바 |
| ⌨️ 슬래시 명령어 | `/deploy-staging` 커스텀 명령어 추가 |
| 🔗 훅(Hook) 연동 | 파일 저장 시 자동 lint 실행 |
| 🎨 상태줄(Status line) | 현재 비용·토큰 사용량 표시 |

---

## 간단한 Mod 예시

### 예시: 현재 브랜치 표시 밴드 추가

```typescript
// .claude/mods/git-branch-band.ts
export default {
  name: "git-branch-band",
  band: {
    content: async () => {
      const { stdout } = await run("git branch --show-current");
      return `🌿 ${stdout.trim()}`;
    }
  }
};
```

이렇게 만들면 화면 상단에 현재 Git 브랜치가 항상 표시돼요.

---

## Mod 설치 방법

### 1. 직접 만들기

```bash
# .claude/mods/ 폴더에 TypeScript 파일 생성
mkdir -p .claude/mods
# 편집기에서 mods/my-mod.ts 작성
```

### 2. Plugin Marketplace에서 설치

```bash
# 마켓플레이스에서 검색
/plugins search branch-display

# 설치
/plugins install @community/branch-display
```

---

## Mod의 종류

| 타입 | 설명 |
|------|------|
| `band` | 화면 상단/하단 가로 띠 |
| `panel` | 사이드 패널 (대화 옆에 항상 표시) |
| `statusline` | 상태줄 항목 추가 |
| `toast` | 일시적 알림 메시지 |
| `slash-command` | 커스텀 `/명령어` 추가 |
| `hook` | 도구 호출 전·후 코드 실행 |

---

## 훅(Hook) 연동 예시

```typescript
// 파일 편집 전에 lint 체크
export default {
  name: "pre-edit-lint",
  hooks: {
    beforeToolCall: async ({ tool, params }) => {
      if (tool === "Edit") {
        await run(`eslint ${params.file_path} --fix`);
      }
    }
  }
};
```

---

## 기존 플러그인(Plugin)과 뭐가 달라요?

| | Mod | Plugin (마켓플레이스) |
|-|-----|-------------------|
| 범위 | 내 세션에만 적용 | 설치 후 공유 가능 |
| 복잡도 | TypeScript 파일 1개 | 패키지 단위 |
| 용도 | 개인 커스터마이징 | 팀·커뮤니티 공유 |
| 설치 | 파일 복사 | `/plugins install` |

> 💡 **입문자 팁**: 처음에는 Plugin Marketplace에서 미리 만들어진 Mod를 설치해보세요. 감이 오면 직접 만들어볼 수 있어요. TypeScript를 모른다면 Claude에게 "이런 기능을 하는 Mod를 만들어줘"라고 부탁하면 대신 작성해줍니다.

---

## 더 알아보기

공식 문서 (추정 URL):
- `code.claude.com/docs/en/plugins/mods/overview` — 개요
- `code.claude.com/docs/en/plugins/mods/create` — Mod 만들기
- `code.claude.com/docs/en/plugins/mods/reference` — API 레퍼런스
- `code.claude.com/docs/en/plugins/mods/gallery` — Mod 갤러리
