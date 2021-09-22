import React from "react";

function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1>// Bleakney Bissett</h1>
          <div className="navbar-nav justify-content-end collapse navbar-collapse">
            <a className="nav-link" href="#work">
              WORK
            </a>
            <a className="nav-link" href="#about">
              ABOUT
            </a>
            <a className="nav-link" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
