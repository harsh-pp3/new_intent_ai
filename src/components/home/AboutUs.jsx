import { useState, useEffect } from 'react';
import { fetchAboutUs } from '../../services/api';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetchAboutUs().then(data => setAboutData(data.data));
  }, []);

  return (
    <>
      <section className="page-title pb-4 scroll-margin-top" id="about-us">
        <div className="container">
          <div className="page-title__inner">
            <div
              className="page-title__shape-1"
              style={{
                backgroundImage: "url(images/shapes/page-title-shape-1.png)",
              }}
            />
            <div className="page-title__title-box">
              <p className="page-title__sub-title">{aboutData?.sectionTitle || 'About Us'}</p>
              <h3 className="page-title__title">
                {typeof aboutData?.mainTitle === 'string' ? aboutData.mainTitle : 'Innovators in AI-Driven Content Solutions'}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}
      {/* About One Start */}
      <section className="about-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="about-one__img">
                  <img src={aboutData?.image?.url || "/images/home/about-us.jpg"} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left ps-lg-5">
                <div className="about-one__left-content">
                  <p className="about-one__text my-3">
                    {typeof aboutData?.description1 === 'string' ? aboutData.description1 : 'We specialize in AI consulting services that drive digital transformation through content enablement. Our team is passionate about leveraging the latest advancements in AI to help businesses create, manage, and distribute content more effectively.'}
                  </p>
                  <p className="about-one__text">
                    {typeof aboutData?.description2 === 'string' ? aboutData.description2 : 'Our mission is to deliver personalized, scalable, high-quality content experiences that keep you ahead of the competition.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
