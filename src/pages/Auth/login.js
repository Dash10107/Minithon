import Header from '@/components/Header'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '@/context/ThemeContext'
import InputField from '@/components/InputField'
import { motion } from 'framer-motion'
import { IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'


const login = () => {

  const text = " We're two best friends who share a love for coding and building cool stuff. With a few years of hands-on experience, we’ve worked as freelance developers and interned at places like Innovation Hacks AI and Vital Solutions, picking up skills in both frontend and backend development. Our journey into the world of tech started back in high school, and we’ve been hooked ever since. Whether it’s solving problems or creating new projects, we’re always up for the challenge and excited to keep learning and growing together "

  const { setNeonDark, neonDark, login, user } = useContext(ThemeContext)
  
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true)
    
    const handleSignup = async (e) => {
        e.preventDefault();
        const success = login(email, password);
        console.log(success)
        if (!success) {
            setError('Invalid username or password');
        } else {
            window.location.assign('/');  // Redirect to dashboard upon login
        }
    }

    useEffect(() => {
      if(user !== "" || user !== null){
        window.location.assign('/Auth/profile');  // Redirect to dashboard upon login
      }
    }, [])
    

  return (
    <>
        <div id="container" className={` ${neonDark && "bg-[#0d0d0d] text-white"} `}>
            <Header 
                text1={"Join us for community park cleanup"} 
                text2={"Shivaji Maidan - Sep 23"} 
                linktext={"profiles"}
                setNeonDark={setNeonDark}
                neonDark={neonDark}
                tabs={[
                    { name: "Home", link: "/" },
                    { name: "About", link: "/about" },
                    { name: "Events", link: "/Events/event"},
                    { name: "Profile", link: "/Auth/profile" },
                    { name: "Calendar", link: "/Calendar/calendar" },
                ]} 
            />

            <div id="container" className={`h-screen flex flex-col gap-2 justify-center items-center p-4 `}>
                <div>
                    <div className='flex flex-col gap-2'>
                        <InputField 
                            placeholder={"Your Email"} 
                            type={"email"} 
                            value={email} 
                            textFunc={(e) => setEmail(e.target.value)} 
                        />

                        <InputField 
                            placeholder={"Your Password"} 
                            type={"password"} 
                            value={password} 
                            textFunc={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <div className='flex justify-center mt-2'>
                        <motion.button
                            onClick={handleSignup}
                            className={`z-10 text-white p-2 px-4 text-xl font-semibold flex justify-center w-full items-center rounded-md bg-blacks`}
                        >
                            SignUp
                            <motion.div 
                                whileHover={{
                                    x:10,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <IoIosArrowForward size={25}/>
                            </motion.div>
                                
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default login