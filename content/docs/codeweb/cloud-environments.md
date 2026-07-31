---
title: "[공] 클라우드 환경 설정 — 웹 세션의 네트워크·패키지·스크립트 관리"
description: "claude.ai/code 웹 세션이 실행되는 클라우드 환경을 직접 설정하는 방법. 네트워크 접근 수준, 환경변수, 셋업 스크립트, 캐싱까지"
tags: ["자동생성", "cloud", "환경설정", "웹세션", "네트워크", "setup-script", "codeweb"]
category: "codeweb"
order: 5
lastUpdated: "2026-07-31"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a><br />
★ <strong>대상</strong>: Pro · Max · Team 리서치 프리뷰 / Enterprise 프리미엄 시트 사용자<br />
★ <strong>Remote Control</strong>과 다른 점: 클라우드 환경은 Anthropic 서버의 VM이에요. 내 컴퓨터를 쓰는 Remote Control과는 별개예요.
</div>

## 클라우드 환경이 뭔가요?

`claude.ai/code`에서 웹 세션을 열면, 내 컴퓨터가 아니라 **Anthropic 서버의 가상 컴퓨터(VM)** 에서 Claude가 작업해요. 이 VM 설정을 **클라우드 환경**이라고 불러요.

클라우드 환경 설정으로 조절할 수 있는 것:
- 🌐 **네트워크 접근**: 어떤 외부 주소에 연결할 수 있는지
- 🔧 **환경변수**: 세션 시작 시 자동으로 적용되는 변수들
- 📜 **셋업 스크립트**: Claude가 일 시작하기 전에 실행되는 설치 스크립트

> 🍱 **비유로 설명하면**: 임시 사무실을 빌려준다고 생각해봐요. 기본 책상·의자(기본 도구)는 이미 있고, 내가 "인터넷은 우리 회사 사이트만 허용" (네트워크), "냉장고에 커피 항상 채워둬" (셋업 스크립트) 식으로 미리 설정할 수 있어요.

---

## 환경 설정 방법

### 환경 선택창 열기

