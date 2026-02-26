# 🚀 Render Deployment Guide - Kukreja Consultancy

## ✅ Your App is Ready for Render!

Render offers FREE hosting for both frontend and backend with:
- ✅ Free web services (backend API)
- ✅ Free static sites (frontend)  
- ✅ Automatic HTTPS
- ✅ Auto-deploy from GitHub
- ✅ MongoDB Atlas integration

---

## 📋 Quick Deployment (10 Minutes)

### Prerequisites
- ✅ GitHub account
- ✅ MongoDB Atlas account (you already have this!)
- ✅ Code pushed to GitHub

---

## 🎯 STEP 1: Deploy Backend API

### 1.1 Create Render Account
1. Go to https://render.com
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with GitHub (easiest)

### 1.2 Create Backend Web Service
1. In Render Dashboard, click **"New +"**
2. Select **"Web Service"**
3. Click **"Connect account"** to connect GitHub
4. Select repository: **wastec-group/KUKREJA-S-CONSULTANCY**
5. Click **"Connect"**

### 1.3 Configure Backend Service
Fill in these settings:

**Basic Settings:**
- **Name**: `kukreja-consultancy-api`
- **Region**: Select closest to you (e.g., Singapore, Oregon)
- **Branch**: `main`
- **Root Directory**: Leave empty
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server/server.js`

**Plan:**
- Select: **Free** (0 USD/month)

**Environment Variables:**
Click **"Add Environment Variable"** and add:

1. **Key**: `MONGODB_URI`  
   **Value**: `mongodb+srv://kukrejaadmin:c8dxyCooae17TU28@kukrejacluster.c2ejbdr.mongodb.net/kukreja-consultancy?retryWrites=true&w=majority`

2. **Key**: `NODE_VERSION`  
   **Value**: `18`

3. **Key**: `PORT`  
   **Value**: `5000`

### 1.4 Deploy Backend
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for initial deployment
3. Your backend will be live at: `https://kukreja-consultancy-api.onrender.com`
4. Test it: Visit `https://kukreja-consultancy-api.onrender.com/api/health`

---

## 🎨 STEP 2: Deploy Frontend

### 2.1 Update Frontend API Configuration

**IMPORTANT**: Update the frontend to point to your Render backend URL.

Open `.env` file and add:
```
REACT_APP_API_URL=https://kukreja-consultancy-api.onrender.com/api
```

Or create `.env.production`:
```
REACT_APP_API_URL=https://kukreja-consultancy-api.onrender.com/api
```

### 2.2 Push Changes to GitHub
```powershell
cd C:\Users\HP\Desktop\Rohit\purva\KukrejaConsaltancy
git add .
git commit -m "Configure for Render deployment"
git push origin main
```

### 2.3 Create Frontend Static Site
1. In Render Dashboard, click **"New +"**
2. Select **"Static Site"**
3. Select repository: **wastec-group/KUKREJA-S-CONSULTANCY**
4. Click **"Connect"**

### 2.4 Configure Frontend Service
Fill in these settings:

**Basic Settings:**
- **Name**: `kukreja-consultancy`
- **Branch**: `main`
- **Root Directory**: Leave empty
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`

**Plan:**
- Select: **Free** (0 USD/month)

### 2.5 Deploy Frontend
1. Click **"Create Static Site"**
2. Wait 3-5 minutes for build and deployment
3. Your site will be live at: `https://kukreja-consultancy.onrender.com`

---

## 🔗 STEP 3: Connect Frontend to Backend

Since you deployed separately, you need to configure CORS and API URL.

### Option A: Update Environment Variable in Frontend

In Render Dashboard → Frontend Static Site → Environment:
- Add: `REACT_APP_API_URL` = `https://kukreja-consultancy-api.onrender.com/api`
- Manually trigger redeploy

### Option B: Update Frontend Code (Better)

Update both Contact.js and LoanInquiry.js:

```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'https://kukreja-consultancy-api.onrender.com/api';
```

Then rebuild and redeploy.

---

## ✅ ALTERNATIVE: One-Command Deployment (Blueprint)

Use the included `render.yaml` file for automatic deployment:

1. In Render Dashboard, click **"New +"**
2. Select **"Blueprint"**
3. Select repository: **wastec-group/KUKREJA-S-CONSULTANCY**
4. Render will detect `render.yaml` and deploy both services automatically!
5. Add environment variable `MONGODB_URI` to the backend service

---

## 🧪 Testing Your Deployment

### Test Backend:
1. Visit: `https://kukreja-consultancy-api.onrender.com/api/health`
2. Should see: `{"success":true,"message":"Server is running"}`

