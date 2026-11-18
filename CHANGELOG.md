# Changelog

All notable changes to the **Apex Gym Website Template** are documented in this file.

## [1.0.0] - 2026-11-18

### Final Commercial Release & Packaging Preparation

#### Added
- **6 Production-Ready Public Pages:**
  - `Home`: Responsive desktop/mobile athletic hero, gym overview, training disciplines preview, facility highlights, USD membership plans preview, interactive 4-photo gallery strip with lightbox, and closing CTA banner.
  - `About`: Facility story, core training standards, and operational manifesto with animated count-up statistics.
  - `Programs`: Filterable training disciplines with interactive category chips (`All Programs`, `Strength`, `Conditioning`, `Weights`, `Movement`).
  - `Membership`: Four configurable USD pricing tiers (`$10` Basic, `$30` Standard, `$50` Premium, `$80` Elite) with feature checklists and inquiry actions.
  - `Gallery`: Categorized photo grid (`All`, `Facility`, `Strength`, `Conditioning`) with full-screen lightbox modal, Previous/Next controls, and keyboard navigation (`Esc`, `Left`/`Right` arrows).
  - `Contact`: Split operating hours matrix (Morning/Evening shifts), clickable communication cards (Location, Phone, WhatsApp, Email, Instagram), and demonstration inquiry form.
- **Visible Contact Form Demo Notice (`src/pages/public/Contact.jsx`):**
  - Added a clear, always-visible placeholder notice above the contact form inputs stating: *"Demo Form: This contact form is included for demonstration purposes only. Connect your preferred form-handling service before accepting real enquiries."*
  - Retained the honest frontend-only post-submission screen confirming no message is delivered until a form-handling service is connected.
- **Responsive Mobile Grid Hardening (`Gallery.jsx`, `About.jsx`, `Programs.jsx`, `HomeAboutSection.jsx`):**
  - Updated CSS Grid track definitions to use `minmax(min(100%, ...), 1fr)` so card grids never overflow horizontally on narrow mobile screens (`320px–360px`).
- **Centralized Business Configuration (`src/data/gymData.js`):**
  - Centralized all gym identity details, contact links, hours, programs, pricing plans, and gallery items in `src/data/gymData.js` with clear placeholder and demo image notices.
- **Comprehensive Buyer Documentation (`README.md`):**
  - Added a prominent **"Important: Demo Images"** section instructing buyers to delete and replace all 8 demonstration images before commercial publication and explaining image licensing responsibilities.
  - Documented the full inventory of demo image files in `public/images/` and `public/images/hero/` along with step-by-step replacement instructions that preserve layout proportions.
  - Corrected dependency descriptions and table versions to accurately reflect the project's frontend npm packages (`react`, `react-dom`, `react-router-dom`, `motion`, `lucide-react`, `tailwindcss`, `vite`).
  - Added complete beginner-friendly installation, development, production build, customization, buyer responsibilities, and troubleshooting guides.

#### Packaging & Clean Distribution
- Verified clean installation (`npm install`) and production build (`npm run build`) from source.
- Packaged final commercial distribution archive `gym-website-template-v1.0.0.zip` excluding `node_modules` and temporary/cache artifacts, structured inside a single clean root folder.
