// ── 태그 배지 컴포넌트 ──
// 악센트 색상 기반의 작은 레이블 뱃지
export default function TagBadge({ label }: { label: string }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-lg font-medium"
      style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
    >
      {label}
    </span>
  )
}
