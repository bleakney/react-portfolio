import React from 'react';

function Landing (props) {
    const {
        setAboutSelected,
        setContactSelected,
        setWorkSelected
    } = props;

    return (
        <div className="landing-page">
            <h1>Full-Stack</h1>
            <h1>Web Developer</h1>
            <div className="stack-container">
            <h2>MongoDB</h2>
            <h2>&#10042;</h2>
            <h2>Express</h2>
            <h2>&#10042;</h2>
            <h2>React</h2>
            <h2>&#10042;</h2>
            <h2>Node</h2>
            </div>
            <div className="section-link-container">
      <h4><span onClick={() => {setAboutSelected(true); setContactSelected(false); setWorkSelected(false);}}>about me &#10547;</span></h4>
      </div>
        </div>
    )
};

export default Landing;