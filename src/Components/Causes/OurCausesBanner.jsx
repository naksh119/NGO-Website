import React from "react";
import { Link } from "react-router-dom";

function OurCausesBanner() {
  return (
    <>
      {/* ==== banner section start ==== */}
      <section className="common-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="common-banner__content text-center">
                <h2 className="title-animation">Our Causes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bg">
          <img src="/assets/images/thumbs/child3.jpg" alt="Image" />
        </div>
        <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
          <img
            src="/assets/images/sprade-base.png"
            alt="Image"
            className="base-img"
          />
        </div>
        <div className="line">
          <img src="/assets/images/line.png" alt="Image" />
        </div>
      </section>
      {/* ==== / banner section end ==== */}

      {/* ==== cause slider section start ==== */}
      <section className="cause pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-5">
              <div
                className="section__header text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span>Supporting Our Cause Together</span>
                <h2 className="title-animation">
                  Support Our Mission and Make a Difference
                </h2>
                <div className="icon-thumb justify-content-center">
                  <div className="icon-thumb-single">
                    <span />
                    <span />
                  </div>
                  <i className="icon-donation" />
                  <div className="icon-thumb-single">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutter-30">
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                    <Link to={"/Components/PageNotFound"}>
                      <img
                        src="/assets/images/thumbs/child care.jpg"
                        alt="Image"
                      />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Health</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Children we work with
                    </Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">85%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="85%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                      to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img
                        src="/assets/images/thumbs/education.jpg"
                        alt="Image"
                      />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Food</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Help For Education
                    </Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">90%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="90%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img src="/assets/images/thumbs/food.jpg" alt="Image" />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Health</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Help For Food
                    </Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">75%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="75%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={900}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img src="/assets/images/thumbs//Health.jpg" alt="Image" />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Food</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Give health support
                    </Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">65%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="65%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img src="/assets/images/thumbs/girls.jpg" alt="Image" />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Health</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Children we work with</Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">85%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="85%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img
                        src="/assets/images/thumbs/education.jpg"
                        alt="Image"
                      />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Food</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Help For Education</Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">90%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="90%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img src="/assets/images/thumbs/food2.jpg" alt="Image" />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Health</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Help For Food</Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">75%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="75%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div
                className="cause__slider-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={900}
              >
                <div className="cause__slider-single van-tilt">
                  <div className="thumb">
                  <Link to={"/Components/PageNotFound"}>
                      <img src="/assets/images/thumbs/child4.avif" alt="Image" />
                    </Link>
                    <div className="tag">
                      <a href="/Components/OurCauses">Food</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                    <Link to={"/Components/PageNotFound"}>
                    Give health support</Link>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consete sadipscing elitr, sed
                      diam nonum
                    </p>
                  </div>
                  <div className="cause__slider-cta">
                    <div className="cause__progress progress-bar-single">
                      <div className="cause-progress__intro">
                        <p>
                          <span>Donation</span>
                          <span className="percent-value">65%</span>
                        </p>
                      </div>
                      <div className="cause-progress__bar">
                        <div
                          className="progress-bar-wrapper"
                          data-percent="65%"
                        >
                          <div className="progress-bar">
                            <div className="progress-bar-percent"></div>
                          </div>
                        </div>
                      </div>
                      <div className="cause-progress__goal">
                        <p>
                          Raised: <span className="raised">$8500</span>
                        </p>
                        <p>
                          Goal: <span className="goal">$1,0000</span>
                        </p>
                      </div>
                    </div>
                    <div className="cause__cta">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate now"
                        title="donate now"
                        className="btn--primary"
                      >
                        Donate Now{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="pagination-wrapper mt-60"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <ul className="pagination main-pagination">
                  <li>
                    <button>
                      <i className="fa-solid fa-angles-left" />
                    </button>
                  </li>
                  <li>
                    <Link to={"/Components/PageNotFound"}>1</Link>
                  </li>
                  <li>
                    <Link to={"/Components/PageNotFound"} className="active">
                      2
                    </Link>
                  </li>
                  <li>
                  <Link to={"/Components/PageNotFound"}>3</Link>
                  </li>
                  <li>
                    <button>
                      <i className="fa-solid fa-angles-right" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="spade">
          <img src="/assets/images/help/spade.png" alt="Image" />
        </div>
      </section>
      {/* ==== / cause slider section end ==== */}
    </>
  );
}

export default OurCausesBanner;
