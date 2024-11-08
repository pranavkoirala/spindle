"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!identifier) return;
    try {
      const response = await fetch(
        `https://spindle-gsgw.onrender.com/api/messages/${identifier}`
      );
      const data = await response.json();
      if (data.message) {
        setMessage(data.message);
        setShowMessage(true);
      } else {
        navigate("/countdown", { state: { unlockDate: data.unlockDate } });
      }
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <div className="home max-w-4xl mx-auto">
      <img
        src="../logo.png"
        alt="spindle"
        className="max-w-40 w-full mx-auto -mt-20"
        draggable="false"
        style={{ pointerEvents: "none" }}
      />
      {!showMessage && (
        <>
          <div className="input-container">
            <input
              id="link-area"
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
              maxLength="256"
              placeholder="input identifier here"
              aria-label="link input area"
              data-form-type="other"
              className="min-w-72 w-full px-4 py-2 text-sm text-[#fff] placeholder-[#fff] bg-black border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#fff] focus:border-white-500"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="action-container flex justify-end">
            <button
              onClick={() => navigate("/create-post")}
              className="justify-start redirect-btn bg-[#191919] border border-gray-700 rounded-md p-2 mr-4 text-xs mt-2 hover:bg-[#1f1f1f] hover:border-gray-700"
            >
              don&apos;t have one? make a post!
            </button>
            <button
              onClick={handleSearch}
              className="search-btn bg-[#191919] border border-gray-700 rounded-md p-2 text-xs mt-2 hover:bg-[#1f1f1f] hover:border-gray-700"
            >
              search
            </button>
          </div>
        </>
      )}

      {showMessage && (
        <div className="message-result text-white text-2xl text-center">
          <p className="text-3xl">Time Capsule Message</p>
          <p className="text-2xl mt-5">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
