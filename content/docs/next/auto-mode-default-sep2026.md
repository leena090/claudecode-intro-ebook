---
title: "[공] Auto 모드가 이제 기본값 — Pro·Max·Team 플랜 기본 설정 변경"
description: "2026년 9월 17일부터 Claude Code가 Pro·Max·Team 플랜에서 자동으로 Auto 모드로 시작돼요"
tags: ["자동생성", "auto mode", "오토 모드", "기본값 변경", "권한 모드"]
category: "next"
order: 43
lastUpdated: "2026-10-07"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 2026년 9월 17일부터 Claude Code가 <strong>Pro·Max·Team 플랜</strong>에서 Auto 모드를 기본값으로 사용해요. 더 오래 자율로 일하면서도 위험한 명령은 여전히 잡아내요. <code>[공]</code><br />
★ <strong>출처</strong>: claude.com/claude-code 마케팅 공식 페이지 (Sep 17, 2026 업데이트)
</div>

## 뭐가 바뀌었나요?

2026년 9월 17일 전까지는 Claude Code를 켜면 기본적으로 **default 모드**로 시작했어요.

이제는 **Auto 모드**가 기본이에요.

📌 Anthropic 공식 발표:
> "Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands."
> (Pro, Max, Team 플랜에서 Auto 모드가 기본값이 됐어요. 더 오래 작업하면서도 위험한 명령은 여전히 잡아냅니다.)

---

## Auto 모드가 뭐예요?

Auto 모드는 Claude Code가 허락을 덜 구하면서 일하는 모드예요.

🤖 비유: default 모드가 "매 단계마다 보고하는 신입사원"이라면, Auto 모드는 "어느 정도 자율로 일하다가 중요한 결정만 물어보는 경험자"예요.

| 모드 | 물어보는 빈도 | 특징 |
|---|---|---|
| **default** | 파일 수정마다 | 가장 안전, 느림 |
| **acceptEdits** | 위험한 명령만 | 적당히 자율 |
| **Auto** ⭐ | 백그라운드 안전 체크 포함 | 길게 혼자 작업 가능 |
| bypassPermissions | 거의 안 물어봄 | 격리 환경 전용 |

Auto 모드의 특징:
- 일반적인 코드 수정·파일 읽기는 알아서 진행
- 위험할 수 있는 시스템 명령, 외부 API 호출 등은 **백그라운드 안전 분류기(safety classifier)**가 검토
- 분류기가 위험 신호를 감지하면 그때 물어봐요

---

## 왜 기본값을 바꿨나요?

Claude Code를 쓰는 사람들이 늘어나면서, 매번 "이 파일 수정할게요 — 네 — 저 파일도 수정할게요 — 네 — 이 명령어 실행할게요 — 네" 하는 반복이 생산성을 떨어뜨린다는 피드백이 많았어요.

Auto 모드는:
1. **안전성**은 유지 (백그라운드 classifier가 위험 명령 감지)
2. **생산성**은 향상 (불필요한 확인 없이 연속 작업)

특히 **긴 작업**이나 **다중 파일 리팩토링** 같은 경우에 체감 차이가 커요.

---

## 지금 내 모드 확인하기

세션 시작 후 상태 표시줄이나 프롬프트에서 현재 모드를 확인할 수 있어요.

```bash
# 현재 모드 확인 (세션 정보에서)
# 상태 표시줄: [auto] 또는 [default] 등으로 표시
```

모드를 바꾸고 싶으면 `Shift+Tab`으로 전환할 수 있어요.

---

## Auto 모드가 불편하면 어떻게 하나요?

Auto 모드가 너무 자율적으로 느껴지거나, 세심하게 확인하고 싶다면 언제든 바꿀 수 있어요.

**방법 1: 세션 중 Shift+Tab**
```
Shift+Tab → default → acceptEdits → plan → auto 순서로 전환
```

**방법 2: settings.json에서 영구 변경**
```json
{
  "defaultMode": "default"
}
```

**방법 3: 특정 세션만 바꾸기**
```bash
claude --mode default  # 이 세션만 default 모드로
```

<div class="note-circle">○ Enterprise 플랜은 관리자가 기본 모드를 별도로 설정할 수 있어요. 팀 전체의 기본값이 Auto 모드가 아닐 수 있어요 (관리자 설정 확인 필요).</div>

---

## 더 알아보기

- 권한 모드 상세 설명: [권한 모드 완전 정리 — default·acceptEdits·plan·auto·bypass](/docs/advanced/permission-modes)
- Auto 모드 설정: [code.claude.com/docs/en/auto-mode-config](https://code.claude.com/docs/en/auto-mode-config)
