import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import FigmaPlugin from "./routes/figma-plugin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
];

// Only add the Figma plugin route in development
if (process.env.NODE_ENV === "development") {
  import("./builder-registry");

  routes.push({
    path: "/figma-imports",
    element: <FigmaPlugin />,
  });
}

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
