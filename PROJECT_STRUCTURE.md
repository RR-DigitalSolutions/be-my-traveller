# Project Structure & File Guide

## Be My Traveller - File Directory Reference

---

## 📁 Project Structure

```
Be My Traveller/
│
├── 📄 index.html
│   └── Main landing page (Coming Soon)
│
├── 📄 inquiry.html
│   └── Dynamic tour inquiry form
│
├── 🎨 styles.css
│   └── All styling and animations
│
├── ⚙️ script.js
│   └── All JavaScript functionality
│
├── 📋 _config.yml
│   └── Jekyll/GitHub Pages configuration
│
├── 📖 README.md
│   └── Project overview and features
│
├── 📚 QUICK_START_GUIDE.md
│   └── Customization and setup guide
│
├── 🚀 GITHUB_PAGES_DEPLOYMENT.md
│   └── Step-by-step deployment guide
│
├── ✨ FEATURES.md
│   └── Complete feature documentation
│
├── 📑 PROJECT_STRUCTURE.md
│   └── This file
│
├── 📦 package.json
│   └── Project metadata and npm scripts
│
└── 🚫 .gitignore
    └── Git ignore patterns
```

---

## 📄 File Descriptions

### 1. **index.html** (Main Landing Page)
**Size:** ~8 KB | **Type:** HTML5

#### Sections:
- **Navigation Bar** - Sticky header with links
- **Hero Section** - Animated title, countdown, CTAs
- **About Section** - Features/why choose us
- **Contact Section** - Address, map, contact details
- **Modals** - Quick inquiry and WhatsApp options
- **Footer** - Links, social media, newsletter

#### Key Elements:
- Countdown timer (days/hours/mins/secs)
- Floating animations
- Gradient backgrounds
- Call-to-action buttons
- Embedded Google Map
- Quick inquiry modal

#### Line References:
- 1-50: HTML head and meta tags
- 51-100: Navigation bar
- 101-200: Hero section with countdown
- 201-300: About/features section
- 301-400: Contact section with map
- 401-500: Modals and footer

---

### 2. **inquiry.html** (Dynamic Form Page)
**Size:** ~15 KB | **Type:** HTML5

#### Sections:
- **Navigation Bar** - Same as index
- **Hero Section** - Page title
- **Form Column** - Main inquiry form
- **Sidebar Column** - Summary and recommendations
- **Modals** - Success and WhatsApp modals
- **Footer** - Same as index

#### Key Features:
- 4-step multi-step form
- Real-time validation
- Dynamic trip summary
- Intelligent package recommendations
- Auto-save functionality
- WhatsApp integration

#### Form Sections:
1. Personal Information (name, email, phone, city)
2. Travel Details (travelers, date, duration, budget)
3. Tour Preferences (activities, accommodation)
4. Special Requirements (dietary, notes)

#### Sidebar Components:
1. Trip Summary - Real-time updates
2. Package Recommendations - Dynamic suggestions
3. Manali Facts - Location information
4. Quick Contacts - Call/Email/WhatsApp

---

### 3. **styles.css** (Stylesheet)
**Size:** ~50 KB | **Type:** CSS3

#### Structure:
```
1. CSS Variables & Base Styles (Lines 1-100)
   - Color definitions
   - Base element styling
   - Typography setup

2. Navigation Bar (Lines 101-200)
   - Navbar styling
   - Logo styling
   - Navigation links
   - Mobile hamburger

3. Hero Section (Lines 201-400)
   - Hero background
   - Animations (fade, slide, float)
   - Countdown timer styling
   - Buttons and CTAs

4. About Section (Lines 401-500)
   - Feature cards
   - Grid layout
   - Hover effects

5. Contact Section (Lines 501-600)
   - Address card styling
   - Contact items
   - Map container

6. Modal Styles (Lines 601-700)
   - Modal container
   - Modal content
   - Success modal
   - Animation effects

7. Inquiry Page (Lines 701-900)
   - Form styling
   - Sidebar cards
   - Input validation styles
   - Responsive layout

8. Footer (Lines 901-1000)
   - Footer sections
   - Social links
   - Newsletter signup

9. Responsive Design (Lines 1001-1100)
   - Mobile breakpoint (max-width: 768px)
   - Tablet breakpoint (max-width: 1024px)
   - Phone breakpoint (max-width: 480px)

10. Animations (Throughout)
    - @keyframes definitions
    - Transition properties
    - Transform effects
```

