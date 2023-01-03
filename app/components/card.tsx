"use client";
import React from "react";
import Image from "next/image";
import cls from "classnames";
import { motion } from "framer-motion";

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
    bg: "#40577d",
    text: "#1661da",
  },
  {
    name: "red",
    bg: "#ffd6d6",
    text: "#7d4040",
  },
];

const GalleryCard = () => {
  const [isActive, setIsActive] = React.useState(false);
  const images = ["/story-1.jpg", "/story-2.jpg", "/story-3.jpg", "/story-4.jpg"];

  return (
    <>
      <article
        onClick={() => setIsActive(!isActive)}
        className={cls({
          "group bg-blue-100 text-blue-500 w-72 h-64 rounded-xl p-4 flex flex-col shadow": true,
          "cursor-pointer transition-transform duration-150 ease-in hover:scale-[0.97]": !isActive,
        })}
      >
        <div className="mb-6">
          <h1 className="text-md mb-1">Day out at YamYam</h1>
          <p className="text-xs uppercase">26 Nov</p>
        </div>

        <motion.div
          layout
          transition={{ duration: 0.6 }}
          className={cls({
            "grow relative": !isActive,
            "fixed w-screen h-screen inset-0 flex justify-center items-center": isActive,
          })}
        >
          <motion.div
            layout
            transition={{ duration: 0.4 }}
            className={cls({
              absolute: true,
              "inset-0": !isActive,
              "w-[460px] h-[280px] z-[1]": isActive,
            })}
          >
            <div
              className={cls({
                "relative h-full overflow-hidden": true,
                "rotate-[2deg] rounded-lg transition-transform duration-150 ease-in group-hover:rotate-[3deg]": !isActive,
                "rotate-[-4deg] shadow-lg rounded-2xl left-[-40%] top-[-40%]": isActive,
              })}
            >
              <Image src="/story-1.jpg" alt="story 1" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ duration: 0.5 }}
            className={cls({
              absolute: true,
              "inset-0": !isActive,
              "w-[460px] h-[280px] z-[2]": isActive,
            })}
          >
            <div
              className={cls({
                "relative h-full overflow-hidden": true,
                "rotate-[-2deg] rounded-lg transition-transform duration-150 ease-in group-hover:rotate-[-3deg]": !isActive,
                "rotate-[7deg] shadow-lg rounded-2xl left-[40%] top-[-40%]": isActive,
              })}
            >
              <Image src="/story-2.jpg" alt="story 1" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ duration: 0.6 }}
            className={cls({
              absolute: true,
              "inset-0": !isActive,
              "w-[460px] h-[280px] z-[3]": isActive,
            })}
          >
            <div
              className={cls({
                "relative h-full overflow-hidden": true,
                "rotate-[-1deg] rounded-lg transition-transform duration-150 ease-in group-hover:rotate-[0deg]": !isActive,
                "rotate-[4deg] shadow-lg rounded-2xl left-[-40%] top-[40%]": isActive,
              })}
            >
              <Image src="/story-3.jpg" alt="story 1" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ duration: 0.8 }}
            className={cls({
              absolute: true,
              "inset-0": !isActive,
              "w-[460px] h-[280px] z-[4]": isActive,
            })}
          >
            <div
              className={cls({
                "relative h-full overflow-hidden": true,
                "rotate-[0deg] rounded-lg  transition-transform duration-150 ease-in group-hover:rotate-[-1deg]": !isActive,
                "rotate-[0deg] shadow-lg rounded-2xl left-[40%] top-[40%]": isActive,
              })}
            >
              <Image src="/story-4.jpg" alt="story 1" fill className="object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </article>

      {/* <div className="fixed w-screen h-screen inset-0">
        <div className="absolute top-1/2 left-1/2 w-[460px] h-[280px] translate-x-[-90%] translate-y-[-90%] rotate-[-8deg] z-[1] shadow-lg rounded-2xl overflow-hidden">
          <Image src="/story-1.jpg" alt="story 1" width={460} height={280} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-1/2 left-1/2 w-[460px] h-[280px] translate-x-[-5%] translate-y-[-93%] rotate-[6deg] z-[2] shadow-lg rounded-2xl overflow-hidden">
          <Image src="/story-2.jpg" alt="story 1" width={460} height={280} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-1/2 left-1/2 w-[460px] h-[280px] translate-x-[-85%] translate-y-[0%] rotate-[4deg] z-[3] shadow-lg rounded-2xl overflow-hidden">
          <Image src="/story-3.jpg" alt="story 1" width={460} height={280} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-1/2 left-1/2 w-[460px] h-[280px] translate-x-[-10%] translate-y-[-10%] rotate-[0deg] z-[4] shadow-lg rounded-2xl overflow-hidden">
          <Image src="/story-4.jpg" alt="story 1" width={460} height={280} className="w-full h-full object-cover" />
        </div>
      </div> */}
    </>
  );
};

export default GalleryCard;
