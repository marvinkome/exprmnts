"use client";
import React, { useEffect } from "react";
import cls from "classnames";
import Gallery from "./gallery";
import Stories from "./stories";
import { motion } from "framer-motion";
import { usePopper } from "react-popper";
import { useMedia } from "react-use";

const colors = [
  {
    name: "yellow",
    bg: "#feffd6",
    text: "#7b7d40",
  },
  {
    name: "purple",
    bg: "#dcd6ff",
    text: "#49407d",
  },
  {
    name: "green",
    bg: "#ddffd6",
    text: "#4a7d40",
  },
  {
    name: "blue",
    bg: "#d6e6ff",
    text: "#40577d",
  },
  {
    name: "red",
    bg: "#ffd6d6",
    text: "#7d4040",
  },
];

type CardProps = {
  title: string;
  date: string;
  color?: string;
  isActive?: boolean;
  setIsActive?: (value: boolean) => void;
  children?: React.ReactNode;
};
const Card = React.forwardRef(function CardInner(props: CardProps, ref: React.ForwardedRef<any>) {
  const colorObj = colors.find((c) => c.name === props.color);

  return (
    <>
      <motion.article
        ref={ref}
        animate={props.isActive ? { zIndex: 2 } : { zIndex: 1, transition: { delay: 0.2 } }}
        onClick={() => props.setIsActive?.(!props.isActive)}
        style={{ color: colorObj?.text, backgroundColor: colorObj?.bg }}
        className={cls("group relative w-full h-full rounded-xl p-3 flex flex-col shadow", {
          "cursor-pointer": !props.isActive && props.setIsActive,
          "transition-transform duration-150 ease-in hover:scale-[0.97]": !props.isActive && props.setIsActive,
        })}
      >
        <div className="mb-4">
          <h1 className="text-base mb-1">{props.title}</h1>
          <p className="text-xs font-medium uppercase opacity-60">{props.date}</p>
        </div>

        {props.children}
      </motion.article>
    </>
  );
});

type GalleryCardProps = {
  isActive?: boolean;
  title: string;
  date: string;
  color: string;
  images: [string, string, string, string];
};
export const GalleryCard = (props: GalleryCardProps) => {
  const [isActive, setIsActive] = React.useState(!!props.isActive);

  return (
    <Card isActive={isActive} color={props.color} title={props.title} date={props.date} setIsActive={(value) => setIsActive(value)}>
      <Gallery isActive={isActive} images={props.images} />
    </Card>
  );
};

type StoryCardProps = {
  isActive?: boolean;
  title: string;
  date: string;
  color: string;
  stories: { image: string; title?: string; content?: string }[];
};
export const StoryCard = (props: StoryCardProps) => {
  const contentEl = React.useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(!!props.isActive);

  const [rootEl, setRootEl] = React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(rootEl, popperElement, {
    placement: "left-end",
  });

  const isMd = useMedia("(min-width: 768px)");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const content = contentEl.current;
      const target = e.target as any;
      const card = rootEl;

      if (content && !content.contains(target) && !card?.contains(target)) {
        if (isActive) {
          setIsActive(false);
        }
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isActive, rootEl]);

  return (
    <>
      <Card
        ref={setRootEl}
        isActive={isActive}
        color={props.color}
        title={props.title}
        date={props.date}
        setIsActive={(value) => setIsActive(value)}
      />

      {isActive && (
        <>
          {isMd ? (
            <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="z-[10]">
              <motion.div
                ref={contentEl}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0,
                  damping: 18,
                  stiffness: 120,
                  type: "spring",
                }}
                className="bg-white w-[400px] shadow-[0px_0px_50px_-12px_rgba(0,0,0,0.5)] p-[0.125rem] mx-1 rounded-xl"
              >
                <Stories stories={props.stories} />
              </motion.div>
            </div>
          ) : (
            <div className="fixed inset-0 z-[10]">
              <div className="bg-black opacity-80 h-full w-full absolute inset-0" />
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  ref={contentEl}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0,
                    damping: 18,
                    stiffness: 120,
                    type: "spring",
                  }}
                  className="bg-white max-w-xs w-full shadow-[0px_0px_50px_-12px_rgba(0,0,0,0.5)] p-1 mx-1 rounded-xl"
                >
                  <Stories stories={props.stories} />
                </motion.div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Card;
