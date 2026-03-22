// ── Claude Code 도트 캐릭터 로고 ──
// 14×10 그리드 픽셀 아트, #DA7756 단색
type Size = 'sm' | 'md' | 'lg'
const sizes: Record<Size, number> = { sm: 18, md: 28, lg: 100 }

export default function PixelLogo({ size = 'md' }: { size?: Size }) {
  const px = sizes[size]
  // 픽셀 아트 패턴 (14x10 그리드) — 1=채움, 0=빈칸
  const pixels = [
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [1,1,0,1,1,1,1,0,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,1,0,1,1,0,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0],
  ]
  return (
    <svg
      width={px}
      height={Math.round(px * 10 / 14)}
      viewBox="0 0 14 10"
      fill="none"
      style={{ imageRendering: 'pixelated' }}
    >
      {pixels.map((row, y) =>
        row.map((cell, x) =>
          cell ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#DA7756" /> : null
        )
      )}
    </svg>
  )
}
