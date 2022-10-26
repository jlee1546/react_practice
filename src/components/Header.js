import React from "react";

function Header() {
  return (
    <header>
      <img
        src="../images/reactjs-icon.png"
        alt="this thing"
        className="react--logo"
      />
      <h2>React Practice!</h2>

      <ul>
        <li>Link here</li>
        <li>Go there</li>
      </ul>
    </header>
  );
}

export default Header;
