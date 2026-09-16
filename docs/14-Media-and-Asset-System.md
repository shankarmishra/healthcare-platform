# 14 Media & Visual Asset System

This document outlines the Media & Visual Asset Strategy for the Healthcare Staffing & Home Care Platform. It serves as the single source of truth for visual requirements, asset inventory, and media performance guidelines.

## 1. Visual Language

- **BUSINESS RULE:** ONE dominant visual language: PHOTOREALISTIC CUTOUT HUMAN STYLE.
- **UI RULE:** All human imagery: natural, professional, warm, credible, realistic.
- **UI RULE:** Preferred representation: South Asian / Indian where appropriate.
- **UI RULE:** Wardrobe: modern healthcare scrubs, clean professional clothing.
- **UI RULE:** Expressions: calm, confident, empathetic (NOT overly smiling stock-photo).
- **UI RULE:** Lighting: bright, natural, studio-quality soft.
- **UI RULE:** Background: ALWAYS transparent for PNG cutouts.
- **UI RULE:** Never mix: cartoon + 3D + photorealistic + flat illustration.

## 2. PNG Character Inventory

For each asset, the following metadata is defined:

| Field | Description |
|---|---|
| Asset ID | e.g. PNG-001 |
| Target Page | Where it appears |
| Target Section | Which section |
| Subject | Who |
| Age Range | Approximate |
| Gender | Presentation |
| Ethnicity/Context | South Asian / Indian where appropriate |
| Clothing | Specific attire |
| Pose | Body position |
| Action | What they're doing |
| Camera Angle | Eye level, slight low angle, etc. |
| Expression | Emotional state |
| Lighting | Direction and quality |
| Color Environment | Surrounding color context |
| Background | Transparent (required) |
| Aspect Ratio | Portrait / Full body / Three-quarter |
| Resolution | Minimum 1200px height |
| Mobile Alternative | Cropped version spec |
| Negative Constraints | No logos, no text, no watermarks, no extra fingers, no deformed hands, no plastic skin, no uncanny expressions |
| Generation Prompt | Full prompt for AI generation |

### PNG Asset Inventory Details:

**PNG-001: Homepage Hero Nurse**
- **Asset ID**: PNG-001
- **Target Page**: Homepage
- **Target Section**: Hero (right side)
- **Subject**: Female home-care nurse
- **Age Range**: 28-35
- **Gender**: Female
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Modern teal scrubs with stethoscope
- **Pose**: Standing confidently, holding tablet
- **Action**: Looking slightly toward camera with warm expression
- **Camera Angle**: Three-quarter body, slight low angle
- **Expression**: Calm, confident, reassuring
- **Lighting**: Bright studio, soft shadows
- **Color Environment**: Neutral/Teal accents
- **Background**: Transparent (required)
- **Aspect Ratio**: Portrait
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Cropped to head and shoulders
- **Negative Constraints**: No logos, no text, no watermarks, no extra fingers, no deformed hands, no plastic skin, no uncanny expressions
- **Generation Prompt**: "Premium photorealistic healthcare professional, young Indian female nurse in her early 30s, wearing modern teal medical scrubs, holding a medical tablet, warm confident smile, standing pose, studio-quality soft lighting, clean realistic skin and details, transparent background, three-quarter body shot, realistic hands, clean silhouette, no text, no logo, no watermark, no extra objects, no duplicated limbs, no artificial plastic appearance."

**PNG-002: KYC Verification Professional**
- **Asset ID**: PNG-002
- **Target Page**: KYC section / Professional onboarding
- **Target Section**: Verification trust section
- **Subject**: Male healthcare professional
- **Age Range**: 30-40
- **Gender**: Male
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: White medical coat over blue shirt, ID badge visible on pocket
- **Pose**: Standing, holding up credential card / ID badge towards the viewer
- **Action**: Presenting credentials confidently and clearly
- **Camera Angle**: Eye level, mid-shot
- **Expression**: Professional, trustworthy, serious but approachable
- **Lighting**: Crisp, bright studio lighting, white bounce
- **Color Environment**: White and medical blue
- **Background**: Transparent (required)
- **Aspect Ratio**: Portrait / Three-quarter
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Tighter crop on face and hand holding ID
- **Negative Constraints**: No blurry text on badge, no distorted hands, no messy hair, no logos on coat, no uncanny valley
- **Generation Prompt**: "Photorealistic male Indian doctor in 30s, wearing clean white medical coat and blue shirt, holding up a medical ID badge to the camera, serious but trustworthy expression, eye-level mid-shot, sharp focus on face and ID, bright studio lighting, transparent background, realistic hands and fingers, flawless professional attire, no logos, no text, highly detailed."

