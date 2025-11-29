@echo off
title Report Card System
color 0A
echo ========================================
echo    REPORT CARD SYSTEM - AUTO SETUP
echo ========================================
echo.

cd /d "%~dp0\.."

REM Check if Python is installed
echo Checking Python installation...
python --version 2>nul
if errorlevel 1 (
    echo.
    echo Python not found on this computer.
    echo Please install Python from: https://python.org
    echo.
    pause
    exit /b 1
)

echo Python found successfully!
echo.

REM Check if virtual environment already exists
if exist "venv\Scripts\activate.bat" (
    echo Using existing virtual environment...
    call venv\Scripts\activate.bat
    goto :check_requirements
)

if exist "venv_win\Scripts\activate.bat" (
    echo Using existing Windows virtual environment...
    call venv_win\Scripts\activate.bat
    goto :check_requirements
)

REM Create new virtual environment
echo Creating virtual environment...
python -m venv venv
if errorlevel 1 (
    echo Failed to create virtual environment!
    pause
    exit /b 1
)

call venv\Scripts\activate.bat

:check_requirements
REM Check and install requirements
if exist "config\requirements.txt" (
    echo Checking if packages are installed...
    pip show openpyxl >nul 2>&1
    if errorlevel 1 (
        echo Installing required packages...
        pip install -r config\requirements.txt
    ) else (
        echo Required packages already installed.
    )
) else (
    echo No requirements.txt found, continuing...
)

REM Run the application
echo.
echo ========================================
echo Starting Report Card System...
echo ========================================
echo.

cd src
python run_report_card.py

echo.
echo ========================================
echo Application finished.
echo ========================================
pause
