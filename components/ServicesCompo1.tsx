import React from 'react'
import Image from 'next/image'

const ServicesCompo1 = ({ headingline, aboutLine, ImageUrl, btnTitle }: any) => {
  return (
    <>
      <div className="servicesCompo1-box">
        <div className="ser1-conatainer">
          <div className="servicesAboutBox">
            <h1>{headingline}</h1>
            <div className="aboutServicesCompo">
              <p className="aboutService2">{aboutLine.slice(0, 600)}...</p>
              <button className='btn btn-primary'>{btnTitle} &rarr;</button>
            </div>
          </div>
          <div className="services1-illustarateBox">
            <Image src={ImageUrl} alt='servicesPic' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesCompo1;
