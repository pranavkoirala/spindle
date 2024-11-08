"use client";

const Home = () => {
  return (
    <div className="home">
      <img
        src="../logo.png"
        alt="spindle"
        className="max-w-40 w-full mx-auto -mt-20"
      />
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
        />
      </div>
      <div className="action-container flex justify-end">
        <button className="search-btn bg-[#191919] border border-gray-700 rounded-md p-2 text-xs mt-1 hover:bg-[#1f1f1f] hover:border-gray-700">
          Search
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
