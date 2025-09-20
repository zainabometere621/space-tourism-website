// import React from 'react'

// import background from "../assets/a-home-page-images/background.png"; 
// import Header from "../components/Header"

// export default function HomePage() {
//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center "
//       style={{ backgroundImage: `url(${background})` }} >
//       < Header/>
//       <div className='flex justify-between px-16 py-20'>
//         <div className='max-w-sm mt-20'>
//           <h5 className='text-[#ffffff] font-barlow text-[25px] tracking-[4.75px] uppercase font-light'>so, you want to travel to </h5>
//           <h1 className='font-bellefair text-[125px]  tracking-[4.75px] text-[#ffffff] [text-shadow:_none] uppercase'>space</h1>
//           <p className='font-barlow text-xs tracking-[2.5px] text-[#ffffff] font-light'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
//         </div>
//         <div className='mt-44 mr-20'>
//           <button className="rounded-full w-52 h-52 bg-[#ffffff] text-[#0b0d17] font-barlow text-xl tracking-[2.5px] flex items-center justify-center transition-all duration-500 ease-in-out  hover:ring-[45px] hover:ring-gray-700  ">
//             EXPLORE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }



// import React from 'react'
// import background from "../assets/a-home-page-images/background.png"; 
// import Header from "../components/Header"

// export default function HomePage() {
//   return (
//     <div 
//       className="
//         min-h-screen bg-cover bg-center  /* ✅ default desktop background */
//         md:bg-[position:right]                  /* ✅ tablet background reposition */
//         lg:bg-center                    /* ✅ force desktop background back */
//       "
//       style={{ backgroundImage: `url(${background})` }} >
//       <Header/>

//       <div className='flex justify-between px-16 py-20 
//                       md:flex-col md:items-center md:text-center md:px-8 md:py-12
//                       lg:flex-row lg:justify-between lg:px-16 lg:py-20'> 
//         {/* ✅ md: stack items, lg: restore row layout */}
        
//         <div className='max-w-sm mt-20 
//                         md:mt-12 md:max-w-md 
//                         lg:mt-20 lg:max-w-sm'> 
//           {/* ✅ tablet: reduce margin-top & expand width, desktop restored */}
//           <h5 className='text-[#ffffff] font-barlow text-[25px] tracking-[4.75px] uppercase font-light
//                          md:text-[20px] md:tracking-[3px]
//                          lg:text-[25px] lg:tracking-[4.75px]'>
//             so, you want to travel to 
//           </h5>

//           <h1 className='font-bellefair text-[125px] tracking-[4.75px] text-[#ffffff] uppercase
//                          md:text-[90px] md:tracking-[3px]
//                          lg:text-[125px] lg:tracking-[4.75px]'>
//             space
//           </h1>

//           <p className='font-barlow text-xs tracking-[2.5px] text-[#ffffff] font-light
//                         md:text-sm md:leading-relaxed md:mt-4
//                         lg:text-xs lg:tracking-[2.5px]'>
//             Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
//             and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
//             a truly out of this world experience!
//           </p>
//         </div>

//         <div className='mt-44 mr-20 
//                         md:mt-16 md:mr-0
//                         lg:mt-44 lg:mr-20'> 
//           {/* ✅ md: center button, lg: restore original desktop */}
//           <button className="rounded-full w-52 h-52 bg-[#ffffff] text-[#0b0d17] font-barlow text-xl tracking-[2.5px] 
//                              flex items-center justify-center transition-all duration-500 ease-in-out  
//                              hover:ring-[45px] hover:ring-gray-700
//                              md:w-40 md:h-40 md:text-lg
//                              lg:w-52 lg:h-52 lg:text-xl">
//             EXPLORE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }





// import React from 'react'

// import backgroundDesktop from "../assets/a-home-page-images/background.png";  
// import backgroundTablet from "../assets/a-home-page-images/backgroundTablet1.png";  

// import Header from "../components/Header"

