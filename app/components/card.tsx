"use client";
import React from "react";
import cls from "classnames";

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
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  children: React.ReactNode;
};
const Card = (props: CardProps) => {
  const colorObj = colors.find((c) => c.name === props.color);

  return (
    <>
      <article
        onClick={() => props.setIsActive(!props.isActive)}
        style={{ color: colorObj?.text, backgroundColor: colorObj?.bg }}
        className={cls({
          "group bg-blue-100 text-blue-500 w-full h-full rounded-xl p-4 flex flex-col shadow": true,
          "cursor-pointer transition-transform duration-150 ease-in hover:scale-[0.97]": !props.isActive,
        })}
      >
        <div className="mb-6">
          <h1 className="text-md mb-1">{props.title}</h1>
          <p className="text-xs uppercase">{props.date}</p>
        </div>

        {props.children}
      </article>
    </>
  );
};

export default Card;
