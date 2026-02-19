import React from "react";
import { useContext } from "react";
import { ThemeContext, useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Current: {theme}
      </button>
    </div>
  );
};

export default Navbar;
