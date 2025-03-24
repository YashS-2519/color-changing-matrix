import React from "react";

function Square({ props: { cell, sequence, setSequence }, className }) {
  const clickHandler = () => {
    if (!sequence.includes(cell)) setSequence((prev) => [...prev, cell]);
  };

  return (
    <div
      onClick={clickHandler}
      value={cell}
      className={`m-1 h-40 w-40 border border-white rounded hover:cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-center text-white text-3xl ${className}`}
    >
      {sequence.includes(cell) ? sequence.indexOf(cell) + 1 : ""}
    </div>
  );
}

export default Square;
