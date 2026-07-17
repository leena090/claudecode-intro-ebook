---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "세션 결과물을 공개 페이지로 공유하는 Artifacts, 프롬프트에서 직접 설정 바꾸는 /config"
tags: ["업데이트", "2026", "week25", "artifacts", "공유", "config", "권한규칙", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션 결과물을 클릭 한 번에 공유 페이지로 🌐

Claude Code가 만들어준 코드, 리포트, 데이터 분석 결과를 **라이브 웹 페이지**로 바꿔서 링크로 공유할 수 있게 됐어요.

> 🍱 **비유**: 친구한테 "내가 만든 케이크 봐봐"라며 직접 집에 데려오는 게 아니라, **케이크 사진을 찍어서 링크로 보내주는 것**과 같아요. 받는 사람은 설치 없이 브라우저에서 바로 볼 수 있어요.

**어떻게 쓰나요?**

세션 안에서 Claude Code에게 Artifact로 내보내달라고 하면 돼요:

```
이 분석 결과를 Artifact로 만들어줘
```

또는 Claude Code가 스스로 적절하다고 판단하면 만들어주기도 해요.

**공개 범위 설정:**

| 설정 | 설명 |
|---|---|
| 비공개 (기본) | 나만 볼 수 있음 |
| 조직 공유 | 같은 Claude 조직원만 볼 수 있음 |
| 공개 링크 | 링크만 있으면 누구나 볼 수 있음 |

<div class="note-circle">
○ <code>claude.ai</code> 계정으로 로그인 되어 있어야 해요<br />
○ 공개된 Artifact는 나중에 비공개로 다시 돌릴 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a>
</div>

---

### 2️⃣ `/config` — 프롬프트에서 바로 설정 변경 ⚙️

지금까지는 설정을 바꾸려면 `settings.json` 파일을 직접 열어야 했어요. 이제 채팅창에서 바로 `/config` 명령어로 설정할 수 있어요.

```bash
# 자동 메모리 끄기
/config autoMemory false

# 출력 스타일 바꾸기
/config output.style concise

# 모델 변경
/config model claude-sonnet-5
```

> 🍱 **비유**: TV 리모컨 설정을 바꾸려고 TV 뒤쪽 패널을 열어서 버튼을 누르던 걸, 이제 리모컨에서 메뉴 버튼 눌러서 화면에서 바꾸는 것과 같아요.

**어떤 설정을 바꿀 수 있나요?**
- 모델 선택
- 출력 스타일 (concise/normal/verbose)
- 자동 메모리 (autoMemory)
- 기타 대부분의 `settings.json` 항목

<div class="note-circle">
○ 변경 사항은 현재 세션과 이후 세션에 모두 적용돼요<br />
○ `settings.json` 파일에 직접 저장되므로 영구적이에요
</div>

---

### 3️⃣ 권한 규칙에서 파라미터 매칭 지원 🔒

이전까지는 도구(tool) 이름만으로 허용/차단 규칙을 만들 수 있었어요. 이제는 **도구의 특정 파라미터 값**까지 조건으로 걸 수 있어요.

> 🍱 **비유**: "파일 읽기는 OK" 규칙에서, "src/ 폴더 파일 읽기는 OK, .env 파일 읽기는 물어봐"처럼 **더 세밀하게** 나눌 수 있어요.

**예시 — `.env` 파일은 항상 허락 요청:**

```json
{
  "permissions": {
    "ask": [
      {
        "tool": "Read",
        "params": { "file_path": "**/.env*" }
      }
    ]
  }
}
```

<div class="note-circle">
○ glob 패턴(`**`, `*`, `?`) 사용 가능<br />
○ 기존 도구 이름만 쓰는 규칙은 그대로 작동해요
</div>
