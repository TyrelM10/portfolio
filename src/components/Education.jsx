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
            <h4 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              {degree.type}
            </h4>
            <span className="mb-1 text-l font-medium text-neutral-800 dark:text-neutral-50 italic">
              {degree.school}
            </span>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {degree.description}
            </p>
            <p className="text-s text-neutral-500 dark:text-neutral-300">
              {degree.date}
            </p>
          </div>
        </div>
      </div>
    ));
  } else {
    return (<Carousel className="rounded-xl" autoplay={true} showThumbs={false} showStatus={false}>
        {degrees.map((degree) => (
        <div className="m-8 flex flex-col rounded-lg border border-white bg-primary md:w-xl md:flex-row justify-evenly items-center"
            key={degree.date}>
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
        </Carousel>)

    
  }
};

const Education = () => {
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
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I have studied</p>
        <h2 className={styles.sectionHeadText}>My Education</h2>
      </motion.div>

      <Card degrees={degrees} IsMobile={IsMobile} />
    </>
  );
};

export default SectionWrapper(Education, "education");