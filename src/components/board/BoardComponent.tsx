import "../../assets/board/board.css";
import BoardRowComponent from "./BoardRowComponent";

const BoardComponent = () => {
  return (
    <div className="board">
      <BoardRowComponent row={0}></BoardRowComponent>
      <BoardRowComponent row={1}></BoardRowComponent>
      <BoardRowComponent row={2}></BoardRowComponent>
      <BoardRowComponent row={3}></BoardRowComponent>
      <BoardRowComponent row={4}></BoardRowComponent>
      <BoardRowComponent row={5}></BoardRowComponent>
    </div>
  );
};

export default BoardComponent;
