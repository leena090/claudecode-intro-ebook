---
title: "[공] Claude Code 주간 업데이트 W36·W37 — Fable 5.1, 백그라운드 컴퓨터 사용, 플러그인 eval"
description: "2026년 9월 1일~11일 업데이트 요약: Fable 5.1 탑재, 백그라운드 컴퓨터 사용, /diff 패널, /skill-doctor, plugin eval, Desktop 팝아웃 창"
tags: ["자동생성", "주간업데이트", "W36", "W37", "Fable5.1", "plugin eval", "백그라운드컴퓨터사용", "diff패널", "skill-doctor"]
category: "next"
order: 18
lastUpdated: "2026-09-17"
---

<div class="note-star">
★ <strong>[공]</strong> W36 원문: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a> (Aug 31 – Sep 4, v2.1.251 → v2.1.261)
<br />★ <strong>[공]</strong> W37 원문: <a href="https://code.claude.com/docs/en/whats-new/2026-w37">whats-new/2026-w37</a> (Sep 7–11, v2.1.263 → v2.1.269)
</div>

## W36 주요 업데이트 (Aug 31 – Sep 4, 2026)

### 🌟 Fable 5.1 — Claude Code에서 최신 최강 모델

**Claude Fable 5.1**이 Claude Code에 적용됐어요. `fable` 별칭이 이제 5.1을 가리켜요.

```bash
# 현재 세션에서 Fable 5.1로 전환
/model fable
```

> ⚠️ v2.1.257 이상 필요. Claude Apps Gateway 세션에서는 `/model claude-fable-5-1`을 직접 입력하세요.

---

### 🖥️ 백그라운드 컴퓨터 사용 (Desktop, macOS, Pro·Max 베타)

이제 Claude Code Desktop 앱(macOS)에서 **컴퓨터 사용이 백그라운드로** 작동해요.

> 🍱 **비유로 설명하면**: 이전엔 클로드가 내 화면을 쓸 때 내가 옆에서 지켜봐야 했어요. 이제는 클로드가 **내가 다른 일 하는 동안** 앱을 열고 브라우저를 조작하고 개발 도구를 실행해요.

| 항목 | 내용 |
|---|---|
| **대상** | macOS Desktop 앱 |
| **플랜** | Pro · Max (베타) |
| **설정** | 승인한 앱에서만 작동 |

---

### 📊 /diff 패널 — 실시간 변경사항 옆에서 보기

전체 화면 렌더링에서 `/diff`를 실행하면 이제 **대화 옆에 패널이 열려요**. 닫아야 하는 별도 뷰어가 아니에요.

```bash
# 전체 화면 렌더링 중, git 저장소 안, 터미널 폭 110열 이상에서:
/diff
```

- 변경된 파일 목록과 추가/삭제 라인 수 표시
- 클로드가 파일을 수정하거나 명령을 실행할 때마다 자동 새로고침
- 패널에서 줄을 마우스로 선택해서 다음 프롬프트에 첨부 가능

---

### 🔍 /skill-doctor — 쓰지 않는 스킬 찾기

```bash
> /skill-doctor
```

내 스킬들이 컨텍스트를 얼마나 쓰는지, 얼마나 자주 사용되는지 보여줘요. 안 쓰는 스킬을 끄는 데 도움이 돼요.

> 💡 스킬 목록에 있는 모든 스킬은 실제로 쓰이든 아니든 매 턴 컨텍스트에 추가돼요. /skill-doctor로 불필요한 스킬을 찾아 비활성화하면 컨텍스트 비용을 줄일 수 있어요.

> v2.1.252 이상 필요. feature-flag 페칭을 건너뛰는 세션에서는 사용 불가.

---

### W36 기타 업데이트

| 항목 | 내용 |
|---|---|
| **PreModelSwitch / PostModelSwitch 훅** | 모델 전환 전/후 훅으로 전환 차단 또는 컨텍스트 추가 |
| **/cost 캐시 통계** | 프롬프트 캐시 적중률, 미스 횟수, 캐시 상태 표시 |
| **managedMcpServers 관리 설정** | 조직이 HTTP·SSE MCP 서버를 전 사용자에게 일괄 제공 가능 |
| **/effort · /model 개별 저장** | 모델별 effort 레벨 따로 저장. `s` 키로 현 세션에만 적용 |
| **Auto mode 차단 강화** | 클라우드 메타데이터 엔드포인트 자격증명 요청, 동기 컨테이너 연결 등 차단 |
| **Auto mode 외부 파일 읽기 확인** | 작업 디렉토리 밖 파일 최초 읽기 전 확인 요청 |
| **bashOutputMaxChars / taskOutputMaxChars** | 최대 128,000자까지 설정 가능 |
| **Enterprise 기본 모델** | 좌석 기반 Enterprise 플랜 기본 모델이 **Opus 5**로 변경 |
| **VS Code: 모델 이름 클릭** | 프롬프트 박스 하단 모델 이름 클릭으로 모델 선택기 열기 |

---

## W37 주요 업데이트 (Sep 7–11, 2026)

### 🧪 claude plugin eval — 플러그인 테스트 자동화

이제 플러그인을 체계적으로 테스트할 수 있어요.

```bash
# 플러그인 루트 디렉토리에서 테스트 스위트 초기화
claude plugin eval init

# 초기화 세션 종료 후 모든 케이스 채점
claude plugin eval .
```

- `claude plugin eval init`: 클로드가 "좋은 결과가 뭔지" 물어보고, 테스트 케이스와 채점 기준을 제안 → 한 번 돌려보고 파일로 저장
- `claude plugin eval .`: 모든 케이스를 채점하고 결과 표 출력
- `evals/results/report.html`에 실행 상세 결과 저장
- 플러그인 없을 때와 있을 때 결과를 비교해서 플러그인이 얼마나 기여하는지 확인

---

### 🪟 Desktop 팝아웃 창 — 패널을 별도 창으로

Claude Code Desktop 앱에서 **어떤 패널이든 별도 창으로 꺼낼 수 있어요**.

> 🍱 **비유로 설명하면**: 클로드가 코딩하는 동안 diff 패널이나 터미널을 **두 번째 모니터로 드래그**해서 볼 수 있어요. 작업 끝나면 다시 도킹.

---

### W37 기타 업데이트

| 항목 | 내용 |
|---|---|
| **maxEffortLevel 설정** | 최상위 또는 모델별로 effort 레벨 상한 설정. Amazon Bedrock·Google Cloud·Microsoft Foundry 포함 |
| **WebFetch 5분 타임아웃** | 5분 이상 걸리면 deadline 에러. `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 변경 가능 |
| **플러그인 명령어 --json 플래그** | `install`, `uninstall`, `update`, `enable`, `disable`에 `--json` 추가 → stdout 마지막 줄에 JSON 출력 |
| **/ 명령어 중간 완성** | 프롬프트 중간에 `/` 입력 시 일치하는 명령어 목록 표시 (전체 화면에서 더 잘 작동) |
| **Auto mode 거부 이유 표시** | 차단 이유(예: `[Data Exfiltration]`)가 클로드가 받는 메시지에 포함 |
| **VS Code: 에이전트 맵** | 프롬프트 박스 에이전트 수 클릭 → 서브에이전트 전사본 보기·중지 |
| **VS Code: 훅·권한 설정** | 커맨드 메뉴에서 Hooks·Permissions 직접 편집 |
| **Artifact 탭 아이콘** | 클로드가 아티팩트 발행 시 자동으로 탭 아이콘 선택 |
| **웹 세션 메시지 취소** | 클라우드 세션에서 Claude가 읽기 전에 큐의 메시지 취소 가능 |
