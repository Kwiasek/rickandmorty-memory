/* eslint-disable react/prop-types */

const Card = ({ character, handleUserClick }) => {
  return (
    <div
      className="flex flex-col bg-blue-500 border-2 border-blue-800 px-3 py-4 items-center justify-center rounded-xl cursor-pointer max-h-80"
      onClick={() => {
        handleUserClick(character.name);
      }}
    >
      <img src={character.image} alt={character.name} className="max-h-[90%]" />
      <p className="text-white font-bold text-xl">{character.name}</p>
    </div>
  );
};
export default Card;
