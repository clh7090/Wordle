import "../../assets/board/board-row.css";
import BoardLetterComponent from "./BoardLetterComponent";

interface Props {
  row: number;
}
const BoardRowComponent = ({ row }: Props) => {
  return (
    <div className="board-row">
      <BoardLetterComponent row={row} col={0}></BoardLetterComponent>
      <BoardLetterComponent row={row} col={1}></BoardLetterComponent>
      <BoardLetterComponent row={row} col={2}></BoardLetterComponent>
      <BoardLetterComponent row={row} col={3}></BoardLetterComponent>
      <BoardLetterComponent row={row} col={4}></BoardLetterComponent>
    </div>
  );
};

export default BoardRowComponent;
