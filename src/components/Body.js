import React from "react";
import recognitionIcon from "../images/icon-brand-recognition.svg";
import recordsIcon from "../images/icon-detailed-records.svg";
import customizableIcon from "../images/icon-fully-customizable.svg";

export const Body = () => {
  return (
    <section className="body-container">
      <div className="body-info relative -top-16 flex flex-col gap-14">
        <div className="form-input-wrapper card p-6 rounded-lg max-w-xs mx-auto relative">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="form-input-url"
              id="form-input-url"
              placeholder="Shorten a link here..."
              className="rounded-md py-2 px-3"
            />
            <button
              type="submit"
              className="sign-up-btn block w-full py-2 px-8 rounded-md font-semibold text-lg tracking-wide text-white mx-auto"
            >
              Shorten It!
            </button>
          </form>
        </div>

        <section className="more-info-section flex flex-col gap-24">
          <div className="more-info-header card">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our advanced statistics
              dashboard.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={recognitionIcon} alt="illustration" />
            </div>

            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={recordsIcon} alt="illustration" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </div>

          <div className="more-info-card card">
            <div className="card-image-container">
              <img src={customizableIcon} alt="illustration" />
            </div>
            <h3>Fully Customizable</h3>
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
