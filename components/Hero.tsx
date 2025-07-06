import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative text-center p-4 overflow-hidden">
      <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="/images/videoplayback.mp4"
      autoPlay
      loop
      muted
      playsInline
      />
      <div className="relative z-10 bg-black/40 w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Dr. Serena Blake, PsyD</h1>
      <h2 className="text-xl md:text-2xl mb-6 text-white">Compassionate Therapy for a Healthier You</h2>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Book a Free Consult</button>
      </div>
    </section>
  );
};

export default Hero;
