---
title: "[공] 주간 업데이트 W32 — 세션 간 메시지·셀프호스팅·Auto Mode 기본값"
description: "2026년 8월 1주차 업데이트: 세션끼리 서로 메시지 전달, 자체 서버에서 Claude Code 클라우드 세션 실행, Auto Mode가 기본 권한 모드로 변경 (2026-08-14~)"
tags: ["자동생성", "주간업데이트", "세션메시지", "셀프호스팅", "AutoMode", "신기능", "W32"]
category: "next"
order: 18
lastUpdated: "2026-08-20"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w32">공식 What's New W32</a>를 바탕으로 정리했습니다 (2026-08-03~08-07, v2.1.220~v2.1.224).
<br />★ <strong>핵심 한 줄</strong>: <strong>Auto Mode가 이제 기본값!</strong> 2026-08-14부터 Pro·Max·Team 플랜에서 새 세션이 자동으로 Auto Mode로 시작돼요.
<br />⚠️ <strong>중요</strong>: <code>/ultraplan</code> 명령어가 이번 업데이트에서 <strong>완전히 제거</strong>됐어요. 대신 plan mode 또는 웹 Claude Code를 쓰세요.
</div>

## 이번 주 핵심 요약

| 신기능 | 한 줄 요약 |
|---|---|
| 🔗 세션 간 메시지 | 내 Claude Code 세션들이 서로 대화해요 |
| 🏢 셀프호스팅 환경 | 우리 회사 서버에서 클라우드 세션 실행 |
| 🤖 Auto Mode 기본값 | 이제 매번 "허락" 안 물어봐도 돼요 |

---

## 1. 🔗 세션 간 메시지 (Cross-session messaging)

### 뭔가요?

여러 Claude Code 세션을 동시에 열어서 작업할 때, **세션끼리 서로 메시지를 전달**할 수 있게 됐어요!

> 🍱 **비유로 설명하면**: 내가 동시에 두 개의 프로젝트 팀과 일하고 있을 때, 한 팀에서 "고객 이름 필드가 `users.name`에서 `users.display_name`으로 바뀌었다"는 소식을 전하면 다른 팀 직원이 알아서 들어요. 두 팀이 카카오톡으로 소통하는 것처럼, 두 세션이 서로 메시지를 주고받는 거예요.

### 어떻게 작동하나요?

클로드가 자동으로 `ListAgents` (리스트에이전트) 도구로 현재 열린 세션 목록을 파악하고, `SendMessage` (센드메시지) 도구로 메시지를 보냅니다. 직접 시키거나, 한 세션의 변경이 다른 세션에 영향을 줄 때 클로드가 알아서 전달하기도 해요.

### 직접 써보기

```text
결제 API 작업하는 세션에 알려줘 —
users.name이 users.display_name으로 바뀌었다고.

(Tell the session working on the payments API that
 users.name is now users.display_name)
```

다른 세션에 "Message from (메시지 출처)" 행이 뜨면, `Ctrl+O`로 내용을 펼쳐볼 수 있어요.

### 어떤 세션을 찾을 수 있나요?

```text
> /list-agents
```

입력하면 현재 메시지를 받을 수 있는 세션 목록이 나와요.

### 주의 사항

- ✅ macOS·Linux 지원 (v2.1.224 이상)
- ❌ Windows는 현재 미지원
- 📌 메시지는 클로드가 작성한 **텍스트만** 전달돼요. 내 대화 내용이나 파일은 전달되지 않아요.

---

## 2. 🏢 셀프호스팅 환경 (Self-hosted environments)

### 뭔가요?

**Team·Enterprise 플랜** 전용 기능이에요. claude.ai, 모바일 앱, 데스크톱 앱에서 "클라우드 세션"을 시작할 때, **Anthropic 서버가 아닌 우리 회사 서버에서 세션을 실행**할 수 있어요.

> 🍱 **비유로 설명하면**: 일반 클라우드 세션은 Anthropic 서버라는 "공공 도서관"을 빌려 쓰는 것이라면, 셀프호스팅 환경은 우리 회사만의 "사내 도서관"을 운영하는 거예요. 외부 인터넷 없이도 회사 내부 시스템에 접근할 수 있어요.

### 왜 필요한가요?

- 회사 내부망에서만 접근 가능한 데이터베이스, 서비스에 접근 필요
- 보안 규정상 코드가 외부 서버에 있으면 안 되는 경우
- 회사 인프라 안에서 AI 세션을 직접 통제하고 싶을 때

### 설정 방법 (간단 요약)

