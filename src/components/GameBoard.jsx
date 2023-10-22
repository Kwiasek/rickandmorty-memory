/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ handleSetScore, difficulty, handleGameOver }) => {
  const [characters, setCharacters] = useState(null);
  const charactersList = [];
  const [userPick, setUserPick] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const getRandomNumbers = (maxValue) => {
    let numbers = [];
    let i = 0;
    let text = "";
    while (i < maxValue) {
      let x = Math.floor(Math.random() * 825 + 1);
      if (!numbers.includes(x)) {
        numbers.push(x);
        i++;
      }
    }
    numbers.forEach((number) => {
      text += number + ",";
    });
    return `https://rickandmortyapi.com/api/character/${text}`;
  };

  useEffect(() => {
    let url;
    switch (difficulty) {
      case "Easy":
        url = getRandomNumbers(8);
        break;
      case "Medium":
        url = getRandomNumbers(10);
        break;
      case "Hard":
        url = getRandomNumbers(12);
        break;
    }
    fetch(url)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((data) => setCharacters(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error has occured</p>;
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <p className="text-3xl text-white font-bold">Loading...</p>
      </div>
    );

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
