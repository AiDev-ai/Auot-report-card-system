#!/usr/bin/env python3
import sys
import os
sys.path.append('Source_Code')

from report_card_fixed_totals import ReportCardFixedTotals
import tkinter as tk

def test_shayan_marks():
    print("Testing Shayan's Marks in System")
    print("=" * 40)
    
    # Create a temporary root for testing
    root = tk.Tk()
    root.withdraw()  # Hide the window
    
    try:
        # Create the system instance
        system = ReportCardFixedTotals(root)
        
        # Find Shayan in the students
        shayan_id = None
        for student_id in system.students:
            if 'Shayan' in system.students[student_id]['name'] and system.students[student_id]['class'] == 'I':
                shayan_id = student_id
                break
        
        if shayan_id:
            student = system.students[shayan_id]
            print(f"✅ Found: {shayan_id} - {student['name']} (Class {student['class']})")
            print(f"📊 Mid Term Marks: {student['mid_marks']}")
            print(f"📊 Final Term Marks: {student['final_marks']}")
            print(f"📊 Number of Subjects: {len(student['mid_marks'])}")
            
            # Test if marks are valid
            valid_marks = 0
            for i, (mid, final) in enumerate(zip(student['mid_marks'], student['final_marks'])):
                if isinstance(mid, (int, float)) and mid > 0:
                    valid_marks += 1
                    print(f"Subject {i+1}: Mid={mid}, Final={final}")
                elif isinstance(mid, str) and mid in ['A+', 'A', 'B', 'C', 'D', 'E', 'F']:
                    valid_marks += 1
                    print(f"Subject {i+1}: Mid={mid} (Grade), Final={final}")
            
            print(f"✅ Valid marks found: {valid_marks} subjects")
            
            if valid_marks > 0:
                print("✅ Shayan's data is properly loaded and ready for report generation!")
            else:
                print("❌ No valid marks found - there might be an issue with data processing")
                
        else:
            print("❌ Shayan not found in the system")
            print("Available Class I students:")
            for student_id in system.students:
                if system.students[student_id]['class'] == 'I':
                    print(f"  - {student_id}: {system.students[student_id]['name']}")
    
    except Exception as e:
        print(f"❌ Error: {e}")
    
    finally:
        root.destroy()

if __name__ == "__main__":
    test_shayan_marks()
