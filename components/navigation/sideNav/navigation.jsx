/* eslint-disable @next/next/link-passhref */
import { motion } from "framer-motion";
import { CloseButton } from "./../../closeButton";
import Menu from "./../../menu";
import TwitterImage from "./../../icons/twitter";
import GithubImage from "./../../icons/github";
import LinkedinImage from "./../../icons/linkedin";
import Link from "next/link";
import { useRef } from "react";

const slideIn = {
  left: "0",
  transition: { duration: 0.5 },
};

const slideOut = {
  left: "-300px",
  transition: { duration: 0.5 },
};

const handleAnimationStart = (ref, isOpen) => {
  if (isOpen) ref.current.style.display = "block";
};

const handleAnimationEnd = (ref, isOpen) => {
  if (!isOpen) ref.current.style.display = "none";
};

function SideBar({ isOpen, onCloseSideBar }) {
  const sidebarRef = useRef();
  return (
    <motion.div
      initial={slideOut}
      animate={isOpen ? slideIn : slideOut}
      className="side-nav"
      ref={sidebarRef}
      onAnimationComplete={() => handleAnimationEnd(sidebarRef, isOpen)}
      onAnimationStart={() => handleAnimationStart(sidebarRef, isOpen)}
    >
      <div className=" d-flex my-2">
        <Link href="/">
          <span className="logo">Chidiebere</span>
        </Link>
        <CloseButton toggle={onCloseSideBar} />
      </div>
      <Menu />
      <div className="w-80 d-flex justify-content-between social-media">
        <TwitterImage />
        <GithubImage />
        <LinkedinImage />
      </div>
    </motion.div>
  );
}

export default SideBar;
