// import React, {useState} from 'react'
// import background from "../assets/b-destination-images/background.jpg"
// import Header from "../components/Header"
// import destinations from "../data/destinationPage"

// export default function Destination() {
// const [activeIndex, setActiveIndex] = useState(0);
// const activeDestination = destinations[activeIndex]
//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center "
//         style={{ backgroundImage: `url(${background})` }}>

//       < Header/>
//       <div className='flex font-barlow text-[25px] tracking-[5px] gap-2 pl-[150px] mt-[40px]'>
//         <h2 className='text-gray-700 font-extrabold '>01</h2>
//         <h2 className='text-[#ffffff]'>PICK YOUR DESTINATION</h2>
//       </div>
        
//       <div className='flex justify-center gap-[200px] '>
        
        
//         <div className=' relative left-[100px] mt-[50px] '>
//           <img 
//           src={activeDestination.image} 
//           alt={activeDestination.image}
//           className='h-[345px] w-[345px]'
//           />
//         </div>
        
        
//         <div className=' ml-[100px] mt-[35px] ' >
//           <nav className="text-[#ffffff] uppercase">
//             <ul className='flex  gap-[30px] cursor-pointer font-barlow text-xs tracking-[2.5px] h-full '>
              
//               {destinations.map((dest, index) => (
//                 <li
//                   key={dest.name}
//                   onClick={() => setActiveIndex(index)}
//                   className={`flex items-center pb-2 ${
//                     activeIndex === index
//                       ? "border-b-2 border-white"
//                       : "border-b-2 border-transparent hover:border-gray-500"
//                   }`}
//                 >
//                   {dest.name}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className='max-w-sm'>
//             <h1 className='uppercase font-bellefair text-[80px] mt-[15px] tracking-[4.75px] text-[#ffffff]'>{activeDestination.name}</h1>
//             <p className='font-barlow text-xs tracking-[2.5px] text-[#D0D6F9] font-light'>
//               {activeDestination.description}
//             </p>
//             <div className='flex-1 mt-[40px]'>
//               <hr className='border-gray-600 border-t' />
//             </div>
//           </div> 
//           <div className='flex uppercase text-[#ffffff] gap-[50px] tracking-[2.5px] mt-[20px]'>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] font-light'>avg. distance</h4>
//               <h3 className='font-bellefair text-2xl'>{activeDestination.distance}</h3>
//             </div>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] font-light'>est. travel time</h4>
//               <h3 className='font-bellefair text-2xl'>{activeDestination.travel}</h3>
//             </div>
//           </div> 
//         </div>
        
//       </div>  
//     </div>
//   )

// }





// import React, {useState} from 'react'
// import background from "../assets/b-destination-images/background.jpg"
// import Header from "../components/Header"
// import destinations from "../data/destinationPage"

// export default function Destination() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeDestination = destinations[activeIndex];

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center" // ✅ fixed to screen height
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />

//       {/* === Title Section === */}
//       <div className='flex justify-center md:justify-start font-barlow text-[16px] md:text-[20px] lg:text-[25px] tracking-[2px] md:tracking-[3px] lg:tracking-[5px] gap-2 px-4 md:px-8 lg:pl-[150px] mt-6 lg:mt-[40px]'>
//         <h2 className='text-gray-700 font-extrabold'>01</h2>
//         <h2 className='text-white'>PICK YOUR DESTINATION</h2>
//       </div>
        
//       {/* === Main Content === */}
//       <div className='flex flex-col items-center mt-6 gap-6
//                       md:flex-col md:gap-8
//                       lg:flex-row lg:justify-center lg:gap-[200px] lg:mt-0'>
        
//         {/* === Image === */}
//         <div className='mt-2 md:mt-4 lg:relative lg:left-[100px]'>
//           <img 
//             src={activeDestination.image} 
//             alt={activeDestination.name}
//             className='h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[345px] lg:w-[345px]' // ✅ smaller for phone/tablet
//           />
//         </div>
        
