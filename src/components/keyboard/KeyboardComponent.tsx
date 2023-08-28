import "../../assets/keyboard/keyboard.css";
import KeyboardRowComponent from "./KeyboardRowComponent";
const KeyboardComponent = () => {
  const row0 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row1 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row2 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];

  return (
    <div className="keyboard">
      <KeyboardRowComponent row={row0}></KeyboardRowComponent>
      <KeyboardRowComponent row={row1}></KeyboardRowComponent>
      <KeyboardRowComponent row={row2}></KeyboardRowComponent>
    </div>
  );
};

export default KeyboardComponent;
