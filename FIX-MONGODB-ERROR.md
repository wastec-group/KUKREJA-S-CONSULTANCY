# 🔴 CRITICAL: Add MongoDB Environment Variable to Netlify

## ❌ Current Error
```
The uri parameter to openUri() must be a string, got "undefined"
```

This error means **MONGODB_URI is not set in Netlify**.

---

## ✅ FIX: Add Environment Variable in Netlify

### Step-by-Step Instructions:

1. **Go to your Netlify site**
   - Visit: https://app.netlify.com
   - Click on your deployed site

2. **Open Site Configuration**
   - Click: **"Site configuration"** (in left menu)
   - Or go directly to: Site settings

3. **Navigate to Environment Variables**
   - Click: **"Environment variables"** (in left menu)
   - Or: Site configuration → Environment variables

4. **Add New Variable**
   - Click: **"Add a variable"** button
   - Select: **"Add a single variable"**

5. **Enter MongoDB URI**
   ```
   Key: MONGODB_URI
   
   Value: mongodb+srv://kukrejaadmin:c8dxyCooae17TU28@kukrejacluster.c2ejbdr.mongodb.net/kukreja-consultancy?retryWrites=true&w=majority
   ```
   
   **IMPORTANT**: Copy the entire connection string above (it's all one line)

6. **Save**
   - Click: **"Create variable"** or **"Save"**

7. **Redeploy Site**
   - Go to: **"Deploys"** tab
   - Click: **"Trigger deploy"**
   - Select: **"Clear cache and deploy site"**
   - Wait for deployment to complete (1-2 minutes)

---

## 📸 Visual Guide

### Where to find Environment Variables:

```
Netlify Dashboard
└── Your Site
    └── Site configuration
        └── Environment variables  ← Click here
            └── Add a variable  ← Click here
```

### What to enter:

```
┌─────────────────────────────────────────────────┐
│ Add environment variable                        │
├─────────────────────────────────────────────────┤
│                                                 │
│ Key *                                           │
│ ┌─────────────────────────────────────────┐    │
│ │ MONGODB_URI                             │    │
│ └─────────────────────────────────────────┘    │
│                                                 │
│ Value *                                         │
│ ┌─────────────────────────────────────────┐    │
│ │ mongodb+srv://kukrejaadmin:c8dxyCo...   │    │
│ └─────────────────────────────────────────┘    │
│                                                 │
│                    [Create variable]            │
└─────────────────────────────────────────────────┘
```

---

## ⚠️ Common Mistakes to Avoid

1. ❌ Don't add quotes around the value
   - Wrong: `"mongodb+srv://..."`
   - Right: `mongodb+srv://...`

2. ❌ Don't add spaces
   - Wrong: `MONGODB_URI = value`
   - Right: `MONGODB_URI` then `value`

3. ❌ Don't forget to redeploy
   - Environment variables only take effect after redeploying

4. ❌ Don't use `REACT_APP_` prefix
   - Wrong: `REACT_APP_MONGODB_URI`
   - Right: `MONGODB_URI`

---

## 🧪 After Adding - Test Your Forms

1. Wait for deployment to complete
2. Visit your Netlify site
3. Try submitting:
   - Contact form
   - Loan inquiry form
4. You should see: **Success message** ✅
5. Check MongoDB Atlas to verify data was saved

---

## 🔍 Verify Environment Variable is Set

After adding the variable:

1. Go to: **Site configuration** → **Environment variables**
2. You should see:
   ```
   MONGODB_URI = mongodb+srv://kukrejaadmin:●●●●●●●●●●
   ```
   (Password will be hidden)

---

## 📊 Check Function Logs

After redeployment, check if it's working:

1. Go to: **Functions** tab in Netlify
2. Click on: `loan-inquiries` or `contacts`
3. Look for logs showing:
   - ✅ `MongoDB Connected to: kukrejacluster.c2ejbdr.mongodb.net`
   - ❌ If you still see errors, check if the URI was entered correctly

---

## 🆘 Still Having Issues?

### Check these:

1. **Is the variable name exactly** `MONGODB_URI`?
   - Must be all caps
   - No spaces
   - No typos

2. **Is the connection string correct?**
   - Check password: `c8dxyCooae17TU28`
   - Check cluster: `kukrejacluster.c2ejbdr.mongodb.net`
   - Check database: `kukreja-consultancy`

3. **Did you redeploy?**
   - Go to Deploys tab
   - Should see "Published" status

4. **Is MongoDB Atlas allowing connections?**
   - Log in to: https://cloud.mongodb.com
   - Check: Network Access → Should allow 0.0.0.0/0

---

## ✅ Success Checklist

Once you've completed the steps above:

- [ ] Environment variable added: `MONGODB_URI`
- [ ] Connection string pasted correctly
- [ ] Site redeployed
- [ ] Forms tested and working
- [ ] Data visible in MongoDB Atlas

---

## 🎯 Quick Copy-Paste

**For Netlify Environment Variable:**

Key:
```
MONGODB_URI
```

Value:
```
mongodb+srv://kukrejaadmin:c8dxyCooae17TU28@kukrejacluster.c2ejbdr.mongodb.net/kukreja-consultancy?retryWrites=true&w=majority
```

---

**After adding this, your forms will work perfectly!** 🎉

Need more help? Check the Netlify documentation: https://docs.netlify.com/environment-variables/overview/
