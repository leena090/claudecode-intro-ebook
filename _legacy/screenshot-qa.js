/**
 * Visual QA 스크린샷 촬영기
 * 각 슬라이드를 1280×720으로 캡처
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const fileUrl = `file://${path.resolve(__dirname, 'index.html')}`;
const TOTAL_SLIDES = 18;
const ssDir = path.join(__dirname, 'qa-screenshots');
if (!fs.existsSync(ssDir)) fs.mkdirSync(ssDir);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto(fileUrl);
  await page.waitForLoadState('networkidle');

  // 뷰포트 1280x720 = 슬라이드 크기이므로 scale 1:1로 자동 맞춰짐

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const slideId = `slide-${String(i).padStart(2, '0')}`;
    await page.evaluate((id) => {
      document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
      const t = document.getElementById(id);
      if (t) t.classList.add('active');
    }, slideId);

    await page.waitForTimeout(150);
    const ss = path.join(ssDir, `${slideId}.png`);
    await page.screenshot({ path: ss, clip: { x: 0, y: 0, width: 1280, height: 720 } });
    console.log(`📸 ${slideId}.png 저장`);
  }

  await browser.close();
  console.log(`\n✅ ${TOTAL_SLIDES}장 스크린샷 완료 → qa-screenshots/`);
})();
