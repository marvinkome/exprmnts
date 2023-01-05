"use client";
import React from "react";
import cls from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

const animationProps = {
  0: {
    zIndex: "z-[14]",
    position: "left-[-40%] top-[-40%]",
    rotate: {
      default: "rotate-[3deg] group-hover:rotate-[4deg]",
      active: "rotate-[-6deg]",
    },
    transition: { delay: 0, damping: 18, stiffness: 120, type: "spring" },
  },
  1: {
    zIndex: "z-[15]",
    position: "left-[40%] top-[-40%]",
    rotate: {
      default: "rotate-[-3deg] group-hover:rotate-[-5deg]",
      active: "rotate-[7deg]",
    },

    transition: { delay: 0.02, damping: 18, stiffness: 120, type: "spring" },
  },
  2: {
    zIndex: "z-[16]",
    position: "left-[-40%] top-[40%]",
    rotate: {
      default: "rotate-[2deg] group-hover:rotate-[1deg]",
      active: "rotate-[2deg]",
    },
    transition: { delay: 0.04, damping: 18, stiffness: 120, type: "spring" },
  },
  3: {
    zIndex: "z-[17]",
    position: "left-[40%] top-[40%]",
    rotate: {
      default: "rotate-[0deg] group-hover:rotate-[1deg]",
      active: "rotate-[0deg]",
    },
    transition: { delay: 0.05, damping: 14, stiffness: 120, type: "spring" },
  },
};

type GalleryProps = {
  isActive: boolean;
  images: [string, string, string, string];
};
const Gallery = (props: GalleryProps) => {
  return (
    <div
      className={cls({
        "grow relative z-[0]": !props.isActive,
        "fixed w-screen h-screen inset-0 flex justify-center items-center z-20": props.isActive,
      })}
    >
      {props.images.map((image, index) => {
        const animation = animationProps[index as 0 | 1 | 2 | 3];

        return (
          <motion.div
            key={index}
            layout
            transition={animation.transition}
            className={cls({
              absolute: true,
              "inset-0": !props.isActive,
              [`w-[460px] h-[280px] ${animation.zIndex}`]: props.isActive,
            })}
          >
            <div
              className={cls({
                "relative h-full overflow-hidden": true,
                [`${animation.rotate.default} rounded-lg transition-transform duration-150 ease-in`]: !props.isActive,
                [`${animation.rotate.active} shadow-lg rounded-2xl ${animation.position}`]: props.isActive,
              })}
            >
              <Image src={image} alt="gallery image 1" fill className="object-cover" priority />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Gallery;
