import React from 'react'

function ContactBanner() {
  return (
    <>
    {/* ==== banner section start ==== */}
    <section className="common-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="common-banner__content text-center">
              <h2 className="title-animation">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bg">
        <img src="/assets/images/thumbs/child3.jpg" alt="Image" />
      </div>
      <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
        <img
          src="/assets/images/sprade-base.png"
          alt="Image"
          className="base-img"
        />
      </div>
      <div className="line">
        <img src="/assets/images/line.png" alt="Image" />
      </div>
    </section>
    {/* ==== / banner section end ==== */}
  </>
)
}

export default ContactBanner
