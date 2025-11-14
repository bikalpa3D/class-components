import { Route, Routes } from "react-router";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/projects" element={<div>Projects Page</div>} />
      <Route
        path="/projects/:projectId"
        element={<div>project detail Page</div>}
      />
      <Route path="/notifications" element={<div>Notifications Page</div>} />
    </Routes>
  );
}

export default MainRoutes;
