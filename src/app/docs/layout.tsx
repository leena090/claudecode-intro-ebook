// ── 문서 섹션 공통 레이아웃 ──
// 사이드바+콘텐츠 2컬럼 구조는 각 페이지에서 직접 구성
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
