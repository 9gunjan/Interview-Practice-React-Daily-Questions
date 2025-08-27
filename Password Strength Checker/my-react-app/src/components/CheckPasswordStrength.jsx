import React, { useState } from "react";
import "../App.css";

export const PasswordStrength = (pwd) => {
  const checks = [
    pwd.length >= 8,
    /[A-Z]/.test(pwd),
    /[a-z]/.test(pwd),
    /[0-9]/.test(pwd),
    /[^A-Za-z0-9]/.test(pwd),
  ];

  const passed = checks.filter(Boolean).length;

  if (passed === 1) return "Level 1";
  if (passed >= 2 && passed <= 3) return "Level 2";
  if (passed >= 4 && passed <= 5) return "Level 3";
  return "weak password";
};

const CheckPasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleCheck = () => {
    setStrength(PasswordStrength(password));
  };

  return (
    <div className="container">
      <h2>Check the Password Strength</h2>
      <div className="check">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="check-btn" onClick={handleCheck}>
          Check Strength
        </button>
      </div>
      {strength && <p>strength:{strength}</p>}
    </div>
  );
};

export default CheckPasswordStrength;
