import React from 'react';

const Hero = () => {
  return (
    <section className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
          <button className="brand-gradient text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">Explore Technologies</button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">Learn More</button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center shadow-inner">
           <span className="text-gray-400 font-medium">3D Isometric Image Here</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;