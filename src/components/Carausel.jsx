// // components/ImageCarousel.js
// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// const ImageCarousel = ({ images }) => {


//   return (
//     //this is for the carausel to be in the center of the page and you can modify the size over here as well
//     <div id="container" className='
//     flex justify-center items-center
//     '>
//       {/* just change this height and width to change the carausel size */}
//           <div className="
//           ">

          
//           <Carousel
//             showIndicators={false}
//             showStatus={false}
//             showThumbs={false}
//             autoPlay={true}
//             interval={3000}
//             infiniteLoop={true}
//           >           
//             {images?.map((image, index) => (
//               <div key={index} 
//               className="
//               w-[100%]
//               h-[100%]
//               flex
//               justify-center
//               items-center
//               "
//               >
//                 <img
//                   src={image}
//                   alt={image}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </div>
//             ))}
//             </Carousel>

//           </div>
//     </div>
//   );
// };

// export default ImageCarousel;


import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
  return (
    <div id="container" className='flex justify-center items-center'>
      <div>
        <Carousel
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
        >
          {images?.map((image, index) => (
            <div key={index} className="w-[100%] h-[100%] flex justify-center items-center">
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                width={800}
                height={400} // adjust these as per your requirement
                objectFit="cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
