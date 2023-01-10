"use client";
import React from "react";
import Card, { GalleryCard, StoryCard } from "./card";

const Calendar = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const images: [string, string, string, string] = ["/story-2.jpg", "/story-3.jpg", "/story-4.jpg", "/story-1.jpg"];
  const stories = [
    {
      image: "/story-2.jpg",
      title: "Music is magical",
      content: "\"I've got a beat-up toy plane and you're the only thing preventing me from giving it away.\"",
    },
    {
      image: "/story-3.jpg",
      title: "16 more days",
      content: "I have no holiday plans but it would be nice to just stay home you know, and do...🤡",
    },
    {
      image: "/story-1.jpg",
    },
  ];

  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      const delta = e.deltaY + e.deltaX;
      el.scrollTo({ left: el.scrollLeft + delta });
    };

    el.addEventListener("wheel", wheelHandler);
    return () => {
      el.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-y-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="absolute h-full left-0 px-1 flex">
        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Oct 21</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="relative col-span-1 row-start-1 row-end-2">
              <StoryCard title="Surf curse concert was amazing!!" date="19 October" color="blue" stories={stories} />
            </div>
          </article>
        </section>

        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Nov 26</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="col-span-1 row-start-2 row-end-4">
              <GalleryCard title="Birthday at YamYam" date="26 November" color="yellow" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Dec 1</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="col-span-1 row-start-1 row-end-2">
              <StoryCard title="Vacation countdown begins" date="1 December" color="purple" stories={stories} />
            </div>
          </article>
        </section>

        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Dec 25</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="col-span-1 row-start-1 row-end-3">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="red" images={images} />
            </div>

            <div className="col-span-1 row-start-3 row-end-5">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="green" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Jan 1</p>
            <p className="text-xs text-slate-400">2021</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="col-span-1 row-start-2 row-end-3">
              <Card title="Birthday at YamYam" date="21 October" color="red" />
            </div>
          </article>
        </section>

        <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
          <header className="border-b text-center pb-4 pt-14 md:pt-12">
            <p className="font-medium text-sm">Jan 5</p>
            <p className="text-xs text-slate-400">2021</p>
          </header>

          <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-4 gap-2">
            <div className="col-span-1 row-start-1 row-end-2">
              <Card title="Here we go again, work resumes" date="2 January" color="blue" />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Calendar;
