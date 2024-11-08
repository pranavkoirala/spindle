import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [homeBounce, setHomeBounce] = useState("");
  const [createPostBounce, setCreatePostBounce] = useState("");
  const [termsBounce, setTermsBounce] = useState("");

  const handleBounce = (setBounce) => {
    setBounce("bounce-on-click");
    setTimeout(() => setBounce(""), 300);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-32 bg-[#101010] text-white font-mono">
      <div className="flex justify-center p-4">
        <img src="/logo.png" alt="^_^" className="object-cover h-14" />
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link
              to="/"
              className={`block ${homeBounce}`}
              onClick={() => handleBounce(setHomeBounce)}
            >
              home
            </Link>
          </li>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link
              to="/create-post"
              className={`block ${createPostBounce}`}
              onClick={() => handleBounce(setCreatePostBounce)}
            >
              create post
            </Link>
          </li>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link
              to="/terms"
              className={`block ${termsBounce}`}
              onClick={() => handleBounce(setTermsBounce)}
            >
              terms
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
