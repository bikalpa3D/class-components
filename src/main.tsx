import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";
import { NotificationProvider } from "./context/NotificationContext.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Router>
  </StrictMode>
);
