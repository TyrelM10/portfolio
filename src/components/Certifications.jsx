import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Carousel } from "react-responsive-carousel";
import { certificates } from "../constants";
import { useState, useEffect } from "react";
import { Collapse } from "@material-tailwind/react";

const Certificates = ({ certificates, isMob }) => {
  return (
    <Carousel
      className={
        "flex flex-col rounded-xl justify-center items-center rounded-[50px] bg-edu mt-5"
      }
      autoplay={true}
      width={isMob ? "90%" : "60%"}
      thumbWidth={50}
      showIndicators={isMob ? false : true}
      showThumbs={isMob ? true : false}
      showStatus={false}
    >
      {certificates.map((cert) => (
        <div
          key={cert.title}
          className={
            isMob
              ? "flex flex-col justify-center items-center"
              : styles.certificateDiv
          }
        >
          <img
            className={isMob ? "mt-5 w-[75%]" : "m-5 h-full w-[50%]"}
            src={cert.image}
            alt={cert.title}
          />
          {/* <h4 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {cert.title}
          </h4> */}
        </div>
      ))}
    </Carousel>
  );
};

const Certifications = () => {
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

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubExText}>My achievements</p>

        <div className="flex items-center" onClick={toggleOpen}>
          <h2 className={styles.sectionHeadExText}>Certifications</h2>
          {open ? (
            <svg
              className="ml-auto w-20 h-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              stroke="black"
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
              stroke="black"
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
        <div className="h-0 w-100 border-x-6 border-x-transparent border-b-[3px] border-b-black"></div>
      </motion.div>
      <Collapse open={open}>
        <Certificates certificates={certificates} isMob={IsMobile} />
      </Collapse>
    </>
  );
};

export default SectionWrapper(Certifications, "cert");
