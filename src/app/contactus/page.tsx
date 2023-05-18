import React from "react";
import MobileHeader from "@/../components/MobileHeader";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";

const page = () => {
  return (
    <>
      <MobileHeader />
      <Navbar />
      <div className="contactUsBox">
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 contactBox">
                <h2>Contact Us</h2>
                <p>Fill out the form below to get in touch with us.</p>
                <form className="contactUsForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary my-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;

// rough
