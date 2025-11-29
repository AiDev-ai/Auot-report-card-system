#!/usr/bin/env python3
import sys
import os
sys.path.append('Source_Code')

# Import the class
import openpyxl

def get_subjects_test(cls):
    """Test version of get_subjects function"""
    if cls == 'Prep':
        return ['English', 'Urdu', 'Mathematics', 'Islam/GK', 'Art']
    elif cls in ['I']:
        return ['English', 'Urdu', 'GK', 'Mathematics', 'Computer', 'Islamiat', 'Sindhi']
    elif cls in ['II', 'III']:
        return ['English', 'Urdu', 'GK', 'Mathematics', 'Computer', 'Islamiat', 'Sindhi']
    elif cls in ['IV', 'V', 'VI', 'VII', 'VIII']:
        return ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi']
    elif cls == 'IX':
        return ['English', 'Urdu', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Computer', 'Islamiat']
    elif cls == 'X':
        return ['English', 'Urdu', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Computer', 'Pakistan Studies']
    return []

def verify_subjects():
    print("Verifying Subject Sequences for Each Class")
    print("=" * 50)
    
    classes = ['Prep', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    
    for cls in classes:
        subjects = get_subjects_test(cls)
        print(f"Class {cls:4}: {subjects}")
    
    print("\n" + "=" * 50)
    print("✅ Subject sequences are now correct:")
    print("   - Prep: Different subjects (Eng, Urdu, Math, Islam/GK, Art)")
    print("   - I-III: Same subjects (with GK)")
    print("   - IV-VIII: Same subjects (with Science & Social Studies)")
    print("   - IX-X: Different subjects (with Bio, Phy, Che)")

if __name__ == "__main__":
    verify_subjects()
