"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./Images/android-chrome-192x192.png";
import Link from "next/link";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <nav
        className="bg-dark navbar-conatiner justify-content-between align-items-center py-2 m-0 px-2"
        style={{ width: "100%" }}
      >
        <div className="logo-box d-flex w-10">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-10" />
          </Link>
        </div>
        <ul className="navbar-tab-list d-flex align-items-end m-0">
          <Link className="text-decoration-none" href="/">
            <li className="navbarTabs px-4 fs-6 fw-bold">Home</li>
          </Link>
          <div
            className="text-decoration-none nav-tabAbout position-relative"
            onClick={handleClick}
          >
            <li className="navbarTabs px-4 fs-6 fw-bold">About</li>
            {isActive && (
              <div className="position-absolute aboutList">
                <div className="about-TabList">
                  <ul className="abouttabList">
                    <Link href="/about">
                      <li className="aboutListTabs">About Us</li>
                    </Link>
                    <Link href="/contactus">
                      <li className="aboutListTabs">Contact Us</li>
                    </Link>
                    <Link href="/disclaimer">
                      <li className="aboutListTabs">Disclaimer</li>
                    </Link>
                    <Link href="/privacypolicy">
                      <li className="aboutListTabs">Privacy Policy</li>
                    </Link>
                    <Link href="/termservices">
                      <li className="aboutListTabs">Term & Services</li>
                    </Link>
                    <Link href="/copyrightInfrigments">
                      <li className="aboutListTabs">
                        COPYRIGHT INFRINGEMENTS
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link className="text-decoration-none" href="/services">
            <li className="navbarTabs px-4 fs-6 fw-bold">Services</li>
          </Link>
          <Link className="text-decoration-none" href="/excerquiz">
            <li className="navbarTabs px-4 fs-6 fw-bold">
              Excercise &amp; Quiz
            </li>
          </Link>
          <Link className="text-decoration-none" href="/product">
            <li className="navbarTabs px-4 fs-6 fw-bold">Products</li>
          </Link>
          <Link className="text-decoration-none" href="/tools">
            <li className="navbarTabs px-4 fs-6 fw-bold">Tools</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
