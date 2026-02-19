import React from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-full max-w-sm p-4 rounded-lg bg-white dark:bg-neutral-900 shadow">

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww"
        alt="music"
        className="rounded-md w-full h-56 object-cover"
      />

      {/* Title */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Chill Beats
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Relax and enjoy the music
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-5">
        
        <button className="text-gray-700 dark:text-white">
          <FaBackward size={18} />
        </button>

        <button className="bg-green-500 text-black p-3 rounded-full">
          <FaPlay size={20} />
        </button>

        <button className="text-gray-700 dark:text-white">
          <FaForward size={18} />
        </button>

      </div>
    </div>
  );
};

export default Card;