#### CSS Features:
- CSS Grid and Flexbox layouts
- CSS Variables for theming
- Media queries for responsiveness
- Smooth transitions
- Hardware-accelerated animations
- Gradient backgrounds
- Box shadows and depth

#### Key Classes:
- `.hero` - Hero section
- `.btn` - Button styling
- `.form-group` - Form field wrapper
- `.feature-card` - Feature cards
- `.modal` - Modal container
- `.contact-item` - Contact information item

---

### 4. **script.js** (JavaScript)
**Size:** ~25 KB | **Type:** JavaScript ES6+

#### Main Functions:

1. **Initialization**
   ```javascript
   - DOMContentLoaded event
   - Setup functions
   - Event listeners
   ```

2. **Countdown Timer** (Lines 30-80)
   ```javascript
   initCountdown()
   - Sets end date
   - Updates every second
   - Formats display
   ```

3. **Mobile Menu** (Lines 85-105)
   ```javascript
   setupMobileMenu()
   - Toggle menu
   - Close on link click
   ```

4. **Form Validation** (Lines 110-200)
   ```javascript
   validateForm()
   validateEmail()
   showError()
   clearError()
   - Real-time validation
   - Error display
   - Field validation
   ```

5. **Form Submission** (Lines 205-250)
   ```javascript
   handleFormSubmit()
   getFormData()
   - Process form
   - Collect data
   - Show success
   ```

6. **Dynamic Updates** (Lines 255-350)
   ```javascript
   updateDynamicContent()
   updateSummary()
   updatePackageRecommendations()
   - Real-time updates
   - Summary refresh
   - Package suggestions
   ```

7. **Modal Functions** (Lines 355-400)
   ```javascript
   showSuccessModal()
   closeSuccessModal()
   - Modal control
   - Event handlers
   ```

8. **WhatsApp Integration** (Lines 405-450)
   ```javascript
   openWhatsAppChat()
   openWhatsAppInquiry()
   - Generate messages
   - Open WhatsApp
   - Pre-fill data
   ```

9. **Auto-Save** (Lines 455-500)
   ```javascript
   setupAutoSave()
   saveFormData()
   loadFormData()
   - Save every 30 seconds
   - Use localStorage
   - Restore on reload
   ```

10. **Utility Functions** (Lines 505-550)
    ```javascript
    scrollToContact()
    formatCurrency()
    formatDate()
    - Helper functions
    - Formatting
    - Navigation
    ```

#### Global Variables:
- `hamburger` - Mobile menu button
- `navLinks` - Navigation links container
- `AUTO_SAVE_INTERVAL` - 30000ms (30 seconds)

#### Event Listeners:
- `DOMContentLoaded` - Initialization
- `click` - Button clicks, modal close
- `change` - Form changes, dynamic updates
- `blur` - Form validation
- `scroll` - Animation triggers

---

### 5. **_config.yml** (Jekyll Config)
**Size:** ~2 KB | **Type:** YAML

#### Configuration Sections:
```yaml
1. Site Settings
   - title: Page title
   - tagline: Subtitle
   - description: Site description
   - url: Base URL
   - baseurl: GitHub Pages path

2. Author/Organization
   - name
   - email

3. Contact Information
   - phone
   - email
   - address
   - whatsapp

4. Social Media Links
   - facebook
   - instagram
   - twitter
   - youtube

5. Build Settings
   - markdown: kramdown
   - theme: jekyll-theme-minimal
   - plugins: SEO, feed, sitemap

6. Exclude/Include
   - Files to exclude from build
   - Files to include in build

7. Pagination
   - paginate: 10
   - paginate_path: "/blog/page:num/"

8. Analytics
   - Google Analytics ID

9. Language & Timezone
   - lang: en
   - timezone: Asia/Kolkata
```

