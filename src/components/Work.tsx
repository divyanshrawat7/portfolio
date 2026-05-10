// ...existing code...
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let timeline: gsap.core.Timeline | null = null;

    const onResize = () => {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return;
      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = (boxes[0] as Element).getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0] as Element).padding || "0", 10) / 2;
      const translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;

      const st = ScrollTrigger.getById("work");
      if (st) st.end = `+=${translateX}`;

      if (timeline) {
        timeline.clear();
        timeline.to(".work-flex", { x: -translateX, ease: "none" });
      }
    };

    const setup = () => {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return;

      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = (boxes[0] as Element).getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0] as Element).padding || "0", 10) / 2;
      const translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", { x: -translateX, ease: "none" });

      window.addEventListener("resize", onResize);
    };

    setup();

    return () => {
      if (timeline) {
        timeline.kill();
        timeline = null;
      }
      const st = ScrollTrigger.getById("work");
      if (st) st.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Distributed Recommendation System</h4>
                  <p>Machine Learning / Big Data</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Apache Spark, PySpark, ALS Algorithm, Streamlit</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Distributed Recommendation System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Energy Consumption Forecasting</h4>
                  <p>Time Series / Deep Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>LSTM, XGBoost, Random Forest, Linear Regression</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Energy Consumption Forecasting" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Face Recognition Attendance System</h4>
                  <p>Computer Vision</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, OpenCV, CNN, Face Recognition</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Face Recognition Attendance System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
// ...existing code...