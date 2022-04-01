import React from "react";

export const Hero = () => {
  return (
    <section className="mb-28">
      <div className="hero-bg"></div>
      <div className="text-wrapper flex flex-col gap-4 max-w-xs mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter">More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="sign-up-btn block py-2 px-8 rounded-full font-semibold text-lg tracking-wide text-white mx-auto">
          Get Started
        </button>
      </div>
    </section>
  );
};
