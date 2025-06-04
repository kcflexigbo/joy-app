from fastapi import FastAPI
import uvicorn
from datetime import datetime
import random

app = FastAPI()

# Personalized information for Joy
GREETING_NAME = "Hey Joy..."
REMINDER_MESSAGE = "Don't forget our dinner by 6 PM!"
TARGET_HOUR = 18  # 6 PM in 24-hour format
TARGET_MINUTE = 0

# Optional sweet nothing messages for FR_FUN2
SWEET_MESSAGES = [
    "Stop reading in the library sha",
    "Stop eating watermelon in the library",
    "You still have the remaining day to read",
    "Don't be an Amaka...",
    "Writing code..........",
    "Tricia is a goat.............."
]

@app.get("/api/reminder_info")
async def get_reminder_info():
    """API endpoint to get personalized reminder information."""
    return {
        "greeting_name": GREETING_NAME,
        "message": REMINDER_MESSAGE,
        "target_hour": TARGET_HOUR,
        "target_minute": TARGET_MINUTE,
        "sweet_messages": SWEET_MESSAGES
    }

@app.get("/api/current_time")
async def get_current_time():
    """API endpoint to get current server time (for advanced accuracy)."""
    current_time = datetime.now()
    return {
        "current_hour": current_time.hour,
        "current_minute": current_time.minute,
        "current_second": current_time.second,
        "current_date": current_time.strftime("%Y-%m-%d")
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)