---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 외관·동작 바꾸기"
description: "Claude Code의 Mods 기능으로 인터페이스 테마, 커스텀 패널, 슬래시 명령어 등을 TypeScript로 직접 만드는 방법을 소개합니다."
tags: ["자동생성", "mods", "플러그인", "커스터마이즈", "TypeScript", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-11-22"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026-10-01 블로그 발표, CLI·데스크톱 앱 양쪽 지원<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a>
</div>

## Mods가 뭔가요?

**Mods(모드)는 TypeScript 몇 줄로 Claude Code의 모습과 동작을 바꾸는 플러그인입니다.**

> 🎮 **비유**: 게임에서 '스킨'이나 '모드팩'을 설치하면 화면이 바뀌고 새 기능이 생기죠? Mods도 똑같아요. Claude Code에 TypeScript로 만든 모드를 얹으면, 내 취향대로 화면을 바꾸거나 새 명령어를 만들 수 있어요.

---

## 무엇을 바꿀 수 있나요?

| Mods로 할 수 있는 것 | 예시 |
|-------------------|------|
| 🎨 **테마** | 다크 모드 커스텀, 색상 변경 |
| 📊 **패널** | 대화 옆에 Git 현황 창 고정 |
| ⌨️ **슬래시 명령어** | `/deploy-prod` 같은 단축키 |
| 🔔 **툴 훅** | 특정 도구 실행 전/후에 추가 작업 |
| 📢 **밴드·토스트** | 화면 상단/하단에 커스텀 알림 띠 |

---

## 간단한 예시: 커스텀 슬래시 명령어 만들기

```typescript
// .claude/mods/deploy-shortcut.ts
export default {
  commands: [
    {
      name: "deploy-prod",
      description: "프로덕션 배포 체크리스트 실행",
      handler: () => `
        배포 전 체크:
        1. 테스트 모두 통과했나요?
        2. .env 비밀값 커밋 안 됐나요?
        3. 버전 태그 붙였나요?
        확인되면 'git push origin main' 실행해줘.
      `
    }
  ]
}
```

이제 대화창에서 `/deploy-prod` 를 입력하면 위 체크리스트가 자동으로 Claude에게 전달됩니다.

---

## 간단한 예시: 사이드 패널 추가

```typescript
// .claude/mods/git-panel.ts
export default {
  panels: [
    {
      title: "Git 현황",
      position: "right",   // 오른쪽에 고정
      render: async () => {
        // 현재 브랜치, 변경 파일 개수 표시
        return `브랜치: main\n변경: 3개 파일`
      }
    }
  ]
}
```

> 💡 패널은 Claude Code 데스크톱 앱에서 대화 창 옆에 항상 보입니다.

---

## Mods 설치 방법

### 방법 1: 직접 작성 (프로젝트 전용)

```bash
# 프로젝트 내 mods 폴더에 TypeScript 파일 생성
mkdir -p .claude/mods
# 위 예시처럼 파일 작성
```

### 방법 2: 플러그인 마켓플레이스에서 설치

```
> 플러그인 마켓플레이스에서 GitHub 현황 패널 설치해줘
```

또는 `/plugins discover` → Mods 카테고리 탐색

---

## 주의사항

| 주의 | 설명 |
|------|------|
| ⚠️ **보안** | Mods는 TypeScript를 실행하므로 출처를 모르는 Mods는 주의 |
| 🔄 **자동 로드** | `.claude/mods/` 폴더의 파일은 Claude Code 시작 시 자동 로드 |
| 📱 **CLI vs 데스크톱** | 패널·UI 기능은 데스크톱 앱에서만 보임, CLI는 명령어 위주 |

---

## 고급: 툴 훅으로 도구 실행 제어

Mods로 Claude가 특정 도구를 실행하기 전/후에 끼어들 수 있어요.

```typescript
// 파일 삭제 전 항상 확인하기
export default {
  toolHooks: {
    beforeBash: (cmd: string) => {
      if (cmd.includes("rm -rf")) {
        return { 
          block: true, 
          reason: "rm -rf는 위험합니다. 삭제할 파일 목록을 먼저 보여주세요." 
        }
      }
    }
  }
}
```

> 🛡️ **비유**: 성문 앞 경비병처럼, 특정 명령이 실행되기 전에 Mods가 "잠깐, 확인부터요!" 하고 막을 수 있어요.

---

## Mods vs 일반 플러그인 차이

| 항목 | 일반 플러그인 | Mods |
|------|------------|------|
| 주요 기능 | MCP 도구·지식 추가 | UI·동작 커스터마이즈 |
| 작성 언어 | 다양 (Python, Node 등) | TypeScript 전용 |
| 설치 위치 | 플러그인 마켓플레이스 | `.claude/mods/` 폴더 또는 마켓 |
| 주 대상 | 도구 확장 | 개인화·워크플로우 자동화 |

---

## 정리

- Mods = Claude Code를 **내 입맛대로 고치는** TypeScript 플러그인
- 커스텀 슬래시 명령어, 사이드 패널, 색상 테마, 도구 훅 등 가능
- `.claude/mods/` 폴더에 파일만 넣으면 자동 적용
- CLI와 데스크톱 앱 모두 지원 (UI 기능은 데스크톱 앱 위주)

📚 공식 문서: [plugins/mods/overview](https://code.claude.com/docs/en/plugins/mods/overview) | [plugins/mods/create](https://code.claude.com/docs/en/plugins/mods/create)
