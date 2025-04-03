import React from "react";
import { Link } from "react-router-dom";

function DonateUsMainSec() {
  return (
    <>
      {/* ==== donate us section start ==== */}
      <div className="cm-details donate-us community checkout faq pt-120 pb-120">
        <div className="container">
          <div className="row gutter-60">
            <div className="col-12 col-xl-8">
              <div className="cm-details__content">
                <div
                  className="cm-details__poster"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src="/assets/images/thumbs/education2.jpeg" alt="Image" style={{width:'100%',height:'100%'}} />
                </div>
                <div
                  className="donate-inner"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="cm-group">
                    <h3 className="title-animation">
                      Help Children Rise out of Poverty
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy a of the printing and type
                      setting industry Loreaim Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="cta">
                    <div className="community-donation">
                      <div className="community-donation__inner mt-60">
                        <h5>Support Where It Counts.</h5>
                        <div className="warning">
                          <div className="line">
                            <i className="fa-solid fa-triangle-exclamation" />
                          </div>
                          <p>
                            <strong>Notice:</strong> Test mode is enabled. While
                            in test mode no live donations are processed.
                          </p>
                        </div>
                        <div className="donation-form" data-aos-delay={300}>
                          <div className="donation-form__single">
                            <h5>Your Donation:</h5>
                            <div className="input-group-icon">
                              <div className="thumb">
                                <i className="fa-solid fa-dollar-sign" />
                              </div>
                              <input
                                type="text"
                                name="donation-amount"
                                id="donationAmount"
                              />
                            </div>
                            <div className="made-amount">
                              <span className="donation-amount">20</span>
                              <span className="donation-amount">50</span>
                              <span className="donation-amount active">
                                100
                              </span>
                              <span className="donation-amount">200</span>
                              <span className="donation-amount custom-amount">
                                Custom
                              </span>
                            </div>
                          </div>
                          <div className="donation-form__single">
                            <h5>Select Payment Method</h5>
                            <div className="radio-wrapper">
                              <div className="radio-single">
                                <input
                                  type="radio"
                                  id="testDonation"
                                  name="donation-payment"
                                  defaultChecked=""
                                />
                                <label htmlFor="testDonation">
                                  Test Donation
                                </label>
                              </div>
                              <div className="radio-single">
                                <input
                                  type="radio"
                                  id="offlineDonation"
                                  name="donation-payment"
                                  defaultChecked=""
                                />
                                <label htmlFor="offlineDonation">
                                  Offline Donation
                                </label>
                              </div>
                              <div className="radio-single">
                                <input
                                  type="radio"
                                  id="cardDonation"
                                  name="donation-payment"
                                  defaultChecked=""
                                />
                                <label htmlFor="cardDonation">
                                  Credit Card
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="cta">
                            <a
                              href="/Components/DonateUs"
                              aria-label="donate us"
                              title="donate us"
                              className="btn--secondary"
                              data-text="Donate Now"
                            >
                              <span>Donate Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="checkout__form">
                        <div className="intro">
                          <h5>Details Information</h5>
                        </div>
                        <form
                          action="https://webnextpro.com/tf/charitia/index.html"
                          method="post"
                        >
                          <div className="input-group">
                            <div className="input-single">
                              <input
                                type="text"
                                name="c-name"
                                id="cName"
                                placeholder="First Name"
                                required=""
                              />
                              <i className="fa-solid fa-user" />
                            </div>
                            <div className="input-single">
                              <input
                                type="text"
                                name="c-lastname"
                                id="clastName"
                                placeholder="Last Name"
                                required=""
                              />
                              <i className="fa-solid fa-user" />
                            </div>
                          </div>
                          <div className="input-group">
                            <div className="input-single">
                              <input
                                type="email"
                                name="c-email"
                                id="cEmail"
                                placeholder="Your Email"
                                required=""
                              />
                              <i className="fa-solid fa-envelope" />
                            </div>
                            <div className="input-single">
                              <input
                                type="text"
                                name="c-phone"
                                id="cPhone"
                                placeholder="Your Number"
                                required=""
                              />
                              <i className="fa-solid fa-phone" />
                            </div>
                          </div>
                          <div className="input-single">
                            <input
                              type="text"
                              name="c-address-two"
                              id="cAddressTwo"
                              placeholder="Your Address"
                              required=""
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
                              data-text="Save Informations"
                            >
                              <span>Save Informations</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="award pt-120 pb-120">
                <div className="row gutter-24">
                  <div className="col-12 col-lg-8">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="thumb">
                        <Link to={"/Components/EventDetails"}>
                          <img src="/assets/images/thumbs/child care.jpg" alt="Image" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={200}
                    >
                      <div className="thumb">
                      <Link to={"/Components/EventDetails"}>
                          <img src="/assets/images/thumbs/children.jpg" alt="Image" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className="thumb">
                      <Link to={"/Components/EventDetails"}>
                          <img src="/assets/images/thumbs/cutie.jpg" alt="Image" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      <div className="thumb">
                      <Link to={"/Components/EventDetails"}>
                          <img
                            src="/assets/images/thumbs/education.jpg"
                            alt="Image"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="faq__content-inner"
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
                        What kind of recipes can I find on your website?
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
                          It is a long established fact that a reader will be
                          distracted by the readable the a content of a page
                          when looking at its layout. Many desktop publishing
                          packages and web page editors.
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
                        Are the recipes suitable for beginners?
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
                          It is a long established fact that a reader will be
                          distracted by the readable the a content of a page
                          when looking at its layout. Many desktop publishing
                          packages and web page editors.
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
                        Do you offer cooking tips and techniques?
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
                          It is a long established fact that a reader will be
                          distracted by the readable the a content of a page
                          when looking at its layout. Many desktop publishing
                          packages and web page editors.
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
                        How frequently do you update your recipe collection?
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
                          It is a long established fact that a reader will be
                          distracted by the readable the a content of a page
                          when looking at its layout. Many desktop publishing
                          packages and web page editors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="cm-details__sidebar" style={{ overflowY: "scroll", height: "100vh" }}>
                <div
                  className="cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="intro">
                    <h5>Search Here</h5>
                  </div>
                  <form action="#" method="post">
                    <input
                      type="text"
                      name="search-product"
                      id="searchProduct"
                      placeholder="Search Here..."
                      required=""
                    />
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
                <div
                  className="cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="intro">
                    <h5>Recent Causes</h5>
                  </div>
                  <div className="cm-sidebar-post">
                    <div className="single-item">
                      <div className="thumb">
                        <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/child.jpg"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p>
                          <i className="fa-solid fa-calendar-days" />{" "}
                          <span>November 19, 2024</span>
                        </p>
                        <p>
                        <Link to={"/Components/BlogDetails"}>
                            Where Innovation Meets Foundation
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="thumb">
                      <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/child2.jpg"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p>
                          <i className="fa-solid fa-calendar-days" />{" "}
                          <span>November 19, 2024</span>
                        </p>
                        <p>
                        <Link to={"/Components/BlogDetails"}>
                            Where Innovation Meets Foundation
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="thumb">
                      <Link to={"/Components/BlogDetails"}>
                          <img src="/assets/images/thumbs/child4.avif" alt="Image" />
                        </Link>
                      </div>
                      <div className="content">
                        <p>
                          <i className="fa-solid fa-calendar-days" />{" "}
                          <span>November 22, 2024</span>
                        </p>
                        <p>
                        <Link to={"/Components/BlogDetails"}>
                            Structures That Stand, Dreams That Soar
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="intro">
                    <h5>Tags</h5>
                  </div>
                  <div className="tag-wrapper">
                    <Link to={"/Components/PageNotFound"}>t-shirt</Link>
                    <Link to={"/Components/PageNotFound"}>Banner Design</Link>
                    <Link to={"/Components/PageNotFound"}>Brochures</Link>
                    <Link to={"/Components/PageNotFound"}>Landing</Link>
                    <Link to={"/Components/PageNotFound"}>Print</Link>
                    <Link to={"/Components/PageNotFound"}>Business Card</Link>
                  </div>
                </div>
                <div
                  className="cm-sidebar-overview"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="cm-logo">
                    <img src="/assets/images/event/logo.png" alt="Image" />
                  </div>
                  <div className="cm-content">
                    <p>Small Donations Bigger Impact</p>
                    <h4>Education Health for Every Child</h4>
                  </div>
                  <div className="cm-cta">
                    <Link
                      to={"/Components/ContactUs"}
                      aria-label="contact us"
                      title="contact us"
                      data-text="Get A Quote"
                      className="btn--secondary"
                    >
                      {" "}
                      <span>Get A Quote</span>
                    </Link>
                  </div>
                  <img
                    src="/assets/images/event/overview.png"
                    alt="Image"
                    className="parallax-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==== / donate us section end ==== */}
    </>
  );
}

export default DonateUsMainSec;