#### Usage:
- Processed by GitHub Pages
- Not required for local viewing
- Enables Jekyll features
- Generates sitemap, feed

---

### 6. **README.md** (Project Overview)
**Size:** ~5 KB | **Type:** Markdown

#### Sections:
- Project introduction
- Feature list
- Project structure
- Quick start guide
- Customization instructions
- Browser compatibility
- Deployment instructions
- Support information

#### Purpose:
- GitHub repository overview
- First-time visitor guide
- Quick reference
- Feature overview

---

### 7. **QUICK_START_GUIDE.md** (Setup & Customization)
**Size:** ~12 KB | **Type:** Markdown

#### Topics:
- 5-minute quick start
- Color customization
- Contact information updates
- Form field additions
- Activity option changes
- Email integration setup
- Page creation guide
- Performance optimization
- SEO setup
- Analytics configuration

#### Target Audience:
- Non-developers
- Business owners
- Developers new to project

---

### 8. **GITHUB_PAGES_DEPLOYMENT.md** (Deployment Guide)
**Size:** ~8 KB | **Type:** Markdown

#### Sections:
- Prerequisites
- Step-by-step deployment
- Repository setup
- GitHub Pages configuration
- Custom domain setup
- Making updates
- Troubleshooting
- Performance monitoring
- Analytics setup

#### Target Audience:
- First-time GitHub users
- Deployment setup
- Site owners

---

### 9. **FEATURES.md** (Feature Documentation)
**Size:** ~10 KB | **Type:** Markdown

#### Categories:
- Design & UX features
- Page features
- Dynamic features
- Form features
- Contact integration
- Technical features
- Customization options
- Analytics capabilities
- Security features
- Performance optimizations

#### Purpose:
- Complete feature list
- Implementation reference
- Capability overview

---

### 10. **package.json** (Project Metadata)
**Size:** ~1 KB | **Type:** JSON

#### Content:
```json
{
  "name": "be-my-traveller",
  "version": "1.0.0",
  "description": "Travel company website",
  "main": "script.js",
  "scripts": {
    "start": "open index.html",
    "build": "echo 'No build needed'",
    "deploy": "git add . && git commit && git push"
  },
  "keywords": ["travel", "manali", "tourism"],
  "author": "Be My Traveller",
  "license": "MIT"
}
```

#### Purpose:
- Project metadata
- NPM script definitions
- Dependency management (if needed)

---

### 11. **.gitignore** (Git Configuration)
**Size:** ~2 KB | **Type:** Plain Text

#### Ignored Items:
- OS files (.DS_Store, Thumbs.db)
- IDE files (.vscode, .idea)
- Node modules
- Build outputs
- Temporary files
- Log files

#### Purpose:
- Keep repository clean
- Exclude unnecessary files
- Version control best practices

---

## 📊 File Size Summary

| File | Size | Type | Purpose |
|------|------|------|---------|
| index.html | 8 KB | HTML | Landing page |
| inquiry.html | 15 KB | HTML | Form page |
| styles.css | 50 KB | CSS | All styling |
| script.js | 25 KB | JS | All functionality |
| _config.yml | 2 KB | YAML | Configuration |
| README.md | 5 KB | MD | Overview |
| QUICK_START.md | 12 KB | MD | Setup guide |
| DEPLOYMENT.md | 8 KB | MD | Deploy guide |
| FEATURES.md | 10 KB | MD | Features |
| package.json | 1 KB | JSON | Metadata |
| .gitignore | 2 KB | TXT | Git config |

**Total Size: ~138 KB** (Uncompressed)
**Gzip Size: ~35 KB** (Compressed)

---

## 🔗 File Dependencies

