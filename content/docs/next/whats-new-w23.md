---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Auto mode가 Bedrock·Vertex·Foundry로 확장, acceptEdits 모드 안전 강화, /plugin list 추가, 관리형 배포 버전 제어"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "vertex", "safe", "plugin", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-24"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Auto Mode — 클라우드 3대 플랫폼으로 확장 ☁️

**Auto Mode(오토 모드)** 가 이제 Amazon Bedrock(베드록), Google Vertex AI(버텍스 에이아이), Microsoft Foundry(파운드리)에서도 동작해요.

> 🍱 **비유**: 예전엔 Anthropic 직영 매장에서만 되던 '셀프계산대'가, 이제 이마트·롯데마트·홈플러스에서도 다 똑같이 쓸 수 있게 된 거예요.

| 플랫폼 | Auto Mode 지원 |
|--------|---------------|
| Anthropic API (직접) | ✅ (기존) |
| **Amazon Bedrock** | ✅ (신규) |
| **Google Vertex AI** | ✅ (신규) |
| **Microsoft Foundry** | ✅ (신규) |

**Auto Mode가 뭔가요?**

Auto Mode는 Claude가 파일을 수정·명령 실행 전에 일일이 물어보지 않고 알아서 판단해서 진행하는 모드예요. 단, 안전한 작업인지 자동으로 분류(Classifier)한 다음에만 진행해요.

```bash
# Auto Mode 켜는 방법 (터미널에서 Shift+Tab)
# 또는 설정 파일에:
# permissions.mode: "auto"
```

<div class="note-circle">
○ Auto Mode는 <code>--dangerously-skip-permissions</code> 대신 쓰는 더 안전한 방법이에요<br />
○ 기업 환경에서 Bedrock/Vertex/Foundry를 쓴다면 이번 업데이트로 Auto Mode 사용 가능
</div>

---

### 2️⃣ AcceptEdits 모드 — 실행 가능한 파일 작성 전 한 번 더 확인 🔒

**AcceptEdits(억셉트에딧) 모드**에서 Claude가 **실행 가능한 코드 파일** (스크립트, 실행 파일 등)을 작성하기 전에, 이제 한 번 더 승인을 요청해요.

> 🍱 **비유**: 집 열쇠 복사는 허락했지만, 금고 열쇠 복사는 한 번 더 물어보는 것과 같아요. 일반 파일 수정은 OK, 실행 가능한 파일은 한 번 더 확인.

**어떤 파일이 해당되나요?**

| 파일 유형 | 예시 |
|-----------|------|
| 셸 스크립트 | `.sh`, `.bash`, `.zsh` |
| Python 스크립트 | `.py` (실행 권한 있는 것) |
| 실행 파일 | 바이너리, `.exe` 등 |

이 기능은 **AcceptEdits 모드**(`acceptEdits` = 파일 수정은 자동 승인, 명령 실행은 물어보는 모드)에서 특히 중요해요.

<div class="note-circle">
○ 이 변경으로 AcceptEdits 모드가 더 안전해졌어요<br />
○ 기존에 자동으로 넘어가던 스크립트 파일 생성 시 이제 확인 팝업이 떠요
</div>

---

### 3️⃣ /plugin list — 지금 설치된 플러그인 한눈에 보기 🔌

새 명령어가 추가됐어요.

```bash
/plugin list
```

현재 세션에 설치·로드된 플러그인 목록이 한눈에 보여요.

> 🍱 **비유**: 스마트폰 설정 → 앱 목록 화면 같은 거예요. "내가 뭘 설치해놨지?" 할 때 바로 확인 가능.

**다른 플러그인 관련 명령어들:**

```bash
/plugin list           # 설치된 플러그인 목록
/plugin install <이름>  # 새 플러그인 설치
/reload-plugins        # 플러그인 재로드
```

---

### 4️⃣ 관리형 배포 — 승인 버전 범위 지정 가능 🏢

기업(Enterprise) 환경에서 Claude Code를 대규모로 배포할 때, **승인된 플러그인 버전 범위를 강제 지정**할 수 있게 됐어요.

> 🍱 **비유**: 회사 전산부서가 "직원들은 Excel 2021 이상만 써야 해요"라고 강제하는 것처럼, Claude Code 플러그인도 특정 버전만 허용하도록 IT팀이 통제할 수 있어요.

```json
// 관리형 설정 예시 (server-managed settings)
{
  "plugins": {
    "security-guidance": {
      "approvedVersionRange": ">=1.2.0 <2.0.0"
    }
  }
}
```

<div class="note-circle">
○ 개인 사용자에게는 직접 해당 없는 기업용 기능이에요<br />
○ 회사 IT팀이 Claude Code를 관리하는 환경에서 보안·호환성 관리에 쓰여요
</div>

---

<div class="note-circle">
○ Week 23 범위: 2026년 6월 1일 ~ 5일<br />
○ Auto mode 클라우드 확장, acceptEdits 안전 강화가 이번 주 핵심이에요
</div>
