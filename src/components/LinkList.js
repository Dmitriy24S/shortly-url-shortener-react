import React from "react";

export const LinkList = ({ urlList }) => {
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
  return (
    <div className="links-list-container flex flex-col gap-5">
      {urlList.map((item, index) => {
        return (
          <article
            key={index}
            className="flex flex-col bg-white max-w-xs mx-auto w-full rounded-lg text-left gap-4 font-bold pb-4"
          >
            <a
              href={item.original_link}
              className="original-link p-4 pb-2 border-b-2 border-neutral-200"
            >
              {item.original_link}
            </a>
            <a href={item.short_link} className="short-link px-4">
              {item.short_link}
            </a>
            <button
              className="sign-up-btn copy-btn block py-2 px-8 rounded-md font-semibold text-lg tracking-wide text-white mx-auto w-full"
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
