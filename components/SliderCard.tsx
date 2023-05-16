import React from "react";
import Image from "next/image";

const SliderCard = (prductData: any) => {
  return (
    <>
      <div
        className="cardBoxSlider sliderCard card mx-2 my-2 d-flex"
        style={{ width: "345px" }}
        key={prductData.id}
      >
        <div className="cardImage">
          <Image
            src={prductData.URL_Image}
            alt="cardProduct"
            width={78}
            height={78}
          />
        </div>
        <div className="cardBody">{prductData.ProductName}</div>
      </div>
    </>
  );
};

export default SliderCard;
