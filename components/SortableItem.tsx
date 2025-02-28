"use client";

import { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";
import "../css/page.css";
import Image from "next/image";
import { motion } from "framer-motion";

const fullText =
  "Hi, I'm [Your Name], a Front-End Developer crafting beautiful & functional web experiences.";

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      Sortable.create(gridRef.current, {
        animation: 200,
        ghostClass: "sortable-ghost",
      });
    }
  }, []);

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Wait 6 seconds before restarting
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 6000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="container px-4" ref={gridRef}>
      <div className="item item-1">
        <div className="w-auto h-full flex justify-end items-end p-8">
          <p className="font-jetbrains text-lg text-white">
            {displayedText}
            <span className="ml-1">{showCursor ? "|" : ""}</span>
          </p>
        </div>
      </div>
      <div className="item item-2">
        <div className="relative overflow-hidden w-full h-full">
          <Image
            src="/assets/me/_DSC8035.JPG"
            alt="Person Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="item item-3 relative flex flex-wrap justify-center items-center gap-4 p-4">
        <p className="absolute top-2 left-2 text-white z-10">
          Languages: HTML, CSS, JavaScript, TypeScript <br />
          Frameworks: React, Next.js <br />
          Styling: Tailwind CSS, GSAP, Framer Motion <br />
          Other: Git
        </p>
      </div>
      <div className="item item-4">
        Project Name: Portfolio Website Tech Stack: React, Tailwind CSS, GSAP
        Link: yourwebsite.com/project
      </div>
      <div className="item item-5">
        Front-End Developer at Blink Creative Studio (202X - Present) Freelance
        Web Developer (202X - 202X)
      </div>
      <div className="item item-6">
        Amazing developer! Delivered a fast, responsive website with clean
        code." – Client A
      </div>
      <div className="item item-7">
        Let's build something amazing together! Get in touch.
      </div>
      <div className="item item-8">
        Email: yourname@example.com LinkedIn: linkedin.com/in/yourname GitHub:
        github.com/yourusername
      </div>
      {/* <div className="item item-9">Profile</div> */}
    </div>
  );
}
