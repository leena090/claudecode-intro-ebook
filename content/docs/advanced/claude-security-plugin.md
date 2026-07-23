---
title: "[공] Claude Security 플러그인 — 코드 취약점을 AI 팀이 잡아준다"
description: "/claude-security 명령어 하나로 여러 Claude 에이전트가 내 코드베이스를 훑으며 보안 취약점을 찾고, 패치까지 제안해요"
tags: ["고급", "보안", "security", "플러그인", "plugin", "취약점", "vulnerability", "멀티에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-07-23"
---

<div class="note-star">
★ <strong>[공]</strong> — <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> 공식 문서 기준<br />
★ <strong>필수 버전</strong>: Claude Code v2.1.154 이상 + 유료 플랜 (Pro/Max/Team/Enterprise)<br />
★ <strong>새 기능</strong>: 2026-07 llms.txt에 신규 등재. Dynamic workflows를 활용한 멀티 에이전트 보안 스캔.
</div>

## 이게 뭔가요?

코드를 짜다 보면 **보안 취약점**(시큐리티 벌너러빌리티, security vulnerability)이 슬그머니 끼어들어요. XSS, SQL 인젝션, 인증 허점…

기존에는 개발자가 직접 코드 한 줄 한 줄을 살피거나 별도 보안 스캐너 도구를 써야 했어요. **Claude Security 플러그인**(클로드 시큐리티 플러그인)은 달라요. **여러 Claude 에이전트가 한 팀**처럼 내 코드베이스를 나눠 분석하고, 위험한 곳을 발견하면 패치(수정 파일)까지 만들어줘요.

> 🔍 **비유로 설명하면**: 혼자 내 집 전체 배관을 점검하는 게 아니라, 배관공 4명이 각자 화장실·주방·지하실·다락을 동시에 살피고 결과 보고서를 한 장으로 합쳐주는 것과 같아요. 혼자보다 훨씬 빠르고 꼼꼼하죠.

---

## 준비물

| 항목 | 최소 요건 |
|---|---|
| Claude Code 버전 | v2.1.154 이상 |
| 요금제 | 유료 플랜 (Pro·Max·Team·Enterprise) |
| Dynamic workflows | Pro 플랜이면 `/config`에서 직접 켜기 |
| Python | 3.9.6 이상 (`python3 --version`으로 확인) |
| Git | 변경분 스캔·패치 적용 시 필요 |
| OS | macOS·Linux·Windows 모두 OK |

> 🍱 **비유로 설명하면**: Python은 이 플러그인이 보조 도구로 쓰는 "계산기" 역할이에요. 별도로 설치할 것은 없고, 계산기가 이미 있는지만 확인하면 돼요.

---

## 설치하기

Claude Code 세션 안에서 아래 명령어를 실행해요:

```
/plugin install claude-security@claude-plugins-official
```

> 💡 마켓플레이스를 못 찾는다는 오류가 나오면:
> ```
> /plugin marketplace add anthropics/claude-plugins-official
> ```
> 위 명령을 먼저 실행한 다음 다시 설치해 보세요.

설치가 끝나면 현재 세션에 반영하기:

```
/reload-plugins
```

이 명령어는 **재시작 없이** 플러그인을 바로 활성화해요.

---

## 사용하기 — 스캔 → 리포트 → 패치

### 기본 흐름 (5단계)

**1단계 — 메뉴 열기**
```
/claude-security
```
→ "코드베이스 스캔", "변경분 스캔", "패치 제안" 세 가지 메뉴가 나타나요.

**2단계 — 스캔 범위 선택**

전체 저장소를 스캔할지, 특정 폴더(예: API 레이어)만 스캔할지 선택해요. 파일 수와 예상 비용도 미리 알려줘요.

**3단계 — 실행 확인**

스캔은 시간이 걸리고 토큰을 소비해요. 확인을 눌러야 실제로 시작돼요.

**4단계 — 리포트 확인**

스캔이 끝나면 저장소 안에 타임스탬프 폴더가 생겨요:

```
CLAUDE-SECURITY-20260723-143021/
├── CLAUDE-SECURITY-RESULTS.md    ← 사람이 읽는 보고서
├── CLAUDE-SECURITY-RESULTS.jsonl ← 기계가 읽는 데이터
└── CLAUDE-SECURITY-REVISION-abc1234.json  ← 어떤 커밋 기준으로 스캔했는지
```

`RESULTS.md`에는 각 취약점마다 **ID(F1, F2…)**, 심각도, 악용 시나리오, 권고 조치가 적혀있어요.

> 💡 이 폴더에는 `.gitignore`가 자동으로 들어있어요. 실수로 `git add .`를 해도 커밋에 포함되지 않아요. (감사 목적으로 남기고 싶으면 `.gitignore`를 삭제하면 돼요.)

**5단계 — 패치 받아서 적용**

```
/claude-security  → "패치 제안" 선택
```

→ 고칠 취약점을 고르면, 독립적인 검토 에이전트가 패치를 검토한 뒤 `patches/` 폴더에 `.patch` 파일로 저장돼요.

```bash
git apply CLAUDE-SECURITY-20260723-143021/patches/F1.patch
```

> ⚠️ **패치는 절대 자동으로 적용되지 않아요.** 항상 직접 명령어를 실행해야 해요. 각 패치를 별도 PR(풀 리퀘스트)로 올려서 리뷰하는 것을 권장해요.

---

## 스캔 범위 조절하기

| 상황 | 명령 |
|---|---|
| 전체 코드베이스 | `/claude-security` → "코드베이스 스캔" |
| 현재 브랜치 변경분만 | `/claude-security` → "변경분 스캔" |
| 특정 커밋만 | `"scan commit abc1234"` 라고 말로 요청 |
| 오픈 PR 스캔 | `"scan my pull request"` 라고 요청 (GitHub CLI 필요) |
| 대용량 저장소 | 폴더 단위로 나눠서 여러 번 스캔 |

> 🍱 **비유로 설명하면**: 집 전체 대청소를 한 번에 할 수도 있고, 오늘은 주방만, 내일은 거실만 순서대로 할 수도 있어요.

---

## 다른 보안 도구와의 관계

Claude Code에는 보안 관련 도구가 여러 층으로 쌓여 있어요:

| 단계 | 도구 | 역할 |
|---|---|---|
| 코드 작성 중 | Security guidance 플러그인 | 쓰는 즉시 취약점 경고 |
| 온디맨드 단순 | `/security-review` 명령 | 브랜치 한 번 훑기 |
| 온디맨드 심층 | **Claude Security 플러그인** ← 이 문서 | 멀티 에이전트 심층 스캔 + 패치 |
| PR 리뷰 시 | Code Review (Team/Enterprise) | PR 단위 멀티 에이전트 검토 |
| 상시 관리형 | Claude Security 제품 (Enterprise) | 저장소 연결해서 자동 모니터링 |
| CI 파이프라인 | 기존 정적 분석 도구 | 언어별 규칙 + 의존성 체크 |

> 💡 이 플러그인은 기존 도구를 **대체하는 게 아니라 보완**해요. 인간 보안 연구자처럼 코드를 "추론"하는 반면, 기존 도구는 정해진 규칙을 체크해요.

---

## 주의사항

- **Fable 5를 쓸 때**: 사이버보안 관련 내용을 처리하다 보면 Fable 5의 안전 분류기가 일부 작업을 차단하고 Opus로 자동 전환될 수 있어요. 예상된 동작이며 스캔은 계속 완료돼요.
- **스캔은 비결정론적이에요**: 같은 코드를 두 번 스캔해도 다른 취약점이 나올 수 있어요. 정기적으로 반복 실행하는 것을 권장해요.
- **변경분 스캔은 커밋된 코드만**: 작업 중인 파일은 먼저 커밋하거나 스태시(stash)해야 스캔에 포함돼요.

---

## 관련 문서

- [공식 문서 — Claude Security 플러그인](https://code.claude.com/docs/en/claude-security)
- [Claude Security 관리형 서비스 (Enterprise)](https://claude.com/product/claude-security)
- [플러그인 마켓플레이스 사용법](content/docs/advanced/plugin-marketplace.md)
- [Dynamic workflows 이해하기](content/docs/advanced/dynamic-workflows.md)
