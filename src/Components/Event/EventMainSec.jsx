import React from 'react'

function EventMainSec() {
  return (
    <>
    {/* ==== event section start ==== */}
    <section className="explore-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-5">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span>Join Us for Exciting Experiences</span>
              <h2 className="title-animation">
                Upcoming Events and Activities
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
            <div className="explore__wrapper">
              <div
                className="explore__single"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <a href="event-details.html">
                    <img src="/assets/images/sponsor/one.png" alt="Image" />
                  </a>
                </div>
                <a href="event-details.html" className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </a>
                <div className="content">
                  <p>Food &amp; Transport</p>
                  <h5>
                    <a href="event-details.html">Child Trouble &amp; Care</a>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <a href="event-details.html">
                  <img src="/assets/images/sponsor/one.png" alt="Image" />
                  </a>
                </div>
                <a href="event-details.html" className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </a>
                <div className="content">
                  <p>Health &amp; Food</p>
                  <h5>
                    <a href="event-details.html">Health Care Program</a>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single explore__single-tall"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <a href="event-details.html">
                  <img src="/assets/images/sponsor/one.png" alt="Image" />
                  </a>
                </div>
                <a href="event-details.html" className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </a>
                <div className="content">
                  <p>Education &amp; Food</p>
                  <h5>
                    <a href="event-details.html">
                      Education &amp; Safety Program
                    </a>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single explore__single-wide"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <a href="event-details.html">
                  <img src="/assets/images/sponsor/one.png" alt="Image" />
                  </a>
                </div>
                <a href="event-details.html" className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </a>
                <div className="content">
                  <p>Transport &amp; Food</p>
                  <h5>
                    <a href="event-details.html">
                      Transport &amp; Food Program{" "}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="pagination-wrapper mt-20"
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
                  <a href="blog-list.html">1</a>
                </li>
                <li>
                  <a href="blog-list.html" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="blog-list.html">3</a>
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
      {/* <div className="spade">
        <img
          src="/assets/images/sprade-base.png"
          alt="Image"
          className="base-img"
        />
      </div> */}
    </section>
    {/* ==== / event section end ==== */}
  </>
)
}

export default EventMainSec
