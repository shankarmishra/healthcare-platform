import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 800, height: 800 });
  await page.goto('http://localhost:5174/');

  const info = await page.evaluate(() => {
    const nav = document.querySelector('header nav');
    const btn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
    return {
      innerWidth: window.innerWidth,
      outerWidth: window.outerWidth,
      navDisplay: nav ? getComputedStyle(nav).display : null,
      btnDisplay: btn ? getComputedStyle(btn).display : null,
    };
  });

  console.log('Evaluated 800px info:', JSON.stringify(info, null, 2));
  await browser.close();
})();
