import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <div className=" mb-2 flex flex-row flex-wrap justify-center gap-4 ">
        {socialMedia.map((social) => (
          <div
            className="h-10 w-10 cursor-pointer"
            key={social.title}
            onClick={() => window.open(social.socialLink, "_blank")}
          >
            <img
              src={social.icon}
              alt="icon"
              className="w-10 h-10 object-contain"
            />
          </div>
        ))}
      </div>
      <motion.div variants={textVariant()} className="pb-5 text-center">
        {/* <h5>Made By Ansar</h5> */}
      </motion.div>
    </>
  );
};
export default Footer;
