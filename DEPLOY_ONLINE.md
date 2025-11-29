# 🌐 Deploy Your Report Card System Online (FREE)

## Step 1: Prepare Files
✅ Files are ready in your project:
- `streamlit_app.py` - Web application
- `requirements_streamlit.txt` - Dependencies
- `data/Exams/` - Excel files

## Step 2: Upload to GitHub
1. **Create GitHub Account:** https://github.com
2. **Create New Repository:**
   - Click "New repository"
   - Name: `report-card-system`
   - Make it Public
   - Click "Create repository"

3. **Upload Files:**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `streamlit_app.py`
     - `requirements_streamlit.txt`
     - `data/Exams/Mid Term.xlsx`
     - `data/Exams/Final Term.xlsx`

## Step 3: Deploy on Streamlit Cloud (FREE)
1. **Go to:** https://share.streamlit.io
2. **Sign in** with your GitHub account
3. **Click "New app"**
4. **Select your repository:** `report-card-system`
5. **Main file path:** `streamlit_app.py`
6. **Click "Deploy!"**

## Step 4: Your App is Live! 🎉
- You'll get a URL like: `https://your-app.streamlit.app`
- Share this URL with anyone
- They can access it from any device

## Alternative: Render.com (FREE)
1. **Go to:** https://render.com
2. **Sign up** with GitHub
3. **New Web Service**
4. **Connect repository**
5. **Settings:**
   - Build Command: `pip install -r requirements_streamlit.txt`
   - Start Command: `streamlit run streamlit_app.py --server.port=$PORT --server.address=0.0.0.0`

## Features of Your Online App:
- ✅ **Mobile Friendly** - Works on phones/tablets
- ✅ **Real-time Access** - Anyone can use it
- ✅ **No Installation** - Just open in browser
- ✅ **Download Reports** - Generate and download HTML reports
- ✅ **Search Students** - Filter by class and name
- ✅ **Professional Design** - Clean, modern interface

## Local Testing (Optional):
```bash
# Run locally first to test
deploy.bat
```

Your Report Card System will be accessible worldwide! 🌍
