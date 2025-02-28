"use client";

import { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import "../css/page.css";
import Image from "next/image";

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

  return (
    <div className="container" ref={gridRef}>
      <div className="item item-1">
        Hi, I'm [Your Name], a Front-End Developer crafting beautiful &
        functional web experiences.
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
      <div className="item item-3">
        Languages: HTML, CSS, JavaScript, TypeScript Frameworks: React, Next.js
        Styling: Tailwind CSS, GSAP, Framer Motion Other: Git
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
