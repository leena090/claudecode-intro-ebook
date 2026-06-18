---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "서드파티 클라우드에서도 Auto Mode 사용, acceptEdits 중요 파일 자동 보호, /plugin list 명령어 추가, Dynamic Workflows 키워드 변경(workflow → ultracode)"
tags: ["업데이트", "2026", "week23", "auto-mode", "acceptEdits", "plugin-list", "ultracode", "dynamic-workflows", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-18"
---

<div class="note-star">
★ <strong>공식 출처</strong> — Claude Code Week 23 (2026-06-01~05), v2.1.158 → v2.1.165. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 한눈에 보기

| 번호 | 기능 | 한 줄 요약 |
|------|------|-----------|
| 1 | **Auto mode — Bedrock·Vertex·Foundry** | AWS/GCP/Azure 3rd-party에서도 Auto Mode 활성화 가능 |
| 2 | **acceptEdits 자동 보호 파일** | 쉘 설정·빌드 도구 파일은 자동 편집 차단 |
| 3 | **`/plugin list`** | 설치된 플러그인 목록을 메뉴 없이 바로 확인 |
| 4 | **버전 요구 관리 설정** | 조직이 허용 버전 범위 강제 적용 가능 |
| ⚠️ | **`workflow` → `ultracode`** | Dynamic Workflows 트리거 키워드 변경 |

---

## 1. AWS·구글 클라우드·Azure에서도 Auto Mode 🌐

Claude Code를 **회사 보안 정책** 때문에 아마존 Bedrock(베드락), 구글 Vertex AI(버텍스 AI), Microsoft Foundry(파운드리)를 통해 쓰는 분들이 있어요. 이제 거기서도 **Auto Mode**(자동 모드)를 쓸 수 있게 됐어요.

> 🍱 **비유**: 회사 구내식당(3rd-party 클라우드)에서도 이제 '주문 자동 처리' 서비스를 쓸 수 있게 된 거예요. 기존엔 직영점(Anthropic API)에서만 됐거든요.

### 쓰는 법

```bash
# 환경 변수 하나만 켜면 돼요
export CLAUDE_CODE_ENABLE_AUTO_MODE=1

# 그 다음 Auto Mode로 전환
# Shift+Tab 눌러서 모드 전환
```

<div class="note-circle">
○ Opus 4.7, Opus 4.8에서 지원<br />
○ 3rd-party 프로바이더에서 Auto Mode 쓰면 배경에서 안전 검사를 대신 수행<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#enable-auto-mode-on-bedrock-vertex-ai-or-foundry" target="_blank">Auto mode on third-party providers</a>
</div>

---

## 2. 중요 파일 자동 보호 — acceptEdits에서도 잠깐 물어봐요 🛡️

`--permission-mode acceptEdits`(어셉트에딧) 모드는 "Claude야, 파일 수정할 때 물어보지 말고 자동으로 해"라고 설정하는 모드예요. 편리하지만, 실수로 중요한 설정 파일을 덮어쓸 수 있었죠.

이번 업데이트부터는 **아래 파일들은 acceptEdits 모드에서도 꼭 한 번 확인을 물어봐요**:

| 보호되는 파일 예시 | 왜 중요한가요? |
|------------------|--------------|
| `.zshenv`, `.bash_login`, `.profile` | 터미널 시작 때마다 실행되는 쉘 설정 |
| `~/.config/git/` 하위 파일 | Git 전역 설정 |
| `.npmrc`, `.bazelrc` | 패키지·빌드 도구 설정 |
| `.pre-commit-config.yaml` | 커밋 전 자동 검사 설정 |

> 🍱 **비유**: 집 청소 도우미에게 "자유롭게 청소해줘"라고 했더라도, **금고·여권·통장은 건드리기 전에 꼭 물어보게** 된 거예요.

<div class="note-star">
★ `bypassPermissions` 모드일 때만 이 보호가 해제돼요. 일반 사용자는 신경 쓰지 않아도 됩니다.
</div>

---

## 3. `/plugin list` — 플러그인 목록 바로 보기 📋

이제 `/plugin` 메뉴를 열지 않아도 **현재 설치된 플러그인 목록**을 바로 볼 수 있어요.

```bash
# 터미널 안에서
> /plugin list             # 전체 목록
> /plugin list --enabled   # 켜진 플러그인만
> /plugin list --disabled  # 꺼진 플러그인만

# 터미널 밖(쉘)에서도
claude plugin list
```

> 🍱 **비유**: 스마트폰 앱 목록을 확인하려면 설정 앱을 열어야 했는데, 이제 "앱 목록 보여줘" 한 마디로 바로 나오는 거예요.

---

## 4. 조직 버전 범위 강제 적용 🏢 (기업 관리자용)

회사 IT 팀이 Claude Code의 **버전을 통제**해야 할 때 쓰는 기능이에요. 입문자분들은 해당 없지만 알아두면 좋아요.

```json
// managed-settings.json (관리자 설정)
{
  "requiredMinimumVersion": "2.1.163",  // 이 버전 미만은 실행 안 됨
  "requiredMaximumVersion": "2.1.175"   // 이 버전 초과도 실행 안 됨
}
```

범위 밖 버전을 쓰는 사용자는 시작 시 안내 메시지가 뜨고, `claude update`로 업데이트할 수 있어요.

---

## ⚠️ 중요 변경: `workflow` → `ultracode` 키워드 바뀌었어요!

[Dynamic Workflows(다이나믹 워크플로)](/docs/advanced/dynamic-workflows) 기능을 쓸 때 이전엔 프롬프트에 **`workflow`** 라는 단어를 넣으면 자동으로 워크플로 모드가 켜졌어요.

**이번 Week 23부터 트리거 키워드가 `ultracode`(울트라코드)로 바뀌었습니다.**

```bash
# 이전 (Week 22까지)
> create a workflow that migrates every internal fetch() call...
# ↑ "workflow" 단어가 트리거였음

# 지금 (Week 23부터)
> ultracode — 전체 fetch() 호출을 HttpClient로 마이그레이션해줘
# ↑ "ultracode" 단어가 트리거
```

> 🍱 **비유**: 마법 주문이 "열려라 참깨"에서 "열려라 울트라코드"로 바뀐 거예요. 새 주문을 써야 문이 열려요.

<div class="note-circle">
○ 자연어로 "대규모 워크플로 작업 해줘"처럼 요청해도 Claude가 알아서 판단해줘요<br />
○ UI에서 <strong>보라색(violet)</strong>으로 강조 표시돼요<br />
○ 관련 문서: <a href="/docs/advanced/dynamic-workflows">Dynamic Workflows 한국어 설명</a>
</div>

---

## 기타 자잘한 개선들

<details>
<summary>더 보기 (개발자용)</summary>

- **Stop/SubagentStop hooks**: `hookSpecificOutput.additionalContext`를 반환하면 에러 처리 대신 Claude에게 피드백을 줄 수 있어요
- **`claude mcp` 비밀 숨김**: `list`, `get`, `add` 명령어에서 환경변수 값과 인증 헤더가 자동 마스킹돼요
- **병렬 Bash 에러 격리**: 병렬 실행 중 하나가 실패해도 나머지 작업은 계속 실행돼요
- **grep 후 바로 편집**: 파일을 grep으로 봤다면 별도 Read 없이 바로 Edit 가능
- **자동완성 메뉴**: 명령어 클릭 시 바로 실행이 아닌 프롬프트에 입력 → Enter로 실행
- **`/effort` 확인 메시지**: 설정한 effort 레벨이 세션 기본값으로 저장된다고 알려줘요
- **Windsurf → Devin Desktop**: `/ide` 메뉴에서 에디터 이름이 리브랜드 반영됨

</details>

---

<div class="note-circle">
○ 공식 전체 변경 로그: <a href="https://code.claude.com/docs/en/changelog#2-1-158" target="_blank">v2.1.158–v2.1.165 changelog</a><br />
○ 이전 주간 업데이트: <a href="/docs/next/whats-new-w22">Week 22 업데이트</a> · <a href="/docs/next/whats-new-w21">Week 21 업데이트</a>
</div>
