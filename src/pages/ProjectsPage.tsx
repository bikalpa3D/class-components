import { useState } from "react";
import { projects as data } from "../data/projects";
import { type ProjectList } from "../types/projectTypes";
import { Link } from "react-router";

function ProjectsPage() {
  const [projects] = useState<ProjectList>(data || []);

  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((el) => (
        <Link to={`/projects/${el.id}`} key={el.id}>
          <div className="bg-green-400 w-40 h-40" key={el.id}>
            <h2>{el.name}</h2>
            <p>Department: {el.department}</p>
            <p>
              Owner: {el.owner.name} ({el.owner.email})
            </p>
            <p>Status: {el.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsPage;
