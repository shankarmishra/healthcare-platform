import { chromium } from 'playwright';
import path from 'path';

const chapters = [
  {
    id: '01',
    portal: 'ECOSYSTEM OVERVIEW',
    title: 'Product Overview',
    subtitle: 'One connected care ecosystem for Clients, Professionals, Operations & Organizations.'
  },
  {
    id: '02',
    portal: 'PUBLIC EXPERIENCE',
    title: 'Homepage & Concierge Discovery',
    subtitle: 'Hospital-grade clinical care at your doorstep with 45s automated provider matching.'
  },
  {
    id: '03',
    portal: 'SERVICE CATALOG',
    title: 'Specialized Medical Services',
    subtitle: 'Home Nursing, Caregivers, Physiotherapy, Doctor Visits & ICU Care.'
  },
  {
    id: '04',
    portal: 'CLIENT MARKETPLACE',
    title: 'Search & Provider Matching',
    subtitle: 'Filter 60+ verified professionals by category, rating, experience & distance.'
  },
  {
    id: '05',
    portal: 'PROVIDER CREDENTIALS',
    title: 'Professional Clinical Profile',
    subtitle: 'Council registration audit, background verification & patient review ratings.'
  },
  {
    id: '06',
    portal: 'CLIENT BOOKING',
    title: 'Guided Care Booking Flow',
    subtitle: '10-step concierge selection with transparent fee breakdown & session persistence.'
  },
  {
    id: '07',
    portal: 'CLIENT PORTAL',
    title: 'My Bookings & Patient Console',
    subtitle: 'Track active care visit status timeline, patient profiles & notification history.'
  },
  {
    id: '08',
    portal: 'PROFESSIONAL PORTAL',
    title: 'Healthcare Provider Dashboard',
    subtitle: 'Real-time shift alerts, GPS transit check-in, weekly schedule & earnings ledger.'
  },
  {
    id: '09',
    portal: 'OPERATIONS COMMAND CENTER',
    title: 'Admin Operations Dashboard',
    subtitle: 'Real-time platform monitor, attention-required queue & live dispatch feed.'
  },
  {
    id: '10',
    portal: 'CREDENTIAL AUDIT',
    title: 'KYC Verification & Inspector',
    subtitle: 'Side-by-side medical license audit, document rotation, zoom & verification approval.'
  },
  {
    id: '11',
    portal: 'DISPATCH & MATCHING',
    title: 'Matching Console & Directory',
    subtitle: 'Algorithmic provider scoring, candidate evaluation & professional roster management.'
  },
  {
    id: '12',
    portal: 'FINANCIAL OPERATIONS',
    title: 'Payments & Payouts Ledger',
    subtitle: 'Client transaction audit, UPI/Card gateway logs & professional bank payout batches.'
  },
  {
    id: '13',
    portal: 'OPERATIONS DESK',
    title: 'Support Desk & Notifications',
    subtitle: '3-column customer operations desk, ticket threading & platform notification manager.'
  },
  {
    id: '14',
    portal: 'ORGANIZATION PORTAL',
    title: 'Hospital B2B Staffing Portal',
    subtitle: 'Manipal Hospital staffing requisitions, weekly ward roster & timesheet approvals.'
  },
  {
    id: '15',
    portal: 'SYSTEM & REPORTS',
    title: 'Executive Analytics & RBAC',
    subtitle: 'Gross merchandise volume reports, CSV Blob export stream & role permissions matrix.'
  },
  {
    id: '16',
    portal: 'UTILITY & ACCESS',
    title: 'Authentication & Error Handling',
    subtitle: 'Role-based access modal, 404 illustration page & unauthorized route restriction.'
  },
  {
    id: '17',
    portal: 'ECOSYSTEM RECAP',
    title: 'End-to-End Platform Recap',
    subtitle: 'Complete healthcare technology solution for Patients, Providers & Hospitals.'
  }
];

async function generateTitleCards() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  console.log('Generating 17 title card images...');

  for (const ch of chapters) {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        body {
          width: 1920px;
          height: 1080px;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#0EA5A4 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.05;
        }
        .card {
          width: 1400px;
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: 32px;
          padding: 80px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .eyebrow {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 4px;
          color: #0F766E;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .eyebrow-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0EA5A4;
        }
        .badge {
          background: #F0FDFA;
          border: 1.5px solid #CCFBF1;
          color: #0F766E;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 100px;
          letter-spacing: 1px;
        }
        .title-row {
          margin-top: 10px;
        }
        .title-number {
          font-size: 64px;
          font-weight: 900;
          color: #0EA5A4;
          margin-right: 16px;
        }
        .title-text {
          font-size: 56px;
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .subtitle {
          font-size: 24px;
          font-weight: 500;
          color: #475569;
          line-height: 1.5;
          max-width: 1000px;
          margin-top: 8px;
        }
        .footer-line {
          height: 4px;
          background: linear-gradient(90deg, #0EA5A4 0%, #2563EB 100%);
          border-radius: 2px;
          width: 120px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="bg-grid"></div>
      <div class="card">
        <div class="top-row">
          <div class="eyebrow">
            <div class="eyebrow-dot"></div>
            <span>HEALTHCARE PLATFORM • ${ch.portal}</span>
          </div>
          <div class="badge">LIVE PRODUCT WALKTHROUGH</div>
        </div>
        <div class="title-row">
          <span class="title-number">${ch.id}</span>
          <span class="title-text">${ch.title}</span>
        </div>
        <div class="subtitle">${ch.subtitle}</div>
        <div class="footer-line"></div>
      </div>
    </body>
    </html>
    `;

    await page.setContent(html);
    const outputPath = path.join(process.cwd(), 'video-output', 'overlays', `title-card-${ch.id}.png`);
    await page.screenshot({ path: outputPath });
    console.log(`Saved: title-card-${ch.id}.png`);
  }

  await browser.close();
  console.log('All 17 title card images generated successfully!');
}

generateTitleCards().catch(console.error);