**PNG-003: Caregiver with Elderly Patient**
- **Asset ID**: PNG-003
- **Target Page**: Services / Caregiver section
- **Target Section**: Service feature highlight
- **Subject**: Female caregiver assisting elderly female patient
- **Age Range**: Caregiver: 25-35, Patient: 70-80
- **Gender**: Female (both)
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Caregiver in warm grey scrubs; Patient in comfortable beige home clothing
- **Pose**: Caregiver gently holding patient's arm, walking or standing together
- **Action**: Assisting with movement, showing care and support
- **Camera Angle**: Eye level, slightly offset
- **Expression**: Empathetic, gentle smile (caregiver); relaxed, grateful (patient)
- **Lighting**: Soft, warm natural window light
- **Color Environment**: Warm tones, beige, soft grey
- **Background**: Transparent (required)
- **Aspect Ratio**: Full body or wide portrait
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Cropped to faces and upper torsos
- **Negative Constraints**: No hospital beds, no overly clinical equipment, no awkward limb placement, no fused hands
- **Generation Prompt**: "Photorealistic image of a young Indian female caregiver assisting an elderly Indian woman, caregiver wearing warm grey scrubs, elderly woman in comfortable beige home clothes, caregiver gently holding the elderly woman's arm with care, both showing gentle warm smiles, soft natural window lighting, empathetic mood, transparent background, high quality skin texture, anatomically correct hands, no hospital equipment, clean cutout."

**PNG-004: Physiotherapist in Action**
- **Asset ID**: PNG-004
- **Target Page**: Services / Physiotherapy section
- **Target Section**: Service feature highlight
- **Subject**: Male physiotherapist
- **Age Range**: 28-38
- **Gender**: Male
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Navy blue polo shirt, professional khakis
- **Pose**: Kneeling or leaning forward slightly, gesturing with hands
- **Action**: Demonstrating a physical exercise or explaining a routine
- **Camera Angle**: Slight low angle to emphasize authority and guidance
- **Expression**: Encouraging, focused, energetic
- **Lighting**: Bright, directional athletic lighting
- **Color Environment**: Navy blue, active tones
- **Background**: Transparent (required)
- **Aspect Ratio**: Portrait / Three-quarter
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Cropped to upper body and hands
- **Negative Constraints**: No heavy gym equipment, no sweat, no informal gym wear, no distorted joints
- **Generation Prompt**: "Photorealistic Indian male physiotherapist in late 20s, wearing professional navy blue polo shirt and khakis, leaning forward demonstrating an exercise, energetic and focused expression, slight low angle, bright athletic lighting, transparent background, crisp details, anatomically correct, no gym equipment in background, clean cutout."

**PNG-005: Professional Checking Phone**
- **Asset ID**: PNG-005
- **Target Page**: Professional Portal header / How It Works
- **Target Section**: App promotion / Professional workflow
- **Subject**: Female nurse checking mobile app
- **Age Range**: 25-30
- **Gender**: Female
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Medical blue scrubs
- **Pose**: Standing, holding smartphone with both hands or one hand
- **Action**: Looking down at phone screen, interacting with platform
- **Camera Angle**: Eye level, medium close-up
- **Expression**: Pleasant surprise, engaged, professional
- **Lighting**: Soft studio light with slight glow from the phone screen
- **Color Environment**: Medical blue, soft digital glow
- **Background**: Transparent (required)
- **Aspect Ratio**: Portrait
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Tighter crop on face and phone
- **Negative Constraints**: No cracked screens, no obsolete phone models, no distorted fingers holding phone, no messy background reflections
- **Generation Prompt**: "Photorealistic young Indian female nurse wearing blue scrubs, looking at a modern smartphone, engaged and pleasant expression, holding phone naturally, soft glow from phone screen illuminating face, bright studio lighting, transparent background, perfectly rendered hands and fingers holding the device, crisp focus, no logos."

