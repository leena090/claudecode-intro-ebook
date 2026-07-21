---
title: "[공] 회사 내부 GitHub와 Claude Code 연결하기 — GitHub Enterprise Server"
description: "사내 자체 GitHub(GHES)를 Claude Code에 연결하는 방법. 관리자 한 번 설정으로 팀 전체가 웹 세션·코드 리뷰를 사용할 수 있어요."
tags: ["자동생성", "GitHub Enterprise", "GHES", "기업", "Team", "Enterprise", "웹 세션", "코드 리뷰", "플러그인 마켓플레이스", "admin"]
category: "config"
order: 12
lastUpdated: "2026-07-21"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 회사 서버에서 직접 운영하는 GitHub(GHES)를 Claude Code에 연결하면, 팀 전체가 웹 세션과 코드 리뷰를 클라우드로 쓸 수 있어요. [공]<br />
★ <strong>지원 플랜</strong> — Team · Enterprise 전용<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/github-enterprise-server">code.claude.com/docs/en/github-enterprise-server</a>
</div>

## GitHub Enterprise Server가 뭔가요?

보통 GitHub 하면 github.com이라는 공개 사이트를 생각하죠. 그런데 보안이 중요한 회사에서는 **자체 서버에 GitHub를 직접 설치**해서 쓰는 경우가 있어요. 이걸 **GitHub Enterprise Server**(GHES, 지이에이치이에스)라고 해요.

> 🏢 **비유로 설명하면**: github.com이 공동 사무실(WeWork)이라면, GHES는 우리 회사 건물 안에 만든 전용 사무실이에요. 외부에서는 접근도 안 되고, 보안도 높죠. Claude Code가 이 전용 사무실에 들어올 수 있도록 **전용 출입증(GitHub App)을 한 번만 만들어주는 설정**이 바로 이 내용이에요.

---

## 어떤 기능이 되나요?

| 기능 | GHES 지원 여부 | 비고 |
|---|---|---|
| **클라우드 웹 세션** | ✅ 지원 | `claude --cloud`로 사용 |
| **코드 리뷰 (PR 자동 검토)** | ✅ 지원 | github.com과 동일 방식 |
| **Claude Security** | ✅ 지원 (베타) | Enterprise 플랜, claude.ai/security |
| **Teleport (터미널 이어받기)** | ✅ 지원 | `--teleport` 플래그 |
| **플러그인 마켓플레이스** | ✅ 지원 | 설치 방식이 조금 달라요 (아래 참고) |
| **기여 분석 (Analytics)** | ✅ 지원 | 웹훅으로 대시보드에 전달 |
| **GitHub Actions** | ✅ 지원 | 워크플로우 직접 설정 필요 |
| **GitHub MCP 서버** | ❌ 미지원 | `gh` CLI로 대신 사용 |

---

## 관리자(Owner) 설정 방법

> ℹ️ 이 작업은 **Claude 조직의 Owner 권한** + **GHES에서 GitHub App 생성 권한**이 필요해요. **한 번만 설정**하면 팀원 전체가 추가 설정 없이 바로 써요.

### 단계별 설정 (가이드 방식)

