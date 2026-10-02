---
title: "[공] Auto Mode 기본 켜짐 — Claude Code가 이제 자동으로 더 오래 일해요"
description: "2026년 9월 17일부터 Pro·Max·Team 플랜에서 Auto mode가 기본으로 켜져, Claude Code가 위험 명령만 확인하고 나머지는 자동으로 처리해요"
tags: ["자동생성", "AutoMode", "기본설정", "Pro", "Max", "Team", "신규기능"]
category: "next"
order: 19
lastUpdated: "2026-10-02"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 공식 안내: <a href="https://claude.com/claude-code">claude.com/claude-code</a> "Auto mode by default" Blog Sep 17, 2026
<br />★ <strong>[공]</strong> Auto mode 설정 문서: <a href="https://code.claude.com/docs/en/auto-mode-config">code.claude.com/docs/en/auto-mode-config</a>
</div>

## 무슨 변화인가요?

2026년 9월 17일부터 **Pro, Max, Team 플랜** 사용자라면 Claude Code를 열 때 **Auto mode가 기본으로 켜져** 있어요.

이게 무슨 의미냐면, 비유로 설명할게요.

기존에는 Claude Code가 매번 "이 파일 수정해도 될까요?", "이 명령어 실행해도 될까요?" 하고 물어봤어요. 마치 모든 행동마다 허락을 구하는 직원 같았죠.

**Auto mode**는 Claude Code에 **자율 작업 권한**을 주는 거예요. 위험한 명령(예: 파일 삭제, 패키지 설치)만 확인하고, 일반적인 코드 작성·편집·테스트 실행은 **허락 없이 자동으로** 처리해요.

> 📌 **공식 설명 기준**: "Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands."

---

## 어떻게 달라지나요?

| 구분 | 이전 (기본 설정) | 현재 (Auto mode 기본) |
|---|---|---|
| 파일 읽기·쓰기 | 매번 확인 요청 | 자동 허용 |
| 일반 명령어 실행 | 매번 확인 요청 | 자동 허용 |
| 위험 명령어 (rm, sudo 등) | 확인 요청 | 여전히 확인 |
| 작업 지속성 | 자주 멈춤 | 오래 연속 작업 |

---

## "더 오래 일한다"는 게 뭔가요?

예전에는 긴 작업을 하다 보면 중간에 Claude가 멈추고 "이렇게 해도 될까요?"를 반복했어요. 특히 파일이 많거나 복잡한 리팩터링에서 자주 발생했죠.

Auto mode에서는 이런 불필요한 중단이 줄어요. 마치 일할 때마다 도장 찍어야 하던 승인서를 없애고, 중요한 결정만 보고하게 한 것처럼요.

---

## 안전한가요?

걱정하실 수 있어요. 자동으로 실행되면 실수로 뭔가 잘못되는 거 아닌지.

Anthropic은 Auto mode에 **백그라운드 안전 분류기(safety classifier)**를 추가했어요. 이게 Claude의 행동을 모니터링하면서 위험한 명령을 감지하면 자동으로 멈춰요.

즉, 완전한 자동이 아니라 **스마트한 자동**이에요.

| 안전장치 | 내용 |
|---|---|
| 백그라운드 안전 분류기 | 위험 행동 자동 감지 |
| 위험 명령어 확인 | `rm -rf`, `sudo`, 시스템 파일 수정 등 |
| 권한 모드 설정 | 필요시 더 엄격한 모드로 전환 가능 |

---

## Auto mode를 끄고 싶다면

Auto mode가 기본이지만, 개인 설정에서 비활성화할 수 있어요.

```bash
# settings.json에서 설정
{
  "autoMode": false
}
```

또는 `/config` 명령어로 인터랙티브하게 변경할 수 있어요.

자세한 설정: [code.claude.com/docs/en/auto-mode-config](https://code.claude.com/docs/en/auto-mode-config)

---

## 기존 Auto mode 문서와의 관계

이전에 `content/docs/advanced/auto-mode-config.md`에서 Auto mode를 소개했는데, 그 기능이 이제 **기본값**이 된 거예요. 직접 켜야 했던 기능에서 기본 상태로 바뀐 중요한 변화예요.

---

## 입문자에게 드리는 조언

처음 Claude Code를 사용한다면 Auto mode 기본 상태로 써보는 걸 추천해요. 작업 흐름이 훨씬 부드러워져요.

단, 중요한 프로젝트에서 작업할 때는 Claude가 무엇을 하는지 화면을 가끔 확인하는 게 좋아요. "알아서 해줘"라고 했더라도 결과는 내가 검토해야 하니까요. 🙂
