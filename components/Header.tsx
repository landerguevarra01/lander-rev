"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("home"); // Default active link

  useEffect(() => {
    // Set active link based on current pathname
    const currentPage = pathname.split("/")[1] || "home"; // Default to "home" if the path is empty
    setActiveLink(currentPage);
  }, [pathname]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const navLinks = [
    { href: "/projects", label: "Projects", id: "projects" },
    { href: "/about", label: "About", id: "about" },
    { href: "/contact", label: "Contact", id: "Contact" },
  ];

  return (
    <header className="bg-[#020202] text-white shadow-md">
      <div className="container max-w-[1020px] bg-[#6A7181] mx-auto flex items-center justify-between p-4">
        <div className="">
          <Link href="/">
            <svg
              width="123"
              height="37"
              viewBox="0 0 123 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.897 21.743V4.953H94V31.963H43.046V21.743H85.897Z"
                fill="white"
              />
              <path
                d="M37.103 15.257V32.047H29V5.037L79.954 5.037V15.257L37.103 15.257Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-[14px]">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              onClick={() => handleLinkClick(id)}
              className={` ${activeLink === id ? "" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
