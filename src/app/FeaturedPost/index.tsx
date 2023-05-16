import React from "react";
import FeaturedPostSlider from "@/../components/FeaturedPostSlider";

export default function FeaturedPost() {
  return (
    <div>
      <div className="featured-post bg-secondary bg-gradient">
        <h1>Featured Post</h1>
        <FeaturedPostSlider />
      </div>
    </div>
  );
}
