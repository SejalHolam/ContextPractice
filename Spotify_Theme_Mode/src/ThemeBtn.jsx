import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <FaSun className="text-white" size={18} />
      ) : (
        <FaMoon className="text-black" size={18} />
      )}
    </button>
  );
};

export default ThemeBtn;
