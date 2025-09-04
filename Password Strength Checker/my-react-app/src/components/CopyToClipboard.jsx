import React, { useState } from "react";

const CopyToClipboard = () => {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const handleCopy = () => {
    if (inputText === "") return setMessage("Please enter some text");

    navigator.clipboard.writeText(inputText);
    setMessage("copied!")
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="parent-container">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>
      <div>
        <label>Enter your text:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={handleCopy}>Copy</button>
        {message && <p> {message}</p>}
      </div>
    </div>
  );
};

export default CopyToClipboard;
