import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { HashRouter } from "react-router";
createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
