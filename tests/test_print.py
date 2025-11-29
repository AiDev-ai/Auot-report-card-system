#!/usr/bin/env python3
import subprocess
import os
import re

# Test print functionality
def test_print():
    print("Testing print functionality...")
    
    # Create test HTML
    html_content = """
    <!DOCTYPE html>
    <html>
    <head><title>Test Report Card</title></head>
    <body>
        <h1>Test Report Card</h1>
        <p>This is a test report card to verify printing works.</p>
        <button onclick="window.print()">Print</button>
    </body>
    </html>
    """
    
    # Clean filename
    test_id = "AAH001"
    clean_id = re.sub(r'[^\w\-_]', '_', test_id)
    
    # Create in Windows accessible location
    windows_temp_dir = "/mnt/c/Users/Admin/Documents/temp"
    os.makedirs(windows_temp_dir, exist_ok=True)
    
    temp_file = os.path.join(windows_temp_dir, f"test_report_{clean_id}.html")
    
    # Write file
    with open(temp_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"Created test file: {temp_file}")
    
    # Try to open in browser
    try:
        windows_path = temp_file.replace('/mnt/c/', 'C:\\').replace('/', '\\')
        print(f"Opening: {windows_path}")
        
        # Use rundll32 to open with default browser
        result = subprocess.run(['rundll32.exe', 'url.dll,FileProtocolHandler', windows_path], 
                              capture_output=True, text=True, timeout=5)
        
        if result.returncode == 0:
            print("✅ Successfully opened in browser!")
        else:
            print(f"❌ Failed to open: {result.stderr}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print(f"File saved at: {temp_file}")
    print("You can manually open this file to test.")

if __name__ == "__main__":
    test_print()
