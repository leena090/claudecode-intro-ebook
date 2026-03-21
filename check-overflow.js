/**
 * Playwright 오버플로우 게이트
 * 모든 슬라이드가 1280×720 안에 들어오는지 검증
 * 0 violations이어야 배포 가능
 *
 * 사용법: node check-overflow.js
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// 절대 경로로 파일 URL 생성
const indexPath = path.resolve(__dirname, 'index.html');
const fileUrl = `file://${indexPath}`;

// 슬라이드 총 개수
const TOTAL_SLIDES = 18;
const SLIDE_W = 1280;
const SLIDE_H = 720;

async function checkOverflow() {
  console.log('🔍 오버플로우 게이트 시작...\n');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 뷰포트를 슬라이드 크기로 설정
  await page.setViewportSize({ width: SLIDE_W, height: SLIDE_H });

  // 스케일 1:1로 로드 (스케일 없이 검사)
  await page.goto(fileUrl);
  await page.waitForLoadState('networkidle');

  // 강제로 스케일 1로 설정
  await page.evaluate(() => {
    const stage = document.getElementById('stage');
    if (stage) stage.style.transform = 'scale(1)';
    // viewer를 오버플로우 허용으로 일시 변경 (측정용)
    const viewer = document.getElementById('viewer');
    if (viewer) {
      viewer.style.overflow = 'visible';
      viewer.style.position = 'static';
    }
  });

  let violations = [];

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const slideId = `slide-${String(i).padStart(2, '0')}`;

    // 해당 슬라이드 활성화
    await page.evaluate((id) => {
      // 모든 슬라이드 비활성화
      document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
      // 해당 슬라이드 활성화
      const target = document.getElementById(id);
      if (target) target.classList.add('active');
    }, slideId);

    // 오버플로우 측정
    const result = await page.evaluate((id) => {
      const slide = document.getElementById(id);
      if (!slide) return { id, error: 'slide not found' };

      // 슬라이드 내 모든 요소 검사
      const allElements = slide.querySelectorAll('*');
      const overflowingElements = [];

      allElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();

        // 슬라이드 경계를 10px 이상 벗어난 요소 감지
        if (rect.bottom > slideRect.bottom + 10) {
          overflowingElements.push({
            tag: el.tagName,
            class: el.className.toString().slice(0, 60),
            overflowBy: Math.round(rect.bottom - slideRect.bottom)
          });
        }
      });

      // 슬라이드 자체의 스크롤 높이 검사
      const scrollOverflow = slide.scrollHeight > 720 + 5;

      return {
        id,
        scrollHeight: slide.scrollHeight,
        overflowingElements,
        scrollOverflow
      };
    }, slideId);

    if (result.scrollOverflow || result.overflowingElements.length > 0) {
      violations.push(result);
      console.log(`❌ FAIL  [${slideId}] scrollHeight=${result.scrollHeight}px (최대 720px)`);
      if (result.overflowingElements.length > 0) {
        result.overflowingElements.slice(0, 3).forEach(el => {
          console.log(`   └─ <${el.tag}> .${el.class} → ${el.overflowBy}px 초과`);
        });
      }
    } else {
      console.log(`✅ PASS  [${slideId}] scrollHeight=${result.scrollHeight}px`);
    }
  }

  await browser.close();

  console.log('\n' + '─'.repeat(50));

  if (violations.length === 0) {
    console.log('✅ 오버플로우 게이트 PASS — 0 violations');
    console.log('🚀 배포 가능!\n');
    process.exit(0);
  } else {
    console.log(`❌ 오버플로우 게이트 FAIL — ${violations.length} violations`);
    console.log('⛔ violations 수정 후 재실행 필요\n');

    // 결과를 JSON으로 저장
    fs.writeFileSync(
      path.join(__dirname, 'overflow-report.json'),
      JSON.stringify(violations, null, 2)
    );
    console.log('📄 overflow-report.json 저장됨\n');
    process.exit(1);
  }
}

checkOverflow().catch(err => {
  console.error('오버플로우 게이트 실행 오류:', err.message);
  process.exit(1);
});
