import React from "react";
import recognitionIcon from "../images/icon-brand-recognition.svg";
import recordsIcon from "../images/icon-detailed-records.svg";
import customizableIcon from "../images/icon-fully-customizable.svg";
import { InputForm } from "./InputForm";

export const Body = () => {
  return (
    <section className="body-container">
      <div className="body-info relative -top-16 flex flex-col gap-14">
        <InputForm />

        <section className="more-info-section flex flex-col gap-24">
          <div className="more-info-header card intro-card">
            <h2 className="text-2xl font-extrabold">Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our advanced statistics
              dashboard.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={recognitionIcon} alt="illustration" />
            </div>

            <h3 className="text-xl font-extrabold">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={recordsIcon} alt="illustration" />
            </div>
            <h3 className="text-xl font-extrabold">Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={customizableIcon} alt="illustration" />
            </div>
            <h3 className="text-xl font-extrabold">Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};
