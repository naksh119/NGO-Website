import React from "react";
import { Link } from "react-router-dom";

function HomeBlogGallSec() {
  return (
    <>
      {/* ==== blog section start ==== */}
      <section className="blog-area pt-120 pb-120" id="blogSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-5">
              <div
                className="section__header text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span>Discover powerful stories</span>
                <h2 className="title-animation">
                  Latest Updates and Impactful Stories
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
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="blog__single"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="blog__single-thumb">
                  <Link to={"/Components/BlogDetails"}>
                    <img
                      src="/assets/images/thumbs/education.jpg"
                      alt="Image"
                    />
                  </Link>
                </div>
                <div
                  className="blog__single-content"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <div className="time">
                    <span>July</span>
                    <span>25</span>
                  </div>
                  <div className="tag">
                    <Link to={"/Components/PageNotFound"}>
                      <i className="fa-solid fa-tags" />
                      Education
                    </Link>
                  </div>
                  <div className="blog__single-title">
                    <h5>
                      <Link to={"/Components/BlogDetails"}>
                        IT Service Case Studies Accelerate Business
                      </Link>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                    <Link to={"/Components/BlogDetails"}>
                      Read More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="blog__single"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className="blog__single-thumb">
                  <Link to={"/Components/BlogDetails"}>
                    <img src="/assets/images/thumbs/OIP.jpg" alt="Image" />
                  </Link>
                </div>
                <div
                  className="blog__single-content"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={600}
                >
                  <div className="time">
                    <span>July</span>
                    <span>25</span>
                  </div>
                  <div className="tag">
                    <Link to={"/Components/PageNotFound"}>
                      <i className="fa-solid fa-tags" /> Health
                    </Link>
                  </div>
                  <div className="blog__single-title">
                    <h5>
                      <Link to={"/Components/BlogDetails"}>
                        IT Service Case Studies Accelerate Business
                      </Link>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                  <Link to={"/Components/BlogDetails"}>
                      Read More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="blog__single"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={800}
              >
                <div className="blog__single-thumb">
                  <Link to={"/Components/BlogDetails"}>
                    <img src="assets/images/thumbs/food2.jpg" alt="Image" />
                  </Link>
                </div>
                <div
                  className="blog__single-content"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={1000}
                >
                  <div className="time">
                    <span>July</span>
                    <span>25</span>
                  </div>
                  <div className="tag">
                    <Link to={"/Components/PageNotFound"}>
                      <i className="fa-solid fa-tags" /> Food
                    </Link>
                  </div>
                  <div className="blog__single-title">
                    <h5>
                      <Link to={"/Components/BlogDetails"}>
                        IT Service Case Studies Accelerate Business
                      </Link>
                    </h5>
                  </div>
                  <div className="blog__single-cta">
                    <Link to={"/Components/BlogDetails"}>
                      Read More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== / blog section end ==== */}
      {/* ==== image gallery section start ==== */}
      <div className="gallery">
        <div className="gallery__inner">
          <div className="gallery__slider">
            <div className="gallery__single">
              <img src="assets/images/thumbs/barike.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/education.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/child2.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/cutie.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/Smile2.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/Health.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/barike.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/education.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/child2.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/cutie.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/Smile2.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <div className="gallery__single">
              <img src="assets/images/thumbs/Health.jpg" alt="Image" />
              <a href="index-one-page.html">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ==== / image gallery section end ==== */}
    </>
  );
}

export default HomeBlogGallSec;
