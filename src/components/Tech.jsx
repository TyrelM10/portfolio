import React from "react";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Listing My IT Skills</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name} style={{display:"inline-grid"}}>
          <BallCanvas icon={technology.icon}></BallCanvas>
          <span><p style={{display:"flex", justifyContent:"center"}}>{technology.name}</p></span>
        </div>
        
      ))}
    </div>
    </>
    
  )
}

export default SectionWrapper(Tech, "tech");
