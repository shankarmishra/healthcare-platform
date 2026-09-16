# 19. Performance & SEO Strategy

This is the Performance & SEO Strategy for the Healthcare Staffing & Home Care Platform.

---

## 1. Performance Philosophy

*   **Speed is Critical:** Healthcare platforms must be fast and reliable. Users are often in high-stress situations.
*   **Operational Efficiency:** Operational screens (professional, admin, organizational dashboards) require near-instant response times to handle large volumes of data.
*   **Conversion Driven:** Marketing pages benefit from fast first paint to improve user acquisition and conversion.
*   **Performance is a Feature:** Performance is treated as a core feature of the product, not an afterthought.

> **[BUSINESS RULE]** The platform must maintain a light-theme only interface with brand colors Healthcare Teal `#0EA5A4`, Medical Blue `#2563EB`, and primary text `#0F172A`. All UI optimization must respect this palette.
> **[UI RULE]** Only `Lucide React` icons and the `Manrope` (with `Inter` fallback) font family are permitted in the application to minimize asset variations and bundle size.

---

## 2. Performance Budgets

Establishing strict performance budgets ensures that the application remains fast as new features are added.

### 2.1 Core Web Vitals Targets

| Metric | Target | Measurement | Requirement Tag |
|---|---|---|---|
| **Largest Contentful Paint (LCP)** | < 2.5s | 75th percentile | **[TECHNICAL RULE]** |
| **First Input Delay (FID)** | < 100ms | 75th percentile | **[TECHNICAL RULE]** |
| **Cumulative Layout Shift (CLS)** | < 0.1 | 75th percentile | **[TECHNICAL RULE]** |
| **Time to Interactive (TTI)** | < 3.5s | Median | **[TECHNICAL RULE]** |
| **First Contentful Paint (FCP)** | < 1.8s | 75th percentile | **[TECHNICAL RULE]** |

### 2.2 Bundle Size Budget

| Category | Budget | Requirement Tag |
|---|---|---|
| **Initial JS bundle** | < 200KB gzipped | **[TECHNICAL RULE]** |
| **Initial CSS** | < 50KB gzipped | **[TECHNICAL RULE]** |
| **Total page weight (homepage)** | < 1.5MB including media | **[TECHNICAL RULE]** |
| **Per-route code split chunk** | < 100KB gzipped | **[TECHNICAL RULE]** |

### 2.3 Asset Budgets

| Asset Type | Budget | Format | Requirement Tag |
|---|---|---|---|
| **Hero image** | < 200KB | WebP/AVIF | **[TECHNICAL RULE]** |
| **Professional avatar** | < 50KB | WebP | **[TECHNICAL RULE]** |
| **Hero video** | < 2MB | WebM | **[TECHNICAL RULE]** |
| **Lottie animation** | < 50KB | JSON | **[TECHNICAL RULE]** |
| **Icon (Lucide React)** | ~1KB each | Tree-shaken SVG | **[TECHNICAL RULE]** |

---

## 3. Optimization Strategies

### 3.1 Code Splitting

*   **Route-based code splitting:** Implemented via `React.lazy()` and `Suspense`. **[TECHNICAL RULE]**
*   **Portal Separation:** Each portal (Client, Professional, Admin, Organization) must be compiled as a separate chunk to prevent cross-contamination of bundle size. **[TECHNICAL RULE]**
*   **Heavy Libraries:** Libraries such as `recharts`, `framer-motion`, and map rendering tools must be loaded lazily only when required by the user interface. **[TECHNICAL RULE]**
*   **Map Component:** Loaded on demand exclusively on the search page and location selection flows. **[TECHNICAL RULE]**

### 3.2 Image Optimization

*   **Responsive Images:** Use the `<picture>` element with an AVIF > WebP > PNG fallback chain. Use `srcset` with appropriate sizes. **[TECHNICAL RULE]**
*   **Lazy Loading:** Implement `loading="lazy"` for all images rendering below the fold. **[TECHNICAL RULE]**
*   **CLS Prevention:** Provide explicit `width` and `height` attributes on all image tags to prevent Cumulative Layout Shift. **[TECHNICAL RULE]**
*   **PNG Cutouts:** Serve optimized versions of PNG cutout characters per viewport size. **[TECHNICAL RULE]**
*   **Professional Avatars:** Serve 80px (thumbnail) and 160px (detail) variants to optimize list rendering versus profile views. **[TECHNICAL RULE]**

