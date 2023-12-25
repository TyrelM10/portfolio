import React from "react";
// import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";
import { Collapse } from "@material-tailwind/react";

const Tech = () => {
  const [IsMobile, setIsMobile] = useState(false);
  // --------- Collapse State Handling
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  // ---------------------------------------
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

          <div className="flex items-center" onClick={toggleOpen}>
            <h2 className={styles.sectionHeadText}>My Skills</h2>
            {open ? (
              <svg
                className="ml-auto w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"
                />
              </svg>
            ) : (
              <svg
                className="ml-auto w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
                />
              </svg>
            )}
          </div>
          <div className="h-0 w-100 border-x-6 border-x-transparent border-b-[3px] border-b-white"></div>
        </motion.div>
        <Collapse open={open}>
          <div className="flex flex-row flex-wrap grid grid-cols-8 py-5 justify-center gap-10">
            {technologies.map((technology) => (
              <div
                // className="w-28 h-28"
                className="w-30 h-30 flex flex-col flex-wrap justify-stretch items-center"
                key={technology.name}
                // style={{ display: "inline-grid" }}
              >
                {/* <BallCanvas icon={technology.icon}></BallCanvas> */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 object-contain bg-white-100 rounded-[20px] py-1 px-2"
                />
                <span>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    {technology.name}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </Collapse>
      </>
    );
  } else {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Listing My IT Skills</p>
          <div className="flex items-center" onClick={toggleOpen}>
            <h2 className={styles.sectionHeadText}>My Skills</h2>
            {open ? (
              <svg
                className="ml-auto w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"
                />
              </svg>
            ) : (
              <svg
                className="ml-auto w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
                />
              </svg>
            )}
          </div>
          <div className="h-0 w-100 border-x-6 border-x-transparent border-b-[3px] border-b-white"></div>
        </motion.div>
        <Collapse open={open}>
          <div className="flex flex-row flex-wrap grid grid-cols-2 gap-3 items-center justify-evenly">
            {technologies.map((technology) => (
              <div
                className="flex justify-stretch gap-2 items-center py-1"
                key={technology.name}
              >
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
        </Collapse>
      </>
    );
  }
};

export default SectionWrapper(Tech, "tech");
