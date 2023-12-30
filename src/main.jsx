import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/Global.css";
import { MovieProvider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MovieProvider>
    <App />
  </MovieProvider>
  // </React.StrictMode>
);