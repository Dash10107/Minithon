import { motion } from 'framer-motion';
import React from 'react'

// icons
import { IoIosArrowForward, IoIosArrowRoundForward  } from "react-icons/io";

const Button = ({ text, arrowType, mode, rounded }) => {
  return (
    <>
        <motion.button
          whileHover={{
            scale: 1.1,
            x:10,
            y:-10,
            transition: { duration: 0.3 },
          }}
          className={`z-10 p-2 px-4 text-xl font-semibold ${rounded && "w-full"} flex items-center ${rounded ? "rounded-full" : "rounded-md"} ${mode === "dark" ? "bg-blacks text-grays" : ""}`}
        >
            {text}
            {
                arrowType === "minimal" ? <IoIosArrowForward size={25}/>
                : <IoIosArrowRoundForward size={25}/>
            }    
        </motion.button>
    </>
  )
}

export default Button