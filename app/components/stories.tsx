"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
    };
  },
};

const Stories = () => {
  const storyTimer = 6000;
  const items = ["/story-1.jpg", "/story-2.jpg", "/story-3.jpg"];

  const [[page, direction], setPage] = React.useState([0, 0]);
  const activeImage = wrap(0, items.length, page);

  const { time, onTogglePause } = usePausableTime();
  const x = useTransform(time, (value) => `${((value % storyTimer) / storyTimer) * 100 - 100}%`);

  const paginate = React.useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  React.useEffect(() => {
    const cancel = time.on("change", (t) => {
      if (Math.floor(t / storyTimer) > page) {
        paginate(1); // paginate in forward direction
      }
    });
    return () => cancel();
  }, [time, paginate, page]);

  const onPointerDown = () => {
    onTogglePause();
  };

  const onPointerUp = () => {
    onTogglePause();
  };

  return (
    <div className="max-w-[400px] h-[65vh] shadow-xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 z-10 flex space-x-2 px-3 py-3">
        {items.map((item, idx) => (
          <div key={item} className="h-[3px] grow relative overflow-hidden rounded-full">
            <div className="absolute w-full h-full bg-white opacity-40" />
            <motion.div
              className="relative h-full bg-white grow"
              style={{ x: activeImage < idx ? "-100%" : activeImage === idx ? x : "0%" }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          transition={{
            x: {
              type: "spring",
              bounce: 0.23,
              duration: 0.8,
            },
          }}
          className="w-full h-full absolute top-0"
        >
          <Image src={items[activeImage]} alt="story" priority fill className="object-cover" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function usePausableTime() {
  const [isPaused, setIsPaused] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(true);

  const time = useMotionValue(0);
  const timePaused = useMotionValue(0);

  useAnimationFrame((t) => {
    if (isRunning && !isPaused) {
      time.set(t - timePaused.get());
    } else if (isRunning && isPaused) {
      const oldTime = time.get();

      const totalTimePaused = t - oldTime;
      const newTime = t - totalTimePaused;

      timePaused.set(totalTimePaused);
      time.set(newTime);
      setIsPaused(false);
    }
  });

  const onTogglePause = () => {
    if (isRunning) {
      setIsPaused(true);
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  return {
    time,
    isPaused,
    onTogglePause,
  };
}

export default Stories;
