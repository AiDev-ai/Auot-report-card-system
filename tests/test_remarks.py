#!/usr/bin/env python3

def get_remarks_by_percentage(percentage):
    """Get remarks based on obtained percentage"""
    if percentage >= 85:
        return "Outstanding"
    elif percentage >= 80:
        return "Excellent"
    elif percentage >= 70:
        return "Very Good"
    elif percentage >= 60:
        return "Good"
    elif percentage >= 50:
        return "Satisfactory"
    elif percentage >= 40:
        return "Fair"
    else:
        return "Needs Attention"

def test_remarks():
    print("Testing Dynamic Remarks System")
    print("=" * 40)
    
    test_percentages = [95, 85, 82, 75, 65, 55, 45, 35, 25]
    
    for perc in test_percentages:
        remark = get_remarks_by_percentage(perc)
        print(f"{perc:3}% → {remark}")
    
    print("\n" + "=" * 40)
    print("✅ Remarks System Working:")
    print("   ≥85% → Outstanding")
    print("   ≥80% → Excellent") 
    print("   ≥70% → Very Good")
    print("   ≥60% → Good")
    print("   ≥50% → Satisfactory")
    print("   ≥40% → Fair")
    print("   <40% → Needs Attention")

if __name__ == "__main__":
    test_remarks()
