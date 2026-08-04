---
title: "[공] Claude Security 플러그인 — AI가 보안 취약점을 직접 찾아 패치까지"
description: "멀티 에이전트 보안 스캔 플러그인. 코드베이스 전체 또는 변경된 코드만 스캔해 취약점을 찾고, 검수된 패치까지 제안해줍니다 (v2.1.154+)"
tags: ["자동생성", "보안", "security", "취약점", "플러그인", "멀티에이전트", "claude-security", "v2.1.154"]
category: "advanced"
order: 27
lastUpdated: "2026-08-04"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a>
<br />★ Claude Code <strong>v2.1.154</strong> 이상 + Python 3.9.6 이상 필요
<br />★ Pro 플랜에서는 Dynamic workflows를 <code>/config</code>에서 먼저 켜야 합니다
</div>

## Claude Security 플러그인이란?

**여러 Claude 에이전트가 팀을 이뤄 내 코드를 보안 전문가처럼 분석하는 공식 플러그인**이에요.

> 🔍 **비유로 설명하면**: 혼자서 내 집을 점검하는 것과, 여러 명의 보안 전문가팀이 집 구석구석을 나눠서 체크하는 것의 차이예요. 한 에이전트는 건물 구조(아키텍처)를 파악하고, 다른 에이전트는 위협 모델을 만들고, 또 다른 에이전트는 취약점을 찾고, 마지막 에이전트가 **독립적으로 검토**해서 확인된 것만 보고서에 올려요.

---

## 일반 보안 도구와 차이점

| 도구 | 용도 | 특징 |
|---|---|---|
| `/security-review` | 현재 브랜치 1회 빠른 검토 | 단일 패스, 간단한 점검 |
| Security guidance 플러그인 | 코드 작성 중 실시간 체크 | Claude가 쓸 때 바로 잡아줌 |
| **Claude Security 플러그인** | **전체 또는 변경 코드 심층 스캔** | 멀티 에이전트, 독립 검증, 패치 생성 |
| Code Review (Team/Enterprise) | PR 단위 리뷰 | 전체 컨텍스트 포함 |
| Claude Security 제품 (Enterprise) | 연결된 리포 지속 모니터링 | 관리형 서비스 |

---

## 설치하기

Claude Code 세션 안에서 공식 마켓플레이스에서 설치해요.

```bash
# 세션 안에서 입력
/plugin install claude-security@claude-plugins-official
```

설치 후 이 메시지가 보이면:
```
Run /reload-plugins to activate.
```

바로 실행하세요:
```bash
/reload-plugins
```

<div class="note-star">
★ 마켓플레이스가 없다는 오류가 뜨면:<br />
<code>/plugin marketplace add anthropics/claude-plugins-official</code><br />
을 먼저 실행하고 다시 설치하세요.
</div>

---

## 사용 방법 — 3단계

### 1단계: 스캔 실행

```bash
/claude-security
# → 메뉴가 열립니다
# → "Scan codebase" 선택
```

플러그인이 먼저 리포를 파악한 뒤, **전체 스캔**이나 **특정 영역 집중 스캔** 중 선택지를 줘요.

> 💡 PR이나 브랜치 차이(diff)만 스캔할 수도 있어요:
> ```
> /claude-security scan my branch
> ```
> 또는 자연어로:
> ```
> 커밋 abc1234를 스캔해줘
> ```

### 2단계: 보고서 읽기

스캔이 완료되면 리포 안에 타임스탬프가 붙은 폴더가 생겨요:

```
CLAUDE-SECURITY-20260804-143022/
  ├── CLAUDE-SECURITY-RESULTS.md      ← 보고서 (사람이 읽는 버전)
  ├── CLAUDE-SECURITY-RESULTS.jsonl   ← 기계 읽기용 (자동화에 활용)
  └── CLAUDE-SECURITY-REVISION-<커밋>.json  ← 어떤 코드를 스캔했는지 기록
```

보고서에는 각 취약점마다 **ID(F1, F2…), 영향 범위, 악용 시나리오, 심각도, 신뢰도, 권장 조치**가 담겨 있어요.

<div class="note-star">
★ 독립 검증 에이전트를 통과한 취약점만 보고서에 올라와요 → 허위 양성(false positive)이 적어요.<br />
★ 같은 코드를 두 번 스캔해도 결과가 다를 수 있어요(비결정적). 정기적으로 반복 실행을 권장해요.
</div>

### 3단계: 패치 적용

```bash
/claude-security
# → "Suggest patches" 선택
# → 수정할 취약점 F1, F3 등 선택
```

플러그인이 각 취약점에 대해 **다른 에이전트가 독립 검토한 패치 파일**을 만들어요:

```
CLAUDE-SECURITY-20260804-143022/
  └── patches/
        ├── F1.patch    ← F1 취약점 패치
        └── F3.patch    ← F3 취약점 패치
```

패치 적용은 항상 내가 직접:
```bash
git apply CLAUDE-SECURITY-20260804-143022/patches/F1.patch
```

> ⚠️ **패치는 절대 자동으로 적용되지 않아요.** 내가 확인하고 직접 `git apply`해야 합니다.

---

## 요구 사항 정리

| 항목 | 조건 |
|---|---|
| Claude Code 버전 | **v2.1.154** 이상 |
| Python | **3.9.6** 이상 (`python3 --version`으로 확인) |
| Dynamic workflows | **활성화 필요** (`/config`에서 켜기) |
| 플랜 | Pro 이상 (사용 한도 적용) |
| 운영체제 | macOS, Linux, Windows |
| 변경 사항 스캔 | Git 리포 필요 (`git apply` 사용) |

---

## 자주 묻는 것들

**Q. 스캔하는 데 얼마나 걸려요?**
> 코드베이스 크기에 따라 달라요. 큰 리포는 꽤 오래 걸리고 토큰도 많이 씁니다. 시작 전 확인 단계에서 예상 비용을 알려줘요.

**Q. Python 경고가 뜨면?**
> `python3`가 없거나 버전이 낮은 거예요. Python 3.9.6 이상을 설치하고 PATH에 추가하세요.

**Q. Fable 5를 쓰는데 "safeguards flagged" 메시지가 떠요?**
> Fable 5의 사이버보안 안전장치가 일부 작업을 차단하고 Opus로 자동 전환돼요. 정상이고, 스캔은 계속 완료됩니다.

**Q. 스캔 결과 파일이 git에 올라가나요?**
> 각 결과 폴더 안에 `.gitignore`가 자동 생성되어 `git add`로 실수로 올라가지 않아요. 감사 기록용으로 보존하고 싶다면 그 `.gitignore` 파일만 삭제하면 돼요.

---

## Enterprise 관리형 서비스와 차이

이 플러그인은 **내 세션에서 직접 실행**하는 온디맨드 스캐너예요.

별도의 [Claude Security](https://claude.com/product/claude-security) 제품(Enterprise 전용)은 **연결된 리포를 24시간 자동 모니터링**하는 관리형 서비스예요.

플러그인이 강한 점: GitLab, Bitbucket처럼 관리형 서비스가 닿을 수 없는 리포나 폐쇄망 환경도 스캔 가능해요.

---

## 관련 자료

- [보안 가이던스 플러그인](/docs/en/security-guidance) — 코드 작성 중 실시간 체크
- [Code Review](/docs/en/code-review) — PR 단위 멀티 에이전트 리뷰
- [동적 워크플로우(Dynamic Workflows)](/docs/en/workflows) — 멀티 에이전트 기반
- [플러그인 설치 방법](/docs/en/discover-plugins) — 공식 마켓플레이스 안내
