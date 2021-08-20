import { menuIcon } from "../../../images";
import { motion } from "framer-motion";

function MenuToggle({ onToggleMenu }) {
  return (
    <motion.img
      whileTap={{ scale: 0.85 }}
      onClick={onToggleMenu}
      className="pointer menu_toggle"
      width="30px"
      height="30px"
      src={menuIcon}
      alt=""
    />
  );
}

export default MenuToggle;
