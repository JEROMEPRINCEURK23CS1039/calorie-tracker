# 🔧 DEPLOYMENT COMMANDS REFERENCE

## Quick Reference - Copy & Paste Ready

### Before You Start
Make sure you're in the project directory:
```bash
cd c:\Users\jancy\Desktop\Webtechexp7\calorie-tracker
```

---

## 🚀 DEPLOYMENT PATH: Vercel (Easiest)

### Step 1: Initialize Git & Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Calorie Tracker App - Ready for deployment"

# Add GitHub remote (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR_USERNAME/calorie-tracker.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy via Web UI
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. **Done!** Get your live URL ✨

---

## 📦 DEPLOYMENT PATH: Manual (Any Hosting)

### Step 1: Install & Build
```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### Step 2: Upload Build Folder
- Upload all files from `build/` folder to your hosting
- Via FTP, File Manager, or drag & drop
- To: `public_html/` or `www/` directory

### Step 3: Access Your App
- Visit your domain URL
- Your app is live! 🎉

---

## 🧪 LOCAL TESTING COMMANDS

### Start Development Server
```bash
npm start
# Visit http://localhost:3000
# Auto-reloads on code changes
# Press Ctrl+C to stop
```

### Build Production Version
```bash
npm run build
# Creates 'build/' folder
# Ready to deploy
```

### Test Production Build Locally
```bash
npm install -g serve
serve -s build -l 3000
# Visit http://localhost:3000
# Test the exact production version
```

### Run Tests
```bash
npm test -- --watchAll=false
# Runs all tests once
# Exits after completion
```

---

## 📊 GITHUB PAGES DEPLOYMENT

### Setup GitHub Pages Hosting
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts section:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
```

### Deploy to GitHub Pages
```bash
# Build and deploy
npm run deploy

# Your app goes live at:
# https://yourusername.github.io/calorie-tracker
```

---

## 🔗 NETLIFY DEPLOYMENT

### Option A: Connect via Web UI
1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repository
4. Build settings auto-detected
5. Click "Deploy site"
6. Done! ✨

### Option B: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=build
```

---

## 🔄 COMMON WORKFLOW

### Daily Development
```bash
# Start coding
npm start

# Test locally
# Make changes
# Hot reload happens automatically
```

### Before Deployment
```bash
# Final test
npm test -- --watchAll=false

# Build production version
npm run build

# Test production build
serve -s build -l 3000

# If everything works:
git add .
git commit -m "Ready to deploy"
git push
```

### Deploy to Vercel
```bash
# Just push to GitHub
# Vercel auto-deploys!
git push origin main
# Check your live URL ✨
```

---

## 🐛 TROUBLESHOOTING COMMANDS

### Clear Cache & Reinstall
```bash
# Delete node_modules and cache
npm cache clean --force
rm -r node_modules
rm package-lock.json

# Reinstall everything
npm install
```

### Verify Build Works
```bash
# Clean build
npm clean-install
npm run build

# Check for errors
echo $LASTEXITCODE
```

### Check Installation
```bash
# Verify Node.js
node --version

# Verify npm
npm --version

# Check React
npm list react react-dom
```

---

## 📝 ENVIRONMENT VARIABLES (Optional)

### Create .env File
```bash
# In project root, create .env file with:
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0

# Use in code:
# process.env.REACT_APP_API_URL
```

### Build with Environment
```bash
# Build with production environment
NODE_ENV=production npm run build

# Build with custom env
REACT_APP_VERSION=2.0.0 npm run build
```

---

## 🌍 DOMAIN & HOSTING

### Custom Domain on Vercel
```bash
# In Vercel dashboard:
# 1. Go to project settings
# 2. Click "Domains"
# 3. Add your custom domain
# 4. Update DNS records
```

### Custom Domain on Netlify
```bash
# In Netlify dashboard:
# 1. Go to Site settings
# 2. Click "Change site name" or add Domain
# 3. Update DNS records at your registrar
```

### Custom Domain on Shared Hosting
```bash
# Update A record to hosting IP:
# A: your-domain.com -> your.hosting.ip
# Wait 24 hours for DNS to update
# Visit your-domain.com
```

---

## 📊 MONITORING COMMANDS

### Check Bundle Size
```bash
# After build, check size
Get-ChildItem build -Recurse | Measure-Object -Property Length -Sum
# Shows total build size

# Check main bundle
Get-ChildItem build/static/js
```

### Monitor Performance
```bash
# Test production build performance
npm run build

# Use Lighthouse (in Chrome DevTools)
# Or online: https://web.dev/measure
```

### Check Live Website Performance
```bash
# Use WebPageTest: https://www.webpagetest.org
# Or Pingdom: https://tools.pingdom.com
```

---

## 🔐 SECURITY CHECKS

### Verify No Secrets in Code
```bash
# Check for API keys, tokens, passwords
grep -r "password\|token\|secret\|key" src/
# Should be empty!

# If found, move to .env file
```

### Check Dependencies for Vulnerabilities
```bash
# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🎯 DEPLOYMENT COMMANDS BY PLATFORM

### Vercel
```bash
git push origin main
# Auto-deploys! ✨
```

### GitHub Pages
```bash
npm run deploy
# Deploys to gh-pages branch
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=build
```

### AWS S3
```bash
npm run build
aws s3 sync build/ s3://your-bucket-name
```

### Azure Static Web Apps
```bash
npm run build
# Deploy via Azure Portal or CLI
```

### Traditional Hosting
```bash
npm run build
# FTP/upload build/ folder to hosting
```

---

## ⏱️ COMMAND TIMING

| Command | Time | What It Does |
|---------|------|-------------|
| `npm install` | 30-60s | Install dependencies |
| `npm start` | 5s | Start dev server |
| `npm run build` | 20-30s | Create production build |
| `npm test` | 5-10s | Run test suite |
| Vercel deploy | 2-5min | Auto-deploy to Vercel |
| Manual upload | 5-10min | FTP upload to hosting |

---

## 💾 BACKUP COMMANDS

### Create Backup
```bash
# Create zip of project
Compress-Archive -Path . -DestinationPath calorie-tracker-backup.zip

# Or tar for Linux/Mac
tar -czf calorie-tracker-backup.tar.gz .
```

### Restore from Backup
```bash
# Extract backup
Expand-Archive -Path calorie-tracker-backup.zip -DestinationPath restore-folder

# Reinstall dependencies
cd restore-folder
npm install
npm start
```

---

## 🆘 EMERGENCY FIXES

### App Won't Start
```bash
npm cache clean --force
rm -r node_modules
npm install
npm start
```

### Build Fails
```bash
npm clean-install
npm run build
```

### Deploy Fails
```bash
# Verify setup
npm install
npm run build
# Check build/ folder exists
# Then retry deploy
```

---

## 📚 HELPFUL LINKS

```bash
# View in browser:
Start-Process "https://react.dev"
Start-Process "https://vercel.com/docs"
Start-Process "https://netlify.com/blog"
```

---

## 🎉 FINAL STEPS

```bash
# 1. Install & test locally
npm install && npm start

# 2. Build for production
npm run build

# 3. Push to GitHub
git add . && git commit -m "Ready to deploy" && git push

# 4. Deploy to Vercel
# Via web UI: vercel.com

# 5. Test live app
# Visit your live URL
# Done! 🚀
```

---

**Save this file for quick reference!** 📌

Copy any command and paste into your terminal. 💻
