# GitHub Pages Deployment Guide

## Be My Traveller - GitHub Pages Setup

This guide will help you deploy your Be My Traveller website to GitHub Pages for free hosting.

---

## 📋 Prerequisites

- GitHub account (free at github.com)
- Git installed on your computer
- This website project

---

## 🚀 Step-by-Step Deployment Guide

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top right → **New repository**
3. Fill in the repository details:
   - **Repository name**: `be-my-traveller` (or any name you prefer)
   - **Description**: "Modern travel company website for Be My Traveller"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize this repository with a README**: Uncheck this (we have our own README)
4. Click **Create repository**

### Step 2: Initialize Git & Push Code

#### Option A: Using Command Line (Recommended)

1. Open Terminal/Command Prompt in your project folder
2. Run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Be My Traveller website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/be-my-traveller.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Option B: Using GitHub Desktop (Easier for Beginners)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click **File** → **Clone repository**
3. Go to **URL** tab
4. Paste your repository URL
5. Click **Clone**
6. Copy all project files into the cloned folder
7. In GitHub Desktop, commit with message "Initial commit"
8. Click **Publish repository**

---

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon at top right)
3. In the left sidebar, scroll down and click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

**Your site will be published at:** `https://yourusername.github.io/be-my-traveller`

> Note: It may take 2-5 minutes for your site to appear live.

---

### Step 4: Access Your Live Website

After a few minutes, your website will be live at:
```
https://your-username.github.io/be-my-traveller
```

You can also set a custom domain if you have one. See section below.

---

## 📱 Making Updates After Deployment

Every time you make changes to your website:

### Using Command Line:
```bash
git add .
git commit -m "Describe your changes here"
git push origin main
```

### Using GitHub Desktop:
1. Make changes to your files
2. In GitHub Desktop, you'll see the changes
3. Write a summary of changes
4. Click **Commit to main**
5. Click **Push origin**

Changes will be live within 1-2 minutes!

---

## 🌐 Setting Up Custom Domain (Optional)

If you have your own domain (e.g., bemytraveller.com):

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Update DNS settings:
   - Type: `CNAME`
   - Name: `www` (or `@` for apex domain)
   - Value: `yourusername.github.io`
6. Wait 24-48 hours for DNS to propagate

---

## ✏️ Important Configuration Changes

Before deploying, update these files with your actual information:

### 1. Update `_config.yml`:
```yaml
url: "https://yourusername.github.io"
baseurl: "/be-my-traveller"

author:
  name: Be My Traveller
  email: info@bemytraveller.com

contact:
  phone: "+91 9876543210"
  email: "info@bemytraveller.com"
```

### 2. Update phone numbers in HTML files:
Replace `919876543210` with your actual WhatsApp number in:
- `index.html`
- `inquiry.html`

### 3. Update email:
Replace `info@bemytraveller.com` with your real email in:
- `index.html`
- `inquiry.html`

### 4. Update address:
Change "Manali, Himachal Pradesh" to your actual location in:
- `index.html` - Contact section
- `inquiry.html` - Sidebar

---

## 🔧 Troubleshooting

### Site Not Showing Up
- ✅ Check repository is public
- ✅ Wait 5-10 minutes (first deployment takes longer)
- ✅ Check branch name is `main`
- ✅ Verify GitHub Pages is enabled in Settings → Pages

### Changes Not Showing
- ✅ Make sure you pushed the code (`git push`)
- ✅ Do a hard refresh (Ctrl+F5 or Cmd+Shift+R)
- ✅ Wait 1-2 minutes for deployment

### Custom Domain Not Working
- ✅ Verify DNS records are correct
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Check domain registrar settings

### 404 Errors on Pages
- ✅ Verify file paths are correct
- ✅ Make sure all HTML files are in root directory
- ✅ Check that links use relative paths

---

## 📊 Checking Deployment Status

1. Go to repository
2. Click **Deployments** tab (near top)
3. You'll see deployment history
4. Click on latest deployment to see details
5. Check for any errors

---

## 🔄 Continuous Updates Workflow

### For Regular Updates:

```bash
# Make changes to files
# Then commit and push

git status                              # See what changed
git add .                              # Stage all changes
git commit -m "Update: [your message]" # Commit
git push origin main                   # Deploy live
```

---

## 💡 Best Practices

1. **Test Locally First**
   - Open `index.html` in browser before pushing
   - Test all links and forms

2. **Meaningful Commit Messages**
   ```bash
   git commit -m "Update contact phone number"
   git commit -m "Fix inquiry form validation"
   git commit -m "Add new package recommendations"
   ```

3. **Create Branches for Major Changes**
   ```bash
   git checkout -b new-feature
   # Make changes
   git commit -m "Add new feature"
   git push origin new-feature
   # Create Pull Request to review
   git checkout main
   git merge new-feature
   ```

4. **Regular Backups**
   - Keep a local backup copy
   - Commit changes regularly

---

## 🆘 Need Help?

### GitHub Pages Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Common Issues
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages)

### Contact Support
- Email: info@bemytraveller.com
- Phone: +91 9876543210
- WhatsApp: +91 9876543210

---

## 📈 Analytics & SEO (Optional)

### Add Google Analytics
1. Create account at [google.com/analytics](https://analytics.google.com)
2. Get your Tracking ID (e.g., UA-XXXXXXX-X)
3. Add to `_config.yml`:
   ```yaml
   google_analytics: UA-XXXXXXX-X
   ```

### Monitor Site Performance
- GitHub Pages provides basic analytics
- Add Google PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- Use Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)

---

## ✅ Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created and public
- [ ] All files pushed to GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Website accessible at GitHub Pages URL
- [ ] Updated phone number with actual WhatsApp
- [ ] Updated email with actual business email
- [ ] Updated address and location info
- [ ] Tested all links and forms
- [ ] Custom domain configured (if applicable)
- [ ] Shared website URL with team

---

## 🎉 You're Live!

Congratulations! Your Be My Traveller website is now live on the internet! 

**Your website URL**: `https://yourusername.github.io/be-my-traveller`

Share it with:
- ✅ Customers and clients
- ✅ Social media
- ✅ Business cards
- ✅ Google Business listing
- ✅ Travel websites

---

**Happy travels and welcome to the digital world!** 🏔️✈️
