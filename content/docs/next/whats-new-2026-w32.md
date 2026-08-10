---
title: "[공] Claude Code 주간 업데이트 W32 (2026년 8월 3~7일)"
description: "세션 간 메시지 전달, 셀프 호스티드 환경, Auto mode 기본값 변경 등 W32 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "CrossSessionMessaging", "SelfHosted", "AutoMode"]
category: "next"
order: 19
lastUpdated: "2026-08-10"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a><br />
★ 버전 범위: v2.1.220 → v2.1.224 · 주요 기능 3건 · 2026년 8월 3~7일
</div>

## 이번 주 한 줄 요약

> 💬 **세션끼리 문자 보내기** + 🏢 **내 서버에서 클라우드 세션 실행** + ⚡ **Auto mode가 2026년 8월 14일부터 기본값**!

---

## 주요 기능 3가지

### 1. 💬 세션 간 메시지 전달 (Cross-session messaging) — v2.1.224

내 Claude Code 세션들이 **서로 메시지를 주고받을** 수 있게 됐어요!

> 🍱 **비유로 설명하면**: 팀 작업할 때 팀원 A와 팀원 B가 각각 다른 방에서 일하다가 "야, 우리 공통 변수 이름 바뀌었어" 하고 카카오톡으로 알려주는 것처럼 — 이제 클로드 세션끼리 그렇게 할 수 있어요.

**macOS·Linux에서 사용 가능. v2.1.224 이상 필요.**

**어떻게 쓰나요?**

```text
# 터미널 A에서 (결제 API 작업 중)
# 터미널 B에 있는 세션한테 알려줘
users.name이 users.display_name으로 바뀌었다고 payments API 작업 세션에 전달해줘
```

```text
# 어떤 세션에 연결할 수 있는지 확인
/list-agents
```

**핵심 개념**:
- 세션을 찾는 도구: `ListAgents`
- 메시지 보내는 도구: `SendMessage`
- 메시지는 **텍스트만** (대화 기록이나 파일 공유 X)
- 받은 메시지는 `Ctrl+O`로 확장 확인

**언제 유용하나요?**

| 상황 | 활용 |
|---|---|
| 브랜치 변경이 다른 세션에 영향을 줄 때 | 변경 내용 자동으로 알려주기 |
| 여러 워크트리에서 병렬 작업 중 | 각 세션 진행 상황 공유 |
| 마이그레이션·테스트 실행 모니터링 | 완료 시 주 세션에 리포트 |
| 다른 기기의 세션에 메시지 | Remote Control 연결 시 가능 |

👉 자세한 내용은 **[세션 간 메시지 전달](../advanced/cross-session-messaging.md)**을 참고하세요.

---

### 2. 🏢 셀프 호스티드 환경 (Self-hosted environments) — v2.1.224

Team·Enterprise 플랜에서 **클라우드 세션을 내 조직 인프라에서** 실행할 수 있어요. 공개 베타.

> 🍱 **비유로 설명하면**: 지금까지 클로드 웹·모바일 세션은 Anthropic 서버에서 돌았어요. 이제는 내 회사 서버를 '러너(Runner)'로 등록하면 claude.ai나 앱에서 세션을 시작할 때 **내 사내 네트워크 안에서 실행**시킬 수 있어요. 사내 DB나 내부 API에 직접 접근도 가능!

**설정 방법** (Owner 또는 Admin이 해야 함):

```bash
# 1. 내 서버/컨테이너에서 러너 시작 (가이드 포함)
claude self-hosted-runner setup

# → 어드민 설정에서 "Healthy" 상태 확인되면 완료
```

