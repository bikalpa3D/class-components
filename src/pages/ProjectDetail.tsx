import { useParams } from "react-router";
import { projects } from "../data/projects";
import type { Project } from "../types/projectTypes";
function ProjectDetail() {
  const { projectId } = useParams();

  const data: Project | null =
    projects.find((project) => project.id === Number(projectId)) || null;

  return (
    <div>
      ProjectDetail
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.department}</p>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
}

export default ProjectDetail;
