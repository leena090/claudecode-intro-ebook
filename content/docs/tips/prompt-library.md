---
title: "[공] 공식 프롬프트 라이브러리 — 역할별 복붙 프롬프트 모음"
description: "Anthropic이 공식으로 제공하는 Claude Code 프롬프트 모음이에요. 역할·작업별로 바로 붙여넣을 수 있어요."
tags: ["팁", "프롬프트", "prompt-library", "복붙", "역할별", "자동생성"]
category: "tips"
order: 10
lastUpdated: "2026-05-20"
---

<div class="note-star">
★ <strong>[공] 공식 제공</strong> — <a href="https://code.claude.com/docs/en/prompt-library" target="_blank">code.claude.com/docs/en/prompt-library</a>에서 직접 확인하고 복사할 수 있어요.
</div>

## 공식 프롬프트 라이브러리가 뭔가요?

Anthropic이 Claude Code에 최적화된 **검증된 프롬프트들을 역할·작업별로 묶어 공개**한 페이지예요.

> 🍱 **비유로 설명하면**: 요리책에 "닭볶음탕", "된장찌개", "비빔밥" 레시피가 정리된 것처럼, 개발 상황별로 "이 문장을 쓰면 잘 됩니다"를 모아둔 모음집이에요.

---

## 어떻게 쓰나요?

1. **공식 페이지 방문** → [code.claude.com/docs/en/prompt-library](https://code.claude.com/docs/en/prompt-library)
2. **역할이나 작업 태그로 필터링**
3. **복사 버튼 클릭 후 Claude Code에 붙여넣기**

---

## 주요 프롬프트 유형

공식 라이브러리에는 이런 상황별 프롬프트들이 포함되어 있어요:

| 상황 | 예시 프롬프트 용도 |
|---|---|
| 🐛 버그 찾기 | "이 함수에서 엣지 케이스 버그를 찾아줘" |
| 📖 코드 설명 | "이 클래스를 초보자에게 설명해줘" |
| ✅ 테스트 작성 | "이 함수의 단위 테스트 5개 작성해줘" |
| 🔄 리팩토링 | "이 코드를 더 읽기 쉽게 개선해줘" |
| 📝 문서화 | "이 API 엔드포인트 README 작성해줘" |
| 🔍 코드 리뷰 | "PR 전에 이 코드 보안 관점으로 점검해줘" |

<div class="note-star">
★ 이 목록은 예시예요. 공식 페이지에 더 많은 프롬프트가 있고 꾸준히 추가돼요. <code>[공]</code>
</div>

---

## 왜 내 프롬프트 대신 이걸 쓰나요?

자유롭게 써도 되지만, 공식 프롬프트는 두 가지 장점이 있어요:

**1. Anthropic 팀이 직접 검증**
수천 번 테스트해서 Claude Code에서 가장 잘 작동하는 표현으로 정제됐어요.

**2. 상황별로 태그 분류**
"나는 지금 리팩토링 중"이면 리팩토링 태그만 보면 돼요. 매번 어떻게 써야 할지 고민하지 않아도 돼요.

---

## 나만의 프롬프트 모음 만들기

공식 라이브러리 외에, 자주 쓰는 프롬프트는 **CLAUDE.md 파일**에 직접 넣어두면 자동으로 불러와요.

```markdown
<!-- .claude/CLAUDE.md 예시 -->
## 자주 쓰는 프롬프트

### 버그 리포트 받았을 때
"에러 메시지를 보고 원인을 단계적으로 추론해줘.
확실하지 않으면 '추정'이라고 명시해줘."

### PR 올리기 전
"이 변경사항의 보안 취약점, 성능 영향, 엣지 케이스를 확인해줘."
```

> 🍱 **비유로 설명하면**: 냉장고에 자주 쓰는 양념들을 눈에 잘 띄는 앞줄에 두는 것과 같아요.

자세한 내용 → 📄 [CLAUDE.md 설정 가이드](/docs/config/debug-your-config)

---

## 함께 보면 좋아요

- 📄 [자주 쓰는 팁 모음](/docs/tips/useful-tips) — 실전 꿀팁
- 📄 [thinking 동사 모음](/docs/tips/thinking-verbs) — 더 좋은 답변 끌어내기
- 📄 [공통 워크플로 가이드](/docs/tips/common-workflows) — 상황별 작업 흐름
