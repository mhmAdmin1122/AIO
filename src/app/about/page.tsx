import React from "react";
import Navbar from "@/../components/Navbar";
import MobileHeader from "@/../components/MobileHeader";
import Footer from "@/../components/Footer";
import Image from "next/image";
import aboutPic from '@/../public/images/about.jpg'

export default function page() {
  return (
    <div>
      <Navbar />
      <MobileHeader />
      <div className="aboutUsPageContent-box">
        <div className="welcomeLine-box">
          <h1>Welcome to AIO!!!</h1>
          <Image src={aboutPic} alt="Lwelcome-line-container-pic"/>
        </div>
        <div className="detailsAbot-about">
          <p className="aboutDetail">
            AIO is a Professional all Needs Platform. Here we will provide you
            only interesting content, which you will like very much. We{"'"}re
            dedicated to providing you the best of all Needs , with a focus on
            dependability and Online Asset . We{"'"}re working to turn our
            passion for all Needs into a booming online website. We hope you
            enjoy our all Needs as much as we enjoy offering them to you. I will
            keep posting more important posts on my Website for all of you.
            Please give your support and love.
          </p>
          <b className="thank-Line">Thanks For Visiting Our Site</b>
          <b className="niceDay-Line">Have a nice day!</b>
        </div>
      </div>
      <Footer />
    </div>
  );
}
