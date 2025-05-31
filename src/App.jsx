import { useRef, useState, useEffect } from 'react';

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // fade in on mount
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 flex flex-col justify-center items-center px-6 py-12 select-none">
      <div
        className={`
          bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center
          transform transition-all duration-700
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-6 animate-bounce drop-shadow-lg">
          🎂 Happy Birthday Janu! 💖
        </h1>
        <p className="text-xl text-pink-800 font-semibold mb-3">
          From your Nithin 💌
        </p>
        <p className="text-lg text-pink-600 italic mb-8">
          Love you so much ra bujji thalli 💕
        </p>

        <button
          onClick={togglePlay}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
          aria-label={isPlaying ? 'Pause song' : 'Play song'}
        >
          {isPlaying ? 'Pause Song 🎵' : 'Play Song 🎶'}
        </button>

        <audio ref={audioRef} src="/song.mp3" preload="auto" />
      </div>
    </div>
  );
}
