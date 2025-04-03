import React from 'react'
import { Link } from 'react-router-dom'

function HomeSliderSec() {
  return (
    <>
       {/* ==== cause slider section start ==== */}
    <section className="cause pt-120 pb-120" id="causeSec">
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
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="cause__slider-inner"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="cause__slider-single van-tilt">
                <div className="thumb">
                  <Link to={"/Components/OurCauses"}>
                    <img src="/assets/images/thumbs/food.jpg" alt="Image" />
                  </Link>
                  <div className="tag">
                    <Link to={"/Components/OurCauses"}>Health</Link>
                  </div>
                </div>
                <div className="content">
                  <h6>
                    <Link to={"/Components/Causes/OurCauses"}>Children We Work With</Link>
                  </h6>
                  <p>
                    We care for orphaned and underprivileged children, ensuring
                    their safety and well-being.
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
                      <div className="progress-bar-wrapper" data-percent="85%">
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
                </div>
                <div className="cause__cta">
                  <Link
                    to={"/Components/DonateUs"}
                    aria-label="donate now"
                    title="donate now"
                    className="btn--primary"
                  >
                    Donate Now <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="cause__slider-inner"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className="cause__slider-single van-tilt">
                <div className="thumb">
                  <Link to={"/Components/OurCauses"}>
                    <img src="/assets/images/thumbs/eduction2.jpg" alt="Image" />
                  </Link>
                  <div className="tag">
                    <Link to={"/Components/OurCauses"}>Food</Link>
                  </div>
                </div>
                <div className="content">
                  <h6>
                    <a href="cause-details.html">Help For Education</a>
                  </h6>
                  <p>
                    We provide learning resources and support to ensure every
                    child gets access to quality education.
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
                      <div className="progress-bar-wrapper" data-percent="90%">
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
                </div>
                <div className="cause__cta">
                  <Link
                    to={"/Components/DonateUs"}
                    aria-label="donate now"
                    title="donate now"
                    className="btn--primary"
                  >
                    Donate Now <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="cause__slider-inner"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <div className="cause__slider-single van-tilt">
                <div className="thumb">
                  <Link to={'/Components/OurCauses'}>
                    <img src="/assets/images/thumbs/children.jpg" alt="Image" />
                  </Link>
                  <div className="tag">
                  <Link to={'/Components/OurCauses'}>Health</Link>
                  </div>
                </div>
                <div className="content">
                  <h6>
                  <Link to={'/Components/OurCauses'}>Help For Food</Link>
                  </h6>
                  <p>
                    We provide nutritious meals to underprivileged children,
                    ensuring they grow healthy and strong.
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
                      <div className="progress-bar-wrapper" data-percent="75%">
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
                </div>
                <div className="cause__cta">
                  <Link
                    to={"/Components/DonateUs"}
                    aria-label="donate now"
                    title="donate now"
                    className="btn--primary"
                  >
                    Donate Now <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="mt-60 text-center">
              <Link
                to={"/Components/OurCauses"}
                data-text="Explore All"
                className="btn--secondary"
              >
                <span>Explore All</span>
              </Link>
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
  )
}

export default HomeSliderSec
