---
title: "[공] Claude Code 주간 업데이트 W30·W36·W37 (2026년 7~9월)"
description: "Claude Opus 5 기본 모델, iOS 시뮬레이터, Fable 5.1, /diff 패널, plugin eval 등 2026년 7~9월 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "iOS시뮬레이터", "Fable5.1", "plugin-eval"]
category: "next"
order: 18
lastUpdated: "2026-10-03"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30·W36·W37) 내용을 한국어로 정리한 것입니다.<br />
★ W31~W35는 이전 회차에서 다뤘거나 이 회차에서 추가됩니다. W30은 이번에 공식 문서에 처음 등재됐습니다.
</div>

## 한 눈에 보는 업데이트 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Claude Opus 5 기본 모델**, iOS 시뮬레이터, Claude Security 플러그인 |
| **W36** | 8/31~9/4 | **Claude Fable 5.1**, background 컴퓨터 사용, /diff 패널, /skill-doctor |
| **W37** | 9/7~9/11 | **claude plugin eval**, Desktop 패널 분리 창 |

---

## W30 · 7월 20~24일

### 🤖 Claude Opus 5 — 새 기본 Opus 모델 (v2.1.219+)

> 🍱 **비유**: 기존 Opus 4.7·4.8은 "베테랑 과장님"이었는데, Opus 5는 **더 뛰어난 경험을 가진 팀장급**으로 교체된 거예요.

- **1M(100만) 토큰 컨텍스트** (Anthropic API·Max·Team·Enterprise)
- Fast Mode: **Opus 5 → $10/$50 per MTok** (이후 W30+ Opus 5.5로 변경)
- Amazon Bedrock·Google Cloud에서는 1M 모델 변형 선택 필요

```bash
# Opus 5로 전환
> /model claude-opus-5
```

### 📱 iOS 시뮬레이터 패널 (Desktop, 퍼블릭 베타)

macOS Claude Code 데스크톱 앱에서 **iOS 시뮬레이터 화면을 옆에서 실시간으로** 볼 수 있게 됐어요:
- 클로드가 앱 빌드·실행 시 자동으로 시뮬레이터 패널 오픈
- 앱 화면을 보면서 클로드의 작업 실시간 확인
- 직접 시뮬레이터를 조작할 수도 있어요
- 필요 조건: Xcode + iOS 플랫폼 설치, Desktop v1.24012.0+

```bash
# 클로드에게 시뮬레이터에서 앱 실행 요청
> Build the app and run it in the simulator to check the onboarding flow.
```

### 🔒 Claude Security 플러그인

공식 Anthropic 마켓플레이스에 **Claude Security 플러그인** 출시:
- 멀티 에이전트 취약점 스캔
- 아키텍처 맵핑 → 위협 모델 → 취약점 헌팅 → 독립 검토 → 리포트
- `CLAUDE-SECURITY-<timestamp>/` 디렉터리에 결과 저장
- 저장소 전체 또는 특정 diff·PR·커밋만 스캔 가능

```bash
# 설치
> /plugin install claude-security@claude-plugins-official
> /reload-plugins

# 스캔 시작
> /claude-security
```

### ⚡ W30 기타 변경

- `/code-review`가 백그라운드 서브에이전트로 실행 (대화 컨텍스트 분리)
- `/verify`, `/code-review`, `/deep-research` — 이제 명시 호출 시에만 실행 (자동 실행 제거)
- 이모지 단축코드: `:heart:` 입력하면 이모지 자동 완성 (설정으로 끄기 가능)
- Fast Mode: Opus 4.7 지원 종료, Opus 5·4.8만 지원

---

## W36 · 8월 31일~9월 4일

### ✨ Claude Fable 5.1 — 새 최상위 모델 (v2.1.257+)

> 🍱 **비유**: Fable 5가 "스포츠카"였다면 Fable 5.1은 **같은 브랜드의 개선된 최신형**이에요.

- `fable` 별칭이 이제 **Fable 5.1**을 선택
- 1M 컨텍스트 윈도우
- Claude Apps Gateway에서는 `fable` 별칭이 여전히 Fable 5 → 명시적으로 `/model claude-fable-5-1` 사용

```bash
# 가장 쉬운 방법
> /model fable

# 또는 명시적으로
> /model claude-fable-5-1
```