//         {/* === Right Section === */}
//         <div className='flex flex-col items-center text-center 
//                         md:items-center md:text-center 
//                         lg:items-start lg:text-left lg:ml-[100px] mt-4 lg:mt-[35px]'>
          
//           {/* Nav Tabs */}
//           <nav className="text-white uppercase mt-4 md:mt-0">
//             <ul className='flex gap-4 md:gap-6 lg:gap-[30px] cursor-pointer font-barlow text-[10px] md:text-xs lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px]'>
//               {destinations.map((dest, index) => (
//                 <li
//                   key={dest.name}
//                   onClick={() => setActiveIndex(index)}
//                   className={`flex items-center pb-1 md:pb-2 ${
//                     activeIndex === index
//                       ? "border-b-2 border-white"
//                       : "border-b-2 border-transparent hover:border-gray-500"
//                   }`}
//                 >
//                   {dest.name}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Text Content */}
//           <div className='max-w-xs md:max-w-md lg:max-w-sm mt-4'>
//             <h1 className='uppercase font-bellefair text-[40px] md:text-[60px] lg:text-[80px] mt-[10px] tracking-[2px] md:tracking-[3px] lg:tracking-[4.75px] text-white'>
//               {activeDestination.name}
//             </h1>
//             <p className='font-barlow text-[12px] md:text-[14px] lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] text-[#D0D6F9] font-light mt-2'>
//               {activeDestination.description}
//             </p>
//             <div className='mt-6 md:mt-8 lg:mt-[40px] w-full'>
//               <hr className='border-gray-600 border-t' />
//             </div>
//           </div> 

//           {/* Stats Section */}
//           <div className='flex flex-col md:flex-row justify-center md:justify-between text-white uppercase gap-6 md:gap-[50px] tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] mt-6'>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] md:text-[11px] lg:text-[10px] font-light'>avg. distance</h4>
//               <h3 className='font-bellefair text-lg md:text-xl lg:text-2xl'>{activeDestination.distance}</h3>
//             </div>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] md:text-[11px] lg:text-[10px] font-light'>est. travel time</h4>
//               <h3 className='font-bellefair text-lg md:text-xl lg:text-2xl'>{activeDestination.travel}</h3>
//             </div>
//           </div> 
//         </div>
//       </div>  
//     </div>
//   )
// }



// import React, {useState} from 'react'
// import background from "../assets/b-destination-images/background.jpg"
// import Header from "../components/Header"
// import destinations from "../data/destinationPage"

// export default function Destination() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeDestination = destinations[activeIndex];

//   return (
//     <div 
//       className="h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />

//       {/* === Title Section === */}
//       <div className='flex justify-center md:justify-start font-barlow text-[16px] md:text-[20px] lg:text-[25px] tracking-[2px] md:tracking-[3px] lg:tracking-[5px] gap-2 px-4 md:px-8 lg:pl-[150px] mt-2 lg:mt-[40px]'>
//         <h2 className='text-gray-700 font-extrabold'>01</h2>
//         <h2 className='text-white'>PICK YOUR DESTINATION</h2>
//       </div>
        
//       {/* === Main Content === */}
//       <div className='flex flex-col items-center mt-2 gap-4
//                       md:flex-col md:gap-6 md:mt-4
//                       lg:flex-row lg:justify-center lg:gap-[200px] lg:mt-0'>
        
//         {/* === Image === */}
//         <div className='mt-2 md:mt-0 lg:relative lg:left-[100px] lg:mt-16'>
//           <img 
//             src={activeDestination.image} 
//             alt={activeDestination.name}
//             className='h-[150px] w-[150px] md:h-[180px] md:w-[180px] lg:h-[345px] lg:w-[345px]'
//           />
//         </div>
        
