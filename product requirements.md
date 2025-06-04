# Product Requirements: Joy's Dinner Reminder (with a touch of love!) - Separated

**Version:** 1.1
**Date:** October 26, 2023
**Author:** [Your Name/Nickname]

## Overall Project Goal
To create a simple, friendly, and slightly romantic webpage for Joy that reminds her about dinner at 6 PM with a live countdown and some charming touches.

## Target Audience
*   **Primary User:** Joy (your friend, and the recipient of your affection!).
*   **Secondary User:** You (the developer and sender of good vibes).

---

## A. Frontend Product Requirements (React Application)

### A.1. Introduction
The frontend is responsible for rendering the user interface that Joy will interact with. It will display all visual elements, handle client-side logic for the countdown, and present the personalized and romantic touches.

### A.2. Functional Requirements (FR-FE)

*   **FR-FE1: Display Personalized Greeting:**
    *   The webpage must display an affectionate greeting for "Joy" (e.g., "Hey Joy,", "Hello My Joy,").
    *   This greeting will ideally be fetched from the backend API (`/api/reminder_info`). If the backend is unavailable or this feature is deferred, a hardcoded fallback can be used.
*   **FR-FE2: Display Endearing Reminder Message:**
    *   The webpage must display a warm reminder message (e.g., "Don't forget **our special** dinner by 6 PM!").
    *   This message will ideally be fetched from the backend API (`/api/reminder_info`). If the backend is unavailable or this feature is deferred, a hardcoded fallback can be used.
