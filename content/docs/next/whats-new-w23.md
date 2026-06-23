---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Bedrock·Vertex·Foundry에서 자동 모드 지원, acceptEdits 보호 경로, /plugin list 명령어, 관리형 버전 범위 설정"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "vertex", "foundry", "plugin", "acceptEdits", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-23"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w23">code.claude.com/docs/en/whats-new/2026-w23</a> <code>[공]</code><br />
★ 릴리스 범위: v2.1.158 → v2.1.165 (2026-06-01 ~ 2026-06-05)
</div>

## 이번 주 핵심 4가지

이번 Week 23은 조용해 보이지만 알찬 주간이에요. 외부 클라우드 서비스에서 자동 모드를 쓸 수 있게 됐고, 파일 자동 편집이 더 안전해졌어요.

---

## 🤖 1. Bedrock·Vertex·Foundry에서도 자동 모드 (v2.1.158)

> **"제가 쓰는 건 회사 AWS인데요, 자동 모드 못 써요?"** 이제 쓸 수 있어요!

지금까지 자동 모드(Auto mode)는 Anthropic 직접 API에서만 됐어요. 이번에 **Amazon Bedrock**, **Google Cloud Vertex AI**, **Microsoft Foundry**에서도 쓸 수 있게 됐어요. Opus 4.7, Opus 4.8 기준.

```bash
# 환경 변수 하나만 추가하면 돼요
export CLAUDE_CODE_ENABLE_AUTO_MODE=1
```

그 다음 **Shift+Tab**을 눌러서 자동 모드로 전환하면 끝이에요.

> 🍱 **비유로 설명하면**: 자동 모드는 "운전을 대신 해주는 기사" 같아요. 예전엔 특정 차(Anthropic API)에서만 기사를 부를 수 있었는데, 이제 렌터카(Bedrock, Vertex, Foundry)에도 기사를 부를 수 있게 된 거예요.

---

## 🛡️ 2. acceptEdits 모드에서 위험 파일은 그냥 못 건드려요 (v2.1.160)

> **"자동 편집 허용했더니 설정 파일이 바뀌었어요!"** 이제 막아줘요.

`acceptEdits` 모드에서는 Claude가 파일을 변경할 때 일일이 허락 안 받아도 됐어요. 그런데 이걸 악용하면 쉘 설정 파일을 몰래 바꿀 수 있어서 위험했죠. 이번에 **보호 경로(protected paths)**라는 개념이 생겼어요.

**이 파일들은 acceptEdits에서도 반드시 내게 물어봐요:**

| 종류 | 예시 파일 |
|---|---|
| 쉘 시작 파일 | `.zshenv`, `.bash_login`, `.bash_profile` |
| Git 설정 | `~/.config/git/config`, `~/.config/git/attributes` |
| 빌드 도구 설정 | `.npmrc`, `.bazelrc`, `.pre-commit-config.yaml` |

> ⚠️ **예외**: `bypassPermissions` 모드에서는 이 보호도 없으니 주의하세요.

```bash
# acceptEdits 모드로 실행해도 위 파일들은 보호됩니다
claude --permission-mode acceptEdits
```

---

## 📋 3. /plugin list — 플러그인 목록을 바로 확인 (v2.1.163)

> **"내가 어떤 플러그인 깔았는지 한 번에 보고 싶어요."**

새 명령어 `/plugin list`가 생겼어요. `/plugin` 메뉴를 열지 않고도 설치된 플러그인을 바로 볼 수 있어요.

```
> /plugin list              # 전체 목록
> /plugin list --enabled    # 켜져 있는 것만
> /plugin list --disabled   # 꺼져 있는 것만
```

터미널에서도 쓸 수 있어요:

```bash
claude plugin list
claude plugin list --enabled
```

---

## 🏢 4. 관리형 배포에서 버전 범위 강제 (v2.1.163)

> **회사 IT 담당자분들을 위한 기능이에요.**

기업에서 Claude Code를 관리형으로 배포할 때, 직원들이 쓸 수 있는 **버전 범위를 강제**할 수 있게 됐어요. 너무 오래된 버전도, 너무 새 버전도 쓰지 못하게 막을 수 있죠.

```json
// managed-settings.json
{
  "requiredMinimumVersion": "2.1.163",
  "requiredMaximumVersion": "2.2.0"
}
```

범위 밖 버전으로 시작하면 앱이 종료되고 업데이트하라는 안내가 떠요. `claude update`, `claude install`, `claude doctor`는 범위 밖에서도 작동해서 복구가 가능해요.

---

## 🔧 기타 개선 모음

| 항목 | 내용 |
|---|---|
| `ultracode` 키워드 | 이전엔 `workflow`로 다이나믹 워크플로우를 트리거했는데, `ultracode`로 변경. (직접 설명해도 여전히 됨) |
| Stop/SubagentStop 훅 개선 | `hookSpecificOutput.additionalContext`를 반환하면 에러 처리 대신 Claude에게 피드백을 주고 턴 유지 |
| MCP 시크릿 마스킹 | `claude mcp list/get/add` 시 환경변수, 인증 헤더, URL 시크릿 자동 가림 |
| 병렬 배치 오류 격리 | 병렬 도구 실행 중 하나가 실패해도 다른 것들은 계속 실행됨 |
| grep 후 편집 가능 | 단일 파일 grep/egrep/fgrep으로 본 파일은 별도 Read 없이 바로 편집 가능 |
| 자동완성 클릭 동작 변경 | 자동완성 메뉴에서 명령어 클릭 시 즉시 실행 아닌 프롬프트에 채워지게 변경 |
| `/effort` 지속 설정 확인 | 선택한 effort 레벨이 새 세션의 기본값으로 저장된다는 확인 메시지 표시 |
| OTEL 레이블 | `OTEL_RESOURCE_ATTRIBUTES` 값이 메트릭 데이터포인트에 레이블로 붙어서 팀·레포별 사용량 분석 가능 |
| Windsurf → Devin Desktop | 에디터 리브랜드 반영: `/ide`, `/terminal-setup`, `/scroll-speed`에서 명칭 변경 |
| /btw `c` 단축키 | `/btw` 명령어에서 `c`로 마크다운 원문 복사 가능 |

---

## 📌 이번 주 핵심 한 줄

> 클라우드 서비스 쓰는 회사들도 이제 자동 모드 ON, acceptEdits도 더 안전해졌어요.
