import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { AuthenticationContextProvider } from "./Components/services/authenticationContext/authentication.context";
import { APIContextProvider } from "./Components/services/apiContext/ApiContext";
import { ThemeContextProvider } from "./Components/services/themeContext/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <APIContextProvider>
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <App />
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  </APIContextProvider>
);
