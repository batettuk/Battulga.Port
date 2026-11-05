import * as THREE from "three";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

if (typeof window !== "undefined") {
  (window as any).THREE = Object.assign({}, THREE, { VertexColors: true });
}

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
