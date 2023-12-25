import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Certifications,
} from "./components";
const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("canvas");
  const main = document.getElementsByTagName("body")[0].style;
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      main.display = "block";
      setLoading(false);
    }, 3000);
  }
  const [IsMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 774px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    !loading && (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className= { IsMobile ? "bg-mob-hero bg-[length:500px_380px] bg-no-repeat bg-bottom" : "bg-hero-pattern bg-contain bg-no-repeat bg-center"}>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education />
          <Experience />
          <Tech />
          <Certifications />
          {/* <Works /> */}
          {/* <Feedbacks/> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    )
  );
};

export default App;
