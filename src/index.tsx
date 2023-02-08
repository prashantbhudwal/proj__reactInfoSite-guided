import React from "react";
import ReactDOM from "react-dom/client";
const page = (
  <div>
    <img src="/src/assets/react-logo.png" alt="" />
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

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootEl);
root.render(<React.StrictMode>{page}</React.StrictMode>);
