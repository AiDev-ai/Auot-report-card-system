#!/usr/bin/env python3
"""
Report Card System - Main Launcher
==================================

This is the main entry point for the Report Card System.
It automatically runs the latest version of the report card software.

Author: AI Assistant
Date: November 2024
"""

import sys
import os
import subprocess

def show_logo():
    """Display ASCII logo"""
    logo = """
    ================================================================
    |                                                              |
    |        ALKHIDMAT AGHOSH HALA REPORT CARD SYSTEM              |
    |                                                              |
    |                    Auto Report Generator                     |
    |                                                              |
    ================================================================
    """
    print(logo)

def main():
    show_logo()
    print("=" * 50)
    print("REPORT CARD SYSTEM - LAUNCHER")
    print("=" * 50)
    print()
    
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Find the latest report card file (in same directory)
    latest_file = os.path.join(script_dir, "report_card_fixed_totals.py")
    
    if os.path.exists(latest_file):
        print(f"Starting Report Card System...")
        print(f"Running: {os.path.basename(latest_file)}")
        print()
        print("Features:")
        print("* All 135+ students loaded")
        print("* Class-specific subjects and totals")
        print("* Computer subject as grade only")
        print("* Teacher's remarks (editable)")
        print("* Print/Save functionality")
        print("* Pass/Fail determination")
        print()
        
        # Run the file from current directory
        subprocess.run([sys.executable, "report_card_fixed_totals.py"])
    else:
        print("ERROR: Report card system not found!")
        print(f"Expected file: {latest_file}")
        print()
        print("Please ensure all files are properly organized.")

if __name__ == "__main__":
    main()
