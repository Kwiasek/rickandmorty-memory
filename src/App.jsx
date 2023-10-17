import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const handleSetScore = (score) => {
    setScore(score);
  };

  if (score > maxScore) setMaxScore(score);
  if (score == 10) {
    alert("You win!");
  }
  return (
    <div className="bg-blue-400 flex flex-col h-full">
      <Nav score={score} maxScore={maxScore} />
      <GameBoard handleSetScore={handleSetScore} />
      <Footer />
    </div>
  );
}

export default App;
