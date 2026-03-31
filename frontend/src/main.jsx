import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/header.scss";
import "./styles/auth.scss";
import "./styles/ad.scss";
import "./styles/footer.scss";
import "./styles/sidebar.scss";
import "./styles/video.scss";
import "./styles/profile.scss";
import "./styles/progress.scss";
import "./styles/features.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);