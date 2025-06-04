# Joy's Dinner Reminder - Backend

This is the FastAPI backend for the Joy's Dinner Reminder application. It provides API endpoints to serve personalized reminder information to the frontend.

## Getting Started

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Installation and Running

1. **Clone the repository** (or access the project files)
2. **Navigate to the backend directory**
   ```bash
   cd path/to/backend
   ```
3. **Run the application**
   ```bash
   run.bat
   ```
   This will automatically:
   - Create and activate a virtual environment if one doesn't exist
   - Install required dependencies
   - Start the FastAPI application

4. **Access the API**
   The application will be available at `http://localhost:8000`
   - API documentation will be available at `http://localhost:8000/docs`
   - Reminder info endpoint: `http://localhost:8000/api/reminder_info`
   - Current time endpoint: `http://localhost:8000/api/current_time`

## API Endpoints

### GET /api/reminder_info
Returns personalized reminder information.

**Response:**
```json
{
    "greeting_name": "My Dearest Joy",
    "message": "Don't forget our special dinner by 6 PM!",
    "target_hour": 18,
    "target_minute": 0,
    "sweet_messages": [
        "Thinking of you!",
        "Can't wait to see you!",
        "You make every moment special.",
        "XOXO",
        "Looking forward to our dinner!",
        "Time flies when I'm with you!"
    ]
}
```

### GET /api/current_time
Returns current server time information.

**Response:**
```json
{
    "current_hour": 14,
    "current_minute": 30,
    "current_second": 45,
    "current_date": "2023-10-26"
}
```

## Project Structure
```
backend/
├── main.py             # Main FastAPI application
├── requirements.txt    # Python dependencies
├── run.bat             # Script to run the application
└── README.md           # This file