---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Auto mode가 Bedrock·Vertex·Foundry에서도 동작, acceptEdits 안전 강화, /plugin list 신규 명령어"
tags: ["업데이트", "2026", "week23", "auto-mode", "plugin-list", "acceptEdits", "bedrock", "vertex", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-26"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Auto Mode — 이제 Bedrock, Vertex, Foundry에서도 동작 🌐

**Auto Mode(자동 모드)** 가 이제 클라우드 기업 플랫폼인 **Amazon Bedrock**, **Google Vertex AI**, **Microsoft Foundry**에서도 사용할 수 있게 됐어요.

| 플랫폼 | 설명 |
|--------|------|
| **Amazon Bedrock** | AWS(아마존 웹 서비스) 기반 Claude 사용 |
| **Google Vertex AI** | Google Cloud 기반 Claude 사용 |
| **Microsoft Foundry** | Microsoft Azure 기반 Claude 사용 |

> 🍱 **비유**: 예전엔 Claude 직통 전화만 됐는데, 이제 삼성폰·LG폰·애플폰 모두에서 같은 번호로 연결되는 것과 같아요. 어떤 클라우드를 쓰든 Auto Mode를 그대로 쓸 수 있어요.

**Auto Mode가 뭔가요?**

Auto Mode는 Claude가 사람 허가 없이 더 안전하게 자율 작업하도록 하는 모드예요.

```bash
# Auto mode 전환
/mode auto

# 또는 CLI 시작 시
claude --mode auto
```

<div class="note-circle">
○ 기업에서 AWS/Google Cloud/Azure를 이미 쓰고 있다면 — 이제 추가 설정 없이 Auto Mode 사용 가능<br />
○ 개인 Pro/Max 플랜 사용자는 직접 연결(Anthropic API) 그대로 사용
</div>

---

### 2️⃣ acceptEdits 모드 — 실행 가능 파일 수정 전 확인 요청 🛡️

**acceptEdits 모드**에서 새 기능이 추가됐어요. Claude가 **코드를 실행할 수 있는 파일**(스크립트, 설정 파일 등)을 수정하기 전에 이제 별도로 확인을 요청해요.

> 🍱 **비유**: 예전엔 집수리 기사(Claude)가 벽지(일반 파일)를 바꿀 때는 바로 했지만, 전기 패널(실행 파일) 건드릴 때는 항상 집주인에게 먼저 말하게 된 거예요.

**acceptEdits 모드란?**

Claude가 파일을 수정할 때 일일이 허가를 구하는 대신, 검토 단계에서 한꺼번에 승인하는 방식이에요.

```bash
# acceptEdits 모드 활성화
claude --accept-edits
```

**새로 추가된 안전 장치:**

| 파일 종류 | 이전 | 이후 |
|-----------|------|------|
| 일반 코드 파일 | 바로 수정 | 바로 수정 (그대로) |
| 실행 가능한 파일(스크립트 등) | 바로 수정 | ⚠️ 별도 확인 요청 |

<div class="note-circle">
○ CI/CD 파이프라인·자동화 스크립트 수정 시 실수를 방지하는 안전망이에요<br />
○ 완전 자동화 환경에서 더 안전하게 Claude를 사용할 수 있어요
</div>

---

### 3️⃣ `/plugin list` — 설치된 플러그인 한 번에 확인 📋

이제 **`/plugin list`** 명령어로 현재 설치된 플러그인 목록을 바로 볼 수 있어요.

```bash
# 현재 설치된 플러그인 목록 보기
/plugin list

# 결과 예시:
# ✓ security-guidance@claude-plugins-official
# ✓ cowork-collab@official
# ✓ my-custom-plugin (local)
```

> 🍱 **비유**: 스마트폰에서 "설치된 앱" 목록을 보는 것과 같아요. 어떤 기능이 켜져 있는지, 뭐가 충돌하는지 한눈에 파악할 수 있어요.

**다른 플러그인 관련 명령어들:**

| 명령어 | 기능 |
|--------|------|
| `/plugin list` | 설치된 플러그인 목록 보기 (신규) |
| `/plugin install <이름>` | 플러그인 설치 |
| `/reload-plugins` | 플러그인 새로 고침 |

<div class="note-circle">
○ 플러그인이 예상대로 작동하지 않을 때 가장 먼저 이 명령어로 확인해보세요
</div>

---

### 4️⃣ 관리형 배포 — 플러그인 버전 범위 강제 지정 (엔터프라이즈)

기업(Enterprise) 환경에서 Claude Code를 배포할 때, 이제 **승인된 플러그인 버전 범위**를 필수로 지정할 수 있어요.

> 🍱 **비유**: 회사 사무용 PC에 특정 버전의 소프트웨어만 설치되도록 IT팀이 정책을 거는 것처럼 — 플러그인도 허용 버전을 고정할 수 있어요.

```yaml
# 관리형 설정 예시 (managed settings)
plugins:
  - name: "security-guidance"
    versionRange: ">=1.2.0 <2.0.0"   # 1.2.0 이상, 2.0.0 미만만 허용
```

<div class="note-circle">
○ 개인 사용자에게는 해당 없음 — 팀·기업 배포 담당자를 위한 기능이에요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/plugin-dependencies" target="_blank">Plugin dependencies</a>
</div>

---

<div class="note-circle">
○ Week 23 범위: 2026-06-01 ~ 2026-06-05<br />
○ Bedrock·Vertex·Foundry Auto Mode: 기업 환경에 특히 유용<br />
○ acceptEdits 안전 강화: 자동화 작업 시 실수 방지에 도움
</div>
