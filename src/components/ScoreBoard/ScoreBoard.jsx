import '../ScoreBoard/ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => {
  return (
    <div className='score-board'>
      <div className='X'>{scoreX}</div>
      <div className='O'>{scoreO}</div>
    </div>
  )
}

export default ScoreBoard;