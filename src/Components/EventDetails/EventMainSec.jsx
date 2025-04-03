import React from 'react'
import { Link } from 'react-router-dom'

function EventMainSec() {
  return (
        <>
          {/* ==== event details section start ==== */}
          <div className="cm-details pt-120 pb-120">
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
                      <img src="/assets/images/thumbs/Team.jpeg" alt="Image" />
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
                    <div className="cm-group mt-55">
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
                    </div>
                    <div className="cm-group mt-55">
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
                    <div className="cm-img-group mt-55">
                      <div className="cm-img-single">
                        <img src="/assets/images/thumbs/child4.avif" alt="Image" />
                      </div>
                      <div className="cm-img-single">
                        <img src="/assets/images/thumbs/child.jpg" alt="Image" />
                      </div>
                    </div>
                    <div className="cm-event mt-55">
                      <div className="cm-event-single">
                        <Link to={"/Components/IndexOnePage"}>
                          <i className="fa-brands fa-facebook-f" />
                          Facebook
                          <img src="/assets/images/shape-sc.png" alt="Image" />
                        </Link>
                      </div>
                      <div className="cm-event-single">
                      <Link to={"/Components/IndexOnePage"}>
                          <i className="fa-brands fa-twitter" />
                          Twitter
                          <img src="/assets/images/shape-sc.png" alt="Image" />
                        </Link>
                      </div>
                      <div className="cm-event-single">
                      <Link to={"/Components/IndexOnePage"}>
                          <i className="fa-brands fa-pinterest" />
                          Pinterest
                          <img src="/assets/images/shape-sc.png" alt="Image" />
                        </Link>
                      </div>
                      <div className="cm-event-single">
                      <Link to={"/Components/IndexOnePage"}>
                          <i className="fa-brands fa-linkedin-in" />
                          Linkedin
                          <img src="/assets/images/shape-sc.png" alt="Image" />
                        </Link>
                      </div>
                      <div className="cm-event-single">
                      <Link to={"/Components/IndexOnePage"}>
                          <i className="fa-brands fa-stumbleupon" />
                          Tumblr
                          <img src="/assets/images/shape-sc.png" alt="Image" />
                        </Link>
                      </div>
                    </div>
                    <div className="cm-map mt-55">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280051853!2d-74.14448645698116!3d40.69763123317469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1731143311697!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div
                      className="blog-comment pt-120"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className="comment-header mb-40">
                        <h4 className="mt-8 title-animation">03 Comments</h4>
                      </div>
                      <div className="comment-single">
                        <div className="thumb">
                          <img src="/assets/images/team/one.png" alt="Image" />
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
                        className="comment__form"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                      >
                        <div className="comment-header mb-40">
                          <h4 className="mt-8 fw-6">Leave A Comment</h4>
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
                                data-text="Submit
                                          Comment"
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
                  <div className="cm-details__sidebar">
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
                                src="/assets/images/thumbs/child4.avif"
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
                                src="/assets/images/thumbs/education.jpg"
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
                        <h5>Tags</h5>
                      </div>
                      <div className="tag-wrapper">
                        <Link to={"/Components/PageNotFound"}>t-shirt</Link>
                        <Link to={"/Components/PageNotFound"}>Banner Design</Link>
                        <Link to={"/Components/PageNotFound"}>Brochures</Link>
                        <Link to={"/Components/PageNotFound"}>Landing</Link>
                        <Link to={"/Components/PageNotFound"}>Print</Link>
                        <Link to={"/Components/PageNotFound"}>Business Card</Link>
                      </div>
                    </div>
                    <div
                      className="cm-sidebar-overview"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className="cm-logo">
                        <img src="/assets/images/event/logo.png" alt="Image" />
                      </div>
                      <div className="cm-content">
                        <p>Small Donations Bigger Impact</p>
                        <h4>Education Health for Every Child</h4>
                      </div>
                      <div className="cm-cta">
                        <Link
                          to={"/Components/ContactUs"}
                          aria-label="contact us"
                          title="contact us"
                          className="btn--secondary"
                          data-text="Get A Quote"
                        >
                          {" "}
                          <span>Get A Quote</span>
                        </Link>
                      </div>
                      <img
                        src="/assets/images/event/overview.png"
                        alt="Image"
                        className="parallax-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* === event details section end ==== */}

        </>
      )
}

export default EventMainSec
