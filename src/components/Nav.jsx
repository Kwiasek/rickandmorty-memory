/* eslint-disable react/prop-types */
const Nav = ({ score, maxScore }) => {
  return (
    <div className="flex justify-between py-5 px-3 text-xl bg-blue-500 text-white">
      <p>Score: {score}</p>
      <p>Max score: {maxScore}</p>
    </div>
  );
};

export default Nav;
