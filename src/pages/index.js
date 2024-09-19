import BackAndText from '@/components/BackAndText'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import HeroTexts from '@/components/HeroTexts'
import ImageBanner from '@/components/ImageBanner'
import TextImageCard from '@/components/TextImageCard'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import ImageCarousel from '@/components/Carausel'

import localFont from "next/font/local"

import banner1 from "../assets/banner1.svg"
import banner2 from "../assets/banner2.svg"
import banner3 from "../assets/banner3.svg"
import ThemeContext from '@/context/ThemeContext'

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});

// IF NEEDED :: https://flatuicolors.com/


const index = () => {

  const tempImages = [
    banner1,
    banner2,
    banner3
  ];

  const [showAnnouncement ,setShowAnnouncement] = useState(true)

  const { setNeonDark, neonDark } = useContext(ThemeContext)

  const text = "We won!✨🎉 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo possimus omnis similique. At dolores rerum molestias necessitatibus similique maiores ratione, impedit corrupti aperiam. Voluptas eius repudiandae illum nostrum sed. "


  return (
    <>
    <ThemeContext.Provider value={{ neonDark, setNeonDark }} >
    <div className={`overflow-hidden ${neonDark && "bg-[#0d0d0d]"} `}>
       <Header 
        text1={"The winner for Minithon is"} 
        text2={"Zucky the Lizard"} 
        linktext={"switch theme"}
        setNeonDark={setNeonDark}
        neonDark={neonDark}
        tabs={[
          {name: "Home", link: "/"},
          {name: "About", link: "/about"},
          {name: "Contact", link: "/contact"}
        ]} 
      />

        <ImageCarousel images={tempImages}/>

          <HeroTexts 
            setNeonDark={setNeonDark}
            neonDark={neonDark}
            heading={"Professionally Designed by team Zucky the Lizard"}
            para={text}
          />

          <div className='flex justify-center mt-10'>
            <Button 
              text="Explore more"
              arrowType="minimal"
              mode="dark"
            />
          </div>

          <motion.div className='flex justify-center mt-20'
            whileHover={{
              scale: 1.5,
            }}
          >
            <Image 
              src={"https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=750&q=100&fit=clip&auto=format"}
              width={700}
              height={700}
            />
          </motion.div>

            {/* gray textbox */}
          <div id="grayish-textarea" className="mb-24">
            <BackAndText 
              text={text} 
              setNeonDark={setNeonDark}
              neonDark={neonDark} 
            />
          </div>

            {/* left img and right text or wise versa */}
          <div id="textimgcard" className='flex justify-center items-center mx-auto'>
            <TextImageCard 
              head={"By Zucky the Lizard"}
              title={"Lol"}
              text={text}
              imageUri={"https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=750&q=100&fit=clip&auto=format"}
              buttonText={"Learn more"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div id="textimgcard" className='flex justify-center items-center mx-auto'>
            <TextImageCard 
              head={"By Zucky the Lizard"}
              title={"Lol"}
              text={text}
              imageUri={"https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=750&q=100&fit=clip&auto=format"}
              buttonText={"Learn more"}
              direction={"left"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <ImageBanner />

          <Footer />
    </div>
    </ThemeContext.Provider>
    </>
  )
}

export default index