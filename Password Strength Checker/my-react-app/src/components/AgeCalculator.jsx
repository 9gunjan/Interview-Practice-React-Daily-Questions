import React, { useState } from "react";

const AgeCalculator = () => {
  const [input, setInput] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const handleClick = () => {
    setError("");
    if (!input) {
      setError("Please select a date");
      setAge(null);
      return;
    }

    const today = new Date();
    const birth = new Date(input);

    if (birth > today) {
      setError("Birth date cannot be in the future");
      setAge(null);
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months = months - 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years = years - 1;
      months = months + 12;
    }

    setAge({ years, months, days });
  };
  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <p>Enter/Select a birthdate:</p>
      <input
        type="date"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Calculate Age</button>
      {error && <p>{error}</p>}
      {age &&
        !error &&(
          <p>
            {age.years}years,{age.months}months, {age.days}days
          </p>
        )}
    </div>
  );
};

export default AgeCalculator;
