# docs-watch 루틴 운영 메모

Claude 공식 업데이트를 감지해 한국어 초안 PR을 만드는 자동화 구성과,
중복 PR을 막기 위한 운영 지침을 정리한 문서예요.

## 구성

| 구성 요소 | 위치 | 역할 |
|---|---|---|
| `docs-watch-blog.yml` | 이 repo | 매일 07:00 KST, anthropic 페이지를 `.snapshots/ga-*.txt`로 저장하고 main에 커밋 |
| `claude-docs-watch` 루틴 | **repo 밖** (Claude Code 루틴) | 매일 08:00 KST, 스냅샷 비교 후 `auto/docs-watch-YYYY-MM-DD` 브랜치로 PR 생성 |
| `docs-watch-dedupe.yml` | 이 repo | 새 docs-watch PR이 열리면 더 오래된 docs-watch PR을 자동으로 닫음 (안전망) |

## 중복 PR이 생기는 이유

루틴은 감지 결과를 **새 PR 브랜치에만** 기록하고, main의 `docs-index.json` /
`blog-seen.json`은 **PR이 머지돼야** 갱신돼요. 따라서 PR이 며칠 머지되지 않으면
루틴이 매일 같은 변경을 "또 신규"로 감지해 새 PR을 계속 만들어요.

이를 두 겹으로 막아요:
1. **repo 안전망** — `docs-watch-dedupe.yml`가 오래된 PR을 자동으로 닫아 항상 최신 1개만 유지
2. **루틴 자체 가드** — 아래 문구를 루틴 프롬프트에 추가 (근본 해결)

## 루틴 프롬프트에 추가할 가드 문구

> Claude Code 루틴 설정(`claude-docs-watch`)의 프롬프트 맨 앞에 아래 내용을 붙여넣으세요.

```
[중복 방지 가드 — 작업 시작 전 반드시 확인]
PR을 만들기 전에, 먼저 leena090/claudecode-intro-ebook 저장소에서
head 브랜치가 "auto/docs-watch-"로 시작하는 열린(open) PR이 있는지 확인해.

- 이미 열린 docs-watch PR이 있으면:
  새 PR을 만들지 말고, 그 PR의 브랜치에 이번 회차 변경을 이어서 커밋(업데이트)해.
  (같은 내용이면 아무 것도 하지 말고 "변경 없음"으로 종료)
- 열린 docs-watch PR이 없을 때만 새 PR을 새로 만들어.

이렇게 하면 머지되지 않은 PR 위에 같은 내용의 PR이 중복으로 쌓이지 않아.
```

## 참고

- 이 가드를 넣어도 `docs-watch-dedupe.yml`는 그대로 두는 걸 권장해요(이중 안전망).
- 루틴이 기존 PR을 업데이트하도록 바뀌면, dedupe 액션은 사실상 발동할 일이 거의 없어요.
