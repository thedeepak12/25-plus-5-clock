const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

function TimerDisplay({ timeLeft, mode }) {
  return (
    <div className="text-center mb-6">
      <h2 id="timer-label" className="text-xl font-semibold mb-2">
        {mode}
      </h2>
      <div
        id="time-left"
        className="text-5xl font-mono bg-[#13353a] px-6 py-4 rounded shadow"
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

export default TimerDisplay;
