"use client";

import { useState } from "react";

export default function App() {
  const [question, setQuestion] = useState("hey");
  const [gifSrc, setGifSrc] = useState(
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
  );
  const [noBtnPosition, setNoBtnPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const handleYesClick = () => {
    setQuestion("I love you very much!");
    setGifSrc("https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif");
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150; // Button width
    const maxY = window.innerHeight - 50; // Button height

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoBtnPosition({ left: `${randomX}px`, top: `${randomY}px` });
  };

  return (
    <div className="wrapper">
      <h2>{question}</h2>
      <img id="gif" alt="gif" src={gifSrc} />
      <div className="btn-group">
        <button onClick={handleYesClick} className="yes-btn">
          Yes
        </button>
        <button
          className="no-btn"
          style={{
            position: "absolute",
            left: noBtnPosition.left,
            top: noBtnPosition.top,
          }}
          onMouseOver={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
}
