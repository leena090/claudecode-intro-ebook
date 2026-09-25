---
title: "[공] 2026년 7~9월 주요 업데이트 (W30–W37)"
description: "2026년 7월 말~9월 중순 Claude Code에 추가된 새 기능 모음: 자동 모드 기본값 변경, 셀프 호스팅, Projects, 플러그인 eval 등"
tags: ["자동생성", "업데이트", "신기능", "W30", "W31", "W32", "W33", "W34", "W35", "W36", "W37"]
category: "next"
order: 18
lastUpdated: "2026-09-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 What's New: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a>
</div>

## 2026년 7~9월 주요 업데이트 한눈에

| 날짜 (추정 주차) | 주요 업데이트 |
|---|---|
| ~W35 (Sep 7–11) | `claude plugin eval` 플러그인 테스트 도구 출시 |
| ~W35 | 데스크톱 앱 패널 독립 창 분리 |
| W37 일대 | `maxEffortLevel` 설정으로 모델 노력 수준 상한 제한 |
| Sep 17, 2026 | **자동 모드(Auto mode) 기본값 전환** — Pro·Max·Team 플랜 |
| Aug 7, 2026 | **셀프 호스팅 환경** 퍼블릭 베타 |
| 베타 진행 중 | **Projects** — 병렬 세션 코디네이터 |

---

## 🤖 자동 모드(Auto Mode) 이제 기본값! (Sep 17, 2026)

### 무엇이 바뀌었나요?

**Pro·Max·Team 플랜**에서 자동 모드(Auto mode)가 **기본 활성화** 됐어요.

> 이전: 수동으로 자동 모드 켜야 했음
> 이후: **Claude Code 실행 시 자동 모드가 기본으로 켜짐**

### 자동 모드란?

자동 모드는 Claude가 **백그라운드 안전 분류기**를 통해 위험한 명령을 걸러내면서 더 오래, 더 자율적으로 작업할 수 있는 모드예요.

> 🚗 **비유**: 자동 모드는 "자율주행"과 같아요. 운전(작업)은 Claude가 하지만, 위험 상황에서는 브레이크(안전 분류기)가 자동으로 작동해요. 이제 이 모드가 **기본값**이에요.

### 내가 직접 제어하고 싶다면?

자동 모드 설정은 [auto-mode-config](https://code.claude.com/docs/en/auto-mode-config) 페이지에서 세부 조정할 수 있어요.

---

## 🧪 `claude plugin eval` — 플러그인을 테스트하세요 (W37, Sep 7–11)

### 플러그인 eval이란?

플러그인 개발자라면 **`claude plugin eval`** 명령어로 내 플러그인의 품질을 자동으로 측정할 수 있어요.

```bash
# 플러그인 루트 디렉토리에서
claude plugin eval init   # AI가 테스트 케이스 초안 작성

# 준비 완료 후 실행
claude plugin eval .      # 전체 케이스 점수 측정
```

**결과 예시**:
- 플러그인 유무별 점수 비교 테이블
- 전체 비용 및 소요 시간 요약
- `evals/results/report.html` 상세 리포트

> 📌 자세한 내용: [plugin-evals](https://code.claude.com/docs/en/plugin-evals)

---

## 🪟 데스크톱 앱 패널 독립 창 분리

**Claude Code Desktop** 앱에서 패널(diff, 터미널 등)을 **독립된 창으로 꺼낼 수 있어요**.

- 듀얼 모니터라면 diff를 다른 화면으로!
- Claude 작업 중에도 결과물 계속 모니터링
- 작업 완료 후 다시 도킹 가능

---

## ⚙️ `maxEffortLevel` — 모델 노력 수준 제한

**`settings.json`에서 `maxEffortLevel` 설정**으로 모든 모델 제공자(Amazon Bedrock, Google Cloud, Microsoft Foundry 포함)의 노력 수준 상한을 제한할 수 있어요.

```json
// settings.json 예시
{
  "maxEffortLevel": "medium"
}
```

> 비용 제어나 응답 속도 우선 환경에서 유용합니다.

---

## 그 외 주목할 업데이트

| 기능 | 내용 |
|---|---|
| **명령어 자동완성** | `/` 입력 시 매칭되는 명령어 목록 표시 (이전: 단일 제안) |
| **VS Code: 에이전트 맵** | 에이전트 수 클릭 → 서브에이전트 트랜스크립트 확인 |
| **VS Code: 훅·권한 설정** | 명령 메뉴에서 직접 훅/권한 규칙 추가·제거 |
| **WebFetch 타임아웃** | 5분 초과 시 에러 반환, `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 조정 |
| **Auto mode 차단 이유** | 차단 시 매칭된 규칙명 표시 (예: `[Data Exfiltration]`) |
| **Artifacts 아이콘** | Claude가 발행하는 각 Artifact에 탭 아이콘 자동 선택 |

---

## 전체 주간 변경사항 보기

각 주차별 상세 내용은 공식 문서에서 확인하세요:

- [2026-W37](https://code.claude.com/docs/en/whats-new/2026-w37) (Sep 7–11)
- [2026-W36](https://code.claude.com/docs/en/whats-new/2026-w36)
- [2026-W35](https://code.claude.com/docs/en/whats-new/2026-w35)
- [2026-W34](https://code.claude.com/docs/en/whats-new/2026-w34)
- [2026-W33](https://code.claude.com/docs/en/whats-new/2026-w33)
- [2026-W32](https://code.claude.com/docs/en/whats-new/2026-w32)
- [2026-W30](https://code.claude.com/docs/en/whats-new/2026-w30)
