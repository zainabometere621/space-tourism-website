import React from 'react'
import backgroundDesktop from "/assets/a-home-page-images/background.png";  
import backgroundTablet from "/assets/a-home-page-images/backgroundTablet1.png";  

import Header from "../components/Header"

export default function HomePage() {
  return (
    <div className="relative h-screen overflow:hidden"> 
      {/* desktop background */}
      <img 
        src={backgroundDesktop} 
        alt="desktop background" 
        className="absolute inset-0 w-full h-full object-cover -z-10 hidden lg:block" 
      />

      {/* tablet background */}
      <img 
        src={backgroundTablet} 
        alt="tablet background" 
        className="absolute inset-0 w-full h-screen object-cover -z-10 hidden md:block lg:hidden" 
      />

     {/* phone background */}
      <img 
        src={backgroundTablet} 
        alt="phone background" 
        className="absolute inset-0 w-full h-screen object-cover -z-10 block md:hidden" 
      />

      <Header/>

     
      <div 
        className='flex flex-col items-center text-center px-6 py-10 
        md:flex-col md:items-center md:text-center md:px-8 md:py-12
        lg:flex-row lg:justify-between lg:px-32 lg:py-0'> 
        <div 
          className='max-w-xs mt-0 mb-8
          md:mt-1 md:max-w-xs md:mb-6
          lg:mt-24 lg:max-w-md lg:mb-16'> 

          
          <h5 className='text-[14px] tracking-[1.2px] text-white font-barlow font-light uppercase 
            md:text-[14px] md:tracking-[2.5px] 
            lg:text-[25px] lg:tracking-[4.75px]'>
            so, you want to travel to 
          </h5>

          
          <h1 className='text-[80px] tracking-[1.2px] text-white font-bellefair uppercase
            md:text-[100px] md:tracking-[2.5px] 
            lg:text-[125px] lg:tracking-[4.75px]'>
            space
          </h1>

         
          <p className='text-[12px] leading-loose  sm:tracking-[1.5px] mt-2 text-white font-barlow font-light   
            md:text-[12px] md:leading-loose tracking-[1.5px] md:mt-0 
            lg:text-[13px] lg:tracking-[3.5px]'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
            a truly out of this world experience!
          </p>
        </div>

       {/* buttons */}
        <div 
          className='mt-[50px] mr-0
          md:mt-6 md:mr-0
          lg:mt-32 lg:mr-20'> 
          <button 
            className="rounded-full w-32 h-32 text-xs bg-white text-[#0b0d17] font-barlow tracking-[2px]
            flex items-center justify-center transition-all duration-500 ease-in-out
            hover:ring-[20px] hover:ring-gray-800
            md:w-32 md:h-32 md:text-base md:hover:ring-[25px]
            lg:w-52 lg:h-52 lg:text-xl lg:hover:ring-[45px]">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  )
}
