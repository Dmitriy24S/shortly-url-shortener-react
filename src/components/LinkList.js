import React from "react";
import { GrClose } from "react-icons/gr";

export const LinkList = ({ urlList, setUrlList }) => {
  const handleCopyBtn = (e, link) => {
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.classList.remove("active-copy");
      btn.innerText = "Copy";
    });
    e.target.classList.add("active-copy");
    e.target.innerText = "Copied!";
    navigator.clipboard.writeText(link);
    console.log("copied link");
  };

  const handleDeleteLink = (e, index, link) => {
    setUrlList((prev) =>
      prev.filter((item) => {
        return item.short_link !== link;
      })
    );
  };

  return (
    <div className="links-list-container flex flex-col gap-5">
      {urlList.map((item, index) => {
        return (
          <article
            key={index}
            className="relative flex flex-col items-start bg-white max-w-xs mx-auto w-full rounded-lg text-left gap-4 font-bold pb-4 md:max-w-2xl md:flex-row md:items-center md:justify-between md:p-4"
          >
            <div className="orignal-link-wrapper border-b-2 border-neutral-200 md:border-0 md:p-0 p-4 pb-2 w-full md:flex md:items-center">
              <button
                className="delete-link absolute right-4 top-4 md:relative md:right-0 md:top-0 md:mr-4"
                aria-label="delete list item"
                onClick={(e) => {
                  handleDeleteLink(e, index, item.short_link);
                }}
              >
                <GrClose className="delete-link-btn" />
              </button>
              <a
                href={item.original_link}
                target="_blank"
                rel="noreferrer"
                className="original-link"
              >
                {item.original_link}
              </a>
            </div>
            <a
              href={item.short_link}
              target="_blank"
              rel="noreferrer"
              className="short-link px-4 md:p-0 md:ml-auto"
            >
              {item.short_link}
            </a>
            <button
              className="sign-up-btn copy-btn block py-2 px-8 rounded-md font-semibold text-lg tracking-wide text-white mx-auto w-full md:w-fit md:m-0 md:px-4"
              onClick={(e) => handleCopyBtn(e, item.short_link)}
            >
              Copy
            </button>
          </article>
        );
      })}
    </div>
  );
};
