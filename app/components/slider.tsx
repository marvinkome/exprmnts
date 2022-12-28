"use client";
import React, { useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

const Slider = () => {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState(0);

  const onDragEnd = (e: any, info: PanInfo) => {
    console.log("Drag end", { offset: info.offset.x });
  };
  const onPanEnd = (e: any, info: PanInfo) => {
    console.log("Pan end", { offset: info.offset.x });
  };

  return (
    <motion.div className="w-full max-w-md flex shadow-[0_4px_8px_0_rgb(0_2_71_/_10%)] rounded-full p-1 items-center ">
      <button className="w-9 h-9 inline-flex items-center justify-center rounded-full hover:bg-zinc-100 transition-all duration-300">
        <FiMinus />
      </button>

      <div className="grow px-px" ref={constraintRef}>
        <motion.button
          className="w-fit bg-black rounded-full px-4 py-2"
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          onDragEnd={onDragEnd}
          onPanEnd={onPanEnd}
        >
          <p className="text-white text-sm">Days</p>
        </motion.button>
      </div>

      <button className="w-9 h-9 inline-flex items-center justify-center rounded-full hover:bg-zinc-100 transition-all duration-300">
        <FiPlus />
      </button>
    </motion.div>
  );
};

export default Slider;
