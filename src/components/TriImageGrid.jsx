import React from 'react'
import localFont from "next/font/local"
import Image from 'next/image';

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});


const TriImageGrid = ({ text, image }) => {
  return (
    <>
        <div id="container">
            <div id="text" className={`mt-28 flex justify-center items-center ${AktivGroteskBold.variable}`}>
                <p className='text-5xl font-bold w-[50%] text-center'>
                    {text}
                </p>
            </div>
            <div id="grid">
                <div>
                    <Image src={image[2]} alt="image" width={100} height={100} className="w-[40rem] h-auto" />
                </div>
                <div>
                    {
                        image.map((item, index) => (
                            <div id="img"></div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default TriImageGrid