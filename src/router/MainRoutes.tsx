import { Route, Routes } from "react-router";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetail from "../pages/ProjectDetail";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/notifications" element={<div>Notifications Page</div>} />
    </Routes>
  );
}

export default MainRoutes;
