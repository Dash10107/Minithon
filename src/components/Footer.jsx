import React from 'react'

// icons
import { CiFacebook, CiFaceFrown, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
        <div id="container" >
            <div id="upper" className='bg-blacks text-grays p-10 grid grid-cols-2 gap-10 md:flex justify-between items-center'>
                <ul className='flex flex-col gap-4 '>
                    <p className='font-bold'>Help & Support</p>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'>Check Status</a></li>
                    <li><a href='#'>Return</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <p className='font-bold'>Pages</p>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <p className='font-bold'>FAQ's</p>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'> Terms & Conditions</a></li>
                    <li><a href='#'> Privacy Policy</a></li>
                </ul>
            </div>
            <div id="lower" className='p-5 md:flex justify-around items-center'>
                <div id="icons" className='flex justify-between md:gap-10'>
                    <CiTwitter size={25}/>
                    <CiInstagram size={25}/>
                    <CiFacebook size={25}/>
                </div>
                <div className='flex justify-around gap-3 md:gap-24 mt-10'>
                    <p className='underline'>Privacy Policy</p>
                    <p className='underline'>Terms of Service</p>
                    <p className='underline'>Cookie Policy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer