function LengthControl({ title, id, length, handleChange, isRunning }) {
  const handleIncrement = () => {
    if (length < 60 && !isRunning) handleChange(length + 1);
  };

  const handleDecrement = () => {
    if (length > 1 && !isRunning) handleChange(length - 1);
  };

  return (
    <div className="text-center">
      <h2 id={`${id}-label`} className="text-lg font-semibold mb-2">
        {title} Length
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          id={`${id}-decrement`}
          onClick={handleDecrement}
          className="bg-red-500 px-3 py-1 rounded"
        >
          -
        </button>
        <span id={`${id}-length`} className="text-2xl font-mono">
          {length}
        </span>
        <button
          id={`${id}-increment`}
          onClick={handleIncrement}
          className="bg-green-500 px-3 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LengthControl;
