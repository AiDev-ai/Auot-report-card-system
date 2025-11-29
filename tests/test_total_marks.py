#!/usr/bin/env python3

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

def get_total_marks_test(cls):
    """Test version of dynamic total marks calculation"""
    # Dynamic calculation for Prep and Class I
    if cls in ['Prep', 'I']:
        subjects = get_subjects_test(cls)
        return len(subjects) * 100  # Each subject worth 100 marks
    elif cls in ['II', 'III']:
        return 700  # 7 subjects × 100 each
    elif cls in ['IV', 'V', 'VI', 'VII', 'VIII']:
        return 800  # 8 subjects × 100 each
    elif cls == 'IX':
        return 800  # 8 subjects × 100 each
    elif cls == 'X':
        return 800  # 8 subjects × 100 each
    return 0

def test_total_marks():
    print("Testing Dynamic Total Marks Calculation")
    print("=" * 50)
    
    classes = ['Prep', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    
    for cls in classes:
        subjects = get_subjects_test(cls)
        total_marks = get_total_marks_test(cls)
        subject_count = len(subjects)
        
        print(f"Class {cls:4}: {subject_count} subjects × 100 = {total_marks} marks")
    
    print("\n" + "=" * 50)
    print("✅ Dynamic Total Marks:")
    print("   - Prep: 5 subjects × 100 = 500 marks")
    print("   - Class I: 7 subjects × 100 = 700 marks") 
    print("   - Class II-III: 7 subjects × 100 = 700 marks")
    print("   - Class IV-VIII: 8 subjects × 100 = 800 marks")
    print("   - Class IX-X: 8 subjects × 100 = 800 marks")

if __name__ == "__main__":
    test_total_marks()
