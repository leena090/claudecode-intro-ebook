import Link from 'next/link'
import PixelLogo from './PixelLogo'

interface FooterNavProps {
  backHref: string   // 뒤로가기 링크 경로
  backLabel: string  // 뒤로가기 버튼 텍스트
}

// ── 문서 하단 네비게이션 ──
// 카테고리 목록으로 돌아가는 링크 + 브랜딩
export default function FooterNav({ backHref, backLabel }: FooterNavProps) {
  return (
    <div
      className="mt-12 pt-6 flex items-center justify-between"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* 뒤로가기 링크 */}
      <Link
        href={backHref}
        className="breadcrumb-link flex items-center gap-2 text-sm"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {backLabel}
      </Link>

      {/* 우측 브랜딩 */}
      <div
        className="flex items-center gap-2 text-xs"
        style={{ color: 'var(--text-muted)' }}
      >
        <PixelLogo size="sm" />
        <span>도움이 되셨나요?</span>
      </div>
    </div>
  )
}
