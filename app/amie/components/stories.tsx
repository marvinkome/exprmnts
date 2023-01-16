"use client";
import React from "react";
import cls from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 380 : -380,
    };
  },
  center: {
    x: 0,
    zIndex: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -380 : 380,
      zIndex: 0,
    };
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const timeout = (callback: () => void, timeout: number) => {
  let initialTime = Date.now();
  let remaining = timeout;
  let timerId: any = null;

  const resume = () => {
    if (timerId) return;

    initialTime = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };

  const pause = () => {
    if (!timerId) return;

    clearTimeout(timerId);

    timerId = null;
    remaining -= Date.now() - initialTime;
  };

  const clear = () => {
    if (!timerId) return;
    clearTimeout(timerId);
  };

  resume();
  return {
    pause,
    resume,
    clear,
  };
};

type StoryProps = {
  stories: { image: string; title?: string; content?: string }[];
  interval?: number;
};
const Story = (props: StoryProps) => {
  let interval = props.interval || 6000;

  const [timer, setTimer] = React.useState<any>();
  const [isPaused, setIsPaused] = React.useState(false);
  const [[page, direction], setPage] = React.useState([0, 0]);

  const active = wrap(0, props.stories.length, page);

  const paginate = React.useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  React.useEffect(() => {
    const timer = timeout(() => paginate(1), 6000);
    setTimer(timer);

    return () => {
      timer.clear();
    };
  }, [page, paginate]);

  const onPause = () => {
    if (isPaused || !timer) return;

    setIsPaused(true);
    timer.pause();
  };

  const onResume = () => {
    if (!isPaused || !timer) return;

    setIsPaused(false);
    timer.resume();
  };

  const story = props.stories[active];
  return (
    <>
      <div className="max-w-sm max-h-[65vh] w-full h-full relative rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 flex space-x-2 px-3 py-3">
          {props.stories.map((item, idx) => (
            <div key={item.image} className="h-[3px] grow relative overflow-hidden rounded-full">
              <div className="absolute w-full h-full bg-white opacity-40" />
              <div
                className={cls("relative h-full grow", {
                  "bg-white animate-[story-indicator_forwards_linear]": active === idx,
                  "bg-white": active > idx,
                })}
                style={{
                  animationDuration: `${interval}ms`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
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
            transition={{
              x: { type: "spring", stiffness: 100, damping: 19 },
              opacity: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onPointerDown={() => onPause()}
            onPointerUp={() => onResume()}
            onPointerCancel={() => onResume()}
            onPointerOut={() => onResume()}
            onPointerLeave={() => onResume()}
            className="w-full h-full absolute rounded-lg overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `${
                story.title || story.content ? "linear-gradient(0deg, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 70%)," : ""
              } url(${story.image})`,
            }}
          >
            <div className="flex flex-col h-full items-center justify-end p-8">
              <h3 className="text-3xl mb-2 font-semibold text-white">{story.title}</h3>
              <p className="text-center text-white opacity-[0.85] [text-shadow:0_1px_2px_rgb(0_0_0_/_20%)]">{story.content}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-0 bottom-0 left-0 w-1/3 z-10" onClick={() => paginate(-1)} />
        <div className="absolute top-0 bottom-0 right-0 w-1/3 z-10" onClick={() => paginate(1)} />
      </div>
    </>
  );
};

export default Story;
