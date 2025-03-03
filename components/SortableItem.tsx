"use client";

import { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";
import "../css/page.css";
import Image from "next/image";
import Matter from "matter-js";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

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
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 6000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateBounds = () => {
      if (sceneRef.current) {
        const { width, height } = sceneRef.current.getBoundingClientRect();
        setBounds({ width, height });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const logoImages = [
    "/assets/logos/css3-original.png",
    "/assets/logos/figma-original.png",
    "/assets/logos/github-original.png",
    "/assets/logos/html5-original.png",
    "/assets/logos/javascript-original.png",
    "/assets/logos/mongodb-original.png",
    "/assets/logos/mysql-plain.png",
    "/assets/logos/nextjs-original.png",
    "/assets/logos/nodejs-plain.png",
    "/assets/logos/php-plain.png",
    "/assets/logos/tailwindcss-plain.png",
    "/assets/logos/typescript-original.png",
  ];

  const preloadImages = () => {
    return Promise.all(
      logoImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = document.createElement("img");
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = reject;
        });
      })
    );
  };

  useEffect(() => {
    preloadImages().then(() => {
      if (!bounds.width || !bounds.height) return;

      const engine = engineRef.current;
      const { Engine, Render, Runner, World, Bodies } = Matter;

      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);

      const render = Render.create({
        element: sceneRef.current!,
        engine: engine,
        options: {
          width: bounds.width,
          height: bounds.height,
          background: "transparent",
          wireframes: false,
        },
      });

      const thickness = 10;
      const walls = [
        Bodies.rectangle(
          bounds.width / 2,
          bounds.height,
          bounds.width,
          thickness,
          { isStatic: true, render: { visible: false } }
        ),
        Bodies.rectangle(0, bounds.height / 2, thickness, bounds.height, {
          isStatic: true,
          render: { visible: false },
        }),
        Bodies.rectangle(
          bounds.width,
          bounds.height / 2,
          thickness,
          bounds.height,
          { isStatic: true, render: { visible: false } }
        ),
        Bodies.rectangle(bounds.width / 2, 0, bounds.width, thickness, {
          isStatic: true,
          render: { visible: false },
        }),
      ];

      World.add(engine.world, walls);

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      const BALL_RADIUS = 35; // Adjust this if needed
      const IMAGE_SCALE = BALL_RADIUS / 100; // Normalize size based on 100px image

      const addBall = (index, image) => {
        setTimeout(() => {
          const ball = Bodies.circle(
            Math.random() * (bounds.width - BALL_RADIUS * 2) + BALL_RADIUS,
            50,
            BALL_RADIUS,
            {
              restitution: 0.7,
              friction: 0.1,
              density: 0.01,
              render: {
                sprite: {
                  texture: image,
                  xScale: IMAGE_SCALE, // Dynamically scale width
                  yScale: IMAGE_SCALE, // Dynamically scale height
                },
              },
            }
          );
          World.add(engine.world, ball);
        }, index * 400);
      };

      // Loop through images directly so each one is used exactly once
      logoImages.forEach((image, index) => {
        addBall(index, image);
      });

      // for (let i = 0; i < 8; i++) {
      //   addBall(i);
      // }

      return () => {
        Render.stop(render);
        Runner.stop(runner);
        World.clear(engine.world);
        Engine.clear(engine);
      };
    });
  }, [bounds]);

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
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative flex flex-wrap justify-center items-center gap-4 p-4">
        <div ref={sceneRef} className="w-full h-full" />
      </div>
      <div className="item item-4">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{
            delay: 3000, // Change slide every 3 seconds
            disableOnInteraction: false, // Ensures autoplay continues even after interactions
          }}
          allowTouchMove={false} // Disables manual sliding
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/assets/works/sansan-copy.png"
              alt="Person Image"
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/works/blink.jpg"
              alt="Person Image"
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/works/philrice.png"
              alt="Person Image"
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="item item-5">
        Front-End Developer at Blink Creative Studio (202X - Present) Freelance
        Web Developer (202X - 202X)
      </div>
      <div className="item item-6">
        {/* "Amazing developer! Delivered a fast, responsive website with clean
        code." – Client A */}
      </div>
      <div className="item item-7">
        Let's build something amazing together! Get in touch.
      </div>
      <div className="item item-8">
        <div className="relative grid grid-cols-2 w-full h-full border-solid border-2">
          <Image
            src="/assets/logos/gmail.png"
            alt="Person Image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
