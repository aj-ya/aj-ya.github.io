import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Home" element={<App />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