// export default function HomePage() {
//   return (
//     <div className="relative min-h-screen"> 
//       {/* ✅ Desktop background */}
//       <img 
//         src={backgroundDesktop} 
//         alt="desktop background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 hidden lg:block" 
//       />

//       {/* ✅ Tablet background */}
//       <img 
//         src={backgroundTablet} 
//         alt="tablet background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 hidden md:block lg:hidden" 
//       />

//       <Header/>

//       <div className='flex justify-between px-16 py-20 
//                       md:flex-col md:items-center md:text-center md:px-8 md:py-12
//                       lg:flex-row lg:justify-between lg:px-32 lg:py-20'> 
        
//         <div className='max-w-sm mt-20 mb-16
//                         md:mt-4 md:max-w-md md:mb-6   /* ✅ lifted up a bit on tablet */
//                         lg:mt-6 lg:max-w-sm lg:mb-16'> 
//           <h5 className='text-[#ffffff] font-barlow text-[25px] tracking-[4.75px] uppercase font-light
//                          md:text-[18px] md:tracking-[2px]   /* ✅ smaller on tablet */
//                          lg:text-[25px] lg:tracking-[4.75px]'>
//             so, you want to travel to 
//           </h5>

//           <h1 className='font-bellefair text-[125px] tracking-[4.75px] text-[#ffffff] uppercase
//                          md:text-[70px] md:tracking-[2px]   /* ✅ reduced size on tablet */
//                          lg:text-[125px] lg:tracking-[4.75px]'>
//             space
//           </h1>

//           <p className='font-barlow text-xs tracking-[2.5px] text-[#ffffff] font-light
//                         md:text-[13px] md:leading-relaxed md:mt-3   /* ✅ smaller + tighter on tablet */
//                         lg:text-xs lg:tracking-[2.5px]'>
//             Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
//             and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
//             a truly out of this world experience!
//           </p>
//         </div>

//         <div className='mt-44 mr-20 
//                         md:mt-6 md:mr-0   /* ✅ lifted button on tablet */
//                         lg:mt-32 lg:mr-20'> 
//           <button className="rounded-full w-52 h-52 bg-[#ffffff] text-[#0b0d17] font-barlow text-xl tracking-[2.5px] 
//                              flex items-center justify-center transition-all duration-500 ease-in-out  
//                              hover:ring-[45px] hover:ring-gray-800
//                              md:w-32 md:h-32 md:text-base md:hover:ring-[25px]   /* ✅ shrunk button + hover for tablet */
//                              lg:w-52 lg:h-52 lg:text-xl lg:hover:ring-[45px]">
//             EXPLORE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }



// import React from 'react'

// import backgroundDesktop from "../assets/a-home-page-images/background.png";  
// import backgroundTablet from "../assets/a-home-page-images/backgroundTablet1.png";  

// import Header from "../components/Header"

// export default function HomePage() {
//   return (
//     <div className="relative min-h-screen"> 
//       {/* ✅ Desktop background */}
//       <img 
//         src={backgroundDesktop} 
//         alt="desktop background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 hidden lg:block" 
//       />

//       {/* ✅ Tablet background */}
//       <img 
//         src={backgroundTablet} 
//         alt="tablet background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 block lg:hidden" 
//       />

//       <Header/>

//       <div className='flex justify-between px-16 py-20 
//                       md:flex-col md:items-center md:text-center md:px-8 md:py-12
//                       lg:flex-row lg:justify-between lg:px-32 lg:py-20'> 
        
//         <div className='max-w-sm mt-20 mb-16
//                         sm:mt-6 sm:max-w-xs sm:mb-4   /* 📱 phone: lifted and tightened */
//                         md:mt-4 md:max-w-md md:mb-6   /* ✅ tablet */
//                         lg:mt-6 lg:max-w-sm lg:mb-16'> 
//           <h5 className='text-[#ffffff] font-barlow text-[25px] tracking-[4.75px] uppercase font-light
//                          sm:text-[14px] sm:tracking-[1.5px]   /* 📱 phone: smaller */
//                          md:text-[18px] md:tracking-[2px]     /* ✅ tablet */
//                          lg:text-[25px] lg:tracking-[4.75px]'>
//             so, you want to travel to 
//           </h5>

