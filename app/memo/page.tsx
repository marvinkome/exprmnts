"use client";
import { motion } from "framer-motion";
import { CardContainer, Card, CardCta } from "./components/cards";

const Description = ({ lines }: { lines: string[] }) => {
  const delay = lines.map((_, idx) => idx * 0.2 + 0.1).reverse();

  return (
    <p className="text-lg font-light text-neutral-600">
      {lines.map((line, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          initial={{ y: 25 + idx * 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25 - idx * 5, opacity: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: delay[idx] }}
        >
          {line}
        </motion.span>
      ))}
    </p>
  );
};

const Page = () => {
  return (
    <div key="home-page" className="relative flex flex-col rounded-3xl bg-orange-100 h-full py-4 px-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center mb-20 mt-[15%] w-full max-w-xs overflow-hidden">
          <svg className="w-full overflow-visible" viewBox="0 0 261 66" xmlns="http://www.w3.org/2000/svg">
            <path id="curve" d="M1 57c45-8 159-20 259 0" fill="transparent" />
            <text>
              <motion.textPath
                href="#curve"
                transition={{
                  ease: [0.16, 1, 0.3, 1],
                  duration: 0.5,
                  delay: 1,
                }}
                className="text-[2rem] font-bold"
                initial={{ startOffset: 260, opacity: 0 }}
                animate={{ startOffset: 18, opacity: 1 }}
                exit={{ startOffset: 260, opacity: 0 }}
              >
                Real Fancy Title
              </motion.textPath>
            </text>
          </svg>

          <Description lines={["A simple template for whatever futute ", "ideas I get."]} />
        </div>
      </div>

      <CardContainer>
        <CardCta href="/memo/radio" />

        <Card
          enter={{ rotate: -20, y: "60%", x: "150%" }}
          current={{ rotate: -20, y: "40%", x: 0 }}
          className="bg-gradient-to-b from-red-500 to-pink-800"
        />

        <Card
          enter={{ rotate: -10, y: "12%", x: "75%" }}
          current={{ rotate: -10, y: "5%", x: 0 }}
          className="bg-gradient-to-b from-blue-500 to-indigo-800 z-10"
        />

        <Card className="bg-gradient-to-b from-green-500 to-cyan-800 scale-[1.2] z-20" />

        <Card
          enter={{ rotate: 10, y: "12%", x: "-75%" }}
          current={{ rotate: 10, y: "5%", x: 0 }}
          className="bg-gradient-to-b from-yellow-500 to-orange-800 z-10"
        />

        <Card
          enter={{ rotate: 20, y: "60%", x: "-150%" }}
          current={{ rotate: 20, y: "40%", x: 0 }}
          className="bg-gradient-to-b from-purple-500 to-fuchsia-800 "
        />
      </CardContainer>
    </div>
  );
};

export default Page;
