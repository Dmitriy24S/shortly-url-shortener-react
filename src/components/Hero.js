import React from "react";

export const Hero = () => {
  return (
    <section className="mb-28 md:flex md:items-center md:justify-center md:p-12 md:pr-0 md:mb-24 md:max-w-5xl md:mx-auto">
      <div className="hero-bg md:order-2 md:min-w-300"></div>
      <div className="text-wrapper flex flex-col gap-4 max-w-xs mt-4 mx-auto md:m-0 md:max-w-sm md:mt-8 md:items-start md:text-left">
        <h1 className="text-5xl font-bold tracking-tighter">More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="sign-up-btn block py-2 px-8 rounded-full font-semibold text-lg tracking-wide text-white mx-auto md:m-0">
          Get Started
        </button>
      </div>
    </section>
  );
};
