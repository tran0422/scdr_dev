import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Dogs from "./pages/Dogs.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="entirePage">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/us" element={<About />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
