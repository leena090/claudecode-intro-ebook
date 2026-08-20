---
title: "[공] 주간 업데이트 W30 — Opus 5 출시·Fast Mode 인하·iOS 시뮬레이터"
description: "2026년 7월 4주차 업데이트: Claude Opus 5 기본 모델 전환, Fast Mode 가격 대폭 인하($30→$10/M), iOS 앱 테스트 시뮬레이터, Claude Security 보안 스캔 플러그인"
tags: ["자동생성", "주간업데이트", "Opus5", "FastMode", "iOS시뮬레이터", "ClaudeSecurity", "신기능"]
category: "next"
order: 17
lastUpdated: "2026-08-20"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w30">공식 What's New W30</a>과 <a href="https://code.claude.com/docs/en/fast-mode">Fast Mode 문서</a>를 바탕으로 정리했습니다 (2026-07-20~24, v2.1.214~v2.1.219).
<br />★ <strong>핵심 한 줄</strong>: Opus 5가 새 기본 모델이 되고, Fast Mode 가격이 <strong>3분의 1 수준으로 대폭 내렸어요!</strong>
</div>

## 이번 주 핵심 요약

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| Fast Mode 모델 | Opus 4.8 | **Opus 5** ⬆️ |
| Fast Mode 가격 (입력) | $30/M토큰 | **$10/M토큰** 🎉 |
| Fast Mode 가격 (출력) | $150/M토큰 | **$50/M토큰** 🎉 |
| iOS 개발 지원 | 없음 | **시뮬레이터 패널** 추가 |
| 보안 검사 | 없음 | **Claude Security 플러그인** |

---

## 1. 🧠 Claude Opus 5 — 새 기본 Opus 모델

### 어떤 모델인가요?

Claude Opus 5 (클로드 오퍼스 파이브)는 이제 Claude Code에서 기본 Opus 모델이 됐어요. 코딩·에이전트 작업·장기 실행 작업에서 한 단계 더 개선됐습니다.

> 🍱 **비유로 설명하면**: 회사 총무 직원이 작년에 쓰던 낡은 노트북을 최신 MacBook Pro로 업그레이드한 것과 같아요. 하는 일은 같은데 훨씬 빠르고 더 잘 해냅니다.

### 어디서 기본값이 됐나요?

- ✅ Max 플랜 / Team Premium / Enterprise
- ✅ Anthropic API
- ✅ Amazon Bedrock / Google Cloud Agent Platform
- ✅ **Fast Mode** → Opus 5로 전환

### 바꾸는 방법

```text
> /model claude-opus-5
```

또는 세션 중에 모델 선택 메뉴(모델 피커)에서 고르면 돼요.

### 컨텍스트 창 크기

- Anthropic API / Max·Team·Enterprise: **100만 토큰(1M)** 컨텍스트
- Amazon Bedrock / Google Cloud: 1M 변형 모델 선택 필요

---

## 2. ⚡ Fast Mode 대폭 인하 — 이제 Opus 5로, 3배 저렴

### 뭐가 바뀌었나요?

Fast Mode (패스트 모드)는 Opus 모델을 **2.5배 빠르게** 사용하는 고속 설정이에요. 이번에 두 가지가 동시에 바뀌었어요:

1. **적용 모델**: Opus 4.8 → **Opus 5**로 업그레이드
2. **가격**: $30/$150/M → **$10/$50/M** (약 3분의 1 수준으로 인하! 🎉)

> 🍱 **비유로 설명하면**: 택시가 더 좋은 차종(Opus 5)으로 교체됐는데, 요금도 오히려 3분의 1로 낮아진 셈이에요.

### 지원 모델

| 모델 | Fast Mode 지원 | 가격(입력/출력 per M토큰) |
|---|---|---|
| Opus 5 | ✅ | $10 / $50 |
| Opus 4.8 | ✅ | $10 / $50 |
| Opus 4.7 | ❌ | 제거됨 (2026-07-24) |

⚠️ **Opus 4.7은 Fast Mode에서 완전 제거됐어요** (2026-06-25 deprecated → 2026-07-24 제거). Opus 4.7로 전환하면 자동으로 Fast Mode가 꺼집니다.

### Fast Mode 켜는 법

```text
> /fast
```

켜면 프롬프트 옆에 작은 ↯ 아이콘이 나타나요. 다시 `/fast`를 입력하면 꺼집니다.

### 💡 비용 절감 팁

