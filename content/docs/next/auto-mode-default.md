---
title: "[공] Auto mode 기본값 전환 — 이제 Claude가 먼저 움직여요"
description: "2026년 9월 17일부터 Pro·Max·Team 플랜에서 Auto mode(자동 권한 모드)가 기본값으로 변경"
tags: ["자동생성", "auto-mode", "권한모드", "2026-09"]
category: "next"
order: 19
lastUpdated: "2026-09-20"
---

<div class="note-star">
★ <strong>공식 출처</strong>: claude.com/claude-code 마케팅 페이지 (2026-09-17 공지)<br />
★ "Claude Code now runs in auto mode by default on Pro, Max, and Team plans"
</div>

## 무엇이 바뀌었나요?

2026년 9월 17일부터 **Claude Code가 Pro·Max·Team 플랜에서 Auto mode(오토 모드)를 기본값으로 사용**합니다.

> 🤖 **공식 설명**: "so it can work longer while still catching risky commands"  
> (위험한 명령은 여전히 잡아내면서, 더 오래 자율적으로 일할 수 있도록)

---

## Auto mode란 무엇인가요?

Claude Code는 파일을 수정하거나 명령어를 실행할 때 허락을 구하는 "권한 모드"가 있어요. Auto mode는 **내장 안전 분류기(classifier)가 각 동작의 위험도를 자동 판단**해서, 안전한 건 그냥 하고 위험한 건 사람에게 먼저 묻는 방식이에요.

> 🏠 **비유로 설명하면**: 집에 도우미 분을 새로 고용했어요.
> - **이전 방식**: "청소해도 될까요? 빨래해도 될까요? 우편물 열어봐도 될까요?" — 매번 물어봄
> - **Auto mode**: "청소·빨래는 그냥 했어요. 중요한 서류는 열기 전에 여쭤볼게요." — 판단력 있게 자율 처리

---

## 어떤 플랜이 해당되나요?

| 플랜 | Auto mode 기본값 |
|------|----------------|
| Pro ($17~20/월) | ✅ 기본 적용 |
| Max 5x ($100/월) | ✅ 기본 적용 |
| Max 20x ($200/월) | ✅ 기본 적용 |
| Team | ✅ 기본 적용 |
| Enterprise | ✅ 기본 적용 (관리자 설정 가능) |
| API (Console) | 별도 설정 필요 (추정) |

---

## 이전에 쓰던 Shift+Tab 모드 전환은요?

여전히 사용 가능해요! 언제든지 **Shift+Tab**을 눌러 권한 모드를 바꿀 수 있어요:

```
Shift+Tab → 모드 순환
  auto (자동) → default (기본) → manual (수동) → ...
```

또는 VS Code 확장 프로그램의 모드 표시기, Desktop 앱의 모드 선택기에서 바꿀 수 있습니다.

---

## 걱정되는 점 — "Claude가 멋대로 하지 않나요?"

Auto mode에도 안전장치가 있어요:

1. **Hard deny 규칙**: 위험도가 높은 명령은 무조건 먼저 허락을 구함
2. **내장 분류기**: 각 동작의 위험도를 자동 판단
3. **수동 전환**: 언제든지 더 엄격한 모드로 전환 가능

---

## 실제로 어떻게 달라지나요?

### 이전 (Default mode 기본)
```
Claude: 이 파일을 수정해도 될까요? [승인/거부]
나: 승인
Claude: 테스트를 실행해도 될까요? [승인/거부]
나: 승인
Claude: npm install 해도 될까요? [승인/거부]
나: 승인
...
```

### 지금 (Auto mode 기본)
```
나: "인증 버그 고쳐줘"
Claude: [파일 수정 → 테스트 실행 → 의존성 설치 → PR 초안 생성] (자율 처리)
Claude: "완료했어요. 여기 변경 내용 요약입니다. PR 열어도 될까요?" [이 시점에서 확인 요청]
```

> 위험도가 낮은 읽기·쓰기·테스트 실행은 자동 처리되고, Git push나 외부 서비스 연동 같은 중요 동작은 여전히 확인을 구합니다.

---

## 더 읽어보기

- [공식 Auto mode 설정 문서](https://code.claude.com/docs/en/auto-mode-config.md)
- [권한 모드 선택 가이드](https://code.claude.com/docs/en/permission-modes.md)
- 이 ebook의 [Permission Modes 설명](../advanced/permission-modes.md)