*   **FR-FE3: Implement and Display Countdown Timer:**
    *   The webpage must display a countdown timer targeting 6:00 PM of the current day (user's local time).
    *   The timer logic (calculating remaining time) will be implemented in JavaScript on the client-side.
    *   The timer should display remaining time in a clear format (e.g., HH:MM:SS or "X hours, Y minutes, Z seconds").
    *   The timer display must update every second.
*   **FR-FE4: Handle Countdown Completion & Celebration:**
    *   When the countdown reaches 00:00:00 (i.e., it's 6:00 PM or later based on client's clock):
        *   The timer display must change to a celebratory message (e.g., "It's 6 PM! Dinner time, my dear Joy!").
        *   **FR-FE4.1: Implement Completion Animation:** A small, tasteful animation (e.g., gentle confetti, a few floating hearts via CSS or a lightweight library) should play briefly when the timer hits zero.
*   **FR-FE5: Implement Single Page Application Structure:**
    *   The entire user experience must be contained within a single HTML page, managed by React, without traditional page reloads.
*   **FR-FE6: Implement Subtle Romantic Ambiance:**
    *   The page styling should create a subtle, aesthetically pleasing romantic mood.
    *   This can be achieved through a soft color gradient background, a non-distracting pattern (e.g., tiny hearts, soft bokeh), or tasteful font choices.
*   **FR-FE7: (Optional) Display Rotating Sweet Nothings:**
    *   If implemented, display a short, sweet message in an unobtrusive area.
    *   These messages will be fetched from a list provided by the backend API (`/api/reminder_info`).
    *   The message could change periodically (e.g., every 30 seconds) or be selected randomly on page load.
*   **FR-FE8: API Data Consumption:**
    *   The frontend must be able to make HTTP GET requests to the backend API endpoints (e.g., `/api/reminder_info`).
    *   It must parse the JSON response and use the data to populate relevant UI elements (greeting, message, sweet nothings).
    *   Gracefully handle API errors or unavailability (e.g., display default/hardcoded content).

### A.3. Non-Functional Requirements (NFR-FE)

*   **NFR-FE1: Usability & Aesthetics:**
    *   The interface must be intuitive, clean, charming, and heartwarming.
    *   Text must be legible and presented appealingly.
    *   Romantic elements should be tasteful.
*   **NFR-FE2: Performance:**
    *   The page must load quickly (< 3 seconds on a decent connection).
    *   The countdown timer and any animations must run smoothly without noticeable lag or high client-side CPU usage.
*   **NFR-FE3: Responsiveness (Basic):**
    *   The page should be reasonably viewable on common desktop screen sizes. Full mobile responsiveness is a plus but not critical for v1.1.
*   **NFR-FE4: Browser Compatibility:**
    *   Must function correctly on the latest versions of major browsers (Chrome, Firefox, Safari, Edge).
*   **NFR-FE5: Maintainability:**
    *   React code should be well-structured into components, with clear props and state management.
    *   Code should be commented where necessary.
*   **NFR-FE6: Accessibility (Basic):**
    *   Ensure sufficient color contrast for readability.
    *   Use semantic HTML elements where appropriate.

### A.4. Technical Stack (Frontend)

*   **Framework/Library:** React
*   **Styling:** CSS Modules, Styled-Components, Tailwind CSS, or plain CSS (developer choice, aim for simplicity).
*   **State Management:** React Context API or component state (Redux/Zustand likely overkill).
*   **Animations:** CSS Animations/Transitions or a lightweight library like `Framer Motion` (for FR-FE4.1, if needed and kept simple).
*   **HTTP Client:** `fetch` API or `axios`.

---

## B. Backend Product Requirements (FastAPI Application)

### B.1. Introduction
The backend is responsible for serving personalized data to the frontend. For this version, its role is primarily to provide configuration and content that can be easily updated without redeploying the frontend.

### B.2. Functional Requirements (FR-BE)

*   **FR-BE1: Provide API Endpoint for Reminder Information:**
    *   Implement an HTTP GET endpoint: `/api/reminder_info`.
    *   This endpoint shall return a JSON object containing:
        *   `greeting_name`: String (e.g., "My Dearest Joy")
        *   `message`: String (e.g., "Don't forget our special dinner by 6 PM!")
        *   `target_hour`: Integer (e.g., 18 for 6 PM)
        *   `target_minute`: Integer (e.g., 0)
        *   **(Optional for FR-FE7)** `sweet_messages`: Array of strings (e.g., `["Thinking of you!", "Can't wait!"]`)
    *   The data returned should be easily configurable within the backend code or a simple configuration file.
*   **FR-BE2: (Out of Scope for v1.1, but for consideration) API for Server Time:**
    *   An endpoint like `/api/current_time` could return server's current timestamp.
    *   *Decision for v1.1:* Not required. Client-side time is sufficient.

### B.3. Non-Functional Requirements (NFR-BE)

*   **NFR-BE1: Performance:**
    *   API responses should be fast (e.g., < 200ms). Given the simple nature, this should be easily achievable.
*   **NFR-BE2: Reliability/Availability:**
    *   The API endpoint should be consistently available when the backend server is running.
*   **NFR-BE3: Maintainability:**
    *   Python/FastAPI code should be clean, well-organized, and follow Python best practices.
    *   Easy to update the content served by the API.
*   **NFR-BE4: Simplicity:**
    *   The backend logic should be minimal and focused solely on serving the defined JSON data. No complex business logic or database interactions for v1.1.
*   **NFR-BE5: Configurability:**
    *   The personalized text (greeting, message, sweet nothings) should be easily modifiable in the backend code or a simple config file, without requiring frontend recompilation.

### B.4. Technical Stack (Backend)

*   **Framework:** FastAPI
*   **Language:** Python
*   **Data Serving:** Directly from Python data structures or a simple JSON/YAML config file read at startup.

---

## C. Overall Out of Scope (for Version 1.1)

*   User authentication or accounts.
*   Database persistence for user data or settings.
*   Multiple users or customizable reminder times via UI.
*   Complex, game-like animations.
*   Notifications (email, SMS, browser push notifications).
*   Internationalization/Localization.
*   Timezone selection beyond user's local browser time.
*   Server-side rendering (SSR) or advanced SEO.

## D. Overall Success Metrics

*   Joy sees the webpage and feels happy, appreciated, and maybe even a little bit smitten.
*   The countdown timer functions correctly on the frontend.
*   The frontend successfully fetches and displays data from the backend API.
*   The application is successfully built using React and FastAPI with the intended charming features.