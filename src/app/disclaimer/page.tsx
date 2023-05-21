import React from "react";
import Image from "next/image";
import disclaimerPic from "@/../public/images/disclaimer.png";
import MobileHeader from "@/../components/MobileHeader";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Head from "next/head";

const page = () => {
  return (
    <>
      <MobileHeader />
      <Navbar />
      <div className="disclaimerBox">
        <div className="dicslaimer-container">
          <div className="disclamerTitlePic">
            <Image src={disclaimerPic} alt="disclaimer-Pic" />
            <h1 className="disclaimerTitle">Disclaimer</h1>
          </div>
          <div className="disclaimerLines">
            <div className="disclaimerAbout">
              <b>Disclaimer for AIO:</b>
              <br />
              <p>
                If you require any more information or have any questions about
                our site{"'"}s disclaimer, please feel free to contact us by
                email at hasaanmumtaz6@gmail.com.
              </p>{" "}
              <br />
              <h1>
                <b>Disclaimers for AIO</b>
              </h1>
              <p>
                All the information on this website - www.aioass.techa - is
                published in good faith and for general information purpose
                only. AIO does not make any warranties about the completeness,
                reliability and accuracy of this information. Any action you
                take upon the information you find on this website {"(AIO)"}, is
                strictly at your own risk. AIO will not be liable for any losses
                and/or damages in connection with the use of our website. From
                our website, you can visit other websites by following
                hyperlinks to such external sites. While we strive to provide
                only quality links to useful and ethical websites, we have no
                control over the content and nature of these sites. These links
                to other websites do not imply a recommendation for all the
                content found on these sites. Site owners and content may change
                without notice and may occur before we have the opportunity to
                remove a link which may have gone
                {"bad"}. Please be also aware that when you leave our website,
                other sites may have different privacy policies and terms which
                are beyond our control. Please be sure to check the Privacy
                Policies of these sites as well as their {"Terms of Service"}{" "}
                before engaging in any business or uploading any information.{" "}
              </p>
              <br />
              <h1>
                <b>Consent</b>
              </h1>
              <p>
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.{" "}
              </p>
              <br />
              <h1>
                <b>Update</b>
              </h1>
              <p>
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
