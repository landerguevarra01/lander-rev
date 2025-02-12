"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "../app/globals.css";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTexts = [
    "sansan",
    "slide 2",
    "slide 3",
    "slide 4",
    "slide 5",
    "slide 6",
    "slide 7",
    "slide 8",
    "slide 9",
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <a
            href="https://sansan-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/works/sansan.png"
              alt="sansan works"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <p>{slideTexts[activeIndex]}</p>
    </>
  );
}
