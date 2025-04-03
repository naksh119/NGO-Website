import React from 'react'
import { Link } from 'react-router-dom'

function ContactUsFormSec() {
  return (
        <>
          {/* ==== contact section start ==== */}
          <section className="contact contact-main volunteer pt-120 pb-120">
            <div className="container">
              <div className="row gutter-40">
                <div className="col-12 col-lg-5 col-xl-4">
                  <div className="contact__content">
                    <div
                      className="section__header mb-55"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <span>Get In Touch</span>
                      <h2 className="title-animation">Contact Us</h2>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        inventore
                      </p>
                    </div>
                    <div className="topbar__item mt-60">
                      <div
                        className="topbar__item-single"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <div className="topbar__item-single__icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <div className="topbar__item-single__content">
                          <span>Call Us:</span>
                          <p>
                            <a href="tel:2305-587-3407">+1 (368) 567 89 54 </a>
                          </p>
                        </div>
                      </div>
                      <div
                        className="topbar__item-single"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                        data-aos-delay={200}
                      >
                        <div className="topbar__item-single__icon">
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="topbar__item-single__content">
                          <span>E-Mail us:</span>
                          <p>
                            <a href="mailto:support@example.com">example@email.com</a>
                          </p>
                        </div>
                      </div>
                      <div
                        className="topbar__item-single"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                        data-aos-delay={400}
                      >
                        <div className="topbar__item-single__icon">
                          <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className="topbar__item-single__content">
                          <span>Australia</span>
                          <p>
                            <a
                              href="https://maps.app.goo.gl/1PQ1JmL7HUYEvQvq7"
                              target="_blank"
                            >
                              380 Albert St, Melbourne
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 offset-xl-1 col-xl-7">
                  <div
                    className="contact__form volunteer__form checkout__form"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className="volunteer__form-content">
                      <h4 className="title-animation">Fill Up The Form</h4>
                      <p>
                        Your email address will not be published. Required fields are
                        marked *
                      </p>
                    </div>
                    <form action="#" method="post" className="mt-60">
                      <div className="input-single">
                        <input
                          type="text"
                          name="full-name"
                          id="fullName"
                          placeholder="Enter Name"
                          required=""
                        />
                        <i className="fa-solid fa-user" />
                      </div>
                      <div className="input-single">
                        <input
                          type="email"
                          name="c-email"
                          id="cEmail"
                          placeholder="Enter Email"
                          required=""
                        />
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="input-single">
                        <input
                          type="text"
                          name="phone-number"
                          id="phoneNumber"
                          placeholder="Phone Number"
                          required=""
                        />
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="input-single alter-input">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Your Message..."
                          defaultValue={""}
                        />
                        <i className="fa-solid fa-comments" />
                      </div>
                      <div className="form-cta">
                        <Link to={"/Components/ContactUs"}>
                          <button
                            type="submit"
                            aria-label="submit message"
                            title="submit message"
                            className="btn--secondary"
                            data-text="Get A Quote"
                          >
                          <span>Get A Quote</span>
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==== / contact section end ==== */}
        </>
  )
}

export default ContactUsFormSec
