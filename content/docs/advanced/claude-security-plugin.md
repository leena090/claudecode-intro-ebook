---
title: "[공] Claude Security 플러그인 — AI 멀티에이전트 취약점 스캐너"
description: "코드베이스에 숨어 있는 보안 취약점을 AI 에이전트 팀이 자동으로 찾아내고 패치까지 제안해주는 공식 플러그인"
tags: ["자동생성", "보안", "security", "플러그인", "취약점", "멀티에이전트", "claude-security"]
category: "advanced"
order: 27
lastUpdated: "2026-07-25"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ Claude Code <strong>v2.1.154</strong> 이상 필요, Python 3.9.6 이상 필요<br />
★ Pro·Max·Team·Enterprise 유료 플랜 필요 (Dynamic workflows 활용)
</div>

## Claude Security 플러그인이 뭔가요?

**코드베이스 전체를 AI 에이전트 팀이 순찰하며 보안 구멍을 찾아내는 플러그인**입니다. 사람이 일일이 코드를 읽는 게 아니라, 여러 Claude 에이전트가 팀으로 협력해서:

1. 내 코드 구조(아키텍처)를 파악하고
2. 어디를 노릴지 위협 시나리오를 만들고  
3. 실제 취약점을 사냥하고
4. 발견한 내용을 서로 교차 검증한 뒤 리포트로 정리합니다

> 🏥 **비유로 설명하면**: 병원 건강검진과 같아요. 한 명의 의사가 다 보는 게 아니라 심장 전문의, 소화기내과 의사, 영상의학과 의사가 각자 맡은 부분을 보고 종합 검진 결과지를 만드는 것처럼, Claude 에이전트들이 분야별로 나눠서 코드를 검사해요.

---

## 어떤 도구들과 다른가요?

이미 Claude Code에는 보안 관련 도구가 여럿 있어요. 헷갈리지 않도록 정리했습니다.

| 단계 | 도구 | 무엇을 해주나요 |
|------|------|----------------|
| 코드 작성 중 | Security guidance 플러그인 | Claude가 코드 쓰는 동시에 흔한 취약점 잡아줌 |
| 브랜치 확인 | `/security-review` 명령어 | 현재 브랜치 한 번 훑어봄 |
| **심층 분석** | **Claude Security 플러그인** | **저장소 전체 or 변경분을 멀티에이전트로 깊게 스캔** |
| PR 리뷰 | Code Review | PR 단위 정확성·보안 검토 |
| 관리형 서비스 | Claude Security (Enterprise) | 연결된 저장소 상시 모니터링 |

---

## 시작하기

### 필요한 것

- Claude Code **v2.1.154** 이상
- 유료 플랜 (Pro에서는 `/config`에서 Dynamic workflows 먼저 켜야 해요)
- **Python 3** (3.9.6 이상) — 터미널에서 `python3 --version`으로 확인
- **Git** (변경분 스캔이나 패치 적용 시)

### 설치 방법

Claude Code 세션 안에서 입력:

```
/plugin install claude-security@claude-plugins-official
```

> 마켓플레이스를 못 찾는다는 오류가 뜨면 먼저 이걸 실행하세요:
> `/plugin marketplace add anthropics/claude-plugins-official`

설치 후 현재 세션에 바로 적용:

```
/reload-plugins
```

---

## 사용 방법

### 코드베이스 전체 스캔 → 패치 적용 흐름

```
/claude-security
```

명령어를 입력하면 메뉴가 뜹니다. 아래 순서로 진행해요.

| 단계 | 설명 |
|------|------|
| ① **Scan codebase** 선택 | 전체 저장소 또는 특정 영역 선택 |
| ② 범위·비용 확인 후 확인 | 스캔 시작 전 토큰 사용량 안내 |
| ③ 스캔 실행 중 | `/workflows`에서 진행 상황 실시간 확인 |
| ④ 리포트 확인 | 저장소에 `CLAUDE-SECURITY-<날짜>/` 폴더 생성 |
| ⑤ **Suggest patches** 선택 | 발견된 취약점 중 수정할 것 선택 |
| ⑥ 패치 직접 적용 | `git apply`로 파일에 반영, PR 제출 |

> ⏱️ **비유로 설명하면**: 아파트 전체 안전 점검처럼, 스캔이 시작되면 Claude Code 창을 닫지 말고 기다려야 해요. 완료되면 결과 리포트가 나옵니다.

---

## 변경분만 스캔하기 (브랜치·PR·커밋)

전체 저장소 대신 **내가 바꾼 부분만** 검사할 수도 있어요.

```
# 브랜치의 변경분만
/claude-security → "Scan only my changes" 선택

# 특정 커밋
"scan commit abc1234" 라고 말하면 됩니다
```

> ⚠️ 작업 중인 파일(저장 안 된 변경)은 포함 안 돼요. 먼저 커밋하거나 스태시(stash)하세요.

---

## 스캔 결과 읽기

스캔이 끝나면 저장소 안에 폴더가 생성됩니다:

```
CLAUDE-SECURITY-<날짜>/
  ├── CLAUDE-SECURITY-RESULTS.md    ← 사람이 읽는 리포트
  ├── CLAUDE-SECURITY-RESULTS.jsonl  ← 기계가 읽는 형식
  └── CLAUDE-SECURITY-REVISION-<커밋>.json  ← 어떤 코드를 스캔했는지 기록
```

리포트에는 각 취약점마다:
- **ID** (F1, F2, F3 …)
- **영향도·악용 시나리오·심각도·신뢰도·권고 사항** 이 담겨 있어요

> ✅ 중요한 점: 다른 에이전트가 교차 검증한 것만 리포트에 올라와요. 덕분에 허위 경보(false positive)가 적고 짧은 리포트를 유지합니다.

---

## 패치 적용하기

```
/claude-security → "Suggest patches" → 수정할 취약점 선택
```

패치는 `patches/` 폴더에 `F1.patch`, `F2.patch` … 파일로 저장됩니다.

```bash
# 터미널에서 직접 적용
git apply CLAUDE-SECURITY-<날짜>/patches/F1.patch
```

> 🔒 **패치는 절대 자동 적용 안 됩니다.** 항상 사람이 확인하고 적용하도록 설계돼 있어요. 각 패치를 별도 PR로 올려서 리뷰받는 것을 권장합니다.

---

## 자주 묻는 질문

**Q. 스캔 비용이 얼마나 되나요?**  
큰 저장소는 토큰을 많이 씁니다. 메뉴에서 스캔 전에 대략적인 비용 안내가 나와요. 부분 스캔(API 레이어만, 인증 코드만)으로 비용을 줄일 수 있어요.

**Q. Fable 5 모델 쓰면 오류가 나요?**  
Fable 5의 사이버보안 안전장치 때문에 일부 스캔 단계가 차단될 수 있어요. 이 경우 자동으로 Opus 모델로 전환되고 스캔은 정상 완료됩니다. 공식 문서 기준 정상 동작이에요.

**Q. GitLab, Bitbucket 저장소도 되나요?**  
플러그인은 네트워크 접근 없이 로컬에서 실행되므로 GitHub 외 플랫폼도 지원합니다. (단, 오픈 PR 목록 가져오기 기능은 GitHub CLI 필요)

---

## 관련 문서

- [공] [보안 가이던스 플러그인](/docs/en/security-guidance) — 코드 작성 중 실시간 보안 체크
- [공] [Code Review](/docs/en/code-review) — PR 단위 멀티에이전트 리뷰
- [공] [플러그인 설치 가이드](/docs/en/discover-plugins)