```
index.html
├── styles.css (linked)
├── script.js (linked)
├── Font Awesome (CDN)
└── Google Fonts (CDN)

inquiry.html
├── styles.css (linked)
├── script.js (linked)
├── Font Awesome (CDN)
└── Google Fonts (CDN)

script.js
└── No dependencies (pure JavaScript)

styles.css
└── No dependencies (pure CSS)
```

---

## 📝 Important Code Locations

### To Change Company Name:
- index.html: Line 58
- inquiry.html: Line 58
- README.md: Multiple locations
- package.json: Line 2

### To Change Phone Number:
- index.html: Line 68, 340
- inquiry.html: Line 68, 340, 650
- script.js: Line 356

### To Change Email:
- index.html: Line 69, 341
- inquiry.html: Line 69, 341, 651
- _config.yml: Line 18

### To Change Colors:
- styles.css: Lines 7-17 (CSS variables)

### To Change Countdown:
- script.js: Line 62

### To Add Google Analytics:
- _config.yml: Line 55

---

## 🔧 How Files Work Together

```
User visits website
     ↓
Browser loads index.html
     ↓
HTML loads styles.css (styling)
     ↓
HTML loads script.js (interactivity)
     ↓
CDN loads Font Awesome & Google Fonts
     ↓
Page renders and becomes interactive
```

### Form Submission Flow:
```
User fills inquiry.html form
     ↓
script.js validates input
     ↓
script.js updates dynamic content
     ↓
User clicks submit
     ↓
script.js collects form data
     ↓
script.js shows success modal
     ↓
Form data saved to localStorage (auto-save)
     ↓
Optionally sends via WhatsApp
```

---

## 🚀 Deployment Flow

```
Local Files
     ↓
git add/commit/push
     ↓
GitHub Repository
     ↓
GitHub Pages Build
     ↓
_config.yml processes files
     ↓
Jekyll generates site (if needed)
     ↓
Published to GitHub Pages URL
     ↓
https://username.github.io/be-my-traveller
```

---

## 🎯 Quick Edit Locations

| Change | File | Line(s) |
|--------|------|---------|
| Company Name | index.html, inquiry.html | ~58 |
| Phone Number | script.js | ~356 |
| Email | index.html, _config.yml | various |
| Address | index.html | ~75-81 |
| Colors | styles.css | 7-17 |
| Countdown Days | script.js | ~62 |
| Timer Duration | script.js | ~62 |
| WhatsApp Link | script.js | ~356 |
| Logo | index.html | ~59 |
| Background Color | styles.css | ~176 |
| Footer Text | index.html | ~500 |

---

## 💾 Backup Strategy

1. **Keep Original Copy**
   ```bash
   cp -r "Be My Traveller" "Be My Traveller - Backup"
   ```

2. **Use Version Control**
   ```bash
   git init
   git add .
   git commit -m "Initial version"
   ```

3. **Regular Commits**
   ```bash
   git commit -m "Description of changes"
   ```

4. **Cloud Backup**
   - Push to GitHub
   - Keep on GitHub
   - Use GitHub's version history

---

## 🔒 File Permissions

| File | Read | Write | Execute |
|------|------|-------|---------|
| HTML files | ✅ | ✅ | ❌ |
| CSS file | ✅ | ✅ | ❌ |
| JS file | ✅ | ✅ | ❌ |
| Config files | ✅ | ✅ | ❌ |
| .gitignore | ✅ | ✅ | ❌ |

---

## 📞 Support Resources

### File Format Validation:
- HTML: [validator.w3.org](https://validator.w3.org)
- CSS: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)
- JSON: [jsonlint.com](https://jsonlint.com)
- YAML: [yamllint.com](https://yamllint.com)

### Online Editors:
- VS Code: [vscode.dev](https://vscode.dev)
- JSFiddle: [jsfiddle.net](https://jsfiddle.net)
- CodePen: [codepen.io](https://codepen.io)

---

**Project Structure Guide Complete** ✅

For detailed information about any file, refer to its header comments or dedicated documentation.
