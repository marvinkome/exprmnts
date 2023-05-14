"use client";

import cn from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

const MotionLink = motion(Link);

const link = {
  enter: {
    opacity: 0,
    y: 20,
  },
  current: {
    opacity: 1,
    y: [-20, 0],
    transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  hover: {
    scale: 1.3,
  },
  exit: {},
};
const icon = [
  {
    enter: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: 60,
      opacity: 0,
    },
  },
  {
    enter: {
      y: -60,
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
  },
];
export const CardCta = ({ href }: { href: string }) => {
  return (
    <MotionLink
      href={href}
      variants={link}
      initial="enter"
      animate="current"
      whileHover="hover"
      className="inline-block absolute w-14 h-14 text-center text-2xl bg-neutral-800 text-neutral-200 rounded-full overflow-hidden z-30 -top-[20%]"
    >
      <motion.span
        variants={icon[0]}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex absolute inset-0 items-center justify-center"
      >
        <BiChevronDown />
      </motion.span>

      <motion.span
        variants={icon[1]}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex absolute inset-0 items-center justify-center"
      >
        <BiChevronDown />
      </motion.span>
    </MotionLink>
  );
};

export const Card = ({ enter = {}, current = {}, exit = {}, className }: { enter?: any; current?: any; exit?: any; className?: string }) => {
  return (
    <motion.div
      variants={{ enter, current, exit }}
      initial="enter"
      animate="current"
      exit="exit"
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 }}
      transformTemplate={({ rotate, x, y }) => `rotate(${rotate}) translate(${x}, ${y})`}
      className={cn("w-[21vw] h-[21vw] shrink-0 rounded-xl", className)}
    />
  );
};

const container = {
  enter: {
    bottom: "-50%",
    rotate: 20,
  },
  current: {
    bottom: "-5%",
    rotate: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 1 },
  },
  exit: {},
};
export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className="absolute w-full left-0 right-0" variants={container} initial="enter" animate="current">
      <div className="flex justify-center items-center relative">{children}</div>
    </motion.div>
  );
};