**1단계.** [claude.ai/admin-settings/claude-code](https://claude.ai/admin-settings/claude-code) → "GitHub Enterprise Server" 섹션에서 **Connect** 클릭

**2단계.** 연결 표시 이름과 GHES 주소 입력 (예: `github.example.com`)
- 자체 서명 인증서(사설 CA) 사용 시 인증서도 붙여넣기

**3단계.** **Continue to GitHub Enterprise** 클릭 → GHES 인스턴스로 이동 → 미리 채워진 앱 설정 확인 후 **Create GitHub App** 클릭

**4단계.** GHES의 GitHub App 페이지에서 접근 허용할 저장소 또는 조직 선택 후 앱 설치

**5단계.** 다시 Claude 관리자 설정으로 돌아와 코드 리뷰, Claude Security, 기여 분석 활성화

> 💡 네트워크 구성으로 가이드 연결 방식이 차단되면 **Add manually**를 눌러 앱 정보를 직접 입력할 수 있어요.

---

### GitHub App에 필요한 권한

가이드 방식으로 진행하면 아래 권한이 **자동으로 설정**돼요.

| 권한 | 수준 | 용도 |
|---|---|---|
| Contents | 읽기+쓰기 | 저장소 클론, 브랜치 푸시 |
| Pull requests | 읽기+쓰기 | PR 생성, 리뷰 코멘트 |
| Issues | 읽기+쓰기 | 이슈 멘션 응답 |
| Checks | 읽기+쓰기 | 코드 리뷰 체크 실행 |
| Actions | 읽기 | CI 상태 확인 (자동 수정용) |
| Repository hooks | 읽기+쓰기 | 기여 분석용 웹훅 수신 |
| Metadata | 읽기 | GitHub 필수 권한 |

---

## 방화벽 설정

GHES가 방화벽 뒤에 있다면, **Anthropic 인프라 → 내 GHES**로 들어오는 연결을 허용해야 해요. 저장소 클론과 리뷰 코멘트 게시에 필요합니다.

→ [Anthropic API IP 주소 목록](https://platform.claude.com/docs/en/api/ip-addresses)을 방화벽에 허용 목록으로 추가하세요.

---

## 개발자 사용 방법

관리자 설정이 끝나면 개발자는 **별도 설정이 필요 없어요**. Claude Code가 git 원격 주소에서 GHES 주소를 자동으로 감지해요.

```bash
# 1. GHES에서 저장소 클론 (기존 방식 그대로)
git clone git@github.example.com:platform/api-service.git
cd api-service

# 2. 클라우드 세션 시작 (Claude가 GHES 자동 감지)
claude --cloud "결제 웹훅 핸들러에 재시도 로직 추가해줘"
```

진행 상황은 `/tasks` 명령어나 [claude.ai/code](https://claude.ai/code)에서 확인할 수 있어요.

### 터미널로 이어받기 (Teleport)

웹에서 시작한 세션을 터미널로 끌어올 수도 있어요. GHES 저장소 체크아웃 폴더에서 실행하면 돼요:

```bash
claude --teleport
```

---

## 플러그인 마켓플레이스를 GHES에 호스팅할 때

회사 내부 플러그인을 GHES 저장소에 올려서 관리할 수 있어요. 어디서 추가하느냐에 따라 설치 방식이 달라요:

| 추가 방법 | 설치 방식 | 팀원에게 필요한 것 |
|---|---|---|
| CLI · Desktop에서 직접 | 로컬 git 자격증명으로 클론 | GHES 접근 권한 |
| managed settings로 배포 | 로컬 git으로 클론 | GHES 접근 권한 |
| claude.ai 조직 설정 | Anthropic 백엔드가 GitHub App으로 처리 | 팀원 추가 설정 없음 |
| 클라우드 세션 | ⚠️ 불안정 | 권장하지 않음 |

**CLI에서 GHES 마켓플레이스 추가:**
```bash
# owner/repo 형식은 github.com으로만 연결됩니다!
# GHES는 반드시 전체 URL을 쓰세요
/plugin marketplace add https://github.example.com/platform/claude-plugins.git
```

**managed settings로 팀 전체에 사전 등록:**
```json
{
  "extraKnownMarketplaces": {
    "internal-tools": {
      "source": {
        "source": "git",
        "url": "https://github.example.com/platform/claude-plugins.git"
      }
    }
  }
}
```

> 💡 **SSH URL도 되지만** HTTPS URL이 더 안정적이에요. SSH는 기기의 `known_hosts`에 GHES 호스트가 등록돼 있어야 하거든요.

---

## ⚠️ GitHub MCP 서버는 GHES에서 안 돼요

GHES에서는 GitHub MCP 서버를 **사용할 수 없어요**. 대신 `gh` CLI를 GHES 인스턴스용으로 설정해서 사용하세요:

```bash
# GHES 인스턴스로 gh CLI 로그인
gh auth login --hostname github.example.com
```

이후 클로드가 세션에서 `gh` 명령어를 통해 PR 생성, 이슈 조회 등을 할 수 있어요.

---

## 문제 해결 Q&A

**Q. 클라우드 세션에서 저장소 클론이 실패해요**
→ Owner가 GHES 설정을 완료했는지, GitHub App이 해당 저장소에 설치됐는지 확인하세요. Claude 관리자 설정에 등록된 호스트명이 git remote의 호스트명과 일치하는지도 확인하세요.

**Q. 마켓플레이스 추가 시 "정책 오류"가 나와요**
→ 관리자에게 managed settings에 GHES 호스트 패턴 허용을 요청하세요:
```json
{
  "strictKnownMarketplaces": [
    { "source": "hostPattern", "hostPattern": "^github\\.example\\.com$" }
  ]
}
```

**Q. claude.ai에서 마켓플레이스 추가 시 "GitHub 접근 오류"가 나와요**
→ 내 개인 GitHub Enterprise 계정이 Claude에 연결됐는지 확인하세요. 조직 설정이 완료됐어도 **개인 계정 연결은 별도로** 필요해요. [claude.ai/code](https://claude.ai/code) 저장소 선택 화면에서 GHES 인스턴스 연결 옵션을 찾아보세요.

**Q. "Unable to get organization UUID" 오류가 나와요**
→ 웹 세션은 Team 또는 Enterprise 조직이 필요해요. `/login`으로 조직 계정으로 다시 로그인하세요.

---

## 함께 보면 좋은 문서

- [Claude Code 웹 세션 사용하기](/docs/codeweb/codeweb-remote)
- [플러그인 마켓플레이스 만들기](/docs/advanced/plugin-marketplace)
- [설정 파일(settings.json) 이해하기](/docs/config/settings-json)
- [managed settings로 팀 설정 배포하기](/docs/config/admin-setup-guide)
