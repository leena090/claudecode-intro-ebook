---
title: "[공] Mods — TypeScript로 Claude Code 겉모습·행동 바꾸기"
description: "TypeScript 몇 줄로 Claude Code의 테마·패널·동작을 바꾸는 Mods 기능. CLI와 데스크톱 앱 모두 지원 (2026년 10월 출시)"
tags: ["자동생성", "Mods", "플러그인", "TypeScript", "커스텀", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-11-15"
---

<div class="note-star">
★ <strong>[공]</strong> 2026년 10월 1일 공식 출시. 마케팅 페이지 "Latest feature announcements" 확인.<br/>
★ CLI와 Claude Code 데스크톱 앱 모두에서 사용 가능.<br/>
★ 공식 문서: code.claude.com/docs/en/plugins/mods/overview
</div>

## Mods가 뭔가요?

**Mods**는 TypeScript 코드 몇 줄로 Claude Code의 **겉모습**이나 **행동**을 바꿀 수 있는 기능이에요.

> 🎸 **비유로 설명하면**: 스마트폰에 케이스를 씌우거나 테마를 바꾸는 것처럼, Mods는 Claude Code라는 도구에 나만의 "스킨"과 "부가 기능"을 붙이는 거예요.

예를 들면:
- 🎨 나만의 색 테마 적용
- 📊 채팅 옆에 항상 표시되는 커스텀 패널 추가
- 🔔 특정 도구가 실행될 때 알림이나 동작 추가
- 🏷️ 상태바(statusline)에 원하는 정보 표시

---

## Mods vs Plugins vs Skills

헷갈리기 쉬운 세 가지를 한 표로 정리해요:

| 항목 | 용도 | 작성 언어 |
|---|---|---|
| **Mods** | UI 모양 변경, 행동 커스텀 | TypeScript |
| **Plugins** | 도구(Tool) 추가, 워크플로우 확장 | TypeScript/JS |
| **Skills** | 특정 작업 가이드라인 패키지 | Markdown+YAML |

---

## 어떤 걸 바꿀 수 있나요?

공식 문서에서 확인된 Mods 카테고리:

### 🎨 인터페이스(Interface) 변경
- 테마 색상 변경
- 채팅 창 레이아웃 조정
- 커스텀 패널·밴드 추가

### ⚡ 이벤트(Events) 연동
- 특정 도구 실행 전/후 동작 추가
- 파일 저장, bash 명령 실행 등 이벤트에 훅 연결

### 🔧 API 연결
- Claude Code의 내부 API를 TypeScript에서 호출
- 현재 세션 정보, 대화 내용 접근

---

## 기본 사용법

> ⚠️ **주의**: 아래는 공식 문서 구조를 기반으로 한 개요예요. 세부 API는 `code.claude.com/docs/en/plugins/mods/create`에서 확인하세요.

### Mod 만들기

```typescript
// my-theme.mod.ts (추정 — 공식 발표 기준)
export default {
  name: "my-dark-blue",
  version: "1.0.0",
  
  // 테마 색상 오버라이드
  theme: {
    primary: "#1a1a2e",
    accent: "#4a90d9",
  },
  
  // 이벤트 훅
  onToolCall: (tool) => {
    if (tool.name === "Bash") {
      console.log(`명령어 실행: ${tool.input.command}`);
    }
  }
};
```

### Mod 설치

```bash
# CLI에서 로컬 Mod 불러오기 (추정)
claude --mod ./my-theme.mod.ts

# 또는 settings.json에 등록
# ~/.claude/settings.json
{
  "mods": ["./my-theme.mod.ts"]
}
```

---

## 어디서 Mods를 찾나요?

1. **공식 갤러리**: `code.claude.com/docs/en/plugins/mods/gallery`
2. **Plugin Marketplace**: 플러그인 마켓플레이스에서 검색
3. **직접 만들기**: TypeScript로 작성해서 로컬 사용 가능

---

## 테스트 & 디버깅

```bash
# Mod 테스트 (공식 문서: plugins/mods/test)
claude mod test ./my-mod.ts

# 문제 발생 시 (공식 문서: plugins/mods/troubleshoot)
claude mod diagnose ./my-mod.ts
```

---

## 기업용 Mod 관리

팀/Enterprise 환경에서는 관리자가 조직 전체에 Mod를 배포하거나 제한할 수 있어요.

- 허용 Mod 목록 설정: `server-managed-settings.json`
- 조직 Mod 갤러리 운영: `code.claude.com/docs/en/plugins/mods/admin`
- 직원 커스텀 Mod 허용/차단 정책 설정

---

## 정리

> Mods는 Claude Code를 "내 것"으로 만드는 TypeScript 기반 커스텀 레이어예요. 테마 하나 바꾸는 가벼운 사용부터, 도구 실행 이벤트를 가로채는 고급 사용까지 가능해요.

| 난이도 | 추천 활동 |
|---|---|
| 🟢 초급 | 갤러리에서 완성된 Mod 설치해보기 |
| 🟡 중급 | 기존 Mod를 수정해서 나만의 색상 적용 |
| 🔴 고급 | 이벤트 훅으로 커스텀 워크플로우 구축 |

> 출처: claude.com/claude-code (마케팅 페이지 feature announcements, Oct 1, 2026) `[공]`
> 공식 문서: code.claude.com/docs/en/plugins/mods/overview
