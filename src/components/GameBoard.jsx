/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ handleSetScore, difficulty, handleGameOver }) => {
  const [characters, setCharacters] = useState(null);
  const charactersList = [];
  const [userPick, setUserPick] = useState([]);

  if (characters) {
    characters.forEach((character) => {
      charactersList.push(character.name);
    });
  }

  const handleUserClick = (characterName) => {
    if (!userPick.includes(characterName)) {
      setUserPick((prevUserPick) => [...prevUserPick, characterName]);
      handleSetScore((prevScore) => prevScore + 1);
      setCharacters(characters.sort(() => Math.random() - 0.5));
    } else {
      alert("You lost!");
      handleGameOver();
    }
  };

  useEffect(() => {
    let url;
    switch (difficulty) {
      case "Easy":
        url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9";
        break;
      case "Medium":
        url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11";
        break;
      case "Hard":
        url =
          "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13";
        break;
      default:
        url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11";
        break;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  return (
    <div
      className={`grid gap-3 px-5 py-5 ${
        (difficulty == "Easy" && "grid-cols-4 ") ||
        (difficulty == "Medium" && "grid-cols-5") ||
        (difficulty == "Hard" && "grid-cols-6")
      }`}
    >
      {characters &&
        characters.map((character) => {
          return (
            <Card
              key={character.id}
              character={character}
              handleUserClick={handleUserClick}
            />
          );
        })}
    </div>
  );
};

export default GameBoard;
