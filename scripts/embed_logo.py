import base64
import os

def get_logo_base64():
    try:
        logo_path = "Assets/Aghos logo.png"
        with open(logo_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode('utf-8')
    except:
        return None

if __name__ == "__main__":
    logo_b64 = get_logo_base64()
    if logo_b64:
        print("Logo converted to base64 successfully!")
        print(f"Length: {len(logo_b64)} characters")
    else:
        print("Failed to convert logo")
