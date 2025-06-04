# Joy's Dinner Reminder Application

A simple, friendly, and slightly romantic webpage for Joy that reminds her about dinner at 6 PM with a live countdown and some charming touches.

## Overview

This application consists of two main components:

1. **Frontend** - A React application with TypeScript that displays the countdown timer and personalized messages
2. **Backend** - A FastAPI (Python) API that provides personalized information to the frontend

The application serves as a reminder for Joy about dinner at 6 PM. It displays:
- A personalized greeting
- A warm reminder message
- A real-time countdown timer to 6:00 PM
- A celebration animation when it's time for dinner
- Rotating sweet nothing messages that change every 5 seconds

## Features

### Personalized Greeting
Displays an affectionate greeting for Joy with a warm message about the upcoming dinner.

### Countdown Timer
Shows a real-time countdown to 6:00 PM using local time, updating every second with remaining time in HH:MM:SS format.

### Celebration at Dinner Time
When the countdown reaches zero, the timer changes to a celebratory message with a gentle confetti animation.

### Sweet Nothing Messages
Features rotating short, sweet messages in the footer that change every 5 seconds, adding to the romantic atmosphere.

### Romantic Design
Uses soft color gradients and tasteful animations to create a charming user experience without being overwhelming.

## Technical Architecture

```
joy-app/
├── README.md                 # This global README file
├── product requirements.md     # Detailed product requirements
├── backend/                  # FastAPI backend application
│   ├── main.py               # Main FastAPI application
│   ├── requirements.txt      # Python dependencies
│   ├── run.bat               # Script to run the application
│   └── README.md             # Backend-specific documentation
└── frontend/                 # React frontend application
    ├── README.md             # Frontend-specific documentation
    ├── index.html            # Main HTML file
    ├── src/
    │   ├── App.tsx           # Main React component
    │   ├── App.css           # Styles for the App component
    │   ├── index.css         # Global styles
    │   └── main.tsx          # Entry point for the React application
    └── public/
        └── heart-icon.svg    # Heart-shaped icon for the application
```

## Getting Started

### Prerequisites
- Python 3.8+ for the backend
- Node.js and npm for the frontend

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/joy-app.git
   cd joy-app
   ```

2. **Run the backend**
   ```bash
   cd backend
   run.bat
   ```
   This will start the FastAPI server on port 8000

3. **Run the frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   This will start the Vite development server

4. **Access the application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure Details

For detailed information about each component, please refer to their respective README.md files:
- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)

## Development Tips

- The backend and frontend can be developed independently
- For production deployment, consider:
  - Packaging the backend as a service
  - Building the frontend with `npm run build`
  - Serving the static files through FastAPI or another web server

## Acknowledgements

This project was created with love! 💖