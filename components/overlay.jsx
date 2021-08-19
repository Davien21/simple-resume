import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const style = {
  height: "100vh",
  width: "100%",
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10,
};

const fadeIn = { opacity: 1, transition: { duration: 0.5 } };
const fadeOut = { opacity: 0, transition: { duration: 0.5, delay: 0.5 } };

const handleAnimationStart = (ref, isOpen) => {
  if (isOpen) ref.current.style.display = "block";
};

const handleAnimationEnd = (ref, isOpen) => {
  if (!isOpen) ref.current.style.display = "none";
};

const Overlay = ({ children, isOpen, ...rest }) => {
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <motion.div
      ref={ref}
      onAnimationComplete={() => handleAnimationEnd(ref, isOpen)}
      onAnimationStart={() => handleAnimationStart(ref, isOpen)}
      initial={{ opacity: 0 }}
      animate={isOpen ? fadeIn : fadeOut}
      style={style}
      {...rest}
    ></motion.div>
  );
};

export default Overlay;
