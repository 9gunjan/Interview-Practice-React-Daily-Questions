import React, { useState } from "react";

const TabSwitcher = () => {
  const buttonArray = ["Home", "Profile", "Settings"];
  const contentArray = [
    { id: 0, content: "This is the Home page" },
    { id: 1, content: "This is the Profile page" },
    { id: 2, content: "This is the Settings page" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tab-full-container">
      <h1>Tab Switcher</h1>
      <div className="tab-section">
        {buttonArray.map((item, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)} //updating the active tab
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <p>{contentArray.find((item) => item.id === activeTab)?.content}</p>
      </div>
    </div>
  );
};

export default TabSwitcher;
