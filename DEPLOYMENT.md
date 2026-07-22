# 🚀 Vercel Deployment Guide - NovaRays

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New Repository**
3. Name it: `novarays-solar`
4. Description: `Premium solar energy solutions website`
5. Choose **Public** (for free hosting)
6. Click **Create Repository**

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/novarays-solar.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Note:** You'll be asked to authenticate. Use:
- **Username**: Your GitHub username
- **Password**: Create a Personal Access Token (Settings → Developer Settings → Personal access tokens)

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Quickest)

```bash
npm i -g vercel
vercel
```

Follow the prompts:
- Link to GitHub account
- Select the `novarays-solar` repository
- Choose framework: **Next.js**
- Accept default settings
- Done! ✅

#### Option B: Using Vercel Web UI

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel
4. Click **Import Project**
5. Select `novarays-solar` repository
6. Click **Import**
7. Vercel auto-detects Next.js settings
8. Click **Deploy** ✅

### Step 4: Get Your Live URL

After deployment, you'll see your live URL:
```
✓ Deployed to https://novarays-solar.vercel.app
```

**Share this URL with your client!**

## Environment Variables (Optional)

If you need environment variables later:

1. Go to Vercel dashboard
2. Select your project
3. Settings → Environment Variables
4. Add as needed (e.g., email service keys)

## Custom Domain (Optional)

To add a custom domain later (e.g. `novarays-solar.com` or `novarays-solar.in`):

1. Dashboard → Settings → Domains
2. Enter your domain name
3. Follow DNS configuration steps
4. Done! 🎉

## Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Update website"
git push origin main
```

✅ Vercel automatically deploys the changes!

## Troubleshooting

**Build failed?**
- Check: `npm run build` locally
- Review Vercel build logs in dashboard

**Need to rollback?**
- Vercel dashboard → Deployments → Select previous version → Promote to Production

## Performance Monitoring

After deployment:
1. Go to Vercel dashboard
2. Select your project
3. Analytics tab to see:
   - Traffic metrics
   - Page load times
   - Error rates

## Client Preview Links

Share deployments with client before going live:
1. Every commit creates a preview URL
2. Share preview URL: `https://novarays-solar-git-YOUR_BRANCH.vercel.app`
3. Client can test changes before production

---

**Your website is now live and accessible worldwide! 🌍**