### 3.3 Video Optimization

*   **Attributes:** All videos must utilize `muted autoplay playsinline loop` + `loading="lazy"`. **[TECHNICAL RULE]**
*   **Poster Image:** A static poster image must always be provided to prevent blank frames during initial load. **[UI RULE]**
*   **Mobile Experience:** Serve a static poster instead of video if `matchMedia('(max-width: 768px)')` is true, or if `connection.effectiveType === '2g' || '3g'`. **[TECHNICAL RULE]**
*   **Preloading:** Default to `preload="none"`. Use `preload="metadata"` exclusively for hero videos. **[TECHNICAL RULE]**
*   **Compression:** Prefer WebM H.265 with MP4 H.264 as a fallback. **[TECHNICAL RULE]**
*   **Viewport Limits:** No more than one autoplay video is permitted in the viewport at any time. **[UI RULE]**

### 3.4 Font Optimization

*   **Primary Font:** The application strictly uses `Manrope` with an `Inter` fallback. **[UI RULE]**
*   **Google Fonts:** Preload critical weights (400, 600, 700). **[TECHNICAL RULE]**
*   **Display Swap:** Implement `font-display: swap` to prevent Flash of Invisible Text (FOIT). **[TECHNICAL RULE]**
*   **Weight Limits:** Limit loaded weights to a maximum of 5 (400, 500, 600, 700, 800) to conserve bandwidth. **[TECHNICAL RULE]**
*   **Self-Hosting:** Consider self-hosting fonts for production to eliminate third-party request blocking. **[OPEN DECISION]**

### 3.5 Component Performance

*   **Memoization:** Utilize `React.memo` for frequently re-rendered components, particularly table rows and professional listing cards. **[TECHNICAL RULE]**
*   **Expensive Computations:** Wrap expensive computations in `useMemo` and stable callbacks in `useCallback`. **[TECHNICAL RULE]**
*   **Virtual Scrolling:** Implement virtual scrolling for long lists such as professional search results or admin tables.
    *   **[ASSUMPTION]** Virtual scrolling will be implemented only if lists are expected to exceed 100 items simultaneously.
*   **Debouncing:** Debounce search inputs by 300ms to reduce unnecessary re-renders and API calls. **[TECHNICAL RULE]**

### 3.6 CSS Performance

*   **Tailwind CSS:** Ensure unused styles are purged in production builds. **[TECHNICAL RULE]**
*   **Critical CSS:** Inline above-the-fold styles where possible for marketing pages. **[TECHNICAL RULE]**
*   **Runtime Overhead:** Avoid CSS-in-JS runtime overhead by utilizing Tailwind utility classes exclusively. **[TECHNICAL RULE]**
*   **Transitions:** Favor native CSS transitions for simple hover and focus effects rather than heavy animation libraries like `framer-motion`. **[UI RULE]**

### 3.7 Network Performance

*   **API Calls:** Ensure all API calls triggered by rapid user input are debounced and deduplicated. **[TECHNICAL RULE]**
*   **Prefetching:** Prefetch the next likely route on interaction (e.g., fetch the professional profile data when the user hovers over a profile card). **[TECHNICAL RULE]**
*   **Caching:** Implement the SWR (Stale-While-Revalidate) pattern for frequently accessed, non-real-time data. **[TECHNICAL RULE]**
*   **Offline Support:**
    *   **[ASSUMPTION]** Service Worker implementation for offline support is deferred to post-MVP phases.

---

## 4. Rendering Strategy

The platform rendering strategy determines how the application is delivered to the browser, impacting both SEO and perceived performance.

*   **Current State:** The MVP utilizes Client-Side Rendering (CSR) via Vite + React. **[TECHNICAL RULE]**
*   **Public Pages:**
    *   **[OPEN DECISION]** Evaluate Server-Side Rendering (SSR) or Static Site Generation (SSG) for public marketing pages to improve SEO and LCP metrics.
