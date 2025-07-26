function Controls({ isRunning, setIsRunning, reset }) {
  return (
    <div className="flex space-x-6">
      <button
        id="start_stop"
        onClick={() => setIsRunning((prev) => !prev)}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        id="reset"
        onClick={reset}
        className="bg-yellow-500 px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
