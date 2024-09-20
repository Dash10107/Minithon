import React from 'react'
import localFont from "next/font/local"
import { motion } from 'framer-motion';

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskMedium = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Medium.ttf',
    variable: '--font-aktiv-bold' 
});


const HeroTexts = ({ heading, para, setNeonDark, neonDark }) => {
  return (
    <>
        <motion.div id="container" className={` ${neonDark && "text-white"} mt-20 text-start flex flex-col justify-center items-center`}
            initial={{ y: 100, opacity:0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
            whileHover={{ scale:1.1, transition: {
                type: "tween",
                duration: 0.2
            } }}
            id="hero-text" className={`text-4xl md:text-7xl w-[90%] md:w-[60%] font-bold ${AktivGroteskBold.variable}`}>
                {heading}
            </motion.div>
            <div id="hero-para" className={`z-10 mt-7 text-base md:w-[70%] w-[80%] font-semibold ${neonDark ? "text-gray-300" : "text-heads"} ${AktivGroteskMedium.variable}`}>
                {para}
            </div>
        </motion.div>
    </>
  )
}

export default HeroTexts