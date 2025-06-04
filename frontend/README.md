# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Joy's Dinner Reminder

A simple, friendly, and slightly romantic webpage for Joy that reminds her about dinner at 6 PM with a live countdown and some charming touches.

## Overview

This React application serves as a reminder for Joy about dinner at 6 PM. It displays:
- A personalized greeting
- A warm reminder message
- A real-time countdown timer to 6:00 PM
- A celebration animation when it's time for dinner
- Rotating sweet nothing messages

The application fetches personalized information from a FastAPI backend, including the greeting, reminder message, and target time.

## Features

### Personalized Greeting
Displays an affectionate greeting for Joy with a warm message about the upcoming dinner.

### Countdown Timer
Shows a real-time countdown to 6:00 PM using local time, updating every second with remaining time in HH:MM:SS format.

### Celebration at Dinner Time
When the countdown reaches zero, the timer changes to a celebratory message with a gentle confetti animation.

### Sweet Nothing Messages
Features rotating short, sweet messages in the footer that change periodically, adding to the romantic atmosphere.

### Romantic Design
Uses soft color gradients and tasteful animations to create a charming user experience without being overwhelming.

## Getting Started

### Prerequisites
- Node.js and npm installed
- Backend FastAPI server running

### Installation

1. **Clone the repository** (or access the project files)
2. **Navigate to the frontend directory**
   ```bash
   cd path/to/frontend
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure
```
frontend/
├── index.html              # Main HTML file
├── src/
│   ├── App.tsx             # Main React component
│   ├── App.css             # Styles for the App component
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point for the React application
├── README.md               # This file
└── other configuration files
```