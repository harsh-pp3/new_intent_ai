import { Link } from "react-router-dom";
import headerData from "../../../data/header";
import { useEffect, useRef } from "react";

const Header = () => {
  const solutionDropdownRef = useRef();
  const showMobileNavbar = () => {
    console.log("nav toggler fun");
    document.body.classList.add("mobile-menu-visible");
  };

  const toggleSolutionDropdown = () => {
    const display = solutionDropdownRef.current.style.display;
    console.log("object solution", display);
    if (display == "block") {
      solutionDropdownRef.current.style.display = "none";
    } else {
      solutionDropdownRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    const mobileMenuToggle = () => {
      const $ = window.jQuery; // Ensure jQuery is loaded globally if using jQuery in React

      if ($(".mobile-menu").length) {
        // Mobile Menu Toggle Btn (Open/Close)
        $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
          "click",
          function () {
            console.log("clicked close btn");
            $("body").removeClass("mobile-menu-visible");
            $(".mobile-menu .navigation > li").removeClass("open");
            $(".mobile-menu .navigation li ul").slideUp(0);
          }
        );

        // Escape key event
        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            console.log("clicked esc btn");
            $("body").removeClass("mobile-menu-visible");
            $(".mobile-menu .navigation > li").removeClass("open");
            $(".mobile-menu .navigation li ul").slideUp(0);
          }
        });

        // Close mobile menu when clicking a menu link (non-dropdown)
        $(".mobile-menu .navigation li").on("click", function () {
          if (!$(this).hasClass("dropdown")) {
            console.log("mobile nav link");
            $("body").removeClass("mobile-menu-visible");
            $(".mobile-menu .navigation > li").removeClass("open");
            $(".mobile-menu .navigation li ul").slideUp(0);
          }
        });
      } else {
        console.log("mobile-menu not found");
      }
    };

    mobileMenuToggle();

    // Cleanup on component unmount
    return () => {
      const $ = window.jQuery;
      $(".mobile-menu .navigation > li.dropdown > .dropdown-btn").off("click");
      $(
        ".mobile-menu .navigation > li.dropdown > ul > li.dropdown > .dropdown-btn"
      ).off("click");
      $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").off("click");
      $(document).off("keydown");
      $(".mobile-menu .navigation li").off("click");
    };
  }, []);
  const generateNavigation = (list) => {
    return (
      <ul className="navigation clearfix">
        {list.map((item, index) =>
          item.children ? (
            <li className="dropdown" key={index}>
              <Link to={item.url}>{item.name}</Link>
              <ul>
                {item.children.map((child, i) => (
                  <li key={i}>
                    <Link to={child.url}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
    );
  };
  return (
    <header
      className={`main-header main-header-one fixed-header`}
      // className={`main-header main-header-one ${isFixed ? "fixed-header" : ""}`}
    >
      {/* Header Lower */}
      <div className="header-lower">
        <div className="main-menu__wrapper">
          <div className="inner-container d-flex align-items-center justify-content-between">
            {/* Logo Box */}
            <div className="main-header-one__logo-box">
              <Link to="/">
                <img src="/images/home/IntentContent-1.png" alt="" />
              </Link>
            </div>
            <div className="nav-outer">
              {/* Main Menu */}
              <nav className="main-menu show navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  {generateNavigation(headerData)}
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Outer Box */}
            <div className="outer-box d-flex align-items-center">
              <ul className="main-header__login-sing-up d-sm-flex flex-column align-items-start pe-4">
                <li>
                  <Link to="mailto:letsconnect@ditaxpresso.com">
                    <i className="fa-solid fa-envelope px-2" />
                    letsconnect[at]ditaxpresso[dot]com
                  </Link>
                </li>
                <li>
                  <Link to="tel:+919373845512">
                    <i className="fa-solid fa-phone-volume px-2" />
                    +91-937-384-5512
                  </Link>
                </li>
              </ul>

              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler" onClick={showMobileNavbar}>
                <span className="icon-menu" />
              </div>
            </div>
            {/* End Outer Box */}
          </div>
        </div>
      </div>
      {/* End Header Lower */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fa-solid fa-xmark"></i>
          {/* <span className="icon far fa-times fa-fw" /> */}
        </div>
        <nav className="menu-box">
          <div className="menu-outer mt-4">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div
              className="navbar-collapse collapse clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/#about-us">About Us</Link>
                </li>
                <li className="dropdown" onClick={toggleSolutionDropdown}>
                  <Link to="/#solutions">Solutions</Link>
                  <ul ref={solutionDropdownRef}>
                    <li>
                      <Link to="/#ai-chat-bot">AI Chat Bot</Link>
                    </li>
                    <li>
                      <Link to="/#content-development">
                        Content Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/#text-to-image">Text To Image</Link>
                    </li>
                    <li>
                      <Link to="/#text-to-video">Text To Video</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <i className="fa-solid fa-angle-down" />
                  </div>
                </li>
                <li>
                  <Link to="/#contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default Header;
