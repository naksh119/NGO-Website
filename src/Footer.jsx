import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
        {/* ==== footer start ==== */}
        <footer className="footer footer-two pt-120">
          <div className="container">
            <div className="row align-items-center gutter-30">
              <div className="col-12 col-lg-7 col-xxl-6">
                <div className="footer__newsletter-content">
                  <h3 className="title-animation">Subscribe to Our Newsletter</h3>
                  <p>Regular inspections and feedback mechanisms</p>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
                <div className="footer__newsletter-form">
                  <form action="#" method="post">
                    <input
                      type="email"
                      required=""
                      name="subscribe-email"
                      id="subscribeEmail"
                      placeholder="Enter Email"
                    />
                    <button
                      type="submit"
                      aria-label="subscribe to our newsletter"
                      title="subscribe to our newsletter"
                      className="btn--tertiary"
                    >
                      {" "}
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr className="divider" />
              </div>
            </div>
            <div className="row gutter-60">
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="footer__widget"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  <div className="footer__logo">
                    <Link to={"/"}>
                      <img
                        src="/assets/logo.png"
                        alt="Image"
                        style={{ maxWidth: 100, height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="footer__widget-content">
                    <p>
                      Mission Hope Foundation empowers underprivileged communities
                      through education, healthcare, and sustainable development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-2">
                <div
                  className="footer__widget"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="footer__widget-intro">
                    <h5>Quick Links</h5>
                    <div className="line">
                      <span className="large-line" />
                      <span className="small-line" />
                      <span className="small-line" />
                    </div>
                  </div>
                  <div className="footer__widget-content">
                    <ul className="footer__widget-list">
                      <li>
                      <Link to={"/Components/About"}>
                          <i className="fa-solid fa-angle-right" /> About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Components/DonateUs"}>
                          <i className="fa-solid fa-angle-right" />
                          Donate Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Components/OurCauses"}>
                          <i className="fa-solid fa-angle-right" />
                          Our Causes
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Components/OurTeam"}>
                          <i className="fa-solid fa-angle-right" /> Our Team
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Components/Event"}>
                          <i className="fa-solid fa-angle-right" />
                          Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div
                  className="footer__widget"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={400}
                >
                  <div className="footer__widget-intro">
                    <h5>Top News</h5>
                    <div className="line">
                      <span className="large-line" />
                      <span className="small-line" />
                      <span className="small-line" />
                    </div>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__blog-single">
                      <div className="thumb">
                        <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/blog/footer-one.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6>
                        <Link to={"/Components/BlogDetails"}>
                            Unity in Giving Community Charity
                          </Link>
                        </h6>
                        <p>Aug 25, 2024</p>
                      </div>
                    </div>
                    <div className="footer__blog-single">
                      <div className="thumb">
                      <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/blog/footer-two.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6>
                        <Link to={"/Components/BlogDetails"}>
                            Poverty Not Only Money It Can
                          </Link>
                        </h6>
                        <p>Aug 25, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div
                  className="footer__widget"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={600}
                >
                  <div className="footer__widget-intro">
                    <h5>Get In Touch</h5>
                    <div className="line">
                      <span className="large-line" />
                      <span className="small-line" />
                      <span className="small-line" />
                    </div>
                  </div>
                  <div className="footer__widget-content">
                    <ul className="footer__contact-list">
                      <li>
                        <a
                          href="https://www.google.com/maps/place/Kentucky,+USA/@37.8172108,-87.087054,8z/data=!3m1!4b1!4m6!3m5!1s0x8842734c8b1953c9:0x771f6f4ec5ccdffc!8m2!3d37.8393332!4d-84.2700179!16zL20vMDQ5OHk?entry=ttu"
                          target="_blank"
                        >
                          <i className="fa-solid fa-location-dot" />
                          Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                        </a>
                      </li>
                      <li>
                        <a href="tel:2305-587-3407">
                          <i className="fa-solid fa-phone-flip" />
                          +2(305) 587-3407
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@example.com">
                          <i className="fa-regular fa-envelope" />
                          info@example.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer__bottom-inner">
                    <div className="row align-items-center gutter-24">
                      <div className="col-12 col-lg-7">
                        <div className="footer__bottom-left">
                          <ul className="footer__bottom-list justify-content-center justify-content-lg-start">
                            <li>
                              <Link to={"/Components/ContactUs"}>Contact us</Link>
                            </li>
                            <li>
                              <span />
                            </li>
                            <li>
                              <Link to={"/Components/PageNotFound"}>
                                Terms &amp; Conditions
                              </Link>
                            </li>
                            <li>
                              <span />
                            </li>
                            <li>
                            <Link to={"/Components/Privacypolicy"}>Privacy Policy</Link>
                            </li>
                          </ul>
                          <p className="text-center text-lg-start">
                            Copyright © <span id="copyrightYear" />{" "}
                            <Link to={"/"}>
                              Mission Hope Foundation
                            </Link>
                            . All rights reserved. Website made by{" "}
                            <a href="Nakshatra Sharma" target="_blank">
                             Nakshatra
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="footer__bottom-right">
                          <div className="social justify-content-center justify-content-lg-end">
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              aria-label="share us on facebook"
                              title="facebook"
                            >
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a
                              href="https://vimeo.com/"
                              target="_blank"
                              aria-label="share us on vimeo"
                              title="vimeo"
                            >
                              <i className="fa-brands fa-vimeo-v" />
                            </a>
                            <a
                              href="https://x.com/"
                              target="_blank"
                              aria-label="share us on twitter"
                              title="twitter"
                            >
                              <i className="fa-brands fa-twitter" />
                            </a>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              aria-label="share us on linkedin"
                              title="linkedin"
                            >
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
            <img src="/assets/images/sprade.png" alt="Image" className="base-img" />
          </div>
          <div className="sprade-light" data-aos="zoom-in" data-aos-duration={1000}>
            <img src="/assets/images/sprade-light.png" alt="Image" />
          </div>
          <div
            className="footer__thumb-right"
            data-aos="fade-left"
            data-aos-duration={1000}
          >
            <img src="/assets/images/mask/footer-right.png" alt="Image" />
          </div>
        </footer>
        {/* ==== / footer end ==== */}
      </>
  )
}

export default Footer
