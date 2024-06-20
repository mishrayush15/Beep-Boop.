import React from 'react'

const Background = () => {
    return (
        <>
        <div className='w-full fixed h-screen z-[2]'>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[9vw] leading-none tracking-tighter font-semibold text-zinc-900'>Beep Boop.</h1>
            <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-2xl font-semibold'>
                HACKCLUB ARCADE
            </div>
            <div className='absolute bottom-[5%] w-full py-10 flex justify-center text-zinc-600 text-l font-semibold'>
                By - Ayush Mishra 🍵❤️
            </div>
        </div>
        </>
    )
}
export default Background