- 어드민 설정: [admin settings > cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments** 켜기
- 러너 등록 후 사용자가 세션 시작할 때 해당 환경 선택 가능
- `claude --cloud`, claude.ai, 모바일·데스크톱 앱에서 선택 가능

**이게 왜 중요한가요?**

| 기존 (Anthropic 클라우드) | 셀프 호스티드 |
|---|---|
| 인터넷 망 거쳐서 실행 | 내 사내 네트워크 안에서 실행 |
| 사내 DB 직접 접근 불가 | 사내 DB·API 직접 접근 가능 |
| 보안 정책에 따라 제한 | 내 보안 정책 그대로 적용 |

---

### 3. ⚡ Auto mode가 기본값으로 변경 — 2026년 8월 14일부터

> ⚠️ **중요 공지** — 2026년 8월 14일부터 **Pro·Max·Team 플랜 신규 세션의 기본 권한 모드가 `auto`로 바뀌어요**.

> 🍱 **비유로 설명하면**: 지금까지 클로드는 새 파일 하나 만들 때도 "이거 만들어도 돼요?"라고 물어봤어요(default 모드). 이제는 AI가 알아서 안전성을 판단하고, 안전하면 바로 실행해요(auto 모드). 위험한 건 여전히 물어봐요.

**나에게 어떤 영향이 있나요?**

- **이미 모드를 직접 설정했다면**: 기존 설정 유지 (변경 안 됨)
- **조직 관리자가 설정을 관리한다면**: 변경 안 됨
- **설정 안 된 일반 사용자**: 8월 14일부터 한 번 전환 확인 프롬프트가 뜸

**미리 auto mode로 바꾸고 싶다면**:

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

이렇게 설정하면 지금 당장 적용돼요.

**Auto mode에서는**:
- 💰 Auto mode가 하는 안전 체크(classifier 호출)는 **사용량 한도에서 제외**됨
- 언제든 `Shift+Tab`으로 다른 모드로 전환 가능
- 위험 명령이나 외부 API 호출 같은 건 여전히 물어봐요

---

## 기타 주목할 개선 사항

| 기능 | 설명 |
|---|---|
| **VS Code Focus view** | 도구 활동을 턴당 하나의 접을 수 있는 행으로 숨겨주는 보기 모드. `Ctrl+Alt+F` (Mac: `Ctrl+Option+F`) 또는 명령 메뉴 |
| **`/review` 별칭** | `/review`가 `/code-review`의 새 별칭으로 추가됨. effort level 없으면 이전에 쓴 레벨 재사용 |
| **`/fork` 워크트리 분리** | `/fork`로 복사된 세션이 이제 원래 세션 체크아웃 대신 자체 워크트리에서 코드 변경 |
| **플러그인 즉시 활성화** | `/plugin`으로 설치 시 안전하면 현재 세션에서 즉시 활성화 (또는 `/reload-plugins` 안내) |
| **백그라운드 세션 자동 PR** | 코드 변경한 백그라운드 세션이 작업 완료 후 자동 커밋·푸시·Draft PR 생성 (CLAUDE.md git 지시사항 따름) |
| **서브에이전트 200개 제한 해제** | 세션당 200개였던 서브에이전트 한도 제거 — 긴 자동화 작업도 끊기지 않음 |
| **Remote Control 보안 강화** | 저장소 체크인 설정에서 Remote Control 자동 연결 켜기 불가 (유저·관리 설정에서만 가능) |
| **워크트리 격리 강화** | 워크트리 격리가 파일 편집뿐 아니라 Bash 명령, git 리디렉트까지 차단 |
| **Bash 보안 강화** | 명령 일부를 권한 체크에서 숨기거나, 탭/유니코드 패딩으로 가리는 것 차단 |
| **내부 작업 훅 제한** | PreToolUse 자동 승인 훅이 요약·압축 같은 클로드 내부 작업에는 적용 안 됨 |

---

## 🚨 `/ultraplan` 삭제 안내

> ⚠️ **`/ultraplan` 명령어와 research preview가 이번 버전에서 완전히 삭제됐어요.**

- 삭제 항목: `/ultraplan` 명령어, `ultraplan` 키워드
- 대안: **plan mode** 또는 **Claude Code on the web** 사용
- 기존에 `/ultraplan`을 쓰고 있었다면 **plan mode** (`Shift+Tab`으로 전환)로 대체하세요

---

## 공식 릴리즈 노트

- 버전: v2.1.220 → v2.1.224
- 전체 변경 내역: [changelog#2-1-220](https://code.claude.com/docs/en/changelog#2-1-220)
