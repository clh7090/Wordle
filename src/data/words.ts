const words: string[] = [
  "apple",
  "table",
  "house",
  "plant",
  "water",
  "music",
  "happy",
  "white",
  "black",
  "green",
  "bread",
  "chair",
  "knife",
  "clock",
  "paper",
  "phone",
  "smile",
  "table",
  "watch",
  "woman",
];

const retrieveRandomWord = (): string => {
  const wordSet = words;
  const wordArray = Array.from(wordSet);
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  const randomWord = wordArray[randomIndex];
  return randomWord;
};

export default retrieveRandomWord;
