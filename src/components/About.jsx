import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";

let ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} `}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Python Full-Stack Developer with hands-on experience building production-grade systems using FastAPI, PostgreSQL,
        React.js/Next.js, and TypeScript. Skilled in designing async REST APIs, RBAC workflows, and deploying
        services with Docker &amp; Kubernetes on AWS. Passionate about Generative AI — integrating OpenAI and LangChain
        to build intelligent, real-world applications. Let&apos;s build something impactful together!
      </motion.p>

      <div className="mt-6">
        <a
          href="https://drive.google.com/file/d/1rqmYdVVK1vY9H1vpmPfHTxgwBy9lV3uq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#915eff] hover:bg-[#7d4edb] text-white font-semibold text-[16px] shadow-lg hover:shadow-[#915eff]/40 transition-all duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
