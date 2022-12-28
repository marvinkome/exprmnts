"use client";
import React, { useRef } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

type SliderProps = {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};
const Slider = (props: SliderProps) => {
  const min = props.min || 0;
  const max = props.max || 100;

  const [value, setValue] = React.useState(0);

  const constraintRef = useRef<HTMLDivElement | null>(null);
  const trackHandleRef = useRef<HTMLButtonElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const trackHandleX = useMotionValue(0);
  React.useEffect(() => {
    if (!trackRef.current) return;

    let progress = value / (max - min);
    let trackBounds = trackRef.current.getBoundingClientRect();
    trackHandleX.set(progress * trackBounds.width);
  }, [max, min, trackHandleX, value]);

  const onDrag = () => {
    if (!trackHandleRef.current || !trackRef.current) {
      console.error("Dom element not available");
      return;
    }

    const trackHandleBounds = trackHandleRef.current.getBoundingClientRect();
    const middleOfBounds = trackHandleBounds.x + trackHandleBounds.width / 2;

    const trackBounds = trackRef.current.getBoundingClientRect();
    const newProgress = (middleOfBounds - trackBounds.x) / trackBounds.width;

    setValue(newProgress * (max - min));
  };

  const onDragEnd = () => {
    const newValue = Math.ceil(value / 10) * 10;
    setValue(newValue);

    if (!trackRef.current) return;
    let progress = newValue / (max - min);
    let trackBounds = trackRef.current.getBoundingClientRect();
    animate(trackHandleX, progress * trackBounds.width);

    props.onChange?.(newValue);
  };

  return (
    <motion.div className="w-full max-w-md flex shadow-[0_4px_8px_0_rgb(0_2_71_/_10%)] rounded-full p-1 items-center ">
      <button className="w-9 h-9 inline-flex items-center justify-center rounded-full hover:bg-zinc-100 transition-all duration-300">
        <FiMinus />
      </button>

      <div className="grow px-px relative" ref={constraintRef}>
        <div ref={trackRef} className="absolute h-full left-[32.4px] right-[32.6px]" />

        <motion.button
          ref={trackHandleRef}
          className="w-fit bg-black rounded-full px-4 py-2"
          style={{ x: trackHandleX }}
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 50 }}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
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
