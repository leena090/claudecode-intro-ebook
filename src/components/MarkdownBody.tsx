// ── 마크다운 HTML 렌더러 ──
// remark가 생성한 HTML을 직접 삽입
// markdown-body 클래스로 globals.css의 마크다운 스타일 적용
export default function MarkdownBody({ html }: { html: string }) {
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
