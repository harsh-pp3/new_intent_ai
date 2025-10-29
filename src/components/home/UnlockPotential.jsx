const UnlockPotential = () => {
  return (
    <section className="solutions-two">
      <div className="container">
        <div className="solutions-two__content-one ">
          <div
            className="solutions-two__shape-1"
            style={{
              backgroundImage: "url(images/shapes/solutions-two-shape-1.png)",
            }}
          />
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-left">
                <div className="solutions-two__content-one-title-box">
                  {/* <p>AI Solutions</p> */}
                  <h3>Unlock the potential of AI-powered content solutions</h3>
                </div>
                <p className="solutions-two__content-one-text-1 mb-3">
                  with our expertise in enabling businesses to deliver smarter,
                  faster, and more engaging content experiences. Transform text
                  into dynamic formats like images and videos, create
                  intelligent chatbots, and enhance user engagement.
                </p>
                <p className="solutions-two__content-one-text-1">
                  With intent-based content delivery, your customers get the
                  information they need in the preferred format.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-right">
                <div className="solutions-two__content-one-img-box">
                  <div className="solutions-two__content-one-img">
                    <img src="/images/home/ai-content-solution.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotential;
