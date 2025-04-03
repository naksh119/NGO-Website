import React from 'react'
import { Link } from 'react-router-dom'

function BlogDetailMainSec() {
  return (
    <>
    {/* ==== blog details section start ==== */}
    <section className="blog-main cm-details pt-120 pb-120">
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
                <img src="/assets/images/thumbs/education6.jpg" alt="Image" />
              </div>
              <div className="cm-details-meta">
                <p>
                  <i className="fa-solid fa-calendar-days" />
                  02 Apr 2021
                </p>
                <p>
                  <i className="fa-solid fa-location-dot" />
                  684 West College St. Sun City, USA
                </p>
              </div>
              <div className="cm-group mt-60">
                <h3 className="title-animation">
                  Give african childrens a good education
                </h3>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations. It allows individuals
                  towards the a addressing social category that involves giving
                  financial or material support various causes of organizations.
                  It allows individuals towards addressing social
                </p>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations. It allows individuals
                  towards the a addressing social category
                </p>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations.
                </p>
              </div>
              <div className="cm-group mt-60">
                <div className="blockquote-wrapper">
                  <blockquote>
                    "Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat duis aute
                    irure dolor in reprehen derit in voluptate velit esse."
                  </blockquote>
                  <p>
                    <span className="line" />
                    <span className="quote-owner">Christian Bale</span>
                  </p>
                </div>
              </div>
              <div className="cm-group mt-60">
                <h3 className="title-animation">Summary</h3>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations. It allows individuals
                  towards the a addressing social category that involves giving
                  financial or material support various causes of organizations.
                  It allows individuals towards addressing social
                </p>
                <div className="cm-details__list">
                  <ul>
                    <li>
                      <i className="icon-circle-check" />
                      Empower Through Charity
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Giving Hope, Changing Lives
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Healing Communities
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Together We Can
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Compassion in Action
                    </li>
                    <li>
                      <i className="icon-circle-check" />
                      Every Act Counts
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cm-img-group mt-60">
                <div className="cm-img-single">
                  <img src="/assets/images/thumbs/child care.jpg" alt="Image" />
                </div>
                <div className="cm-img-single">
                  <img src="/assets/images/thumbs/child.jpg" alt="Image" />
                </div>
              </div>
              <div className="details-footer mt-60">
                <div className="details-tag">
                  <div className="tag-header">
                    <h6>Tags:</h6>
                  </div>
                  <div className="tag-wrapper">
                  <Link to={"/Components/DonateUs"}>Donation</Link>
                  <Link to={"/Components/DonateUS"}>Charity</Link>
                  </div>
                </div>
                <div className="details-tag">
                  <div className="tag-header">
                    <h6>Share:</h6>
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
              </div>
              <div
                className="blog-comment mt-120"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="comment-header mb-40">
                  <h4 className="mt-8 title-animation">03 Comments</h4>
                </div>
                <div className="comment-single">
                  <div className="thumb">
                    <img src="/assets/images/team/eleven.png" alt="Image" />
                  </div>
                  <div className="comment-single__content">
                    <h5>Martha Grey</h5>
                    <p>
                      Ut sint posse sit, eum sumo diam ea. Liber consectetuer in
                      mei, sea in imperdiet assueverit contentiones, an his cib.
                    </p>
                    <div className="comment-single__meta">
                      <button title="like" className="single">
                        <i className="icon-heart" /> Like
                      </button>
                      <div className="reply-button">
                        <button aria-label="reply">
                          <i className="fa-solid fa-reply" />
                          Reply
                        </button>
                      </div>
                      <p>2 min ago</p>
                    </div>
                    <div className="reply-comment">
                      <form action="#" method="post">
                        <div className="input-group">
                          <div className="input-single">
                            <textarea
                              placeholder="Join the discussion..."
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="btn-wrapper">
                            <button type="submit" className="btn--primary">
                              Reply
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="comment-single comment-single-reply">
                  <div className="thumb">
                    <img src="/assets/images/team/one.png" alt="Image" />
                  </div>
                  <div className="comment-single__content">
                    <h5>Jackie Dawson</h5>
                    <p>
                      Ut sint posse sit, eum sumo diam ea. Liber consectetuer in
                      mei, sea in imperdiet assueverit contentiones, an his cib.
                    </p>
                    <div className="comment-single__meta">
                      <button title="like" className="single">
                        <i className="icon-heart" /> Like
                      </button>
                      <div className="reply-button">
                        <button aria-label="reply">
                          <i className="fa-solid fa-reply" />
                          Reply
                        </button>
                      </div>
                      <p>2 min ago</p>
                    </div>
                    <div className="reply-comment">
                      <form action="#" method="post">
                        <div className="input-group">
                          <div className="input-single">
                            <textarea
                              placeholder="Join the discussion..."
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="btn-wrapper">
                            <button type="submit" className="btn--primary">
                              Reply
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="comment-single">
                  <div className="thumb">
                    <img src="/assets/images/author-two.png" alt="Image" />
                  </div>
                  <div className="comment-single__content">
                    <h5>Hesia Lara</h5>
                    <p>
                      Ut sint posse sit, eum sumo diam ea. Liber consectetuer in
                      mei, sea in imperdiet assueverit contentiones, an his cib.
                    </p>
                    <div className="comment-single__meta">
                      <button title="like" className="single">
                        <i className="icon-heart" /> Like
                      </button>
                      <div className="reply-button">
                        <button aria-label="reply">
                          <i className="fa-solid fa-reply" />
                          Reply
                        </button>
                      </div>
                      <p>2 min ago</p>
                    </div>
                    <div className="reply-comment">
                      <form action="#" method="post">
                        <div className="input-group">
                          <div className="input-single">
                            <textarea
                              placeholder="Join the discussion..."
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="btn-wrapper">
                            <button type="submit" className="btn--primary">
                              Reply
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="comment__form mt-120"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="comment-header mb-40">
                    <h4 className="mt-8 fw-6 title-animation">
                      Leave A Comment
                    </h4>
                  </div>
                  <form action="#" method="post">
                    <div className="form-group">
                      <div className="input-icon">
                        <input
                          type="text"
                          required=""
                          name="comment-name"
                          id="commentName"
                          placeholder="Your Name"
                        />
                        <i className="fa-solid fa-user" />
                      </div>
                      <div className="input-icon">
                        <input
                          type="email"
                          required=""
                          name="comment-email"
                          id="commentEmail"
                          placeholder="Enter Email"
                        />
                        <i className="fa-regular fa-envelope" />
                      </div>
                    </div>
                    <div className="input-icon input-icon-alt">
                      <textarea
                        name="comment-message"
                        id="commentMessage"
                        cols={30}
                        rows={10}
                        placeholder="Type Your Comments..."
                        defaultValue={""}
                      />
                      <i className="fa-regular fa-comments" />
                    </div>
                    <div className="cta mt-40">
                      <div className="btn-wrapper">
                        <button
                          type="submit"
                          className="btn--secondary"
                          data-text="Submit Comment"
                        >
                          <span>Submit Comment</span>
                        </button>
                      </div>
                    </div>
                  </form>
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

              <div className="cm-details__sidebar">
                <div
                  className="cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="intro">
                    <h5>search here</h5>
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
                        <a href="blog-details.html">
                          <img
                            src="/assets/images/thumbs/child.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p>
                          <i className="fa-solid fa-calendar-days" />{" "}
                          <span>November 19, 2024</span>
                        </p>
                        <p>
                          <a href="/Components/BlogDetails">
                            Where Innovation Meets Foundation
                          </a>
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
                        <a href="/Components/BlogDetails">
                            Where Innovation Meets Foundation
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="thumb">
                      <Link to={"/Components/BlogDetails"}>
                          <img src="/assets/images/thumbs/child3.jpg" alt="Image" />
                        </Link>
                      </div>
                      <div className="content">
                        <p>
                          <i className="fa-solid fa-calendar-days" />{" "}
                          <span>November 22, 2024</span>
                        </p>
                        <p>
                        <a href="/Components/BlogDetails">
                            Structures That Stand, Dreams That Soar
                          </a>
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
                    <a href="shop.html">t-shirt</a>
                    <a href="shop.html">Banner Design</a>
                    <a href="shop.html">Brochures</a>
                    <a href="shop.html">Landing</a>
                    <a href="shop.html">Print</a>
                    <a href="shop.html">Business Card</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / blog details section end ==== */}
  </>
)
}

export default BlogDetailMainSec
