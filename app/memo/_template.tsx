"use client";

import { motion } from "framer-motion";
import { useId } from "react";

const Template = ({ children }: any) => {
  const id = useId();
  console.log(id);

  return (
    <motion.div
      key={id}
      className="w-screen h-full p-8"
      initial={{ background: "#fff" }}
      exit={{ backgroundColor: "#f023e0", transition: { duration: 2 } }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
