import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "LensMate AI": {
        title: "LensMate AI",
        desc:
          "AI agent that provides a detailed photographic analysis using Generative AI.",
        techStack: "Python, TypeScript, LLMs",
        link: "https://github.com/kshitijmandyal/LensMate",
        image: "/assets/lensmate.png"
      },
      "Adaptive Consensus": {
        title: "adaptive consensus",
        desc:
          "designed a new algorithm that adapts dynamically based on the current state of the system.",
        techStack: "Python, Distributed Systems",
        open: "https://doi.org/10.1007/978-3-031-57853-3_7",
        image: "/assets/adaptive-consensus.png"
      },
      "Image Colorization": {
        title: "image colorization",
        desc:
          "leveraged GAN & U-Net for image colorization, working on large-scale datasets.",
        techStack: "Python, Deep Learning, Computer Vision",
        image: "/assets/image-colorization.png"
      }
    };

    const projects = {
      "LensMate AI": {
        desc:
          "An intelligent agent using Generative AI and large language models to provide detailed photographic analysis. It critiques image composition and lighting via a Python backend and TypeScript frontend.",
        techStack: "Python, TypeScript, LLMs, Git",
        link: "https://github.com/kshitijmandyal/LensMate",
      },
      "Adaptive Consensus": {
        desc:
          "A research project introducing a novel algorithm that adapts to dynamic environments. It reduced computation time by 25% and improved system response efficiency by 20% for real-time data processing.",
        techStack: "Python, Distributed Systems, Data Structures & Algorithms",
        open: "https://doi.org/10.1007/978-3-031-57853-3_7",
      },
      "Image Colorization": {
        desc:
          "Leveraged Generative Adversarial Networks (GANs) for image colorization. Trained on 50,000+ ImageNet images, the model improved colorization accuracy by 18%, turning grayscale photos into realistic color images",
        techStack: "Python,TensorFlow, PyTorch, Keras, GANs, U-Net",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>

        {/* Spotlight Carousel */}
        <Carousel
          interval={3000}   // auto-slide every 3s
          pause="hover"     // pause on hover
          touch={true}      // ✅ enables swipe gestures
          indicators={true} // dots at bottom
          controls={true}   // arrows
        >
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
                loading="lazy"   // better perf
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Other projects grid */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    />
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
