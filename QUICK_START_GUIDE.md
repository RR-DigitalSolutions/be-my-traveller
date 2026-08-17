# Quick Start & Customization Guide

## Be My Traveller - Quick Reference Guide

---

## 🚀 Quick Start (5 Minutes)

### 1. First Time Setup
```bash
# Clone or download the project
cd "Be My Traveller"

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 2. Make Your First Changes

#### Update Contact Information
Edit these files to add your real details:

**index.html** - Lines to find and update:
- Line ~68: Phone number (919876543210)
- Line ~69: Email (info@bemytraveller.com)
- Line ~75-81: Address section

**inquiry.html** - Same phone/email locations
**script.js** - Line ~350: Phone number in WhatsApp function

#### Update Company Name
Search and replace throughout project:
- Find: "Be My Traveller"
- Replace: "Your Company Name"

Or search in specific files:
```bash
grep -r "Be My Traveller" .
```

---

## 🎨 Customization Guide

### Change Colors

**Edit `styles.css` - Lines 7-15:**

```css
:root {
    --primary-color: #00a86b;      /* Main green - Change this! */
    --primary-dark: #007a52;       /* Dark green */
    --primary-light: #2ecc71;      /* Light green */
    --secondary-color: #3498db;    /* Blue - For accents */
    --accent-color: #e74c3c;       /* Red - For errors/alerts */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #ecf0f1;         /* Light text */
    --bg-light: #f8f9fa;           /* Light background */
    --bg-dark: #1a1a1a;            /* Dark background */
}
```

Popular color combos for travel companies:
```css
/* Tropical Blue */
--primary-color: #0099ff;

/* Sunset Orange */
--primary-color: #ff6b35;

/* Forest Green */
--primary-color: #1b4332;

/* Ocean Teal */
--primary-color: #00c9b7;

/* Mountain Purple */
--primary-color: #6c4c9b;
```

### Change Countdown Timer Duration

**Edit `script.js` - Line ~60:**

```javascript
// Change from 30 days to your desired time
const comingSoonDate = new Date();
comingSoonDate.setDate(comingSoonDate.getDate() + 30); // Change 30 to any number
```

### Change Hero Background

**Edit `styles.css` - Line ~175:**

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change hex colors here */
}
```

### Add Your Own Background Image

```css
.hero {
    background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), 
                url('your-image.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 📧 Email Integration (Optional)

To actually send inquiry emails, choose one option:

### Option 1: Formspree (Simplest)
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free
3. Create new form
4. Get your form endpoint
5. Update form action in `inquiry.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

