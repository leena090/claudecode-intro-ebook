import type { Metadata } from 'next'

// ── 메타데이터 — SNS 공유 시 미리보기 ──
export const metadata: Metadata = {
  title: 'Claude Desktop 앱 다운로드 — 노모어매뉴얼',
  description: 'Mac / Windows 한 번에 설치. 채팅 + 코워크 + 코딩 올인원 앱.',
}

// ── 독립 다운로드 안내 페이지 (비밀번호 불필요) ──
export default function DownloadPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #faf9f6 0%, #f0ede6 100%)',
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      color: '#1a1a1a',
    }}>
      {/* ── 헤더 ── */}
      <header style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '40px 24px 0',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 14, color: '#8a8a8a', marginBottom: 8, letterSpacing: '0.05em' }}>
          노모어매뉴얼 · Claude Code 입문 가이드
        </p>
        <h1 style={{
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: 12,
        }}>
          Claude Desktop 앱 설치하기
        </h1>
        <p style={{ fontSize: 17, color: '#4a4a4a', lineHeight: 1.6, marginBottom: 8 }}>
          채팅 · 코워크 · 코딩이 <strong>하나의 앱</strong>에 다 들어있어요
        </p>
        <p style={{ fontSize: 14, color: '#8a8a8a' }}>
          Mac + Windows 모두 지원 · 설치 3분 · 무료 다운로드
        </p>
      </header>

      {/* ── 강조 다운로드 박스 ── */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{
          background: '#ffffff',
          border: '2px solid #DA7756',
          borderRadius: 16,
          padding: '32px 28px',
          boxShadow: '0 4px 24px rgba(218, 119, 86, 0.12)',
          marginBottom: 28,
        }}>
          {/* 배지 */}
          <div style={{
            display: 'inline-block',
            background: '#DA7756',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: 20,
            marginBottom: 16,
          }}>
            공식 다운로드
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
            공식 웹사이트에서 바로 다운로드
          </h2>

          {/* 다운로드 버튼 */}
          <a
            href="https://claude.ai/download"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #DA7756 0%, #c4623e 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '18px 24px',
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              textDecoration: 'none',
              marginBottom: 20,
              transition: 'transform 0.15s',
            }}
          >
            claude.ai/download 바로가기 →
          </a>

          {/* Mac / Windows 안내 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {/* Mac */}
            <div style={{
              background: '#faf9f6',
              borderRadius: 12,
              padding: '20px 16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🍎</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>macOS</div>
              <div style={{ fontSize: 13, color: '#4a4a4a', lineHeight: 1.6 }}>
                "Download for macOS" 클릭<br />
                DMG 파일 열기 →<br />
                <strong>Claude를 Applications로 드래그</strong>
              </div>
              <div style={{ fontSize: 12, color: '#8a8a8a', marginTop: 8 }}>
                Intel + Apple Silicon 모두 지원
              </div>
            </div>
            {/* Windows */}
            <div style={{
              background: '#faf9f6',
              borderRadius: 12,
              padding: '20px 16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🪟</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Windows</div>
              <div style={{ fontSize: 13, color: '#4a4a4a', lineHeight: 1.6 }}>
                "Download for Windows" 클릭<br />
                Setup EXE 실행 →<br />
                <strong>"다음" 클릭하면 설치 완료</strong>
              </div>
              <div style={{ fontSize: 12, color: '#8a8a8a', marginTop: 8 }}>
                x64 · ARM64 각각 지원
              </div>
            </div>
          </div>
        </div>

        {/* ── 설치 후 첫 실행 안내 ── */}
        <div style={{
          background: '#ffffff',
          borderRadius: 12,
          padding: '24px',
          border: '1px solid #e5e5e5',
          marginBottom: 28,
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>
            설치 후 이렇게 시작하세요
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '1', text: '앱 실행 — Claude 아이콘 더블클릭' },
              { step: '2', text: '로그인 — Claude 계정으로 로그인 (없으면 가입)' },
              { step: '3', text: 'Code 탭 클릭 — 상단에서 "Code" 선택하면 코딩 시작!' },
            ].map(({ step, text }) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 32, height: 32,
                  background: '#DA7756', color: '#fff',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, flexShrink: 0,
                }}>
                  {step}
                </div>
                <span style={{ fontSize: 15, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 16,
            background: '#fff8f5',
            border: '1px solid rgba(218, 119, 86, 0.3)',
            borderRadius: 8,
            padding: '12px 16px',
            fontSize: 13,
            color: '#4a4a4a',
            lineHeight: 1.6,
          }}>
            💡 <strong>Code 탭</strong>은 유료 구독(Pro $20/월~)이 필요해요. Chat 탭은 무료로 사용 가능합니다.
          </div>
        </div>

        {/* ── 앱의 3가지 탭 ── */}
        <div style={{
          background: '#ffffff',
          borderRadius: 12,
          padding: '24px',
          border: '1px solid #e5e5e5',
          marginBottom: 28,
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>
            앱 하나로 3가지를 할 수 있어요
          </h3>
          <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>탭</th>
                <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>역할</th>
                <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600 }}>비유</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tab: 'Chat', role: '질문, 대화, 아이디어', metaphor: '카카오톡처럼 대화' },
                { tab: 'Cowork', role: '파일·업무 자동화', metaphor: '옆자리 비서가 대신 처리' },
                { tab: 'Code', role: '코딩, 웹사이트 제작', metaphor: '프로 개발자 고용' },
              ].map(({ tab, role, metaphor }) => (
                <tr key={tab} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{tab}</td>
                  <td style={{ padding: '10px 12px', color: '#4a4a4a' }}>{role}</td>
                  <td style={{ padding: '10px 12px', color: '#8a8a8a' }}>{metaphor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 웹 버전 대안 ── */}
        <div style={{
          background: '#f0ede6',
          borderRadius: 12,
          padding: '20px 24px',
          marginBottom: 28,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, color: '#4a4a4a', marginBottom: 8 }}>
            설치 없이 바로 쓰고 싶다면?
          </p>
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#DA7756',
              textDecoration: 'underline',
            }}
          >
            claude.ai/code → 웹 브라우저에서 바로 시작
          </a>
        </div>

        {/* ── 푸터 ── */}
        <footer style={{ textAlign: 'center', padding: '16px 0 40px' }}>
          <p style={{ fontSize: 13, color: '#8a8a8a', marginBottom: 8 }}>
            © 2026 노모어매뉴얼 · Claude Code 입문 가이드
          </p>
          <a
            href="https://youtube.com/@nomore_manual"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: '#DA7756', textDecoration: 'none' }}
          >
            @nomore_manual
          </a>
        </footer>
      </main>
    </div>
  )
}
