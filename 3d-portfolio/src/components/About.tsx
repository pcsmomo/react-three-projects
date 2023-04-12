import React, { FC } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface ServiceCardProps {
  title: string;
  index: number;
  icon: string;
}
const ServiceCard: FC<ServiceCardProps> = ({ title, index, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(100)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Noah, and I am a skilled frontend developer with a degree in
        Computer Science. With 4 years of experience in web development, I have
        developed a strong expertise in HTML, CSS, and JavaScript, as well as
        experience with modern frontend frameworks such as React and Vue.js. I
        am passionate about creating engaging and intuitive user experiences,
        and I strive to stay up-to-date with the latest trends and technologies
        in the industry. My strong problem-solving skills and attention to
        detail allow me to deliver high-quality code and meet project deadlines.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
