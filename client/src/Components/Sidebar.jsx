import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-32 bg-[#101010] text-white font-mono">
      <div className="flex justify-center p-4">
        <img src="/logo.png" alt="^_^" className="object-cover h-14" />
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link to="/" className="block">
              Home
            </Link>
          </li>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link to="/create-post" className="block">
              Create Post
            </Link>
          </li>
          <li className="p-4 hover:bg-[#f2f2f2] hover:text-black text-sm hover:cursor-pointer hover:rounded-xl">
            <Link to="/terms" className="block">
              Terms
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
