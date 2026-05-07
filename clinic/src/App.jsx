// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Departments from "./pages/Departments"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>

      <TopHeader />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/services" element={<Services />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/Contact" element={<Contact />} />


      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;