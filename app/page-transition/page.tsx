"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "./page-wrapper";

const variants = {
  enter: {
    y: 30,
  },
  current: {
    y: 0,
  },
  exit: {
    rotate: -30,
  },
};
const Page = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-orange-100 p-20 rounded-lg">
      <div className="text-center">
        <motion.h1 variants={variants} className="text-2xl font-semibold">
          Air Catcher
        </motion.h1>

        <p className="text-neutral-500 mb-3">By Twenty One Pilots</p>

        <Link href="/page-transition/next" className="underline text-blue-800">
          See next track
        </Link>
      </div>
    </div>
  );
};

export default Page;
