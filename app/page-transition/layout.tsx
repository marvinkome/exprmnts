"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import PageWrapper from "./page-wrapper";

const Component = ({ children }: any) => {
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

  return (
    <motion.div
      className="w-screen h-full p-8"
      variants={container}
      initial="enter"
      animate="current"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Component key={pathname}>{children}</Component>
    </AnimatePresence>
  );
};

export default Layout;
