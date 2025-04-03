import React from 'react'
import { Link } from 'react-router-dom'

function ErrorSec() {
  return (
    <>
    {/* ==== error section start ==== */}
    <section className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div
              className="error__content text-center pt-120 pb-120"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className="thumb">
                <img src="/assets/images/error.png" alt="Image" />
              </div>
              <h3 className="title-animation">Page Not Found</h3>
              <p>
                It could have been removed, renamed, or temporarily unavailable.
                Try searching for what you're looking for.
              </p>
              <div className="cta mt-40">
                <Link
                  to={"/"}
                  className="btn--secondary"
                  data-text="Back To Home"
                >
                  <span>Back To Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spade">
        <img
          src="/assets/images/error-sprade.png"
          alt="Image"
          className="base-img"
        />
      </div>
      <div className="spade-green">
        <img src="/assets/images/sprade-green.png" alt="Image" />
      </div>
    </section>
    {/* ==== / error section end ==== */}
  </>
)

}

export default ErrorSec