Fast Mode는 세션 **처음에 켜는 것**이 가장 경제적이에요. 대화가 길어진 뒤에 켜면 지금까지의 전체 대화를 Fast Mode 가격으로 다시 캐싱하기 때문에 처음에 켜는 것보다 비용이 더 나올 수 있어요.

---

## 3. 📱 iOS 시뮬레이터 패널 (macOS 데스크톱 앱 전용)

### 뭔가요?

Claude Code Desktop (클로드 코드 데스크톱) on macOS에 **iOS 시뮬레이터 패널**이 추가됐어요. 클로드가 iOS 앱을 빌드하거나 실행할 때, 옆에 패널이 열려서 **아이폰 화면을 라이브로 보여줍니다**.

> 🍱 **비유로 설명하면**: 코딩하는 화면 옆에 아이폰이 딱 붙어서 Claude가 앱을 테스트하는 걸 눈으로 바로 볼 수 있어요. 클로드가 버튼을 누르는 것도 보이고, 내가 직접 시뮬레이터를 조작할 수도 있어요.

### 사용 방법

```text
> Build the app and run it in the simulator to check the onboarding flow.
> (앱을 빌드하고 시뮬레이터에서 실행해서 온보딩 화면을 확인해줘)
```

앱이 시뮬레이터에서 실행되면 패널이 자동으로 열립니다.

### 필요 조건

- ✅ macOS 전용 (현재)
- ✅ Xcode + iOS 플랫폼 설치 필요
- ✅ Claude Desktop **v1.24012.0** 이상
- ✅ Pro·Max·Team 플랜 (공개 베타)
- 📖 [공식 문서: iOS Simulator 사용법](https://code.claude.com/docs/en/desktop-ios-simulator)

---

## 4. 🔒 Claude Security 플러그인 — 코드 취약점 자동 스캔

### 뭔가요?

Claude Security (클로드 시큐리티)는 공식 Anthropic 플러그인이에요. 내 코드를 **멀티 에이전트가 자동으로 보안 취약점을 찾아서 보고서를 만들어줍니다.**

> 🍱 **비유로 설명하면**: 보안 감사 팀이 내 코드 전체를 훑어보고 "여기 문이 잠겨 있지 않네요", "저기 창문이 열려 있어요" 같은 보고서를 써주는 거예요.

### 작동 방식

1. 여러 에이전트가 코드 구조를 분석하고 위협 모델을 만들어요
2. 취약점을 독립적으로 검토해서 오탐을 줄여요
3. `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 보고서를 저장해요

### 스캔 범위 선택

- 전체 저장소
- 특정 브랜치의 diff (변경사항만)
- 특정 PR (풀 리퀘스트)
- 특정 커밋

### 사용 방법

```text
> /plugin install claude-security@claude-plugins-official
> /reload-plugins
> /claude-security
```

찾은 취약점 중 내가 선택한 것만 수정 패치로 만들어줘요. 직접 적용 여부는 개발자가 결정합니다.

---

## 그 외 작은 업데이트들 (Other wins)

| 기능 | 설명 |
|---|---|
| `/code-review` 백그라운드 실행 | 리뷰 작업이 내 대화 창을 차지하지 않고 별도로 실행돼요 |
| `/verify`, `/code-review`, `/deep-research` 자동 실행 중단 | 이제 직접 명령할 때만 실행됩니다 |
| 이모지 자동완성 | `:heart:` 입력하면 ❤️ 로 변환, `:` 뒤 2글자 이상이면 추천 |
| 동시 서브에이전트 20개 기본 | `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 환경변수로 조정 가능 |
| `--max-budget-usd` 서브에이전트 적용 | 예산 한도가 서브에이전트에도 적용돼요 |

---

## 이번 W30 업데이트, 어떤 분께 중요한가요?

| 상황 | 추천 |
|---|---|
| 🚀 빠른 응답이 필요한 코딩 | Fast Mode 켜보세요 (이제 더 저렴해요!) |
| 📱 iOS 앱 개발자 | iOS 시뮬레이터 패널 활성화해보세요 |
| 🔒 보안이 중요한 프로젝트 | Claude Security 플러그인 설치해보세요 |
| 🧠 복잡한 장기 작업 | Opus 5 모델로 전환해보세요 |

📖 **공식 문서**: [What's New W30](https://code.claude.com/docs/en/whats-new/2026-w30) · [Fast Mode](https://code.claude.com/docs/en/fast-mode) · [Claude Security](https://code.claude.com/docs/en/claude-security)
