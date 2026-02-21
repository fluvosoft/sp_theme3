"use client";

import { useState, useCallback, useEffect } from "react";

const SLIDE_DURATION_MS = 5000;

type ProductSliderProps = {
  /** Image URLs; empty = use placeholders */
  images?: string[];
  /** Number of placeholder slides if no images */
  placeholderCount?: number;
};

export default function ProductSlider({
  images = [],
  placeholderCount = 2,
}: ProductSliderProps) {
  const count = images.length > 0 ? images.length : placeholderCount;
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex((count + i) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % count),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(t);
  }, [count]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {(images.length > 0 ? images : Array.from({ length: count })).map(
          (src, i) => (
            <div
              key={i}
              className="min-w-full shrink-0"
              style={{ width: "100%" }}
            >
              <div className="mx-auto max-w-sm">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-[var(--shadow-lg)]">
                  {src && typeof src === "string" ? (
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
                      প্রোডাক্ট ইমেজ {i + 1}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white shadow-lg transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="পিছনে"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white shadow-lg transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="সামনে"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="h-2 w-2 rounded-full transition-all"
                style={{
                  backgroundColor: i === index ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  transform: i === index ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`স্লাইড ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
