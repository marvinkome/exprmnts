"use client";
import React from "react";
import Card from "./card";
import Gallery from "./gallery";

type GalleryCardProps = {
  isActive?: boolean;
  title: string;
  date: string;
  color: string;
  images: [string, string, string, string];
};
const GalleryCard = (props: GalleryCardProps) => {
  const [isActive, setIsActive] = React.useState(!!props.isActive);

  return (
    <Card isActive={isActive} color={props.color} title={props.title} date={props.date} setIsActive={(value) => setIsActive(value)}>
      <Gallery isActive={isActive} images={props.images} />
    </Card>
  );
};

const Calendar = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const images: [string, string, string, string] = ["/story-2.jpg", "/story-3.jpg", "/story-4.jpg", "/story-1.jpg"];

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
    <div ref={containerRef} className="relative w-full h-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="absolute h-full left-0 py-4 px-1 flex">
        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Oct 21</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full p-2 border-r grid grid-cols-1 grid-rows-6 gap-2">
            <div className="relative col-span-1 row-start-1 row-end-3">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="blue" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Nov 26</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full p-2 border-r grid grid-cols-1 grid-rows-6 gap-2">
            <div className="col-span-1 row-start-3 row-end-5">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="red" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Dec 1</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full p-2 border-r grid grid-cols-1 grid-rows-6 gap-2">
            <div className="col-span-1 row-start-1 row-end-3">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="purple" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Dec 25</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full p-2 border-r grid grid-cols-1 grid-rows-6 gap-2">
            <div className="col-span-1 row-start-1 row-end-3">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="red" images={images} />
            </div>

            <div className="col-span-1 row-start-4 row-end-6">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="green" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Jan 1</p>
            <p className="text-xs text-slate-400">2021</p>
          </header>

          <article className="w-full h-full p-2 border-r grid grid-cols-1 grid-rows-6 gap-2">
            <div className="col-span-1 row-start-3 row-end-5">
              <GalleryCard title="Birthday at YamYam" date="21 October" color="yellow" images={images} />
            </div>
          </article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Jan 25</p>
            <p className="text-xs text-slate-400">2021</p>
          </header>

          <article className="w-full h-full border-r"></article>
        </section>

        <section className="w-[20vw] h-full">
          <header className="border-b text-center pt-2 pb-4">
            <p className="font-medium text-sm">Feb 14</p>
            <p className="text-xs text-slate-400">2020</p>
          </header>

          <article className="w-full h-full border-r"></article>
        </section>
      </div>
    </div>
  );
};

export default Calendar;
