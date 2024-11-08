import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="bg-black min-h-screen text-white font-mono flex-1 flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
