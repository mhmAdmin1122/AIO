import React from 'react'
import Image from 'next/image'
import eduServucesPic from '../public/images/educationService.svg'

const ServicesCompo1 = ({ headingline, aboutLine, ImageUrl }: any) => {
  return (
    <>
      <div className="servicesCompo1-box">
        <div className="ser1-conatainer">
          <div className="servicesAboutBox">
            <h1>{headingline}</h1>
            <p className="aboutService1">{aboutLine}</p>
          </div>
          <div className="services1-illustarateBox">
            <Image src={ImageUrl} alt='servicesPic' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesCompo1
