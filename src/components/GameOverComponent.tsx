import { useBoardContext } from "./board/BoardProvider";
import "../assets/game-over.css";

const GameOverComponent = () => {
  const board = useBoardContext();

  return (
    <div className="game-over">
      <span>Game Over!</span>
      <span>Correct Word: {board.correctWord.toUpperCase()}</span>
      <div className="play-again" onClick={board.resetBoardNewWord}>
        Play Again
      </div>
    </div>
  );
};

export default GameOverComponent;
