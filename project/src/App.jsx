import React from "react";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Header from "./Components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./Components/Footer";
import Client from "./sections/client"; 

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Client />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
