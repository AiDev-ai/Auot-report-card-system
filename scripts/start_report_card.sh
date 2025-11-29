#!/bin/bash

echo "========================================"
echo "   REPORT CARD SYSTEM - AUTO SETUP"
echo "========================================"
echo

# Function to install Python on different systems
install_python() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        echo "Installing Python on macOS..."
        if command -v brew &> /dev/null; then
            brew install python3
        else
            echo "Installing Homebrew first..."
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            brew install python3
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        echo "Installing Python on Linux..."
        if command -v apt-get &> /dev/null; then
            sudo apt-get update
            sudo apt-get install -y python3 python3-pip python3-venv
        elif command -v yum &> /dev/null; then
            sudo yum install -y python3 python3-pip
        elif command -v dnf &> /dev/null; then
            sudo dnf install -y python3 python3-pip
        fi
    fi
}

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Python3 not found. Installing automatically..."
    install_python
    
    # Check again after installation
    if ! command -v python3 &> /dev/null; then
        echo "ERROR: Failed to install Python3!"
        echo "Please install Python3 manually."
        read -p "Press Enter to exit..."
        exit 1
    fi
fi

echo "Python is available."

# Check if virtual environment already exists
if [ -f "venv/bin/activate" ]; then
    echo "Found existing environment. Using it..."
else
    echo "Creating new virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "Activating environment..."
source venv/bin/activate

# Check if packages are already installed
if pip show openpyxl &> /dev/null; then
    echo "Packages already installed."
else
    echo "Installing required packages..."
    pip install -q -r requirements.txt
fi

# Run the application
echo
echo "Starting Report Card System..."
echo
python3 run_report_card.py

echo
echo "Application closed. Press Enter to exit..."
read
