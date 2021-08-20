/* eslint-disable @next/next/no-img-element */
import { menuIcon } from "../../../images";
import { motion } from "framer-motion";

function MenuToggle({ onToggleMenu }) {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      onClick={onToggleMenu}
      className="pointer menu_toggle"
    >
      <img
        width="30px"
        height="30px"
        src={menuIcon}
        alt=""
      />
    </motion.div>
  );
}

export default MenuToggle;
