import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop (1280px)
  const pageDesktop = await context.newPage();
  await pageDesktop.setViewportSize({ width: 1280, height: 800 });
  await pageDesktop.goto('http://localhost:5174/');
  await pageDesktop.screenshot({ path: 'scratch/navbar-desktop.png' });

  // Desktop hover services
  await pageDesktop.hover('header button:has-text("Services")');
  await pageDesktop.waitForTimeout(400);
  await pageDesktop.screenshot({ path: 'scratch/navbar-services-dropdown.png' });

  // Tablet (800px)
  const pageTablet = await context.newPage();
  await pageTablet.setViewportSize({ width: 800, height: 800 });
  await pageTablet.goto('http://localhost:5174/');
  await pageTablet.screenshot({ path: 'scratch/navbar-tablet.png' });

  // Tablet open mobile menu
  await pageTablet.click('button[aria-label="Toggle Navigation Menu"]');
  await pageTablet.waitForTimeout(300);
  await pageTablet.screenshot({ path: 'scratch/navbar-tablet-open.png' });

  // Mobile (375px)
  const pageMobile = await context.newPage();
  await pageMobile.setViewportSize({ width: 375, height: 800 });
  await pageMobile.goto('http://localhost:5174/');
  await pageMobile.screenshot({ path: 'scratch/navbar-mobile.png' });

  // Mobile open
  await pageMobile.click('button[aria-label="Toggle Navigation Menu"]');
  await pageMobile.waitForTimeout(300);
  await pageMobile.screenshot({ path: 'scratch/navbar-mobile-open.png' });

  await browser.close();
  console.log('All screenshots generated!');
})();
