import React from 'react'

function HomeCounterTeamSec() {
  return (
    <>
    {/* ==== counter section start ==== */}
    <section className="counter-area count-alt">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div className="row gutter-40">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="counter__single">
                    <div className="counter__single-icon">
                      <div className="counter__single-icon__inner">
                        <i className="icon-support-hand" />
                      </div>
                    </div>
                    <div className="service__counter-single-content">
                      <h3>
                        <span className="odometer" data-odometer-final={300} />
                        <span className="prefix">+</span>
                      </h3>
                      <p>Team Members</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="counter__single">
                    <div className="counter__single-icon">
                      <div className="counter__single-icon__inner">
                        <i className="icon-review" />
                      </div>
                    </div>
                    <div className="service__counter-single-content">
                      <h3>
                        <span className="odometer" data-odometer-final={500} />
                        <span className="prefix">+</span>
                      </h3>
                      <p>Client's Review</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="counter__single">
                    <div className="counter__single-icon">
                      <div className="counter__single-icon__inner">
                        <i className="icon-award" />
                      </div>
                    </div>
                    <div className="service__counter-single-content">
                      <h3>
                        <span className="odometer" data-odometer-final={99} />
                        <span className="prefix">+</span>
                      </h3>
                      <p>Winning Awards</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="counter__single">
                    <div className="counter__single-icon">
                      <div className="counter__single-icon__inner">
                        <i className="icon-documents" />
                      </div>
                    </div>
                    <div className="service__counter-single-content">
                      <h3>
                        <span className="odometer" data-odometer-final={800} />
                        <span className="prefix">+</span>
                      </h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / counter section end ==== */}
    {/* ==== team section start ==== */}
    <section className="team-area pt-120 pb-120" id="teamSec">
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
                Meet Our Dedicated Team Members
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
        <div className="row">
          <div className="col-12">
            <div className="team-two__inner">
              <div className="team-two-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/one.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Andren Willium</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/two.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Cathy Decosta</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/three.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Thomas Ster</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/one.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Andren Willium</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/two.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Cathy Decosta</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team__single">
                      <div className="thumb-wrapper">
                        <div className="thumb">
                          <img src="/assets/images/team/three.png" alt="Image" />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle
                              cx={150}
                              cy={150}
                              r={130}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="social">
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
                      <div className="content">
                        <span>Volunteer</span>
                        <h4>
                          <a href="team-details.html">Thomas Ster</a>
                        </h4>
                        <p>
                          <a href="tel:256-255-6579">
                            <i className="ph ph-phone-call" /> Call: +256 255
                            6579
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-navigation">
                <button
                  type="button"
                  aria-label="prev slide"
                  title="prev slide"
                  className="prev-team slider-btn"
                >
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                  type="button"
                  aria-label="next slide"
                  title="next slide"
                  className="next-team slider-btn slider-btn-next"
                >
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / team section end ==== */}

    </>
  )
}

export default HomeCounterTeamSec
