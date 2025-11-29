@echo off
echo Testing Report Card System...
echo.

cd /d "%~dp0"
echo Current directory: %CD%
echo.

echo Checking Python...
python --version
echo.

echo Checking files...
dir *.py
echo.

echo Running application...
cd ..\src
python run_report_card.py

echo.
echo Done. Press any key to close...
pause
