"use client";
import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-screen h-full p-8">
      <div className="relative flex flex-col rounded-3xl bg-orange-100 h-full py-4 px-6 overflow-hidden">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-center mb-20 mt-[15%] w-full max-w-xs overflow-hidden">
            <svg className="w-full overflow-visible" viewBox="0 0 261 66" xmlns="http://www.w3.org/2000/svg">
              <path id="curve" d="M1 57c45-8 159-20 259 0" fill="transparent" />
              <text>
                <motion.textPath
                  href="#curve"
                  initial={{ startOffset: 260, opacity: 0 }}
                  animate={{ startOffset: 18, opacity: 1 }}
                  transition={{
                    ease: [0.16, 1, 0.3, 1],
                    duration: 0.5,
                    delay: 1,
                  }}
                  className="text-[2rem] font-bold"
                >
                  Real Fancy Title
                </motion.textPath>
              </text>
            </svg>

            <motion.p className="text-lg font-light text-neutral-600">
              <motion.span
                className="inline-block"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.16, 1, 0.3, 1],
                  duration: 1,
                  delay: 0.3,
                }}
              >
                A simple template for whatever futute{" "}
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.16, 1, 0.3, 1],
                  duration: 1,
                  delay: 0.1,
                }}
              >
                ideas I get.
              </motion.span>
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute w-full left-0 right-0"
          initial={{ bottom: "-50%", rotate: 20 }}
          animate={{ bottom: "-5%", rotate: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
        >
          <div className="flex justify-center items-center relative">
            <motion.a
              href="/memo"
              initial="default"
              variants={{ hover: { scale: 1.3 } }}
              whileHover="hover"
              className={cn(
                "inline-block absolute w-14 h-14 text-center text-2xl bg-neutral-800 text-neutral-200 rounded-full overflow-hidden z-30",
                "top-0 w-full -m-14"
              )}
            >
              <motion.span
                className="flex absolute inset-0 items-center justify-center"
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                variants={{
                  default: { y: 0, opacity: 1 },
                  hover: { y: 60, opacity: 0 },
                }}
              >
                <BiChevronDown />
              </motion.span>

              <motion.span
                className="flex absolute inset-0 items-center justify-center"
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                variants={{
                  default: { y: -60, opacity: 0 },
                  hover: { y: 0, opacity: 1, transition: { delay: 0.2 } },
                }}
              >
                <BiChevronDown />
              </motion.span>
            </motion.a>

            <motion.div
              initial={{ rotate: -20, y: "60%", x: "150%" }}
              animate={{ rotate: -20, y: "40%", x: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 }}
              transformTemplate={({ rotate, x, y }) => `rotate(${rotate}) translate(${x}, ${y})`}
              className="w-[21vw] h-[21vw] shrink-0 bg-gradient-to-b from-red-500 to-pink-800 rounded-xl"
            />

            <motion.div
              initial={{ rotate: -10, y: "12%", x: "75%" }}
              animate={{ rotate: -10, y: "5%", x: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 }}
              transformTemplate={({ rotate, x, y }) => `rotate(${rotate}) translate(${x}, ${y})`}
              className="w-[21vw] h-[21vw] shrink-0 bg-gradient-to-b from-blue-500 to-indigo-800 rounded-xl z-10"
            />

            <motion.div style={{ scale: 1.2 }} className="w-[21vw] h-[21vw] shrink-0 bg-gradient-to-b from-green-500 to-cyan-800 rounded-xl z-20" />

            <motion.div
              initial={{ rotate: 10, y: "12%", x: "-75%" }}
              animate={{ rotate: 10, y: "5%", x: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 }}
              transformTemplate={({ rotate, x, y }) => `rotate(${rotate}) translate(${x}, ${y})`}
              className="w-[21vw] h-[21vw] shrink-0 bg-gradient-to-b from-yellow-500 to-orange-800 rounded-xl z-10"
            />

            <motion.div
              initial={{ rotate: 20, y: "60%", x: "-150%" }}
              animate={{ rotate: 20, y: "40%", x: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 }}
              transformTemplate={({ rotate, x, y }) => `rotate(${rotate}) translate(${x}, ${y})`}
              className="w-[21vw] h-[21vw] shrink-0 bg-gradient-to-b from-purple-500 to-fuchsia-800 rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
