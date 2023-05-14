"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

const Template = ({ children }: any, ref: any) => {
  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default forwardRef(Template);
