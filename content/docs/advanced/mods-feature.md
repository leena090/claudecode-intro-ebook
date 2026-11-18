---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code를 내 취향대로 꾸미기"
description: "Claude Code의 외관과 동작을 TypeScript 코드로 바꾸는 Mods 기능. CLI와 데스크톱 앱 모두 지원"
tags: ["자동생성", "mods", "모드", "플러그인", "TypeScript", "커스터마이징", "테마", "2026-10"]
category: "advanced"
order: 27
lastUpdated: "2026-11-18"
---

<div class="note-star">
★ <strong>출처</strong> — 공식 문서 (code.claude.com/docs/en/plugins/mods/) + Anthropic 블로그 (2026-10-01). [공] [블]<br />
★ CLI와 데스크톱 앱 모두 지원해요.<br />
★ 처음 나왔을 땐 "플러그인 마켓플레이스"의 하위 기능이었는데, 이제 독립 섹션으로 성장했어요.
</div>

## Mods가 뭔가요? 🎨

**Mods(모드)**는 TypeScript 코드 몇 줄로 Claude Code의 **외관과 동작 방식**을 바꾸는 기능이에요.

> 💡 **비유**: 마인크래프트 텍스처 팩이나 배그 스킨처럼, 게임(Claude Code)은 그대로인데 내 눈에 보이는 모습과 소소한 동작만 바꾸는 거예요.

**바꿀 수 있는 것들**:
- 🎨 **테마** — 색상, 폰트, 배경
- 🔔 **알림** — 작업 완료 시 소리 또는 팝업
- 🧩 **UI 패널** — 옆에 항상 열려있는 커스텀 패널
- ⚡ **단축키** — 나만의 슬래시 명령어 추가
- 🔗 **훅(hook)** — 특정 도구 호출 전후에 내 코드 실행

---

## 왜 Mods인가요?

이전에는 Claude Code 외관을 바꾸려면 플러그인 전체를 만들어야 했어요.  
Mods는 그보다 훨씬 가벼워요:

| | 기존 플러그인 | Mods |
|--|---|---|
| 목적 | 새 기능 추가 | 외관/동작 커스터마이징 |
| 복잡도 | 높음 | 낮음 (TypeScript 파일 1개) |
| 배포 | 마켓플레이스 등록 필요 | 로컬 파일만으로 작동 |
| 범위 | 도구·기능 확장 | UI·소리·단축키·패널 |

---

## 첫 Mod 만들기

### 1단계 — 파일 만들기

`.claude/mods/my-mod.ts` 파일을 만들어요:

```typescript
// 작업 완료 시 소리 알림 Mod 예시
export default {
  name: "done-chime",
  version: "1.0.0",
  
  hooks: {
    onTaskComplete() {
      // 맥OS 알림음 재생 (추정 - 공식 API 기준)
      playSound("Glass");
    }
  }
};
```

### 2단계 — Claude Code에서 활성화

```bash
# CLI에서
claude mods enable my-mod

# 또는 settings.json에서
{
  "mods": ["./mods/my-mod.ts"]
}
```

> ⚠️ **중요**: 위 코드는 공식 문서 패턴 기반 예시예요. 정확한 API는 `code.claude.com/docs/en/plugins/mods/api` 를 확인하세요.

---

## 공식 문서 구조 (9개 섹션)

공식 Mods 문서는 아래처럼 세분화돼 있어요:

| 섹션 | 내용 |
|------|------|
| overview | Mods 개념과 시작 가이드 |
| create | 처음 Mod 만들기 |
| reference | 모든 API·속성 목록 |
| interface | UI 컴포넌트 사용법 |
| gallery | 예시 Mod 모음 |
| events | 이벤트 훅 목록 |
| api | 전체 TypeScript API |
| test | Mod 테스트 방법 |
| troubleshoot | 오류 해결 |

---

## 갤러리에 있는 Mod 예시들

> 💡 공식 갤러리 (code.claude.com/docs/en/plugins/mods/gallery) 에서 미리 만들어진 Mod를 가져다 쓸 수 있어요.

**예시 종류** (공식 발표 기준):
- 다크 테마 커스텀
- 작업 완료 알림음
- 토큰 사용량 항상 보여주기 패널
- Git 브랜치 현황 사이드바

---

## CLI vs 데스크톱 앱

| | CLI | 데스크톱 앱 |
|--|-----|------------|
| Mods 지원 | ✅ | ✅ |
| UI 패널 | 제한적 | 완전 지원 |
| 테마 적용 | 터미널 색상 범위 | 풍부한 GUI |

---

## 주의사항

- Mods는 **로컬**에서 돌아요. 다른 사람과 공유하려면 파일 전달 또는 플러그인 마켓플레이스 등록 필요.
- TypeScript를 처음 접한다면 → 갤러리에서 기존 Mod를 복사해 색상 코드만 바꾸는 것부터 시작하세요.
- 기업 환경에서는 관리자가 `mods/admin` 설정으로 허용 Mod를 제한할 수 있어요.

---

## 정리

| 질문 | 답변 |
|------|------|
| 비개발자도 쓸 수 있나요? | 갤러리 Mod 가져다 쓰기는 가능, 직접 만들기는 TypeScript 기초 필요 |
| 플러그인과 다른 점은? | Mods는 UI/동작 커스터마이징, 플러그인은 기능 확장 |
| 비용이 드나요? | Mods 자체는 무료 (실행 중 Claude가 토큰을 쓰면 그 비용만 발생) |

> 🔗 **공식 문서**: code.claude.com/docs/en/plugins/mods/overview
