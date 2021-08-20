import { motion } from "framer-motion";
import { CloseButton } from "./../../closeButton";
import Menu from "./../../menu";

const slideIn = {
  left: "0",
  transition: { duration: 0.5 },
};

const slideOut = {
  left: "-140%",
  transition: { duration: 0.5 },
};

function SideBar({ isOpen, onCloseSideBar }) {
  return (
    <motion.div
      initial={slideOut}
      animate={isOpen ? slideIn : slideOut}
      className="side-nav"
    >
      <div className="d-flex my-2">
        <CloseButton toggle={onCloseSideBar} />
      </div>
      <Menu />
    </motion.div>
  );
}

export default SideBar;
