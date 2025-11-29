#!/usr/bin/env python3
"""
Web Report Card System Launcher
===============================
Simple launcher to start the web-based report card system
"""

import http.server
import socketserver
import webbrowser
import os
import sys

def start_server():
    # Change to the web version directory
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    PORT = 8080
    
    class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            super().end_headers()
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print("=" * 60)
            print("WEB-BASED REPORT CARD SYSTEM")
            print("=" * 60)
            print(f"Server starting at: http://localhost:{PORT}")
            print()
            print("Features:")
            print("✓ Easy-to-use web interface")
            print("✓ Load Excel data files")
            print("✓ Search and filter students")
            print("✓ Edit teacher remarks")
            print("✓ Print/Export report cards")
            print("✓ Works on any device with browser")
            print()
            print("Instructions:")
            print("1. Browser will open automatically")
            print("2. Click 'Load Excel Data' to import student data")
            print("3. Select students from the left panel")
            print("4. View/edit report cards on the right")
            print("5. Use 'Export Report Card' to print")
            print()
            print("Press Ctrl+C to stop the server")
            print("=" * 60)
            
            # Open browser automatically
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Start server
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nServer stopped. Thank you for using Report Card System!")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"Port {PORT} is already in use. Trying port {PORT + 1}...")
            PORT += 1
            start_server()
        else:
            print(f"Error starting server: {e}")

if __name__ == "__main__":
    start_server()
