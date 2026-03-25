"use client";

import { useEffect, useEffectEvent, useState } from "react";

type AboutShowcaseItem = {
  title: string;
  label: string;
  description: string;
  points: string[];
};

type AboutShowcaseProps = {
  items: AboutShowcaseItem[];
};

export function AboutShowcase({ items }: AboutShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % items.length);
  });

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      goToNext();
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className="rounded-[2.5rem] border border-white/70 bg-white/88 p-7 shadow-[0_22px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-500 ${
                isActive
                  ? "bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(15,23,42,0.9))] p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
            {activeItem.label}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
            {activeItem.title}
          </h3>
          <p className="mt-4 text-sm leading-8 text-slate-300">{activeItem.description}</p>
        </div>

        <div className="space-y-4">
          {activeItem.points.map((point, index) => (
            <div
              key={`${activeItem.label}-${point}`}
              className="group rounded-[1.75rem] border border-slate-100 bg-slate-50 px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
