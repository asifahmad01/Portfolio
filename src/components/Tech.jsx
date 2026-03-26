import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "../utils/motion";
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
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Competencies.
        </h2>
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
    </>
  );
};

export default SectionWrapper(Tech, "");
