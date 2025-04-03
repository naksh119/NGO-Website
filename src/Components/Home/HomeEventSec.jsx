import React from 'react'
import { Link } from 'react-router-dom'

function HomeEventSec() {
  return (
    <>
    {/* ==== event section start ==== */}
    <section className="explore-area pt-120 pb-120 explore-alt">
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
                  <Link to={"/Components/EventDetails"}>
                    <img src="assets/images/thumbs/cutie.jpg" alt="Image" />
                  </Link>
                </div>
                <Link to={"/Components/EventDetails"} className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </Link>
                <div className="content">
                  <p>Food &amp; Transport</p>
                  <h5>
                    <Link to={"/Components/EventDetails"}>Child Trouble &amp; Care</Link>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <Link to={"/Components/EventDetails"}>
                    <img src="/assets/images/thumbs/Health.jpg" alt="Image" />
                  </Link>
                </div>
                <Link to={"/Components/EventDetails"} className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </Link>
                <div className="content">
                  <p>Health &amp; Food</p>
                  <h5>
                    <Link to={"/Components/EventDetails"}>Health Care Program</Link>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single explore__single-tall"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <Link to={"/Components/EventDetails"}>
                    <img
                      src="assets/images/thumbs/education5.jpg"
                      alt="Image"
                    />
                  </Link>
                </div>
                <Link to={"/Components/EventDetails"} className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </Link>
                <div className="content">
                  <p>Education &amp; Food</p>
                  <h5>
                    <Link to={"/Components/EventDetails"}>
                      Education &amp; Safety Program
                    </Link>
                  </h5>
                </div>
              </div>
              <div
                className="explore__single explore__single-wide"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="thumb">
                  <Link to={"/Components/EventDetails"}>
                    <img src="assets/images/thumbs/food.jpg" alt="Image" />
                  </Link>
                </div>
                <Link to={"/Components/EventDetails"} className="arr">
                  <i className="fa-solid fa-arrow-up" />
                </Link>
                <div className="content">
                  <p>Transport &amp; Food</p>
                  <h5>
                    <Link to={"/Components/EventDetails"}>
                      Transport &amp; Food Program{" "}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center gutter-24">
          <div className="col-12 col-lg-8">
            <div className="section__header--secondary">
              <h3 className="title-animation">400+ Winning Awards</h3>
              <p>
                We take immense pride in our achievements, having received over
                400 awards for excellence in various domains. Our commitment to
                innovation and quality has been recognized globally.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="text-start text-lg-end">
              <Link
                to={"/Components/Event"}
                className="btn--secondary"
                data-text="Explore All"
              >
                <span>Explore All</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="spade">
        <img
          src="assets/images/sprade-base.png"
          alt="Image"
          className="base-img"
        />
      </div>
    </section>
    {/* ==== / event section end ==== */}
    </>
  )
}

export default HomeEventSec
