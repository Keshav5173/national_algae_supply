import { useState, useEffect } from "react";

export default function ProductCardComponent({
  name,
  price,
  images = [],
  currency = "₹",
  interval = 3000,
  onBuy,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [clicked, setClicked] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [count, paused, interval]);

  const handleBuy = () => {
    setClicked(true);
    onBuy?.({ name, price });
    setTimeout(() => setClicked(false), 450);
  };

  const formatted = Number(price).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  const fronds = [
    { d: "M40 140 C30 110 55 90 40 60 C30 40 45 25 42 8", delay: "0s", color: "stroke-[#1F6B48]" },
    { d: "M78 140 C92 105 66 85 82 52 C92 30 76 18 80 2", delay: "-1.2s", color: "stroke-kelp" },
    { d: "M118 140 C108 112 134 92 118 64 C108 44 124 28 120 12", delay: "-2.4s", color: "stroke-[#1F6B48]" },
    { d: "M158 140 C170 112 146 94 160 68 C168 50 156 36 160 22", delay: "-3.4s", color: "stroke-kelp" },
  ];

  const bubbles = [
    "left-[22%] h-2.5 w-2.5",
    "left-[52%] h-[14px] w-[14px] [animation-delay:.5s]",
    "left-[78%] h-2 w-2 [animation-delay:1.1s]",
  ];

  return (
    // Phone: narrower card (260px), tighter padding, smaller radius.
    // sm (640px) and up: original 320px card.
    <article className="group w-[260px] sm:w-[320px] bg-[#E8E4D5] overflow-hidden rounded-[22px] sm:rounded-[28px] bg-foam p-2 sm:p-3 font-sans text-ink shadow-[0_1px_0_rgba(16,48,44,.08),0_10px_24px_-14px_rgba(16,48,44,.35)] transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(16,48,44,.08),0_18px_30px_-16px_rgba(16,48,44,.45)] motion-reduce:transition-none">
      {/* media: rounded frame that clips the zooming image */}
      <div
        className="relative h-[180px] sm:h-[240px] overflow-hidden rounded-[16px] sm:rounded-[20px] bg-[#5FB79A]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {count > 0 ? (
          // outer wrapper zooms, inner track slides
          <div className="h-full origin-center transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none">
            <div
              className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((src, i) => (
                <img
                  key={src + i}
                  src={src}
                  alt={`${name} photo ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="block h-full w-full shrink-0 object-cover"
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 origin-center bg-gradient-to-b from-[#A9DCC9] via-[#5FB79A] to-deep transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
          >
            <svg viewBox="0 0 200 140" className="absolute inset-x-0 bottom-0 h-full w-full">
              {fronds.map((f, i) => (
                <path
                  key={i}
                  d={f.d}
                  style={{ animationDelay: f.delay }}
                  className={`${f.color} animate-sway fill-none stroke-[7] [stroke-linecap:round] [transform-box:fill-box] [transform-origin:50%_100%] group-hover:[animation-duration:2.6s] motion-reduce:animate-none`}
                />
              ))}
            </svg>
          </div>
        )}

        {/* bubbles on hover */}
        {bubbles.map((cls, i) => (
          <span
            key={i}
            className={`${cls} pointer-events-none absolute -bottom-4 rounded-full bg-white/60 opacity-0 group-hover:animate-rise motion-reduce:animate-none`}
          />
        ))}

        {/* dots */}
        {count > 1 && (
          <div className="absolute right-2 top-2 sm:right-3 sm:top-3 flex gap-1.5 rounded-full bg-ink/35 px-2 py-[5px]">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`h-[7px] rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  i === index ? "w-[18px] bg-white" : "w-[7px] bg-white/55"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* body */}
      <div className="px-2 pb-2 pt-3 sm:px-3 sm:pb-3 sm:pt-4">
        <h3 className="mb-3 sm:mb-4 font-display text-lg sm:text-2xl font-semibold leading-tight tracking-tight">
          {name}
        </h3>
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <p className="m-0 text-lg sm:text-2xl font-semibold">
            <span className="mr-0.5 text-base sm:text-lg opacity-70">{currency}</span>
            {formatted}
          </p>
          <button
            type="button"
            onClick={handleBuy}
            className={`group/btn cursor-pointer relative inline-flex items-center gap-1.5 sm:gap-2 overflow-hidden rounded-full bg-ink px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-[15px] font-semibold text-foam shadow-[0_6px_14px_-6px_rgba(16,48,44,.6)] transition duration-300 hover:shadow-[0_10px_18px_-6px_rgba(46,125,84,.7)] active:scale-95 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-spirulina ${
              clicked ? "animate-pop" : ""
            }`}
          >
            {/* green tide that fills the button on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-[#256B46] to-kelp transition-transform duration-500 ease-out group-hover/btn:translate-x-0 motion-reduce:transition-none"
            />
            <span className="relative whitespace-nowrap">Buy now</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}