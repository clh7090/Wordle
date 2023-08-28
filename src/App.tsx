import HeaderComponent from "./components/HeaderComponent";
import BoardComponent from "./components/board/BoardComponent";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { useBoardContext } from "./components/board/BoardProvider";
import GameOverComponent from "./components/GameOverComponent";

function App() {
  const board = useBoardContext();

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BoardComponent></BoardComponent>

      {board.gameOver ? (
        <GameOverComponent></GameOverComponent>
      ) : (
        <KeyboardComponent></KeyboardComponent>
      )}
    </div>
  );
}

export default App;
