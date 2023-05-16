"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./Images/android-chrome-192x192.png";
import Link from "next/link";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="mobileMenu_Box">
        <div
          className="mobileMenu_Container d-flex align-items-center justify-between px-4 py-2 bg-dark"
          style={{ width: "100%" }}
        >
          <div className="logoArea_MobileMenu cursor-pointer">
            <Link href="/">
              <Image src={logo} alt="logo_MObile" width={60} height={60} />
            </Link>
          </div>
          <div className="menuIconANDlIST position-relative">
            <div
              className="MenuRapper p-2 rounded border-2 border-white"
              onClick={handleClick}
            >
              <GiHamburgerMenu />
            </div>
            <div className="menuTabsList position-absolute">
              {isActive && (
                <ul className="menuMobileTabsList bg-dark p-4 m-0">
                  <Link className="text-decoration-none" href="/"><li className="menu-Tabs text-white py-2">Your Account</li></Link>
                  <Link className="text-decoration-none" href="/about"><li className="menu-Tabs text-white py-2">About</li></Link>
                  <Link className="text-decoration-none" href="/services"><li className="menu-Tabs text-white py-2">Servics</li></Link>
                  <Link className="text-decoration-none" href="/excerquiz"><li className="menu-Tabs text-white py-2">Excercise &amp; Quiz</li></Link>
                  <Link className="text-decoration-none" href="/product"><li className="menu-Tabs text-white py-2">Products</li></Link>
                  <Link className="text-decoration-none" href="/tools"><li className="menu-Tabs text-white py-2">Tools</li></Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
