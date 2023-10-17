/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ handleSetScore }) => {
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
    }
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  return (
    <div className="grid grid-cols-5 gap-3 px-5 py-5">
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
