import React, { useState, useEffect } from 'react';
import './Foreground.css'

const Foreground = () => {
    const [cursorStyle, setCursorStyle] = useState('cursor-blue'); // Initial cursor style
    const cursorStyles = ['cursor-blue', 'cursor-green', 'cursor-red', 'cursor-a', 'cursor-b', 'cursor-c', 'cursor-d', 'cursor-e', 'cursor-f', 'cursor-g', 'cursor-h', 'cursor-i', 'cursor-j', 'cursor-k']; 

    return (
        
        <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        </div>
        
    )
}

export default Foreground
