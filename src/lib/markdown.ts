import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

// ── 마크다운 → HTML 변환 유틸리티 ──
// remark-gfm: GFM 테이블, 취소선, 체크박스 지원
// sanitize: false — 커스텀 HTML 태그 허용 (note-circle, note-star 등)
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}
