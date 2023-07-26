import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Browse from "./components/Browse";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";
import WatchHere from "./components/WatchHere";
import Channel from "./components/Channel";
function App() {
  const [category, setCategory] = useState("new");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/browse");
    }
  }, [pathname]);
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Sidebar setCategory={setCategory} category={category} />
        <Routes>
          <Route path="/Browse" element={<Browse category={category} />} />
          <Route path="/watch/:videoId" element={<WatchHere />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
