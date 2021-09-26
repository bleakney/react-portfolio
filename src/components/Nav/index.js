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
            <span className={`nav-link ${workSelected && `nav-active`}`} onClick={() => {setWorkSelected(true); setContactSelected(false); setAboutSelected(false);}}>
              WORK
            </span>
            <span className={`nav-link ${aboutSelected && `nav-active`}`} onClick={() => {setAboutSelected(true); setContactSelected(false); setWorkSelected(false);}}>
              ABOUT
            </span>
            <span className={`nav-link ${contactSelected && `nav-active`}`} onClick={() => {setContactSelected(true); setAboutSelected(false); setWorkSelected(false);}}>
              CONTACT
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
