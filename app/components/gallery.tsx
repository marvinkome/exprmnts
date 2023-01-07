"use client";
import React from "react";
import { motion } from "framer-motion";

const animationProps = {
  0: {
    position: "left-[25%] top-[30%]",
    rotate: {
      default: "rotate-[3deg] group-hover:rotate-[4deg]",
      active: "rotate-[-6deg]",
    },
    transition: {
      delay: 0,
      damping: 18,
      stiffness: 120,
      type: "spring",
    },
  },
  1: {
    position: "left-[50%] top-[30%]",
    rotate: {
      default: "rotate-[-3deg] group-hover:rotate-[-5deg]",
      active: "rotate-[7deg]",
    },

    transition: { delay: 0.02, damping: 18, stiffness: 120, type: "spring" },
  },
  2: {
    position: "left-[25%] top-[45%]",
    rotate: {
      default: "rotate-[2deg] group-hover:rotate-[1deg]",
      active: "rotate-[2deg]",
    },
    transition: { delay: 0.04, damping: 18, stiffness: 120, type: "spring" },
  },
  3: {
    position: "left-[50%] top-[45%]",
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
  const id = React.useId();
  return (
    <>
      <div className="grow relative">
        {props.images.map((image, index) => {
          const animation = animationProps[index as 0 | 1 | 2 | 3];

          return (
            <motion.div key={index} layoutId={image + id} className={"absolute h-full w-full"}>
              <div className={`${animation.rotate.default} h-full overflow-hidden rounded-lg transition-transform duration-150 ease-in`}>
                <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full bg-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {props.isActive && (
        <div className="fixed inset-0 flex justify-center items-center">
          {props.images.map((image, index) => {
            const animation = animationProps[index as 0 | 1 | 2 | 3];

            return (
              <motion.div
                key={index}
                layoutId={image + id}
                transition={animation.transition}
                className={`absolute w-[460px] h-[280px]  ${animation.position}`}
              >
                <div className={`h-full overflow-hidden rounded-2xl shadow-lg ${animation.rotate.active}`}>
                  <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full bg-cover bg-center" />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Gallery;
