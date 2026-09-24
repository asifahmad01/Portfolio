import { technologies, skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { styles } from "../styles";

let IconCard = (props) => {
  let { icon, index } = props;
  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="xs:w-[125px] w-28"
      >
        <motion.div
          variants={zoomIn(index * 0.25, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className=" bg-tertiary rounded-[20px] py-5 px-1 min-h-[25px] flex justify-evenly items-center flex-col">
            <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Tech stack</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-8 flex flex-row justify-center flex-wrap gap-10">
        {technologies.map((technology, index) => (
          <IconCard
            key={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", index * 0.08, 0.6)}
            className="bg-tertiary rounded-2xl p-6 border border-white/5"
          >
            <h3 className="text-white font-bold text-[18px]">{category.title}</h3>
            <p className="mt-3 text-secondary text-[15px] leading-[26px]">
              {category.skills}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