**PNG-006: Doctor Home Visit**
- **Asset ID**: PNG-006
- **Target Page**: Services / Doctor Visit section
- **Target Section**: Service feature highlight
- **Subject**: Male doctor with medical bag
- **Age Range**: 40-55
- **Gender**: Male
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Smart casual (button-down shirt) under a white coat
- **Pose**: Walking forward or standing at an invisible doorway
- **Action**: Arriving at doorstep, holding a vintage or modern medical bag
- **Camera Angle**: Eye level, full body
- **Expression**: Friendly, reassuring, authoritative
- **Lighting**: Outdoor daylight simulation (bright, crisp)
- **Color Environment**: Crisp whites, warm skin tones, dark leather (bag)
- **Background**: Transparent (required)
- **Aspect Ratio**: Full body
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Cropped to upper body and bag
- **Negative Constraints**: No scary medical tools visible, no messy hair, no dark shadows over eyes, no extra straps
- **Generation Prompt**: "Photorealistic middle-aged Indian male doctor arriving for a home visit, wearing a smart button-down shirt under a crisp white lab coat, holding a leather medical bag, friendly reassuring smile, walking forward pose, bright daylight simulation, full body shot, transparent background, perfect hands and face details, no medical gore, clean cutout."

**PNG-007: Specialized Care Professional**
- **Asset ID**: PNG-007
- **Target Page**: Services / Specialized Care
- **Target Section**: Service feature highlight
- **Subject**: ICU-trained nurse / Specialist
- **Age Range**: 35-45
- **Gender**: Female
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Dark premium scrubs (e.g., charcoal or deep navy), specialized badge
- **Pose**: Standing with arms crossed or holding a specialized monitor
- **Action**: Looking directly at camera, conveying high competence
- **Camera Angle**: Straight on, eye level
- **Expression**: Serious, highly competent, focused, reliable
- **Lighting**: Slightly dramatic, high contrast studio lighting
- **Color Environment**: Dark navy, charcoal, crisp white highlights
- **Background**: Transparent (required)
- **Aspect Ratio**: Portrait / Three-quarter
- **Resolution**: Minimum 1200px height
- **Mobile Alternative**: Cropped to head and shoulders
- **Negative Constraints**: No intimidating expressions, no complex messy tubes, no artificial stiffness
- **Generation Prompt**: "Photorealistic Indian female ICU specialist nurse in late 30s, wearing premium dark charcoal scrubs, holding a portable medical monitor, serious and highly competent expression, eye-level straight on, high contrast dramatic studio lighting, transparent background, extremely detailed skin and fabric texture, perfect anatomy, clean silhouette."

**PNG-008: Customer Support Agent**
- **Asset ID**: PNG-008
- **Target Page**: Support / Contact Us
- **Target Section**: Hero or Help Center
- **Subject**: Customer support representative
- **Age Range**: 20-30
- **Gender**: Any
- **Ethnicity/Context**: South Asian / Indian
- **Clothing**: Casual professional, headset
- **Pose**: Sitting at desk or standing
- **Action**: Smiling, ready to assist
- **Camera Angle**: Eye level
- **Expression**: Friendly, helpful
- **Lighting**: Bright studio lighting
- **Color Environment**: Medical blue accents
- **Background**: Transparent
- **Aspect Ratio**: Portrait
- **Resolution**: Minimum 1200px
- **Mobile Alternative**: Cropped to head and shoulders
- **Negative Constraints**: No messy background, no cluttered desks, no unbranded headsets.
- **Generation Prompt**: "Photorealistic young Indian customer support agent wearing a headset, friendly and helpful expression, modern clean background, transparent cutout, professional attire, crisp lighting, high resolution."

**UI RULE**: Maximum 1 primary human model per major visual section. Maximum 2 humans if interaction is important. Never 3-6 random floating doctors.

---

## 3. Video Inventory

For each video, the following metadata is defined:

