import { useState, useEffect } from 'react';
import './App.css';

interface ReminderInfo {
  greeting_name: string;
  message: string;
  target_hour: number;
  target_minute: number;
  sweet_messages: string[];
}

// Custom Hook to manage reminder logic
function useReminder() {
  const [reminderInfo, setReminderInfo] = useState<ReminderInfo | null>(null);
  const [timeUntilDinner, setTimeUntilDinner] = useState<string>('');
  const [isDinnerTime, setIsDinnerTime] = useState<boolean>(false);

  // Fetch reminder info from backend
  useEffect(() => {
    fetch('https://supersecret.app.vtxhub.com/api/reminder_info') // Use the correct URL here
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received reminder info:', data);
        setReminderInfo(data);
      })
      .catch(error => {
        console.error('Error fetching reminder info:', error);
        // Set default values if API fails
        setReminderInfo({
          greeting_name: "Hey Joy",
          message: "Don't forget our dinner by 6 PM!",
          target_hour: 18,
          target_minute: 0,
          sweet_messages: ["Thinking of you!",  "I'm waiting for you!", "I'm looking forward to seeing you!"]
        });
      });
  }, []); // Empty dependency array means this runs once on mount

  // Update current time and calculate time until dinner
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (reminderInfo) {
        const dinnerTime = new Date(now);
        dinnerTime.setHours(reminderInfo.target_hour, reminderInfo.target_minute, 0, 0);

        if (now >= dinnerTime) {
          setIsDinnerTime(true);
          setTimeUntilDinner("It's 6 PM! Dinner time, my dear Joy!");
        } else {
          setIsDinnerTime(false);
          const diff = dinnerTime.getTime() - now.getTime();
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeUntilDinner(`${hours}h ${minutes}m ${seconds}s`);
        }
      } else {
        // If reminderInfo is not yet available, show a loading message
        setTimeUntilDinner("Loading timer information...");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [reminderInfo]); // Re-run when reminderInfo changes

  // Return the state and setters that the component needs
  return { reminderInfo, timeUntilDinner, isDinnerTime, setReminderInfo, setTimeUntilDinner, setIsDinnerTime };
}

function App() {
  // Destructure all the state and setters from the useReminder hook
  const { reminderInfo, timeUntilDinner, isDinnerTime } = useReminder();
  const [sweetMessage, setSweetMessage] = useState<string>('');

  // Handle fetching and setting sweet message with periodic updates
  useEffect(() => {
    if (!reminderInfo || !reminderInfo.sweet_messages || reminderInfo.sweet_messages.length === 0) {
      setSweetMessage("Looking forward to seeing you!");
      return;
    }

    const randomSweetMessage = () => {
      const randomIndex = Math.floor(Math.random() * reminderInfo.sweet_messages.length);
      setSweetMessage(reminderInfo.sweet_messages[randomIndex]);
    };

    // Set initial message
    randomSweetMessage();

    // Update message every 5 seconds
    const intervalId = setInterval(randomSweetMessage, 5000);

    // Cleanup the interval on unmount or when reminderInfo changes
    return () => clearInterval(intervalId);
  }, [reminderInfo]);


  return (
    <div className="app">
      <header className="header">
        {reminderInfo ? (
          <>
            <h1>{reminderInfo.greeting_name},</h1>
            <p className="message">{reminderInfo.message}</p>
          </>
        ) : (
          <>
            <h1>Hey Joy</h1>
            <p className="message">Don't forget our special dinner by 6 PM!</p>
          </>
        )}
      </header>

      <main className="countdown-container">
        {!reminderInfo ? (
          <div className="loading">
            <p>Loading reminder information from server...</p>
          </div>
        ) : isDinnerTime ? (
          <div className="celebration">
            <h2>Yay! Time for our wonderful dinner!</h2>
            {/* Simple confetti animation */}
            <div className="confetti-container">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: [`red`, `blue`, `yellow`, `pink`, `purple`, `green`][
                      Math.floor(Math.random() * 6)
                    ]
                  }}
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="countdown">
            <h2>Time until dinner:</h2>
            <div className="timer">{timeUntilDinner || 'Calculating...'}</div>
          </div>
        )}
      </main>

      {sweetMessage && (
        <footer className="footer">
          <p className="sweet-message">{sweetMessage}</p>
        </footer>
      )}
    </div>
  );
}

export default App;