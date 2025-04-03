import React from 'react'

function AboutCounterSec() {
  return (
    <>
    {/* ==== counter section start ==== */}
    <section className="counter pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div className="counter__single">
                <div className="thumb">
                  <i className="icon-support-hand" />
                </div>
                <div className="counter__content">
                  <h2>
                    <span className="odometer" data-odometer-final={400} />
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Team member</h5>
                </div>
              </div>
              <div className="divider" />
              <div className="counter__single">
                <div className="thumb">
                  <i className="icon-review" />
                </div>
                <div className="counter__content">
                  <h2>
                    <span className="odometer" data-odometer-final={80} />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Client's review</h5>
                </div>
              </div>
              <div className="divider" />
              <div className="counter__single">
                <div className="thumb">
                  <i className="icon-documents" />
                </div>
                <div className="counter__content">
                  <h2>
                    <span className="odometer" data-odometer-final={100} />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Completed projects</h5>
                </div>
              </div>
              <div className="divider" />
              <div className="counter__single">
                <div className="thumb">
                  <i className="icon-award" />
                </div>
                <div className="counter__content">
                  <h2>
                    <span className="odometer" data-odometer-final={40} />K
                    <span className="prefix">+</span>
                  </h2>
                  <h5>Winning award</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poor">
        <img
          src="/assets/images/thumbs/child3.jpg"
          alt="Image"
          className="parallax-image"
        />
      </div>
      <div
        className="shape-left"
        data-aos="fade-down"
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src="/assets/images/shape-left.png"
          alt="Image"
          className="base-img"
        />
      </div>
    </section>
    {/* ==== / counter section end ==== */}

    </>
  )
}

export default AboutCounterSec
