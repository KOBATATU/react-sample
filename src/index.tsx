import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";
import Name from "./components/Name";
// import Parent from "./components/ContainerSample";
import ContextSample from "./components/ContextSample";
// import Parent from "./components/memoSample";
import Parent from "./components/memoCallbackSample";
import ImageUploader from "./components/FileUploadSample";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ImageUploader />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
