"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 450 : -450,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
    };
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Stories = () => {
  const storyTimer = 6000;
  const items = ["/story-1.jpg", "/story-2.jpg", "/story-3.jpg"];

  const [[page, direction], setPage] = React.useState([0, 0]);
  const activeImage = wrap(0, items.length, page);

  const { time, onPause, onResume, onReset } = usePausableTime();
  const x = useTransform(time, (value) => {
    return `${((value % storyTimer) / storyTimer) * 100 - 100}%`;
  });

  const paginate = React.useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
      onReset();
    },
    [page, onReset]
  );

  React.useEffect(() => {
    const cancel = time.on("change", (t) => {
      if (Math.floor(t / storyTimer)) {
        paginate(1); // paginate in forward direction
      }
    });
    return () => cancel();
  }, [time, paginate, page]);

  React.useEffect(() => {
    const callBack = () => {
      onPause();
    };

    document.addEventListener("visibilitychange", callBack);
    return () => document.removeEventListener("visibilitychange", callBack);
  }, [onPause]);

  return (
    <div className="max-w-[400px] h-[65vh] rounded-md overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 z-10 flex space-x-2 px-3 py-3">
        {items.map((item, idx) => (
          <div key={item} className="h-[3px] grow relative overflow-hidden rounded-full">
            <div className="absolute w-full h-full bg-white opacity-40" />
            <motion.div
              className="relative h-full bg-white  grow"
              style={{ x: activeImage < idx ? "-100%" : activeImage === idx ? x : "0%" }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          drag="x"
          exit="exit"
          dragElastic={1}
          initial="enter"
          animate="center"
          custom={direction}
          variants={variants}
          onPointerDown={() => onPause()}
          onPointerUp={() => onResume()}
          onPointerCancel={() => onResume()}
          onPointerOut={() => onResume()}
          onPointerLeave={() => onResume()}
          dragConstraints={{ left: 0, right: 0 }}
          className="w-full h-full absolute top-0"
          transition={{
            x: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image src={items[activeImage]} alt="story" priority fill className="object-cover pointer-events-none rounded-lg" />

          <div className="absolute top-0 bottom-0 w-1/3 z-20" onClick={() => paginate(-1)} />
          <div className="absolute top-0 bottom-0 right-0 w-1/3 z-20" onClick={() => paginate(1)} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function usePausableTime() {
  const [isPaused, setIsPaused] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(true);

  const time = useMotionValue(0);
  const timePaused = React.useRef(0);
  const initialTime = React.useRef(0);

  useAnimationFrame((t) => {
    if (!initialTime.current && !isPaused) {
      initialTime.current = t;
      timePaused.current = 0;
    }
    const timestamp = t - initialTime.current;

    if (isRunning && !isPaused) {
      time.set(timestamp - timePaused.current);
    } else if (isRunning && isPaused) {
      const oldTime = time.get();

      const totalTimePaused = timestamp - oldTime;
      const newTime = timestamp - totalTimePaused;

      timePaused.current = totalTimePaused;

      time.set(newTime);
      setIsPaused(false);
    }
  });

  const onPause = React.useCallback(() => {
    if (isRunning) {
      setIsPaused(true);
      setIsRunning(false);
    }
  }, [isRunning]);

  const onResume = React.useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
    }
  }, [isRunning]);

  const onReset = React.useCallback(() => {
    initialTime.current = 0;
  }, []);

  return {
    time,
    isPaused,
    onPause,
    onResume,
    onReset,
  };
}

export default Stories;
