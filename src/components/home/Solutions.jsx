const Solutions = () => {
  const data = [
    {
      title: "AI Chat Bot",
      desc: "Enhance customer engagement, automate support, and improve service efficiency with intelligent interactive AI chatbots.",
      image: "/images/icons/ai-chat.png",
      id: "ai-chat-bot",
    },
    {
      title: "Content Development",
      desc: "We ensure your content is optimized for relevance and engagement, from technical documentation to marketing material.",
      image: "/images/icons/ai-content-writing.png",
      id: "content-development",
    },
    {
      title: "Text to Image",
      desc: "Transform your text into visually engaging imagery powered by AI, creating contextually relevant visuals based on user intent.",
      image: "/images/icons/ai-image.png",
      id: "text-to-image",
    },
    {
      title: "Text to Video",
      desc: "Convert text-based content into dynamic video formats that engage your audience. Whether for training, marketing, or customer support, our AI solutions make creating compelling videos based on your text content easy.",
      image: "/images/icons/ai-audio.png",
      id: "text-to-video",
    },
  ];
  return (
    <section className="solutions-one">
      <div className="container">
        <div
          className="section-title text-center scroll-margin-top"
          id="solutions"
        >
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Solutions</span>
          </div>
          <h2 className="section-title__title">
            AI-Powered Solutions and Consultancy
          </h2>
          <p>
            We offer a wide range of AI consulting services to optimize content
            creation and consumption. Our solutions are tailor-made to meet your
            business needs, ensuring you deliver the right content in the
            correct format to the right audience.
          </p>
        </div>
        <div className="solutions-one__carousel ">
          <div className="row">
            {data.map((item, i) => (
              <div
                className="col-lg-3 col-md-6 col-12 mb-3 scroll-margin-top"
                key={i}
                id={item.id}
              >
                <div className="item h-100">
                  <div className="solutions-one__single h-100">
                    <div className="solutions-one__icon">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <h4 className="solutions-one__title">
                      <span className="text-white">{item.title}</span>
                    </h4>
                    <p className="solutions-one__text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
