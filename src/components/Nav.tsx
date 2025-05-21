"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = ["home", "features", "demo", "pricing", "contact"];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const y = window.scrollY + 80;
      const current = [...links].reverse().find((id) => {
        const el = document.getElementById(id);
        return el && y >= el.offsetTop;
      });
      setActive(current || "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition backdrop-blur ${scrolled ? "bg-black/70" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-2xl font-semibold">HapSTR</span>
        <ul className="flex gap-8 text-lg">
          {links.map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={active === id ? "text-white" : "text-brand"}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
