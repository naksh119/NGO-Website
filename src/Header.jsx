import React from "react";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>  
      {/* ==== preloader start ==== */}
      <Preloader/>
      {/* ==== preloader start ==== */}

      {/* ==== topbar start ==== */}
      <div className="topbar topbar__secondary d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="topbar__inner">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="topbar__list-wrapper">
                      <ul className="topbar__list">
                        <li>
                          <a href="tel:2305-587-3407">
                            <i className="ph ph-phone-call" />
                            +91 7999174120
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@example.com">
                            <i className="ph ph-envelope-simple" />
                            missionhopefoundationindia@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="topbar__items d-flex align-items-center justify-content-end flex-wrap">
                      <div className="topbar__items-menu">
                        <div className="topbar__items-menu__icon">
                          <i className="ph ph-user" />
                        </div>
                        <ul className="topbar__items-menu__link">
                          <li>
                            <Link to={"/Components/SignIn"}>Sign In</Link>
                          </li>
                          <li>/</li>
                          <li>
                          <Link to={"/Components/SignUp"}>Register</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="select-country topbar__select">
                        <select
                          name="country"
                          className="country-select select"
                        >
                          <option value="english">EN</option>
                          <option value="french">FR</option>
                          <option value="italian">IT</option>
                          <option value="canada">CN</option>
                        </select>
                      </div>
                      <div className="social topbar__social-menu">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                          title="facebook"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://vimeo.com/"
                          target="_blank"
                          aria-label="share us on vimeo"
                          title="vimeo"
                        >
                          <i className="fa-brands fa-vimeo-v" />
                        </a>
                        <a
                          href="https://x.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                          title="twitter"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on linkedin"
                          title="linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==== / topbar end ==== */}

      {/* ==== header start ==== */}
      <header className="header header-secondary ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo">
                    <Link to={"/"}title="logo">
                      <img src="/assets/logo.png" alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu d-none d-xl-block">
                    <ul className="navbar__list">
                      <li className="navbar__item nav-fade">
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to={"/Components/About"}>About</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to={"/Components/OurCauses"}>Causes</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                      <Link to={"/Components/OurTeam"}>Team</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to={"/Components/BlogGrid"}>News</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to={"/Components/EventDetails"}>Events</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to={"/Components/ContactUs"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options ">
                      <div className="search-box">
                        <button
                          className="open-search"
                          aria-label="search products"
                          title="open search box"
                        >
                          <i className="ph ph-magnifying-glass" />
                        </button>
                      </div>
                      <span className="divider" />
                      <div className="cart-box">
                        <a href="+91 7999174120" className="call-button">
                          <i className="ph ph-phone fs-3" />
                        </a>
                      </div>
                      <Link to={"/Components/DonateUs"} className="btn--secondary d-none d-md-flex" data-text="Donate Now">
                        <span>Donate Now</span>
                      </Link>
                    </div>
                    <button
                      className="open-offcanvas-nav d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                    >
                      <span className="icon-bar top-bar" />
                      <span className="icon-bar middle-bar" />
                      <span className="icon-bar bottom-bar" />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ==== / header end ==== */}

    {/* ==== mobile menu start ==== */}
    <div className="mobile-menu d-block d-xl-none">
      <nav className="mobile-menu__wrapper">
        <div className="mobile-menu__header nav-fade">
          <div className="logo">
            <Link to={"/Components/Home"}aria-label="home page" title="logo">
              <img
                src="/assets/logo.png"
                alt="Image"
                style={{ width: 60, height: "auto" }}
              />
            </Link>
          </div>
          <button aria-label="close mobile menu" className="close-mobile-menu">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="mobile-menu__list" />
        <div className="mobile-menu__cta nav-fade d-block d-md-none">
          <a href="/Components/DonateUs" className="" data-text="Donate Now">
            <span>Donate Now</span>
          </a>
        </div>
        <div className="mobile-menu__social social nav-fade">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="share us on facebook"
            title="facebook"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a
            href="https://vimeo.com/"
            target="_blank"
            aria-label="share us on vimeo"
            title="vimeo"
          >
            <i className="fa-brands fa-vimeo-v" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            aria-label="share us on twitter"
            title="twitter"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="share us on linkedin"
            title="linkedin"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </nav>
    </div>
    <div className="mobile-menu__backdrop" />
    {/* ==== / mobile menu end ==== */}

    {/* ==== search popup start ==== */}
    <div className="search-popup">
      <button
        className="close-search"
        aria-label="close search box"
        title="close search box"
      >
        <i className="fa-solid fa-xmark" />
      </button>
      <form action="#" method="post">
        <div className="search-popup__group">
          <input
            type="text"
            name="search-field"
            id="searchField"
            placeholder="Search...."
            required=""
          />
          <button
            type="submit"
            aria-label="search products"
            title="search products"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </div>
    {/* ==== / search popup end ==== */}
  </>
)
}

export default Header;
