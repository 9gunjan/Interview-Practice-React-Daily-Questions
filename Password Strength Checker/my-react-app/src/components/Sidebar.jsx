import React, { useState } from "react";
import "../index.css";
import { Menu } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSideBar}>
        <Menu size={24} />
      </button>

      {isOpen && (
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Services</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
