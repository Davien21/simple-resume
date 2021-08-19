import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const CloseButton = ({ strokeColor, toggle, className, ...rest }) => {
  className
    ? (className = `menu_toggle ${className}`)
    : (className = "menu_toggle");
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      className={className}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path stroke="hsl(0, 0%, 18%)" d="M 3 16.5 L 17 2.5" />
        <Path stroke="hsl(0, 0%, 18%)" d="M 3 2.5 L 17 16.346" />
      </svg>
    </motion.div>
  );
};
