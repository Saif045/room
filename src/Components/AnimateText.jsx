import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ p }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {p.map((letter, b) => (
        <motion.span variants={item} key={b}>
         {letter === " " ? "\u00A0" :  letter }
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;
