"use client";

const Terms = () => {
  return (
    <div className="terms-page px-8 py-4 text-gray-200">
      <p className="mb-4">
        spindle is made with love by{" "}
        <a
          href="https://github.com/pranavkoirala"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-black rounded-lg px-2 py-1 group"
        >
          <span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-blue-200 blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"
            aria-hidden="true"
          ></span>
          <span className="relative">pranav</span>
        </a>
      </p>

      <h2 className="text-lg font-semibold mb-2">terms of submission</h2>
      <p className="mb-4">
        by hitting the submit button, you acknowledge and agree to the
        following:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          your submission will be automatically published in the spindle
          database
        </li>
        <li>
          any information you type into your submission can be seen and searched
          for by any person on the internet with the identifier
        </li>
        <li>
          you understand there is no way to delete a spindle submission from the
          project or internet
        </li>
        <li>
          you agree to be bound by the terms of use and privacy policy for the
          spindle project
        </li>
      </ul>
    </div>
  );
};

export default Terms;
