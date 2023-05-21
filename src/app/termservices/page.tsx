import React from 'react'
import Navbar from '@/../components/Navbar'
import MobileHeader from '@/../components/MobileHeader'
import Footer from '@/../components/Footer'

const page = () => {
    return (
        <>
            <MobileHeader />
            <Navbar />
            <div className="term_servicesBox">
                <div className="term_services-conatiner">
                    <div className="termserivices_Head_Line"><h1>Terms and Conditions</h1></div>
                    <div className="termsrvices_aboutDesc_Line">
                        <h3>Website Terms and Conditions of Use</h3>
                        <h1><b>1. Terms</b></h1>
                        <p>By accessing this Website, accessible from www.aio.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p><br />

                        <h1><b>2. Use License</b></h1>
                        <p>Permission is granted to temporarily download one copy of the materials on AIO{"'"}s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p><br />

                        <ul className="listLicences">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on AIO{"'"}s Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials;</li>
                        </ul>
                        <p>ortransferring the materials to another person or {"mirror"} the materials on any other server.This will let AIO to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>

                        <h1><b>3. Disclaimer</b></h1>
                        <p>All the materials on AIO{"'"}s Website are provided {"as is"}. AIO makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, AIO does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p><br />

                        <h1><b>4. Limitations</b></h1>
                        <p>AIO or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on AIO{"'"}s Website, even if AIO or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p><br />

                        <h1><b>5. Revisions and Errata</b></h1>
                        <p>The materials appearing on AIO{"'"}s Website may include technical, typographical, or photographic errors. AIO will not promise that any of the materials in this Website are accurate, complete, or current. AIO may change the materials contained on its Website at any time without notice. AIO does not make any commitment to update the materials.</p><br />

                        <h1><b>6. Links</b></h1>
                        <p>AIO has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by AIO of the site. The use of any linked website is at the user{"'"}s own risk.</p><br />

                        <h1><b>7. Site Terms of Use Modifications</b></h1>
                        <p>AIO may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p><br />

                        <h1><b>8. Your Privacy</b></h1>
                        <p>Please read our Privacy Policy.</p><br />

                        <h1><b>9. Governing Law</b></h1>
                        <p>Any claim related to AIO{"'"}s Website shall be governed by the laws of Pakistan without regards to its conflict of law provisions.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
