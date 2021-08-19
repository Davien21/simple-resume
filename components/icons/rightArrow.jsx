import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { rightArrowIcon } from "../../images";

function RightArrowImage({ className, isHovering }) {
  return (
    <motion.div
      className={className}
      initial={{ x: 0 }}
      animate={
        isHovering
          ? "initial"
          : {
              x: 10,
              transition: {
                duration: 0.75,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }
      }
    >
      <Image alt="" src={rightArrowIcon} width={20} height={20} />
    </motion.div>
  );
}

export default RightArrowImage;
