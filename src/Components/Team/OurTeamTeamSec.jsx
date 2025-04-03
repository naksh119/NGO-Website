import React from "react";
import { Link } from "react-router-dom";

function OurTeamTeamSec() {
  return (
    <>
      {/* ==== team sectiaaon start ==== */}
      <section className="team-area-two pt-120 pb-120">
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
          <div className="row gutter-40">
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                  <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/one.png" alt="Image" />
                    </Link>
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
                  <h5>
                    <Link to={"/Components/TeamDetails"}>Andren Willium</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/two.png" alt="Image" />
                    </Link>
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
                  <h5>
                  <Link to={"/Components/TeamDetails"}>Polly Matzinger</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={400}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/three.png" alt="Image" />
                    </Link>
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
                  <h5>
                  <Link to={"/Components/TeamDetails"}>Thomas Stewart</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={600}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/four.png" alt="Image" />
                    </Link>
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
                  <h5>
                  <Link to={"/Components/TeamDetails"}>Cathy Decosta</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                  <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/nine.png" alt="Image" />
                    </Link>
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
                  <h5>
                    <Link to={"/Components/TeamDetails"}>Andren Willium</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                  <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/ten.png" alt="Image" />
                    </Link>
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
                  <h5>
                    <Link to={"/Components/TeamDetails"}>Polly Matzinger</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={400}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <Link to={"/Components/TeamDetails"}>
                      <img src="/assets/images/team/eleven.png" alt="Image" />
                    </Link>
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
                  <h5>
                    <Link to={"/Components/TeamDetails"}>Thomas Stewart</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className="team__single"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={600}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <a href="team-details.html">
                      <img src="/assets/images/team/two.png" alt="Image" />
                    </a>
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
                  <h5>
                  <Link to={"/Components/TeamDetails"}>Cathy Decosta</Link>
                  </h5>
                  <p>
                    <a href="tel:256-255-6579">
                      <i className="fa-solid fa-phone-volume" /> Call: +256 255
                      6579
                    </a>
                  </p>
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
                    <Link to={"/Components/pageNotFound"}>1</Link>
                  </li>
                  <li>
                  <Link to={"/Components/pageNotFound"} className="active">
                      2
                    </Link>
                  </li>
                  <li>
                  <Link to={"/Components/pageNotFound"}>3</Link>
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
          <img src="/assets/images/sprade-green.png" alt="Image" />
        </div>
      </section>
      {/* ==== / team section end ==== */}
    </>
  );
}

export default OurTeamTeamSec;
