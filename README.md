# Apex Gym — React & Vite Website Template (v1.0.0)

A modern, production-ready, frontend-only gym and fitness website template built with **React 18**, **Vite 5**, and **Tailwind CSS 3**. Crafted for freelance web developers, digital agencies, and fitness facility owners who want a high-converting athletic web presence without backend complexity.

---

## Important: Demo Images

> **All images included in this template are demonstration assets provided solely to showcase the website's appearance and layout. They are not licensed for reuse in your commercial projects. Before publishing your customized website, remove the demonstration images and replace them with images you own or have appropriate usage rights to use.**

- **Why the demo images are included:** The 8 sample images in `public/images/` and `public/images/hero/` remain in this template package exclusively so you can preview the live layout, aspect ratios, hero composition, and gallery cards immediately after installation.
- **No commercial reuse rights:** These demonstration images are **not** commercially licensed or sublicensed for redistribution or production use on your own or your client's live website.
- **Buyer responsibility:** You are solely responsible for deleting all provided demonstration images before deployment and ensuring that you hold valid copyright ownership or commercial usage licenses for every replacement image you publish.

See **[Section 10: How to Replace Demonstration Images](#10-how-to-replace-demonstration-images)** below for a complete list of demo image files and step-by-step replacement instructions that preserve the website layout.

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Features Included](#2-features-included)
3. [Technology Stack](#3-technology-stack)
4. [Prerequisites](#4-prerequisites)
5. [Installation Instructions](#5-installation-instructions)
6. [Development Instructions](#6-development-instructions)
7. [Production Build & Deployment Instructions](#7-production-build--deployment-instructions)
8. [Project Folder Structure](#8-project-folder-structure)
9. [How to Customize Business Information](#9-how-to-customize-business-information)
10. [How to Replace Demonstration Images](#10-how-to-replace-demonstration-images)
11. [Contact Form Limitations & Setup](#11-contact-form-limitations--setup)
12. [Important Buyer Responsibilities](#12-important-buyer-responsibilities)
13. [Color & Typography Customization](#13-color--typography-customization)
14. [Troubleshooting Common Installation Issues](#14-troubleshooting-common-installation-issues)
15. [License](#15-license)

---

## 1. Product Overview

**Apex Gym** is a bold, athletic frontend website template designed for gyms, strength and conditioning facilities, CrossFit boxes, personal training studios, and fitness clubs. It features six complete public pages, smooth animations, responsive desktop and mobile layouts, an interactive photo gallery with keyboard-accessible lightbox, and centralized data configuration.

- **Product Type:** Frontend-only React Single Page Application (SPA)
- **Version:** `1.0.0`
- **Target Audience:** Beginner to experienced developers, web agencies, and gym owners
- **Routing:** Hash-based client routing (`HashRouter`) for drop-in compatibility with any static web host without custom server rewrite rules

---

## 2. Features Included

- **6 Complete Public Pages:**
  - **Home (`/#/`):** Responsive desktop and mobile hero section, gym introduction, training disciplines preview, facility highlights, membership access tiers, photo gallery strip with lightbox preview, and closing call-to-action banner.
  - **About (`/#/about`):** Facility mission statement, core training standards, and operational manifesto with animated count-up statistics.
  - **Programs (`/#/programs`):** Interactive category filter chips (`All Programs`, `Strength`, `Conditioning`, `Weights`, `Movement`) and animated program cards.
  - **Membership (`/#/membership`):** Four configurable USD pricing plans (`Basic $10`, `Standard $30`, `Premium $50`, `Elite $80`) with admission fee badges, feature checklists, and inquiry CTAs.
  - **Gallery (`/#/gallery`):** Filterable photo grid (`All`, `Facility`, `Strength`, `Conditioning`) with full-screen lightbox modal, Previous/Next controls, and keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
  - **Contact (`/#/contact`):** Operating hours card with split morning/evening sessions, clickable contact cards (Google Maps Location, Phone, WhatsApp, Email, Instagram), and a frontend demonstration inquiry form with a clear placeholder notice.
- **Centralized Data File (`src/data/gymData.js`):** Edit gym name, tagline, address, phone numbers, WhatsApp link, operating hours, membership plans, programs, and gallery items in one beginner-friendly JavaScript file.
- **Responsive Mobile & Tablet Navigation:** Fixed top navigation bar with active link indicator on desktop and an animated hamburger-to-close mobile drawer menu on tablet/mobile viewports.
- **Athletic Motion & Accessibility:** Standalone SVG barbell loading screen (runs once per browser session), animated custom gym SVG icons, semantic HTML landmarks, keyboard navigation support, and full respect for OS reduced-motion preferences (`prefers-reduced-motion`).
- **Frontend-Only Architecture (Zero Backend Complexity):** Uses lightweight, industry-standard frontend npm dependencies (React, React Router DOM, Motion, Lucide React, Tailwind CSS) with **no backend server, no database, no authentication portal, and no payment processor lock-in**.

---

## 3. Technology Stack

All packages used in this template are standard open-source frontend libraries declared in `package.json`:

| Package | Version | License | Purpose |
| :--- | :--- | :--- | :--- |
| **React** | `^18.3.1` | MIT | Component UI library |
| **React DOM** | `^18.3.1` | MIT | DOM rendering |
| **React Router DOM** | `^6.26.2` | MIT | Client-side routing (`HashRouter`) |
| **Motion** | `^11.5.4` | MIT | Smooth animations and transitions (`motion/react`) |
| **Lucide React** | `^0.445.0` | ISC | Vector UI icons |
| **Vite** | `^5.4.6` | MIT | Frontend dev server and production bundler |
| ** `@vitejs/plugin-react` ** | `^4.3.1` | MIT | React Fast Refresh and JSX compilation |
| **Tailwind CSS** | `^3.4.11` | MIT | Utility CSS framework |
| **PostCSS** | `^8.4.47` | MIT | CSS processing |
| **Autoprefixer** | `^10.4.20` | MIT | CSS vendor prefixing |
| **Google Fonts** | Web Font | OFL-1.1 | `Bebas Neue` (display headings) & `Inter` (body copy) |

---

## 4. Prerequisites

Before installing and running this template, make sure you have the following installed on your computer:

1. **Node.js:** Version **18.0.0 or higher** (Node.js 18 LTS or 20 LTS recommended).
   - Check your version in a terminal: `node -v`
   - Download from: [https://nodejs.org](https://nodejs.org)
2. **npm:** Version **9.0.0 or higher** (automatically installed with Node.js).
   - Check your version in a terminal: `npm -v`
3. **Code Editor:** Visual Studio Code ([https://code.visualstudio.com](https://code.visualstudio.com)) or any modern text editor.
4. **Web Browser:** Chrome, Edge, Firefox, or Safari.

---

## 5. Installation Instructions

Follow these steps to install the project dependencies from a fresh download:

1. **Extract the ZIP Archive:**
   Unzip `gym-website-template-v1.0.0.zip` to a folder on your computer.
2. **Open a Terminal in the Project Folder:**
   Navigate into the extracted project root folder (the folder containing `package.json`):
   ```bash
   cd gym-website-template
   ```
3. **Install Dependencies:**
   Run the following command to download and install all required npm packages into `node_modules/`:
   ```bash
   npm install
   ```

---

## 6. Development Instructions

To work on the template locally with live hot-reloading:

1. Start the Vite development server:
   ```bash
   npm run dev
   ```
2. Open the local URL shown in your terminal (by default):
   ```text
   http://localhost:5173
   ```
3. Edit any file inside `src/` (for example, `src/data/gymData.js`) and save it — your browser will automatically refresh with your changes.
4. To stop the development server at any time, press `Ctrl + C` in the terminal.

---

## 7. Production Build & Deployment Instructions

### Creating a Production Build

When you have finished customizing your text, business details, contact form, and images, generate the optimized production files:

```bash
npm run build
```

Vite will compile and minify your website into the `dist/` folder:
- `dist/index.html` — Entry HTML file with relative asset paths
- `dist/assets/` — Minified CSS and JavaScript bundles
- `dist/images/` — Static images copied from `public/images/`

### Previewing the Production Build Locally

To test the compiled `dist/` build on your computer before uploading it to a host:

```bash
npm run preview
```

Then open `http://localhost:5173` in your browser.

### Deploying to a Web Host

Because the template uses `HashRouter` and relative asset paths (`base: './'` in `vite.config.js`), you can deploy the `dist/` folder to **any** static hosting service:

- **Netlify:** Drag and drop the `dist/` folder into Netlify Drop, or connect your Git repository with Build Command `npm run build` and Publish Directory `dist`.
- **Vercel:** Connect your repository (Vite is auto-detected; Output Directory: `dist`) or run `npx vercel --prod`.
- **Cloudflare Pages / GitHub Pages:** Set the build command to `npm run build` and output folder to `dist`.
- **Shared Hosting (cPanel / Apache / Nginx):** Run `npm run build` locally and upload the **contents** of the `dist/` folder into your server's `public_html` directory via FTP or File Manager.

---

## 8. Project Folder Structure

```text
gym-website-template/
├── public/
│   └── images/
│       ├── hero/
│       │   ├── hero-main.png                     # Demo desktop hero image (REPLACE BEFORE PUBLISH)
│       │   └── hero-mobile.png                   # Demo mobile hero image (REPLACE BEFORE PUBLISH)
│       ├── battle-ropes-turf-area.jpg            # Demo gallery photo 1 (REPLACE BEFORE PUBLISH)
│       ├── cable-crossover-station.jpg           # Demo gallery photo 4 (REPLACE BEFORE PUBLISH)
│       ├── free-weights-dumbbell-rack.jpg        # Demo gallery photo 3 (REPLACE BEFORE PUBLISH)
│       ├── gym-floor-yellow-pillars.jpg          # Demo gallery photo 5 (REPLACE BEFORE PUBLISH)
│       ├── strength-machines-circuit.jpeg        # Demo gallery photo 6 (REPLACE BEFORE PUBLISH)
│       └── workout-benches-strength-zone.jpg     # Demo gallery photo 2 (REPLACE BEFORE PUBLISH)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx                        # Reusable button component
│   │   │   ├── MarqueeStrip.jsx                  # Animated kinetic text ticker strip
│   │   │   ├── PageHero.jsx                      # Subpage header banner with breadcrumbs
│   │   │   ├── SectionHeader.jsx                 # Section heading with eyebrow and CTA link
│   │   │   └── SectionHeading.jsx                # Simple heading utility component
│   │   ├── icons/
│   │   │   └── AnimatedGymIcons.jsx              # Custom SVG barbell, dumbbell, flame, plate, arrow icons
│   │   ├── layout/
│   │   │   ├── Navbar.jsx                        # Fixed top navigation & mobile drawer
│   │   │   └── Footer.jsx                        # Global site footer
│   │   ├── public/
│   │   │   ├── AthleticManifestoSection.jsx      # About page manifesto & animated operational stats
│   │   │   ├── Hero.jsx                          # Home page desktop & mobile hero section
│   │   │   ├── HomeAboutSection.jsx              # Home page gym overview section
│   │   │   ├── VisualCTASection.jsx              # Home page closing call-to-action banner
│   │   │   ├── VisualDisciplinesSection.jsx      # Home page training programs preview
│   │   │   ├── VisualFacilitySection.jsx         # Home page facility highlights grid
│   │   │   ├── VisualGalleryStrip.jsx            # Home page 4-photo gallery strip + lightbox
│   │   │   ├── VisualMembershipSection.jsx       # Home page membership plans preview
│   │   │   └── ...                               # Additional optional section variations
│   │   └── GymLoadingScreen.jsx                  # Session-once SVG barbell intro animation
│   ├── data/
│   │   └── gymData.js                            # Central configuration for all gym text, plans & gallery
│   ├── hooks/
│   │   └── useCountUp.js                         # Number count-up animation hook
│   ├── layouts/
│   │   └── PublicLayout.jsx                      # Shared Navbar + page content + Footer layout
│   ├── pages/
│   │   └── public/
│   │       ├── Home.jsx                          # Home page
│   │       ├── About.jsx                         # About page
│   │       ├── Programs.jsx                      # Programs page with category filtering
│   │       ├── Membership.jsx                    # Membership plans page
│   │       ├── Gallery.jsx                       # Gallery page with category filter & lightbox
│   │       └── Contact.jsx                       # Contact page with hours, links & demo form
│   ├── routes/
│   │   └── index.jsx                             # Route definitions & fallback redirect
│   ├── styles/
│   │   ├── index.css                             # Tailwind imports & global utilities
│   │   └── variables.css                         # CSS custom properties (brand colors, fonts, shadows)
│   ├── App.jsx                                   # Root component managing intro loader & routes
│   └── main.jsx                                  # Application entry point with HashRouter
├── .gitignore                                    # Git ignore rules
├── CHANGELOG.md                                  # Version history and release notes
├── index.html                                    # Root HTML template and Google Fonts links
├── LICENSE.txt                                   # Commercial Developer Template License
├── package-lock.json                             # Locked dependency tree for reproducible installs
├── package.json                                  # Project metadata, scripts, and dependencies
├── postcss.config.js                             # PostCSS configuration
├── README.md                                     # Buyer documentation (this file)
├── tailwind.config.js                            # Tailwind CSS theme configuration
└── vite.config.js                                # Vite bundler configuration
```

---

## 9. How to Customize Business Information

All business information is stored in a single file: **`src/data/gymData.js`**. You do not need to search through multiple component files to change your gym's name, phone number, address, hours, or prices.

> **Note:** Every business detail in `src/data/gymData.js` (such as `APEX GYM`, `742 Evergreen Terrace`, `+1 (555) 234-5678`, and `info@apexgym-template.com`) is a fictional placeholder. Replace all fields with your real business details before publishing.

### Step 1: Update Gym Identity, Contact Details & Hours

Open `src/data/gymData.js` and edit the `GYM_INFO` object:

```javascript
export const GYM_INFO = {
  name: 'APEX GYM',
  brandPrefix: 'APEX',          // Dark text in logo wordmark
  brandSuffix: 'GYM',           // Yellow text in logo wordmark
  tagline: 'Train Hard. Live Strong.',
  description: 'Your premier neighborhood athletic and strength training facility.',
  shortDescription: 'Modern training floor, expert coaching, and performance-driven culture.',

  // Physical street address
  address: '742 Evergreen Terrace, Suite 100, Springfield, OR 97477',

  // Phone & WhatsApp
  phone: '+1 (555) 234-5678',
  whatsapp: '+1 (555) 234-5678',
  whatsappLink: 'https://wa.me/15552345678', // Digits only with country code after wa.me/

  // Email & Instagram
  email: 'info@apexgym-template.com',
  instagram: '@apexgym_template',

  // Google Maps link opened when visitors click the Location card
  googleMaps: 'https://maps.google.com/?q=Your+Gym+Name+And+Address',

  // Operating hours shown on the Contact page and Footer
  hours: [
    {
      days: 'Monday – Friday',
      sessions: [
        { label: 'Morning', open: '05:30 AM', close: '11:00 AM' },
        { label: 'Evening', open: '04:00 PM', close: '10:00 PM' },
      ],
      closed: false,
    },
    // ...
  ],
};
```

### Step 2: Update Page Title & Meta Description

Open `index.html` in the project root and update the `<title>` and `<meta name="description">` tags with your gym's name and summary.

### Step 3: Update Membership Plans & Programs

In `src/data/gymData.js`:
- Edit `MEMBERSHIP_PLANS` to customize plan names, monthly prices (`price`), admission fees (`admissionFee`), durations (`durationDays`), descriptions, and feature bullet points (`features`).
- Edit `PROGRAMS` to customize your training disciplines, categories (`Strength`, `Conditioning`, `Weights`, `Movement`), and descriptions.
- Edit `BRAND_VALUES` and `FACILITY_SPECS` to match your gym's equipment and philosophy.

---

## 10. How to Replace Demonstration Images

As stated in **[Important: Demo Images](#important-demo-images)**, you must remove all demonstration images and replace them with your own licensed or original photography before launching your website.

### Directory & File Inventory of Demo Images

All demonstration images are located inside **`public/images/`** and **`public/images/hero/`**:

| Demo Image File Path | Used In | Recommended Aspect / Size |
| :--- | :--- | :--- |
| `public/images/hero/hero-main.png` | Desktop Hero (`src/components/public/Hero.jsx`) | Landscape (`1920×1080` px, subject positioned on right) |
| `public/images/hero/hero-mobile.png` | Mobile Hero (`src/components/public/Hero.jsx`) | Portrait or Square (`1080×1080` px or `1080×1350` px) |
| `public/images/battle-ropes-turf-area.jpg` | Gallery Item 1 (`src/data/gymData.js`) | Landscape (`1200×800` px) |
| `public/images/workout-benches-strength-zone.jpg` | Gallery Item 2 (`src/data/gymData.js`) | Landscape (`1200×800` px) |
| `public/images/free-weights-dumbbell-rack.jpg` | Gallery Item 3 (`src/data/gymData.js`) | Landscape (`1200×800` px) |
| `public/images/cable-crossover-station.jpg` | Gallery Item 4 (`src/data/gymData.js`) | Landscape (`1200×800` px) |
| `public/images/gym-floor-yellow-pillars.jpg` | Gallery Item 5 (`src/data/gymData.js`) | Landscape (`1200×800` px) |
| `public/images/strength-machines-circuit.jpeg` | Gallery Item 6 (`src/data/gymData.js`) | Landscape (`1200×800` px) |

### Method A: Drop-in Replacement Using the Same Filenames (Easiest)

If you want to replace the images without editing any code references:
1. Delete the 8 demo image files listed above from `public/images/` and `public/images/hero/`.
2. Save your own replacement images into `public/images/` and `public/images/hero/` using the **exact same filenames and extensions**.
3. Open `src/data/gymData.js` and update the `title`, `alt`, `caption`, and `stats` text inside `GALLERY_ITEMS` so they accurately describe your new photos.

### Method B: Using Custom Filenames (Recommended for Custom Galleries)

If you want to use your own image filenames (e.g., `my-gym-rack.webp`):
1. Delete the 8 demonstration images from `public/images/` and `public/images/hero/`.
2. Copy your new image files into `public/images/` (and hero banners into `public/images/hero/`).
3. **Update Gallery Image References:** Open `src/data/gymData.js` and update the `src`, `title`, `category`, `alt`, and `caption` fields in `GALLERY_ITEMS`.
   - Always start paths with `./images/` (for example: `src: './images/my-gym-rack.webp'`).
   - Make sure every item's `category` matches one of the filter tabs in `src/pages/public/Gallery.jsx` (`'Facility'`, `'Strength'`, or `'Conditioning'`).
4. **Update Hero Image References:** Open `src/components/public/Hero.jsx` and update the two image `src` attributes:
   - Desktop hero (around line 108): `src="./images/hero/your-desktop-hero.png"`
   - Mobile hero (around line 743): `src="./images/hero/your-mobile-hero.png"`
5. **Rebuild the Project:** Run `npm run build` so Vite clears out `dist/` and copies only your new images into `dist/images/`.

### Tips to Avoid Breaking the Layout When Replacing Images

- **Gallery Photos:** Gallery cards use fixed container heights (`240px` on the Gallery page, `180px` on the Home page strip) with `object-fit: cover`. Standard landscape photos (`3:2` or `16:9` aspect ratio, minimum `1000px` wide) crop cleanly on all screen sizes and expand to their full natural proportions inside the lightbox modal.
- **Desktop Hero Image (`hero-main.png`):** On desktop screens (`1024px` and wider), the headline `TRAIN HARD. LIVE STRONG.` sits on the **left** side of the hero over a warm cream background (`#FBF8F2`), while the image uses `object-fit: cover; object-position: right center`. Use a wide banner image (`1920×1080` px) with your subject or equipment on the **right** side and a light/clean background on the left so the dark headline remains easy to read.

---

## 11. Contact Form Limitations & Setup

### Why the Contact Form Shows a Demo Notice

This product is a **frontend-only website template**. It does not include a backend server, database, or pre-connected email API.

By default, `src/pages/public/Contact.jsx` displays a visible placeholder notice above the form:

> *"Demo Form: This contact form is included for demonstration purposes only. Connect your preferred form-handling service before accepting real enquiries."*

And when submitted, it shows a `DEMO SUBMISSION (FRONTEND-ONLY)` screen rather than pretending an enquiry was delivered.

### How to Connect a Real Form-Handling Service

Before publishing your website, connect the form in `src/pages/public/Contact.jsx` to a form backend such as **Formspree**, **Web3Forms**, **EmailJS**, or your own API endpoint:

1. Create a free form endpoint at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Open `src/pages/public/Contact.jsx` and update `handleSubmit` to send the `form` data via `fetch()`:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!form.name || !form.phone) return;

     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
       body: JSON.stringify(form),
     });

     if (response.ok) {
       setFormSubmitted(true);
     }
   };
   ```
3. Once your real form service is tested and delivering enquiries, remove the `Demo Form` notice banner (`aria-label="Demo form notice"`) and update the post-submission confirmation message in `src/pages/public/Contact.jsx` to your real thank-you message.

---

## 12. Important Buyer Responsibilities

Before publishing a live website created from this template, you must complete the following checklist:

1. **Remove & Replace All Demo Images:** Delete all 8 demonstration images in `public/images/` and `public/images/hero/` and replace them with images you own or have valid commercial usage rights to publish.
2. **Verify Image Usage Rights:** Confirm that any stock photos, client photos, logos, or graphics you add are properly licensed for commercial web use.
3. **Replace All Sample Business Data:** Update every placeholder field in `src/data/gymData.js` (gym name, street address, phone number, WhatsApp number, email address, Instagram URL, Google Maps link, operating hours, and pricing plans).
4. **Connect or Remove the Contact Form:** Connect `src/pages/public/Contact.jsx` to a working form-handling service before accepting customer enquiries (or remove the form if you only want visitors to use the phone/WhatsApp/email links).
5. **Legal & Privacy Compliance:** Add any privacy policy, terms of service, or cookie disclosures required by your jurisdiction when collecting visitor data through a contact form or analytics script.

---

## 13. Color & Typography Customization

### Brand Colors

All brand colors are controlled by CSS variables in `src/styles/variables.css`:

```css
:root {
  --color-yellow:        #F4C400; /* Primary accent color */
  --color-charcoal:      #252A2E; /* Primary dark background & heading color */
  --color-slate:         #4B555D; /* Secondary body text color */
  --color-warm-bg:       #FBF8F2; /* Page background tint */
  --color-white:         #FFFFFF; /* Card surface color */
}
```

### Fonts

The template loads **Bebas Neue** (headings) and **Inter** (body text) from Google Fonts in `index.html` and assigns them in `src/styles/variables.css`:

```css
--font-display: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif;
--font-body:    'Inter', system-ui, sans-serif;
```

---

## 14. Troubleshooting Common Installation Issues

### 1. `'npm' is not recognized as an internal or external command`
- **Cause:** Node.js is not installed or not added to your system `PATH`.
- **Fix:** Download and install the Node.js LTS installer from [https://nodejs.org](https://nodejs.org), then restart your terminal and code editor.

### 2. `npm install` fails with permission or cache errors
- **Cause:** Corrupted npm cache or outdated Node.js version.
- **Fix:**
  1. Ensure `node -v` outputs `v18.0.0` or newer.
  2. Clean the npm cache: `npm cache clean --force`
  3. Delete any partial `node_modules` folder and run `npm install` again.

### 3. Opening `dist/index.html` directly via double-click (`file://`) shows a blank page
- **Cause:** Modern browsers block ES module `<script type="module">` loading over the local `file://` protocol due to CORS security rules.
- **Fix:** Always preview the production build over a local HTTP server using `npm run preview` (or VS Code Live Server / any static web host).

### 4. Port `5173` is already in use
- **Cause:** Another Vite instance or application is using port `5173`.
- **Fix:** Vite will automatically try the next port (e.g., `5174`), or you can specify a custom port:
  ```bash
  npx vite --port 3000
  ```

### 5. Replaced images do not appear after building
- **Cause:** Images were placed outside `public/images/` or the browser cached the old filename.
- **Fix:** Ensure your images are inside `public/images/`, verify the path in `src/data/gymData.js` starts with `./images/`, run `npm run build`, and perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`) in your browser.

---

## 15. License

This template is licensed under the **Commercial Developer Template License**. See [`LICENSE.txt`](./LICENSE.txt) for complete permitted uses, restrictions, and demonstration asset notices.
#   g y m w e b s i t e - s a m p l e  
 