//         {/* === Right Section === */}
//         <div className='flex flex-col items-center text-center 
//                         md:items-center md:text-center 
//                         lg:items-start lg:text-left lg:ml-[100px] mt-2 md:mt-4 lg:mt-[35px]'>
          
//           {/* Nav Tabs */}
//           <nav className="text-white uppercase mt-0 md:mt-0">
//             <ul className='flex gap-4 md:gap-6 lg:gap-[30px] cursor-pointer font-barlow text-[10px] md:text-xs lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px]'>
//               {destinations.map((dest, index) => (
//                 <li
//                   key={dest.name}
//                   onClick={() => setActiveIndex(index)}
//                   className={`flex items-center pb-1 md:pb-2 ${
//                     activeIndex === index
//                       ? "border-b-2 border-white"
//                       : "border-b-2 border-transparent hover:border-gray-500"
//                   }`}
//                 >
//                   {dest.name}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Text Content */}
//           <div className='max-w-xs md:max-w-md lg:max-w-sm mt-0'>
//             <h1 className='uppercase font-bellefair text-[40px] md:text-[40px] lg:text-[80px] mt-[10px] tracking-[2px] md:tracking-[3px] lg:tracking-[4.75px] text-white'>
//               {activeDestination.name}
//             </h1>
//             <p className='font-barlow text-[10px] md:text-[10px] lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] text-[#D0D6F9] font-light mt-0'>
//               {activeDestination.description}
//             </p>
//             <div className='mt-6 md:mt-6 lg:mt-[40px] w-full'>
//               <hr className='border-gray-600 border-t' />
//             </div>
//           </div> 

//           {/* Stats Section */}
//           <div className='flex flex-col md:flex-row justify-center md:justify-between text-white uppercase gap-4 md:gap-[40px] tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] mt-4 md:mt-4'>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>avg. distance</h4>
//               <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.distance}</h3>
//             </div>
//             <div className='space-y-2 mt-4 lg:mt-0 md:mt-0 '>
//               <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>est. travel time</h4>
//               <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.travel}</h3>
//             </div>
//           </div> 
//         </div>
//       </div>  
//     </div>
//   )
// }










// import React, {useState} from 'react'
// import background from "../assets/b-destination-images/background.jpg"
// import Header from "../components/Header"
// import destinations from "../data/destinationPage"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/free-mode';

// export default function Destination() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeDestination = destinations[activeIndex];

//   return (
//     <div 
//       className="h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />

//       {/* === Title Section === */}
//       <div className='flex justify-center md:justify-start font-barlow text-[16px] md:text-[20px] lg:text-[25px] tracking-[2px] md:tracking-[3px] lg:tracking-[5px] gap-2 px-4 md:px-8 lg:pl-[150px] mt-2 lg:mt-[40px]'>
//         <h2 className='text-gray-700 font-extrabold'>01</h2>
//         <h2 className='text-white'>PICK YOUR DESTINATION</h2>
//       </div>

       
//       {/* === Mobile/Tablet Swiper (phone & tablet only) === */}
//     <div className="block lg:hidden mt-4 px-6">
//       <Swiper
//         modules={[FreeMode]}
//         spaceBetween={20}
//         slidesPerView={1}
//         grabCursor={true}
//         freeMode={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         initialSlide={activeIndex}
//         key={activeIndex} // optional: remounts Swiper on activeIndex change to keep sync
//       >
//         {destinations.map((dest) => (
//           <SwiperSlide key={dest.name}>
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="h-[200px] w-[200px] mx-auto object-contain"
//               />
//               <h1 className="uppercase font-bellefair text-[40px] text-white mt-4">
//                 {dest.name}
//               </h1>
//               <p className="text-[#D0D6F9] text-sm font-barlow mt-2">
//                 {dest.description}
//               </p>
//               <div className="flex justify-around w-full mt-6 text-white uppercase">
//                 <div>
//                   <h4 className="font-barlow text-[10px] font-light">avg. distance</h4>
//                   <h3 className="font-bellefair text-lg">{dest.distance}</h3>
//                 </div>
//                 <div>
//                   <h4 className="font-barlow text-[10px] font-light">est. travel time</h4>
//                   <h3 className="font-bellefair text-lg">{dest.travel}</h3>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>


        
//       {/* === Main Content === */}
//       <div className="hidden lg:block">
//           <div className='flex flex-col items-center mt-2 gap-4
//                           md:flex-col md:gap-6 md:mt-4
//                           lg:flex-row lg:justify-center lg:gap-[200px] lg:mt-0'>
            
