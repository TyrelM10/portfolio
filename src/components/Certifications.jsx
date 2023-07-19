import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Carousel } from "react-responsive-carousel";
import { certificates } from "../constants";
import { useState, useEffect } from "react";

const Certificates = ({ certificates, isMob }) => {
  return (
    <Carousel 
    className={"flex flex-col rounded-xl justify-center items-center rounded-[50px] bg-cert"} 
    autoplay={true} 
    width={isMob?"90%":"60%"} 
    thumbWidth={50} 
    showIndicators={isMob?false:true} 
    showThumbs={isMob?true:false} 
    showStatus={false}>
      {certificates.map((cert) => (
        <div key={cert.title} className={isMob ?"flex flex-col justify-center items-center":styles.certificateDiv}>
          <img
            className={isMob ?"mt-5 w-[75%]":"m-5 h-full w-[50%]"}
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
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>
      <Certificates certificates={certificates} isMob={IsMobile} />
    </>
  );
};

export default SectionWrapper(Certifications, "cert");
