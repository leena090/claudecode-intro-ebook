---
title: "[공] Claude Security 플러그인 — 코드 취약점을 AI가 자동으로 찾아주는 도구"
description: "Claude Security 플러그인을 설치하면 코드베이스 전체를 AI 에이전트 팀이 보안 취약점 시각으로 훑어봐요. 발견된 문제는 패치(수정 코드)까지 제안해 줍니다"
tags: ["자동생성", "보안", "Security", "플러그인", "취약점", "claude-security"]
category: "advanced"
order: 24
lastUpdated: "2026-07-26"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> (신규 문서, 2026-07-26 확인)
<br />★ <strong>요구사항</strong>: Claude Code v2.1.154 이상 · Python 3.9.6 이상 · 유료 플랜(Pro/Max/Team)
</div>

## Claude Security 플러그인이 뭔가요?

**Claude Security 플러그인**은 내 코드 저장소(repository, 레포지토리)를 **AI 에이전트 팀이 보안 전문가처럼 훑어보며 취약점(vulnerability, 취약점)을 찾아주는 도구**예요.

> 🔍 **비유로 설명하면**: 집 보안을 위해 경비 회사 직원 여럿이 건물을 돌아다니며 잠기지 않은 창문, 낡은 자물쇠, 비상구 문제를 하나씩 점검해 주는 것과 같아요. 혼자 찾으면 놓치기 쉬운 구석구석을 팀이 함께 찾아줍니다.

**어떻게 작동하나요?**
1. 여러 Claude 에이전트가 팀을 이뤄 코드 구조를 파악하고
2. 위협 모델(어떤 방식으로 공격받을 수 있는지)을 만들고
3. 취약점을 찾아내고
4. 서로 독립적으로 검증한 뒤 보고서를 작성해요

---

## 설치 방법

### 1단계: 마켓플레이스에서 설치

Claude Code 세션에서 아래 명령어를 입력하세요:

```text
/plugin install claude-security@claude-plugins-official
```

> ⚠️ "마켓플레이스를 찾을 수 없다"는 오류가 나면 먼저:
> ```text
> /plugin marketplace add anthropics/claude-plugins-official
> ```
> 를 실행한 뒤 다시 설치하세요.

### 2단계: 플러그인 활성화

```text
/reload-plugins
```

이걸 실행하면 재시작 없이 플러그인이 바로 활성화됩니다.

---

## 스캔 시작하기

### 기본 사용법 — 메뉴로 시작

```text
/claude-security
```

위 명령어를 치면 3가지 메뉴가 나와요:

| 메뉴 | 설명 |
|---|---|
| **Scan codebase** | 전체 저장소 스캔 |
| **Scan changes** | 특정 브랜치·커밋 변경사항만 스캔 |
| **Suggest patches** | 이미 찾은 취약점에 패치 제안 |

### 자연어로도 됩니다

```text
"내 브랜치의 변경사항만 스캔해줘"
"commit abc1234 스캔해줘"
```

---

## 스캔 결과 읽기

스캔이 끝나면 저장소 안에 **타임스탬프 폴더**가 생겨요:

```
CLAUDE-SECURITY-2026-07-26T10-30-00/
├── CLAUDE-SECURITY-RESULTS.md      ← 사람이 읽는 보고서
├── CLAUDE-SECURITY-RESULTS.jsonl   ← 기계가 읽는 보고서
└── CLAUDE-SECURITY-REVISION-abc1234.json  ← 어느 커밋 기준인지 기록
```

보고서 예시:

```markdown
## F1 — SQL 인젝션 위험
- 심각도: High
- 위치: src/db/query.js:42
- 설명: 사용자 입력이 직접 쿼리에 삽입됨
- 권장사항: 파라미터화된 쿼리 사용 필요
```

> 💡 이 폴더에는 `.gitignore`가 자동으로 포함돼 있어서, 실수로 `git add`해도 저장소에 올라가지 않아요.

---

## 취약점 패치하기

### 패치 제안 요청

```text
/claude-security  →  Suggest patches 선택
```

또는:

```text
"F1 취약점 수정해줘"
```

### 패치 적용

패치는 `patches/` 폴더에 저장돼요. **자동 적용은 절대 안 됩니다** — 반드시 직접 확인하고 적용해야 해요.

```bash
git apply CLAUDE-SECURITY-2026-07-26T10-30-00/patches/F1.patch
```

> ✅ 각 패치는 독립적인 에이전트가 검토한 후에야 제공돼요. "이게 정말 문제를 해결하는지", "새로운 취약점을 만들지 않는지"를 확인한 패치만 제공됩니다.

---

## 다른 보안 도구와의 차이

Claude Code에는 여러 보안 관련 기능이 있어요:

| 도구 | 언제 사용 | 특징 |
|---|---|---|
| **Security guidance plugin** | Claude가 코드 쓸 때 자동 | 작성 중 실시간 체크 |
| **`/security-review`** | 현재 브랜치 빠른 점검 | 1회 단일 패스 |
| **Claude Security 플러그인** | 깊은 스캔 필요할 때 | 멀티 에이전트, 가장 꼼꼼 |
| **Code Review** | PR 제출 시 | Team/Enterprise 전용 |
| **Claude Security 제품** | 자동 모니터링 | Enterprise 전용 유료 서비스 |

---

## 요구사항 확인

시작 전에 아래를 확인하세요:

```bash
# Claude Code 버전 확인 (v2.1.154 이상 필요)
claude --version

# Python 버전 확인 (3.9.6 이상 필요)
python3 --version
```

- ✅ macOS, Linux, Windows 모두 지원
- ✅ Git 저장소에서 더 많은 기능 사용 가능 (변경사항 스캔, 패치 등)
- ✅ Git 없는 디렉터리도 전체 스캔은 가능

---

## 자주 묻는 질문

**Q: 스캔에 얼마나 걸리나요?**
저장소 크기에 따라 다르지만, 대형 저장소는 수십 분이 걸릴 수 있어요. 스캔 중에 Claude Code 창을 닫으면 안 돼요.

**Q: 비용이 얼마나 드나요?**
스캔은 **플랜 사용량(usage limits)**에서 차감돼요. 대형 저장소는 상당한 토큰을 사용할 수 있으니, 먼저 작은 범위로 테스트해보세요.

**Q: "Fable 5의 보안 필터에 걸렸어요"라고 나와요**
Fable 5는 사이버보안 관련 작업에 엄격한 필터가 있어요. 이 경우 자동으로 Opus로 전환되고 스캔은 계속 진행됩니다 — 정상적인 동작이에요.

---

## 관련 문서

- [보안 설정 기초](/docs/config/permissions-guide): 권한 모드와 자동 승인 설정
- [플러그인 사용법](/docs/cowork/cowork-plugins): 플러그인 설치·관리 전반
