import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
   throw new Error("No se encontró el elemento root");
}
createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);
