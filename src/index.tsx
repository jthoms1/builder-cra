import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import FigmaPlugin from "./routes/figma-plugin";
import BuilderPage from "./routes/builder-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/figma-imports",
    element: <FigmaPlugin />,
  },
  {
    path: "/builder-demo",
    element: <BuilderPage />,
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
