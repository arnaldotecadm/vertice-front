import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  HeartPulse,
  Wallet,
  ShoppingCart,
  Factory,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const ITEM_ICONS: LucideIcon[] = [
  Truck,
  HeartPulse,
  Wallet,
  ShoppingCart,
  Factory,
  BarChart3,
];

// Distinct gradient treatment per card so the carousel feels varied rather
// than repetitive, while staying within the brand's blue palette.
const ITEM_GRADIENTS = [
  "from-blue-500 to-cyan-400",
  "from-indigo-500 to-blue-400",
  "from-sky-500 to-blue-600",
  "from-blue-600 to-indigo-400",
  "from-cyan-500 to-blue-500",
  "from-blue-500 to-sky-400",
];

// Horizontally-scrolling showcase of example applications Vértice could
// build for prospective clients. Uses native CSS scroll-snap for smooth,
// swipeable/keyboard-accessible browsing, with arrow buttons and dot
// indicators layered on top for discoverability.
function Portfolio() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = t.portfolio.items;

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;

    let closest = 0;
    let minDiff = Infinity;
    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const diff = Math.abs(el.offsetLeft - track.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = index;
      }
    });
    setActiveIndex(closest);
  }

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-accent">
            {t.portfolio.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.portfolio.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div
          className="relative mt-16"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.portfolio.title}
        >
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {items.map((item, index) => {
              const Icon = ITEM_ICONS[index];
              const gradient = ITEM_GRADIENTS[index];
              return (
                <div
                  key={item.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="w-[85%] flex-none snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg sm:w-[60%] lg:w-[calc(33.333%-1rem)] dark:border-slate-800 dark:bg-slate-900"
                >
                  <div
                    className={`flex h-40 items-center justify-center bg-gradient-to-br ${gradient}`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={t.portfolio.prev}
            className="absolute top-1/2 left-0 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-md transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-0 lg:flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            aria-label={t.portfolio.next}
            className="absolute top-1/2 right-0 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-md transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-0 lg:flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${t.portfolio.goTo} ${index + 1}`}
              aria-current={activeIndex === index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-brand-primary dark:bg-brand-accent"
                  : "w-2 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
