import React, { useState } from "react";

const GuessTheNumber = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber);
  const [input, setInput] = useState();
  const [message, setMessage] = useState("");
  const [numberOfGuess, setNumberOfGuess] = useState(0);

  // console.log(input);

  const resetGame = () => {
    setNumberToGuess(generateRandomNumber());
    setMessage("");
    setNumberOfGuess("");
    setInput("");
  };

  const checkGuess = () => {
    const num = parseInt(input);
    if (num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }

    setNumberOfGuess((prev) => {
      prev + 1;
    });

    if (num === numberToGuess) {
      setMessage(
        `Congratulations! You guessed the number in ${
          numberOfGuess + 1
        } attempts`
      );
    } else if (num < numberToGuess) {
      setMessage("Too low!! TRy again");
    } else {
      setMessage("Too High!! Try Again");
    }
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <input
        type="number"
        id="guess-input"
        placeholder="Enter a number between 1 and 100"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="btns">
        <button onClick={checkGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default GuessTheNumber;
