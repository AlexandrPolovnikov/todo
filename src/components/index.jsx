import React from "react";
import { ReactDOM } from "react-dom";
import Home from "./Home/Home";
import "./index.css";
import Layout from "./layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