### Option 2: Basin
1. Go to [basin.io](https://basin.io)
2. Create new form
3. Update form action:

```html
<form action="https://basin.io/submit" method="POST">
    <input type="hidden" name="email" value="info@bemytraveller.com">
    <!-- form fields -->
</form>
```

### Option 3: Backend API (Advanced)
Create Node.js/Python backend to:
1. Receive form data
2. Send emails via Nodemailer/SendGrid
3. Store in database

---

## 📝 Form Customization

### Add New Form Fields

1. **Add to HTML** (`inquiry.html`):
```html
<div class="form-group">
    <label for="newField">Your Field Label *</label>
    <input type="text" id="newField" name="newField" placeholder="Placeholder text" required>
</div>
```

2. **Add to JavaScript** (`script.js` - `getFormData()` function):
```javascript
newField: document.getElementById('newField').value,
```

3. **Add to summary** (in `updateSummary()` function):
```javascript
if (data.newField) {
    html += `<div class="summary-item">
        <span class="summary-label">Field Name:</span>
        <span class="summary-value">${data.newField}</span>
    </div>`;
}
```

### Add New Activity Options

**In `inquiry.html` - Add to checkbox-grid:**
```html
<label class="checkbox-item">
    <input type="checkbox" name="activities" value="new-activity" onchange="updateDynamicContent()">
    <span class="checkbox-label">
        <i class="fas fa-icon-name"></i> Activity Name
    </span>
</label>
```

**In `script.js` - Add to `activitiesText` object:**
```javascript
'new-activity': 'Activity Name',
```

**In `updatePackageRecommendations()` - Add logic:**
```javascript
if (data.activities.includes('new-activity')) {
    recommendations.push({
        name: '📍 Package Name',
        description: 'Package description',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
    });
}
```

---

## 🛠️ File-by-File Customization

### index.html (Landing Page)
- Lines 1-20: Meta tags & SEO
- Lines 50-60: Navigation links
- Lines 68-150: Hero section & countdown
- Lines 200-250: Features section
- Lines 280-350: Contact & address section
- Lines 450-500: Footer

### inquiry.html (Form Page)
- Lines 50-60: Navigation
- Lines 70-80: Hero section
- Lines 90-600: Form fields
- Lines 610-700: Sidebar cards
- Lines 710-800: Modals

### styles.css
- Lines 1-50: CSS variables & base styles
- Lines 60-150: Navigation styling
- Lines 160-300: Hero section animations
- Lines 310-450: Form styles
- Lines 450-600: Modal styles
- Lines 600+: Responsive media queries

### script.js
- Lines 1-50: DOM initialization
- Lines 60-150: Countdown timer
- Lines 160-250: Form validation
- Lines 260-400: Dynamic content updates
- Lines 400-500: WhatsApp integration
- Lines 500+: Utility functions

---

## 🔗 Add New Pages

### Create a New Page (e.g., about.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Be My Traveller</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Copy navbar from index.html -->
    
    <!-- Your page content -->
    
    <!-- Copy footer from index.html -->
    
    <script src="script.js"></script>
</body>
</html>
```

### Update Navigation Links

Add to navbar in all HTML files:
```html
<li><a href="about.html" class="nav-link">About</a></li>
```

---

## 📱 Mobile Optimization

### Test Responsive Design
1. Open DevTools (F12)
2. Click device toggle (top-left)
3. Select different devices
4. Check all pages look good

### Add Touch-Friendly Elements
```css
/* Make buttons larger for mobile */
@media (max-width: 768px) {
    .btn {
        padding: 1rem 2rem;
        min-height: 48px; /* Minimum touch target size */
    }
}
```

---

## 🚀 Performance Tips

### Optimize Images
- Use JPG for photos
- Use PNG for graphics with transparency
- Compress with [tinypng.com](https://tinypng.com)
- Max width: 1200px

### Minimize CSS/JS
- Use minifiers for production
- Remove unused code
- Lazy load images

### Reduce Font Sizes
```css
/* Don't load fonts you don't use */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
/* Only load needed weights */
```

---

## 🔐 Security Checklist

- ✅ Don't hardcode API keys in JavaScript
- ✅ Validate all user input
- ✅ Use HTTPS links (https:// not http://)
- ✅ Keep dependencies updated
- ✅ Sanitize form submissions
- ✅ Use Content Security Policy headers

---

## 📊 Analytics Setup

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `_config.yml`:
```yaml
google_analytics: G-XXXXXXXXXX
```

4. Add to HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 SEO Optimization

### Update Meta Tags (in HTML head)

```html
<meta name="description" content="Your unique description (160 chars max)">
<meta name="keywords" content="travel, manali, tours, adventure">
<meta name="author" content="Be My Traveller">
<meta property="og:title" content="Be My Traveller">
<meta property="og:description" content="Adventure Awaits in Manali">
<meta property="og:image" content="your-image.jpg">
<meta property="og:url" content="https://yoursitename.com">
```

### Add Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TravelCompany",
  "name": "Be My Traveller",
  "url": "https://your-website.com",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Manali",
    "addressRegion": "HP"
  }
}
</script>
```

---

## 🐛 Debugging Tips

### Browser Console
1. Open DevTools (F12)
2. Click Console tab
3. Check for errors (red icons)
4. Test JavaScript commands

### Network Tab
1. Open DevTools
2. Click Network tab
3. Reload page
4. Check for failed requests (red)

### Lighthouse Audit
1. Open DevTools
2. Click Lighthouse tab
3. Click Analyze page load
4. Follow recommendations

---

## 💾 Backup & Version Control

### Create Local Backup
```bash
# Copy entire folder
cp -r "Be My Traveller" "Be My Traveller - Backup"
```

### Git Workflow
```bash
# Regular commits
git add .
git commit -m "Descriptive message"
git push origin main

# Create branches for testing
git checkout -b test-new-feature
# Make changes
git add .
git commit -m "Test feature"
git checkout main
git merge test-new-feature
```

---

## 📞 Support Resources

### Documentation
- HTML: [w3schools.com/html](https://w3schools.com/html)
- CSS: [w3schools.com/css](https://w3schools.com/css)
- JavaScript: [w3schools.com/js](https://w3schools.com/js)
- GitHub Pages: [pages.github.com](https://pages.github.com)

### Code Editors
- VS Code: [code.visualstudio.com](https://code.visualstudio.com)
- Sublime Text: [sublimetext.com](https://sublimetext.com)

### Online Tools
- HTML Validator: [validator.w3.org](https://validator.w3.org)
- CSS Validator: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)
- Color Picker: [colorpicker.com](https://colorpicker.com)

---

## 🎓 Learning Path

1. **Start**: Understanding HTML structure
2. **Next**: CSS styling and layouts
3. **Then**: JavaScript interactivity
4. **Advanced**: Forms and backend integration
5. **Expert**: Deployment and optimization

---

## ✅ Customization Checklist

- [ ] Updated company name/branding
- [ ] Changed colors to match brand
- [ ] Updated contact phone and email
- [ ] Added real address information
- [ ] Tested all links and forms
- [ ] Updated navigation with your pages
- [ ] Changed countdown timer duration
- [ ] Added WhatsApp integration
- [ ] Optimized images
- [ ] Set up analytics
- [ ] Configured email service
- [ ] Deployed to GitHub Pages

---

**You're all set! Start customizing and make your travel website shine!** ✨🏔️
