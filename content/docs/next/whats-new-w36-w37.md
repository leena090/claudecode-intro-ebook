---
title: "[공] Claude Code 주간 업데이트 W36~W37 (2026년 8월 말 ~ 9월)"
description: "Fable 5.1 등장, 컴퓨터 사용 백그라운드 실행, /diff 패널, /skill-doctor, 플러그인 eval, Desktop 창 팝아웃 — 2주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Fable5.1", "컴퓨터사용", "diff패널", "플러그인eval"]
category: "next"
order: 18
lastUpdated: "2026-09-27"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w36">W36</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w37">W37</a> 공식 문서를 한국어로 정리한 것입니다.
<br />★ 기간: 2026년 8월 31일 ~ 9월 11일 (2주치)
<br />★ <strong>W30~W35</strong> (7월 21일 ~ 8월 28일) 정리는 다음 회차로 미룸.
</div>

## 2주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W36** | 8/31~9/4 | Fable 5.1 등장, 컴퓨터 사용 백그라운드, /diff 패널, /skill-doctor |
| **W37** | 9/7~9/11 | `claude plugin eval`, Desktop 창 팝아웃, maxEffortLevel, VS Code 개선 |

---

## W36 · 8월 31일 ~ 9월 4일

> "Fable 5.1로 바꾸고, 컴퓨터 사용을 백그라운드에서, 실시간 /diff 패널로"

### 🤖 Claude Fable 5.1 — 최전선 모델 교체

Fable 5.1이 Claude Code에 들어왔어요. `/model fable` 입력 시 이제 Fable 5.1이 선택됩니다.

```
# 현재 세션에서 Fable 5.1 사용
> /model fable

# 또는 정확한 모델 ID로 직접 선택 (Claude Apps Gateway)
> /model claude-fable-5-1
```

- **컨텍스트 창**: 1,000,000 토큰 (책 700권 분량)
- **v2.1.257 이상** 필요

> 🍱 **비유**: 작년에 쓰던 "프리미엄 스마트폰"을 이번에 나온 최신 플래그십으로 교체한 것과 같아요. 기존에 잘 쓰던 기능은 그대로고, 모든 면에서 성능이 올랐어요.

### 🖥️ 컴퓨터 사용(Computer Use) 백그라운드 실행

macOS의 Claude Code Desktop 앱에서 컴퓨터 사용이 이제 **백그라운드**로 실행돼요.

- 이전: Claude가 앱을 쓰는 동안 다른 일 못 함
- 이후: 내가 허락한 앱에서 Claude가 작업하는 동안 **내가 다른 일을 동시에 할 수 있음**
- Pro / Max 플랜 베타

> 🍱 **비유**: 이전엔 인턴이 복사기를 쓰는 동안 내가 그 자리에 서서 기다려야 했다면, 이제는 인턴이 복사기 쓰는 동안 나는 다른 업무를 볼 수 있는 거예요.

### 📊 `/diff` 라이브 패널

전체화면 렌더링(fullscreen rendering)에서 `/diff`가 이제 **옆에 붙는 패널**로 열려요. 대화 창과 동시에 볼 수 있어요.

```
# fullscreen 렌더링 ON 상태에서, git 저장소 내부에서
> /diff
```

- Claude가 파일을 수정할 때마다 **자동으로 새로고침**
- 패널 내 줄을 마우스로 선택하면 다음 프롬프트에 붙여서 보낼 수 있음
- 터미널 너비 110컬럼 이상 필요

> 💡 코드 리뷰할 때 "뭐가 바뀌었지?" 하고 왔다 갔다 하는 수고를 없애줘요.

### 🩺 `/skill-doctor` — 스킬 사용량 분석

내가 설치한 **스킬(Skills)**이 실제로 얼마나 쓰이는지 분석해줘요.

```
> /skill-doctor
```

- 각 스킬의 컨텍스트 비용 + 사용 빈도를 표로 보여줌
- 잘 안 쓰는 스킬을 끄면 → 토큰 절약
- `Stats` 탭에서 자세한 리포트 확인
- v2.1.252 이상 필요

> 🍱 **비유**: 냉장고에 뭐가 들었는지 확인하는 것처럼, 내 Claude Code에 어떤 스킬들이 "자리만 차지하고 있는지" 한눈에 볼 수 있어요.

---

## W37 · 9월 7일 ~ 11일

> "플러그인을 테스트하고, 창을 분리하고, 노력 수준에 상한선을"

### 🧪 `claude plugin eval` — 플러그인 테스트 도구

플러그인을 배포하기 전에 **테스트 케이스로 자동 채점**할 수 있게 됐어요.

```bash
# 플러그인 루트 디렉토리에서 테스트 스위트 초안 생성
claude plugin eval init

# 모든 케이스 채점 실행
claude plugin eval .
```

- `evals/results/report.html`에 상세 리포트 저장
- 플러그인이 있을 때 vs 없을 때 결과 자동 비교
- 각 테스트는 실제 모델 API 호출을 사용 (비용 발생)
- 자세한 내용: `content/docs/advanced/skill-evaluation.md` 참고

> 🍱 **비유**: 식당 오픈 전에 손님들한테 메뉴를 맛보게 하고, "맛있었나요? 별점은요?" 채점을 자동으로 받는 것과 같아요.

### 🪟 Desktop 창 팝아웃 — 두 번째 모니터 활용

Claude Code Desktop 앱에서 아무 패널이나 **별도 창으로 분리**할 수 있어요.

- diff 창, 터미널 창을 **두 번째 모니터**로 꺼내기
- Claude가 메인 창에서 작업하는 동안 분리된 창에서 결과 감시
- 작업 끝나면 다시 메인에 붙이기(dock)

> 🍱 **비유**: 회사에서 화면 두 개 쓰는 것처럼, Claude Code에서도 "코딩 화면"과 "결과 확인 화면"을 분리할 수 있게 됐어요.

### ⚡ `maxEffortLevel` — 노력 수준 상한선 설정

모든 제공자(Bedrock, Vertex, Microsoft Foundry 포함)에서 Claude의 "노력 수준"에 상한선을 둘 수 있어요.

```json
// ~/.claude/settings.json
{
  "maxEffortLevel": "low"
}
```

- 설정한 레벨보다 높은 요청은 **자동으로 상한선에서 실행**
- 비용 예측 가능하게 관리할 때 유용

### 기타 개선 사항

| 항목 | 내용 |
|---|---|
| `/` 명령어 자동완성 | 문장 중간에서도 `/` 입력 시 명령어 목록 팝업 (이전엔 한 개 제안만) |
| VS Code 확장 | 하단 에이전트 수 클릭 → 에이전트 맵 열기, 서브에이전트 트랜스크립트 열람 |
| VS Code 확장 | 커스터마이즈 메뉴에서 훅(Hooks), 권한(Permissions) 직접 추가·삭제 |
| Artifacts | 게시할 때 Claude가 탭 아이콘 자동 선택 |
| WebFetch 타임아웃 | 5분 초과 시 자동 실패 (기존: 무한 대기). `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 변경 가능 |
| `--plugin-dir` 플래그 | 폴더 통째로 플러그인 디렉토리로 지정 가능 |
| Plugin CLI `--json` | `install/uninstall/update/enable/disable` 명령 결과를 JSON으로 출력 |

---

## 변경 이력

- **2026-08-31~09-04 (W36)**: Fable 5.1, 백그라운드 컴퓨터 사용, /diff 패널, /skill-doctor
- **2026-09-07~09-11 (W37)**: claude plugin eval, Desktop 팝아웃, maxEffortLevel, VS Code 개선
