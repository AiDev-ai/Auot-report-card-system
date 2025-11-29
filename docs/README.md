# Report Card System

A comprehensive Python-based report card generation system for Alkhidmat School.

## 📁 Project Structure

```
Report_Card_System/
├── run_report_card.py          # Main launcher script
├── README.md                   # This file
├── Source_Code/                # Python source files
│   ├── report_card_fixed_totals.py    # Latest working version
│   ├── report_card_working_print.py   # Print-focused version
│   ├── report_card_browser_print.py   # Browser print version
│   └── [other development versions]
├── Excel_Data/                 # Excel data files
│   ├── Exams/
│   │   ├── Mid Term.xlsx       # Mid-term exam data
│   │   └── Final Term.xlsx     # Final-term exam data
│   └── Auto Report Card Generators*.xlsx
├── Assets/                     # Images and resources
│   ├── Aghos logo.png         # School logo
│   └── format.png             # Format reference
├── Output_Files/              # Generated reports
│   ├── *.html                 # HTML report cards
│   └── *.ps                   # PostScript files
└── Documentation/             # Project documentation
    ├── *.txt                  # Setup guides and manuals
    └── [other documentation]
```

## 🚀 Quick Start

### Method 1: Use the Launcher
```bash
python3 run_report_card.py
```

### Method 2: Run Directly
```bash
cd Source_Code
python3 report_card_fixed_totals.py
```

## ✨ Features

- **135+ Students**: Loads all student data from Excel files
- **Class-Specific Subjects**: Different subjects for each class level
- **Correct Total Marks**:
  - Class II-III: 400 marks (4 subjects)
  - Class IV-VIII: 550 marks (6 subjects + Computer grade)
  - Class IX-X: 500 marks (5 subjects + Computer grade)
- **Computer Subject**: Shows grade only (A, B, C) without affecting calculations
- **Teacher's Remarks**: Editable text field for custom remarks
- **Print/Save**: HTML generation with browser printing
- **Pass/Fail**: Automatic determination based on percentage

## 📊 Class Structure

### Class II & III
- English, Urdu, Mathematics, GK
- Total: 400 marks

### Class IV to VIII
- English, Urdu, Science, Mathematics, Computer (grade), Islamiat, Social Studies
- Total: 550 marks (Computer excluded from calculation)

### Class IX & X
- English, Urdu, Physics, Mathematics, Computer (grade), Islamiat
- Total: 500 marks (Computer excluded from calculation)

## 🖨️ Printing

1. Select a student
2. Click "Show Selected"
3. Edit teacher's remarks if needed
4. Click "Print/Save"
5. HTML file opens in browser
6. Use Ctrl+P to print

## 📋 Requirements

- Python 3.x
- tkinter (usually included with Python)
- PIL/Pillow (`pip install Pillow`)
- openpyxl (`pip install openpyxl`)

## 🔧 Installation

1. Ensure Python 3.x is installed
2. Install required packages:
   ```bash
   pip install Pillow openpyxl
   ```
3. Run the launcher:
   ```bash
   python3 run_report_card.py
   ```

## 📝 Usage Instructions

1. **Launch**: Run `python3 run_report_card.py`
2. **Search**: Use the search box to find students
3. **Select**: Double-click a student or use "Show Selected"
4. **Edit**: Modify teacher's remarks as needed
5. **Print**: Click "Print/Save" to generate HTML report
6. **Refresh**: Use "Refresh Data" to load new Excel data

## 🔄 Data Updates

To add new students:
1. Add data to Excel files in `Excel_Data/Exams/`
2. Click "Refresh Data" in the application
3. New students will be automatically loaded

## 📞 Support

For issues or questions about the Report Card System, refer to the documentation in the `Documentation/` folder.

---
**Developed for Alkhidmat School, Mannan & Qazi Campus, Hala**
