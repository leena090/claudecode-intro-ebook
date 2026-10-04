---
title: "[공] 오토 모드가 기본값으로 — Pro·Max·Team 전체 적용"
description: "2026년 9월부터 Claude Code가 Pro·Max·Team 요금제에서 오토 모드를 기본 권한 모드로 사용해요. 이제 더 오래 자율적으로 일할 수 있어요"
tags: ["자동생성", "오토모드", "auto mode", "기본값", "Pro요금제", "permission mode", "자동생성"]
category: "next"
order: 18
lastUpdated: "2026-10-04"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 공식 발표: claude.com/claude-code (Sep 17, 2026)<br />
★ <strong>[공]</strong> What's New W32: code.claude.com/docs/en/whats-new/2026-w32 (Aug 3–7, 2026)<br />
★ <strong>[공]</strong> Auto mode by default — Pro·Max·Team 요금제 모두 적용
</div>

## 무슨 변화가 생겼나요?

Claude Code가 **오토 모드(auto mode)를 기본 권한 모드**로 쓰기 시작했어요.

> 🍱 **비유로 설명하면**: 이전에는 인턴한테 "이거 해도 될까요?"를 매번 물어보게 했다면, 이제는 "알아서 해, 대신 위험한 건 스스로 걸러줘"라고 말한 거예요. 안전장치는 그대로인데 작업 흐름이 훨씬 부드러워졌어요.

---

## 어떻게 달라졌나요?

### 이전 (2026-08 이전)

| 요금제 | 오토 모드 사용 가능 여부 |
|---|---|
| Pro | ❌ 불가 |
| Max | ✅ 수동으로 켜야 |
| Team | ✅ 관리자 활성화 필요 |
| Enterprise | ✅ 관리자 활성화 필요 |

### 이후 (2026-09~)

| 요금제 | 오토 모드 |
|---|---|
| **Pro** | ✅ **기본값** |
| **Max** | ✅ **기본값** |
| **Team** | ✅ **기본값** |
| Enterprise | ✅ 관리자 설정으로 조절 가능 |

공식 소개 문구: **"Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands."**

---

## 오토 모드 = 더 오래 혼자 일하는 모드

오토 모드에서 Claude Code는:

✅ **자율적으로 진행** — 매 단계마다 허락을 구하지 않아요  
✅ **안전 체크는 유지** — 별도 분류 모델이 위험 명령을 감시해요  
✅ **위험 명령은 자동 차단** — 외부 코드 다운로드+실행, 강제 push, 대량 삭제 등

> 🍱 **비유로 설명하면**: CCTV(안전 체크 모델)가 켜진 채로 알아서 일하는 직원이에요. 위험한 행동을 하려 하면 자동으로 경보가 울려요.

### 자동 차단 항목 (오토 모드)

- `curl | bash` 같은 외부 코드 다운로드 + 실행
- 프로덕션 배포·마이그레이션
- 클라우드 저장소 대량 삭제
- `main`으로 직접 force push
- IAM·리포지토리 권한 수정

---

## 기본값을 바꾸고 싶다면?

오토 모드가 불편하다면 이전처럼 되돌릴 수 있어요.

### 세션 중에 전환

```
Shift+Tab → acceptEdits 모드
Shift+Tab → plan 모드
Shift+Tab → default 모드 (매번 물어봄)
```

### 영구적으로 기본값 변경

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "default"
  }
}
```

### 조직 관리자가 비활성화

```json
// managed settings
{
  "permissions": {
    "disableAutoMode": "disable"
  }
}
```

---

## Pro 사용자분께 — 이제 오토 모드 쓸 수 있어요!

이전에는 **Max 이상**에서만 오토 모드를 쓸 수 있었어요. 이제 **Pro ($17/월)** 사용자도 오토 모드가 기본으로 켜져 있어요.

> 💡 **긴 작업에 특히 유용해요**: 파일 여러 개를 리팩토링하거나, 테스트 코드를 대량으로 작성하거나, 복잡한 버그를 추적할 때 중간에 "해도 될까요?" 질문이 줄어들어요.

---

## 더 알아보기

- [공식 문서 — Permission modes](https://code.claude.com/docs/en/permission-modes)
- [공식 문서 — Auto mode 설정](https://code.claude.com/docs/en/auto-mode-config)
- [권한 모드 완전 정리](/docs/advanced/permission-modes)
- [W32 업데이트 요약](/docs/next/whats-new-w30-w37)
