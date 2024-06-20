import React, { useState, useEffect } from 'react';
import './Foreground.css'

const Foreground = () => {
    const [cursorStyle, setCursorStyle] = useState('cursor-blue'); 
    const cursorStyles = ['cursor-blue', 'cursor-green', 'cursor-red', 'cursor-a', 'cursor-b', 'cursor-c', 'cursor-d', 'cursor-e', 'cursor-f', 'cursor-g', 'cursor-h', 'cursor-i', 'cursor-j', 'cursor-k'];
    let currentIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cursorStyles.length;
            setCursorStyle(cursorStyles[currentIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 App ${cursorStyle}`}>
        </div>
    );
}

export default Foreground;