//             {/* === Image === */}
//             <div className='mt-2 md:mt-0 lg:relative lg:left-[100px] lg:mt-16'>
//               <img 
//                 src={activeDestination.image} 
//                 alt={activeDestination.name}
//                 className='h-[150px] w-[150px] md:h-[180px] md:w-[180px] lg:h-[345px] lg:w-[345px]'
//               />
//             </div>
            
//             {/* === Right Section === */}
//             <div className='flex flex-col items-center text-center 
//                             md:items-center md:text-center 
//                             lg:items-start lg:text-left lg:ml-[100px] mt-2 md:mt-4 lg:mt-[35px]'>
              
//               {/* Nav Tabs */}
//               <nav className="text-white uppercase mt-0 md:mt-0">
//                 <ul className='flex gap-4 md:gap-6 lg:gap-[30px] cursor-pointer font-barlow text-[10px] md:text-xs lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px]'>
//                   {destinations.map((dest, index) => (
//                     <li
//                       key={dest.name}
//                       onClick={() => setActiveIndex(index)}
//                       className={`flex items-center pb-1 md:pb-2 ${
//                         activeIndex === index
//                           ? "border-b-2 border-white"
//                           : "border-b-2 border-transparent hover:border-gray-500"
//                       }`}
//                     >
//                       {dest.name}
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//           </div>
//           {/* Text Content */}
//           <div className='max-w-xs md:max-w-md lg:max-w-sm mt-0'>
//             <h1 className='uppercase font-bellefair text-[40px] md:text-[40px] lg:text-[80px] mt-[10px] tracking-[2px] md:tracking-[3px] lg:tracking-[4.75px] text-white'>
//               {activeDestination.name}
//             </h1>
//             <p className='font-barlow text-[10px] md:text-[10px] lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] text-[#D0D6F9] font-light mt-0'>
//               {activeDestination.description}
//             </p>
//             <div className='mt-6 md:mt-6 lg:mt-[40px] w-full'>
//               <hr className='border-gray-600 border-t' />
//             </div>
//           </div> 

//           {/* Stats Section */}
//           <div className='flex flex-col md:flex-row justify-center md:justify-between text-white uppercase gap-4 md:gap-[40px] tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] mt-4 md:mt-4'>
//             <div className='space-y-2'>
//               <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>avg. distance</h4>
//               <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.distance}</h3>
//             </div>
//             <div className='space-y-2 mt-4 lg:mt-0 md:mt-0 '>
//               <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>est. travel time</h4>
//               <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.travel}</h3>
//             </div>
//           </div> 
//         </div>
//       </div>  
//     </div>
//   )
// }










import React, { useState } from 'react'
import background from "../assets/b-destination-images/background.jpg"
import Header from "../components/Header"
import destinations from "../data/destinationPage"

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

