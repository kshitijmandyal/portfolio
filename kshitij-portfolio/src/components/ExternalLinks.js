import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

class ExternalLinks extends React.Component {
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
    const { githubLink, openLink } = this.props;
    return (
      <span className="external-links">
        {githubLink && githubLink !== "" && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon
              style={{
                fontSize: 20,
                color: "var(--lightest-slate)"
              }}
            />
          </a>
        )}
        {openLink && (
          <a className="open-icon" href={openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
