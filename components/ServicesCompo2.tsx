import React from 'react'
import Image from 'next/image'

const ServicesCompo2 = ({ headingline, aboutLine, ImageUrl, headingLinePart2, headingLinePart3, sertImageUrl, btnTitle }: any) => {
    return (
        <>
            <div className="servicesCompo2-box">
                <div className="ser2-conatainer">
                    <div className="services2-illustarateBox">
                        <Image src={ImageUrl} alt='servicesPic' />
                    </div>
                    <div className="services2AboutBox">
                        <div className="service2AboutHeadingBox">
                            <Image src={sertImageUrl} alt='certificate-pic' />
                            <h1>{headingline}<b>{headingLinePart2}</b>{headingLinePart3}</h1>
                        </div>
                        <div className="aboutServicesCompo">
                            <p className="aboutService2">{aboutLine.slice(0, 600)}...</p>
                            <button className='btn btn-primary'>{btnTitle} &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCompo2
