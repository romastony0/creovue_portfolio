const Value1 = () => {
  const chooseContent = [
    {
      iconclass: "bi bi-people",
      title: "Collaboration",
      content:
        "We work as an extension of your team, ensuring strategies align with your brand goals and audience needs.",
    },
    {
      iconclass: "bi bi-pie-chart",
      title: "Creativity",
      content:
        "From design to content, we blend storytelling with visuals that captivate and convert across all platforms.",
    },
    {
      iconclass: "bi bi-cloudy",
      title: "Agility",
      content:
        "We adapt quickly to trends and insights, ensuring every campaign remains relevant and results-driven.",
    },
    {
      iconclass: "bi bi-check-circle",
      title: "Results-Driven",
      content:
        "Our focus is on measurable outcomes—growth, engagement, and ROI that fuel your digital success.",
    },
  ];

  return (
    <section className="value-section fix section-padding section-bg pt-0">
      <div className="value-shape">
        <img src="/assets/img/value-shape.png" alt="img" />
      </div>
      <div className="value-shape-2">
        <img src="/assets/img/value-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div
          className="section-title text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <h2>Our values</h2>
        </div>
        <div className="row">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="value-box-items">
                <div className="icon">
                  <i className={item.iconclass}></i>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value1;
