---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code를 내 맘대로 꾸미기"
description: "Mods는 TypeScript 코드 몇 줄로 Claude Code의 모습과 동작을 바꾸는 기능이에요. 테마, 패널, 버튼을 직접 만들 수 있어요 (2026년 10월 출시)"
tags: ["자동생성", "Mods", "모드", "TypeScript", "커스터마이징", "플러그인", "테마", "인터페이스"]
category: "advanced"
order: 28
lastUpdated: "2026-11-16"
---

<div class="note-star">
★ <strong>[공]</strong> Mods 출시: claude.com/claude-code 마케팅 페이지 (Oct 1, 2026)
<br />★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a>
<br />⚠️ <strong>지원 환경</strong>: CLI(터미널)와 Claude Code Desktop 앱 모두 지원
</div>

## Mods가 뭔가요?

> 🎮 **비유로 설명하면**: 게임 모드(MOD)처럼요. 게임 원본은 그대로인데, 직접 만든 스킨, 무기, 맵을 추가하는 거예요. Claude Code도 똑같이 — 기능은 그대로지만 **내가 원하는 모습과 동작으로** 바꿀 수 있어요.

**Mods(모드)**는 TypeScript 코드로 Claude Code의 인터페이스와 동작을 바꾸는 기능이에요. 공식 플러그인 시스템의 일부로, 개발자가 직접 Claude Code를 확장할 수 있게 해줘요.

---

## 무엇을 만들 수 있나요?

| 종류 | 설명 | 예시 |
|---|---|---|
| **테마(Theme)** | 색상, 폰트, 레이아웃 변경 | 다크 모드 커스텀 색상 |
| **패널(Panel)** | 대화 옆에 항상 보이는 창 | 프로젝트 파일 목록 패널 |
| **밴드(Band)** | 화면 위아래에 고정 띠 | 현재 Git 브랜치 표시 띠 |
| **상태줄(Status Line)** | 하단 상태 표시줄 커스텀 | 토큰 사용량 실시간 표시 |
| **토스트(Toast)** | 팝업 알림 | 작업 완료 알림 |
| **슬래시 명령어** | `/명령어` 직접 추가 | `/deploy` 커스텀 커맨드 |
| **후크(Hook)** | 도구 호출 전후 실행 | 파일 저장 시 Lint 자동 실행 |

---

## 간단한 예시 — 현재 브랜치 표시 Mod

```typescript
// my-branch-mod.ts
export default {
  name: "branch-status",
  statusLine: {
    render: async () => {
      const branch = await exec("git branch --show-current");
      return `🌿 ${branch.trim()}`;
    }
  }
};
```

이렇게 TypeScript 파일 하나만 만들면 하단 상태줄에 현재 Git 브랜치 이름이 항상 보여요.

---

## Plugins와 Mods의 차이

> 💡 **헷갈리기 쉬운 부분**: Claude Code에는 **Plugins(플러그인)**와 **Mods(모드)** 두 가지 확장 방법이 있어요.

| 항목 | Plugins | Mods |
|---|---|---|
| 주요 목적 | 새 도구·기능 추가 | 인터페이스·동작 꾸미기 |
| 범위 | 도구 호출, MCP 서버 | UI 테마, 패널, 명령어 |
| 작성 방법 | TypeScript/JS | TypeScript |
| 제공 경로 | Plugin Marketplace | 로컬 or Mod 갤러리 |

Mods는 Plugins 시스템 안에 포함되는 개념이에요. 더 UI/UX에 집중한 하위 개념이라고 보면 돼요.

---

## 시작하기

### 1단계: Mod 파일 만들기

`.claude/mods/` 폴더 안에 TypeScript 파일을 만들어요.

```bash
mkdir -p .claude/mods
touch .claude/mods/my-first-mod.ts
```

### 2단계: Mod 코드 작성

```typescript
// .claude/mods/my-first-mod.ts
export default {
  name: "my-first-mod",
  // 슬래시 명령어 추가 예시
  commands: {
    "/hello": {
      description: "인사 메시지 출력",
      run: () => "안녕하세요! Claude Code Mod 작동 중 🎉"
    }
  }
};
```

### 3단계: Claude Code에서 확인

터미널에서 `/hello`를 입력하면 커스텀 명령어가 작동해요.

---

## 커뮤니티 Mod 갤러리

Anthropic은 공개 Mod 갤러리(`/plugins/mods/gallery`)를 운영해요. 다른 개발자들이 만든 Mod를 설치할 수 있어요.

```bash
# Mod 갤러리 열기
/mods gallery
```

> 💡 **입문자 팁**: 처음에는 갤러리에서 마음에 드는 Mod를 먼저 써보고, 나중에 직접 만들어보는 순서를 추천해요.

---

## 주의할 점

- ⚠️ **TypeScript 지식 필요**: 간단한 Mod는 예시 코드를 복붙해 쓸 수 있지만, 복잡한 Mod는 TypeScript 기초가 필요해요
- 🔒 **보안 주의**: 외부에서 가져온 Mod 코드는 반드시 내용을 확인하고 사용하세요 (다른 npm 패키지와 동일한 주의)
- 📦 **버전 관리**: 프로젝트 `.claude/mods/` 폴더를 Git에 커밋해 팀과 공유할 수 있어요

---

## 자주 묻는 질문

**Q: Mod를 만들려면 TypeScript를 꼭 알아야 하나요?**
A: 복잡한 Mod는 그렇지만, 단순 테마 변경이나 명령어 추가는 예시 코드를 복붙해서 조금만 수정해도 돼요.

**Q: Mod가 Claude Code 성능에 영향을 주나요?**
A: 잘못 만든 Mod는 느려질 수 있어요. 특히 `statusLine` 렌더러는 너무 무거운 작업을 피하세요.

**Q: Mod를 팀원과 공유할 수 있나요?**
A: 네! `.claude/mods/` 폴더를 Git에 올리면 팀 전체가 같은 Mod를 사용할 수 있어요.
