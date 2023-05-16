'use client'
import React from "react";
import BlogSlider from "@/../components/BlogSlider";
export default function Post() {
  return (
    <>
      <div className="recent-post bg-secondary">
        <h1>Recent Post</h1>
        <BlogSlider />
      </div>
    </>
  );
}
