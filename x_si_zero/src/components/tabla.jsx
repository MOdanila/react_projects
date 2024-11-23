import React from "react";
import { Patrat } from "./patrat";
import { useState } from "react";
import "./tabla.css";

export function Tabla(props) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (square[index] === null) {
      square[index] = turn ? "X" : "O";
      setSquare([...square]);
      setTurn(!turn);
      checkWinner();
    }
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        setWinner(square[a]);
        return;
      }
    }
  };

  const resetTable = () => {
    setSquare(Array(9).fill(null));
    setTurn(true);
    setWinner(null);
  };

  return (
    <>
      <div className="tabla">
        {winner ? (
          <>
            <div className="winner-message">{winner} a castigat</div>
            <button className="reset" onClick={resetTable}>
              Reset
            </button>
          </>
        ) : (
          square.map((square, index) => (
            <Patrat
              key={index}
              value={square}
              onClick={() => handleClick(index)}
            />
          ))
        )}
      </div>
    </>
  );
}
