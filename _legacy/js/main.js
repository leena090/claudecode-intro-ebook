/**
 * Claude Code 입문 전자책 — 메인 JavaScript
 * 슬라이드 네비게이션, 줌, 키보드 단축키 처리
 * 노모어매뉴얼 | 2026
 */

// ── 상태 관리 ────────────────────────────────────────
const state = {
  current: 0,         // 현재 슬라이드 인덱스 (0부터 시작)
  total: 0,           // 전체 슬라이드 수
  scale: 1,           // 현재 줌 배율
  baseScale: 1,       // 뷰포트에 맞는 기본 배율
};

// ── DOM 참조 ──────────────────────────────────────────
const stage       = document.getElementById('stage');
const slides      = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
const counter     = document.getElementById('slide-counter');
const btnPrev     = document.getElementById('btn-prev');
const btnNext     = document.getElementById('btn-next');

// ── 초기화 ────────────────────────────────────────────
function init() {
  state.total = slides.length;

  // 첫 슬라이드 표시
  slides[0].classList.add('active');

  // 뷰포트에 맞게 스케일 조정
  fitToViewport();
  updateUI();

  // 이벤트 리스너 등록
  window.addEventListener('resize', fitToViewport);
  window.addEventListener('keydown', handleKeyboard);
  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

  // 터치 스와이프 지원
  setupTouchSwipe();

  // 트랙패드 핀치 줌 지원 (필수 기능)
  setupPinchZoom();

  // 키보드 줌 (+/-) 지원 (필수 기능)
  console.log('🎓 Claude Code 입문 전자책 초기화 완료');
  console.log(`📑 전체 슬라이드: ${state.total}장`);
  console.log('⌨️ 단축키: ← → (이동), +/- (줌), F (전체화면)');
}

// ── 뷰포트 맞춤 스케일 계산 ──────────────────────────
function fitToViewport() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const slideW = 1280;
  const slideH = 720;

  // 여백 24px 포함하여 최대 비율 계산
  const scaleX = (vw - 24) / slideW;
  const scaleY = (vh - 24) / slideH;
  state.baseScale = Math.min(scaleX, scaleY, 1); // 최대 100%

  applyScale(state.baseScale);
}

// ── 스케일 적용 ──────────────────────────────────────
function applyScale(scale) {
  state.scale = Math.max(0.4, Math.min(2.0, scale)); // 40% ~ 200% 범위
  stage.style.transform = `scale(${state.scale})`;
}

// ── 슬라이드 이동 ────────────────────────────────────
function goToSlide(index) {
  if (index < 0 || index >= state.total) return;

  // 현재 슬라이드 숨기기
  slides[state.current].classList.remove('active');

  state.current = index;

  // 새 슬라이드 표시
  slides[state.current].classList.add('active');

  updateUI();
}

function nextSlide() {
  if (state.current < state.total - 1) {
    goToSlide(state.current + 1);
  }
}

function prevSlide() {
  if (state.current > 0) {
    goToSlide(state.current - 1);
  }
}

// ── UI 업데이트 (진행바, 카운터) ─────────────────────
function updateUI() {
  // 진행바 너비 계산 (1번째 슬라이드부터 표시)
  const progress = ((state.current + 1) / state.total) * 100;
  progressBar.style.width = progress + '%';

  // 슬라이드 카운터 텍스트
  counter.textContent = `${state.current + 1} / ${state.total}`;

  // 네비게이션 버튼 비활성화 처리
  btnPrev.style.opacity = state.current === 0 ? '0.3' : '1';
  btnNext.style.opacity = state.current === state.total - 1 ? '0.3' : '1';
}

// ── 키보드 단축키 처리 ───────────────────────────────
function handleKeyboard(e) {
  switch(e.key) {
    // 슬라이드 이동
    case 'ArrowRight':
    case 'PageDown':
    case ' ':
      e.preventDefault();
      nextSlide();
      break;

    case 'ArrowLeft':
    case 'PageUp':
      e.preventDefault();
      prevSlide();
      break;

    case 'Home':
      goToSlide(0);
      break;

    case 'End':
      goToSlide(state.total - 1);
      break;

    // 줌 (+/-)
    case '+':
    case '=':
      e.preventDefault();
      applyScale(state.scale + 0.05);
      break;

    case '-':
      e.preventDefault();
      applyScale(state.scale - 0.05);
      break;

    case '0':
      // 원래 크기로 복원
      applyScale(state.baseScale);
      break;

    // 전체화면
    case 'f':
    case 'F':
      toggleFullscreen();
      break;
  }
}

// ── 전체화면 토글 ────────────────────────────────────
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('전체화면 전환 실패:', err);
    });
  } else {
    document.exitFullscreen();
  }
}

// ── 터치 스와이프 설정 ───────────────────────────────
function setupTouchSwipe() {
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 50; // px

  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;

    // 수평 스와이프가 수직보다 크면 슬라이드 이동
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });
}

// ── 트랙패드 핀치 줌 설정 (필수) ─────────────────────
function setupPinchZoom() {
  let lastDistance = 0;
  let isPinching = false;

  // 트랙패드 제스처 이벤트 (Safari/Chrome macOS)
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
    isPinching = true;
  });

  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
    if (isPinching) {
      // gesturechange 이벤트의 scale 값 활용
      const newScale = state.baseScale * e.scale;
      applyScale(newScale);
    }
  });

  document.addEventListener('gestureend', () => {
    isPinching = false;
  });

  // 휠 이벤트 기반 핀치 줌 (Firefox / Windows 트랙패드)
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      // Ctrl+휠 또는 트랙패드 핀치 = 줌
      e.preventDefault();
      const delta = e.deltaY * -0.002;
      applyScale(state.scale + delta);
    }
  }, { passive: false });
}

// ── DOMContentLoaded 후 초기화 ───────────────────────
document.addEventListener('DOMContentLoaded', init);
