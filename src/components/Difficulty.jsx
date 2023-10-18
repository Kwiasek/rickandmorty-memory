/* eslint-disable react/prop-types */

const Difficulty = ({ handleSelectDifficulty }) => {
  const selectDifficulty = (e) => {
    handleSelectDifficulty(e.target.innerHTML);
  };

  return (
    <div>
      <p className="text-white text-3xl font-bold mb-3">Select difficulty:</p>
      <div className="flex justify-between">
        <button
          className="px-3 py-2 border-2 rounded-md cursor-pointer bg-green-300 text-green-900 border-green-900"
          onClick={selectDifficulty}
        >
          Easy
        </button>
        <button
          className="px-3 py-2 border-2 rounded-md cursor-pointer bg-yellow-400 border-black"
          onClick={selectDifficulty}
        >
          Medium
        </button>
        <button
          className="px-3 py-2 border-2 rounded-md cursor-pointer bg-red-400 text-red-900 border-red-900"
          onClick={selectDifficulty}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Difficulty;
