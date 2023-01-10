"use client";
import React from "react";
import { motion } from "framer-motion";

const animationProps = {
  0: {
    position: "translate-x-[-30%] translate-y-[-40%] md:translate-x-[-40%]",
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
    position: "translate-x-[30%] translate-y-[-40%] md:translate-x-[40%]",
    rotate: {
      default: "rotate-[-3deg] group-hover:rotate-[-5deg]",
      active: "rotate-[7deg]",
    },

    transition: { delay: 0.02, damping: 18, stiffness: 120, type: "spring" },
  },
  2: {
    position: "translate-x-[-35%] translate-y-[44%]",
    rotate: {
      default: "rotate-[2deg] group-hover:rotate-[-2deg]",
      active: "rotate-[2deg]",
    },
    transition: { delay: 0.04, damping: 18, stiffness: 120, type: "spring" },
  },
  3: {
    position: "translate-x-[35%] translate-y-[44%]",
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
      <div className="grow relative flex justify-center items-center h-full">
        {props.images.map((image, index) => {
          const animation = animationProps[index as 0 | 1 | 2 | 3];

          return (
            <motion.div key={index} layoutId={image + id} className={"absolute h-[85%] w-full"}>
              <div className={`w-full h-full transition-transform duration-150 ease-in ${animation.rotate.default}`}>
                <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full bg-cover bg-center overflow-hidden rounded-lg" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {props.isActive && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)] md:bg-transparent">
          <div className="relative flex justify-center items-center h-full">
            {props.images.map((image, index) => {
              const animation = animationProps[index as 0 | 1 | 2 | 3];

              return (
                <motion.div
                  key={index}
                  layoutId={image + id}
                  transition={animation.transition}
                  className={`absolute w-[220px] md:w-[460px] h-[120px] md:h-[280px]`}
                >
                  <div className={`h-full overflow-hidden rounded-2xl shadow-lg ${animation.rotate.active} ${animation.position}`}>
                    <div style={{ backgroundImage: `url(${image})` }} className="w-full h-full bg-cover bg-center" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
