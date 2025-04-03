import React from 'react'
import { Link } from 'react-router-dom'

function AboutHeroSec() {
  return (
    <>
    {/* ==== about section start ==== */}
    <section className="about-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center gutter-40">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="about__thumb">
              <div className="about__thumb-big">
                <img
                  src="/assets/images/thumbs/Team.jpeg"
                  alt="Image"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                />
                <div className="video-btn-wrapper">
                  <a
                    href="/assets/images/thumbs/Cchildren.mp4"
                    target="_blank"
                    title="video Player"
                    className="open-video-popup"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
              </div>
              <div className="about__thumb-sm">
                <div
                  className="about__thumb-sm__content"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <div className="about__thumb-sm__content-counter">
                    <h2>
                      <span className="odometer" data-odometer-final={15} />
                      <span>+</span>
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.6317 12.3421L20.9825 7L19.3684 12.3053H14L18.3509 15.621L16.6667 21L21.0175 17.6842L25.3684 21L23.6491 15.6579L28 12.3421H22.6317Z"
                        fill="#00C2FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.82123 0H34.1788V2.60708H42V11.8752C42 14.3333 41.0235 16.6907 39.2855 18.4288C37.8683 19.8459 36.0395 20.7567 34.0802 21.0448C33.7921 23.0042 32.8814 24.8329 31.4641 26.25C29.7598 27.9543 27.4601 28.9264 25.0541 28.9636V32.7318C25.0541 33.0396 25.1762 33.3347 25.3938 33.5521C25.6115 33.7698 25.9066 33.892 26.2141 33.892C27.6351 33.892 28.9977 34.4564 30.0024 35.4611C31.0072 36.4658 31.5718 37.8287 31.5718 39.2494V42H10.4283V39.2494C10.4283 37.8287 10.9928 36.4658 11.9975 35.4611C13.0022 34.4564 14.3649 33.892 15.7859 33.892C16.0935 33.892 16.3886 33.7698 16.6062 33.5521C16.8238 33.3347 16.946 33.0396 16.946 32.7318V28.9636C14.5398 28.9264 12.2401 27.9543 10.5358 26.25C9.11868 24.8329 8.20789 23.0042 7.9198 21.0448C5.96043 20.7567 4.13168 19.8459 2.71458 18.4288C0.976454 16.6907 0 14.3333 0 11.8752V2.60708H7.82123V0ZM10.7151 2.89384V19.6965C10.7151 21.387 11.3867 23.0083 12.5821 24.2038C13.7775 25.3993 15.3988 26.0708 17.0894 26.0708H19.8398V32.7318C19.8398 33.8069 19.4127 34.8381 18.6525 35.5985C17.8922 36.3587 16.861 36.7859 15.7859 36.7859C15.1325 36.7859 14.5058 37.0453 14.0438 37.5075C13.6156 37.9356 13.3614 38.505 13.3263 39.1062H28.6737C28.6388 38.505 28.3843 37.9356 27.9562 37.5075C27.4942 37.0453 26.8675 36.7859 26.2141 36.7859C25.139 36.7859 24.1078 36.3587 23.3476 35.5985C22.5872 34.8381 22.1602 33.8069 22.1602 32.7318V26.0708H24.9106C26.6011 26.0708 28.2225 25.3993 29.4179 24.2038C30.6134 23.0083 31.285 21.387 31.285 19.6965V2.89384H10.7151ZM7.82123 5.50093H2.89384V11.8752C2.89384 13.5658 3.56543 15.1871 4.76083 16.3826C5.60901 17.2307 6.67161 17.8152 7.82123 18.0832V5.50093ZM34.1788 18.0832V5.50093H39.1062V11.8752C39.1062 13.5658 38.4346 15.1871 37.2391 16.3826C36.391 17.2307 35.3283 17.8152 34.1788 18.0832Z"
                        fill="#04009A"
                      />
                    </svg>
                  </div>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="about__content">
              <div className="section__header">
                <span>About Our Foundation</span>
                <h2 className="title-animation">
                  About Mission Hope Foundation
                </h2>
                <p>
                  Mission Hope Foundation is a multifaceted organization
                  committed to addressing the critical needs of children and
                  communities in distress.
                </p>
              </div>
              <hr className="divider" />
              <div
                className="about__content-inner"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="help__content-list">
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Child
                      Education &amp; Development Programs
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Health &amp;
                      Hygiene Education
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Regular
                      Health Camps
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Support for
                      Marginalized Communities
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Financial
                      Assistance for Education
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check" /> Community
                      Empowerment Initiatives
                    </li>
                  </ul>
                </div>
                <div
                  className="about__content-review"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <div className="about__content-review__counter">
                    <h3>
                      <span className="odometer" data-odometer-final={999} />
                      <span>+</span>
                    </h3>
                    <p>Supporte Our Cause </p>
                  </div>
                  <div className="join-users">
                    <div className="single-user">
                      <img
                        src="/assets/images/avatar/avatar-one.png"
                        alt="Image"
                      />
                    </div>
                    <div className="single-user">
                      <img
                        src="/assets/images/avatar/avatar-two.png"
                        alt="Image"
                      />
                    </div>
                    <div className="single-user">
                      <img
                        src="/assets/images/avatar/avatar-three.png"
                        alt="Image"
                      />
                    </div>
                    <div className="single-user">
                      <img
                        src="/assets/images/avatar/avatar-four.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="about__content-inner__cta mt-40"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <div className="about__content-inner__btn">
                    <a
                      href={"/Components/About"}
                      className="btn--secondary"
                      data-text="More About Us"
                    >
                      <span>More About Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mission-vision-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="section-title text-white display-4 fw-bold mb-4"
            data-aos="fade-up"
          >
            Our Mission &amp; Vision
          </h2>
          <p
            className="section-description text-light lead mb-5"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            At Mission Hope Foundation, we believe that every child has the
            right to quality education and nutritious meals. Our mission is to
            empower vulnerable children by providing them with the tools they
            need to succeed. We work towards holistic community development,
            ensuring that each child has access to healthcare, clean water, and
            a safe environment to learn and grow.
          </p>
        </div>
        <div className="row g-4 justify-content-center mt-4">
          <div className="col-md-6">
            <div
              className="mission-card p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="card-icon mb-3">
                <i className="fas fa-bullseye fa-2x text-primary" />
              </div>
              <h3 className="text-white mb-3 fs-4">Our Mission</h3>
              <p className="text-light">
                To empower underprivileged communities through sustainable
                development initiatives, education, and healthcare programs. We
                strive to create lasting positive change by providing
                opportunities for growth and self-reliance.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="mission-card p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="card-icon mb-3">
                <i className="fas fa-eye fa-2x text-primary" />
              </div>
              <h3 className="text-white mb-3 fs-4">Our Vision</h3>
              <p className="text-light">
                To create a world where every individual has access to quality
                education, healthcare, and opportunities for sustainable
                livelihood. We envision communities that are self-reliant,
                empowered, and thriving with dignity.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center mt-4">
          <div className="col-md-4">
            <div
              className="mission-card p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="card-icon mb-3">
                <i className="fas fa-seedling fa-2x text-primary" />
              </div>
              <h3 className="text-white mb-3 fs-4">Rural Development</h3>
              <p className="text-light">
                We provide farmers with training in organic farming, water
                conservation, and modern cultivation methods to improve yields
                and income. Our initiatives focus on sustainable practices.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="mission-card p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="card-icon mb-3">
                <i className="fas fa-users fa-2x text-primary" />
              </div>
              <h3 className="text-white mb-3 fs-4">Community Programs</h3>
              <p className="text-light">
                Offering tailoring, computer training, and skill development
                workshops to create employment opportunities, particularly for
                women in our communities.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="mission-card p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="card-icon mb-3">
                <i className="fas fa-hand-holding-heart fa-2x text-primary" />
              </div>
              <h3 className="text-white mb-3 fs-4">Donation</h3>
              <p className="text-light">
                Join us in our mission by donating or getting involved. Your
                contributions help provide education, healthcare, and livelihood
                opportunities to those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ==== / about section end ==== */}
    </>
  )
}

export default AboutHeroSec
