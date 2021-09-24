import React, { useState } from 'react';
import Landing from '../Landing';
import About from '../About';

function Main () {
    const mainContent = [Landing, About];
    const [currentContent, setContent] = useState(mainContent[0]);
    return (
        <main>
            <About></About>
        </main>
    )
}

export default Main;