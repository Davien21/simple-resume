import React from "react";
import { motion } from "framer-motion";

function PageTransition({ routeChanging }) {
  return (
    <motion.div
      className="page-transition"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={
        routeChanging
          ? { opacity: 0 }
          : {
              opacity: 1,
              transition: { ease: easing, duration: 2 },
            }
      }
    >
      Hi Chidi!
    </motion.div>
  );
}

export default PageTransition;
