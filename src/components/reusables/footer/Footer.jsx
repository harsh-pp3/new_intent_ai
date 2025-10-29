import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__top">
        <div className="container">
          <div className="d-md-flex justify-content-between">
            <div className="  ">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Contact</h3>
                </div>
                <ul className="list-unstyled mb-0 footer-widget__company-list">
                  <li className="mail">
                    <i className="fa-sharp fa-solid fa-envelope pe-2 " />
                    <Link
                      className="text-decoration-none"
                      to="mailto:letsconnect@ditaxpresso.com"
                    >
                      letsconnect[at]ditaxpresso[dot]com
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume pe-2" />
                    <Link
                      className="text-decoration-none"
                      to="tel:+919373845512"
                    >
                      +91-937-384-5512
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" ">
              <div className="footer-widget__column footer-widget__company">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Quick Link</h3>
                </div>

                <div className="d-lg-flex ">
                  <ul
                    className="list-unstyled mb-0 footer-widget__company-list"
                    style={{ paddingRight: 15 }}
                  >
                    <li>
                      <Link
                        className="text-decoration-none ps-0"
                        to="https://ditaxpresso.com/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-decoration-none ps-0"
                        to="https://ditaxpresso.com/terms-of-use"
                        target="_blank"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-unstyled mb-0 footer-widget__company-list">
                    <li>
                      <Link
                        className="text-decoration-none ps-0"
                        to="https://ditaxpresso.com/cookie-policy"
                        target="_blank"
                      >
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-decoration-none ps-0"
                        to="https://ditaxpresso.com/gdpr-compliance"
                        target="_blank"
                      >
                        GDPR Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="  ">
              <div className="footer-widget__column footer-widget__newsletter">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Social Links</h3>
                </div>

                <div className="site-footer__social">
                  <Link to="https://x.com/DitaxpressTech" target="_blank">
                    <i className="fa-brands fa-x-twitter" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/dxp-tech/about/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom-inner d-lg-flex justify-content-between align-items-center">
            <div className="footer-widget__logo mb-lg-0 ">
              <Link to="/">
                <img src="/images/home/IntentContent-1.png" alt="" />
              </Link>
            </div>
            <p className="main-footer__bottom-text">
              © {new Date().getFullYear()} DITAXPRESSO TECHNOLOGY PRIVATE
              LIMITED. All RIght Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
