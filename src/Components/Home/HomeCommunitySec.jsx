import React from "react";
import { Link } from "react-router-dom";

function HomeCommunitySec() {
  return (
    <>
      {/* ==== community section start ==== */}
      <section className="community pt-120">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-xl-7">
              <div
                className="section__header mb-55"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">Start donating poor people</span>
                <h2 className="title-animation">
                  Join The Community To Give Education For Children
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="community-donation"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="community-donation__inner">
                  <h4>Support Where It Counts.</h4>
                  <div className="warning">
                    <div className="line">
                      <i className="fa-solid fa-triangle-exclamation" />
                    </div>
                    <p>
                      <strong>Notice:</strong> Test mode is enabled. While in
                      test mode no live donations are processed.
                    </p>
                  </div>
                  <div className="donation-form">
                    <div className="donation-form__single">
                      <h5>Your Donation:</h5>
                      <div className="input-group-icon">
                        <div className="thumb">
                          <i className="fa-solid fa-dollar-sign" />
                        </div>
                        <input
                          type="text"
                          name="donation-amount"
                          id="donationAmount"
                        />
                      </div>
                      <div className="made-amount">
                        <span className="donation-amount">20</span>
                        <span className="donation-amount">50</span>
                        <span className="donation-amount active">100</span>
                        <span className="donation-amount">200</span>
                        <span className="donation-amount custom-amount">
                          Custom
                        </span>
                      </div>
                    </div>
                    <div className="donation-form__single">
                      <h5>Select Payment Method</h5>
                      <div className="radio-wrapper mt-30">
                        <div className="radio-single">
                          <input
                            type="radio"
                            id="testDonation"
                            name="donation-payment"
                            defaultChecked=""
                          />
                          <label htmlFor="testDonation">Test Donation</label>
                        </div>
                        <div className="radio-single">
                          <input
                            type="radio"
                            id="offlineDonation"
                            name="donation-payment"
                            defaultChecked=""
                          />
                          <label htmlFor="offlineDonation">
                            Offline Donation
                          </label>
                        </div>
                        <div className="radio-single">
                          <input
                            type="radio"
                            id="cardDonation"
                            name="donation-payment"
                            defaultChecked=""
                          />
                          <label htmlFor="cardDonation">Credit Card</label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-40">
                      <Link
                        to={"/Components/DonateUs"}
                        aria-label="donate us"
                        title="donate us"
                        data-text="Donate Now"
                        className="btn--secondary"
                      >
                        <span>Donate Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="community-bg">
          <img
            src="assets/images/thumbs/child3.jpg"
            alt="Image"
            className="parallax-image"
          />
        </div>
        <div
          className="gift"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src="assets/images/community/gift.png" alt="Image" />
        </div>
        <div className="spade">
          <img
            src="assets/images/community/spade.png"
            alt="Image"
            className="base-img"
          />
        </div>
      </section>
      {/* ==== / community section end ==== */}
    </>
  );
}

export default HomeCommunitySec;
