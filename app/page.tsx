import React from "react";
// import "./page.css";
import Image from "next/image";
import LandingPage from "@/components/LandingPage";
import SortableItem from "@/components/SortableItem";

const Page = () => {
  return (
    <div className="w-full h-full">
      {/* <LandingPage /> */}
      <SortableItem />
    </div>
  );
};

export default Page;
