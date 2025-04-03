import React from 'react'

function AboutFreqContactSec() {
  return (
    <>
    {/* ==== contact section start ==== */}
    <section className="contact-mc" id="contactSec">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-10 col-xl-7">
            <div className="contact__content pt-120 pb-120">
              <div
                className="section__header mb-55"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">Get In Touch</span>
                <h2 className="title-animation">
                  Send Us message For donation!
                </h2>
              </div>
              <div
                className="contact__form"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <form action="#" method="post">
                  <div className="input-group">
                    <div className="input-single">
                      <input
                        type="email"
                        name="contact-email"
                        id="contactEmail"
                        required=""
                        placeholder="your email..."
                      />
                      <i className="fa-solid fa-paper-plane" />
                    </div>
                    <div className="input-single">
                      <input
                        type="text"
                        name="contact-number"
                        id="contactNumber"
                        required=""
                        placeholder="your phone..."
                      />
                      <i className="fa-solid fa-phone" />
                    </div>
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      name="contact-address"
                      id="contactAddress"
                      placeholder="your address..."
                    />
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="input-single alter-input">
                    <textarea
                      name="contact-message"
                      id="contactMessage"
                      placeholder="your message..."
                      defaultValue={""}
                    />
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="form-cta">
                    <button
                      type="submit"
                      aria-label="submit message"
                      title="submit message"
                      className="btn--secondary"
                      data-text="Get A Quote"
                    >
                      <span>Get A Quote</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-bg">
        <img
          src="/assets/images/thumbs/child3.jpg"
          alt="Image"
          className="parallax-image"
        />
      </div>
      <div
        className="shape-left"
        data-aos="fade-down"
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src="/assets/images/shape-left.png"
          alt="Image"
          className="base-img"
        />
      </div>
    </section>
    {/* ==== / contact section end ==== */}

        {/* ==== faq section start ==== */}
        <section className="faq pt-120 pb-120 primary-bg" id="faqSec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="faq__content">
              <div
                className="section__header mb-55"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span>Answers to Common Inquiries</span>
                <h2 className="title-animation">Frequently Asked Questions</h2>
              </div>
              <div
                className="faq__content-inner cta"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="accordion" id="accordion">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is the main mission of your NGO?
                      </button>
                    </h6>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Our NGO is dedicated to improving the lives of
                          underprivileged communities through education,
                          healthcare, and skill development programs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How can I contribute or donate?
                      </button>
                    </h6>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          You can support us by making a donation, volunteering,
                          or spreading awareness about our cause. Visit our "Get
                          Involved" section for more details.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you provide financial transparency reports?
                      </button>
                    </h6>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we ensure complete transparency by publishing our
                          annual reports and financial statements on our website
                          for public review.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How do you select beneficiaries for your programs?
                      </button>
                    </h6>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We conduct thorough assessments and collaborate with
                          local communities to identify individuals and groups
                          that need assistance the most.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I volunteer with your organization?
                      </button>
                    </h6>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Absolutely! We welcome passionate individuals who want
                          to contribute their time and skills. Visit our
                          "Volunteer" section to learn how you can get involved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-5">
            <div className="faq__thumb d-none d-lg-block">
              <div className="faq__thumb-inner">
                <div
                  className="thumb-lg"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src="/assets/images/thumbs/child.jpg" alt="NGO Mission" />
                </div>
                <div
                  className="thumb-sm"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src="/assets/images/thumbs/barike.jpg" alt="Volunteers" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / faq section end ==== */}

    </>
  )
}

export default AboutFreqContactSec
