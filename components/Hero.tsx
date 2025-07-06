'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative text-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/videoplayback.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 bg-black/40 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-white">Dr. Serena Blake, PsyD</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-white">Compassionate Therapy for a Healthier You</h2>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base md:text-lg rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg" onClick={() => {
            alert('Thank you for your interest! We will contact you shortly.');
          }} >Book a Free Consult</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
