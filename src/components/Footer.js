import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as FBLogo } from "../images/icon-facebook.svg";
import { ReactComponent as TWLogo } from "../images/icon-twitter.svg";
import { ReactComponent as PTLogo } from "../images/icon-pinterest.svg";
import { ReactComponent as IGLogo } from "../images/icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="text-white">
      <section className="footer-top px-6 py-24 flex flex-col gap-6 items-center md:gap-8">
        <h2 className="font-bold text-3xl text-white md:text-5xl">Boost your links today</h2>
        <button href="#/" className="sign-up-btn block py-3 px-12 rounded-full">
          Get Started
        </button>
      </section>

      <section className="footer-bottom py-16 flex flex-col gap-12 md:flex-row md:justify-evenly md:px-4">
        <Logo className="footer-logo mx-auto md:m-0" />
        <div className="footer-links flex flex-col  gap-12 md:flex-row xl:gap-24">
          <div className="footer-links-section flex flex-col gap-5 md:text-left ">
            <h4 className="font-semibold text-white">Features</h4>
            <ul className="flex flex-col gap-2 text-zinc-400">
              <li>
                <a href="#/">Link Shortening</a>
              </li>
              <li>
                <a href="#/">Branded Links</a>
              </li>
              <li>
                <a href="#/">Analytics</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section flex flex-col gap-5 md:text-left">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="flex flex-col gap-2 text-zinc-400">
              <li>
                <a href="#/">Blog</a>
              </li>
              <li>
                <a href="#/">Developers</a>
              </li>
              <li>
                <a href="#/">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section flex flex-col gap-5 md:text-left">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="flex flex-col gap-2 text-zinc-400">
              <li>
                <a href="#/">About</a>
              </li>
              <li>
                <a href="#/">Our Team</a>
              </li>
              <li>
                <a href="#/">Careers</a>
              </li>
              <li>
                <a href="#/">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="social-links">
          <ul className="flex gap-6 justify-center items-center">
            <li>
              <a href="#/" aria-label="facebook">
                <FBLogo />
              </a>
            </li>
            <li>
              <a href="#/" aria-label="twitter">
                <TWLogo />
              </a>
            </li>
            <li>
              <a href="#/" aria-label="pinterest">
                <PTLogo />
              </a>
            </li>
            <li>
              <a href="#/" aria-label="instagram">
                <IGLogo />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
