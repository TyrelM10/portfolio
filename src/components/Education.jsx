import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { degrees } from "../constants";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// CAROUSEL CARD CODE //
// import { Carousel } from "@material-tailwind/react";
import { Collapse } from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";

const Card = ({ degrees, IsMobile }) => {
  if (!IsMobile) {
    return degrees.map((degree) => (
      <div
        key={degree.date}
        className="mt-5 flex flex-wrap justify-evenly items-center gap-10"
      >
        <div className="flex rounded-lg border border-white bg-primary md:w-xl md:flex-row">
          <img
            className="h-96 w-full bg-tertiary rounded-t-lg object-fill md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
            src={degree.logo}
            alt=""
          />
          <div className="flex flex-col justify-start p-5">
            <h4 className="mb-2 text-xl font-medium">{degree.type}</h4>
            <span className="mb-1 text-l font-medium italic">
              {degree.school}
            </span>
            <p className="mb-4 text-base">{degree.description}</p>
            <p className="text-s">{degree.date}</p>
          </div>
        </div>
      </div>
    ));
  } else {
    return (
      <Carousel
        className="rounded-xl"
        autoplay={true}
        showThumbs={false}
        showStatus={false}
      >
        {degrees.map((degree) => (
          <div
            className="m-8 flex flex-col rounded-lg border border-white bg-primary md:w-xl md:flex-row justify-evenly items-center"
            key={degree.date}
          >
            <img
              className="h-85 w-full bg-tertiary rounded-t-lg object-fill md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
              src={degree.logo}
              alt=""
            />
            <div className="flex flex-col flex-wrap justify-center p-5 items-center">
              <h4 className="mb-2 text-base font-medium text-neutral-800 dark:text-neutral-50 whitespace-wrap">
                {degree.type}
              </h4>
              <span className="mb-1 text-sm font-medium text-neutral-800 dark:text-neutral-50">
                {degree.school}
              </span>
              <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                {degree.description}
              </p>
              <p className="text-base text-neutral-500 dark:text-neutral-300">
                {degree.date}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
};

const Education = () => {
  const [IsMobile, setIsMobile] = useState(false);

  // --------- Collapse State Handling
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  // ---------------------------------------

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
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I have studied</p>
        <div className="flex items-center" onClick={toggleOpen}>
          <h2 className={styles.sectionHeadText}>My Education</h2>
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
        <div className="h-0 w-100 border-x-6 border-x-transparent border-b-[3px] border-b-white-1000"></div>
      </motion.div>
      <Collapse open={open}>
        <Card degrees={degrees} IsMobile={IsMobile} />
      </Collapse>
    </>
  );
};

export default SectionWrapper(Education, "education");
