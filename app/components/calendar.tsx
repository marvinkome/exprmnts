"use client";
import React from "react";

const Calendar = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

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
    <div className="relative container mx-auto h-[80vh] ring-1">
      <div ref={containerRef} className="relative w-full h-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="absolute h-full left-0 py-4 flex">
          <section className="w-72 h-full">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Oct 21</p>
              <p className="text-xs text-slate-400">2020</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Nov 26</p>
              <p className="text-xs text-slate-400">2020</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Dec 1</p>
              <p className="text-xs text-slate-400">2020</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Dec 25</p>
              <p className="text-xs text-slate-400">2020</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Jan 1</p>
              <p className="text-xs text-slate-400">2021</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Jan 25</p>
              <p className="text-xs text-slate-400">2021</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>

          <section className="w-72 h-ful">
            <header className="border-b text-center pt-2 pb-6">
              <p className="font-medium text-sm">Feb 14</p>
              <p className="text-xs text-slate-400">2020</p>
            </header>

            <article className="w-full h-full border-r"></article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
