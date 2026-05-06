// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"

function App() {
  return (
    <BrowserRouter>

      <TopHeader />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/doctors" element={<Doctors />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;