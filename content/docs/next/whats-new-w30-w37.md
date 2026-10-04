---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본 모델 전환, 크로스 세션 메시지, 셀프 호스팅 환경, 오토 모드 기본값 전환, GitLab 지원, Fable 5.1 등 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "셀프호스팅", "Projects", "Fable5.1", "GitLab", "오토모드"]
category: "next"
order: 17
lastUpdated: "2026-10-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 출처: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a> (W30~W37)<br />
★ W31은 공식 발표 없음 (해당 주 업데이트 없음으로 추정)
</div>

## 8주 요약 한눈에 보기

| 주차 | 날짜 | 핵심 업데이트 |
|---|---|---|
| W30 | Jul 20–24 | Opus 5 기본 모델, iOS 시뮬레이터 창, 보안 플러그인 |
| W32 | Aug 3–7 | 세션 간 메시지, 셀프 호스팅 환경, 오토 모드 기본값 |
| W33 | Aug 10–14 | 사용량 한도 후 자동 재개, fork 모드 기본값, GitLab 지원 |
| W34 | Aug 17–21 | /design 스킬, Concise 출력 스타일, 폰에서 세션 시작 |
| W35 | Aug 24–28 | 데스크톱에서 터미널 세션 재개, 피드백 리포트, 제한 모드 |
| W36 | Aug 31–Sep 4 | Claude Fable 5.1 전환, 컴퓨터 사용 백그라운드, /diff 패널 |
| W37 | Sep 7–11 | 플러그인 eval, 데스크톱 창 분리 |

---

## W30 (Jul 20–24) — Opus 5 기본, iOS 시뮬레이터, 보안 플러그인

### Opus 5가 기본 Opus 모델로 전환

Opus 4.8 대신 **Claude Opus 5**가 Claude Code의 기본 Opus 모델이 됐어요. 더 강력한 추론과 코딩 능력을 기본으로 쓸 수 있게 됐습니다.

### Claude Code Desktop — iOS 시뮬레이터 창

Desktop 앱에서 iOS 앱을 빌드하고 테스트할 때 **iOS 시뮬레이터 창이 별도 패널로** 뜨게 됐어요. Claude가 앱을 빌드하고 실행하거나 확인할 때 시뮬레이터가 자동으로 열립니다.

> 🍱 **비유로 설명하면**: 이전엔 스마트폰 화면을 별도 창에서 봐야 했는데, 이제 코드 에디터 옆에 미리보기처럼 바로 붙어서 보이는 거예요.

### Claude Security 플러그인 출시

코드베이스의 보안 취약점을 Claude Code 세션 안에서 스캔해주는 **Claude Security 플러그인**이 출시됐어요. 취약점을 찾아서 패치까지 제안해줍니다.

```bash
# 플러그인 설치 후
/scan-security
```

---

## W32 (Aug 3–7) — 세션 메시지, 셀프 호스팅, 오토 모드 기본값

### 세션 간 메시지 (Cross-session messaging)

같은 머신 또는 다른 머신의 **다른 Claude Code 세션에게 직접 메시지**를 보낼 수 있게 됐어요.

> 🍱 **비유로 설명하면**: 여러 인턴이 동시에 일할 때, 한 인턴이 "A 파일 수정했어요"라고 다른 인턴에게 알려주는 것처럼, Claude 세션들이 서로 소통할 수 있게 됐어요.

```bash
# 다른 세션에게 메시지 보내기
> /sessions  # 현재 실행 중인 세션 목록
> /message session-id "마이그레이션 완료됐어. 이제 테스트 시작해줘"
```

### 셀프 호스팅 환경 (Self-hosted environments) — 공개 베타

회사 인프라에서 직접 Claude Code 클라우드 세션을 실행할 수 있는 **셀프 호스팅 환경**이 공개 베타로 출시됐어요. 내부 네트워크 안에서, 내부 서비스 바로 옆에서 Claude를 실행할 수 있어요.

> 🍱 **비유로 설명하면**: 외부 서비스에 일 맡기는 대신, 우리 회사 서버실 안에서 인턴이 일하게 하는 거예요. 데이터가 외부로 나가지 않아요.

자세한 내용은 [셀프 호스팅 환경 문서](/docs/advanced/self-hosted-env)를 참고하세요.

### 오토 모드가 기본 권한 모드로 전환

