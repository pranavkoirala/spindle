import React, { useState } from "react";

const CreatePost = () => {
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleInput = (event) => {
    if (event.target.value === "") {
      setTextareaHeight("auto");
    } else {
      setTextareaHeight("auto");
      const newHeight = `${event.target.scrollHeight}px`;
      setTextareaHeight(newHeight);
    }
  };

  return (
    <div className="create-post">
      <div className="input-container">
        <textarea
          id="reminder-area"
          spellCheck="false"
          autoComplete="off"
          autoCapitalize="off"
          placeholder="reminder to self"
          aria-label="link input area"
          data-form-type="other"
          className="min-w-72 w-full px-4 py-2 text-sm text-[#fff] placeholder-[#fff] bg-black border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#fff] focus:border-white-500"
          style={{ height: textareaHeight, overflow: "hidden" }}
          onInput={handleInput}
        />
      </div>
      <div className="action-container flex justify-end">
        <input
          id="datetime-area"
          type="datetime-local"
          className="min-w-72 w-full px-4 py-2 mt-1 mr-1 text-sm text-[#fff] placeholder-[#fff] bg-black border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#fff] focus:border-white-500"
        />
        <button className="search-btn bg-[#191919] border border-gray-700 rounded-md p-2 text-xs mt-1 hover:bg-[#1f1f1f] hover:border-gray-700">
          submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