### 🖥️ Background 컴퓨터 사용 (Desktop macOS, 베타)

Desktop 앱에서 **백그라운드에서 컴퓨터 화면 제어**가 가능해졌어요:
- 내가 다른 작업을 하는 동안 클로드가 승인된 앱을 자동 조작
- Pro·Max 플랜 베타

### 📊 라이브 /diff 패널

풀스크린 렌더링 모드에서 `/diff`를 실행하면 대화 옆에 **실시간 변경 파일 목록 패널**이 열려요:
- 클로드가 파일 편집·명령 실행 시 자동 갱신
- 변경 라인 수 표시 (+추가 / -삭제)
- 패널에서 라인을 마우스로 선택해서 다음 프롬프트에 첨부 가능

```bash
# 풀스크린 렌더링 상태에서 (git 저장소, 터미널 110컬럼+)
> /diff  # 열기/닫기 토글
```

### 🩺 /skill-doctor — 안 쓰는 Skills 찾기

```bash
> /skill-doctor
```

각 skill이 컨텍스트에서 차지하는 비용과 실제 사용 빈도를 보여줘요. **매 턴마다 모든 skill이 컨텍스트에 올라가기 때문에** 안 쓰는 skill은 꺼두면 좋아요.

### ⚡ W36 기타 변경

- **PreModelSwitch / PostModelSwitch 훅**: 모델 전환 시 훅 실행 가능
- **모델별 effort 저장**: `/effort` 설정이 모델별로 기억됨 (`s` 키로 현재 세션만 적용)
- **Enterprise 기본 모델**: 좌석 기반 Enterprise는 **Opus 5 기본**으로 변경
- **managedMcpServers**: 조직 전체 사용자에게 MCP 서버 제공 가능
- **auto 모드 강화**: 클라우드 메타데이터 엔드포인트 접근 차단 등 추가

---

## W37 · 9월 7~11일

### 🧪 claude plugin eval — 플러그인 품질 검증 도구 (v2.1.269)

> 🍱 **비유**: 플러그인을 만들었을 때 "정말 제대로 동작하나?"를 확인하는 **자동화 시험지**예요.

```bash
# 플러그인 루트 디렉터리에서 테스트 수트 초안 작성
> claude plugin eval init

# 모든 케이스 점수 매기기
> claude plugin eval .
```

- 각 케이스를 **플러그인 있을 때·없을 때** 두 번 실행해서 기여도 측정
- 결과는 터미널 표에 출력 + `evals/results/report.html` 저장
- 실제 모델 호출이 일어나므로 **비용 발생 주의**

### 🪟 Desktop 패널 분리 창

데스크톱 앱에서 아무 패널이나 **독립 창으로 분리**할 수 있어요:
- diff 패널이나 터미널을 두 번째 모니터로 드래그
- 클로드가 메인 창에서 계속 작업하는 동안 별도 모니터에서 변경사항 모니터링
- 다시 합치려면 패널을 메인 창으로 드래그

### ⚡ W37 기타 변경

- **maxEffortLevel 설정**: Amazon Bedrock·Google Cloud·Microsoft Foundry 포함 모든 프로바이더에서 effort 레벨 상한 설정 가능
- **WebFetch 타임아웃**: 5분 초과 시 deadline 에러 (이전: 무한 대기). `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 변경 가능
- **VS Code 확장 강화**: 프롬프트 박스 하단에서 서브에이전트 지도 접근, 훅/권한 설정 직접 가능
- **mid-prompt 명령 자동완성**: `/` 입력 시 매칭 명령 목록 표시 (기존: 단일 제안)
- **bypassPermissions 프로젝트 설정 제한**: 프로젝트의 `.claude/settings.json`에서 `bypassPermissions` 더 이상 작동 안 함 → 사용자 설정이나 `--permission-mode` 사용

---

## 관련 링크

- [공식 What's New W30 →](https://code.claude.com/docs/en/whats-new/2026-w30)
- [공식 What's New W36 →](https://code.claude.com/docs/en/whats-new/2026-w36)
- [공식 What's New W37 →](https://code.claude.com/docs/en/whats-new/2026-w37)
- [모델 설정 →](https://code.claude.com/docs/en/model-config)
- [Plugin evals →](https://code.claude.com/docs/en/plugin-evals)