이전까지 오토 모드는 Max/Team/Enterprise 요금제 전용이었는데, **이제 Pro·Max·Team 요금제 모두에서 오토 모드가 기본 권한 모드**가 됐어요.

자세한 내용은 [오토 모드 기본값 전환 문서](/docs/next/auto-mode-default)를 참고하세요.

---

## W33 (Aug 10–14) — 자동 재개, Fork 모드, GitLab 확장

### 사용량 한도 초과 후 자동 재개

Claude Code Desktop에서 사용량 한도에 도달한 후 **한도가 리셋되면 자동으로 작업을 재개**해요. 이전에는 한도 초과 후 수동으로 다시 시작해야 했어요.

> 🍱 **비유로 설명하면**: 인턴이 야근 한도를 채워서 퇴근했다가, 다음날 아침 출근하자마자 어제 하던 일을 알아서 이어서 하는 거예요.

### Fork 모드 기본 활성화

세션을 나눌 때 사용하는 **Fork 모드가 기본으로 켜져** 있게 됐어요. 여러 시도를 하면서 원본을 유지할 수 있어요.

### GitLab 머지 리퀘스트 + 마켓플레이스 지원

GitHub에서만 되던 **PR 자동 검토·수정 기능이 GitLab 머지 리퀘스트에서도** 동작하게 됐어요. GitLab 플러그인 마켓플레이스도 지원합니다.

---

## W34 (Aug 17–21) — /design 스킬, Concise 스타일, 폰에서 세션 시작

### /design 스킬

편집 가능한 **UI 아트보드를 Claude Code Desktop에서 바로** 만들 수 있어요.

```bash
> /design 대시보드 레이아웃 만들어줘
```

### Concise 출력 스타일

Claude의 응답 스타일을 **간결하게 설정**할 수 있어요.

```bash
# 세션 중 전환
> /config output-style concise
```

### 폰에서 내 머신 세션 시작

모바일 앱에서 **집에 있는 컴퓨터의 Claude Code 세션을 원격으로 시작**할 수 있어요. Remote Control 기능의 확장입니다.

---

## W35 (Aug 24–28) — 터미널 세션 재개, 피드백 리포트, 제한 모드

### Desktop에서 터미널 세션 재개

Claude Code Desktop에서 **이전에 시작했던 터미널(CLI) 세션을 재개**할 수 있어요.

### 피드백 리포트

Claude가 **작업 완료 후 자동으로 피드백 리포트 초안**을 만들어줘요. 팀원에게 공유하거나 기록용으로 활용할 수 있어요.

### 제한 모드 (Restricted mode)

더 엄격한 권한 제어를 원할 때 **제한 모드로 세션 시작**이 가능해졌어요.

---

## W36 (Aug 31–Sep 4) — Fable 5.1 전환, 컴퓨터 사용 백그라운드, /diff 패널

### Claude Fable 5.1 전환

최상위 모델이 **Fable 5에서 Fable 5.1로 업그레이드**됐어요.

```bash
claude --model claude-fable-5-1
```

### 컴퓨터 사용 (Computer Use) 백그라운드 실행

Desktop 앱에서 컴퓨터 사용 기능이 **백그라운드에서 실행**되도록 개선됐어요. 이전엔 화면이 전환됐지만 이제 더 자연스럽게 동작해요.

### /diff 라이브 패널

Claude가 코드를 수정하는 동안 **실시간 /diff 패널**에서 변경 사항을 볼 수 있어요.

```bash
> /diff  # 라이브 변경 사항 패널 열기
```

---

## W37 (Sep 7–11) — 플러그인 Eval, 창 분리

### claude plugin eval

플러그인을 **자동 테스트(eval)**로 검증할 수 있는 도구가 추가됐어요. CI에서 플러그인 점수를 체크하거나 베이스라인과 비교할 수 있어요.

```bash
claude plugin eval --suite my-plugin-tests
```

### Claude Code Desktop 창 분리

Desktop 앱의 **패널을 별도 창으로 분리**할 수 있게 됐어요. 멀티 모니터 환경에서 더 편리하게 활용할 수 있어요.

---

## 더 알아보기

- [공식 문서 — What's New](https://code.claude.com/docs/en/whats-new/index)
- [이전 주간 업데이트 W25~W29](/docs/next/whats-new-w25-w29)
- [오토 모드 기본값 전환](/docs/next/auto-mode-default)
- [셀프 호스팅 환경](/docs/advanced/self-hosted-env)
