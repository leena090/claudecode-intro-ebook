---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code를 내 것으로"
description: "Claude Code의 동작 방식과 외관을 TypeScript 코드로 직접 바꿀 수 있어요. 버튼 추가, 패널 만들기, 훅 설정까지 (CLI·데스크톱 앱 지원)"
tags: ["자동생성", "mods", "TypeScript", "커스터마이징", "플러그인", "고급"]
category: "advanced"
order: 24
lastUpdated: "2026-11-08"
---

<div class="note-star">
★ <strong>[공]</strong> Mods 공식 출시: claude.com/claude-code (Oct 1, 2026 블로그 발표)<br/>
★ <strong>[공]</strong> CLI 및 데스크톱 앱에서 모두 지원
</div>

## Mods란 무엇인가요?

**Mods(모드)**는 TypeScript 코드 몇 줄로 Claude Code의 **동작 방식과 외관**을 바꾸는 기능이에요.

마치 스마트폰 앱에 **테마**나 **확장 프로그램**을 설치하는 것과 비슷합니다.

```
일반 Claude Code
   ↓ Mods 적용
나만의 맞춤 Claude Code 🎨
```

---

## 💡 쉽게 이해하기: 자동차 튜닝

Mods는 **자동차 튜닝**과 같습니다.

```
자동차 (Claude Code 기본)
  ↓ 튜닝 (Mods 적용)
내가 원하는 대로 꾸민 자동차
```

| 튜닝 예시 | Mods 예시 |
|---|---|
| 시트 색상 바꾸기 | UI 색상·테마 변경 |
| 버튼 추가 (경적 종류) | 커스텀 버튼·패널 추가 |
| 출발 시 음악 자동 재생 | 세션 시작 시 자동 작업 실행 |
| 네비게이션 목소리 변경 | Claude 응답 스타일 조정 |

---

## Mods로 무엇을 바꿀 수 있나요?

공식 발표 기준, Mods는 다음을 지원합니다:

| 카테고리 | 가능한 변경 |
|---|---|
| **UI/외관** | 패널 추가, 테마 변경, 버튼 추가 |
| **동작 방식** | 도구 호출 전/후 규칙 설정 |
| **명령어** | 커스텀 슬래시 명령어 만들기 |
| **자동화** | 특정 조건에서 자동 실행 로직 |

<div class="note-star">
★ 세부 기능 목록은 공식 문서(<a href="https://code.claude.com/docs/en/plugins-reference">plugins-reference</a>)를 확인하세요. 버전에 따라 달라질 수 있습니다.
</div>

---

## 간단한 Mods 예시

### 예시 1: 커스텀 패널 추가

```typescript
// my-mod.ts
export default {
  name: "my-status-panel",
  panels: [{
    id: "status",
    title: "내 프로젝트 상태",
    render: () => `
      <div>
        <h3>현재 작업</h3>
        <p>기능 개발 중...</p>
      </div>
    `
  }]
}
```

### 예시 2: 도구 호출 전 로깅

```typescript
// 모든 파일 편집 전에 로그 남기기
export default {
  name: "edit-logger",
  toolCallRules: [{
    tool: "Edit",
    before: (params) => {
      console.log(`편집 예정: ${params.file_path}`);
    }
  }]
}
```

### 예시 3: 커스텀 슬래시 명령어

```typescript
// /hello 명령어 추가
export default {
  name: "hello-command",
  commands: [{
    name: "hello",
    description: "팀원에게 인사",
    run: () => "안녕하세요! Claude Code로 오늘도 화이팅! 🚀"
  }]
}
```

---

## Mods 설치 방법

### 방법 1: 직접 작성

```bash
# 1. mods 폴더 만들기 (프로젝트 루트 또는 ~/ 아래)
mkdir -p ~/.claude/mods

# 2. TypeScript 파일 작성
vim ~/.claude/mods/my-mod.ts

# 3. Claude Code 재시작
# 자동으로 로드됩니다
```

### 방법 2: 플러그인 마켓플레이스에서 설치

```bash
# 마켓플레이스 검색
/plugin search "mod"

# 설치
/plugin install <mod-name>
```

---

## Mods vs 플러그인 — 뭐가 다른가요?

| 비교 항목 | Mods | 플러그인(Plugins) |
|---|---|---|
| 주 목적 | UI·동작 커스터마이징 | 외부 도구·API 연결 |
| 언어 | TypeScript | TypeScript/JavaScript |
| 복잡도 | 간단 (몇 줄) | 더 복잡한 통합 가능 |
| 예시 | 버튼 추가, 테마 변경 | GitHub 연결, DB 쿼리 |

<div class="note-star">
★ Mods와 플러그인은 함께 쓸 수 있어요. Mods로 UI를 바꾸고, 플러그인으로 기능을 확장하는 조합이 가능합니다.
</div>

---

## 활용 아이디어

### 팀 개발자를 위한 Mods

```typescript
// 팀 컨벤션 자동 체크 Mod
export default {
  name: "team-convention",
  toolCallRules: [{
    tool: "Write",
    before: (params) => {
      if (params.file_path.endsWith('.ts') && 
          !params.content.includes('// @team-reviewed')) {
        console.warn('⚠️ TypeScript 파일에 팀 리뷰 태그가 없어요!');
      }
    }
  }]
}
```

### 한국어 사용자를 위한 Mods

```typescript
// 응답 언어 고정 Mod
export default {
  name: "korean-mode",
  systemPromptSuffix: "항상 한국어로 답해주세요. 코드 주석도 한국어로 작성해주세요."
}
```

---

## 주의사항

```
⚠️ Mods는 로컬에서만 실행됩니다
   (팀원에게 공유하려면 파일을 함께 공유해야 해요)

⚠️ 신뢰할 수 없는 출처의 Mods는 설치하지 마세요
   (실행 권한이 있는 코드이므로 보안 주의!)

✅ 직접 작성한 Mods는 안전합니다
✅ 공식 마켓플레이스 Mods도 검증됩니다
```

---

## 다음 단계

Mods로 외관을 바꾸는 법을 배웠다면, 이제 **Projects 기능**으로 여러 에이전트를 동시에 감독하는 방법을 알아보세요!
