import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <div className="recent-post bg-secondary">
        <h1>Recent Post</h1>
        <div className="card m-5" style={{width: "320px"}}>
          <div className="card-image">
            <Image src={""} alt="postPic" />
          </div>
          <div className="card-body">
            <h3 className="postTitle">Post Tilte</h3>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ut fugiat aliquid quis esse minima quaerat pariatur dolor earum vero eligendi architecto reprehenderit aperiam rem neque id, dolore culpa saepe.</p>
            <button className="learnMorePostBtn btn btn-primary"><Link href="/" style={{color: "#fff", textDecoration: "none"}}>Learn More &rarr;</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}
