import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ></audio>
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-14 h-14 
        rounded-full bg-green-500 text-black 
        hover:scale-110 active:scale-95 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default PlayerControls;
