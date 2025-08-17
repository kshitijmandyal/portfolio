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
    const spotlightProjects =  {
      "LensMate AI": {
        title: "LensMate AI",
        desc:
          "AI agent that provides a detailed photographic analysis using Generative AI.",
        techStack: "Python, TypeScript, LLMs",
        link: "https://github.com/kshitijmandyal/LensMate",
        //open: " ",
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
        //link: "https://github.com/",
        image: "/assets/image-colorization.png"
      }
    };
    const projects = {
      // "Project Name": {
      //   desc:
      //     "Project Despcription",
      //   techStack: "Project Tech Stack",
      //   link: "Project Github Link",
      //   open: "Project Deployment Link"
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
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
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
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