| Field | Description |
|---|---|
| Video ID | e.g. VIDEO-01 |
| Placement | Page and section |
| Type | Cinematic Human / Product-UI / Operational / Abstract / Micro-confirmation |
| Scene | Setting description |
| Subject | Who/what |
| Action | What happens |
| Camera | Movement and angle |
| Lens Style | Wide, medium, close-up |
| Lighting | Type and direction |
| Environment | Indoor/outdoor, setting details |
| Duration | In seconds |
| Loop Point | Where loop restarts |
| Aspect Ratio | 16:9 / 9:16 / 1:1 |
| Audio | Muted (always for autoplay) |
| Poster Image | Required: static frame for pre-load |
| Mobile Fallback | Static poster or cropped video |
| Format | WebM primary, MP4 fallback |
| Performance Budget | Max file size |
| Negative Prompt | What to avoid |
| Storyboard | Shot-by-shot description |

### Video Asset Inventory Details:

**VIDEO-01: Homepage Hero**
- **Video ID**: VIDEO-01
- **Placement**: Homepage hero section (right/background)
- **Type**: Cinematic Human
- **Scene**: Modern Indian home entryway, bright morning
- **Subject**: Female home-care nurse
- **Action**: Arrives at door, greets patient naturally
- **Camera**: Slow forward push, stable
- **Lens Style**: Medium wide (35mm equivalent)
- **Lighting**: Bright morning daylight, natural
- **Environment**: Upscale indoor home entryway
- **Duration**: 8 seconds
- **Loop Point**: Seamless loop on gentle smile
- **Aspect Ratio**: 16:9 (Desktop), 9:16 (Mobile)
- **Audio**: Muted
- **Poster Image**: hero-nurse-poster.jpg
- **Mobile Fallback**: Cropped 9:16 WebM or poster
- **Format**: WebM primary, MP4 fallback
- **Performance Budget**: < 2MB
- **Negative Prompt**: No text, no logos, no watermark, no emergency room, no dramatic equipment, no awkward hands, no exaggerated smile.
- **Storyboard**:
  1. 0-2s: Nurse walks up to door.
  2. 2-5s: Door opens (off-camera), nurse smiles warmly.
  3. 5-8s: Nurse steps in, slow fade to loop.

**VIDEO-02: How Platform Works**
- **Video ID**: VIDEO-02
- **Placement**: Homepage / How It Works section
- **Type**: Product-UI walkthrough
- **Scene**: Abstract clean digital space
- **Subject**: UI mockups of the client app
- **Action**: Cursor clicks 'Find Care', selects a service, browses profiles, clicks book
- **Camera**: Static with smooth digital zooms into UI elements
- **Lens Style**: N/A (Digital)
- **Lighting**: N/A (Digital)
- **Environment**: Abstract medical-blue background
- **Duration**: 12 seconds
- **Loop Point**: Seamless loop back to home screen
- **Aspect Ratio**: 16:9
- **Audio**: Muted
- **Poster Image**: how-it-works-poster.jpg
- **Mobile Fallback**: Static infographic
- **Format**: WebM, MP4
- **Performance Budget**: < 1.5MB
- **Negative Prompt**: No complex text, no actual patient data, no confusing navigation paths.
- **Storyboard**:
  1. 0-3s: App home screen, cursor clicks "Book Nurse".
  2. 3-6s: List of professionals scrolls smoothly.
  3. 6-9s: Profile selected, calendar opens.
  4. 9-12s: Date selected, "Confirmed" checkmark appears.

**VIDEO-03: Professional KYC Onboarding**
- **Video ID**: VIDEO-03
- **Placement**: Professional Landing Page / KYC section
- **Type**: Product-UI
- **Scene**: Digital mockup of professional portal
- **Subject**: Document upload UI
- **Action**: Dragging a license document into a dropzone, scanning animation, green verification badge appears
- **Camera**: Static digital
- **Lens Style**: N/A
- **Lighting**: N/A
- **Environment**: Clean white/grey digital background
- **Duration**: 6 seconds
- **Loop Point**: Seamless loop
- **Aspect Ratio**: 16:9
- **Audio**: Muted
- **Poster Image**: kyc-upload-poster.jpg
- **Mobile Fallback**: Static UI mockup
- **Format**: WebM, MP4
- **Performance Budget**: < 1MB
- **Negative Prompt**: No real ID cards, no messy UI, no slow loading states.
- **Storyboard**:
  1. 0-2s: Document dragged into upload box.
  2. 2-4s: Quick scan line moves over document.
  3. 4-6s: Green "Verified" shield pops up.

