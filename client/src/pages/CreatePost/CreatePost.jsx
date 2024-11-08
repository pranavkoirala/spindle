import { useState } from "react";

const CreatePost = () => {
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [message, setMessage] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [messageId, setMessageId] = useState(null);

  const handleInput = (event) => {
    setMessage(event.target.value);
    setError("");
    if (event.target.value === "") {
      setTextareaHeight("auto");
    } else {
      setTextareaHeight("auto");
      const newHeight = `${event.target.scrollHeight}px`;
      setTextareaHeight(newHeight);
    }
  };

  const handleDateChange = (event) => {
    setUnlockTime(event.target.value);
    setError("");
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    setMessageId(null);

    if (message.trim() === "" || unlockTime.trim() === "") {
      setError("Fields cannot be empty!");
      return;
    }

    try {
      const response = await fetch(
        "https://spindle-gsgw.onrender.com//api/messages/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, unlockTime }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setMessageId(responseData.id);
        setSuccess(
          "Message saved successfully! Save this identifier as it is the only way to access your message."
        );
        setMessage("");
        setUnlockTime("");
        setTextareaHeight("auto");
      } else {
        setError("Error saving message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to save the message.");
    }
  };

  return (
    <div className="create-post">
      <div className="input-container">
        <textarea
          id="reminder-area"
          value={message}
          spellCheck="false"
          autoComplete="off"
          autoCapitalize="off"
          placeholder="reminder to self"
          aria-label="link input area"
          data-form-type="other"
          className="min-w-80 px-4 py-2 text-sm text-[#fff] placeholder-[#fff] bg-black border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#fff] focus:border-white-500"
          style={{ height: textareaHeight, overflow: "hidden" }}
          onInput={handleInput}
        />
      </div>
      <div className="action-container flex flex-col items-center justify-center">
        <input
          id="datetime-area"
          type="datetime-local"
          value={unlockTime}
          onChange={handleDateChange}
          className="min-w-72 w-full px-4 py-2 mt-1 text-sm text-[#fff] placeholder-[#fff] bg-black border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#fff] focus:border-white-500"
        />
        <div className="flex items-center justify-center mt-2 w-full">
          <div className="success-error-wrapper ml-4 text-left">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && (
              <div className="text-green-500 text-sm max-w-60">
                <p>{success}</p>
                {messageId && (
                  <p>
                    Identifier:{" "}
                    <span className="text-red-500 font-bold">{messageId}</span>
                  </p>
                )}
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="search-btn bg-[#191919] border border-gray-700 rounded-md p-2 text-xs hover:bg-[#1f1f1f] hover:border-gray-700"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
