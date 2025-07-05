import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-violet-100 to-white">
      <div className="p-10 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-md flex flex-col items-center animate-pulse">
        <h1 className="text-6xl md:text-8xl font-zentry font-black text-blue-700 mb-6 drop-shadow-lg text-center">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-xl">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon; 