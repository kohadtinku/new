import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import MovieProvider from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