1. Owner/어드민이 [admin settings](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments** 활성화
2. 서버에서 아래 명령 실행:

```bash
claude self-hosted-runner setup
```

3. 안내에 따라 환경 생성 및 러너 시작
4. 어드민 설정 페이지에서 **Healthy** 상태로 뜨면 완료!

이후 팀원들이 세션을 시작할 때 자체 서버 환경을 선택할 수 있어요.

### 지원 플랜

- ✅ Team Premium
- ✅ Enterprise
- 🔒 공개 베타 (Public Beta)
- 📖 [셀프호스팅 환경 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart)

---

## 3. 🤖 Auto Mode — 이제 기본 권한 모드!

### 뭐가 바뀌었나요?

**2026년 8월 14일부터** Pro·Max·Team 플랜에서 **새 세션이 Auto Mode로 시작**해요.

이전까지는 기본이 `default` 모드(매번 허락 요청)였는데, 이제 `auto`(안전 분류기가 판단해서 자동 처리)가 기본이 됐어요.

> 🍱 **비유로 설명하면**: 이전에는 클로드가 파일 하나 만들 때도 "이거 만들어도 될까요?" 물어봤는데, 이제 판단력 있는 직원처럼 "이 정도는 알아서 하고, 위험한 건 물어볼게요"로 바뀐 거예요.

### 내 모드 설정은 유지되나요?

- ✅ 내가 기본 모드를 직접 설정해 뒀다면 → **그대로 유지** (한 번 물어보는 전환 프롬프트가 뜸)
- ✅ 조직(Organization)이 관리하는 기본값이면 → **변경되지 않음**
- 새로 시작하는 세션에서만 영향을 받아요

### 지금 바로 Auto Mode로 설정하려면

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

이렇게 설정하면 새 세션 시작 시 상태 표시줄에 `auto mode on`이 표시돼요.

### Auto Mode에서 달라진 점 (W32 추가 개선)

- 위험한 `rm` 명령, 백그라운드 작업, 의심스러운 Windows 경로 → 이제 **허락 창 없이** Auto Mode 분류기가 자동 판단
- Auto Mode가 사용하는 분류기 호출은 **사용량 한도에서 제외**됨

---

## 그 외 작은 업데이트들 (Other wins)

| 기능 | 설명 |
|---|---|
| 🖥️ VS Code Focus 뷰 | 도구 활동을 접을 수 있는 행으로 숨겨줘요. `Ctrl+Alt+F` (Mac: `Ctrl+Option+F`) |
| 📦 ZIP 아카이브 플러그인 | `git`·`npm` 없이 HTTPS로 플러그인 설치 가능 |
| `/review` 별칭 | `/code-review`의 별칭으로 추가됨 |
| 워크트리 격리 강화 | 파일 수정뿐 아니라 Bash 명령, git 리다이렉트도 메인 체크아웃에 접근 차단 |
| 서브에이전트 200개 한도 제거 | 장기 실행 세션에서 더 많은 서브에이전트 가능 |
| `/fork` 워크트리 분리 | 포크된 세션이 별도 워크트리에서 코드 변경 |
| 플러그인 즉시 활성화 | 설치 후 `/reload-plugins` 없이 같은 세션에서 바로 사용 가능 |

---

## ⚠️ 중요: `/ultraplan` 완전 제거됨

> W32 "Other wins"에서 공식 발표됨

`/ultraplan` 명령어와 관련 기능(research preview)이 **이번 업데이트로 완전히 제거**됐어요.

**대신 사용할 수 있는 것:**
- **plan mode**: `Shift+Tab`으로 전환해서 로컬에서 계획 모드 사용
- **Claude Code on the web**: claude.ai/code에서 브라우저로 클로드를 사용

---

## 이번 W32 업데이트, 어떤 분께 중요한가요?

| 상황 | 추천 |
|---|---|
| 🔄 여러 세션 동시에 작업하는 분 | 세션 간 메시지 기능을 활용해보세요 |
| 🏢 회사 IT 담당자·Enterprise 고객 | 셀프호스팅 환경 도입을 검토해보세요 |
| 🤖 "허락해도 될까요?" 질문이 피곤한 분 | Auto Mode 기본 설정 확인해보세요 |
| 🚨 기존에 `/ultraplan` 사용하던 분 | plan mode나 웹 Claude Code로 전환하세요 |

📖 **공식 문서**: [What's New W32](https://code.claude.com/docs/en/whats-new/2026-w32) · [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging) · [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments-quickstart) · [Permission modes](https://code.claude.com/docs/en/permission-modes)
