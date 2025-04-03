import React from 'react'
import { Link } from 'react-router-dom'

function HomeBanner() {
  return (
  <>
    {/* ==== banner section start ==== */}
    <section className="banner-two">
      <div className="banner-two__slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="banner-two__slider-single">
              <div
                className="banner-two__slider-bg"
                data-background="/assets/images/thumbs/child3.jpg"
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-7 col-xxl-7">
                    <div className="banner-two__slider-content">
                      <span className="sub-title">
                        Welcome to Mission Hope Foundation
                      </span>
                      <h1>
                        Let's Build <br />A Better{" "}
                        <span className="bottom-line">Tomorrow</span>
                        Together
                      </h1>
                      <div className="banner__content-cta mt-40">
                        <Link
                          to={"/Components/OurCauses"}
                          aria-label="Our Causes"
                          title="our causes"
                          className="btn--primary"
                        >
                          Our Mission
                        </Link>
                        <Link
                          to={"/Components/DonateUs"}
                          aria-label="contact us"
                          title="contact us"
                          data-text="Donate Now"
                          className="btn--secondary"
                        >
                          <span>Donate Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="banner-two__slider-single">
              <div
                className="banner-two__slider-bg"
                data-background="assets/images/thumbs/education6.jpg"
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-9  col-lg-7 col-xxl-7">
                    <div className="banner-two__slider-content">
                      <span className="sub-title">
                        Community Empowerment &amp; Child Education
                      </span>
                      <h1>
                        Support Education <br />
                        For Underprivileged{" "}
                        <span className="bottom-line">Children</span>
                      </h1>
                      <div className="banner__content-cta mt-40">
                        <Link
                          to={"/Components/OurCauses"}
                          aria-label="about us"
                          title="about us"
                          className="btn--primary"
                        >
                          Our Projects
                        </Link>
                        <Link
                          to={"/Components/ContactUs"}
                          aria-label="contact us"
                          title="contact us"
                          data-text="Volunteer"
                          className="btn--secondary"
                        >
                          <span>Volunteer</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="banner-two__slider-single">
              <div
                className="banner-two__slider-bg"
                data-background="/assets/images/thumbs/Health1.jpg"
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-7 col-xxl-7">
                    <div className="banner-two__slider-content">
                      <span className="sub-title">Healthcare for All</span>
                      <h1>
                        Building Healthy <br />
                        Lives &amp; Strong{" "}
                        <span className="bottom-line">Communities</span>
                      </h1>
                      <div className="banner__content-cta mt-40">
                        <Link
                          to={"/Components/OurCauses"}
                          aria-label="about us"
                          title="about us"
                          className="btn--primary"
                        >
                          Health Programs
                        </Link>
                        <Link
                          to={"/Components/DonateUs"}
                          aria-label="contact us"
                          title="contact us"
                          data-text="Support Us"
                          className="btn--secondary"
                        >
                          <span>Support Us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="banner-two__slider-single">
              <div
                className="banner-two__slider-bg"
                data-background="/assets/images/thumbs/women(1).jpg"
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-7 col-xxl-7">
                    <div className="banner-two__slider-content">
                      <span className="sub-title">
                        Women Empowerment Initiative
                      </span>
                      <h1>
                        Empowering Women <br />
                        Towards{" "}
                        <span className="bottom-line">Self-Reliance</span>
                      </h1>
                      <div className="banner__content-cta mt-40">
                        <Link
                          to={"/Components/OurCauses"}
                          aria-label="about us"
                          title="about us"
                          className="btn--primary"
                        >
                          Women Programs
                        </Link>
                        <Link
                          to={"/Components/ContactUs"}
                          aria-label="contact us"
                          title="contact us"
                          data-text="Support Us"
                          className="btn--secondary"
                        >
                          <span>Contribute</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-navigation d-none d-md-flex">
        <button
          type="button"
          aria-label="prev slide"
          title="prev slide"
          className="prev-banner slider-btn"
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          type="button"
          aria-label="next slide"
          title="next slide"
          className="next-banner slider-btn slider-btn-next"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
      <div
        className="shape-left"
        data-aos="fade-right"
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src="/assets/images/banner/banner-two-shape.png"
          alt="Image"
          className="base-img"
        />
      </div>
      <div className="sprade-shape">
        <img
          src="/assets/images/sprade-base.png"
          alt="Image"
          className="base-img"
          data-aos="zoom-in"
          data-aos-duration={1000}
        />
      </div>
      <div className="unity">
        <img src="/assets/images/unity.png" alt="Image" />
      </div>
    </section>
    {/* ==== / banner section end ==== */}

    </>
  )
}

export default HomeBanner
