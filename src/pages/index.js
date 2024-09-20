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
import volunteer from "../assets/volunteer.svg"
import vol1 from "../assets/vol1.jpg"
import vol2 from "../assets/vol2.jpg"
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

  const text = "At Voluntrix, we believe in the power of giving back. Our platform bridges the gap between volunteers and local opportunities, creating a space where individuals can contribute to meaningful causes. Whether you're tech-savvy or just starting out, our user-friendly interface makes it easy to find events, track hours, and see the positive impact you're making in your community. From environmental cleanups to helping the elderly, your contribution matters—and we’re here to make it seamless."


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
          { name: "Home", link: "/" , underline: true},
          { name: "About", link: "/about" },
          { name: "Events", link: "/Events/event" },
          { name: "Profile", link: "/Auth/profile" },
          { name: "Calendar", link: "/Calendar/calendar" },
        ]} 
      />

        <ImageCarousel images={tempImages}/>

        <div className='lg:flex my-5 lg:my-10'>
          <div className='lg:w-[50%]'>
            <HeroTexts 
              setNeonDark={setNeonDark}
              neonDark={neonDark}
              heading={"Empowering Communities, One Hour at a Time"}
              para={text}
            />

            <div className='flex justify-center mt-10'>
              <Button 
                text="Explore more"
                arrowType="minimal"
                mode="dark"
              />
            </div>
          </div>

          <motion.div className='flex justify-center items-center mt-5 lg:mt-20 lg:w-[50%] w-full h-[500px] lg:h-auto'
          >
            <Image 
              src={volunteer}
              height={1100}
              className='w-auto'
              objectFit="cover" // This will make the image cover the container without distortion
              alt="Volunteering Image"
            />
          </motion.div>
        </div>

          
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
              head={"Community Helper"}
              title={"By Linda W."}
              text={"As someone who isn’t very tech-savvy, I was worried I wouldn’t be able to navigate the platform. But Voluntrix is so intuitive! Now, I can easily sign up for events and track my contributions without any hassle"}
              imageUri={vol1}
              buttonText={"Learn more"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div id="textimgcard" className='flex justify-center items-center mx-auto'>
            <TextImageCard 
              head={"Youth Volunteer"}
              title={"By Josh T"}
              text={"Voluntrix not only connects me to volunteering opportunities, but it also connects me to other like-minded people who care about making a difference. The community aspect has been truly inspiring!"}
              imageUri={vol2}
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