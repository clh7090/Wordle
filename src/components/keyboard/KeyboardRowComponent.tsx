import "../../assets/keyboard/keyboard-row.css";
import KeyboardLetterComponent from "./KeyboardLetterComponent";

interface Props {
  row: string[];
}
const KeyboardRowComponent = ({ row }: Props) => {
  return (
    <div className="keyboard-row">
      {row.map((keyboardKey: string, index) => {
        return (
          <KeyboardLetterComponent
            key={index}
            keyboardKey={keyboardKey}
            isBigKey={
              keyboardKey === "Enter" || keyboardKey === "Delete" ? true : false
            }
          ></KeyboardLetterComponent>
        );
      })}
    </div>
  );
};

export default KeyboardRowComponent;
