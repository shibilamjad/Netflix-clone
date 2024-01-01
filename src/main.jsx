import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/Global.css";
import { MovieProvider } from "./context/MovieContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MovieProvider>
    <AuthProvider>
      {/* <DarkModeProvider> */}
      <App />
      {/* </DarkModeProvider> */}
    </AuthProvider>
  </MovieProvider>
  // </React.StrictMode>
);
