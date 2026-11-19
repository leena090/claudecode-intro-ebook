---
title: "[공] Mods — TypeScript 몇 줄로 Claude Code 외관·동작 바꾸기"
description: "Claude Code CLI와 데스크톱 앱의 인터페이스와 동작을 TypeScript 모드 파일로 커스터마이징하는 Mods 기능 소개"
tags: ["자동생성", "Mods", "커스터마이징", "TypeScript", "플러그인", "2026-10"]
category: "advanced"
order: 40
lastUpdated: "2026-11-19"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 claude.com/claude-code 마케팅 페이지 발표(2026-10-01)와 공식 문서를 토대로 작성했습니다.<br />
★ 세부 API는 공식 문서(<a href="https://code.claude.com/docs/en/plugins/mods/overview">Mods 공식 문서</a>)를 참고하세요.
</div>

## Mods가 뭔가요?

**TypeScript 코드 몇 줄로 Claude Code의 모습과 행동 방식을 바꾸는 기능**입니다.

> 🎨 **비유로 설명하면**: 스마트폰에 테마를 설치하는 것처럼요. 화면 색깔을 바꾸거나, 새 버튼을 추가하거나, 특정 동작을 가로채서 내 방식대로 처리할 수 있어요. 개발자가 아니어도 이해할 수 있고, 개발자라면 훨씬 더 많이 활용할 수 있습니다.

---

## Mods로 무엇을 할 수 있나요?

| 기능 | 설명 |
|---|---|
| **인터페이스 추가** | 패널, 버튼, 텍스트 필드 등 화면 요소 추가 |
| **명령어 추가** | 나만의 `/my-command` 슬래시 명령어 만들기 |
| **동작 가로채기** | 도구 호출 전·후에 나만의 로직 실행 |
| **이벤트 반응** | Claude 턴 시작·끝, 파일 편집 등 이벤트에 반응 |

---

## CLI와 데스크톱 앱 모두 지원

**공식 발표 기준:**
- Claude Code **CLI**에서 사용 가능
- Claude Code **데스크톱 앱**에서 사용 가능

```typescript
// Mod 기본 구조 예시 (공식 문서 참고)
export default {
  name: "my-first-mod",
  commands: [
    {
      name: "hello",
      description: "인사하기",
      handler: async () => {
        return "안녕하세요!";
      }
    }
  ]
};
```

---

## 어떻게 만드나요?

가장 쉬운 방법은 **Claude에게 Mod를 작성해 달라고 요청하는 것**입니다.

```
# Claude에게 요청하는 예시
"팀 코딩 컨벤션을 체크하는 Mod를 만들어줘.
파일 편집 후 자동으로 lint를 실행하고, 
결과를 왼쪽 패널에 보여줬으면 해."
```

> 💡 Claude가 `.claude/mods/` 폴더에 TypeScript 파일을 만들어 줍니다. 직접 TypeScript를 작성할 줄 몰라도 대화로 만들 수 있어요.

---

## Mod vs 기존 플러그인 차이

| | Mods | 플러그인 |
|---|---|---|
| **작성 언어** | TypeScript | YAML + 여러 형식 |
| **복잡도** | 낮음 (몇 줄~수십 줄) | 높음 (여러 파일) |
| **UI 추가** | 가능 | 제한적 |
| **실행 위치** | 세션 안 | 별도 프로세스 |
| **배포** | 로컬·마켓플레이스 | 마켓플레이스 |

---

## 활용 아이디어

```
💡 이런 Mod를 만들어 보세요:

1. 커밋 전 자동 체크리스트 패널
   - "PR 올리기 전 체크 항목을 왼쪽에 표시"

2. 프로젝트별 단축 명령어
   - "/deploy-staging → 스테이징 배포 자동화"

3. 팀 컨벤션 자동 경고
   - "TODO 주석 발견 시 알림 표시"

4. 비용 모니터링 패널
   - "현재 세션 토큰 사용량 실시간 표시"
```

---

## 공식 문서 링크

- [Mods 개요](https://code.claude.com/docs/en/plugins/mods/overview) — 무엇을, 어떻게
- [Mod 만들기](https://code.claude.com/docs/en/plugins/mods/create) — 첫 번째 Mod 작성
- [인터페이스 그리기](https://code.claude.com/docs/en/plugins/mods/interface) — UI 추가
- [Mods 레퍼런스](https://code.claude.com/docs/en/plugins/mods/reference) — 전체 API 명세

---

*출처: claude.com/claude-code 마케팅 발표 (2026-10-01) + code.claude.com 공식 문서*
*작성일: 2026-11-19 (자동 생성)*
