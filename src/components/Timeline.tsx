"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const steps = [
  {
    title: "Scan the Street",
    text: "Point your phone and reveal live prices.",
  },
  {
    title: "Interior Transparency",
    text: "Walk around & peek inside instantly.",
  },
  { title: "Book an AR Tour", text: "Schedule an agent‑less viewing." },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".step").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="demo" ref={ref} className="py-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">How HapSTR Works</h2>
      <div className="max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={i}
            className="step relative pl-10 border-l border-brand/50 mb-16 last:mb-0"
          >
            <span className="absolute -left-[10px] top-1.5 w-5 h-5 rounded-full bg-brand" />
            <h3 className="text-2xl font-semibold mb-1">{s.title}</h3>
            <p className="text-gray-300">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
