---
title: "[공] 클라우드 환경에서 Claude Code 사용하기"
description: "claude.ai/code 웹에서 접속하면 내 컴퓨터가 아닌 클라우드 서버에서 Claude Code가 실행돼요. 이 환경의 특징과 주의사항을 정리했어요"
tags: ["자동생성", "클라우드", "cloud-environments", "웹", "원격실행", "codeweb"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-03"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 신규 등재: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a> (2026-08-03 감지)<br />
★ 상세 내용은 공식 문서 확인 권장 — 아래는 입문자용 요약이에요
</div>

## 클라우드 환경이 뭔가요?

Claude Code를 **웹 브라우저**(`claude.ai/code`)나 **GitHub Actions**, **외부 통합**으로 사용하면, 내 노트북이 아닌 **Anthropic의 클라우드 서버**에서 코드가 실행돼요.

> 🍱 **비유로 설명하면**: 내 주방(로컬 컴퓨터)에서 요리하는 게 아니라, 공유 주방(클라우드 서버)을 잠깐 빌려 요리하는 거예요. 조리 과정(Claude Code 실행)은 똑같지만, 주방 자체는 세션이 끝나면 깨끗하게 초기화돼요.

---

## 클라우드 환경의 특징

### ✅ 장점

| 특징 | 설명 |
|------|------|
| **즉시 실행** | 설치 없이 브라우저만 있으면 사용 가능 |
| **어디서든** | 스마트폰·태블릿·공용 PC에서도 접근 |
| **사전 설정됨** | Playwright(테스트 도구), 주요 언어 런타임이 미리 설치돼 있어요 |
| **격리된 환경** | 내 PC 영향 없이 안전하게 실험 가능 |

### ⚠️ 주의사항

| 항목 | 내용 |
|------|------|
| **임시 저장소** | 세션이 끝나면 작업 파일이 **사라져요** |
| **비활성 제한** | 일정 시간 활동이 없으면 세션 종료 |
| **네트워크 정책** | 환경에 따라 외부 인터넷 접근이 제한될 수 있어요 |
| **용량 제한** | 디스크 할당량이 정해져 있어요 (대용량 파일 주의) |

<div class="note-star">
★ <strong>중요</strong> — 클라우드 환경에서 작업한 내용은 반드시 <strong>git commit & push</strong>로 저장하세요. 세션이 종료되면 커밋하지 않은 변경사항은 복구할 수 없어요.
</div>

---

## 사용 흐름

```
1️⃣ claude.ai/code 접속
         ↓
2️⃣ 리포지토리 연결 (GitHub 연동)
         ↓
3️⃣ 격리된 클라우드 서버에서 Claude Code 실행
         ↓
4️⃣ 작업 완료 → git push로 저장
         ↓
5️⃣ 세션 종료 → 서버 초기화 (임시 파일 삭제)
```

---

## 로컬 vs 클라우드 비교

| 항목 | 로컬 (내 PC) | 클라우드 (웹) |
|------|-------------|------------|
| 설치 필요 | ✅ Node.js 등 | ❌ 없음 |
| 파일 영구 저장 | ✅ 자동 | ⚠️ git push 필요 |
| 접근 기기 | 설치된 기기만 | 어디서든 |
| 네트워크 의존 | 낮음 | 높음 |
| 커스텀 환경 | 자유롭게 | 제한적 |

---

## 실전 팁

### 작업 전
```bash
# 시작할 때 리포지토리 상태 확인
git status
git pull origin main
```

### 작업 중
```bash
# 자주 커밋하세요 (세션 타임아웃 대비)
git add -p        # 변경사항 선택적으로 스테이징
git commit -m "WIP: 작업 내용 요약"
```

### 작업 후
```bash
# 반드시 push
git push -u origin <브랜치명>
```

---

## GitHub Actions와의 연동

클라우드 환경은 **GitHub Actions**와 함께 쓸 때 특히 강력해요. PR이 열리면 자동으로 Claude Code가 실행되어 코드 리뷰, 버그 수정, 테스트 실행을 해줘요.

```yaml
# .github/workflows/claude-review.yml 예시 (추정)
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropic/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

<div class="note-circle">
○ GitHub Actions 연동 상세는 <a href="https://code.claude.com/docs/en/github-actions">공식 GitHub Actions 문서</a> 참조<br />
○ 자동화 설정은 팀·엔터프라이즈 플랜에서 더 폭넓게 활용 가능
</div>

---

## 스케줄 작업과 클라우드 환경

Claude Code의 **Routines**(루틴)나 **Scheduled Tasks**(스케줄 작업)는 대부분 클라우드 환경에서 실행돼요.

> 🍱 **비유**: 매일 아침 6시에 카페가 열리기 전에 청소 직원이 혼자 와서 청소하고 떠나는 것처럼, 스케줄 작업도 내가 자는 동안 클라우드 서버에서 조용히 실행되고 종료돼요.

---

## 자세한 정보

공식 문서에서 환경 설정, 네트워크 정책, 용량 제한 등의 상세 내용을 확인하세요:

- [Cloud Environments 공식 문서](https://code.claude.com/docs/en/cloud-environments) `[공]`
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) `[공]`
- [Scheduled Tasks](https://code.claude.com/docs/en/scheduled-tasks) `[공]`
