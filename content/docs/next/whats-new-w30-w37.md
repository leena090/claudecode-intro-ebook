---
title: "[공] 2026년 7~9월 주요 업데이트 — W30~W37 하이라이트"
description: "2026년 7월 말부터 9월 중순까지 8주간의 Claude Code 업데이트 핵심만 모았어요"
tags: ["자동생성", "whats-new", "업데이트", "2026", "W30", "W37", "플러그인", "데스크톱"]
category: "next"
order: 19
lastUpdated: "2026-11-07"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a><br />
★ 각 주차별 상세 내용: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30</a> ~ <a href="https://code.claude.com/docs/en/whats-new/2026-w37">W37</a>
</div>

## 한눈에 보기

| 주차 | 기간 | 주요 업데이트 |
|------|------|------------|
| **W30** | 7월 말 | — |
| **W32** | 8월 초 | — |
| **W33–W36** | 8월 중순~말 | — |
| **W37** | 9월 7~11일 | **플러그인 Eval, 데스크톱 패널 분리창** |

> ⚠️ W31 주차는 공식 what's-new 페이지가 없어요 (해당 주 업데이트 없음).

---

## W37 (Sep 7–11): 플러그인 테스트 도구 + 데스크톱 개선

### 🧪 `claude plugin eval` — 플러그인 성능 측정

내가 만든 플러그인(또는 스킬)이 실제로 도움이 되는지 **자동으로 테스트**하는 명령어가 나왔어요.

```bash
# 테스트 슈트 자동 생성 (Claude가 제안해줌)
claude plugin eval init

# 플러그인 성능 측정 (점수 표 출력)
claude plugin eval .
```

**결과물:**
- 각 테스트 케이스별 점수 (플러그인 있을 때 vs 없을 때 비교)
- 평균 개선 효과, 소요 시간, 비용
- `evals/results/report.html` — 상세 결과 HTML 파일

> 📊 **비유로 설명하면**: 내가 만든 레시피(플러그인)가 실제로 요리(Claude 응답)를 더 맛있게 만드는지 블라인드 테스트하는 것과 같아요.

---

### 🪟 데스크톱 패널을 별도 창으로 분리

데스크톱 앱에서 **diff 창이나 터미널을 별도 창으로 꺼낼 수 있어요**.

- 듀얼 모니터 사용자에게 특히 유용!
- 한쪽 모니터에 Claude 채팅, 다른 쪽에 코드 diff 띄우기
- 작업 완료 후 다시 원래 위치로 도킹 가능

---

### 그 외 W37 개선사항

| 기능 | 내용 |
|------|------|
| **maxEffortLevel** 설정 | 모든 모델의 최대 effort 수준 상한 지정 가능 (Bedrock·Vertex·Foundry 포함) |
| **--plugin-dir** 플래그 | 폴더 안의 모든 플러그인을 한 번에 로드 |
| **WebFetch 타임아웃** | 5분 초과 시 오류 반환 (무한 대기 없음), `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 조정 |
| **플러그인 명령어 --json** | `claude plugin install/update/enable/disable`에 `--json` 플래그로 JSON 출력 |
| **Auto mode 차단 이유** | 자동 모드에서 차단 시 어떤 규칙에 걸렸는지 이유를 명시 (예: `[Data Exfiltration]`) |
| **중간 명령어 완성** | 프롬프트 입력 중 `/`를 치면 매칭되는 명령어 목록 팝업 |
| **VS Code 에이전트 맵** | 에이전트 개수 클릭 → 서브에이전트 트랜스크립트 조회 가능 |
| **Artifact 아이콘** | Artifact 발행 시 Claude가 적합한 브라우저 탭 아이콘 자동 선택 |
| **웹 메시지 취소** | 클라우드 세션에서 보내기 전 메시지 취소 가능 (Esc 또는 ↑) |

---

## W30–W36 개요

> 📋 **공식 발표 기준**: W30~W36 각 주차의 세부 내용은 공식 문서를 직접 확인하세요. 아래는 해당 기간에 출시된 주요 기능들의 요약입니다.

**이 기간(7월 말 ~ 9월 초)에 등장한 주요 기능들:**
- **플러그인 마켓플레이스** 고도화 — 조직별 마켓, 의존성 관리
- **Mods** 초기 릴리스 — JS/TS 플러그인으로 UI·동작 커스터마이즈 (상세: [Mods 가이드](../advanced/mods.md))
- **플러그인 Mods 갤러리** — 샘플 Mods 공식 제공
- **접근성 개선** — 고대비 모드, 스크린 리더 지원 개선
- **Self-hosted 환경** — 기업용 자체 호스팅 샌드박스 환경 제공 시작
- **Cloud environments** — 클라우드 세션 환경 세부 설정 옵션
- **HIPAA 지원** — 의료 규정 준수 설정 (`hipaa-setup`)
- **Settings Reference** — 전체 설정 옵션 완전 문서화 (`settings-reference`)

---

## 더 알아보기

각 주차의 전체 내용은 공식 문서에서:
- [W30](https://code.claude.com/docs/en/whats-new/2026-w30)
- [W32](https://code.claude.com/docs/en/whats-new/2026-w32)
- [W33](https://code.claude.com/docs/en/whats-new/2026-w33)
- [W34](https://code.claude.com/docs/en/whats-new/2026-w34)
- [W35](https://code.claude.com/docs/en/whats-new/2026-w35)
- [W36](https://code.claude.com/docs/en/whats-new/2026-w36)
- [W37](https://code.claude.com/docs/en/whats-new/2026-w37)