**VIDEO-04: Matching Engine**
- **Video ID**: VIDEO-04
- **Placement**: About Us / Matching section
- **Type**: Abstract system animation
- **Scene**: Stylized city map
- **Subject**: Client location pin and professional avatars
- **Action**: Radar pulse from client pin, avatars light up nearby, lines connect to best match
- **Camera**: Top-down isometric
- **Lens Style**: Wide
- **Lighting**: Digital glow
- **Environment**: Dark or light abstract map
- **Duration**: 8 seconds
- **Loop Point**: Pulse reset
- **Aspect Ratio**: 16:9
- **Audio**: Muted
- **Poster Image**: matching-map-poster.jpg
- **Mobile Fallback**: Static map with pins
- **Format**: WebM, MP4
- **Performance Budget**: < 2MB
- **Negative Prompt**: No real street names, no messy clusters of pins.
- **Storyboard**:
  1. 0-2s: Client pin drops.
  2. 2-5s: Radar circle expands, highlighting 3 professional pins.
  3. 5-8s: One pin turns green and moves toward client.

**VIDEO-05: Booking Flow**
- **Video ID**: VIDEO-05
- **Placement**: Services detail pages
- **Type**: Product-UI
- **Scene**: Mobile app interface mockup
- **Subject**: Service customization
- **Action**: Selecting date/time, adding patient details, confirming booking
- **Camera**: Static digital
- **Lens Style**: N/A
- **Lighting**: N/A
- **Environment**: Clean digital background
- **Duration**: 10 seconds
- **Loop Point**: Booking success screen fades to start
- **Aspect Ratio**: 1:1 or 9:16
- **Audio**: Muted
- **Poster Image**: booking-flow-poster.jpg
- **Mobile Fallback**: Static UI step
- **Format**: WebM, MP4
- **Performance Budget**: < 1.5MB
- **Negative Prompt**: No cluttered forms, no tiny text.
- **Storyboard**: Shows rapid, smooth form filling and calendar selection.

**VIDEO-06: Active Visit**
- **Video ID**: VIDEO-06
- **Placement**: Feature highlight: Live Tracking
- **Type**: Cinematic Human / UI Hybrid
- **Scene**: Split screen (Left: Nurse interacting with patient, Right: App showing 'In Progress' status)
- **Subject**: Nurse and patient + App UI
- **Action**: Nurse taking blood pressure, app UI showing visit timer ticking
- **Camera**: Locked off medium shot on humans
- **Lens Style**: 50mm
- **Lighting**: Natural indoor
- **Environment**: Cozy living room
- **Duration**: 6 seconds
- **Loop Point**: Seamless
- **Aspect Ratio**: 16:9
- **Audio**: Muted
- **Poster Image**: active-visit-poster.jpg
- **Mobile Fallback**: Static split image
- **Format**: WebM, MP4
- **Performance Budget**: < 2MB
- **Negative Prompt**: No sterile hospital looks, no stressful expressions.
- **Storyboard**: Nurse smiles while wrapping BP cuff; UI shows visit status.

**VIDEO-07: Organization Staffing**
- **Video ID**: VIDEO-07
- **Placement**: B2B / Organizations page hero
- **Type**: Cinematic Human
- **Scene**: Modern hospital/clinic admin desk
- **Subject**: Hospital administrator
- **Action**: Admin looking at dual monitors, looking relieved, interacting with dashboard
- **Camera**: Slow pan left
- **Lens Style**: 35mm
- **Lighting**: Bright, professional office lighting
- **Environment**: Clean modern clinic back-office
- **Duration**: 8 seconds
- **Loop Point**: Subtle crossfade
- **Aspect Ratio**: 16:9
- **Audio**: Muted
- **Poster Image**: org-staffing-poster.jpg
- **Mobile Fallback**: Static image
- **Format**: WebM, MP4
- **Performance Budget**: < 2MB
- **Negative Prompt**: No messy desks, no dark gloomy offices.
- **Storyboard**: Admin clicks on screen, smiles, showing ease of filling shifts.