### Test Frontend:
1. Visit: `https://kukreja-consultancy.onrender.com`
2. Navigate through all pages
3. Submit contact form
4. Submit loan inquiry form
5. Check MongoDB Atlas for submissions

---

## 📊 Verify in MongoDB Atlas

1. Go to https://cloud.mongodb.com
2. Click **"Browse Collections"**
3. Database: `kukreja-consultancy`
4. Collections:
   - `contacts` - Should have your contact form submissions
   - `loaninquiries` - Should have loan inquiry submissions

---

## ⚙️ Render Free Tier Limits

**Backend (Web Service):**
- ✅ 512 MB RAM
- ✅ 0.1 CPU
- ✅ Auto-sleep after 15 min of inactivity (wakes up on request)
- ✅ 750 hours/month runtime

**Frontend (Static Site):**
- ✅ 100 GB bandwidth/month
- ✅ Always on (no sleep)
- ✅ Unlimited builds

**MongoDB Atlas:**
- ✅ 512 MB storage
- ✅ Always on

---

## 🔄 Auto-Deploy

Both services will auto-deploy when you push to GitHub:
```powershell
git add .
git commit -m "Update website"
git push origin main
```
Render will automatically rebuild and redeploy!

---

## 🎨 Custom Domain (Optional)

**For Frontend:**
1. Go to your static site in Render
2. Click **"Settings"** → **"Custom Domain"**
3. Add your domain
4. Update DNS records at your domain provider
5. HTTPS automatic!

**For Backend:**
1. Usually not needed (use the .onrender.com URL)
2. Can add if you want: Settings → Custom Domain

---

## 🐛 Troubleshooting

### Backend Shows "Build Failed"
- Check build logs in Render dashboard
- Verify `package.json` has all dependencies
- Make sure `MONGODB_URI` is set correctly

### Frontend Shows Errors
- Check if `REACT_APP_API_URL` points to correct backend
- Verify backend is running (visit `/api/health`)
- Check browser console for CORS errors

### Forms Not Working
- Verify backend URL in frontend code
- Check backend logs for errors
- Verify `MONGODB_URI` environment variable is set
- Test backend `/api/health` endpoint

### Backend Sleeping
- Free tier sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- This is normal on free tier
- Upgrade to paid tier ($7/month) to prevent sleeping

---

## 💡 Pro Tips

1. **Keep Backend Awake** (Free):
   - Use a service like UptimeRobot.com
   - Ping your `/api/health` endpoint every 10 minutes
   - Prevents free tier from sleeping

2. **Environment Variables**:
   - Never commit `.env` to GitHub
   - Always add sensitive data in Render dashboard

3. **Logs**:
   - Check Render logs if something fails
   - Logs are in real-time in the dashboard

4. **Database**:
   - MongoDB Atlas is already configured
   - No changes needed from Netlify setup

---

## 📝 Your URLs After Deployment

**Backend API:**
```
https://kukreja-consultancy-api.onrender.com
```

**Frontend Website:**
```
https://kukreja-consultancy.onrender.com
```

**API Endpoints:**
```
https://kukreja-consultancy-api.onrender.com/api/health
https://kukreja-consultancy-api.onrender.com/api/contacts
https://kukreja-consultancy-api.onrender.com/api/loan-inquiries
```

---

## 🚀 Ready to Deploy?

### Quick Start Commands:

```powershell
# 1. Update frontend API URL
cd C:\Users\HP\Desktop\Rohit\purva\KukrejaConsaltancy

# Create production env file
echo REACT_APP_API_URL=https://kukreja-consultancy-api.onrender.com/api > .env.production

# 2. Commit and push
git add .
git commit -m "Configure for Render deployment"
git push origin main

# 3. Go to Render and create services!
```

Then follow Steps 1 and 2 above!

---

## 💰 Cost Comparison

| Service | Netlify | Render |
|---------|---------|--------|
| Backend | Functions: 125K/mo | Web Service: Free (sleeps) |
| Frontend | 100 GB bandwidth | 100 GB bandwidth |
| Database | External | External (Atlas) |
| Custom Domain | ✅ Free | ✅ Free |
| HTTPS | ✅ Free | ✅ Free |
| **Cost** | $0 | $0 |

Both are free! Render is better for traditional backends.

---

## 📞 Support

- Render Docs: https://render.com/docs
- Render Community: https://community.render.com
- MongoDB Atlas: https://docs.atlas.mongodb.com

---

## 🎉 That's It!

Your site will be live in about 10 minutes following this guide.

**Advantages of Render:**
- ✅ Traditional backend (not serverless)
- ✅ Real-time logs
- ✅ Easy to debug
- ✅ Automatic HTTPS
- ✅ Auto-deploy from GitHub
- ✅ Free tier is generous

Good luck! 🚀
