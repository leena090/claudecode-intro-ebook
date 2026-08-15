---
title: "[공] Claude Security 플러그인 — 코드베이스 취약점 자동 스캔"
description: "멀티 에이전트가 코드베이스 전체를 스캔해 보안 취약점을 찾고, 독립 검증 후 패치까지 제안하는 공식 플러그인. /claude-security 명령으로 실행"
tags: ["자동생성", "보안", "취약점", "플러그인", "멀티에이전트", "코드리뷰", "claude-security", "2026-07-20"]
category: "advanced"
order: 25
lastUpdated: "2026-08-15"
---

<div class="note-star">
★ <strong>[공] 공식 Anthropic 플러그인</strong> — Anthropic 공식 마켓플레이스에서 설치합니다.<br />
★ <strong>Dynamic Workflows 필요</strong> — Pro 플랜은 <code>/config</code>에서 미리 활성화하세요.<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">claude-security</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w30">What's New W30</a>
</div>

## Claude Security 플러그인이 뭔가요?

**멀티 에이전트(여러 AI)가 팀을 이뤄 내 코드베이스에서 보안 취약점을 찾아주는 공식 플러그인**입니다. 2026년 7월 Week 30에 공식 출시됐어요.

> 🔍 **비유로 설명하면**: 건물 안전 점검을 할 때 한 명이 전체를 훑는 것보다, **팀을 구성해서 역할을 나누는 것**이 더 꼼꼼하죠. 한 명은 건물 구조 파악(아키텍처 매핑), 한 명은 위협 모델 작성, 한 명은 취약점 수색, 마지막 한 명은 발견된 것을 **독립적으로 재검증**합니다. 이 팀 전체가 AI예요.

---

## 보안 도구 비교: 어떤 걸 언제 쓰나요?

| 단계 | 도구 | 대상 |
|---|---|---|
| 코딩 중 | Security guidance 플러그인 | Claude가 쓰는 코드의 즉각적 취약점 |
| 브랜치 단발 검토 | `/security-review` 명령 | 현재 브랜치 1회 패스 |
| **심층 스캔** | **Claude Security 플러그인** | **저장소 전체 or 변경 diff** |
| PR 리뷰 시 | Code Review | 풀 리퀘스트 기반 멀티에이전트 리뷰 |
| 관리형 서비스 | Claude Security 제품 (Enterprise) | 연결된 저장소 상시 모니터링 |

---

## 설치 방법

Claude Code 세션에서:

```text
/plugin install claude-security@claude-plugins-official
```

설치 후 "Run /reload-plugins to activate." 메시지가 뜨면:

```text
/reload-plugins
```

> ℹ️ `"Marketplace "claude-plugins-official" not found"` 오류가 나면:
> ```text
> /plugin marketplace add anthropics/claude-plugins-official
> ```
> 실행 후 다시 설치하세요.

---

## 사용 방법

```text
/claude-security
```

메뉴가 열리면 3가지 작업 중 선택:

1. **Scan codebase** — 전체 저장소 스캔
2. **Scan changes** — 브랜치 diff·PR·특정 커밋 스캔
3. **Suggest patches** — 발견된 취약점에 패치 제안

### 💡 스캔 흐름 (6단계)

```
1. /claude-security 실행 → "Scan codebase" 선택
      ↓
2. 스캔 범위 선택 (전체 or 특정 영역)
      ↓
3. 확인 (토큰 소비량 안내 후 진행)
      ↓
4. 스캔 실행 중 (진행 상황은 /workflows 에서 확인)
      ↓
5. CLAUDE-SECURITY-<날짜>/ 폴더에 리포트 생성
      ↓
6. /claude-security → "Suggest patches"로 패치 생성
```

---

## 스캔 결과물

결과는 `CLAUDE-SECURITY-<timestamp>/` 폴더에 저장됩니다:

| 파일 | 내용 |
|---|---|
| `CLAUDE-SECURITY-RESULTS.md` | 취약점 리포트 (ID, 영향도, 시나리오, 심각도) |
| `CLAUDE-SECURITY-RESULTS.jsonl` | 기계 판독용 JSON 형식 |
| `CLAUDE-SECURITY-REVISION-<커밋>.json` | 어느 커밋 기준으로 스캔했는지 기록 |
| `patches/F1.patch`, `F2.patch`... | 취약점별 패치 파일 |

> 📁 **참고**: 이 폴더는 `.gitignore`가 자동 생성되어 실수로 커밋되지 않아요. 감사(audit) 목적으로 보관하려면 `.gitignore`를 삭제하고 커밋하면 됩니다.

---

## 패치 적용

패치는 **절대 자동 적용되지 않아요**. 내가 직접 선택해서 적용합니다:

```bash
git apply CLAUDE-SECURITY-<timestamp>/patches/F1.patch
```

각 패치는 독립 검증 에이전트가 "이 변경이 하나의 취약점만 해결하고, 새 취약점을 만들지 않으며, 기존 동작을 바꾸지 않는다"고 확인한 것들만 제공됩니다. 확인이 안 된 케이스는 "패치 없음 + 이유 설명"으로 대신합니다.

---

## 사용 전 확인 사항

- **Python 3.9.6 이상** → `python3 --version`으로 확인
- **Dynamic Workflows 활성화** (Pro 플랜만 `/config`에서 켜야 함)
- **Auto 모드 권장** — 스캔 중 권한 확인 창이 덜 뜨도록
- **대용량 저장소** → 한 번에 전체 스캔 대신 영역별로 나눠서 진행

> ⚠️ **Fable 5 사용 시**: 사이버보안 분류기로 인해 일부 작업이 Opus로 자동 다운그레이드될 수 있습니다. 스캔은 정상 완료됩니다.

---

## 관련 문서

- [Claude Security 공식 문서](https://code.claude.com/docs/en/claude-security)
- [플러그인 설치 방법](https://code.claude.com/docs/en/discover-plugins)
- [Security guidance 플러그인](https://code.claude.com/docs/en/security-guidance) — 코딩 중 실시간 보안 안내
