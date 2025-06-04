@echo off
REM Activate virtual environment
setlocal

if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
) else (
    echo Virtual environment not found. Creating one...
    python -m venv venv
    call venv\Scripts\activate.bat
)

REM Install dependencies
pip install -r requirements.txt

REM Run the FastAPI application
python main.py