---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 외관·동작 바꾸기"
description: "Claude Code의 UI와 동작을 TypeScript로 커스텀하는 Mods 기능. 테마, 패널, 명령어를 직접 만들 수 있어요"
tags: ["자동생성", "mods", "플러그인", "TypeScript", "커스텀", "UI"]
category: "advanced"
order: 27
lastUpdated: "2026-11-21"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a><br />
★ <strong>[공]</strong> 마케팅 발표: claude.com/claude-code (Oct 1, 2026)
</div>

## Mods란?

**TypeScript 몇 줄로 Claude Code의 모습과 동작을 바꾸는 기능**이에요.

> 🎨 **비유로 설명하면**: Claude Code가 집이라면, Mods는 **인테리어 DIY 도구**예요. 벽지를 바꾸고(테마), 새 창을 달고(패널), 조명 스위치를 추가하는(명령어) 것처럼, 코드 몇 줄로 나만의 Claude Code를 만들 수 있어요.

---

## 무엇을 바꿀 수 있나요?

| 종류 | 예시 |
|---|---|
| **테마 (Theme)** | 다크모드 색상, 폰트, 배경 커스텀 |
| **패널 (Panel)** | 사이드에 항상 표시되는 커스텀 창 |
| **밴드 (Band)** | 화면 상단/하단의 정보 띠 |
| **상태줄 (Status line)** | 하단 상태바 커스텀 |
| **슬래시 명령어** | `/deploy`, `/standup` 등 나만의 명령어 |
| **툴 훅 (Hook on tools)** | 특정 도구 실행 전/후에 추가 동작 |

---

## 어디서 사용 가능한가요?

- **CLI** (터미널)
- **데스크톱 앱** (macOS, Windows, Linux)

---

## 기본 구조

Mod는 **TypeScript 파일 하나**로 시작해요.

```typescript
// my-mod.ts (예시 — 추정 형식, 공식 문서 확인 권장)
export default {
  name: "my-mod",
  version: "1.0.0",
  
  // 슬래시 명령어 추가
  commands: [
    {
      name: "standup",
      description: "오늘 작업 요약",
      handler: async (ctx) => {
        return "오늘 완료한 작업을 정리해줘";
      }
    }
  ]
}
```

<div class="note-star">
★ <strong>주의</strong>: 위 예시는 개요 기반 추정 코드예요. 정확한 API는 <a href="https://code.claude.com/docs/en/plugins/mods/api">공식 Mods API 문서</a>를 참고하세요.
</div>

---

## Plugin Marketplace에 올리기

만든 Mod는 **Plugin Marketplace**에 공개할 수 있어요. 다른 사람이 만든 Mod도 한 클릭으로 설치할 수 있고요.

### Mod 관련 공식 문서 목록

| 문서 | 내용 |
|---|---|
| [plugins/mods/overview](https://code.claude.com/docs/en/plugins/mods/overview) | 개요 및 시작하기 |
| [plugins/mods/create](https://code.claude.com/docs/en/plugins/mods/create) | Mod 만드는 방법 |
| [plugins/mods/reference](https://code.claude.com/docs/en/plugins/mods/reference) | 전체 레퍼런스 |
| [plugins/mods/interface](https://code.claude.com/docs/en/plugins/mods/interface) | UI 구성 요소 |
| [plugins/mods/gallery](https://code.claude.com/docs/en/plugins/mods/gallery) | 샘플 Mod 갤러리 |
| [plugins/mods/events](https://code.claude.com/docs/en/plugins/mods/events) | 이벤트 시스템 |
| [plugins/mods/api](https://code.claude.com/docs/en/plugins/mods/api) | API 레퍼런스 |
| [plugins/mods/test](https://code.claude.com/docs/en/plugins/mods/test) | 테스트 방법 |
| [plugins/mods/troubleshoot](https://code.claude.com/docs/en/plugins/mods/troubleshoot) | 문제 해결 |
| [plugins/mods/admin](https://code.claude.com/docs/en/plugins/mods/admin) | 관리자 설정 |

---

## 활용 아이디어

```
💡 팀 맞춤 Mod 아이디어:
  - /deploy → 서버 배포 자동 실행
  - /standup → 오늘 커밋 요약 → Slack 전송
  - /review → PR 리뷰 체크리스트 자동 채우기
  - 사이드패널 → 현재 열린 PR 목록 실시간 표시
  - 상태줄 → 현재 브랜치 + 미통과 테스트 수 표시
```

> 🔑 **핵심**: Mods는 "Claude Code를 나에게 맞추는 열쇠"예요. 반복 업무를 명령어 하나로 줄이거나, 팀 전체가 쓰는 커스텀 워크플로를 Marketplace에서 공유할 수 있어요.
