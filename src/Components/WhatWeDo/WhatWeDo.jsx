import { Link } from "react-router-dom";
import parse from "html-react-parser";

const WhatWeDo = () => {
  const heading = {
    subtitle: "OUR COMPREHENSIVE SERVICES",
    title: "End-to-End Social Media Solutions <br> That Drive Results",
    content:
      "From strategy to execution, we deliver full-spectrum social media services <br> that amplify your brand and maximize ROI.",
  };

  const services = [
    {
      img: "/assets/img/service/icon-1.png",
      title: "Social Media Management & Strategy",
      content:
        "Complete platform management with data-driven content planning.",
      link: "/service/service-details",
    },
    {
      img: "/assets/img/service/icon-2.png",
      title: "Graphic Design & Banner Creation",
      content: "Platform-optimized visuals that capture attention and convert.",
      link: "/service/service-details",
    },
    {
      img: "/assets/img/service/icon-3.png",
      title: "Web Design & Development",
      content: "High-converting websites that complement your social presence.",
      link: "/service/service-details",
    },
    {
      img: "/assets/img/service/icon-4.png",
      title: "UI/UX Design",
      content: "Intuitive interfaces that enhance user engagement.",
      link: "/service/service-details",
    },
    {
      img: "/assets/img/service/icon-5.png",
      title: "Paid Advertising (SMM Ads)",
      content: "Strategic ad campaigns with precise audience targeting.",
      link: "/service/service-details",
    },
    {
      img: "/assets/img/service/icon-6.png",
      title: "Content Creation & Copywriting",
      content: "Engaging, platform-specific content that resonates.",
      link: "/service/service-details",
    },
  ];

  return (
    <section className="service-section fix section-padding" id="our-services">
      <div className="left-shape float-bob-y">
        <img
          src="/assets/img/service/left-shape.png"
          alt="social media graphic"
        />
      </div>
      <div className="right-shape">
        <img
          src="/assets/img/service/right-shape.png"
          alt="marketing graphic"
        />
      </div>
      <div className="bg-shape">
        <img src="/assets/img/service/bg-shape.png" alt="background shape" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{heading.subtitle}</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(heading.title)}
            </h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(heading.content)}
          </p>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * i}s`}
            >
              <div className="service-box-items">
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="content">
                  <h4>
                    <Link to={service.link}>{service.title}</Link>
                  </h4>
                  <p>{service.content}</p>
                  <Link to={service.link} className="link-btn">
                    Explore Service <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