*   **Migration Path:**
    *   **[ASSUMPTION]** The MVP relies completely on CSR for all pages. An SSR migration path will be documented but not implemented during the initial launch phase.

---

## 5. SEO Strategy

Optimizing for search engines ensures the platform ranks highly for relevant queries, driving organic client acquisition.

### 5.1 Pages to Index

The following pages are intended for search engine indexing.

| Page | Index? | Priority | Change Frequency | Requirement Tag |
|---|---|---|---|---|
| **Homepage** | Yes | 1.0 | Weekly | **[BUSINESS RULE]** |
| **Services catalog** | Yes | 0.9 | Monthly | **[BUSINESS RULE]** |
| **Individual service pages** (Home Nursing, Caregiver, etc.) | Yes | 0.8 | Monthly | **[BUSINESS RULE]** |
| **Professional public profiles** | Yes (**[OPEN DECISION]**) | 0.7 | Monthly | **[BUSINESS RULE]** |
| **How it works** | Yes | 0.6 | Monthly | **[BUSINESS RULE]** |
| **For Organizations** | Yes | 0.6 | Monthly | **[BUSINESS RULE]** |
| **Support/FAQ** | Yes | 0.5 | Monthly | **[BUSINESS RULE]** |

### 5.2 Pages NOT to Index

The following routes must be explicitly blocked from search engine crawlers.

| Page | Reason | Requirement Tag |
|---|---|---|
| `/book/*` | Private booking flow containing sensitive intent | **[SECURITY RULE]** |
| `/my-bookings` | Private client dashboard and history | **[SECURITY RULE]** |
| `/booking/:id/track` | Private tracking data | **[SECURITY RULE]** |
| `/pro/dashboard`, `/pro/*` | Private professional portal | **[SECURITY RULE]** |
| `/admin/*` | Private admin portal | **[SECURITY RULE]** |
| `/org/*` | Private organization portal | **[SECURITY RULE]** |
| **Login/Register** | Utility pages with no SEO value | **[BUSINESS RULE]** |
| **Demo mode screens** | Development only (behind `demoMode` flag) | **[TECHNICAL RULE]** |

### 5.3 Meta Tags per Page

For each indexable page, define specific Open Graph and Meta properties.

| Page | Title | Description | OG Image |
|---|---|---|---|
| **Homepage** | `Trusted Healthcare Professionals at Your Doorstep | [Platform Name]` | `Find verified healthcare professionals for home nursing, caregiving, physiotherapy and more. Book trusted care with confidence.` | `og-homepage.webp` |
| **Services** | `Healthcare Services | Home Nursing, Caregiving, Physiotherapy | [Platform Name]` | `Explore our range of home healthcare services...` | `og-services.webp` |
| **[Service]** | `{Service Name} | Home Healthcare | [Platform Name]` | Service-specific description based on the CMS/DB record | `og-service-{slug}.webp` |

### 5.4 Semantic HTML for SEO

