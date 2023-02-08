import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <nav>
        <img src="/src/assets/react-logo.png" alt="" width="30px" />
        <h2>ReactFacts</h2>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <p>© 2022. All rights reserved.</p>
    </footer>
  );
}

function Main() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>First released in 2013</li>
        <li>Created by Jordan Walke</li>
        <li>100K+ stars on Github</li>
        <li>Maintained by Facebook</li>
        <li>Powers thousands of enterprise apps</li>
      </ul>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
