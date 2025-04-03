import React from "react";
import { Link } from "react-router-dom";


function TeamDetailMainSec() {
  return (
    <>
      {/* ==== team details section start ==== */}
      <section className="team-details pt-120 pb-120">
        <div className="container">
          <div className="row gutter-30 align-items-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <div
                className="team-details__thumb"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <img src="/assets/images/team/thumb.png" alt="Image" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div
                className="team-details__content"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="team-details__meta">
                  <div className="team-details__intro">
                    <h4 className="title-animation">Jason Farmer</h4>
                    <p className="designation">Volunteer</p>
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
                <div className="progress-wrapper">
                  <div className="cause__progress progress-bar-single">
                    <div className="cause-progress__bar">
                      <p>Donation Collect</p>
                      <div className="progress-bar-wrapper" data-percent="70%">
                        <div className="progress-bar">
                          <div className="progress-bar-percent">
                            <span className="percent-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cause__progress progress-bar-single">
                    <div className="cause-progress__bar">
                      <p>Successful Events</p>
                      <div className="progress-bar-wrapper" data-percent="85%">
                        <div className="progress-bar">
                          <div className="progress-bar-percent">
                            <span className="percent-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-details__list">
                  <ul>
                    <li>
                      <i className="icon-circle-check" />
                      Best Quality Services
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Time Saving
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Meet the Deadlines
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      24/7 Customer Support
                    </li>
                  </ul>
                </div>
                <div className="team-details__cta cta mt-40">
                  <Link
                    to={"/Components/DonateUs"}
                    aria-label="make a donation"
                    title="make a donation"
                    className="btn--secondary"
                    data-text="Donate With Me"
                  >
                    {" "}
                    <span>Donate With Me</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="about-me"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <h4 className="title-animation">About Me</h4>
                <p>
                  This category focuses on the design construction of buildings
                  and the This a category focuses on the design and construction
                  of buildings This category a focuses on the design
                  construction of buildings and the This a category of thfocuses
                  on the design This category focuses on the design construction
                  of buildings and the This a category focuses on the design and
                  construction of buildings This category a focuses on the
                  design construction of buildings and the This a category of
                  thfocuses on the design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== team details section end ==== */}
    </>
  );
}

export default TeamDetailMainSec;
