import React from "react";
import Image from "next/image";

const FeaturedPostCard = (featuredPostData: any) => {
  return (
    <>
      <div className="cardFeutredPostBox card">
        <div className="ImageBoxFpostSlider imageBox">
          <Image
            src={featuredPostData["Image-URL"]}
            alt="fpost-card-pic"
            width={300}
            height={230}
          />
        </div>
        <div className="cardbody featuredpostcardbody">
          <h2>{featuredPostData.cardName.slice(0, 25)}...</h2>
          <p>{featuredPostData.cardDesc.slice(0, 45)}...</p>
          <div className="moreAboutBtn my-4">
            <button className="btn btn-primary">Read More &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPostCard;