**VIDEO-08: Payment / Payout**
- **Video ID**: VIDEO-08
- **Placement**: Platform features / Finance section
- **Type**: Product-UI / Micro-confirmation
- **Scene**: Digital UI
- **Subject**: Payment gateway simulation
- **Action**: Card/UPI selected, 'Pay' clicked, secure lock animation, success confetti
- **Camera**: Static
- **Lens Style**: N/A
- **Lighting**: N/A
- **Environment**: White background
- **Duration**: 4 seconds
- **Loop Point**: Fade to start
- **Aspect Ratio**: 1:1
- **Audio**: Muted
- **Poster Image**: payment-poster.jpg
- **Mobile Fallback**: Static success screen
- **Format**: WebM, MP4
- **Performance Budget**: < 500KB
- **Negative Prompt**: No real bank logos (ASSUMPTION: use generic icons).
- **Storyboard**: Quick payment success flow.

**VIDEO-09: Professional Earnings**
- **Video ID**: VIDEO-09
- **Placement**: Professional Recruitment page
- **Type**: Product-UI
- **Scene**: Mobile app earnings tab
- **Subject**: Earnings chart
- **Action**: Bar chart animating upward, total balance incrementing quickly
- **Camera**: Static
- **Lens Style**: N/A
- **Lighting**: N/A
- **Environment**: Digital background
- **Duration**: 5 seconds
- **Loop Point**: Chart resets
- **Aspect Ratio**: 9:16
- **Audio**: Muted
- **Poster Image**: earnings-poster.jpg
- **Mobile Fallback**: Static chart
- **Format**: WebM, MP4
- **Performance Budget**: < 1MB
- **Negative Prompt**: No unrealistic numbers.
- **Storyboard**: Bars grow, number tallies up.

**VIDEO-10: Booking Completion**
- **Video ID**: VIDEO-10
- **Placement**: Post-booking confirmation page
- **Type**: Micro-confirmation
- **Scene**: Abstract UI
- **Subject**: Checkmark and calendar icon
- **Action**: Calendar pops in, checkmark draws itself, subtle glow
- **Camera**: Static
- **Lens Style**: N/A
- **Lighting**: N/A
- **Environment**: Transparent or brand color background
- **Duration**: 3 seconds
- **Loop Point**: Does not loop (play once, hold on last frame)
- **Aspect Ratio**: 1:1
- **Audio**: Muted
- **Poster Image**: completion-poster.jpg
- **Mobile Fallback**: Static checkmark
- **Format**: WebM, MP4
- **Performance Budget**: < 300KB
- **Negative Prompt**: No complex 3D rendering.
- **Storyboard**: Quick snap-in animation of success state.

### Video Placement Map:

| Page | Video | Type |
|---|---|---|
| Homepage | VIDEO-01 | Cinematic |
| How It Works | VIDEO-02 | UI Walkthrough |
| KYC section | VIDEO-03 | UI |
| Matching section | VIDEO-04 | Abstract Animation |
| Booking flow | VIDEO-05 | UI |
| Active Visit | VIDEO-06 | Cinematic |
| Organizations | VIDEO-07 | Cinematic |
| Finance/Earnings | VIDEO-08 / 09 | UI |
| Confirmation | VIDEO-10 | Micro-confirmation |
| Admin dashboard | NONE | - |
| Professional dashboard| NONE | - |
| Tables/Forms | NONE | - |

---

## 4. Lottie Animation Inventory

Lottie animations are used for micro-interactions where CSS is insufficient.

| ID | Animation | Usage | Duration | Style | File |
|---|---|---|---|---|---|
| LOTTIE-01 | Success checkmark | Payment success, booking confirmation, KYC approval | 1.5s | Minimal line, teal/green | lottie-success.json |
| LOTTIE-02 | Document upload | KYC file dropzone | 2s | Line arrow pulse | lottie-upload.json |
| LOTTIE-03 | Location pin drop | Address search | 1s | Pin with ripple | lottie-location.json |
| LOTTIE-04 | Radar search pulse | Professional matching | 2s loop | Concentric circles | lottie-searching.json |
| LOTTIE-05 | Support headset | Ticket submission | 1.5s | Line headset wave | lottie-support.json |
| LOTTIE-06 | Empty search | No results contexts | 2s | Magnifier animation | lottie-empty.json |
| LOTTIE-07 | Payment processing | During payment | Loop | Minimal dots | lottie-processing.json |
| LOTTIE-08 | Verification shield | KYC status | 1s | Shield + check | lottie-verified.json |