export default function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  return (
    <div 
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />

      {/* === Title Section === */}
      <div className='flex justify-center md:justify-start font-barlow text-[16px] md:text-[20px] lg:text-[25px] tracking-[2px] md:tracking-[3px] lg:tracking-[5px] gap-2 px-4 md:px-8 lg:pl-[150px] mt-2 lg:mt-[40px]'>
        <h2 className='text-gray-700 font-extrabold'>01</h2>
        <h2 className='text-white'>PICK YOUR DESTINATION</h2>
      </div>

      {/* === Mobile/Tablet Swiper (phone & tablet only) === */}
      <div className="block lg:hidden mt-4 px-6">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          freeMode={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
        >
          {destinations.map((dest) => (
            <SwiperSlide key={dest.name}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-[200px] w-[200px] mx-auto object-contain"
                />
                <h1 className="uppercase font-bellefair text-[40px] text-white mt-4">
                  {dest.name}
                </h1>
                <p className="text-[#D0D6F9] text-sm font-barlow mt-2">
                  {dest.description}
                </p>
                <div className="flex justify-around w-full mt-6 text-white uppercase">
                  <div>
                    <h4 className="font-barlow text-[10px] font-light">avg. distance</h4>
                    <h3 className="font-bellefair text-lg">{dest.distance}</h3>
                  </div>
                  <div>
                    <h4 className="font-barlow text-[10px] font-light">est. travel time</h4>
                    <h3 className="font-bellefair text-lg">{dest.travel}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Desktop Main Content === */}
      <div className="hidden lg:block">
        <div className='flex flex-col items-center mt-2 gap-4
                        md:flex-col md:gap-6 md:mt-4
                        lg:flex-row lg:justify-center lg:gap-[200px] lg:mt-0'>
          
          {/* === Image === */}
          <div className='mt-2 md:mt-0 lg:relative lg:left-[100px] lg:mt-16'>
            <img 
              src={activeDestination.image} 
              alt={activeDestination.name}
              className='h-[150px] w-[150px] md:h-[180px] md:w-[180px] lg:h-[345px] lg:w-[345px]'
            />
          </div>
          
          {/* === Right Section === */}
          <div className='flex flex-col items-center text-center 
                          md:items-center md:text-center 
                          lg:items-start lg:text-left lg:ml-[100px] mt-2 md:mt-4 lg:mt-[35px]'>

            {/* Nav Tabs */}
            <nav className="text-white uppercase mt-0 md:mt-0">
              <ul className='flex gap-4 md:gap-6 lg:gap-[30px] cursor-pointer font-barlow text-[10px] md:text-xs lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px]'>
                {destinations.map((dest, index) => (
                  <li
                    key={dest.name}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center pb-1 md:pb-2 ${
                      activeIndex === index
                        ? "border-b-2 border-white"
                        : "border-b-2 border-transparent hover:border-gray-500"
                    }`}
                  >
                    {dest.name}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Text Content */}
            <div className='max-w-xs md:max-w-md lg:max-w-sm mt-0'>
              <h1 className='uppercase font-bellefair text-[40px] md:text-[40px] lg:text-[80px] mt-[10px] tracking-[2px] md:tracking-[3px] lg:tracking-[4.75px] text-white'>
                {activeDestination.name}
              </h1>
              <p className='font-barlow text-[10px] md:text-[10px] lg:text-xs tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] text-[#D0D6F9] font-light mt-0'>
                {activeDestination.description}
              </p>
              <div className='mt-6 md:mt-6 lg:mt-[40px] w-full'>
                <hr className='border-gray-600 border-t' />
              </div>
            </div> 

            {/* Stats Section */}
            <div className='flex flex-col md:flex-row justify-center md:justify-between text-white uppercase gap-4 md:gap-[40px] tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] mt-4 md:mt-4'>
              <div className='space-y-2'>
                <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>avg. distance</h4>
                <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.distance}</h3>
              </div>
              <div className='space-y-2 mt-4 lg:mt-0 md:mt-0 '>
                <h4 className='font-barlow text-[10px] md:text-[8px] lg:text-[10px] font-light'>est. travel time</h4>
                <h3 className='font-bellefair text-lg md:text-[15px] lg:text-2xl'>{activeDestination.travel}</h3>
              </div>
            </div> 

          </div> {/* closes Right Section */}
        </div>
      </div>  
    </div>
  )
}
