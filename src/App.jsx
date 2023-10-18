import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Difficulty from "./components/Difficulty";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  const handleGameOver = () => {
    setDifficulty("");
    setScore(0);
  };

  const handleSetScore = (score) => {
    setScore(score);
  };

  const handleSelectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  if (score > maxScore) setMaxScore(score);
  if (
    (score == 8 && difficulty == "Easy") ||
    (score == 10 && difficulty == "Medium") ||
    (score == 12 && difficulty == "Hard")
  ) {
    alert("You win!");
    handleGameOver();
  }
  return (
    <div>
      {difficulty ? (
        <div className="bg-blue-400 flex flex-col h-full">
          <Nav score={score} maxScore={maxScore} />
          <GameBoard
            handleSetScore={handleSetScore}
            difficulty={difficulty}
            handleGameOver={handleGameOver}
          />
          <Footer />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Difficulty handleSelectDifficulty={handleSelectDifficulty} />
        </div>
      )}
    </div>
  );
}

export default App;
