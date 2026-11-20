---
title: "[공] Projects·Mods·Code Review GA — 2026년 9~11월 Claude Code 신기능"
description: "2026년 9월부터 11월 사이 Claude Code에 추가된 세 가지 주요 기능: Projects(멀티 에이전트 그룹), Mods(인터페이스 커스터마이징), Code Review 정식 출시"
tags: ["자동생성", "Projects", "Mods", "CodeReview", "신기능", "Claude Code", "2026하반기"]
category: "next"
order: 18
lastUpdated: "2026-11-20"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 출시: claude.com/claude-code 마케팅 페이지 (Sep 17, 2026)
<br />★ <strong>[공]</strong> Mods 출시: claude.com/claude-code 마케팅 페이지 (Oct 1, 2026)
<br />★ <strong>[공]</strong> Code Review GA: claude.com/claude-code 마케팅 페이지 (Oct 15, 2026)
<br />★ 각 기능의 세부 동작은 "공식 발표 기준"이며, 아직 확인되지 않은 부분은 추정으로 표기했어요.
</div>

## 2026년 하반기 주요 신기능 한눈에 보기

| 날짜 | 기능 | 한 줄 요약 |
|---|---|---|
| Sep 17, 2026 | **Projects** | 여러 Claude Code 세션을 하나로 묶어 관리 |
| Oct 1, 2026 | **Mods** | TypeScript 몇 줄로 Claude Code 외관·동작 커스터마이징 |
| Oct 15, 2026 | **Code Review GA** | Team·Enterprise 고객 대상 정식 출시 |

---

## Projects — 에이전트 여러 개를 한 번에

### Projects가 뭔가요?

**Projects**는 관련된 Claude Code 세션들을 하나의 프로젝트로 묶어서 여러 에이전트를 동시에 감독·관리하는 기능이에요. Claude Code Desktop에서 사용 가능해요.

> 🍱 **비유로 설명하면**: 혼자 여러 아르바이트를 뛰는 게 아니라 **직원 여러 명을 한 사무실에 앉혀놓고 각자 다른 일을 시키는 것**이에요. 프로젝트가 사무실 역할이에요.

### 어떻게 쓰나요?

1. Claude Code Desktop에서 새 프로젝트 생성
2. 프로젝트 안에 세션(에이전트) 여러 개 실행
3. 한 화면에서 모든 에이전트 진행 상황 모니터링

> 💡 **입문자 팁**: 큰 기능을 여러 조각으로 나눠서 각 에이전트에게 맡기면 작업 속도가 크게 빨라져요.

> **추정**: 세부 UI/UX는 공식 문서 기준으로 추후 업데이트 예정이에요.

---

## Mods — Claude Code를 내 입맛대로

### Mods가 뭔가요?

**Mods**는 TypeScript 코드 몇 줄로 Claude Code의 **외관(UI)과 동작(behavior)을 바꿀 수 있는** 커스터마이징 시스템이에요. CLI와 데스크톱 앱 양쪽에서 사용 가능해요.

> 🍱 **비유로 설명하면**: 스마트폰 케이스만 바꾸는 게 아니라, **앱의 테마 색상·버튼 위치·단축키까지** 직접 설정할 수 있는 거예요. 개발자용 맞춤 세팅이에요.

### 뭘 바꿀 수 있나요?

Mods로 커스터마이징 가능한 것들 (공식 발표 기준):
- 인터페이스 테마/색상
- 사이드 패널 추가
- 도구 호출 시 이벤트 훅

```typescript
// 예시: 간단한 Mod (추정 — 공식 문서에서 최종 확인 필요)
export default {
  name: "my-mod",
  theme: {
    primary: "#ff6600"
  }
}
```

> 💡 **입문자 팁**: Mods는 개발자 기능이에요. 처음엔 플러그인 마켓플레이스에 올라온 완성된 Mod를 설치하는 것부터 시작하세요.

---

## Code Review — 정식 서비스로 출시

### Code Review GA가 뭔가요?

**Code Review**는 Claude Code가 GitHub Pull Request를 자동으로 리뷰해주는 기능이에요. 2026년 10월 15일부터 **Team·Enterprise 고객 대상으로 정식 출시(GA)**됐어요.

> 🍱 **비유로 설명하면**: 코드를 완성하면 선배 개발자가 "이 부분 버그 있을 것 같은데?" 하고 자동으로 댓글 달아주는 것과 같아요. 24시간 쉬지 않고 작동해요.

### 어떻게 활성화하나요?

```yaml
# .github/workflows/claude-code-review.yml (추정 — 공식 문서 확인 필요)
name: Code Review
on:
  pull_request:
    types: [opened, synchronize]
```

### 플랜별 가용성

| 플랜 | Code Review |
|---|---|
| Pro / Max | ❌ 미지원 |
| **Team** | ✅ **GA (정식 출시)** |
| **Enterprise** | ✅ **GA (정식 출시)** |

> 💡 **개인 사용자 팁**: Code Review는 Team 이상 플랜이에요. 개인이라면 `/code-review` 명령어로 로컬 리뷰를 쓰세요.

---

## 정리: 2026년 하반기 Claude Code가 더 강해진 점

| 기능 | 이전 | 이후 |
|---|---|---|
| 에이전트 관리 | 세션 하나씩 개별 관리 | Projects로 묶어서 한 화면 감독 |
| 커스터마이징 | 플러그인 마켓플레이스만 | Mods로 직접 TypeScript 커스터마이징 |
| PR 리뷰 | 수동 or 베타 | Code Review **정식 출시** |
| 모델 성능 | Sonnet 5 / Fable 5 | 5.5 패밀리 + Fable 5.2로 전면 업그레이드 |

> 🔖 모델 변경은 [5.5 패밀리 소개](./models-5-5-family.md)를 참고하세요.
