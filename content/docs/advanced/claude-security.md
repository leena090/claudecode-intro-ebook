---
title: "[공] 코드 취약점 자동 스캔 — Claude Security 플러그인"
description: "Claude Code에서 /claude-security 명령으로 코드베이스 전체를 보안 취약점 스캔하고, 발견된 문제를 패치로 자동 생성하는 기능이에요"
tags: ["자동생성", "보안", "취약점", "플러그인", "claude-security", "신규기능"]
category: "advanced"
order: 27
lastUpdated: "2026-08-01"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ Claude Code v2.1.154 이상, 유료 플랜 필요<br />
★ Python 3.9.6 이상 설치 필요 (<code>python3 --version</code>으로 확인)
</div>

## Claude Security 플러그인이 뭔가요?

프로그래밍을 하다 보면 **내가 모르는 보안 취약점**이 코드 어딘가에 숨어 있을 수 있어요. Claude Security 플러그인은 마치 **보안 전문가 팀을 고용한 것처럼** 코드 전체를 자동으로 스캔해줘요.

> 🍱 **비유로 설명하면**: 새 건물을 지을 때 소방서에서 와서 화재 위험 요소를 찾아주는 것처럼, 이 플러그인은 AI 에이전트 팀이 코드를 꼼꼼히 살펴보고 위험한 곳을 알려줘요.

작동 방식:
1. 여러 Claude 에이전트가 코드 구조를 파악하고 위협 모델을 세워요
2. 에이전트들이 취약점을 찾아요
3. **별도의 검증 에이전트**가 발견된 내용을 독립적으로 재검토해요
4. 검증된 취약점만 보고서에 포함돼요
5. 각 취약점에 대한 패치(수정 코드)를 제안해요

---

## 설치하기

Claude Code 세션 안에서 다음 명령으로 설치해요:

```
/plugin install claude-security@claude-plugins-official
```

설치 후 플러그인 활성화:

```
/reload-plugins
```

> 💡 **설치가 실패하면**: `Marketplace "claude-plugins-official" not found` 메시지가 뜨면 아래 명령을 먼저 실행하세요:
> ```
> /plugin marketplace add anthropics/claude-plugins-official
> ```

---

## 사용 방법

### 전체 코드베이스 스캔

```
/claude-security
```

메뉴에서 **Scan codebase**를 선택하면 돼요.

**순서:**
1. `/claude-security` 실행 → **Scan codebase** 선택
2. 스캔 범위 선택 (전체 또는 특정 영역)
3. 확인 → 스캔 시작 (시간이 꽤 걸려요)
4. 결과 보고서 확인
5. `/claude-security` → **Suggest patches** → 원하는 취약점 수정 적용

### 변경된 코드만 스캔

PR 올리기 전에 내 브랜치의 변경분만 확인하고 싶을 때:

```
/claude-security scan my branch
```

또는 특정 커밋:
```
/claude-security scan commit abc1234
```

> 🍱 **비유로 설명하면**: 집 전체 수리가 부담스러우면, 새로 리모델링한 화장실만 먼저 안전 점검하는 것과 같아요.

---

## 스캔 결과 보기

스캔이 끝나면 코드 폴더 안에 `CLAUDE-SECURITY-타임스탬프/` 폴더가 생겨요.

| 파일 | 내용 |
|---|---|
| `CLAUDE-SECURITY-RESULTS.md` | 취약점 보고서 (F1, F2 번호로 분류) |
| `CLAUDE-SECURITY-RESULTS.jsonl` | 기계 처리용 JSON 형식 보고서 |
| `patches/F1.patch` 등 | 각 취약점의 수정 코드 |

각 취약점 항목에는:
- **심각도** (Critical / High / Medium / Low)
- **영향 범위**
- **악용 시나리오** (공격자가 어떻게 악용할 수 있는지)
- **추천 수정 방법**

이 포함돼요.

---

## 패치 적용하기

패치는 **절대 자동으로 적용되지 않아요**. 반드시 직접 확인하고 결정해야 해요.

```bash
# 터미널에서 패치 적용
git apply CLAUDE-SECURITY-타임스탬프/patches/F1.patch
```

각 패치는:
- 패치를 쓴 에이전트와 **다른 에이전트가 독립적으로 검토**해요
- 기존 테스트를 실행해서 정상 동작을 확인해요
- 새 취약점을 만들지 않는지 검증해요

> 🍱 **비유로 설명하면**: 의사가 처방전을 써줘도 약사가 한 번 더 확인하는 것처럼, 패치도 이중 검증을 거쳐요.

---

## 다른 보안 도구와의 차이

| 도구 | 언제 쓰나요 | 특징 |
|---|---|---|
| **보안 가이던스 플러그인** | Claude가 코드 쓸 때 실시간 | 코드 작성 중 즉시 경고 |
| **`/security-review`** | 브랜치 한 번 검토 | 빠른 단일 패스 |
| **Claude Security 플러그인** | 심층 분석이 필요할 때 | 멀티 에이전트 딥 스캔 + 패치 |
| **Code Review (팀/엔터프라이즈)** | PR 리뷰 시 | PR 단위 보안 리뷰 |

Claude Security 플러그인은 **on-demand 심층 분석** 도구예요. 기존 도구를 대체하는 게 아니라 함께 사용하는 거예요.

---

## 주의사항

<div class="note-star">
★ <strong>토큰 소비가 많아요</strong>: 멀티 에이전트 스캔이라 토큰 사용량이 상당해요. 대형 코드베이스는 특히 주의하세요.<br />
★ <strong>Dynamic Workflows 필요</strong>: Pro 플랜은 <code>/config</code>에서 Dynamic workflows를 켜야 해요.<br />
★ <strong>Fable 5 사용 시</strong>: Fable 5의 사이버보안 안전장치가 일부 스캔 동작을 차단해 Opus로 자동 다운그레이드할 수 있어요. 정상 동작이에요.
</div>

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ 설치 요건: Claude Code v2.1.154+, Python 3.9.6+, 유료 플랜<br />
★ 코드베이스 규모에 따라 스캔 시간과 토큰 소비가 크게 달라져요
</div>
