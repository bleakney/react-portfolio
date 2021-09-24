import React from "react";

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span onClick={() => {setWorkSelected(false); setContactSelected(false); setAboutSelected(false);}}><h1>// Bleakney Bissett</h1></span>
          <div className="navbar-nav justify-content-end collapse navbar-collapse">
            <span className="nav-link" onClick={() => {setWorkSelected(true); setContactSelected(false); setAboutSelected(false);}}>
              WORK
            </span>
            <span className="nav-link" onClick={() => {setAboutSelected(true); setContactSelected(false); setWorkSelected(false);}}>
              ABOUT
            </span>
            <span className="nav-link" onClick={() => {setContactSelected(true); setAboutSelected(false); setWorkSelected(false);}}>
              CONTACT
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
