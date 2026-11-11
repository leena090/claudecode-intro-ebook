---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code를 내 맞춤형으로"
description: "Mods는 Claude Code의 UI와 동작을 TypeScript로 커스터마이징하는 기능입니다. CLI와 데스크톱 앱 모두 지원해요."
tags: ["자동생성", "Mods", "커스터마이징", "TypeScript", "플러그인", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-11-11"
---

<div class="note-star">
★ 공식 발표: <a href="https://www.anthropic.com/news/mods">Mods: Change how Claude Code behaves and looks</a> (Oct 1, 2026)<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a><br />
★ CLI와 데스크톱 앱 모두 지원
</div>

## Mods란?

**TypeScript 코드 몇 줄로 Claude Code의 모습과 동작을 바꾸는 기능**입니다.

> 🍱 **비유로 설명하면**: 스마트폰 앱처럼 Claude Code도 이제 "플러그인·테마·위젯"을 직접 만들 수 있어요. 카카오톡 테마를 바꾸거나, 계산기 앱을 커스터마이징하는 것처럼요. TypeScript를 조금만 알면 나만의 Claude Code를 만들 수 있습니다.

공식 발표 문구: *"TypeScript 몇 줄로 Claude Code의 동작과 외관을 변경하세요."*

---

## Mods로 무엇을 할 수 있나요?

| 가능한 것 | 예시 |
|----------|------|
| **UI 패널 추가** | 사이드에 항상 표시되는 메모장, 태스크 목록 |
| **상태줄(Status line) 커스터마이징** | 현재 비용, 토큰 수, 작업 상태 표시 |
| **훅(Hooks) 연결** | 특정 도구 호출 전·후에 나만의 로직 실행 |
| **슬래시 명령어 추가** | `/my-deploy`, `/my-report` 같은 커스텀 명령 |
| **외관 변경** | 색상, 레이아웃, 폰트 크기 조정 |

---

## 간단한 예시 — 비용 추적 패널

```typescript
// claude-mods/cost-tracker.ts
import { definePanel } from '@anthropic/mods';

export default definePanel({
  title: '오늘 사용 비용',
  position: 'right',
  render({ session }) {
    const cost = session.cost.toFixed(4);
    return `💰 $${cost} USD 사용됨`;
  }
});
```

이렇게 작성하면 Claude Code 오른쪽에 오늘 사용 비용을 보여주는 패널이 생깁니다.

> ⚠️ **추정**: 위 코드는 공식 API의 정확한 형태가 아닐 수 있어요. 실제 사용 전 공식 문서를 꼭 확인하세요.

---

## 어떻게 설치하나요?

### 직접 만든 Mod 사용하기

```bash
# 1. Mod 파일 준비
mkdir my-mod && cd my-mod

# 2. 초기화 (추정 — 공식 문서 확인 필요)
claude plugin init --type mod

# 3. TypeScript 코드 작성 후 활성화
claude plugin enable ./my-mod
```

### Plugin Marketplace에서 받아오기

```bash
# Marketplace에서 Mod 검색·설치
claude plugin install <mod-이름>
```

---

## Mods vs Plugins — 뭐가 다른가요?

| | **Mods** | **Plugins** |
|-|----------|------------|
| 목적 | UI·동작 커스터마이징 | 새 도구·기능 추가 |
| 복잡도 | 낮음 (TypeScript 기본만 알면 됨) | 중간 (서버·API 연동 가능) |
| 예시 | 색상 테마, 패널 추가 | GitHub 연동, DB 조회 |
| 대상 | 개인 취향 반영 | 팀 작업 흐름 개선 |

---

## 공식 문서 구성

Mods 문서는 9개의 세부 페이지로 구성됩니다:

- **overview** — 개요
- **create** — Mod 만들기
- **reference** — API 레퍼런스
- **interface** — UI 구성 요소
- **gallery** — 예시 갤러리
- **events** — 이벤트 훅
- **api** — API 명세
- **test** — 테스트 방법
- **troubleshoot** — 문제 해결

> 💡 **입문자 팁**: 처음에는 gallery부터 보세요. 다른 사람이 만든 Mod를 보면서 "아, 이런 게 가능하구나"를 익히는 게 가장 빠릅니다. 🙂

---

## 60대도 도전할 수 있을까요?

TypeScript를 전혀 모른다면 조금 어려울 수 있어요. 하지만:

1. **Claude Code에게 만들어 달라고** 하면 됩니다! `"오른쪽에 오늘 작업 목록 보여주는 패널 만들어줘"` 한 마디면 Claude가 Mod 코드를 작성해 줘요.
2. **Plugin Marketplace**에서 남이 만든 Mod를 그냥 설치할 수도 있어요.

만들기 어려우면 쓰기만 해도 충분합니다. 😊
