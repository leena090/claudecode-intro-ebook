import Link from 'next/link'

// ── 이전/다음 챕터 카드 (page-nav) ──
// sidebar-parts의 findNeighbors() 결과를 받아 렌더링
interface PageNavItem {
  num: string
  title: string
  href: string
}
interface FooterNavProps {
  prev?: PageNavItem | null
  next?: PageNavItem | null
}

export default function FooterNav({ prev, next }: FooterNavProps) {
  if (!prev && !next) return null
  return (
    <div className="page-nav">
      {prev ? (
        <Link href={prev.href} className="pn-prev">
          <div className="pn-dir">이전</div>
          <div className="pn-title">{prev.num} · {prev.title}</div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className={`pn-next ${!prev ? 'only-next' : ''}`}
        >
          <div className="pn-dir">다음</div>
          <div className="pn-title">{next.num} · {next.title}</div>
        </Link>
      ) : null}
    </div>
  )
}
