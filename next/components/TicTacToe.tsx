import React, { useEffect, useState } from "react";

const Square = ({ playerTurn, setPlayerTurn, value }) => {
  // '' | X | O
  const [state, setState] = useState(value);

  return (
    <button
      style={{ border: "1px solid black", height: "50px", width: "50px" }}
      onClick={() => {
        if (state === "") {
          playerTurn === "X"
            ? (setState("X"), setPlayerTurn("O"))
            : (setState("O"), setPlayerTurn("X"));
        }
      }}
    >
      {state}
    </button>
  );
};

const Board = ({ playerTurn, setPlayerTurn }) => {
  // Check board
  useEffect(() => {}, [playerTurn]);

  return (
    <div>
      <Square
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        value={""}
      ></Square>
    </div>
  );
};

const Game = props => {
  const [playerTurn, setPlayerTurn] = useState("X");

  return (
    <div style={{ display: "flex" }}>
      <Board playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}></Board>
      <div style={{ marginLeft: "30px" }}>
        <h2>{`It is ${playerTurn} turn`}</h2>
      </div>
    </div>
  );
};

export default Game;
