import { useState, useEffect, useRef } from 'react';
import LengthControl from './components/LengthControl';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [mode, setMode] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);

  const beepAudioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            beepAudioRef.current.play();
            if (mode === 'Session') {
              setMode('Break');
              return breakLength * 60;
            }
            setMode('Session');
            return sessionLength * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, mode, breakLength, sessionLength]);

  useEffect(() => {
    if (!isRunning && mode === 'Session') {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength, isRunning, mode]);

  useEffect(() => {
    if (!isRunning && mode === 'Break') {
      setTimeLeft(breakLength * 60);
    }
  }, [breakLength, isRunning, mode]);

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setMode('Session');
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const audio = beepAudioRef.current;
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="min-h-screen bg-[#1e555c] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold mb-8">25 + 5 Clock</h1>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <LengthControl
          title="Session"
          id="session"
          length={sessionLength}
          handleChange={setSessionLength}
          isRunning={isRunning}
        />
        <LengthControl
          title="Break"
          id="break"
          length={breakLength}
          handleChange={setBreakLength}
          isRunning={isRunning}
        />
      </div>

      <TimerDisplay timeLeft={timeLeft} mode={mode} />

      <Controls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        reset={handleReset}
      />

      <audio
        id="beep"
        ref={beepAudioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        preload="auto"
      />
    </div>
  );
}

export default App;
