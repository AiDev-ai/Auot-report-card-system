#!/usr/bin/env python3

def fix_html_templates():
    print("Fixing HTML template variable references...")
    
    # Read the file
    with open("Source_Code/report_card_fixed_totals.py", "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace teacher_remarks with combined_remarks in HTML templates only
    # This is safer than using str_replace with multiple occurrences
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        if '{teacher_remarks}' in line and 'Teacher\'s Remarks' in lines[i-1]:
            lines[i] = line.replace('{teacher_remarks}', '{combined_remarks}')
            print(f"Fixed line {i+1}: {line.strip()}")
    
    # Write back the file
    with open("Source_Code/report_card_fixed_totals.py", "w", encoding="utf-8") as f:
        f.write('\n'.join(lines))
    
    print("✅ HTML templates fixed!")

if __name__ == "__main__":
    fix_html_templates()