//           <h1 className='font-bellefair text-[125px] tracking-[4.75px] text-[#ffffff] uppercase
//                          sm:text-[50px] sm:tracking-[1px]    /* 📱 phone: reduced size */
//                          md:text-[70px] md:tracking-[2px]    /* ✅ tablet */
//                          lg:text-[125px] lg:tracking-[4.75px]'>
//             space
//           </h1>

//           <p className='font-barlow text-xs tracking-[2.5px] text-[#ffffff] font-light
//                         sm:text-[11px] sm:leading-snug sm:mt-2   /* 📱 phone: smaller + tighter */
//                         md:text-[13px] md:leading-relaxed md:mt-3 /* ✅ tablet */
//                         lg:text-xs lg:tracking-[2.5px]'>
//             Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
//             and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
//             a truly out of this world experience!
//           </p>
//         </div>

//         <div className='mt-44 mr-20 
//                         sm:mt-4 sm:mr-0   /* 📱 phone: lifted button */
//                         md:mt-6 md:mr-0   /* ✅ tablet */
//                         lg:mt-32 lg:mr-20'> 
//           <button className="rounded-full w-52 h-52 bg-[#ffffff] text-[#0b0d17] font-barlow text-xl tracking-[2.5px] 
//                              flex items-center justify-center transition-all duration-500 ease-in-out  
//                              hover:ring-[45px] hover:ring-gray-800
//                              sm:w-24 sm:h-24 sm:text-sm sm:hover:ring-[18px]   /* 📱 phone: smaller button + hover */
//                              md:w-32 md:h-32 md:text-base md:hover:ring-[25px] /* ✅ tablet */
//                              lg:w-52 lg:h-52 lg:text-xl lg:hover:ring-[45px]">
//             EXPLORE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// import React from 'react'

// import backgroundDesktop from "../assets/a-home-page-images/background.png";  
// import backgroundTablet from "../assets/a-home-page-images/backgroundTablet1.png";  

// import Header from "../components/Header"

// export default function HomePage() {
//   return (
//     <div className="relative min-h-screen"> 
//       {/* ✅ Desktop background */}
//       <img 
//         src={backgroundDesktop} 
//         alt="desktop background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 hidden lg:block" 
//       />

//       {/* ✅ Tablet background */}
//       <img 
//         src={backgroundTablet} 
//         alt="tablet background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 hidden md:block lg:hidden" 
//       />

//       {/* ✅ Phone background (same as tablet) */}
//       <img 
//         src={backgroundTablet} 
//         alt="phone background" 
//         className="absolute inset-0 w-full h-screen object-cover -z-10 block md:hidden" 
//       />

//       <Header/>

//       <div className='flex justify-between px-6 py-10 
//                       md:flex-col md:items-center md:text-center md:px-8 md:py-12
//                       lg:flex-row lg:justify-between lg:px-32 lg:py-20'> 
        
//         {/* ===== Left Text Section ===== */}
//         <div className='max-w-sm mt-10 mb-8
//                         md:mt-4 md:max-w-md md:mb-6
//                         lg:mt-6 lg:max-w-sm lg:mb-16'> 

//           {/* small heading */}
//           <h5 className='text-[12px] tracking-[1px] text-white font-barlow font-light uppercase
//                          md:text-[18px] md:tracking-[2px]
//                          lg:text-[25px] lg:tracking-[4.75px]'>
//             so, you want to travel to 
//           </h5>

//           {/* main heading */}
//           <h1 className='text-[40px] tracking-[1px] text-white font-bellefair uppercase
//                          md:text-[70px] md:tracking-[2px]
//                          lg:text-[125px] lg:tracking-[4.75px]'>
//             space
//           </h1>

