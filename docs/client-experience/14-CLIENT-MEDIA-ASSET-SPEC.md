# CareConnect Client Media & Asset Specification

This document comprehensively details every image, illustration, icon, and visual asset required for the CareConnect client experience. This specification ensures consistency in visual language, tone, and technical delivery across the platform.

## 1. Photography Requirements

### 1.1 General Photography Guidelines
- **Source**: Indian healthcare context, specifically urban/semi-urban settings.
- **Models**: Diverse Indian demographics. Represent families of different compositions and ages, ensuring authentic representation of the Delhi NCR target market.
- **Setting**: Clean, well-lit, realistic Indian homes. Avoid sterile, hospital-like environments. The home should feel lived-in but tidy.
- **Mood**: Warm, professional, reassuring, empathetic. Expressions should be calm and positive, not overly dramatic or posed.
- **Technical Specifications**:
  - Minimum width: 800px for content, 1920px for hero images.
  - Formats: Optimized WebP with fallback JPG.
  - Resolution: 72 DPI for web, but maintain original high-res assets in storage.
  - Color Profile: sRGB.
- **Aspect Ratios**: 
  - Hero sections: 16:9
  - Service Cards: 3:2
  - Professional Profiles: 1:1
  - Thumbnails: 1:1

### 1.2 Page-Specific Photo Requirements

#### 1.2.1 Homepage
| Asset Name | Description | Specs |
|------------|-------------|-------|
| `hero-nurse-home` | A professional CareConnect nurse in teal scrubs, warmly interacting with an elderly patient in a comfortable living room setting. Sunlight coming from a window. | 1920x1080 (16:9), focal point on faces. |
| `trust-verification-process` | A split composition showing a nurse's ID badge being scanned and a smiling caregiver. Conveys strict vetting. | 800x600 (4:3) |
| `testimonial-1` | Portrait of a middle-aged Indian woman smiling. | 400x400 (1:1) |
| `testimonial-2` | Portrait of an elderly Indian man looking relaxed. | 400x400 (1:1) |

#### 1.2.2 Service Category Cards
| Asset Name | Description | Specs |
|------------|-------------|-------|
| `service-nursing` | Close-up of a nurse checking a patient's blood pressure at home. Focus on care and professionalism. | 800x533 (3:2) |
| `service-caregiver` | A caregiver assisting a senior citizen with walking in a home hallway. | 800x533 (3:2) |
| `service-physiotherapy` | A physiotherapist guiding a patient through arm mobility exercises in a living room. | 800x533 (3:2) |
| `service-doctor` | A doctor in a white coat consulting with a family in their home. | 800x533 (3:2) |
| `service-specialized` | A specialized care setup (e.g., oxygen concentrator) with a professional monitoring it. | 800x533 (3:2) |

#### 1.2.3 Professional Profiles
Headshots must follow strict guidelines:
- Solid light grey (`#F8FAFC` canvas) background.
- Uniform teal scrubs or white coats.
- Friendly, approachable smile.
- Soft, even lighting (no harsh shadows).
- Square crop (1:1), 400x400 pixels minimum.
*Examples:* `profile-dr-sharma`, `profile-nurse-anjali`, `profile-pt-rahul`.

#### 1.2.4 About Page
| Asset Name | Description | Specs |
|------------|-------------|-------|
| `about-team-hero` | Group photo of the diverse CareConnect leadership and care team. | 1920x1080 (16:9) |
| `about-office` | The modern CareConnect operations center, showing coordinators at work. | 1200x800 (3:2) |
| `about-care-delivery` | A montage of 3 distinct care moments (nursing, physio, elderly care). | 1200x800 (3:2) |

## 2. Icon System

The platform primarily utilizes the **Lucide React** icon library for consistency, scalability, and performance.

### 2.1 Standard Sizes
Icons are used at predefined sizes to maintain rhythm:
- **16px (Inline/Micro)**: Used inside buttons, small badges, and tight list items.
- **20px (Form/Standard)**: Used in input fields, standard dropdowns, and navigation links.
- **24px (Section/Highlight)**: Used for section headers, card icons, and primary actions.
- **32px+ (Feature/Hero)**: Used for feature highlights, empty states, and major process steps.

### 2.2 Color Rules
- **Primary**: `text-brand-teal` (`#0EA5A4`) - Used for active states, primary actions, and brand highlights.
- **Secondary**: `text-slate-500` - Used for descriptive icons, unselected states, and metadata.
- **Inverted**: `text-white` - Used exclusively when the icon sits on a dark or `brand-teal` background.
- **Status/System**: 
  - Success: `text-green-600`
  - Warning: `text-amber-500`
  - Error: `text-red-500`
  - Info: `text-blue-600`

### 2.3 Custom Icons
While Lucide covers 95% of needs, custom SVGs are required for highly specific medical concepts:
- `icon-custom-steth-heart`: Combining a stethoscope with a heart shape (Brand motif).
- `icon-custom-care-shield`: A shield with a cross, specific to our vetting guarantee.
- `icon-custom-delhi-map`: A stylized outline of the Delhi NCR region for service area indication.

## 3. SVG Texture System

The platform utilizes a robust `HealthcareTexture` component that provides subtle, medical-themed backgrounds. These textures add depth without distracting from the content.

