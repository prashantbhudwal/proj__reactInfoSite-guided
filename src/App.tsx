import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Main />
    </div>
  );
}

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
