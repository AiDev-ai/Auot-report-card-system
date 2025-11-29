# Report Card System - Online Deployment

## 🚀 Free Deployment Options

### Option 1: Streamlit Cloud (Recommended)
1. **Upload to GitHub:**
   - Create a GitHub account
   - Upload this project to a new repository
   - Include `streamlit_app.py` and `requirements_streamlit.txt`

2. **Deploy on Streamlit Cloud:**
   - Go to https://share.streamlit.io
   - Connect your GitHub account
   - Select your repository
   - Set main file as `streamlit_app.py`
   - Deploy automatically

### Option 2: Render.com
1. Upload project to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repository
5. Set build command: `pip install -r requirements_streamlit.txt`
6. Set start command: `streamlit run streamlit_app.py --server.port=$PORT`

### Option 3: Railway.app
1. Upload to GitHub
2. Go to https://railway.app
3. Deploy from GitHub
4. Add environment variables if needed

## 📁 Files Needed for Deployment
- `streamlit_app.py` (main web app)
- `requirements_streamlit.txt` (dependencies)
- `data/Exams/Mid Term.xlsx`
- `data/Exams/Final Term.xlsx`

## 🌐 Features
- ✅ Online access from anywhere
- ✅ Mobile-friendly interface
- ✅ Real-time report generation
- ✅ Download report cards as HTML
- ✅ Class-wise filtering
- ✅ Student search

## 🔧 Local Testing
```bash
pip install -r requirements_streamlit.txt
streamlit run streamlit_app.py
```

Your app will be available at: http://localhost:8501
