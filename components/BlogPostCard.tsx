import React from "react";
import Image from "next/image";

const BlogPostCard = (blogData: any) => {
  return (
    <>
      <div className="card blogPosrSliderCard">
        <div className="cardBlogImageBox ImageBox">
          <Image
            src={blogData.image_url}
            alt="blog-post-pic"
            width={299}
            height={200}
          />
        </div>
        <div className="cardBody">
          <h3>{blogData.name}</h3>
          <h2>
            Category: <b className="fs-4 text-red-500">{blogData.category}</b>
          </h2>
          <p>{blogData.description}</p>
          <div className="moreAboutBtn my-4">
            <button className="btn btn-primary">Read More &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostCard;
