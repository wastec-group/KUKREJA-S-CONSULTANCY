# Deploy to Netlify - Step by Step Guide

## ✅ Your Setup is Ready!

Your project is already configured for Netlify deployment:
- ✅ Netlify serverless functions are set up
- ✅ Frontend API calls are configured correctly
- ✅ netlify.toml configuration is ready
- ✅ API redirects are configured

## Quick Deployment Steps

### Step 1: Install Netlify CLI (if not already installed)
```powershell
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```powershell
netlify login
```
This will open a browser window for authentication.

### Step 3: Build Your Project
```powershell
npm run build
```

### Step 4: Deploy to Netlify
```powershell
netlify deploy --prod
```

When prompted:
- Select "Create & configure a new site"
- Choose your team
- Enter a site name (or leave blank for random name)
- Set publish directory to: `build`

### Step 5: Set Up MongoDB Atlas (FREE)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (select FREE tier M0)
4. Click "Database Access" → "Add New Database User"
   - Username: `kukrejaadmin`
   - Password: Create a strong password (save it!)
5. Click "Network Access" → "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - This is required for Netlify Functions
6. Click "Connect" → "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://kukrejaadmin:<password>@cluster0.xxxxx.mongodb.net/kukreja-consultancy?retryWrites=true&w=majority`
   - Replace `<password>` with your actual password

### Step 6: Set Environment Variables in Netlify
```powershell
netlify env:set MONGODB_URI "your-mongodb-connection-string-here"
```

Or set it in the Netlify dashboard:
1. Go to your site in Netlify dashboard
2. Site settings → Environment variables
3. Add variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string

### Step 7: Redeploy (after setting env variables)
```powershell
netlify deploy --prod
```

## Alternative: Deploy via Git (Recommended for Auto-Deploy)

### Step 1: Initialize Git (if not done)
```powershell
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub
```powershell
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/kukreja-consultancy.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `build`
   - Functions directory: `netlify/functions`
5. Add environment variable `MONGODB_URI`
6. Click "Deploy site"

## Testing Your Deployed Site

After deployment, test:
1. ✅ Visit your Netlify URL
2. ✅ Navigate through pages
3. ✅ Submit a contact form
4. ✅ Submit a loan inquiry
5. ✅ Check Netlify Functions logs for any errors

## Troubleshooting

### Build Fails
```powershell
# Test build locally first
npm run build
```

### Functions Not Working
- Check Netlify Functions logs in dashboard
- Verify MONGODB_URI is set correctly
- Ensure MongoDB Atlas allows all IPs (0.0.0.0/0)

### CORS Errors
- Already configured in serverless functions
- Clear browser cache and try again

## Your Site URLs After Deployment

- Frontend: `https://your-site-name.netlify.app`
- Contact API: `https://your-site-name.netlify.app/api/contacts`
- Loan Inquiry API: `https://your-site-name.netlify.app/api/loan-inquiries`

## Next Steps After Deployment

1. **Custom Domain** (Optional)
   - Buy a domain from GoDaddy, Namecheap, etc.
   - Add it in Netlify: Site settings → Domain management
   
2. **Set up Forms Notification**
   - Configure Netlify Forms notifications
   - Or set up email notifications in your serverless functions

3. **Monitor Usage**
   - Check Netlify dashboard for function calls
   - Free tier: 125K requests/month

## Important Notes

- ✅ Free Netlify tier includes hosting + 125K serverless function requests/month
- ✅ Free MongoDB Atlas tier includes 512 MB storage
- ✅ Your local server code (server/server.js) is NOT needed on Netlify
- ✅ Netlify Functions replace your Express backend
- ✅ Auto-deploy: Every git push to main branch auto-deploys (if using Git method)

## Need Help?

- Netlify Docs: https://docs.netlify.com
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- Check NETLIFY_DEPLOYMENT.md for detailed information
