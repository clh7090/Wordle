import "../../assets/board/board.css";
import { ReactNode, createContext, useContext, useState } from "react";
import retrieveRandomWord from "../../data/words";

interface BoardContextInterface {
  board: string[][];
  correctWord: string;
  gameOver: boolean;
  rowIsFull: (row: string[]) => boolean;
  gameIsOver: (row: string[]) => boolean;
  handleEnterPressed: () => void;
  handleDeletePressed: () => void;
  handleKeyboardKeyPressed: (keyboardKey: string) => void;
  checkIsCorrectLetterPosition: (row: number, col: number) => boolean;
  checkIsIncorrectLetterPosition: (row: number, col: number) => boolean;
  getLetterAtPos: (row: number, col: number) => string;
  resetBoardNewWord: () => void;
}

const BoardContext = createContext<BoardContextInterface | undefined>(
  undefined
);

// custom hook to get around the undefined in createContext
export const useBoardContext = () => {
  const boardContext = useContext(BoardContext);
  if (!boardContext) {
    throw new Error("No context defined");
  }
  return boardContext;
};

interface Props {
  children: ReactNode;
}

export const BoardProvider = ({ children }: Props) => {
  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  const disabledLettersDefault = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
  ];
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ row: 0, col: 0 });
  const [correctWord, setCorrectWord] = useState(retrieveRandomWord());
  const [disabledLetters, setDisabledLetters] = useState(
    disabledLettersDefault
  );
  const [gameOver, setGameOver] = useState(false);

  const rowIsFull = (row: string[]) => {
    let isFull: boolean = true;
    row.forEach((letter) => {
      if (isFull) {
        isFull = letter === "" ? false : true;
      }
    });
    return isFull;
  };

  const rowIsEmpty = (row: string[]) => {
    let isEmpty: boolean = true;
    row.forEach((letter) => {
      isEmpty = false;
    });
    return isEmpty;
  };

  const gameIsOver = (row: string[]) => {
    // first un-disable the letters and show the colored ones if they are correct or in the wrong spot
    const newDisabledLetters = [...disabledLetters];
    newDisabledLetters[currAttempt.row].forEach((isDisabled, colIndex) => {
      newDisabledLetters[currAttempt.row][colIndex] = false;
    });
    setDisabledLetters(newDisabledLetters);

    // next we match if the word is correct
    let isCorrectWord: boolean = true;
    row.forEach((letter, index) => {
      if (!(correctWord[index] === letter.toLowerCase() && isCorrectWord)) {
        isCorrectWord = false;
      }
    });
    // make sure you check if the game is over because the last row is full
    if (isCorrectWord || rowIsFull(board[5])) {
      setGameOver(true);
    }
    return isCorrectWord;
  };

  const handleEnterPressed = () => {
    if (rowIsFull(board[currAttempt.row])) {
      if (gameIsOver(board[currAttempt.row])) {
        return;
      }
      const newDisabledLetters = [...disabledLetters];
      newDisabledLetters[currAttempt.row].forEach((isDisabled, colIndex) => {
        newDisabledLetters[currAttempt.row][colIndex] = false;
      });
      setDisabledLetters(newDisabledLetters);
      setCurrAttempt({
        row: currAttempt.row + 1,
        col: 0,
      });
    }
  };

  const handleDeletePressed = () => {
    if (!rowIsEmpty(board[currAttempt.row])) {
      let newBoard = [...board];
      newBoard[currAttempt.row][currAttempt.col - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({
        row: currAttempt.row,
        col: currAttempt.col === 0 ? currAttempt.col : currAttempt.col - 1,
      });
    }
  };

  const handleKeyboardKeyPressed = (keyboardKey: string) => {
    if (!rowIsFull(board[currAttempt.row])) {
      let newBoard = [...board];
      newBoard[currAttempt.row][currAttempt.col] = keyboardKey;
      setBoard(newBoard);
      setCurrAttempt({
        row: currAttempt.row,
        col: currAttempt.col === 5 ? currAttempt.col : currAttempt.col + 1,
      });
    }
  };

  const checkIsCorrectLetterPosition = (row: number, col: number) => {
    if (
      board[row][col].toLowerCase() === correctWord[col].toLowerCase() &&
      disabledLetters[row][col] !== true
    ) {
      return true;
    }
    return false;
  };

  const checkIsIncorrectLetterPosition = (row: number, col: number) => {
    if (
      correctWord.includes(board[row][col].toLowerCase()) &&
      board[row][col] !== "" &&
      disabledLetters[row][col] !== true
    ) {
      return true;
    }
    return false;
  };

  const getLetterAtPos = (row: number, col: number) => {
    return board[row][col];
  };

  const resetBoardNewWord = () => {
    setBoard(boardDefault);
    setCurrAttempt({ row: 0, col: 0 });
    setCorrectWord(retrieveRandomWord());
    setDisabledLetters(disabledLettersDefault);
    setGameOver(false);
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        correctWord,
        gameOver,
        rowIsFull,
        gameIsOver,
        handleEnterPressed,
        handleDeletePressed,
        handleKeyboardKeyPressed,
        checkIsCorrectLetterPosition,
        checkIsIncorrectLetterPosition,
        getLetterAtPos,
        resetBoardNewWord,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
