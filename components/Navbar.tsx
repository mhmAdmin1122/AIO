import React from "react";
import Image from "next/image";
import logo from "./Images/android-chrome-192x192.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-dark navbar-conatiner d-flex  justify-content-between align-items-center py-2 m-0 px-2" style={{width: "100%"}}>
        <div className="logo-box d-flex w-10">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-10" />
          </Link>
        </div>
        <ul className="navbar-tab-list d-flex align-items-end m-0">
          <Link href="/"><li className="navbarTabs px-4 fs-6 fw-bold">Home</li></Link>
          <Link href="/about"><li className="navbarTabs px-4 fs-6 fw-bold">About</li></Link>
          <Link href="/services"><li className="navbarTabs px-4 fs-6 fw-bold">Services</li></Link>
          <Link href="/excerquiz"><li className="navbarTabs px-4 fs-6 fw-bold">Excercise &amp; Quiz</li></Link>
          <Link href="/"><li className="navbarTabs px-4 fs-6 fw-bold">Products</li></Link>
          <Link href="/"><li className="navbarTabs px-4 fs-6 fw-bold">Tools</li></Link>
        </ul>
      </nav>
    </>
  );
}
