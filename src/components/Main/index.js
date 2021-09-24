import React, { useState, useEffect } from 'react';
import Landing from '../Landing';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';

function Main () {
    const mainContent = [Landing, About, Work, Contact];
    const [currentContent, setContent] = useState(0);
    useEffect(() => {
        document.title = `${currentContent}`;
    })
    const 
    return (
        <main>
            <About></About>
        </main>
    )
}

export default Main;