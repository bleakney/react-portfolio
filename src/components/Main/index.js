import React, { useState } from 'react';
import Landing from '../Landing';
import About from '../About';

function Main () {
    const [currentContent, setContent] = useState(mainContent[0]);
    const mainContent = [Landing, About];
    return (
        <main>
            {mainContent}
        </main>
    )
}

export default Main;