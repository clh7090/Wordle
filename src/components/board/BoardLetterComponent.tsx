import "../../assets/board/board-letter.css";
import { useBoardContext } from "./BoardProvider";

interface Props {
  row: number;
  col: number;
}

const BoardLetterComponent = ({ row, col }: Props) => {
  const board = useBoardContext();

  if (board.checkIsCorrectLetterPosition(row, col)) {
    return (
      <div className="board-letter" id="correct-letter-pos">
        {board.getLetterAtPos(row, col).toUpperCase()}
      </div>
    );
  } else if (board.checkIsIncorrectLetterPosition(row, col)) {
    return (
      <div className="board-letter" id="incorrect-letter-pos">
        {board.getLetterAtPos(row, col).toUpperCase()}
      </div>
    );
  }
  return (
    <div className="board-letter" id="no-letter-pos">
      {board.getLetterAtPos(row, col).toUpperCase()}
    </div>
  );
};

export default BoardLetterComponent;
