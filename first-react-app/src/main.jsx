import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./Components/WelcomeScreen/ErrorMessage/ErrorMessage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* //explaining error handling across whole hierarchy 06/10/23 3:27 PM */}
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
