import { useState, useEffect } from 'react';
import { fetchHeroSection } from '../../services/api';

const AiPack = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetchHeroSection().then(data => setHeroData(data.data));
  }, []);

  return (
    <section className="feature-one overflow-hidden">
      <div className="container">
        <div className="feature-one__inner">
          <h2 className="feature-one__title">
            {heroData?.mainTitle || 'Explore the Possibilities of AI with Intent-Content'}
          </h2>

          <div className="feature-one__main-content-box">
            <div className="feature-one__color-overly-1 flaot-bob-y" />
            <div className="feature-one__color-overly-2 flaot-bob-x" />
            <div className="feature-one__color-overly-3 img-bounce" />
            <div className="feature-one__main-content-top">
              <ul className="feature-one__list">
                {heroData?.aiFeatures?.slice(0, 2).map((feature, index) => (
                  <li key={index}>
                    <div className="feature-one__single">
                      <div className="feature-one__icon">
                        <img src={feature.icon?.data?.attributes?.url ? `http://localhost:1337${feature.icon.data.attributes.url}` : "images/icons/ai-content-writing.png"} alt="" />
                      </div>
                      <h5 className="feature-one__title-2 text-white">
                        {feature.title || 'AI Content Writing'}
                      </h5>
                    </div>
                  </li>
                )) || (
                  <>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-content-writing.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          AI Content <br />
                          Writing
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-image.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          AI Image <br />
                          Generator
                        </h5>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="feature-one__main-content-middle">
              <div className="feature-one__ai-pack">
                <h3>AI Pack</h3>
              </div>
              <ul className="feature-one__list">
                {heroData?.aiFeatures?.slice(2, 4).map((feature, index) => (
                  <li key={index}>
                    <div className="feature-one__single">
                      <div className="feature-one__icon">
                        <img src={feature.icon?.data?.attributes?.url ? `http://localhost:1337${feature.icon.data.attributes.url}` : "images/icons/ai-code.png"} alt="" />
                      </div>
                      <h5 className="feature-one__title-2 text-white">
                        {feature.title || 'AI Code Generator'}
                      </h5>
                    </div>
                  </li>
                )) || (
                  <>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-code.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          AI Code <br /> Generator
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-chat.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          AI Chat Bot
                        </h5>
                      </div>
                    </li>
                  </>
                )}
                <li>
                  <div className="feature-one__cpu-icon-box">
                    <img src="images/icons/cpu.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="feature-one__main-content-bottom">
              <ul className="feature-one__list">
                {heroData?.aiFeatures?.slice(4, 6).map((feature, index) => (
                  <li key={index}>
                    <div className="feature-one__single">
                      <div className="feature-one__icon">
                        <img src={feature.icon?.data?.attributes?.url ? `http://localhost:1337${feature.icon.data.attributes.url}` : "images/icons/ai-audio.png"} alt="" />
                      </div>
                      <h5 className="feature-one__title-2 text-white">
                        {feature.title || 'Generate Text to Audio'}
                      </h5>
                    </div>
                  </li>
                )) || (
                  <>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-audio.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          Generate <br /> Text to Audio
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="feature-one__single">
                        <div className="feature-one__icon">
                          <img src="images/icons/ai-speech.png" alt="" />
                        </div>
                        <h5 className="feature-one__title-2 text-white">
                          Speech to <br /> Text
                        </h5>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPack;
