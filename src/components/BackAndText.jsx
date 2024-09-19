import React from 'react'
import localFont from "next/font/local"

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});

const BackAndText = ({ text, setNeonDark, neonDark }) => {
  return (
    <>
        <div id="container" className={`p-4 md:p-32 ${neonDark && "bg-[#1d1d1d] text-gray-300"} bg-[#e8e8e8] text-blacks text-center flex justify-center md:text-3xl`}>
            <p className={`md:w-[70%] font-semibold ${AktivGroteskRegular.variable}`}>
                {text}
            </p>
        </div>
    </>
  )
}

export default BackAndText