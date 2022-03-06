import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./pages/App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import NotFound from "./pages/404";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Nav />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/*" element={<NotFound />} />
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
