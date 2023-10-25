import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import ButtomReset from "./components/ButtomReset/ButtomReset";

function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerSquare, setWinnerSquare] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const winningPart = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const reset = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
    setWinnerSquare([]);
  };

  const resetScore = () => {
    setScore({
      X: 0,
      O: 0,
    });
  };

  const checkWiner = (newSquares) => {
    for (let i = 0; i < winningPart.length; i++) {
      const [a, b, c] = winningPart[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        endGame(newSquares[a], winningPart[i]);
        return;
      }
      //winner
    }

    if (!newSquares.includes(null)) {
      endGame(null, Array.from(Array(9).keys()));
      //empat
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  const handleClick = (square) => {
    let newSquare = [...squares];
    newSquare.splice(square, 1, turn);
    setSquares(newSquare);
    checkWiner(newSquare);
  };

  const endGame = (result, winningPart) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setWinnerSquare(winningPart);
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <main className="container">
      <button className="button" onClick={resetScore}>Reset</button>
      <Board
        winnerSquare={winnerSquare}
        turn={turn}
        squares={squares}
        onClick={handleClick}
      />
      <ScoreBoard scoreX={score.X} scoreO={score.O}></ScoreBoard>
    </main>
  );
}

export default App;
