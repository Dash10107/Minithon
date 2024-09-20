import React from 'react'
import { motion } from 'framer-motion';

const InputField = ({ type, placeholder, value, textFunc }) => {
  return (
    <>
        <div id="field-container">
            <motion.input 
                whileHover={{
                    boxShadow: '0px 0px 10px rgba(00, 00, 00)',
                    transition: {
                      duration: 0.5,
                      type: 'tween',
                      ease: 'easeInOut',
                    },
                }} 
                type={type === "password" ? 'password' : 'email'} 
                placeholder={placeholder} 
                className="text-xl p-3 px-5 w-full rounded-lg border-2 border-black bg-[#FFFFFF] placeholder-[#000000]" 
                value={value} 
                onChange={textFunc} 
            />
        </div>
    </>
  )
}

export default InputField;
