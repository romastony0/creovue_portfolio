import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const Counter3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <section
      className="cta-counter-section-3 fix section-bg section-padding bg-cover"
      data-background="/assets/img/cta-counter-bg.jpg"
    >
      <div className="container">
        <div className="cta-counter-wrapper-2">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title bg-color-3 wow fadeInUp">
                <span>Creovue Insights</span>
              </div>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Accelerate your digital <br /> growth with results
              </h2>
            </div>
            <div className="counter-box-area">
              <div className="counter-text wow fadeInUp" data-wow-delay=".3s">
                <h2>
                  <span className="count">850</span>+
                </h2>
                <p>Campaigns Launched</p>
              </div>
              <div className="counter-text wow fadeInUp" data-wow-delay=".5s">
                <h2>
                  <span className="count">650</span>+
                </h2>
                <p>Brands Empowered</p>
              </div>
              <div className="counter-text wow fadeInUp" data-wow-delay=".7s">
                <h2>
                  <span className="count">25</span>+
                </h2>
                <p>Specialists Onboard</p>
              </div>
            </div>
          </div>
          <div
            className="cta-video-image wow img-custom-anim-left"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <img src="/assets/img/cta-video.jpg" alt="img" />
            <a onClick={handelClick} className="video-icon video-popup">
              <i className="bi bi-play-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </section>
  );
};

export default Counter3;
