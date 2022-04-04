import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import useLoad from "./hooks/customHook";
import Dashboard from "./pages/Dashboard";

export const ThemeContext = React.createContext([]);

function App() {
  const [review, setReview] = useLoad();
  return (
    <>
      <Navbar />
      <ThemeContext.Provider value={review}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
