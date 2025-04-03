import React from 'react'

function HomeTestimonialSec() {
  return (
    <>
    {/* ==== testimonial section start ==== */}
    <section className="testimonial-area pt-120 pb-120">
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
                Our Valuable Clients' Awesome Feedback
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
        <div className="row justify-content-center">
          <div className="col-12 col-xl-12">
            <div className="testimonial__inner">
              <div className="testimonial__inner-wrapper">
                <div className="testimonial__slider swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="row align-items-center gutter-40">
                          <div className="col-12 col-lg-4 col-xl-4">
                            <div className="testimonial__slider-thumb">
                              <img
                                src="/assets/images/testimonial/one.png"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8 col-xl-7">
                            <div className="testimonial__slider-content">
                              <div className="review">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </div>
                              <p>
                                "Mission Hope Foundation is making a real impact
                                in children's lives by providing care and
                                support to those in need."
                              </p>
                              <div className="testimonial__cta">
                                <div className="quote-icon">
                                  <i className="fa-solid fa-quote-right" />
                                </div>
                                <div className="testimonial__cta-content">
                                  <span>Community Leader</span>
                                  <h4>Priya Verma</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="row align-items-center gutter-40">
                          <div className="col-12 col-lg-4 col-xl-4">
                            <div className="testimonial__slider-thumb">
                              <img
                                src="/assets/images/testimonial/two.png"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8 col-xl-7">
                            <div className="testimonial__slider-content">
                              <div className="review">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </div>
                              <p>
                                "Their dedication and efforts to help children
                                in crisis are truly inspiring. Every
                                contribution makes a difference."
                              </p>
                              <div className="testimonial__cta">
                                <div className="quote-icon">
                                  <i className="fa-solid fa-quote-right" />
                                </div>
                                <div className="testimonial__cta-content">
                                  <span>Social Worker</span>
                                  <h4>Amit Sharma </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="row align-items-center gutter-40">
                          <div className="col-12 col-lg-4 col-xl-4">
                            <div className="testimonial__slider-thumb">
                              <img
                                src="/assets/images/testimonial/three.png"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8 col-xl-7">
                            <div className="testimonial__slider-content">
                              <div className="review">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </div>
                              <p>
                                "I am grateful for the positive impact Mission
                                Hope Foundation has made in my community. Their
                                work is truly life-changing."
                              </p>
                              <div className="testimonial__cta">
                                <div className="quote-icon">
                                  <i className="fa-solid fa-quote-right" />
                                </div>
                                <div className="testimonial__cta-content">
                                  <span>Humanitarian</span>
                                  <h4>Rahul Mehta</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                  className="prev-testimonial slider-btn"
                >
                  <i className="fa-solid fa-angle-left" />
                </button>
                <button
                  type="button"
                  aria-label="next slide"
                  title="next slide"
                  className="next-testimonial slider-btn slider-btn-next"
                >
                  <i className="fa-solid fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / testimonial section end ==== */}
  </>
)
}

export default HomeTestimonialSec
