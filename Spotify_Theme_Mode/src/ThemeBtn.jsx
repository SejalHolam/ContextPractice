import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">

      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      <div
        className="w-11 h-6 bg-gray-200 rounded-full peer 
        dark:bg-gray-700 peer-checked:bg-gray-800
        after:content-[''] after:absolute after:top-[2px] after:left-[2px]
        after:bg-white after:border after:rounded-full
        after:h-5 after:w-5 after:transition-all
        peer-checked:after:translate-x-full"
      ></div>

      <span className="ml-3 text-gray-900 dark:text-white">
        {theme === "dark" ? <FaSun className="text-yellow-500" size={20} /> : <FaMoon size={20} />}
      </span>

    </label>
  );
};

export default ThemeBtn;
