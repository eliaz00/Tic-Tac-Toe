import Square from "../Square/Square";
import '../Board/Board.css';

const Board = ({ squares, onClick, turn, winnerSquare }) => {

  const createSquare = value => (
    value.map(value => (
      <Square
        winner={winnerSquare.includes(value)}
        value={squares[value]}
        key={`square_${value}`}
        onClick={() => onClick(value)}
        turn={turn} />

    ))
  );

  return (
    <div className="board">
      <div className="row">{createSquare([0, 1, 2])}</div>
      <div className="row">{createSquare([3, 4, 5])}</div>
      <div className="row">{createSquare([6, 7, 8])}</div>
    </div>

  )
}

export default Board;