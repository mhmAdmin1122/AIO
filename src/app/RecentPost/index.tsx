import React from "react";
import Image from "next/image";
import Link from "next/link";
import png1pic from "@/../public/images/10.jpg";
import data from "@/../public/recentPost.json";

export default function Post() {
  return (
    <>
      <div className="recent-post bg-secondary">
        <h1>Recent Post</h1>
        <div className="d-flex sliderRecent-container">
        {data.map((user) => (
          <div className="cardBox d-flex align-item-center" key="1">
            <div className="card m-5" style={{ width: "320px" }}>
              <div className="card-image rounded-3">
                <Image src={png1pic} alt="postPic"/>
              </div>
              <div className="card-body">
                <h3 className="postTitle">{user.name}</h3>
                <p className="postDesc">{user.description}</p>
                <button className="learnMorePostBtn btn btn-primary">
                  <Link
                    href="/AboutUs"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Learn More &rarr;
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}</div>
      </div>
    </>
  );
}
