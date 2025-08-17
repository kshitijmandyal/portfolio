import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am an <b>AI/ML Engineer</b> with an <b> M.Tech </b> 
        in <b>Computer Science & Engineering </b> from <a href="https://nith.ac.in/"> NIT Hamirpur</a>
        , specializing in Generative AI, LLMs, and GANs. I previously worked at {" "}
         <a href="https://www.stryker.com/in/en/index.html">Stryker</a>, 
        optimizing real-time medical AI systems and deploying end-to-end solutions.
      </p>
    );
    const two = (
      <p>
         Outside of work, I'm interested in following the developments of
        AI. I also enjoy hiking. And I love Photography.
      </p>
    );

    const tech_stack = [
      "Python",
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "Pandas",
      "Numpy"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Kshitij Mandyal" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
