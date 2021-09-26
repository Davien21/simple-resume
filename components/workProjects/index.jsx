import React, { useState } from "react";
import { getProjects } from "../../services/projects";

function WorkProjects({ activeType }) {
  const defaultType = "All";
  const [projects, setProjects] = useState(getProjects());
  
  const willDisplay = (type) =>
    activeType == defaultType || type == activeType.toLowerCase();

  return (
    <div id="projects">
      {projects.map((project) => {
        if (willDisplay(project.type))
          return (
            <div key={project.name}>
              <br />
              <div>{project.name}</div>
              <div>{project.url}</div>
              <div>{project.type}</div>
              <br />
            </div>
          );
      })}
    </div>
  );
}

export default WorkProjects;
