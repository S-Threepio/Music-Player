import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <div className="flex flex-col m-0 overflow-y-hidden text-white">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
