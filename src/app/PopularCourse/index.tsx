import React from 'react'
import Image from 'next/image'
import pic from '../../../public/images/PopularCourseWave.svg'
import pic2 from '../../../public/images/PopularCourseWave2.svg'

export default function PopularCourse() {
  return (
    <>
    <div className="feature-container-course">
      <Image src={pic2} alt="designPic" />
      <div className="main-content feature-course">
        <h1>Feature Course</h1>
        
      </div>
      <Image src={pic} alt="designPic" />
      </div>
    </>
  )
}
