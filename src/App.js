import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  // import google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900', 'Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900']
      }
    })
  })

  const [aboutSelected, setAboutSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <Nav
    aboutSelected={aboutSelected}
    setAboutSelected={setAboutSelected}
    workSelected={workSelected}
    setWorkSelected={setWorkSelected}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
    ></Nav>
    <main>
      {aboutSelected ? (
        <>
        <About></About>
        </>
      ) : workSelected ? (
        <>
        <Work></Work>
        </>
      ) : contactSelected ? (
        <>
        <Contact></Contact>
        </>
      ) : (
        <Landing></Landing>
      )}
    </main>
    </div>
  )
}

export default App;
