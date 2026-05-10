import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MTech in Artificial Intelligence</h4>
                <h5>Indian Institute of Technology Jodhpur</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Relevant Courses: Machine Learning, Artificial Intelligence, Mathematics & Autonomous Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Cruxsphere Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Processed, cleaned, and transformed datasets using Python, Pandas, and NumPy for machine learning workflows. Developed automated SQL-based data pipelines and reporting scripts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Behere Elite Technologies</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Developed responsive web designs and assisted in the design, development, and maintenance of web applications using HTML, CSS, JavaScript, and React.js.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech in Computer Science and Engineering</h4>
                <h5>Graphic Era Hill University</h5>
              </div>
              <h3>2019 - 2023</h3>
            </div>
            <p>
              Relevant Courses: Computer Architecture, Compiler Design, Operating System, Databases, Computer Networks, Data Structure and Algorithm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
