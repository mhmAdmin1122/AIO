import React from 'react'
import Navbar from '@/../components/Navbar'
import MobileHeader from '@/../components/MobileHeader'
import Footer from '@/../components/Footer'
import Image from 'next/image'
import coprrightPic from '@/../public/images/copyright.png'

const page = () => {
    return (
        <>
            <Navbar />
            <MobileHeader />
            <div className="copyrightInfrigments">
                <div className="copyrightInfrigmentsBox">
                    <div className="cpyRgtInfrgments-head-line">
                        <Image src={coprrightPic} alt='copyright-pic' />
                        <h1>COPYRIGHT INFRINGEMENTS</h1>
                    </div>
                    <p>
                        We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below {"(a “Notification”)"}. A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
