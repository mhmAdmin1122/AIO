import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../../../public/featuredPost.json";
import png1pic from "@/../public/images/10.jpg";

export default function FeaturedPost() {
  return (
    <div>
      <div className="featured-post bg-secondary bg-gradient">
        <h1>Featured Post</h1>
        <div className="featured-container d-flex">
          {data.map((user: any) => (
            <div className="featured-box" key={user.cardNo}>
              <div className="card m-5" style={{ width: "320px" }}>
                <div className="card-image">
                  <Image src={png1pic} alt="featured-postPic" />
                </div>
                <div className="card-body">
                  <h3 className="postTitle">{user.cardName}</h3>
                  <p className="postDesc">{user.cardDesc}</p>
                  <button className="learnMorePostBtn btn btn-primary">
                    <Link
                      href="/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Learn More &rarr;
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