### 3.1 Texture Inventory

| Texture Name | Description | Typical Opacity | Primary Usage | Purpose |
|--------------|-------------|-----------------|---------------|---------|
| `medical-grid` | A clean, technical grid pattern resembling graph paper. | `0.03` - `0.05` | Backgrounds of technical sections (specs, pricing). | Conveys precision and clinical accuracy. |
| `anatomical-geometry`| Abstract geometric shapes referencing human joints and structure. | `0.04` | Physiotherapy and rehabilitation pages. | Subtle nod to body mechanics. |
| `care-pathway` | Flowing, connected dots and lines. | `0.05` - `0.08` | 'How It Works' sections, process flows. | Represents the journey of care. |
| `location-mesh` | Abstract map topography lines. | `0.04` - `0.06` | Service Area sections, location selection. | Reinforces local presence in NCR. |
| `clinical-wave` | Soft, undulating wave patterns. | `0.03` - `0.05` | Hero sections, calming transitions. | Evokes calmness, breathing, heart rhythms (ECG). |
| `micro-dot-mesh` | Extremely fine, tight dot matrix. | `0.02` | Footer backgrounds, dense data areas. | Provides texture without noise. |
| `material-grain` | Organic, slightly textured noise. | `0.03` | Used layered with brand-teal backgrounds. | Warms up digital spaces, removes 'flatness'. |
| `medical-halo` | Large, soft radial gradients. | `0.10` - `0.15` | Behind featured icons or central CTAs. | Draws attention gently, angelic care motif. |
| `soft-cell` | Interlocking organic cellular shapes. | `0.04` | Specialized care and nursing pages. | Biological reference. |
| `cross-grid` | Repeating medical crosses in a light pattern. | `0.02` - `0.04` | Trust and safety sections, vetting details. | Traditional healthcare trust signal. |

### 3.2 Implementation Guidelines
- Textures must always be applied behind content using absolute positioning with `z-index: -1`.
- Ensure `pointer-events: none` is applied so textures don't block clicks.
- Use `mix-blend-mode: multiply` on light backgrounds and `screen` on dark backgrounds for best integration.

## 4. Placeholder & Skeleton Assets

During loading states or when data is missing, the system must degrade gracefully using placeholders.

### 4.1 Skeleton Loaders
- **Text Skeletons**: Rounded rectangles (`rounded-md`), animated with a `pulse` effect (`bg-slate-200`). Height matches the typography line-height.
- **Card Skeletons**: Full block skeletons for service cards, maintaining the 3:2 aspect ratio for the image area.
- **Profile Skeletons**: Circular skeletons (`rounded-full`) for headshots.

### 4.2 Fallback Images
- **Avatar Placeholder**: When a professional's photo fails to load or is missing, display an initials-based avatar.
  - Background: Light teal (`bg-teal-100`)
  - Text: Dark teal (`text-teal-800`), standard font, uppercase initials.
- **Service Image Placeholder**: A muted gray block (`bg-slate-100`) featuring a centered `image` icon (Lucide) at 20% opacity.
- **Map Placeholder**: A generic, blurred map image with a loading spinner overlay.
- **Document Preview Placeholder**: A stylized wireframe of a document (for prescriptions or reports).

## 5. Motion Assets

Motion is used sparingly to reinforce actions, guide attention, and provide feedback.

### 5.1 Feedback Animations (Lottie/CSS)
- **Success State**: A smooth, drawing-in animation of a green checkmark circle. Used after booking completion or successful payment. (Lottie file: `success-check.json`)
- **Warning State**: A gentle horizontal shake (CSS keyframes) combined with an amber exclamation pulse.
- **Error State**: A sharper horizontal shake and a red cross drawing in.

### 5.2 Loading Indicators
- **Primary Spinner**: A minimal, CSS-based border spinner using `brand-teal`. 
  - Sizes: 16px (button inline), 24px (component level), 48px (page level).
- **Progress Bar**: An indeterminate loading bar fixed to the top of the viewport during route transitions. Height: 3px. Color: `brand-teal`.

### 5.3 Delight Animations
- **Booking Confirmation**: A subtle, elegant confetti burst (using `canvas-confetti` library) limited to brand colors (Teal, Blue, White). Triggered only on the final "Booking Confirmed" success screen.

## 6. Asset Naming Convention

Strict adherence to this naming convention is required for all static files in the `/public` directory.

**Format**: `[context]-[descriptor]-[variant].[ext]`

**Definitions**:
- `context`: Where the asset is used (e.g., `hero`, `service`, `profile`, `icon`, `bg`).
- `descriptor`: What the asset depicts (e.g., `nurse-home`, `physiotherapy-card`, `verified`).
- `variant`: (Optional) Size, color, or state modifier (e.g., `teal`, `dark`, `sm`, `hover`).

**Examples**:
- `hero-nurse-home-desktop.webp`
- `hero-nurse-home-mobile.webp`
- `service-physiotherapy-card.webp`
- `icon-verified-teal.svg`
- `bg-texture-clinical-wave.svg`
- `profile-placeholder-sm.png`

**Directory Structure**:
```
/public
  /images
    /heroes
    /services
    /profiles
    /about
    /placeholders
  /icons
    /custom
  /textures
  /animations
```
