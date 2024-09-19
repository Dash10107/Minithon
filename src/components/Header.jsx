import React, { useState } from 'react'
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


// icons
import { RxCross2 } from "react-icons/rx";
import { CiSearch, CiUser } from "react-icons/ci";
import { TbMenu } from "react-icons/tb";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = ({ text1, text2, linktext, tabs }) => {

    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [showModal, setShowModal] = useState(false);


  return (
    <>
        <div id="contianer">
            {
                showAnnouncement && (
                    <motion.div id="announcement-banner" className='bg-blacks p-2 flex justify-between items-center gap-1'
                        initial={{
                            y:-100
                        }}
                        animate={{
                            y:0,
                            transition:{
                                duration: 0.5
                            }
                        }}
                        exit={{y: -100, transition: {duration: 0.5}}}
                    >
                        <div id="icon" onClick={() => setShowAnnouncement(!showAnnouncement)}>
                            <RxCross2 size={25} color='#8f8f8f'/>
                        </div>
                        <div id="announcement" className='flex gap-1 text-white '>
                            <p className={`${AktivGroteskBold.variable} text-[#8f8f8f] text-xs md:text-base`}>{text1}</p>
                            <p className='font-bold text-[#d4d4d4] text-xs md:text-base'>{text2}</p>
                        </div>
                        <div id="external-link" className='text-[#8f8f8f]'>
                            <a href="https://www.google.com" target="_blank" className='underline text-xs md:text-base'>
                                {linktext}
                            </a>
                        </div>
                    </motion.div>
                )
            }

            <motion.div id="navigation-bar" className='p-4 flex justify-between items-center'
                initial={{ y: 100, opacity: 0 }}  // Start below and invisible
                animate={{ y: 0, opacity: 1 }}    // Move to original position and become visible
                transition={{ duration: 0.6, ease: "easeOut" }}  // Customize the duration and easing
            >
                <div id="logo" className='flex items-center gap-4'>
                    <div className='md:hidden' onClick={() => setShowModal(!showModal)}>
                        <TbMenu size={20} />
                    </div>
                    <p className={`text-4xl font-bold ${AktivGroteskBold.className}`} >
                        <Link href={"/"}>
                            ZUCK
                        </Link>
                    </p>
                </div>
                <div id="tabs" className='md:flex gap-9 hidden'>
                    {
                        tabs.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <p className={`text-lg ${item.underline ? "underline" : ""} ${AktivGroteskRegular.className}`}>{item.name}</p>
                            </Link>
                        ))
                    }
                </div>

                <div id="icons" className='flex gap-2'>
                    <CiSearch size={25}/>
                    <CiUser size={25}/>
                </div>
            </motion.div>
            {
                showModal && (
                    <motion.div id="modal" className=' z-30 border w-full absolute bg-white md:hidden p-2 mt-2  rounded-lg'
                        initial={{ y: -100, opacity: 0 }}  // Start below and invisible
                        animate={{ y: 0, opacity: 1 }}    // Move to original position and
                        transition={{ duration: 0.6, ease: "easeOut" }}  // Customize
                    >
                        <div id="icon" className='absolute right-1' onClick={() => setShowModal(!showModal)}>
                            <RxCross2 size={25} color='#8f8f8f'/>
                        </div>
                        {
                            tabs.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <p className={`text-lg mt-3 font-semibold ${item.underline ? "underline" : ""} ${AktivGroteskRegular.className}`}>{item.name}</p>
                                </Link>
                            ))
                        }
                    </motion.div>
                )
            }
        </div>
    </>
  )
}

export default Header