import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://localhost:5173';
const RAW_DIR = path.join(process.cwd(), 'video-output', 'raw');

// Helper to smooth delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function recordSegment(segmentName, actions) {
  console.log(`\n========================================`);
  console.log(`Starting recording: ${segmentName}`);
  console.log(`========================================`);

  const segmentDir = path.join(RAW_DIR, segmentName);
  fs.mkdirSync(segmentDir, { recursive: true });

  const browser = await chromium.launch({
    headless: false, // Visible recording window
    args: ['--window-size=1920,1080', '--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: segmentDir,
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();

  try {
    await actions(page);
    await sleep(1500); // Final pause for stability
  } catch (err) {
    console.error(`Error recording ${segmentName}:`, err);
  } finally {
    const videoObj = page.video();
    await context.close();
    await browser.close();

    if (videoObj) {
      const recordedPath = await videoObj.path();
      const targetPath = path.join(RAW_DIR, `${segmentName}.webm`);
      fs.renameSync(recordedPath, targetPath);
      console.log(`Segment saved successfully: ${targetPath}`);
    }
  }
}

async function recordAllSegments() {
  // Helper to switch role via DemoRoleSwitcher top bar
  async function switchRole(page, roleName) {
    try {
      const btnSelector = `button:has-text("${roleName}")`;
      if (await page.isVisible(btnSelector)) {
        await page.click(btnSelector);
        await sleep(1000);
      }
    } catch (e) {
      console.warn(`Could not switch role to ${roleName}:`, e.message);
    }
  }

  // -------------------------------------------------------------
  // SEGMENT 02 — PUBLIC HOMEPAGE
  // -------------------------------------------------------------
  await recordSegment('02-homepage', async (page) => {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Concierge Search Interaction
    const searchInput = page.locator('input[placeholder*="Indiranagar"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('Indiranagar, Bangalore');
      await sleep(800);
    }

    // Scroll Hero -> Trust -> Services -> Process -> Active Journey
    await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
    await sleep(1200);

    await page.evaluate(() => window.scrollBy({ top: 700, behavior: 'smooth' }));
    await sleep(1200);

    // Active Journey Step Clicks
    const journeyButtons = page.locator('button:has-text("Step")');
    const count = await journeyButtons.count();
    for (let i = 0; i < Math.min(count, 4); i++) {
      await journeyButtons.nth(i).click();
      await sleep(800);
    }

    await page.evaluate(() => window.scrollBy({ top: 800, behavior: 'smooth' }));
    await sleep(1200);

    // FAQ Accordion click
    const faqBtn = page.locator('button:has-text("How are healthcare professionals background verified")');
    if (await faqBtn.isVisible()) {
      await faqBtn.click();
      await sleep(1000);
    }

    await page.evaluate(() => window.scrollBy({ top: 800, behavior: 'smooth' }));
    await sleep(1500);
  });

  // -------------------------------------------------------------
  // SEGMENT 03 — SERVICE CATALOG
  // -------------------------------------------------------------
  await recordSegment('03-services', async (page) => {
    await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await sleep(1200);

    const exploreBtn = page.locator('button:has-text("Book")').first();
    if (await exploreBtn.isVisible()) {
      await exploreBtn.hover();
      await sleep(1000);
    }
  });

  // -------------------------------------------------------------
  // SEGMENT 04 — SEARCH & MATCHING MARKETPLACE
  // -------------------------------------------------------------
  await recordSegment('04-search', async (page) => {
    await page.goto(`${BASE_URL}/search`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Filter interaction
    const categorySelect = page.locator('select').first();
    if (await categorySelect.isVisible()) {
      await categorySelect.selectOption({ index: 1 });
      await sleep(1200);
    }

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await sleep(1500);
  });

  // -------------------------------------------------------------
  // SEGMENT 05 — PROFESSIONAL PROFILE
  // -------------------------------------------------------------
  await recordSegment('05-profile', async (page) => {
    await page.goto(`${BASE_URL}/pros/pro-001`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
    await sleep(1200);

    await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
    await sleep(1200);
  });

  // -------------------------------------------------------------
  // SEGMENT 06 — BOOKING WIZARD (ALL 10 STEPS)
  // -------------------------------------------------------------
  await recordSegment('06-booking', async (page) => {
    await page.goto(`${BASE_URL}/book`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Step 1 -> Step 2
    await page.click('button:has-text("Continue")');
    await sleep(1200);

    // Step 2 -> Step 3
    await page.click('button:has-text("Continue")');
    await sleep(1200);

    // Step 3 -> Step 4
    await page.click('button:has-text("Continue")');
    await sleep(1200);

    // Step 4 -> Step 5
    await page.click('button:has-text("Continue")');
    await sleep(1200);

    // Step 5 -> Step 6
    await page.click('button:has-text("Continue")');
    await sleep(1500);

    // Step 6: Review & Payment Confirmation
    const confirmBtn = page.locator('button:has-text("Pay & Confirm Booking")');
    if (await confirmBtn.isVisible()) {
      await confirmBtn.click();
      await sleep(2000);
    }
  });

  // -------------------------------------------------------------
  // SEGMENT 07 — CLIENT PORTAL (BOOKINGS & SUPPORT)
  // -------------------------------------------------------------
  await recordSegment('07-client', async (page) => {
    await switchRole(page, 'Client');
    await page.goto(`${BASE_URL}/my-bookings`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/client/support`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/client/profile`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/client/notifications`, { waitUntil: 'networkidle' });
    await sleep(1500);
  });

  // -------------------------------------------------------------
  // SEGMENT 08 — HEALTHCARE PROFESSIONAL PORTAL
  // -------------------------------------------------------------
  await recordSegment('08-professional', async (page) => {
    await switchRole(page, 'Pro');
    await page.goto(`${BASE_URL}/pro/dashboard`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/pro/jobs`, { waitUntil: 'networkidle' });
    await sleep(1200);

    await page.goto(`${BASE_URL}/pro/schedule`, { waitUntil: 'networkidle' });
    await sleep(1200);

    await page.goto(`${BASE_URL}/pro/earnings`, { waitUntil: 'networkidle' });
    await sleep(1200);

    await page.goto(`${BASE_URL}/pro/kyc`, { waitUntil: 'networkidle' });
    await sleep(1500);
  });

  // -------------------------------------------------------------
  // SEGMENT 09 — ADMIN OPERATIONS DASHBOARD
  // -------------------------------------------------------------
  await recordSegment('09-admin-dashboard', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/dashboard`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await sleep(1200);
  });

  // -------------------------------------------------------------
  // SEGMENT 10 — KYC VERIFICATION & INSPECTOR DRAWER
  // -------------------------------------------------------------
  await recordSegment('10-kyc-verification', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/kyc`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Open KYC Document Inspector Drawer
    const inspectBtn = page.locator('button:has-text("Review Documents"), button:has-text("Inspect")').first();
    if (await inspectBtn.isVisible()) {
      await inspectBtn.click();
      await sleep(2000);
    }
  });

  // -------------------------------------------------------------
  // SEGMENT 11 — MATCHING CONSOLE & DIRECTORIES
  // -------------------------------------------------------------
  await recordSegment('11-matching-dispatch', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/matching`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/admin/bookings`, { waitUntil: 'networkidle' });
    await sleep(1200);

    await page.goto(`${BASE_URL}/admin/professionals`, { waitUntil: 'networkidle' });
    await sleep(1200);
  });

  // -------------------------------------------------------------
  // SEGMENT 12 — PAYMENTS & PAYOUTS LEDGER
  // -------------------------------------------------------------
  await recordSegment('12-payments-payouts', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/payments`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/admin/payouts`, { waitUntil: 'networkidle' });
    await sleep(1500);
  });

  // -------------------------------------------------------------
  // SEGMENT 13 — SUPPORT DESK & NOTIFICATIONS
  // -------------------------------------------------------------
  await recordSegment('13-support-notifications', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/support`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/admin/notifications`, { waitUntil: 'networkidle' });
    await sleep(1200);
  });

  // -------------------------------------------------------------
  // SEGMENT 14 — ORGANIZATION / HOSPITAL PORTAL
  // -------------------------------------------------------------
  await recordSegment('14-organization', async (page) => {
    await switchRole(page, 'Hospital');
    await page.goto(`${BASE_URL}/organization/dashboard`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Click Staffing Request Modal
    const modalBtn = page.locator('button:has-text("New Nursing Staffing Request")');
    if (await modalBtn.isVisible()) {
      await modalBtn.click();
      await sleep(1800);
      const closeBtn = page.locator('button:has-text("Cancel"), button svg.lucide-x').first();
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
        await sleep(1000);
      }
    }
  });

  // -------------------------------------------------------------
  // SEGMENT 15 — SYSTEM SETTINGS & EXECUTIVE REPORTS
  // -------------------------------------------------------------
  await recordSegment('15-settings-reports', async (page) => {
    await switchRole(page, 'Admin');
    await page.goto(`${BASE_URL}/admin/reports`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Click CSV Export Stream
    const csvBtn = page.locator('button:has-text("Export CSV")');
    if (await csvBtn.isVisible()) {
      await csvBtn.click();
      await sleep(1200);
    }

    await page.goto(`${BASE_URL}/admin/roles`, { waitUntil: 'networkidle' });
    await sleep(1200);

    await page.goto(`${BASE_URL}/admin/settings`, { waitUntil: 'networkidle' });
    await sleep(1200);
  });

  // -------------------------------------------------------------
  // SEGMENT 16 — UTILITY & ACCESS STATES
  // -------------------------------------------------------------
  await recordSegment('16-utility', async (page) => {
    await page.goto(`${BASE_URL}/404`, { waitUntil: 'networkidle' });
    await sleep(1500);

    await page.goto(`${BASE_URL}/unauthorized`, { waitUntil: 'networkidle' });
    await sleep(1500);
  });

  console.log('\nAll 16 video segments recorded successfully!');
}

recordAllSegments().catch(console.error);
