import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkedinProfile } from "../assets";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const linkedinUrl = "https://www.linkedin.com/in/safari-germain/";

  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()}
        className="mb-10"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          INTRODUCTION
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      {/* Combined Profile and Intro Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-10">
        {/* Profile Picture */}
        <img
          src={linkedinProfile}
          alt="Safari Germain"
          className="w-36 h-36 rounded-full border-4 border-primary object-cover shadow-lg"
        />

        {/* Name, Title, and Intro Container */}
        <div className="flex flex-col text-center md:text-left flex-1">
          {/* Name and Title */}
          <div>
            <h2 className={`${styles.sectionHeadText} text-white text-3xl md:text-4xl drop-shadow`}>Safari Germain</h2>
            <p className={`${styles.sectionSubText} text-gray-300 text-lg md:text-xl drop-shadow mt-2`}>ML Engineer @Admind | Microsoft Certified Azure Data Scientist</p>
            {/* View Profile Button */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#0A66C2] text-white font-bold py-2 px-6 rounded-full hover:bg-[#084B9C] transition duration-300 shadow-md"
            >
              View Linkedin profile
            </a>

            {/* Introductory text */}
            <p
              className='mt-6 text-secondary text-[17px] leading-[30px]'
            >
              I am a Machine Learning Engineer and the Founder of Stratify AI Co which is an agency that provides AI/ML solutions to businesses. 
              My expertise spans across cloud services, LLMs, deep learning, NLP, and computer vision applications. 
              I'm passionate about leveraging cutting-edge technologies to solve complex business problems and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