//           {/* paragraph */}
//           <p className='text-[10px] leading-snug mt-2 text-white font-barlow font-light
//                         md:text-[13px] md:leading-relaxed md:mt-3
//                         lg:text-xs lg:tracking-[2.5px]'>
//             Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
//             and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
//             a truly out of this world experience!
//           </p>
//         </div>

//         {/* ===== Explore Button ===== */}
//         <div className='mt-12 mr-0
//                         md:mt-6 md:mr-0
//                         lg:mt-32 lg:mr-20'> 
//           <button className="rounded-full w-20 h-20 text-xs bg-white text-[#0b0d17] font-barlow tracking-[2px]
//                              flex items-center justify-center transition-all duration-500 ease-in-out
//                              hover:ring-[15px] hover:ring-gray-800
//                              md:w-32 md:h-32 md:text-base md:hover:ring-[25px]
//                              lg:w-52 lg:h-52 lg:text-xl lg:hover:ring-[45px]">
//             EXPLORE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'

import backgroundDesktop from "../assets/a-home-page-images/background.png";  
import backgroundTablet from "../assets/a-home-page-images/backgroundTablet1.png";  

import Header from "../components/Header"

export default function HomePage() {
  return (
    <div className="relative h-screen overflow:hidden"> 
      {/* ✅ Desktop background */}
      <img 
        src={backgroundDesktop} 
        alt="desktop background" 
        className="absolute inset-0 w-full h-full object-cover -z-10 hidden lg:block" 
      />

      {/* ✅ Tablet background */}
      <img 
        src={backgroundTablet} 
        alt="tablet background" 
        className="absolute inset-0 w-full h-screen object-cover -z-10 hidden md:block lg:hidden" 
      />

      {/* ✅ Phone background (same as tablet) */}
      <img 
        src={backgroundTablet} 
        alt="phone background" 
        className="absolute inset-0 w-full h-screen object-cover -z-10 block md:hidden" 
      />

      <Header/>

      {/* 🔥 phone inherits tablet structure */}
      <div className='flex flex-col items-center text-center px-6 py-10 
                      md:flex-col md:items-center md:text-center md:px-8 md:py-12
                      lg:flex-row lg:justify-between lg:px-32 lg:py-0'> 
      
        {/* ===== Left Text Section ===== */}
        <div className='max-w-xs mt-0 mb-8
                        md:mt-1 md:max-w-xs md:mb-6
                        lg:mt-24 lg:max-w-md lg:mb-16'> 

          {/* small heading */}
          <h5 className='text-[14px] tracking-[1.2px] text-white font-barlow font-light uppercase 
                         md:text-[14px] md:tracking-[2.5px]   /* 🔥 tablet bigger */
                         lg:text-[25px] lg:tracking-[4.75px]'>
            so, you want to travel to 
          </h5>

          {/* main heading */}
          <h1 className='text-[80px] tracking-[1.2px] text-white font-bellefair uppercase   /* 🔥 phone bigger */
                         md:text-[100px] md:tracking-[2.5px]   /* 🔥 tablet bigger */
                         lg:text-[125px] lg:tracking-[4.75px]'>
            space
          </h1>

          {/* paragraph */}
          <p className='text-[12px] leading-loose  sm:tracking-[1.5px] mt-2 text-white font-barlow font-light   /* 🔥 phone bigger */
                        md:text-[12px] md:leading-loose tracking-[1.5px] md:mt-0   /* 🔥 tablet bigger + 4 lines */
                        lg:text-[13px] lg:tracking-[3.5px]'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you 
            a truly out of this world experience!
          </p>
        </div>

        {/* ===== Explore Button ===== */}
        <div className='mt-12 mr-0
                        md:mt-6 md:mr-0
                        lg:mt-32 lg:mr-20'> 
          <button className="rounded-full w-32 h-32 text-xs bg-white text-[#0b0d17] font-barlow tracking-[2px]
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
