# CareConnect Client SEO & Performance Specifications

This document outlines the Search Engine Optimization (SEO) strategies and Performance requirements for the CareConnect client-facing platform. As a React Single Page Application (SPA), we must implement specific strategies to ensure search engines can crawl, index, and rank our content, while delivering a lightning-fast experience for users.

## 1. Page Titles & Meta

Dynamic and static meta tags must be managed using `react-helmet-async` (or equivalent metadata management if using a framework like Next.js, though we are using Vite, so Helmet is necessary).

| Page | Title Tag (`<title>`) | Meta Description (`<meta name="description">`) | Canonical URL |
|------|-----------------------|------------------------------------------------|---------------|
| **Home** | `Home Healthcare & Nursing Services in Delhi NCR | CareConnect` | `Professional home healthcare, nursing, and caregiver services in Delhi, Noida, and Gurugram. Book verified professionals for your loved ones.` | `https://careconnect.in/` |
| **Services (Index)** | `Our Home Care Services | Nursing, Physio, Attendants | CareConnect` | `Explore our range of in-home healthcare services including ICU care, physiotherapy, elderly care, and doctor visits across Delhi NCR.` | `https://careconnect.in/services` |
| **Service Detail (Nursing)** | `Home Nursing Services in Delhi NCR | CareConnect` | `Expert home nursing services for post-surgical care, chronic illness, and elderly support. Certified and verified nurses at your doorstep.` | `https://careconnect.in/services/nursing` |
| **Service Detail (Physio)** | `At-Home Physiotherapy in Delhi NCR | CareConnect` | `Professional physiotherapists for home visits. Effective treatment for mobility issues, post-surgery rehab, and pain management.` | `https://careconnect.in/services/physiotherapy` |
| **About Us** | `About CareConnect | Our Mission in Home Healthcare` | `Learn about CareConnect's mission to provide compassionate, premium, and reliable home healthcare services in the Delhi NCR region.` | `https://careconnect.in/about` |
| **How It Works** | `How to Book Home Healthcare | CareConnect Process` | `Understand how easy it is to book verified healthcare professionals with CareConnect. Learn about our vetting and matching process.` | `https://careconnect.in/how-it-works` |
| **Contact** | `Contact CareConnect | Support & Inquiries` | `Get in touch with the CareConnect team for support, bookings, or inquiries about our home healthcare services in Delhi NCR.` | `https://careconnect.in/contact` |

*Note: All meta titles must append ` | CareConnect` and stay under 60 characters. Descriptions must stay under 160 characters.*

## 2. Core Web Vitals Targets

The platform must meet or exceed Google's Core Web Vitals thresholds to ensure excellent user experience and SEO ranking.

- **Largest Contentful Paint (LCP)**: `< 2.5s`
  - *Strategy*: Preload hero images, critical CSS inline, defer non-critical JS.
- **Interaction to Next Paint (INP)**: `< 200ms`
  - *Strategy*: Break up long tasks, optimize React rendering, use `useMemo` and `useCallback` appropriately to prevent unnecessary re-renders.
- **Cumulative Layout Shift (CLS)**: `< 0.1`
  - *Strategy*: Provide explicit `width` and `height` attributes for all images. Pre-allocate space for dynamic content (e.g., using skeleton loaders of the exact final dimensions).

## 3. Image Optimization

Images are typically the largest payload on healthcare sites. Strict optimization rules apply:

### 3.1 Formats and Delivery
- **Primary Format**: WebP (generates smaller files than JPEG/PNG while maintaining quality).
- **Fallback**: JPEG or PNG (for older browsers, handled via `<picture>` tag).
- **Compression**: 80% quality setting for WebP.

### 3.2 Loading Strategies
- **Lazy Loading**: All images "below the fold" must use `loading="lazy"`.
- **Priority Loading**: Hero images and LCP candidates must use `fetchpriority="high"` and NOT be lazy-loaded.
- **Responsive Srcset**: Provide multiple resolutions for different viewports to prevent mobile devices from downloading desktop-sized images.
  ```html
  <img src="hero-sm.webp" 
       srcset="hero-sm.webp 400w, hero-md.webp 800w, hero-lg.webp 1200w" 
       sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
       alt="Nurse assisting patient">
  ```

## 4. Bundle Optimization

As a Vite/React application, bundle size management is critical.

### 4.1 Code Splitting
- **Route-based Splitting**: Use `React.lazy()` and `<Suspense>` to split the bundle by route. Users navigating to the homepage should not download the dashboard code.
- **Component-based Splitting**: Heavy components (e.g., interactive maps, complex charts, large Lottie animations) must be lazy-loaded dynamically when they come into the viewport.

### 4.2 Lazy Loading Authenticated Areas
- The entire Client Dashboard (`/dashboard/*`) and Booking Wizard (`/book/*`) must be chunked separately. Search engine crawlers do not execute these paths, so keeping them out of the main bundle improves the initial load for indexable pages.

### 4.3 Asset Optimization
- **Tree Shaking**: Ensure imports from libraries like Lucide React are specific (`import { Heart } from 'lucide-react'`) rather than bulk imports, ensuring only used icons are bundled.
- **CSS Extraction**: Vite handles this automatically, but ensure no large inline CSS strings are present in JS files.

## 5. Structured Data (JSON-LD)

To enhance search engine understanding and enable rich snippets, we must inject JSON-LD structured data into the `<head>` of relevant pages.

### 5.1 Organization Schema
Applied to the Homepage.
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "CareConnect",
  "url": "https://careconnect.in",
  "logo": "https://careconnect.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
}
```

### 5.2 Service Schema
Applied to individual Service pages (e.g., Nursing).
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  "name": "Home Nursing Care",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "CareConnect"
  },
  "areaServed": {
    "@type": "City",
    "name": "Delhi"
  },
  "description": "Professional in-home nursing care including post-operative support and chronic disease management."
}
```

### 5.3 FAQ Schema
Applied to the Homepage and Service pages to capture "People Also Ask" SERP features.
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How quickly can a caregiver be assigned?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For urgent requirements, we can assign a verified caregiver within 4-6 hours in the Delhi NCR region."
    }
  }]
}
```

### 5.4 Breadcrumb Schema
Applied across all sub-pages for clear hierarchy in search results.

## 6. Accessibility SEO

Accessibility and SEO are deeply intertwined. The following must be strictly implemented:

### 6.1 Semantic HTML
- Use proper semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`).
- Avoid using `<div>` when a more semantic tag is appropriate.

### 6.2 Heading Hierarchy
- Every page must have exactly one `<h1>`.
- Headings (`<h2>` to `<h6>`) must follow a logical, nested structure without skipping levels (e.g., don't jump from `<h2>` to `<h4>`).

### 6.3 Image Alt Text
- All meaningful images must have descriptive `alt` text.
- Decorative images (e.g., SVG textures, background patterns) must have empty alt text (`alt=""`) or be implemented via CSS background properties so screen readers ignore them.

### 6.4 Link Text Context
- Never use "click here" or "read more" as standalone link text.
- Links must describe their destination (e.g., `Read more about our nursing services`).
- Use `aria-label` on links that are visually iconic (e.g., a social media icon link).

## 7. Crawlability & Indexing

- **Robots.txt**: Allow crawling of all public marketing pages. Disallow `/dashboard/`, `/book/`, `/api/`, and `/admin/`.
- **XML Sitemap**: Generate a dynamic `sitemap.xml` that updates when new service pages or content are added. Submit this via Google Search Console.
- **Canonical Tags**: Ensure every page has a self-referencing canonical tag to prevent duplicate content issues (especially if URL parameters are used for tracking).
