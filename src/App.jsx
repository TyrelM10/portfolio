import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { About, Contact , Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('preloader');

  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none";
      setLoading(false);}, 2000);
    }
  return (
    !loading && (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    {/* <Works/> */}
    {/* <Feedbacks/> */}
    <div className="relative z-0">
    {/* <Contact/> */}
    <StarsCanvas/>
    </div>
    </div>
    </BrowserRouter>
    ))
}

export default App