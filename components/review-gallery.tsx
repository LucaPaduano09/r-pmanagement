"use client";

import { useEffect, useEffectEvent, useMemo, useState } from "react";
import type { ReviewItem } from "@/lib/site-data";

type ReviewGalleryProps = {
  reviews: ReviewItem[];
};

function chunkReviews(reviews: ReviewItem[], size: number) {
  const chunks: ReviewItem[][] = [];

  for (let index = 0; index < reviews.length; index += size) {
    chunks.push(reviews.slice(index, index + size));
  }

  return chunks;
}

export function ReviewGallery({ reviews }: ReviewGalleryProps) {
  const slides = useMemo(() => chunkReviews(reviews, 3), [reviews]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useEffectEvent(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      goToNextSlide();
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-[2.5rem]">
        <div
          className="flex transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="min-w-full">
              <div className="grid gap-6 xl:grid-cols-3">
                {slide.map((review) => (
                  <article
                    key={review.name}
                    className="h-full rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(248,250,252,0.96))] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-center gap-1 text-sky-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-8 text-slate-600">“{review.quote}”</p>
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-base font-semibold text-slate-950">{review.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                      <p className="mt-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                        {review.outcome}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Vai al gruppo recensioni ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              activeSlide === index ? "w-10 bg-slate-950" : "w-2.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
