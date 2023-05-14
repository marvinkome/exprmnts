"use client";

import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";

const container = {
  enter: {
    x: "50%",
  },
  current: {
    x: 0,
  },
  exit: {
    x: "-50%",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const title = {
  enter: {
    y: 30,
  },
  current: {
    y: 0,
  },
  exit: {
    y: -30,
  },
};

const PageWrapper = ({ children, ...rest }: any, ref: any) => {
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="enter"
      animate="current"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.8 }}
      {...rest}
    >
      <motion.h1 variants={title} className="text-2xl font-semibold">
        Air Catcher
      </motion.h1>

      {children}
    </motion.div>
  );
};

export default forwardRef(PageWrapper);
