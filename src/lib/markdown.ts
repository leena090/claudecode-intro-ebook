import { remark } from 'remark'
import remarkHtml from 'remark-html'

// ── 마크다운 → HTML 변환 유틸리티 ──
// sanitize: false — 커스텀 HTML 태그 허용 (예: example-case 박스)
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}
