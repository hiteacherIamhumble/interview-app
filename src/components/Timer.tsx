import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(2);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            // Play a sound or alert when timer ends
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedMinutes * 60);
  };

  const handleMinutesChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    const percentage = (timeLeft / (selectedMinutes * 60)) * 100;
    if (percentage > 50) return '#4ecdc4';
    if (percentage > 25) return '#ffa500';
    return '#ff6b6b';
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2vh',
      right: '2vw',
      background: 'rgba(26, 26, 46, 0.95)',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '25px',
      zIndex: 1000,
      minWidth: '280px',
      width: '18vw',
      maxWidth: '350px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '15px',
        color: '#fff',
        fontSize: '1.2rem'
      }}>
        Interview Timer
      </h3>
      
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: getTimerColor(),
        marginBottom: '20px',
        fontFamily: 'monospace',
        textShadow: `0 0 20px ${getTimerColor()}40`
      }}>
        {formatTime(timeLeft)}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontSize: '1rem' }}>
          Select Duration:
        </label>
        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5].map((min) => (
            <button
              key={min}
              onClick={() => handleMinutesChange(min)}
              style={{
                padding: '8px 12px',
                background: selectedMinutes === min ? '#4ecdc4' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '5px',
                color: selectedMinutes === min ? '#1a1a2e' : '#fff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: selectedMinutes === min ? 'bold' : 'normal',
                transition: 'all 0.3s ease'
              }}
            >
              {min}m
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {!isRunning ? (
          <button
            onClick={handleStart}
            disabled={timeLeft === 0}
            style={{
              padding: '10px 25px',
              background: timeLeft === 0 ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, #4ecdc4 0%, #44a3aa 100%)',
              border: 'none',
              borderRadius: '25px',
              color: '#fff',
              cursor: timeLeft === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            style={{
              padding: '10px 25px',
              background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
              border: 'none',
              borderRadius: '25px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Pause
          </button>
        )}
        
        <button
          onClick={handleReset}
          style={{
            padding: '10px 25px',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
            border: 'none',
            borderRadius: '25px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          Reset
        </button>
      </div>

      {timeLeft === 0 && (
        <div style={{
          marginTop: '15px',
          textAlign: 'center',
          color: '#ff6b6b',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          animation: 'blink 1s infinite'
        }}>
          Time's Up! ⏰
        </div>
      )}
    </div>
  );
};

export default Timer;