1. [claude.ai/code](https://claude.ai/code) 접속 (웹 온보딩 완료 후)
2. 메시지 입력창 위 **구름 아이콘 (현재 환경 이름)** 클릭
3. 기존 환경의 톱니바퀴 아이콘 또는 **"Add cloud environment"** 클릭

---

## 네트워크 접근 수준

각 환경에서 세션이 외부로 연결할 수 있는 범위예요.

| 수준 | 허용 범위 | 언제 쓰면 좋아요? |
|---|---|---|
| **None** | 외부 연결 없음 | 완전 격리가 필요할 때 |
| **Trusted** (기본) | npm, PyPI, GitHub 등 기본 허용 목록 | 대부분의 경우 |
| **Full** | 모든 도메인 | 제한 없이 외부 API 호출 필요할 때 |
| **Custom** | 내가 지정한 도메인만 | 특정 내부 서버 접근 필요할 때 |

### Custom 도메인 추가 예시

```
api.example.com
*.internal.example.com
registry.example.com
```

> 💡 `*.internal.example.com` 처럼 `*` 앞에 점(.)을 붙이면 **서브도메인 전체**를 허용해요.

---

## 환경변수 설정

`.env` 파일 형식으로 설정해요 (한 줄에 하나씩):

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

> ⚠️ **API 키·비밀번호는 절대 넣지 마세요!** 환경을 공유하는 사람이면 누구나 값을 볼 수 있어요. 비밀 값은 별도 보안 저장소를 사용하세요.

---

## 셋업 스크립트 (Setup Script)

세션이 시작될 때 Claude가 일 시작하기 **전에** 자동으로 실행되는 Bash 스크립트예요.

```bash
#!/bin/bash
# 예시: gh CLI 설치
apt update && apt install -y gh
```

### 스크립트 작성 규칙

| 규칙 | 이유 |
|---|---|
| **반드시 종료 코드 0으로 끝나야** | 0이 아니면 세션 자체가 시작 안 돼요 |
| **5분 이내에 완료** | 초과하면 환경 캐시가 제대로 안 돼요 |
| **네트워크 필요 시 Trusted 이상** | None 레벨에선 패키지 설치 불가 |

```bash
#!/bin/bash
# 오류가 나도 세션은 열리게 하려면
apt install -y 특수패키지 || true
```

### 환경 캐싱 — 매번 설치 안 해도 돼요

셋업 스크립트는 **처음 한 번만** 실행되고, 이후엔 그 상태를 스냅샷으로 저장해 재사용해요. 세션마다 설치 시간을 기다리지 않아도 되죠.

- 캐시 유효기간: 약 **7일**
- 캐시 재생성 조건: 스크립트 변경, 네트워크 설정 변경, 7일 경과
- 실행 중인 프로세스(예: DB 서버)는 캐시되지 않아요 (파일만 캐시)

> 🍱 **비유로 설명하면**: 첫날 사무실에 책상 세팅, 소프트웨어 설치, 키보드 배치를 한 번 해두면 다음날부터는 그 상태 그대로 시작하는 것과 같아요. 매일 다시 설치할 필요가 없죠.

---

## 기본 제공 도구

클라우드 세션 VM (Ubuntu 24.04)에는 이미 설치되어 있어요:

| 분류 | 도구 |
|---|---|
| 🐍 Python | Python 3.x, pip, poetry, uv, pytest, ruff |
| 🟨 Node.js | v20/21/22 (nvm), npm, yarn, pnpm, bun |
| 💎 Ruby | 3.1, 3.2, 3.3 + bundler, rbenv |
| ☕ Java | OpenJDK 21 + Maven, Gradle |
| 🐹 Go | 최신 안정 버전 |
| 🦀 Rust | rustc + cargo |
| 🐳 Docker | docker, docker compose |
| 🗄️ DB | PostgreSQL 16, Redis 7.0 |
| 🔧 유틸 | git, jq, yq, ripgrep, tmux, vim |

> 💡 정확한 버전은 클라우드 세션에서 Claude에게 "check-tools 실행해줘"라고 하면 확인할 수 있어요.

---

## 셋업 스크립트 vs. SessionStart 훅 — 뭐가 달라요?

| 항목 | 셋업 스크립트 | SessionStart 훅 |
|---|---|---|
| **설정 위치** | claude.ai/code 환경 다이얼로그 | 저장소 `.claude/settings.json` |
| **실행 시점** | Claude 시작 전 (캐시 없을 때만) | Claude 시작 후 (매 세션) |
| **대상** | 클라우드 세션만 | 로컬 + 클라우드 모두 |
| **용도** | 런타임/언어 설치 | npm install 같은 프로젝트 셋업 |

---

## 조직 공유 환경 (Team/Enterprise)

Team·Enterprise 관리자는 팀원 전체가 쓸 수 있는 **공유 환경**을 만들 수 있어요.

- 설정 위치: [claude.ai/admin-settings](https://claude.ai/admin-settings) → Cloud environments
- 팀원 환경 선택 목록에 자동으로 표시됨
- **Claude Tag**(Slack) 채널은 공유 환경만 사용 가능

---

## CLI에서 클라우드 환경 선택하기

```bash
# 클라우드 세션 기본 환경 선택
/remote-env
```

→ 목록에서 원하는 환경 선택. `~/.claude/settings.json`의 `remote.defaultEnvironmentId`에 저장됨.

---

## 환경 보관(Archive)

환경 편집 화면에서 **Archive** 선택. 삭제는 없고 보관만 가능해요.
- 이미 실행 중인 세션에는 영향 없음
- 보관 후 새 세션에서는 선택 불가

---

## 한 줄 정리

> 클라우드 환경 = **웹 세션 VM의 환경을 내가 직접 설계하는 설정판**. 네트워크 범위, 환경변수, 사전 설치 스크립트를 한 번 설정해두면 이후 세션은 자동으로 그 환경에서 시작해요.
