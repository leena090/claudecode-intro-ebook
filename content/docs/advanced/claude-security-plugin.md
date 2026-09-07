---
title: "[공] Claude Security 플러그인 — 내 코드베이스 취약점 자동 스캔"
description: "멀티에이전트 보안 스캔 플러그인으로 코드 취약점을 찾고 검토된 패치를 받는 방법. /claude-security 명령어 사용법 완전 가이드"
tags: ["자동생성", "보안", "Claude Security", "플러그인", "취약점", "멀티에이전트", "DevSecOps"]
category: "advanced"
order: 10
lastUpdated: "2026-09-07"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> (2026-07-24 출시)
<br />★ W30 업데이트 함께 출시 — <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a>
</div>

## Claude Security 플러그인이란?

Claude Code 세션 안에서 **멀티에이전트 취약점 스캔**을 실행하는 공식 플러그인이에요.

> 🕵️ **비유로 설명하면**: 보안 전문가 팀이 각자 다른 역할을 맡아 동시에 내 코드를 검토하는 것과 같아요. 한 에이전트가 "이게 취약점인 것 같은데?"라고 하면, **독립적인 다른 에이전트가 다시 검증**해서 오탐지를 줄여요. 그냥 경보만 울리는 게 아니라 **패치 파일까지 만들어줘요**.

---

## 스캔 단계 (내부 동작 방식)

```
① 코드 아키텍처 맵핑 (구조 파악)
         ↓
② 위협 모델 생성 (어떤 공격이 가능한지)
         ↓
③ 취약점 탐색 (실제 취약한 코드 찾기)
         ↓
④ 독립 검증 에이전트가 모든 발견 사항 재검토
         ↓
⑤ 보고서 작성 + 패치 제안
```

---

## 사전 조건

| 항목 | 요구사항 |
|---|---|
| 플랜 | **유료 플랜** (Dynamic Workflows 필요) |
| Python | 3.9 이상 (`python3 --version` 확인) |
| OS | Linux, macOS, Windows |
| Dynamic Workflows | Pro 플랜: `/config`에서 활성화 필요 |

---

## 설치 및 시작

```bash
# 1. 공식 Anthropic 마켓플레이스에서 설치
/plugin install claude-security@claude-plugins-official

# 2. 현재 세션에 활성화
/reload-plugins

# 3. 스캔 시작
/claude-security
```

**설치 실패 시 해결:**
- `Marketplace "claude-plugins-official" not found` 오류 시:
  ```bash
  /plugin marketplace add anthropics/claude-plugins-official
  # 그 다음 다시 설치
  ```

---

## 스캔 방법

### 전체 저장소 스캔

```bash
# /claude-security 메뉴 → Scan codebase → 전체 저장소 선택
/claude-security
```

### 변경 사항만 스캔 (브랜치 diff)

```bash
# 브랜치의 변경 내용만 검사
> scan my branch

# 특정 커밋만 검사
> scan commit abc1234

# PR diff 스캔 (gh 인증 필요)
> /claude-security
# → 메뉴에서 PR 선택
```

> 💡 **팁**: PR을 머지하기 전에 변경 사항만 스캔하면 빠르고 효율적이에요.

---

## 결과물 파일 구조

스캔 완료 후 저장소 안에 `CLAUDE-SECURITY-<timestamp>/` 폴더가 생성돼요:

```
CLAUDE-SECURITY-2026-09-07T14-30-00/
├── CLAUDE-SECURITY-RESULTS.md       # 📄 사람이 읽는 취약점 보고서
├── CLAUDE-SECURITY-RESULTS.jsonl    # 🤖 머신 파싱용 JSON Lines
├── CLAUDE-SECURITY-RESULTS.sarif    # 🔗 GitHub 코드 스캐닝 연동용
├── CLAUDE-SECURITY-REVISION-abc1234.json  # 📌 어떤 커밋 스캔했는지 기록
└── patches/
    ├── F1.patch   # 취약점 #1 패치
    └── F2.patch   # 취약점 #2 패치
```

> 📂 해당 폴더에 `.gitignore`가 자동 포함돼 실수로 커밋에 포함되지 않아요. 의도적으로 커밋하려면 `.gitignore` 파일을 삭제하세요.

---

## 패치 적용 방법

패치는 **절대 자동 적용되지 않아요**. 반드시 직접 검토 후 적용하세요.

```bash
# 방법 1: 직접 적용
git apply CLAUDE-SECURITY-2026-09-07T14-30-00/patches/F1.patch

# 방법 2: Claude에게 요청
> apply patch F1 and open a pull request
```

**패치 품질 보장 과정:**
- 패치를 작성한 에이전트와 **독립적인 검증 에이전트**가 재검토
- 기존 테스트가 있으면 테스트 통과 여부 확인
- 새로운 취약점 도입 여부 검토
- 위 3가지를 보장할 수 없으면 패치 대신 **사유 설명**을 반환

---

## 다른 보안 도구와의 관계

| 단계 | 도구 | 역할 |
|---|---|---|
| 코드 작성 중 | 보안 가이던스 플러그인 | Claude가 쓰는 코드 실시간 검토 |
| 브랜치 단위 | `/security-review` | 단일 패스 보안 검토 |
| 심층 스캔 | **Claude Security 플러그인** | 멀티에이전트 전체 스캔 + 독립 검증 |
| PR 리뷰 시 | Code Review | 코드 정확성 + 보안 리뷰 |
| 상시 모니터링 | Claude Security (관리형, Enterprise) | 연결된 저장소 지속 스캔 |
| CI에서 | 기존 SAST/SCA 도구 | 언어별 정적 분석 |

---

## 주의사항

- **Fable 5 모델 사용 시**: "Fable 5.1's safeguards flagged this message" 메시지가 뜰 수 있어요 — 사이버보안 안전 분류기 때문이며, Opus로 자동 다운그레이드 후 스캔은 정상 완료돼요
- 스캔은 **비결정적**(nondeterministic): 같은 코드라도 두 번 스캔하면 다른 취약점이 나올 수 있어요 → 정기적으로 스캔 권장
- 대형 저장소는 **한 영역씩 분할 스캔** 권장 (API 레이어, 인증 코드 등)

---

## 📚 관련 문서

- [공식 Claude Security 플러그인 가이드](https://code.claude.com/docs/en/claude-security)
- [보안 가이던스 플러그인](https://code.claude.com/docs/en/security-guidance) — 코드 작성 중 실시간 검토
- [Code Review](https://code.claude.com/docs/en/code-review) — PR 리뷰 자동화
- [Dynamic Workflows](https://code.claude.com/docs/en/workflows) — 멀티에이전트 병렬 실행
