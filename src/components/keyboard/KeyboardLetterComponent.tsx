import "../../assets/keyboard/keyboard-letter.css";
import { useBoardContext } from "../board/BoardProvider";

interface Props {
  keyboardKey: string;
  isBigKey: boolean;
}

const KeyboardLetterComponent = ({ keyboardKey, isBigKey }: Props) => {
  const board = useBoardContext();

  const clickKey = (keyboardKey: string) => {
    if (keyboardKey === "Enter") {
      board.handleEnterPressed();
    } else if (keyboardKey === "Delete") {
      board.handleDeletePressed();
    } else {
      board.handleKeyboardKeyPressed(keyboardKey);
    }
  };

  if (isBigKey) {
    return (
      <div
        className="keyboard-letter"
        id="big-key"
        onClick={() => {
          clickKey(keyboardKey);
        }}
      >
        {keyboardKey}
      </div>
    );
  }

  return (
    <div
      className="keyboard-letter"
      onClick={() => {
        clickKey(keyboardKey);
      }}
    >
      {keyboardKey}
    </div>
  );
};

export default KeyboardLetterComponent;
