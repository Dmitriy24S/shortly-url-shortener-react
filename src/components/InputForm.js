import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkList } from "./LinkList";

export const InputForm = () => {
  const [urlList, setUrlList] = useState([]);
  const [inputValue, setInputValue] = useState();

  // Pull from local storage
  useEffect(() => {
    const json = localStorage.getItem("list");
    const savedList = JSON.parse(json);
    if (savedList && savedList.length > 0) {
      setUrlList(savedList);
      console.log("pulled links from local storage");
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (urlList && urlList.length > 0) {
      const json = JSON.stringify(urlList);
      localStorage.setItem("list", json);
      console.log("saved links to local storage");
    }
  }, [urlList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchShortURL = async () => {
      let res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      let data = await res;
      setUrlList((prev) => [
        ...prev,
        {
          short_link: data.data.result.full_short_link3,
          original_link: data.data.result.original_link,
        },
      ]);
    };
    fetchShortURL();
  };

  return (
    <>
      <div className="form-input-wrapper card p-6 rounded-lg max-w-xs mx-auto relative">
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="form-input-url"
            id="form-input-url"
            placeholder="Shorten a link here..."
            className="rounded-md py-2 px-3"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="sign-up-btn block w-full py-2 px-8 rounded-md font-semibold text-lg tracking-wide text-white mx-auto"
          >
            Shorten It!
          </button>
        </form>
      </div>

      <LinkList urlList={urlList} />
    </>
  );
};
