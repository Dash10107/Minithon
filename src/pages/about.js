import Header from '@/components/Header'
import TriImageGrid from '@/components/TriImageGrid'
import React from 'react'

const about = () => {
  return (
    <>
        <div id="container">
            <Header 
                text1={"The winner for Minithon is"} 
                text2={"Zucky the Lizard"} 
                linktext={"profiles"}
                tabs={[
                  {name: "Home", link: "/", underline: false},
                  {name: "About", link: "/about", underline: true},
                  {name: "Contact", link: "/contact", underline: false}
                ]}  
            />

            <TriImageGrid 
                text={"Most Reliable developer Duo when it comes to efficiency"}
                image={['https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=', 'https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg', 'https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=']}
            />
        </div>
    </>
  )
}

export default about