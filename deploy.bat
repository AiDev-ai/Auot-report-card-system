@echo off
echo ========================================
echo    REPORT CARD SYSTEM - WEB DEPLOYMENT
echo ========================================
echo.

REM Create virtual environment for web app
if not exist "web_venv" (
    echo Creating web virtual environment...
    python -m venv web_venv
)

REM Activate virtual environment
call web_venv\Scripts\activate.bat

REM Install requirements
echo Installing web requirements...
pip install -r requirements_streamlit.txt

REM Start Streamlit app
echo.
echo ========================================
echo Starting Web Application...
echo ========================================
echo.
echo Your Report Card System will open in browser
echo URL: http://localhost:8501
echo.
echo Press Ctrl+C to stop the server
echo.

streamlit run streamlit_app.py

pause
