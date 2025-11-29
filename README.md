# Report Card System

A comprehensive report card generation system for educational institutions.

## Project Structure

```
Report_Card_System/
├── src/                    # Source code
│   ├── report_card_fixed_totals.py  # Main application
│   └── run_report_card.py           # Runner script
├── docs/                   # Documentation
│   ├── README.md
│   ├── HOW_TO_RUN.txt
│   └── *.md files         # Various documentation
├── data/                   # Excel data files
│   └── Exams/             # Exam data
├── output/                 # Generated report cards
├── assets/                 # Images and resources
│   └── Aghos logo.png
├── tests/                  # Test and verification scripts
│   ├── test_*.py
│   ├── verify_*.py
│   └── *.json            # Verification data
├── scripts/                # Utility scripts
│   ├── *.bat             # Windows batch files
│   ├── *.sh              # Shell scripts
│   └── fix_*.py          # Fix utilities
├── config/                 # Configuration files
│   ├── requirements.txt
│   └── HOW_TO_RUN.txt
└── web_version/           # Web interface
    ├── index.html
    ├── script.js
    └── styles.css
```

## Quick Start

1. Navigate to the `config/` folder and install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the main application:
   ```bash
   cd src/
   python run_report_card.py
   ```

3. For web version:
   ```bash
   cd web_version/
   python start_web_app.py
   ```

## Features

- Automated report card generation from Excel data
- Web-based interface
- Multiple verification and testing utilities
- Cross-platform support (Windows/Linux)
- Comprehensive documentation

## Documentation

All documentation is available in the `docs/` folder, including:
- Complete working mechanism
- Executive summaries
- Presentation materials
- Technical specifications

## Testing

Test scripts are located in the `tests/` folder for verification and debugging.
