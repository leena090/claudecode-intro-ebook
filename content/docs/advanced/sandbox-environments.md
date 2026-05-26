---
title: "[공] 샌드박스 환경 비교 — 내 상황에 맞는 격리 방법 고르기"
description: "샌드박스 Bash 도구, 샌드박스 런타임, 개발 컨테이너, 가상머신, Claude Code 웹 — 6가지 격리 방법 비교와 선택 가이드"
tags: ["자동생성", "샌드박스", "보안", "컨테이너", "Docker", "가상머신", "격리"]
category: "advanced"
order: 11
lastUpdated: "2026-05-23"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/sandbox-environments">code.claude.com/docs/en/sandbox-environments</a>을 바탕으로 작성됐어요.
</div>

## 왜 격리가 필요한가요?

Claude Code가 코드를 작성·실행할 때 **내 컴퓨터에 직접 접근**해요. 보통은 괜찮지만, 이럴 때는 걱정이 생기죠:

- 권한 확인 없이 자율로 일하게 두고 싶을 때 (`--dangerously-skip-permissions`)
- 신뢰할 수 없는 외부 코드를 다룰 때
- 실수로 중요한 파일을 지우는 게 걱정될 때
- 팀 전체가 같은 안전한 환경을 쓰게 하고 싶을 때

> 🏠 **비유로 설명하면**: AI가 집 전체를 맘대로 돌아다니게 두는 것 vs. 특정 방에서만 일하게 하는 것이에요. 어느 방까지 접근을 허용할지 정하는 게 격리예요.

---

## 6가지 격리 방법 한눈에 보기

| 방법 | 격리 범위 | Docker 필요? | 설정 난이도 |
|---|---|---|---|
| 🔒 **샌드박스 Bash 도구** | Bash 명령어만 | 없음 | 매우 쉬움 |
| 🛡️ **샌드박스 런타임** | Claude Code 전체 프로세스 | 없음 | 쉬움 |
| 📦 **개발 컨테이너** | 전체 개발 환경 | 필요 | 보통 |
| 🐳 **커스텀 컨테이너** | 전체 개발 환경 | 필요 | 보통~어려움 |
| 💻 **가상머신** | 전체 운영체제 | 없음 | 어려움 |
| ☁️ **Claude Code 웹** | Anthropic 관리 VM | 없음 | 없음! |

---

## 내 상황에 맞는 방법 고르기

| 이런 게 필요하다면 | 이 방법을 쓰세요 |
|---|---|
| 평소 작업에서 권한 확인 줄이고 싶다 | 샌드박스 Bash 도구 (`/sandbox`) |
| 감독 없이 자율 실행 시 안전망이 필요하다 | 개발 컨테이너 또는 샌드박스 런타임 |
| MCP 서버·훅(Hook)까지 Docker 없이 격리하고 싶다 | 샌드박스 런타임 |
| 신뢰 못할 저장소를 다뤄야 한다 | 가상머신 또는 Claude Code 웹 |
| 팀 전체가 통일된 격리 환경을 써야 한다 | 개발 컨테이너 |
| 내 컴퓨터에 아무것도 설치 안 하고 싶다 | Claude Code 웹 (구독 + GitHub 필요) |

---

## 방법 1: 🔒 샌드박스 Bash 도구

### 뭔가요?

가장 간단한 방법이에요. `/sandbox` 명령어 하나로 **Bash 명령어의 파일·네트워크 접근을 제한**해요.

```bash
> /sandbox     # 활성화
```

또는 실행 시 켜기:
```bash
claude --sandbox
```

### 어떻게 작동하나요?

- macOS: 운영체제 내장 Seatbelt 샌드박스 활용
- Linux/WSL2: bubblewrap(버블랩) 활용
- 기본적으로 **작업 디렉토리 쓰기는 허용**, 새 네트워크 도메인은 첫 번째 시도에서 확인 요청

### ⚠️ 한계

Bash만 격리돼요. 파일 읽기/쓰기 도구, MCP 서버, 훅은 여전히 자유롭게 실행돼요.

- ✅ 일상 작업의 안전망으로 적합
- ❌ `--dangerously-skip-permissions`와 함께 쓰기엔 부족 (MCP·훅이 격리 안 됨)

---

## 방법 2: 🛡️ 샌드박스 런타임 (베타)

### 뭔가요?

**Claude Code 전체 프로세스**를 격리해요. 파일 도구, MCP 서버, 훅까지 모두 격리 범위 안에 들어와요. Docker 없이 작동하고, 샌드박스 Bash 도구와 같은 OS 기술(Seatbelt, bubblewrap)을 사용해요.

```bash
# 설치 없이 바로 실행
npx @anthropic-ai/sandbox-runtime claude
```

### 설정

`~/.srt-settings.json` 파일을 먼저 만들어서 허용 경로와 네트워크를 지정해야 해요:

```json
{
  "allowWrite": [
    "~/내프로젝트",
    "~/.claude",
    "~/.claude.json"
  ],
  "allowNetwork": [
    "api.anthropic.com"
  ]
}
```

기본값이 **전부 차단**이라서 필요한 경로와 도메인을 명시적으로 허용해야 해요.

> ⚠️ 베타(Beta) 단계예요. 설정 형식이 바뀔 수 있어요.

