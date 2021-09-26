import React, { useRef, useEffect } from "react";
import styles from "./segmentedControl.module.css";
import { motion } from "framer-motion";

function SegmentedControl({ active, controls, onSetActiveControl }) {
  const sliderWidth = Math.floor((1 / controls.length) * 100) - 2 + "%";
  const sliderLeftPosition =
    Math.ceil((controls.indexOf(active) / controls.length) * 100) + 1 + "%";

  const controlClasses = (control) =>
    control == active ? `${styles.active}` : "";

  return (
    <ul className={styles.container}>
      <motion.div
        initial={{ left: 0, width: sliderWidth }}
        animate={{ left: sliderLeftPosition }}
        className={styles.slider}
      ></motion.div>
      {controls.map((control) => (
        <li
          onClick={() => onSetActiveControl(control)}
          key={control}
          className={controlClasses(control)}
        >
          <span>{control}</span>
        </li>
      ))}
    </ul>
  );
}

export default SegmentedControl;
