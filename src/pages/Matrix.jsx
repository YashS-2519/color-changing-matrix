import { useEffect, useState } from "react";
import Square from "../components/Square";

function Matrix() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const [tracker, setTracker] = useState([]);
  const [sequence, setSequence] = useState([]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function processSequence() {
      if (sequence.length === 9 && tracker.length === 0) {
        for (const elem of sequence) {
          await delay(500);
          setTracker((prev) => [...prev, elem]);
        }

        await delay(500);
        setSequence([]);
        setTracker([]);
      }
    }

    processSequence();
  }, [sequence]);

  return (
    <>
      <div>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <Square
                key={cellIndex}
                className={
                  sequence.includes(cell) && !tracker.includes(cell)
                    ? "bg-green-500"
                    : tracker.includes(cell)
                      ? "bg-orange-500"
                      : ""
                }
                props={{ cell, sequence, setSequence }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Matrix;