**UI RULE - Lottie Usage:**
- Use only where CSS animation is insufficient.
- Prefer 1-3 second duration.
- Style: minimal, line-based, premium, medical-tech.
- No childish cartoon Lottie.
- Do NOT let Lottie dominate the UI.

---

## 5. Media Performance Rules

### 5.1 Image Optimization

| Format | Usage | Compression |
|---|---|---|
| AVIF | Primary (if browser supports) | Quality 75-85 |
| WebP | Fallback | Quality 80-90 |
| PNG | Transparency required (e.g., cutouts) | Optimized (TinyPNG or similar) |
| JPG | Only when absolutely necessary | Quality 80-85 |

### 5.2 Video Performance

- **TECHNICAL RULE**: Default attributes: `muted autoplay playsInline loop` (for background videos).
- **TECHNICAL RULE**: Lazy load ALL videos that are below the fold.
- **TECHNICAL RULE**: Every video MUST have a poster image to prevent layout shifts.
- **TECHNICAL RULE**: Compressed: target < 2MB per video.
- **TECHNICAL RULE**: WebM preferred format, MP4 fallback.
- **TECHNICAL RULE**: No 4K autoplay videos. Max resolution 1080p for hero, 720p for UI videos.
- **TECHNICAL RULE**: No multiple autoplay videos in the same viewport.
- **UI RULE**: Mobile: use static poster instead of video if performance impacted or network is slow.

### 5.3 Media Density by Page Type

| Page Type | Media Density | Rationale |
|---|---|---|
| Marketing / Landing | Higher (hero video, PNGs, illustrations) | High emotional engagement needed. |
| Marketplace / Search | Moderate (map, professional photos) | Focus on data and avatars. |
| Booking Wizard | Low (minimal decorative media) | Prevent distraction during conversion. |
| Professional Operations | Very Low (functional only) | Pure utility and speed. |
| Admin Command Center | Almost None (charts/data only) | Data density over visuals. |
| Organization Portal | Moderate | Balance between marketing and utility. |

---

## 6. Asset File Naming Convention

**TECHNICAL RULE**: All assets must follow strict kebab-case naming.

| Pattern | Example |
|---|---|
| Hero images | `home-hero-nurse.png` |
| Service images | `service-nursing-home.webp` |
| Professional photos | `pro-avatar-01.webp` |
| Videos | `hero-care-arrival.webm` |
| Lottie | `lottie-success.json` |
| Icons | Already handled by Lucide React |

**Negative Constraints (Forbidden names):**
- `IMG_3939.png`
- `final-final-2.mp4`
- `doctor2.png`
- `new-real.png`
- `untitled.webp`

---

## 7. Asset Folder Structure

```text
public/
  assets/
    brand/           # Logo, favicon, brand assets
    images/
      png/           # Photorealistic cutout characters (PNG-001 to PNG-007)
      hero/          # Hero section media
      services/      # Service category visuals
      avatars/       # Professional demo avatars
    video/
      hero/          # Hero videos (VIDEO-01, VIDEO-07)
      workflow/      # UI walkthrough videos (VIDEO-02, VIDEO-03, VIDEO-05)
      product/       # Product feature videos
    lottie/          # All Lottie JSON files (LOTTIE-01 to LOTTIE-08)
    maps/            # Custom map SVGs
    posters/         # Video poster images (lazy load placeholders)
```

---

## 8. General Constraints & Accessibility

- **BUSINESS RULE**: All media must represent realistic platform usage.
- **SECURITY RULE / ASSUMPTION**: Ensure no stock photos contain recognizable patient data or violate HIPAA/local healthcare privacy laws in their portrayal.
- **TECHNICAL RULE**: All `<img>` tags must include descriptive `alt` text. For purely decorative images (like abstract blobs), use `alt=""`.
- **UI RULE**: Ensure high contrast between text overlays and video/image backgrounds (WCAG AA compliant).
- **TECHNICAL RULE**: Videos containing UI text must not rely on the text being readable for core navigation (due to compression).
- **OPEN DECISION**: Determine if a CDN (like Cloudinary or AWS CloudFront) will be used for on-the-fly image optimization vs static build-time optimization. (Assume static for MVP).
