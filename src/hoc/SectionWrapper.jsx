import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer, slideIn } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    let classNames = [];
    if (idName === "about") {
      classNames.push("bg-about-me");
    } else if (idName === "experience") {
      classNames.push("bg-experience");
    } else if (idName === "tech") {
      classNames.push("bg-tech");
    } else if (idName === "education") {
      classNames.push("bg-edu");
    }

    return (
      //slideIn("left", "tween", 0.2, 1)
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} ${classNames.join(
          " "
        )} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
          {/* <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}> */}
          <Component />
          {/* </motion.div> */}
      </motion.section>
    );
  };

export default StarWrapper;
