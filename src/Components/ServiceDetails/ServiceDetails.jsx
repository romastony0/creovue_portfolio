import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(
    "Social Media Management & Strategy"
  );

  const services = [
    {
      title: "Social Media Management & Strategy",
      description:
        "Comprehensive planning, scheduling, and management of your social media presence across all platforms including Instagram, Facebook, LinkedIn, and more.",
      image: "/assets/img/service/details-1.jpg",
      challenges:
        "Maintaining consistent brand voice across platforms while adapting to algorithm changes and audience preferences.",
      provides: [
        "Custom content calendar development",
        "Platform-specific strategy implementation",
        "Community engagement management",
        "Performance tracking and reporting",
      ],
      faq: [
        {
          title: "How often will you post on my accounts?",
          content:
            "We create a customized posting schedule based on your industry, audience behavior, and platform algorithms, typically ranging from 3-7 posts per week per platform.",
        },
        {
          title: "Do you handle customer interactions?",
          content:
            "Yes, our team manages all comments, messages, and engagements to maintain an active and responsive social presence for your brand.",
        },
      ],
    },
    {
      title: "Graphic Design & Banner Creation",
      description:
        "Professional custom visuals, ad creatives, and promotional banners optimized for each social platform's specifications and best practices.",
      image: "/assets/img/service/details-2.jpg",
      challenges:
        "Creating visually cohesive assets that stand out in crowded feeds while maintaining brand consistency.",
      provides: [
        "Platform-optimized image sizes",
        "Brand-aligned color schemes",
        "Eye-catching ad creatives",
        "Template libraries for quick updates",
      ],
      faq: [
        {
          title: "How many design revisions do I get?",
          content:
            "We include 2 rounds of revisions in our standard package to ensure you're completely satisfied with the final product.",
        },
        {
          title: "What file formats will I receive?",
          content:
            "You'll receive all final designs in multiple formats (JPG, PNG, PSD) optimized for both web and print use.",
        },
      ],
    },
    {
      title: "Web Design & Development",
      description:
        "Building responsive, conversion-optimized websites and landing pages that drive results and enhance user experience.",
      image: "/assets/img/service/details-3.jpg",
      challenges:
        "Creating fast-loading, mobile-friendly sites that convert visitors while maintaining SEO integrity.",
      provides: [
        "Mobile-first responsive design",
        "SEO-optimized architecture",
        "Conversion funnel optimization",
        "Ongoing maintenance packages",
      ],
      faq: [
        {
          title: "How long does a website project take?",
          content:
            "Most standard business websites take 4-6 weeks from initial design to launch, depending on complexity and content readiness.",
        },
        {
          title: "Do you provide hosting services?",
          content:
            "Yes, we offer managed hosting solutions with 99.9% uptime guarantees and regular security updates.",
        },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and enhancing user experiences for websites and mobile applications.",
      image: "/assets/img/service/details-4.jpg",
      challenges:
        "Balancing aesthetic appeal with functional usability across different devices and user demographics.",
      provides: [
        "User journey mapping",
        "Interactive prototyping",
        "Accessibility compliance",
        "Usability testing",
      ],
      faq: [
        {
          title: "What's included in your UI/UX process?",
          content:
            "Our comprehensive process includes research, wireframing, prototyping, user testing, and final design handoff with developer specs.",
        },
        {
          title: "How do you measure UX success?",
          content:
            "We track metrics like bounce rate, conversion rate, and user session duration to quantify improvements in the user experience.",
        },
      ],
    },
    {
      title: "Paid Advertising (SMM Ads)",
      description:
        "Strategic management and optimization of paid ad campaigns across social platforms including Meta, LinkedIn, and X.",
      image: "/assets/img/service/details-5.jpg",
      challenges:
        "Maximizing ROI while navigating constantly changing platform algorithms and ad policies.",
      provides: [
        "Audience targeting strategy",
        "A/B testing of creatives",
        "Conversion tracking setup",
        "Detailed performance reporting",
      ],
      faq: [
        {
          title: "What's your minimum ad spend recommendation?",
          content:
            "We typically recommend starting with at least $1,000/month per platform to gather meaningful data and see results.",
        },
        {
          title: "How often do you optimize campaigns?",
          content:
            "We monitor and adjust campaigns daily, with full optimizations performed weekly based on performance data.",
        },
      ],
    },
    {
      title: "Content Creation & Copywriting",
      description:
        "Crafting engaging captions, blog posts, and video scripts that align with your brand voice and resonate with your audience.",
      image: "/assets/img/service/details-6.jpg",
      challenges:
        "Producing fresh, platform-specific content that drives engagement without sounding salesy.",
      provides: [
        "Brand voice development",
        "SEO-optimized blog content",
        "Video script writing",
        "Content repurposing strategies",
      ],
      faq: [
        {
          title: "How do you ensure content matches our brand voice?",
          content:
            "We start with a detailed brand voice questionnaire and refine through iterative feedback on initial content samples.",
        },
        {
          title: "What's your content approval process?",
          content:
            "All content goes through our internal quality check before being submitted for your review and approval.",
        },
      ],
    },
  ];

  const faqContent =
    services.find((service) => service.title === activeService)?.faq || [];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const currentService =
    services.find((service) => service.title === activeService) || services[0];

  return (
    <section className="service-details-section section-padding">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="details-image">
                <img src={currentService.image} alt={currentService.title} />
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <div className="main-sidebar sticky-style">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Our Services</h4>
                  </div>
                  <div className="service-widget-categories">
                    <ul>
                      {services.map((service, index) => (
                        <li
                          key={index}
                          className={
                            activeService === service.title ? "active" : ""
                          }
                          onClick={() => setActiveService(service.title)}
                        >
                          <Link to="#">{service.title}</Link>
                          <span>
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="service-details-content">
                <h3>{currentService.title}</h3>
                <p className="mb-4">{currentService.description}</p>
                <h3>What We Provide</h3>
                <p className="mb-5">
                  Our comprehensive approach ensures you get measurable results
                  from your {currentService.title.toLowerCase()} efforts. We
                  combine industry best practices with customized strategies
                  tailored to your specific business goals.
                </p>
                <div className="details-list-items">
                  <ul className="details-list">
                    {currentService.provides
                      .slice(0, Math.ceil(currentService.provides.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i>
                          {item}
                        </li>
                      ))}
                  </ul>
                  <ul className="details-list">
                    {currentService.provides
                      .slice(Math.ceil(currentService.provides.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <h3 style={{ marginTop: "1rem" }}>The Challenge</h3>
                <p>
                  {currentService.challenges} Our team specializes in overcoming
                  these obstacles through proven methodologies and continuous
                  optimization.
                </p>
              </div>
              <div className="faq-wrapper mt-5">
                <div className="faq-accordion-items">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      {faqContent.map((item, index) => (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${
                            index === openItemIndex ? "active" : ""
                          }`}
                          data-wow-delay=".3s"
                        >
                          <h5
                            onClick={() => handleItemClick(index)}
                            className="accordion-header"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              {item.title}
                            </button>
                          </h5>
                          <div
                            ref={accordionContentRef}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">{item.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default ServiceDetails;
