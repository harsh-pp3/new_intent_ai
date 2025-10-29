const CallToAction = () => {
  return (
    <div className="container">
      <div className="career-page-top__interested-job d-lg-flex align-items-center gap-5 justify-content-between">
        <div className="career-page-top__interested-job-title-box mb-3 mb-lg-0">
          <div className="section-title__tagline-box mb-2">
            <span className="section-title__tagline">Contact Us</span>
          </div>
          <h3 className="career-page-top__interested-job-title">
            Get in Touch with Us
          </h3>
          <p className="">
            Ready to explore the future of AI in content development? Our team
            and partners are here to help you create a content strategy
            leveraging AI&apos;s power to drive business results. Whether
            you&apos;re looking for intelligent chatbots, content automation, or
            innovative ways to deliver multimedia content, we have the right
            solution.
          </p>
        </div>
        <div className="career-page-top__interested-job-btn-box flex-shrink-0">
          <a href="#" className="career-page-top__interested-job-btn thm-btn">
            Get in Touch <span className="icon-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
