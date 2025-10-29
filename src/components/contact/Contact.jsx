import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      {/* Page Title Start */}
      <section className="page-title scroll-margin-top" id="contact-us">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Contact Us</span>
            </div>
            <h2 className="section-title__title">Get in Touch with Us</h2>
            <p>
              Ready to explore the future of AI in content development? Our team
              and partners are here to help you create a content strategy
              leveraging AI&apos;s power to drive business results. Whether
              you&apos;re looking for intelligent chatbots, content automation,
              or innovative ways to deliver multimedia content, we have the
              right solution.
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 ">
            <div className="counter-one__single">
              <div className="counter-one__top d-block d-sm-flex">
                <div className="counter-one__icon d-block text-center d-sm-flex gap-4">
                  <i className="fa-solid fa-phone-volume"></i>
                  <p className="counter-one__text-1 text-center">
                    <Link to="tel:+919373845512">+91-937-384-5512</Link>
                  </p>
                </div>
              </div>
              <div className="counter-one__top d-block d-sm-flex  border-0 mb-0 pb-0">
                <div className="counter-one__icon d-block text-center d-sm-flex gap-4">
                  <i className="fa-solid fa-envelope"></i>
                  <p className="counter-one__text-1 text-center overflow-hidden">
                    <Link to="mailto:letsconnect@ditaxpresso.com">
                      letsconnect[at]ditaxpresso[dot]com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