*   **Heading Hierarchy:** Strictly one `<h1>` per page. Ensure proper cascading heading hierarchy (h1 > h2 > h3). **[TECHNICAL RULE]**
*   **Semantic Landmarks:** Utilize standard HTML5 semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`). **[TECHNICAL RULE]**
*   **Structured Data:**
    *   **[OPEN DECISION]** Implementation of JSON-LD structured data for healthcare service schema.
*   **Accessibility & SEO:** Ensure comprehensive `alt` text on all meaningful images. **[UI RULE]**
*   **Link Text:** Use descriptive link text rather than generic "click here" labels. **[UI RULE]**

### 5.5 Technical SEO

*   **Canonicalization:** Define Canonical URLs on all indexable public pages. **[TECHNICAL RULE]**
*   **Robots.txt:** Implement a `robots.txt` file blocking `/admin`, `/pro/*`, and `/org/*`. **[TECHNICAL RULE]**
*   **Sitemaps:** Maintain a `sitemap.xml` file including all public pages.
    *   **[ASSUMPTION]** Sitemap generation will be automated within the build pipeline.
*   **Error Handling:** Provide a proper 404 page returning a strict 404 HTTP status code. **[TECHNICAL RULE]**
*   **Redirects:** Handle redirects appropriately (301 for permanent changes, 302 for temporary routing). **[TECHNICAL RULE]**

---

## 6. Monitoring

Continuous monitoring is required to ensure performance budgets are maintained post-launch.

*   **CI/CD Integration:**
    *   **[ASSUMPTION]** Lighthouse CI will be integrated into the build pipeline to block PRs that degrade performance scores below acceptable thresholds.
*   **User Monitoring:**
    *   **[OPEN DECISION]** Selection of a Real User Monitoring (RUM) tool (e.g., Sentry, Datadog) to capture field data.
*   **Key Metrics to Track:** Continuous tracking of LCP, FID, CLS, TTI, total page load time, and unhandled JS errors. **[TECHNICAL RULE]**

---

## 7. Performance Testing Checklist

Prior to any major release, the following checklist must be validated:

*   [ ] Lighthouse score > 90 (Performance) on the homepage. **[TECHNICAL RULE]**
*   [ ] Zero layout shift (CLS = 0) upon page load on core marketing pages. **[TECHNICAL RULE]**
*   [ ] Hero video loads poster image immediately, with the video asset lazy loaded. **[TECHNICAL RULE]**
*   [ ] All below-the-fold images are properly lazy loaded. **[TECHNICAL RULE]**
*   [ ] Client-side route transitions occur in < 300ms. **[TECHNICAL RULE]**
*   [ ] Professional search results render in < 500ms. **[TECHNICAL RULE]**
*   [ ] Admin dashboard tables containing up to 25 rows render in < 200ms. **[TECHNICAL RULE]**
*   [ ] Mobile homepage achieves interactive state in < 3s on simulated 4G connections. **[TECHNICAL RULE]**
*   [ ] No render-blocking CSS/JS resources are present in the document `<head>`. **[TECHNICAL RULE]**
*   [ ] Font swapping is visible and resolves within 100ms. **[TECHNICAL RULE]**

---

## 8. Acceptance Criteria (GIVEN / WHEN / THEN)

### Scenario: First Time Visitor on Mobile

*   **GIVEN** a new user is accessing the platform homepage on a mobile device over a 3G/4G connection
*   **WHEN** they request the root URL (`/`)
*   **THEN** the initial HTML and Critical CSS must load under 1.5 seconds
*   **AND** the `Manrope` font must use `swap` display to prevent text from being invisible
*   **AND** any hero videos must default to a lightweight static poster image
*   **AND** the Largest Contentful Paint (LCP) must trigger under 2.5 seconds.

### Scenario: Professional Dashboard Heavy List Rendering

*   **GIVEN** an Admin is viewing the "All Professionals" view in the admin portal
*   **WHEN** the dataset returns 500+ professionals
*   **THEN** the React application must employ virtual scrolling for the table
*   **AND** the DOM must only contain the nodes visible in the viewport plus a small overscan buffer
*   **AND** scrolling must maintain a consistent 60fps frame rate without noticeable jank.

### Scenario: Image Optimization Execution

*   **GIVEN** a Client is browsing a professional's profile
*   **WHEN** the professional's avatar is rendered on screen
*   **THEN** the browser must serve the WebP format image
*   **AND** the file size must be under 50KB
*   **AND** explicit `width` and `height` dimensions must be present on the `img` tag to ensure zero Cumulative Layout Shift (CLS).

### Scenario: Avoiding Search Engine Penalties

*   **GIVEN** search engine web crawlers are indexing the site
*   **WHEN** the crawler attempts to access `/book/12345/checkout`
*   **THEN** the `robots.txt` rules and on-page `noindex` meta tags must instruct the crawler to ignore the page
*   **AND** no internal booking state or patient information is exposed to the search index.

### Scenario: Code Splitting by Portal

*   **GIVEN** a Professional logs into the `/pro/dashboard`
*   **WHEN** the client-side bundle is downloaded
*   **THEN** the browser must only download the chunks associated with the shared UI and the Professional portal
*   **AND** none of the Admin or Organization portal specific Javascript must be loaded over the network.
