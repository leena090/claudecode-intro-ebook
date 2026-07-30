---
title: "[공] Claude Security 플러그인 — AI가 내 코드의 취약점을 직접 찾아줘요"
description: "Claude Security 플러그인은 멀티에이전트 취약점 스캐너예요. /claude-security 명령 하나로 코드베이스 전체를 훑고 패치까지 제안해줍니다"
tags: ["자동생성", "claude-security", "보안", "플러그인", "취약점", "멀티에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-07-30"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a>
<br />★ Claude Code v2.1.154 이상, 유료 플랜 필요 (Pro/Max/Team/Enterprise)
</div>

## Claude Security 플러그인이 뭔가요?

**Claude Security 플러그인**은 Claude Code 세션 안에서 코드베이스의 보안 취약점을 찾아주는 **멀티에이전트 스캐너**예요.

여러 개의 Claude 에이전트가 역할을 나눠서 일해요:
- 🗺️ **아키텍처 파악 에이전트** — 전체 구조 분석
- ⚠️ **위협 모델 에이전트** — 위험 요소 정의
- 🔍 **취약점 탐색 에이전트** — 실제 취약점 사냥
- ✅ **독립 검토 에이전트** — 발견된 취약점 재검증

> 🍱 **비유로 설명하면**: 혼자 방 전체를 청소하는 것보다 **4명이 역할 분담해서 청소**하는 것과 같아요. 한 명이 찾은 쓰레기를 다른 한 명이 "이거 진짜 쓰레기 맞아?" 확인하니까 오탐(false positive)도 줄어요.

---

## 설치하기

Claude Code 세션에서 아래 명령을 실행하면 돼요:

```
/plugin install claude-security@claude-plugins-official
```

설치 후 현재 세션에서 활성화:

```
/reload-plugins
```

<div class="note-star">
★ <strong>오류가 나면?</strong><br />
"Marketplace 'claude-plugins-official' not found" → 먼저 <code>/plugin marketplace add anthropics/claude-plugins-official</code> 실행 후 재시도
</div>

**사전 요건:**
- Claude Code v2.1.154 이상
- Python 3.9.6 이상 (`python3 --version`으로 확인)
- 유료 플랜 (Dynamic workflows 기능 필요)
- Pro 플랜이면 `/config`에서 Dynamic workflows 먼저 켜야 함

---

## 쓰는 법

설치하면 `/claude-security` 명령이 생겨요. 3가지 메뉴가 나와요:

| 메뉴 | 설명 |
|---|---|
| **Scan codebase** | 전체 코드베이스 스캔 |
| **Scan changes** | 현재 브랜치 변경 사항만 스캔 |
| **Suggest patches** | 발견된 취약점에 패치 제안 |

### 기본 사용 흐름

```
1. /claude-security → "Scan codebase" 선택
2. 스캔 범위 선택 (전체 또는 특정 영역)
3. 실행 확인 (토큰 소모 많음 — 꼭 확인하세요!)
4. 스캔 완료 후 CLAUDE-SECURITY-RESULTS.md 파일 확인
5. /claude-security → "Suggest patches" 선택
6. 수정할 취약점 선택
7. 생성된 패치 검토 후 git apply로 직접 적용
```

<div class="note-star">
★ <strong>중요</strong> — 패치는 절대 자동으로 적용되지 않아요. 반드시 직접 검토 후 <code>git apply</code>로 적용해야 해요.
</div>

---

## 결과 파일은 어디에 저장되나요?

스캔을 실행하면 타임스탬프가 붙은 폴더가 생겨요:

```
CLAUDE-SECURITY-2026-07-30T14:32:00/
├── CLAUDE-SECURITY-RESULTS.md       # 취약점 리포트 (F1, F2... 번호로 관리)
├── CLAUDE-SECURITY-RESULTS.jsonl    # 기계 가독 형식
├── CLAUDE-SECURITY-REVISION-<해시>.json  # 스캔 시점 코드 정보
└── patches/
    ├── F1.patch                     # 취약점 F1 패치
    └── F2.patch                     # 취약점 F2 패치
```

> 🍱 **비유로 설명하면**: 의사가 건강검진 결과지를 날짜별로 보관해주는 것처럼, 스캔 결과도 언제 어떤 코드를 검사했는지 **기록으로 남겨**줘요.

---

## 다른 보안 도구와 어떻게 다른가요?

| 도구 | 시점 | 방식 |
|---|---|---|
| Security guidance 플러그인 | Claude가 코드 작성 중 | 작성하는 코드 실시간 검토 |
| `/security-review` 명령 | 요청 시 | 현재 브랜치 단순 한 번 검토 |
| **Claude Security 플러그인** | 요청 시 | **멀티에이전트 깊은 스캔 + 패치 제안** |
| Code Review | PR 단위 | PR 전체 검토 (Team·Enterprise) |
| Claude Security 제품 | 상시 | 저장소 모니터링 (Enterprise) |

---

## 주의사항

- 스캔은 **토큰을 많이 써요**. 큰 코드베이스는 비용이 상당할 수 있어요.
- 스캔 결과가 매번 다를 수 있어요 (비결정적 특성). 주기적으로 실행하는 게 좋아요.
- **Fable 5 사용 시**: 사이버보안 분류기가 일부 작업을 차단하면 자동으로 Opus로 전환될 수 있어요 — 정상 동작이에요.
- 패치를 적용할 때는 **취약점별로 별도 PR**을 만드는 걸 권장해요.

---

## 관련 링크

- [공식 문서 (영문)](https://code.claude.com/docs/en/claude-security)
- [Claude Security 관리형 서비스](https://claude.com/product/claude-security) — Enterprise 플랜 구독자용 저장소 모니터링
- [플러그인 마켓플레이스 안내](https://code.claude.com/docs/en/discover-plugins)
