---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "기업용 Bedrock·Vertex·Foundry에서도 Auto Mode, acceptEdits 안전장치, /plugin list 명령어, 관리형 배포 버전 잠금"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "vertex", "foundry", "plugin", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-21"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Auto Mode — 이제 Bedrock·Vertex·Foundry에서도 🌐

**Auto Mode(오토 모드)** 가 Anthropic 자체 API뿐만 아니라 **기업 클라우드 플랫폼**에서도 작동하게 됐어요.

| 플랫폼 | 이번 주 전 | 이번 주 후 |
|--------|-----------|-----------|
| Anthropic API | ✅ 지원 | ✅ 지원 |
| Amazon Bedrock | ❌ | ✅ **신규 지원** |
| Google Vertex AI | ❌ | ✅ **신규 지원** |
| Microsoft Foundry | ❌ | ✅ **신규 지원** |

> 🍱 **비유로 설명하면**: 지금까지 Auto Mode는 Anthropic 직영 매장에서만 쓸 수 있는 서비스였어요. 이제 Amazon·Google·Microsoft 백화점 안의 입점 매장에서도 똑같이 쓸 수 있게 됐어요.

**Auto Mode가 뭔가요?**

Auto Mode는 Claude가 작업 성격을 보고 **허용/거부를 스스로 판단**하는 모드예요. 사람이 일일이 승인하지 않아도 Claude가 안전하게 자율로 작업해요 (기존 `--dangerously-skip-permissions`의 더 안전한 대안).

```bash
# Auto Mode로 실행
claude --auto-mode

# 또는 설정에서 활성화
# ~/.claude/settings.json의 permissionMode: "auto" 참고
```

<div class="note-circle">
○ Bedrock·Vertex·Foundry 설정 방법은 각 플랫폼 공식 문서 참조<br />
○ 기업 보안 정책이 Auto Mode 동작에 영향을 줄 수 있어요 <code>[공식 발표 기준]</code>
</div>

---

### 2️⃣ acceptEdits 모드 — 실행 가능한 파일 쓰기 전 확인 🔒

**acceptEdits(어셉트 에디츠) 모드**에 새 안전장치가 추가됐어요: **스크립트나 실행 가능한 코드를 저장하기 전에 Claude가 먼저 확인을 구해요**.

> 🍱 **비유로 설명하면**: 이전에는 문서 파일이든 실행 파일이든 Claude가 바로 저장했어요. 이제는 "이 파일은 실행될 수 있는 코드예요 — 저장할까요?"라고 먼저 물어봐요. 전기공사에서 "전원 켤게요, 괜찮죠?" 확인하는 것과 같아요.

**어떤 파일이 해당되나요?**

| 파일 유형 | 예시 |
|-----------|------|
| 셸 스크립트 | `.sh`, `.bash`, `.zsh` |
| 파이썬 스크립트 | `.py` (실행 권한 있는 경우) |
| 실행 가능 파일 | `chmod +x` 된 파일 |
| 설정 파일 | 빌드·배포를 트리거하는 파일 |

이 기능은 특히 **자동 승인 모드(acceptEdits)**를 사용할 때 중요해요 — Claude가 무분별하게 실행 파일을 생성하지 않도록 막아줘요.

<div class="note-circle">
○ 일반 텍스트·코드 파일은 영향 없어요 — 실행 가능성이 있는 파일만 확인해요<br />
○ acceptEdits 모드 설정: <a href="/docs/advanced/permission-modes">권한 모드 가이드</a> 참조
</div>

---

### 3️⃣ `/plugin list` — 설치된 플러그인 목록 한눈에 확인 📋

이제 세션 중에 **어떤 플러그인이 로드됐는지** 바로 확인할 수 있어요.

```bash
# 현재 세션에 로드된 플러그인 목록
/plugin list
```

**왜 유용한가요?**

플러그인을 여러 개 설치하다 보면 "지금 뭐가 켜져 있지?" 헷갈릴 때가 있어요. `/plugin list`를 입력하면 활성화된 플러그인·스킬·서브에이전트 목록을 한번에 볼 수 있어요.

| 명령어 | 용도 |
|--------|------|
| `/plugin list` | 현재 로드된 플러그인 목록 확인 |
| `/plugin install <이름>` | 플러그인 설치 |
| `/reload-plugins` | 재시작 없이 플러그인 재로드 |

> 🍱 **비유로 설명하면**: 스마트폰에서 "현재 실행 중인 앱"을 보는 것과 같아요. 어떤 앱이 켜져 있는지 확인하고 정리할 수 있어요.

---

### 4️⃣ 관리형 배포 — 플러그인 버전 잠금 🔐

팀이나 기업에서 Claude Code를 관리형(managed)으로 배포할 때, 이제 **허용되는 플러그인 버전 범위를 지정**할 수 있어요.

```json
// 관리형 설정 예시
{
  "allowedPluginVersions": {
    "security-guidance": ">=1.2.0 <2.0.0",
    "code-review": "^3.1.0"
  }
}
```

**왜 필요한가요?**

| 상황 | 이전 | 이제 |
|------|------|------|
| 팀원이 구버전 플러그인 사용 | 허용됨 | 관리자가 차단 가능 |
| 새 버전이 문제를 일으킬 때 | 막을 방법 없음 | 최대 버전 상한 설정 |
| 보안 패치된 버전 강제 적용 | 수동 공지 | 최소 버전 하한 설정 |

> 🍱 **비유로 설명하면**: 회사에서 "우리 팀은 엑셀 2019 이상만 써야 해요. 2016은 쓰지 마세요"라고 정책을 걸어두는 것과 같아요.

<div class="note-circle">
○ 이 기능은 팀·엔터프라이즈 관리자 설정 기능이에요<br />
○ 개인 사용자는 영향 없어요 <code>[공식 발표 기준]</code>
</div>

---

<div class="note-circle">
○ Week 23 범위: 2026-06-01 ~ 2026-06-05<br />
○ Auto Mode 기업 플랫폼 지원 — 기업 사용자에게 특히 유용한 업데이트
</div>