---

## 방법 3: 📦 개발 컨테이너 (Dev Container)

### 뭔가요?

VS Code 등 에디터가 **Docker 컨테이너 안에서** Claude Code를 실행해요. 내 프로젝트 폴더가 컨테이너 안에 마운트되고, 컨테이너 밖 시스템에는 영향이 없어요.

### 특징

- 네트워크 방화벽 기본 설정 포함 (외부 차단, 허용 목록만 통과)
- `--dangerously-skip-permissions` 써도 안전한 환경 구성 가능
- 프로젝트 저장소에 `.devcontainer/` 폴더 추가로 팀 전체 공유 가능

### 사용법

Anthropic이 공개한 예제 devcontainer를 가져다 쓰거나, 직접 구성할 수 있어요. 자세한 내용은 [공식 개발 컨테이너 문서](https://code.claude.com/docs/en/devcontainer)를 참고하세요.

---

## 방법 4: 🐳 커스텀 컨테이너

### 뭔가요?

회사가 기존에 쓰는 Docker/OCI 이미지 안에서 Claude Code를 실행하는 방법이에요. 기존 CI 파이프라인이나 컨테이너 인프라를 그대로 활용할 수 있어요.

### 고려사항

- 어떤 경로가 컨테이너 안에 마운트되는지 (쓰기 가능 범위)
- 컨테이너 안에서 접근 가능한 자격증명·API 키
- 네트워크 나가는 트래픽(egress) 정책

> 💡 컨테이너 안에서 샌드박스 Bash 도구를 추가로 켜면 이중 격리가 가능해요. 단, 권한 없는 컨테이너에서는 중첩 샌드박스 설정이 필요해요.

---

## 방법 5: 💻 가상머신 (Virtual Machine)

### 뭔가요?

별도의 가상 컴퓨터에서 Claude Code를 실행해요. 커널과 가상 하드웨어까지 분리돼서 **가장 강력한 격리**예요.

### 언제 필요한가요?

- 신뢰할 수 없는 코드를 평가할 때
- 보안 정책상 커널 수준 분리가 필요할 때
- 컴플라이언스(Compliance) 요구사항

사용 옵션:
- 클라우드 인스턴스 (AWS EC2, GCP 등)
- 로컬 하이퍼바이저 (VMware, VirtualBox 등)
- 마이크로VM (Firecracker, Docker Desktop Sandboxes 등)

---

## 방법 6: ☁️ Claude Code 웹

### 뭔가요?

별도 설치·설정 없이 **Anthropic이 관리하는 VM에서 실행**되는 방법이에요. 브라우저에서 접속해서 GitHub 저장소를 연결하면 돼요.

### 특징

- 세션마다 격리된 가상머신
- Anthropic의 네트워크 프록시로 허용 목록 외 외부 접근 차단
- GitHub 토큰이 VM 밖에 별도 보관 (보안 강화)
- 인프라 설정 없이 VM 격리 효과

### 필요 조건

- Claude Pro, Max, Team, Enterprise 구독
- GitHub 계정 연결

---

## 격리와 권한 모드의 관계

> 🔑 **핵심 원칙**: 권한 모드는 "어떤 행동을 할지"를 결정하고, 격리는 "그 행동이 어디까지 영향을 미치는지"를 결정해요.

| 상황 | 필요한 격리 수준 |
|---|---|
| `--dangerously-skip-permissions` | 필수! 컨테이너, VM, 또는 샌드박스 런타임 |
| Auto mode (자동 모드) | 권장 (필수는 아님) |
| 일반 대화 모드 | 샌드박스 Bash 도구면 충분 |
| 신뢰 못할 저장소 | VM 또는 Claude Code 웹 |

---

## 조직 전체에 격리 강제하기

| 방법 | 강제 가능 여부 |
|---|---|
| 샌드박스 Bash 도구 | ✅ 관리형 설정으로 강제 가능 |
| 개발 컨테이너 | ⚠️ 저장소 배포로 표준화 가능 (강제는 MDM 필요) |
| 커스텀 컨테이너·VM | ⚠️ 승인된 이미지로만 설치하도록 MDM 필요 |

샌드박스 Bash 도구를 조직 전체에 강제하려면 managed settings에 sandbox 설정을 배포하세요 → [공식 샌드박싱 문서](https://code.claude.com/docs/en/sandboxing#enforce-sandboxing-with-managed-settings) 참고

---

## 중요한 주의사항

격리해도 아래 위험은 완전히 사라지지 않아요:

- ✅ 격리 범위 안의 파일 변경은 여전히 가능
- ✅ 네트워크 허용된 경우 데이터 외부 전송 가능
- ✅ Claude가 읽은 내용은 여전히 API로 전송됨

> 격리는 피해 범위를 줄이는 것이지, 모든 위험을 없애는 게 아니에요.

---

## 더 알아보기

- [공식 sandbox-environments 문서](https://code.claude.com/docs/en/sandbox-environments)
- [샌드박스 Bash 도구 기본 가이드](/docs/advanced/sandbox-security)
- [개발 컨테이너 상세](https://code.claude.com/docs/en/devcontainer)
- [권한 모드 비교](/docs/advanced/permission-modes)
- [Claude Code 웹 사용법](/docs/codeweb)
