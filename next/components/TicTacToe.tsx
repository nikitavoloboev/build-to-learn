import React, { useEffect, useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      style={{ border: "1px solid black", height: "50px", width: "50px" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Board = ({ playerTurn, setPlayerTurn }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState();

  const handleClick = i => {
    const sqCopy = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    sqCopy[i] = xIsNext ? "X" : "O";
    setSquares(sqCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = i => {
    return (
      <div>
        <Square value={squares[i]} onClick={() => handleClick(i)} />
      </div>
    );
  };

  // Check for winner
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }, [squares]);

  return (
    <div>
      <h2>{status}</h2>
      <div style={{ display: "flex" }}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={{ display: "flex" }}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={{ display: "flex" }}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = props => {
  const [playerTurn, setPlayerTurn] = useState("X");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Board playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}></Board>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
