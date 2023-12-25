import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { Collapse } from "@material-tailwind/react";
import { useState } from "react";
// import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    dateClassName={"bg-primary"}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  // --------- Collapse State Handling
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  // ---------------------------------------
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubExText}>What I have done so far</p>
        <div className="flex items-center" onClick={toggleOpen}>
          <h2 className={styles.sectionHeadExText}>Work Experience</h2>
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
        <div className="mt-2 flex flex-col">
          <VerticalTimeline lineColor={"#100d25"} layout="1-column-left">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </Collapse>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
