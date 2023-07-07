import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, IsMobile }) => {
  // console.log("IN MOBILE VIEW :", IsMobile);
  if (!IsMobile) {
    return (
      <Tilt className="xs:w-[200px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain bg-white-100 rounded-[20px] py-1 px-2"
            />
            <h3 className="text-white text-[15px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  } else {
    return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-[25%] flex flex-col items-center"
      >
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 object-contain bg-white-100 rounded-[20px] py-1 px-2"
        />
        <h3 className="text-white text-[15px] font-bold text-center">
          {title}
        </h3>
      </motion.div>
    );
  }
};

const About = () => {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
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
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>I am Tyrel Jonathan Menezes</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a Python Developer currently pursuing Masters in Artificial
          Intelligence from University of Aberdeen and has exposure in Python,
          chatbots and web development in Flask and Django.
        </motion.p>
      </motion.div>
      <div className= {IsMobile? "flex flex-col-reverse flex-wrap gap-10 justify-center items-center" :"flex flex-wrap gap-10 justify-center items-center"}>
        <div className={IsMobile ? "flex flex-wrap items-center gap-10":"mt-5 grid grid-cols-3 gap-10"}>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            IsMobile={IsMobile}
          />
        ))}
        </div>
        <img 
       src="/src/assets/tyrelprofile.png"
       alt="profile_image"
       className={IsMobile ? "w-[60%] rounded-[30px] mt-5 border-[5px] border-black drop-shadow-md flex justify-center items-center" :"w-[30%] rounded-[30px] mt-5 border-[5px] border-black drop-shadow-md flex items-center"}/>
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
