import React from "react";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

const Tech = () => {
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
  if (!IsMobile) {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Listing My IT Skills</p>
          <h2 className={styles.sectionHeadText}>My Skills</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              className="w-28 h-28"
              key={technology.name}
              style={{ display: "inline-grid" }}
            >
              <BallCanvas icon={technology.icon}></BallCanvas>
              <span>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  {technology.name}
                </p>
              </span>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Listing My IT Skills</p>
          <h2 className={styles.sectionHeadText}>My Skills</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap grid grid-cols-2 gap-3 items-center justify-evenly">
          {technologies.map((technology) => (
            <div className="flex justify-stretch gap-2 items-center py-1" key={technology.name}>
            <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain bg-white-100 rounded-[20px] py-1 px-2"
              />
              <span>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  {technology.name}
                </p>
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default SectionWrapper(Tech, "tech");
