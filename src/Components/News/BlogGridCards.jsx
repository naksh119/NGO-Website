import React from "react";
import { Link } from "react-router-dom";

function BlogGridCards() {
  return (
    <>
      {/* ==== blog section start ==== */}
      <section className="blog-main blog cm-details pt-120 pb-120">
        <div className="container">
          <div className="row gutter-60">
            <div className="col-12 col-xl-8">
              <div className="row gutter-30">
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                        <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/Smile.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                          <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Health
                          </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (03)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                          <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                            </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                      <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/education.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Education
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (08)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={600}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/food2.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Food
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (13)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/child.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Health
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (03)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/education3.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Education
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (08)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={600}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/child4.avif"
                            alt="Image"
                          />
                       </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Food
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (13)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/Smile.jpg"
                            alt="Image"
                          />
                        </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Health
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (03)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                              </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                        <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <div className="blog__single van-tilt">
                      <div className="blog__single-thumb">
                       <Link to={"/Components/BlogDetails"}>
                          <img
                            src="/assets/images/thumbs/education.jpg"
                            alt="Image"
                          />
                       </Link>
                        <div className="tag">
                        <Link to={"/Components/PageNotFound"}>
                            <i className="fa-solid fa-tags" />
                            Education
                        </Link>
                        </div>
                      </div>
                      <div className="blog__single-inner">
                        <div className="blog__single-meta">
                          <p>
                            <i className="icon-user" />
                            Robert Fox
                          </p>
                          <p>
                            <i className="icon-message" />
                            Comments (08)
                          </p>
                        </div>
                        <div className="blog__single-content">
                          <h5>
                           <Link to={"/Components/BlogDetails"}>
                              IT Service Case Studies Accelerate Business Fly
                              Success Tech
                            </Link>
                          </h5>
                        </div>
                        <div className="blog__single-cta">
                          <Link
                            to={"/Components/BlogDetails"}
                            aria-label="blog details"
                            title="blog details"
                          >
                            Read More
                            <i className="fa-solid fa-circle-arrow-right" />
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
            <div className="col-12 col-xl-4">
              <div className="blog-main__sidebar">
                <div
                  className="cm-details-author cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="author-thumb">
                    <img src="/assets/images/author-two.png" alt="Image" />
                  </div>
                  <div className="author-meta">
                    <h6>Rosalina Willaim</h6>
                    <p>Front End Developer</p>
                    <p>
                      he whimsically named Egg Canvas is the design director and
                      photographer in New York.
                    </p>
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
                <div className="cm-details__sidebar" style={{ overflowY: "scroll", height: "600px" }}>
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
                      <h5>Recent Posts</h5>
                    </div>
                    <div className="cm-sidebar-post">
                      <div className="single-item">
                        <div className="thumb">
                         <Link to={"/Components/BlogDetails"}>
                            <img
                             src="/assets/images/thumbs/child3.jpg"
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
                            <img
                              src="/assets/images/thumbs/child.jpg"
                              alt="Image"
                            />
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
                      <h5>Categories</h5>
                    </div>
                    <div className="cm-categories">
                       <Link to={"/Components/PageNotFound"}>
                        <span>Donation</span>
                        <span>05</span>
                    </Link>
                    <Link to={"/Components/PageNotFound"}>
                        <span>Charity</span>
                        <span>02</span>
                    </Link>
                    <Link to={"/Components/PageNotFound"}>
                        <span>Volunteer</span>
                        <span>09</span>
                    </Link>
                    <Link to={"/Components/PageNotFound"}>
                        <span>Health</span>
                        <span>07</span>
                    </Link>
                    <Link to={"/Components/PageNotFound"}>
                        <span>Education</span>
                        <span>04</span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="cm-sidebar-widget"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className="intro">
                      <h5>Popular Tags</h5>
                    </div>
                    <div className="tag-wrapper">
                      <Link to={"/Components/Shop"}>t-shir</Link>
                       <Link to={"/Components/Shop"}>Banner Desig</Link>
                       <Link to={"/Components/Shop"}>Brochure</Link>
                       <Link to={"/Components/Shop"}>Landin</Link>
                       <Link to={"/Components/Shop"}>Prin</Link>
                       <Link to={"/Components/Shop"}>Business Car</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== / blog section end ==== */}
    </>
  );
}

export default BlogGridCards;
