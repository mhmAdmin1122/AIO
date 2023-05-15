import React from "react";
import Image from "next/image";
import pic from "../../../public/images/PopularCourseWave.svg";
import pic2 from "../../../public/images/PopularCourseWave2.svg";
import pic3 from "../../../public/images/68.png";
import data from "../../../public/popularCourse.json";
import Link from "next/link";

export default function PopularCourse() {
  return (
    <>
      <div className="feature-container-course">
        <Image src={pic2} alt="designPic" />
        <div className="main-content feature-course">
          <h1>Popular Courses</h1>
          <div className="popular-card-conatiner d-flex">
            {data.map((user) => (
              <div className="card-box" key={user.price}>
                <div
                  className="card-content-conatiner card mx-5"
                  style={{ width: "320px" }}
                >
                  <div className="card-IamgeBox">
                    <Image src={pic3} alt="popularCourse" />
                  </div>
                  <div className="card-body">
                    <h2 className="fs-4">{user.name}</h2>
                    <p className="fs-6">{user.description.slice(0, 43)}...</p>
                    <h3 className="fs-5">Price: ${user.price}</h3>
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
        <Image src={pic} alt="designPic" />
      </div>
    </>
  );
}
